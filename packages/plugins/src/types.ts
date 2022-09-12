import {
  TTabularData,
} from "@fsml/packages/standard/manifest/data/tabular/mod.ts";

// TODO: This will be clearer once the Plugin Interface
// design is complete.
export enum PluginTypes {
  PARSER = "parser",
  GENERIC = "generic",
}

export interface IPlugin {
  // Design plugin interface. The current plan is to
  // make them publishable packages that can be dynamically imported in deno.
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

export interface IPluginHandlerOptions {
  module: TBasePluginModule;
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
    module: TBasePluginModule | TPluginModuleRegistry,
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
    moduleRegistry: TPluginModuleRegistry,
  ) => Promise<boolean>;
}

export enum URISchemes {
  HTTPS = "https",
  FILE = "file",
}

export type TPluginModuleRegistry = {
  name: string;
  version: string;
  url: string;
  uriScheme: URISchemes;
  cached?: boolean;
};

export type TBasePluginModule = {
  name: string;
  version: string;
  url?: string;
};
