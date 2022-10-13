import { fs, path, yaml } from "@fsml/packages/utils/deps/mod.ts";
import { read, toFile } from "@fsml/packages/utils/mod.ts";
import {
  TBasePluginModule,
  TPluginRegistry,
  TPluginsRegistry,
} from "../../types/plugin.ts";

const userHomePath = Deno.env.get("HOME") || "~/";
const homeFsmlPath = path.resolve(userHomePath, ".fsml/");

const PLUGIN_REGISTRY_TEMPLATE: TPluginsRegistry = {
  plugins: {},
  cacheDir: null,
};
const PLUGINS_REGISTRY_FILEPATH = path.join(
  homeFsmlPath,
  "./plugins.yaml",
);

async function addModuleToRegistry(
  module: TPluginRegistry,
): Promise<boolean> {
  const { name } = module;
  const pluginsRegistry = await getPluginRegistry();

  const doesModuleExist = pluginsRegistry.plugins[name];

  if (doesModuleExist) {
    return false;
  }

  Object.assign(pluginsRegistry.plugins, { [name]: module });

  // @ts-ignore <yaml.stringify input type is not very well defined>
  const pluginsRegistryString_updated = yaml.stringify(
    pluginsRegistry,
  );

  await toFile({
    filepath: PLUGINS_REGISTRY_FILEPATH,
    content: pluginsRegistryString_updated,
  });

  return true;
}

async function updateModuleRegistry(
  module: TPluginRegistry,
): Promise<boolean> {
  await removeModuleFromRegistry(module);
  await addModuleToRegistry(module);

  return true;
}

async function removeModuleFromRegistry(
  module: TBasePluginModule | TPluginRegistry,
): Promise<boolean> {
  const { name } = module;
  const pluginsRegistry = await getPluginRegistry();

  delete pluginsRegistry.plugins[name];

  // @ts-ignore <yaml.stringify input type is not very well defined>
  const pluginsRegistryString_updated = yaml.stringify(pluginsRegistry);

  await toFile({
    filepath: PLUGINS_REGISTRY_FILEPATH,
    content: pluginsRegistryString_updated,
  });

  return true;
}

async function getPluginRegistry(): Promise<TPluginsRegistry> {
  fs.ensureFileSync(PLUGINS_REGISTRY_FILEPATH);
  const pluginsRegistryString = await read(PLUGINS_REGISTRY_FILEPATH);
  const pluginsRegistry =
    (await yaml.parse(pluginsRegistryString) as TPluginsRegistry) ||
    PLUGIN_REGISTRY_TEMPLATE;

  return pluginsRegistry;
}

async function getRegisteredModule(
  module: TBasePluginModule | TPluginRegistry,
): Promise<TPluginRegistry> {
  const { name } = module;
  const pluginsRegistry = await getPluginRegistry();

  const moduleRegistry = pluginsRegistry.plugins[name];

  return moduleRegistry;
}

export {
  addModuleToRegistry,
  getPluginRegistry,
  getRegisteredModule,
  removeModuleFromRegistry,
  updateModuleRegistry,
};
