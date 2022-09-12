import { IParser, TBasePluginModule } from "@fsml/packages/plugins/types.ts";
import { toStdOut } from "@fsml/packages/utils/mod.ts";
import PluginHandler from "@fsml/packages/plugins/mod.ts";
import DefaultParser from "./default-parser.ts";

const MODULE_VERSION_SEPARATOR = "@";

function moduleParser(module: string): TBasePluginModule {
  const [name, version = "latest"] = module.split(MODULE_VERSION_SEPARATOR);
  const pluginModule = { name, version };
  return pluginModule;
}

function hasVersion(module: string): boolean {
  const [, version] = module.split(MODULE_VERSION_SEPARATOR);
  return !!version;
}

/**
 * @param filepath input data filepath
 * @param parser one or many potential parsers for input file
 * @returns The selected parser.
 */
async function selectParser(
  filepath: string,
  parser?: string,
): Promise<IParser | void> {
  if (parser) {
    const pluginModule = moduleParser(parser);
    const { import: _import, isParser } = PluginHandler({ module: pluginModule });

    const plugin = await _import();

    if (isParser(plugin)) {
      if (!await plugin.isApplicable(filepath)) return plugin;
    }
  }
  // If no parser is provided use the default parser if applicable.
  if (await DefaultParser.isApplicable(filepath)) return DefaultParser;

  toStdOut(`No applicable parser found for '${filepath}'\n`);
  return;
}

export { hasVersion, moduleParser, selectParser };
