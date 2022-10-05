import { path } from "@fsml/cli/deps/mod.ts";
import { TypeCompiler } from "@fsml/packages/utils/deps/typebox.ts";
import {
  expandGlobPaths,
  jsonToText,
  packFiles,
  remove,
  toFile,
  toStdOut,
} from "@fsml/packages/utils/mod.ts";
import { DataFileFormats, ManifestTypes } from "@fsml/cli/types/enums.ts";
import {
  Manifest,
  TManifest,
} from "@fsml/packages/standard/manifest/manifest.ts";

import ManifestGenerator from "./generator.ts";

// NOTE: update this with some default config for the manifest
// filename, and also maybe path.
const FSML_MANIFEST_FILEPATH = (format: string) =>
  path.join(Deno.cwd(), `fsml.${format}`);

// WIP: Needs to be extended so that can accept a parser
// and data to be parsed.
export async function generateManifest(
  args: {
    parser: string;
    type: ManifestTypes;
    author: string;
    filepattern: string;
  },
): Promise<TManifest | null> {
  const {
    author,
    type,
    parser,
    filepattern,
  } = args;

  const { filepath: datafilepath, isPack } = await getDataFilepath(filepattern);

  const manifestGenerator = ManifestGenerator(undefined, { type });

  const manifest = await manifestGenerator.generate({
    author,
    filepath: datafilepath,
    parser,
  });

  if (isPack) remove(datafilepath);

  if (!validateManifest(manifest)) return null;

  return manifest;
}

export async function writeManifest(
  args: { format: string; manifest: TManifest },
) {
  const { format, manifest } = args;
  const manifestTextFile: string = jsonToText({
    format,
    content: manifest,
  });
  const manifestFilepath = FSML_MANIFEST_FILEPATH(format);
  await toFile({ filepath: manifestFilepath, content: manifestTextFile });
  return manifestFilepath;
}

export async function packManifest(
  args: {
    pack: string;
    filepattern: string;
    write: string;
    manifestFilepath: string;
  },
) {
  const { pack, filepattern, write, manifestFilepath } = args;
  const filesToPack = await expandGlobPaths(filepattern);
  filesToPack.push(manifestFilepath);
  return await packFiles({ pack, filepaths: filesToPack, write });
}

/**
 * Function expands filepattern and packs filepaths
 * in case there's more than one.
 *
 * @param filepattern a filepath or a glob
 * @returns a filepath
 */
async function getDataFilepath(
  filepattern: string,
): Promise<{ filepath: string; isPack: boolean }> {
  let datafilepath: string = filepattern;
  let isPack = false;
  if (path.isGlob(filepattern)) {
    const filepaths = await expandGlobPaths(filepattern);
    const dataFilepaths = filepaths.filter((filepath) => {
      const acceptableDataFileFormats: string[] = Object.values(
        DataFileFormats,
      );
      acceptableDataFileFormats.includes(
        // extname returns extension with leading period
        path.extname(filepath).slice(1),
      );
    });
    if (dataFilepaths.length > 1) {
      datafilepath = Deno.cwd();
      isPack = true;
      await packFiles({
        pack: "tar",
        filepaths: dataFilepaths,
        write: datafilepath,
      });
    }
    datafilepath = dataFilepaths[0];
  }
  return { filepath: datafilepath, isPack };
}

function validateManifest(manifest: TManifest): boolean {
  //@ts-ignore:next-line : This seems like an issue with typebox types.
  const ManifestCompiler = TypeCompiler.Compile(Manifest);
  const isValid = ManifestCompiler.Check(manifest);
  const manifestErrors = [...ManifestCompiler.Errors(manifest)];
  if (!isValid) {
    toStdOut("Error in Manifest: \n");
    manifestErrors.forEach((error) =>
      // NOTE: Maybe extend it so that these errors can be written
      // into a log file.
      toStdOut(jsonToText({ format: "json", content: error }))
    );
  }
  return isValid;
}

// async function parseDataFiles(args: any) {}
