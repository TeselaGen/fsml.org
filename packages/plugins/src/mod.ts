import { IExporter, IParser, IPlugin, PluginTypes } from "./types.ts";

function isPlugin(plugin: IPlugin): plugin is IPlugin {
  return "name" in plugin && Object.values(PluginTypes).includes(plugin.type) &&
    "run" in plugin;
}

function isGeneric(plugin: IPlugin | IParser): plugin is IPlugin {
  return isPlugin(plugin) && plugin.type === PluginTypes.GENERIC;
}

// deno-lint-ignore no-explicit-any
function isParser(plugin: any): plugin is IParser {
  return plugin.isApplicable && isPlugin(plugin) &&
    plugin.type === PluginTypes.PARSER;
}

function isExporter(plugin: IPlugin | IExporter): plugin is IExporter {
  return isPlugin(plugin) && plugin.type === PluginTypes.EXPORTER;
}

export { isExporter, isGeneric, isParser, isPlugin };
export type { IExporter, IParser, IPlugin };
