import { fs } from "@fsml/packages/utils/deps/mod.ts";
import path from "https://deno.land/std@0.148.0/node/path.ts";
import { toFile } from "../../utils/src/mod.ts";
import { TBasePluginModule, TPluginModule, URISchemes } from "./types.ts";
import { MODULE_REGISTRY_DIR } from "./registry/mod.ts";

/**
 * This is default installer as it works when using deno as long as we don't
 * need to compile Deno into an executable. Mainly because Deno doesnt support
 * compilation of code using dynamic importing
 * (https://deno.land/manual@v1.25.1/tools/compiler#unavailable-in-executables).
 */
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

/**
 * This other installer fetches the module bundle and writes it into a file
 * which can then be imported. This installer may be useful in case remote import
 * isn't supported (which is the case for Node LTS 16).
 */
async function fetchResolver(
  module: TBasePluginModule | TPluginModule,
  moduleUrlResolver: (module: TBasePluginModule) => string,
) {
  const moduleUrl = module.url || moduleUrlResolver(module);
  const response = await fetch(moduleUrl);
  const moduleContents = await response.text();

  fs.ensureDirSync(MODULE_REGISTRY_DIR);

  const extension = "js";
  const moduleFilePath = path.join(
    MODULE_REGISTRY_DIR,
    `${module.name}.${extension}`,
  );
  await toFile({ filepath: moduleFilePath, content: moduleContents });

  const newModule: TPluginModule = {
    ...module,
    url: `file://${moduleFilePath}`,
    uriScheme: URISchemes.FILE,
  };

  return newModule;
}

export { defaulResolver, fetchResolver };
