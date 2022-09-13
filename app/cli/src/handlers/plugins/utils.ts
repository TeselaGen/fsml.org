import { omitBy, sortBy } from "@fsml/packages/utils/deps/lodash.ts";
import {
  IParser,
  TBasePluginModule,
  TPluginRegistry,
  TPluginsRegistry,
} from "@fsml/packages/plugins/types/mod.ts";
import { toStdOut } from "@fsml/packages/utils/mod.ts";
import PluginHandler from "@fsml/packages/plugins/mod.ts";
import DefaultParser from "./default-parser.ts";
import { getPluginRegistry } from "@fsml/packages/plugins/registry/mod.ts";

const MODULE_VERSION_SEPARATOR = "@";

function moduleParser(
  module: string,
  defaultVersion: string | null = "latest",
): TBasePluginModule {
  const [name, version = defaultVersion] = module.split(
    MODULE_VERSION_SEPARATOR,
  );
  const pluginModule = { name, version };
  return pluginModule;
}

/**
 * Takes in the data input filepath and a parser
 * and determines whether the parser is applicable for such file.
 *
 * If no parser is provided, the default parser will be used.
 *
 * @param filepath input data filepath
 * @param parser a potential parser for input file
 * @returns The selected parser.
 */
async function selectParser(
  filepath: string,
  parser?: string,
): Promise<IParser | null> {
  if (parser) {
    const pluginModule = moduleParser(parser);
    const { import: _import, isParser } = PluginHandler({
      module: pluginModule,
    });

    const plugin = await _import();

    if (isParser(plugin)) {
      if (!await plugin.isApplicable(filepath)) return plugin;
    }
  }
  // If no parser is provided use the default parser if applicable.
  if (await DefaultParser.isApplicable(filepath)) return DefaultParser;

  toStdOut(`No applicable parser found for '${filepath}'\n`);
  return null;
}

async function listPlugins(
  opts: { type: string; regex: string; sort: string },
): Promise<TPluginsRegistry["plugins"]> {
  const {
    type,
    regex,
    sort,
  } = opts;

  const pluginsRegistry = await getPluginRegistry();

  const plugins_filtered = omitBy(
    pluginsRegistry.plugins,
    (pluginRegistry: TPluginRegistry) => {
      const typeCheck = !type || pluginRegistry.type === type;
      const regexCheck = !regex || pluginRegistry.name.match(new RegExp(regex));
      return typeCheck && regexCheck;
    },
  ) as TPluginsRegistry["plugins"];

  if (sort) {
    return sortBy(
      plugins_filtered,
      (pluginRegistry: TPluginRegistry) => pluginRegistry.name,
    );
  }

  return plugins_filtered;
}

function versionBumpTemplate(currentVersion: string, opts: {
  version?: string;
  latest?: boolean;
  minor?: boolean;
  major?: boolean;
  patch?: boolean;
}): string {
  const [major, minor] = currentVersion.split(".");

  if (opts.version) return opts.version;
  if (opts.latest || opts.major) return "latest";
  if (opts.minor) return `${major}.x.x`;
  if (opts.patch) return `${major}.${minor}.x`;

  return currentVersion;
}

export { listPlugins, moduleParser, selectParser, versionBumpTemplate };
