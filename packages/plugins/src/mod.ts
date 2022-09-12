import {
  addModuleToRegistry,
  getRegisteredModule,
  removeModuleFromRegistry,
  updateModuleRegistry,
} from "./registry/mod.ts";
import {
  IParser,
  IPlugin,
  IPluginHandlerOptions,
  PluginTypes,
  TPluginModuleRegistry,
} from "./types.ts";
import { defaulResolver, defaultCacher } from "./utils.ts";

const PluginHandler = (opts: IPluginHandlerOptions) => {
  const {
    module: pluginBaseModule,
    urlResolver = defaulResolver,
    moduleCacher = defaultCacher,
  } = opts;
  // TODO: maybe add "type: PluginTypes" into the IPlugin interface
  // as an additional check.
  // Or convert the IParser Interface to an abstract class and then use "instanceof"
  function isParser(plugin: IPlugin | IParser | undefined): plugin is IParser {
    const parser = (plugin as IParser);
    return "isApplicable" in parser && "parse" in parser;
  }

  async function importPlugin(
    module: TPluginModuleRegistry,
  ): Promise<IParser | IPlugin> {
    const plugin: IPlugin = await import(module.url);
    if (isParser(plugin)) plugin.type = PluginTypes.PARSER;
    return plugin;
  }

  async function cache(): Promise<boolean> {
    const moduleRegistry = await getRegisteredModule(pluginBaseModule);
    const isCached = await moduleCacher(moduleRegistry);
    if (isCached) {
      await updateModuleRegistry({
        ...moduleRegistry,
        cached: true,
      });
    }
    return isCached;
  }

  async function install(): Promise<TPluginModuleRegistry> {
    const { url, uriScheme } = await urlResolver(pluginBaseModule);

    const newModule: TPluginModuleRegistry = {
      name: pluginBaseModule.name,
      version: pluginBaseModule.version,
      url,
      uriScheme,
    };

    await addModuleToRegistry(newModule);

    return newModule;
  }

  async function uninstall(opts = { allVersions: false }): Promise<boolean> {
    await removeModuleFromRegistry(pluginBaseModule, {
      allVersions: opts.allVersions,
    });
    return true;
  }

  return { install, uninstall, cache, importPlugin };
};

export default PluginHandler;
