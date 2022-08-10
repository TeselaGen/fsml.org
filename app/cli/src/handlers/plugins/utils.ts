import { PluginTypes } from "@fsml/cli/types/enums.ts";
import {
  TTabularData,
} from "@fsml/packages/standard/manifest/data/tabular/mod.ts";

export interface IPlugin {
  // Design plugin interface. The current plan is to
  // make them npm packages that can be dynamically imported in deno.
  name: string;
  type: PluginTypes;
}

// TODO: determine what the interface for parser should be.
export interface IParser extends IPlugin {
  /** Receives filepath as input and returns filepath as output or along with the parsed data as optional */
  parse: (
    filepath: string,
  ) => Promise<
    Partial<{
      filepath: string;
      data: TTabularData;
    }>
  >;
  isApplicable: (filepath: string) => Promise<boolean>;
}

async function pluginNameToUri(pluginName: string) {
  // TODO: implement a way to search the plugin name in the registries and get its URI.
  const getPluginUri = (pluginName: string) => Promise.resolve(pluginName);

  return await getPluginUri(pluginName);
}

// TODO: maybe add "type: PluginTypes" into the IPlugin interface
// as an additional check.
// Or convert the IParser Interface to an abstract class and then use "instanceof"
function isParser(plugin: IPlugin | IParser | undefined): plugin is IParser {
  const parser = (plugin as IParser);
  return "isApplicable" in parser && "parse" in parser;
}

async function importPlugin(
  pluginName: string, // TODO: it could either be a plugin name or URI.,
): Promise<IParser | IPlugin> {
  const uri = await pluginNameToUri(pluginName);
  const plugin = await import(uri);
  return plugin;
}

export { importPlugin, isParser };
