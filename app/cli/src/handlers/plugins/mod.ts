import { Arguments } from "@fsml/cli/deps/yargs.ts";
import PluginHandler from "@fsml/packages/plugins/mod.ts";
import { toStdOut } from "../../../../../packages/utils/src/mod.ts";
import { hasVersion, moduleParser } from "./utils.ts";

async function install(args: Arguments) {
  const {
    cache: cacheModule,
    module,
  } = args;

  const pluginModule = moduleParser(module);

  const { install } = PluginHandler({ module: pluginModule });
  const pluginRegistry = await install();

  if (cacheModule) {
    cache(args);
  }

  toStdOut(
    `Plugin ${pluginRegistry.name} installed from: ${pluginRegistry.url}\n`,
  );
}

async function uninstall(args: Arguments) {
  const {
    module,
  } = args;

  const isVersionSpecified = hasVersion(module);

  const pluginModule = moduleParser(module);

  const { uninstall } = PluginHandler({ module: pluginModule });
  const success = await uninstall({ allVersions: !isVersionSpecified });

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

async function list() {}

async function upgrade() {}

async function _delete() {}

async function run() {}

export { _delete as delete, cache, install, list, run, uninstall, upgrade };
