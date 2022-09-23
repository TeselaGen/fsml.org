import { PluginTypes } from "@fsml/packages/plugins/types.ts";

export type TBasePluginModule = {
  name: string;
  version?: string | null;
};

export interface IPluginHandlerOptions {
  module: TBasePluginModule | TPluginRegistry;
  versionResolver?: (module: TBasePluginModule) => Promise<string>;
  /**
   * The resolver is to handle plugin URIs
   * before they are installed.
   *
   * The default resolver simply adds the
   * plugin URI to a local register file.
   *
   * Another resolver could additionally
   * fetch the plugin URI and write the code
   * into a bundle locally, which useful if
   * remote dynamic import isnt an option.
   */
  urlResolver?: (
    module: TBasePluginModule | TPluginRegistry,
  ) => Promise<{ url: string; uriScheme: URISchemes }>;

  /**
   * The module cacher function enables
   * customization of how to handle the caching of
   * registered (installed) modules.
   *
   * The default cacher leverages dynamic and remote
   * import so it simply imports the module.
   *
   * More sophisticated cacher can be implemented,
   * for example by downloading the module's bundled code
   * and store it locally for a later import (non-remote import).
   */
  moduleCacher?: (
    moduleRegistry: TPluginRegistry,
  ) => Promise<boolean>;
}

export enum URISchemes {
  HTTPS = "https",
  FILE = "file",
}

export type TPluginRegistry = {
  name: string;
  version: string;
  url: string;
  uriScheme: URISchemes;
  cached?: boolean;
  type?: PluginTypes;
};

export type TPluginsRegistry = {
  plugins: Record<string, TPluginRegistry>;
  // NOTE: 'cacheDir' optionaly at the moment, but we might want to force it
  // if we want to be able to manage caching.
  cacheDir?: string | null;
};

export * from "./plugin.ts";
