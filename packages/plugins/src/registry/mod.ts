import path from "https://deno.land/std@0.148.0/node/path.ts";
import { yaml } from "../../../utils/src/deps/mod.ts";
import {
  find,
  isUndefined,
  omitBy,
  uniqBy,
} from "../../../utils/src/deps/lodash.ts";
import { read, toFile } from "../../../utils/src/mod.ts";
import { TBasePluginModule, TPluginModuleRegistry } from "../types.ts";

const __dirname = path.dirname(path.fromFileUrl(import.meta.url));
export const MODULE_REGISTRY_DIR = path.resolve(__dirname);
const PLUGINS_REGISTRY_FILEPATH = path.join(
  MODULE_REGISTRY_DIR,
  "modules.yaml",
);

async function addModuleToRegistry(
  module: TPluginModuleRegistry,
): Promise<boolean> {
  const pluginsRegistry = await getPluginRegistry();

  const cleanModule = omitBy(
    module,
    isUndefined,
  ) as TPluginModuleRegistry;

  pluginsRegistry.push(cleanModule);

  const pluginsRegistry_updated = uniqBy(
    pluginsRegistry,
    (module: { name: string; version: string }) =>
      `${module.name}@${module.version}`,
  );

  // @ts-ignore <yaml.stringify input type is not very well defined>
  const pluginsRegistryString_updated = yaml.stringify(pluginsRegistry_updated);

  await toFile({
    filepath: PLUGINS_REGISTRY_FILEPATH,
    content: pluginsRegistryString_updated,
  });

  return true;
}

async function updateModuleRegistry(
  module: TPluginModuleRegistry,
): Promise<boolean> {
  await removeModuleFromRegistry(module);

  await addModuleToRegistry(module);

  return true;
}

async function removeModuleFromRegistry(
  module: TBasePluginModule | TPluginModuleRegistry,
  opts?: {
    allVersions: boolean;
  },
): Promise<boolean> {
  const pluginsRegistry = await getPluginRegistry();

  const pluginsRegistry_updated = pluginsRegistry.filter((_module) => {
    const check = _module.name === module.name &&
      (opts?.allVersions || !module.version ||
        _module.version === module.version);
    return !check;
  });

  // @ts-ignore <yaml.stringify input type is not very well defined>
  const pluginsRegistryString_updated = yaml.stringify(pluginsRegistry_updated);

  await toFile({
    filepath: PLUGINS_REGISTRY_FILEPATH,
    content: pluginsRegistryString_updated,
  });

  return true;
}

async function getPluginRegistry(): Promise<TPluginModuleRegistry[]> {
  const pluginsRegistryString = await read(PLUGINS_REGISTRY_FILEPATH);
  const pluginsRegistry =
    (await yaml.parse(pluginsRegistryString) as TPluginModuleRegistry[]);

  return pluginsRegistry;
}

async function getRegisteredModule(
  module: TBasePluginModule,
): Promise<TPluginModuleRegistry> {
  const { name, version } = module;
  const pluginsRegistry = await getPluginRegistry();

  const moduleRegistry: TPluginModuleRegistry = find(
    pluginsRegistry,
    (module: TPluginModuleRegistry) =>
      module.name === name && module.version === version,
  );

  return moduleRegistry;
}

export {
  addModuleToRegistry,
  getPluginRegistry,
  getRegisteredModule,
  removeModuleFromRegistry,
  updateModuleRegistry,
};
