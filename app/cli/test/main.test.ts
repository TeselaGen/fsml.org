import {
  afterAll,
  beforeAll,
  describe,
  it,
} from "https://deno.land/std@0.166.0/testing/bdd.ts";
import { assertEquals } from "https://deno.land/std@0.148.0/testing/asserts.ts";
import { DEFAULT_CONFIGS, getConfigs } from "../src/handlers/defaults/utils.ts";
import difference from "https://deno.land/x/lodash@4.17.15-es/difference.js";
import get from "https://deno.land/x/lodash@4.17.15-es/get.js";
import { generateManifest } from "../src/handlers/manifest/utils.ts";
import { ManifestTypes } from "../src/types/enums.ts";
import { assertExists } from "https://deno.land/std/testing/asserts.ts";
import { fixturePath } from "./supports/mod.ts";
import { install, uninstall, upgrade } from "../src/handlers/plugins/mod.ts";
import { getRegisteredModule } from "../src/handlers/plugins/registry.ts";
import { Arguments } from "../src/deps/yargs.ts";

describe("defaults list", async () => {
  const allSections = await getConfigs();
  const manifestSection = await getConfigs({ section: "manifest" });

  const expectedDefaultSections = Object.keys(DEFAULT_CONFIGS);
  const defaultSections = Object.keys(allSections);
  assertEquals(difference(defaultSections, expectedDefaultSections).length, 0);

  const expectedManifestDefaults = Object.keys(DEFAULT_CONFIGS.manifest);
  const manifestDefaults = Object.keys(manifestSection);
  assertEquals(
    difference(manifestDefaults, expectedManifestDefaults).length,
    0,
  );
});

describe("manifest create", async () => {
  const fixtureFilepath = fixturePath("example_data.csv");

  const manifest = await generateManifest({
    parser: "",
    type: ManifestTypes.DATA,
    filepattern: fixtureFilepath,
    author: "deno-test",
  });

  assertExists(manifest);

  const rows = get(manifest, "supplementalInfo.data[0].rows");

  assertEquals(rows[0].values.length, 7);
  assertEquals(rows.length, 147);
});

describe("plugin commands", () => {
  const MODULE_NAME = "lodash";
  const MODULE_VERSION_3 = "3.9.0";
  const MODULE_VERSION_3_PATCH = "3.9.3";
  const MODULE_VERSION_3_MINOR = "3.10.1";
  const MODULE_VERSION_3_MAJOR = "4.17.21";

  async function cleanTestPlugin() {
    await uninstall({ module: MODULE_NAME, _: [] });
  }

  beforeAll(cleanTestPlugin);
  afterAll(cleanTestPlugin);

  it("install", async () => {
    const args = {
      module: `${MODULE_NAME}@${MODULE_VERSION_3}`,
      _: [],
    };
    await install(args);

    const pluginModule = await getRegisteredModule({ name: MODULE_NAME });

    assertExists(pluginModule);
    assertEquals(pluginModule.name, MODULE_NAME);
    assertEquals(pluginModule.version, MODULE_VERSION_3);
    assertEquals(pluginModule.uriScheme, "https");
  });

  it("upgrade patch", async () => {
    const args: Arguments = {
      module: MODULE_NAME,
      _: [],
    };
    // Patch
    args.patch = true;
    await upgrade(args);
    let pluginModule = await getRegisteredModule({ name: MODULE_NAME });
    assertEquals(pluginModule.version, MODULE_VERSION_3_PATCH);

    // Minor
    args.patch = false;
    args.minor = true;
    await upgrade(args);
    pluginModule = await getRegisteredModule({ name: MODULE_NAME });
    assertEquals(pluginModule.version, MODULE_VERSION_3_MINOR);

    // Major
    args.minor = false;
    args.major = true;
    await upgrade(args);
    pluginModule = await getRegisteredModule({ name: MODULE_NAME });
    assertEquals(
      pluginModule.version.split(".")[0],
      MODULE_VERSION_3_MAJOR.split(".")[0],
    );
  });

  it("uninstall", async () => {
    const args = {
      module: MODULE_NAME,
      _: [],
    };
    await uninstall(args);

    const pluginModule = await getRegisteredModule({ name: MODULE_NAME });

    assertEquals(pluginModule, undefined);
  });
});
