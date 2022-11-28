import difference from "https://deno.land/x/lodash@4.17.15-es/difference.js";
import get from "https://deno.land/x/lodash@4.17.15-es/get.js";
import _set from "https://deno.land/x/lodash@4.17.15-es/set.js";
import {
  afterAll,
  beforeAll,
  describe,
  it,
} from "https://deno.land/std@0.166.0/testing/bdd.ts";
import {
  assertEquals,
  assertExists,
} from "https://deno.land/std@0.166.0/testing/asserts.ts";

import { cliArgs, fixturePath } from "./supports/mod.ts";

import { DEFAULT_CONFIGS, getConfigs } from "../src/handlers/defaults/utils.ts";
import { generateManifest } from "../src/handlers/manifest/utils.ts";
import { install, uninstall, upgrade } from "../src/handlers/plugins/mod.ts";
import { set } from "../src/handlers/defaults/mod.ts";
import { getRegisteredModule } from "../src/handlers/plugins/registry.ts";

import { ManifestTypes } from "../src/types/enums.ts";
import { validateType } from "../../../packages/utils/src/mod.ts";
import { Manifest } from "../../../packages/standard/src/manifest/manifest.ts";
import ManifestGenerator from "../src/handlers/manifest/generator.ts";

describe("defaults commands", () => {
  it("list", async () => {
    const allSections = await getConfigs();
    const manifestSection = await getConfigs({ section: "manifest" });

    const expectedDefaultSections = Object.keys(DEFAULT_CONFIGS);
    const defaultSections = Object.keys(allSections);
    assertEquals(
      difference(defaultSections, expectedDefaultSections).length,
      0,
    );

    const expectedManifestDefaults = Object.keys(DEFAULT_CONFIGS.manifest);
    const manifestDefaults = Object.keys(manifestSection);
    assertEquals(
      difference(manifestDefaults, expectedManifestDefaults).length,
      0,
    );
  });

  it("set", async () => {
    const MANIFEST_DEFAULT_FORMAT = "json";
    await set(
      cliArgs({ key: "manifest.format", value: MANIFEST_DEFAULT_FORMAT }),
    );
    let manifestSection = await getConfigs({ section: "manifest" });
    assertEquals(manifestSection.format, MANIFEST_DEFAULT_FORMAT);

    await set(
      cliArgs({ key: "manifest.format", value: "some-invalid-format" }),
    );

    manifestSection = await getConfigs({ section: "manifest" });
    // Shouldn't have changed to "some-invalid-format", because its not a valid one
    assertEquals(manifestSection.format, MANIFEST_DEFAULT_FORMAT);
  });
});

describe("manifest commands", () => {
  it("create", async () => {
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

  it("validate", async () => {
    const manifestGenerator = ManifestGenerator();

    const manifest = await manifestGenerator.generate({
      author: "Deno Tester",
      filepath: fixturePath("example_data.csv"),
    });

    _set(manifest, "supplementalInfo.data[0].type", "invalid-type");

    const { errors } = validateType(Manifest, manifest);
    assertExists(errors);
    assertEquals(errors.length, 2);
  });
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

  beforeAll(async () => await cleanTestPlugin());
  afterAll(async () => await cleanTestPlugin());

  it("install", async () => {
    await install(cliArgs({ module: `${MODULE_NAME}@${MODULE_VERSION_3}` }));

    const pluginModule = await getRegisteredModule({ name: MODULE_NAME });

    assertExists(pluginModule);
    assertEquals(pluginModule.name, MODULE_NAME);
    assertEquals(pluginModule.version, MODULE_VERSION_3);
    assertEquals(pluginModule.uriScheme, "https");
  });

  it("upgrade", async () => {
    const args = cliArgs({ module: MODULE_NAME });
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
    await uninstall(cliArgs({ module: MODULE_NAME }));

    const pluginModule = await getRegisteredModule({ name: MODULE_NAME });

    assertEquals(pluginModule, undefined);
  });
});
