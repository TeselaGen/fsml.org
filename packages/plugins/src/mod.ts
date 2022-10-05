import { IExporter, IParser, IPlugin, PluginTypes } from "./types.ts";

function isPlugin(plugin: IPlugin): plugin is IPlugin {
  return "name" in plugin && Object.values(PluginTypes).includes(plugin.type) &&
    "run" in plugin;
}

function isGeneric(plugin: IPlugin | IParser): plugin is IPlugin {
  return plugin.type === PluginTypes.GENERIC;
}

function isParser(plugin: IPlugin | IParser): plugin is IParser {
  return plugin.type === PluginTypes.PARSER;
}

function isExporter(plugin: IPlugin | IExporter): plugin is IExporter {
  return plugin.type === PluginTypes.EXPORTER;
}

export { isExporter, isGeneric, isParser, isPlugin };
export type { IExporter, IParser, IPlugin };
