import { TBasePluginModule, TPluginRegistry, URISchemes } from "./types/mod.ts";

const DEFAULT_CDN_PROVIDER = "https://esm.sh";
const DEFAULT_CDN_QUERY_PARAMS = "?bundle";
const VERSION_REGEX = /@[~^]?([\dvx*]+(?:[-.](?:[\dx*]+|alpha|beta))*)/;

/**
 * Takes advantage of the CDN provider
 * to resolve the specific version by extracting
 * it from the redirect url.
 */
const defaultVersionResolver = async (
  module: TBasePluginModule,
): Promise<string> => {
  const { url } = defaultResolver(module);
  let version = module.version || "latest";

  const versionRegex = new RegExp(VERSION_REGEX);

  const resp = await fetch(url);
  if (resp.redirected) {
    const match = resp.url.match(versionRegex);
    if (match) {
      version = match[1];
    }
  }

  return version;
};

const defaultResolver = (
  module: TBasePluginModule,
  cdnProvider: string = DEFAULT_CDN_PROVIDER,
): { url: string; uriScheme: URISchemes } => {
  const { name, version } = module;
  let url: string;
  if (version) {
    url = `${cdnProvider}/${name}@${version}${DEFAULT_CDN_QUERY_PARAMS}`;
  } else url = `${cdnProvider}/${name}?bundle`;

  return {
    url,
    uriScheme: URISchemes.HTTPS,
  };
};

const defaultCacher = async (
  moduleRegistry: TPluginRegistry,
): Promise<boolean> => {
  const { url } = moduleRegistry;
  return !!(await import(url));
};

export { defaultCacher, defaultResolver, defaultVersionResolver };
