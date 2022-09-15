import { IExporter, IParser, IPlugin, PluginTypes } from "./types.ts";

function isParser(plugin: IPlugin | IParser): plugin is IParser {
  return plugin.type === PluginTypes.PARSER;
}

function isExporter(plugin: IPlugin | IExporter): plugin is IExporter {
  return plugin.type === PluginTypes.EXPORTER;
}

export { isExporter, isParser };
export type { IExporter, IParser, IPlugin };
