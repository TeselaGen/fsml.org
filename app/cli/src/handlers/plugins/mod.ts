import { Arguments } from "@fsml/cli/deps/yargs.ts";
import { jsonToText, toStdOut } from "@fsml/packages/utils/mod.ts";
import { PluginTypes } from "../../../../../packages/plugins/src/types.ts";
import {
  TBasePluginModule,
  TPluginRegistry,
  URISchemes,
} from "../../types/plugin.ts";
import PluginHandler from "./handler/mod.ts";
import { getPluginRegistry, getRegisteredModule } from "./registry.ts";
import {
  filterPlugins,
  moduleParser,
  resolveUriScheme,
  versionBumpTemplate,
} from "./utils.ts";

async function install(args: Arguments) {
  const {
    cache: cacheModule = false,
    "from-url": fromUrl,
    module,
  } = args;

  let pluginModule: TBasePluginModule | TPluginRegistry = moduleParser(module);

  if (fromUrl) {
    pluginModule = {
      ...pluginModule,
      url: fromUrl,
      uriScheme: resolveUriScheme(fromUrl),
      type: PluginTypes.GENERIC,
      cached: true,
    };
  }

  const moduleRegistry = await getRegisteredModule(pluginModule);

  if (moduleRegistry) {
    // TODO: maybe suggest using the 'plugin upgrade' command in case the installed
    // version is lower.
    return toStdOut(
      `Plugin '${moduleRegistry.name}@${moduleRegistry.version}' is already installed`,
    );
  }

  const { install } = PluginHandler({ module: pluginModule });
  const pluginRegistry = await install();

  toStdOut(
    `Plugin installed: '${pluginRegistry.name}@${pluginRegistry.version}'`,
  );

  // It only makes sense to cache remote modules.
  if (cacheModule && pluginRegistry.uriScheme === URISchemes.HTTPS) {
    await cache(args);
  }
}

async function uninstall(args: Arguments) {
  const {
    module,
  } = args;

  const pluginModule = moduleParser(module);

  const { uninstall } = PluginHandler({ module: pluginModule });
  const success = await uninstall();

  if (!success) {
    console.error(`Error uninstalling plugin module ${pluginModule.name}`);
  }

  toStdOut(
    `Plugin ${pluginModule.name} uninstalled.\n`,
  );
}

async function cache(args: Arguments) {
  const {
    module,
  } = args;

  const pluginModule = moduleParser(module);

  const { cache } = PluginHandler({ module: pluginModule });

  const isCached = await cache();

  const consoleMsg = isCached
    ? `Plugin ${pluginModule.name}@${pluginModule.version} cached.\n`
    : `Error caching plugin module ${pluginModule.name}@${pluginModule.version}.\n`;

  toStdOut(consoleMsg);

  return isCached;
}

async function list(args: Arguments) {
  const {
    type,
    regex,
    sort,
  } = args;

  const pluginsRegistry = await getPluginRegistry();
  const pluginsRegistry_filtered = filterPlugins(pluginsRegistry, {
    type,
    regex,
    sort,
  });

  const text = jsonToText({
    format: "yaml",
    content: pluginsRegistry_filtered,
  });

  return toStdOut(text);
}

async function upgrade(args: Arguments) {
  const {
    module,
    version,
    latest,
    minor,
    major,
    patch,
  } = args;

  const pluginModule = moduleParser(module, null);
  const pluginRegistry = await getRegisteredModule(pluginModule);

  const newVersionTemplate = versionBumpTemplate(pluginRegistry.version, {
    latest,
    version,
    minor,
    major,
    patch,
  });

  const { upgrade } = PluginHandler({ module: pluginModule });
  const pluginRegistry_updated = await upgrade(newVersionTemplate);

  // TODO: might be good to inform the user about cases
  // in which the upgrade command didnt find any newer versions.
  return toStdOut(
    `Plugin ${pluginRegistry_updated.name} upgraded to version ${pluginRegistry_updated.version}`,
  );
}

async function _delete() {}

async function run(args: Arguments) {
  // NOTE: preprocess the plugin cli arguments to extract
  // the specific plugin arguments to pass on.
  const { module, _: [, , ...pluginPositionalArgs], ..._args } = args;

  const pluginKeywordArgs: Record<string, unknown> = {};

  // TODO: get these plugin cli command keyword arguments from
  // somewhere more centralized.
  const pluginCommandArgs = ["module", "cache", "sort", "latest", "$0"];
  Object.keys(_args).forEach((_argKey) => {
    if (!pluginCommandArgs.includes(_argKey)) {
      pluginKeywordArgs[_argKey] = _args[_argKey];
    }
  });

  const pluginArgs = {
    positional: pluginPositionalArgs,
    keyword: pluginKeywordArgs,
  };

  const pluginModule = moduleParser(module);
  const { run } = PluginHandler({ module: pluginModule });

  const success = await run(pluginArgs);

  return success;
}

export { _delete as delete, cache, install, list, run, uninstall, upgrade };
