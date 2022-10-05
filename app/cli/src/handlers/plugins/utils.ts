import { toStdOut } from "@fsml/packages/utils/mod.ts";
import { every, omitBy, sortBy } from "@fsml/packages/utils/deps/lodash.ts";
import { IParser, isParser } from "@fsml/packages/plugins/mod.ts";
import {
  TBasePluginModule,
  TPluginRegistry,
  TPluginsRegistry,
  URISchemes,
} from "../../types/plugin.ts";
import PluginHandler from "./handler/mod.ts";
import DefaultParser from "./default-parser.ts";

const MODULE_VERSION_SEPARATOR = "@";

const UriSchemePrefixes = {
  [URISchemes.FILE]: "file://",
  [URISchemes.HTTPS]: "https://",
};

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
    const { import: _import } = PluginHandler({
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

function filterPlugins(
  pluginsRegistry: TPluginsRegistry,
  opts: { type: string; regex: string; sort: string },
): TPluginsRegistry["plugins"] {
  const {
    type,
    regex,
    sort,
  } = opts;

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

  if (opts.patch) return `${major}.${minor}.x`;
  if (opts.minor) return `${major}.x.x`;
  if (opts.version) return opts.version;
  if (opts.latest || opts.major) return "latest";

  return currentVersion;
}

function isPluginRegistry(
  pluginRegistry: TBasePluginModule | TPluginRegistry,
): pluginRegistry is TPluginRegistry {
  const TPluginRegistryKeys = ["name", "url", "uriScheme"];
  const _keys = Object.keys(pluginRegistry);

  return every(
    TPluginRegistryKeys,
    (key: string) => _keys.includes(key),
    undefined,
  );
}

function resolveUriScheme(url: string): URISchemes {
  for (
    const [uriScheme, uriSchemePrefix] of Object.entries(UriSchemePrefixes)
  ) {
    if (url.startsWith(uriSchemePrefix)) return uriScheme as URISchemes;
  }

  // File URLs dont usually come with the file:// prefix
  // so defaulting to FILE seems reasonable,
  // in case no URI scheme prefix is found.
  return URISchemes.FILE;
}

export {
  filterPlugins,
  isPluginRegistry,
  moduleParser,
  resolveUriScheme,
  selectParser,
  versionBumpTemplate,
};
