import {
  TBasePluginModule,
  TPluginModuleRegistry,
  URISchemes,
} from "./types.ts";

const DEFAULT_CDN_PROVIDER = "https://esm.sh";

const defaulResolver = (
  module: TBasePluginModule,
  cdnProvider: string = DEFAULT_CDN_PROVIDER,
): { url: string; uriScheme: URISchemes } => {
  const { name, version } = module;
  let url: string;
  if (version) url = `${cdnProvider}/${name}@${version}?bundle`;
  else url = `${cdnProvider}/${name}?bundle`;
  return {
    url,
    uriScheme: URISchemes.HTTPS,
  };
};

const defaultCacher = async (
  moduleRegistry: TPluginModuleRegistry,
): Promise<boolean> => {
  const { url } = moduleRegistry;
  return !!(await import(url));
};

export { defaulResolver, defaultCacher };
