import { Manifest } from "@fsml/packages/standard/mod.ts";
import { path, typebox } from "@fsml/cli/deps.ts";
import {
  TManifest,
  // TManifestData
} from "@fsml/cli/types/manifest.ts";
import { expandGlobPaths, jsonToText, packFiles, toFile } from "../../utils.ts";

const FSML_MANIFEST_FILEPATH = (format: string) =>
  path.join(Deno.cwd(), `fsml.${format}`);

// WIP: Needs to be extended so that can accept a parser
// and data to be parsed.
export function generateManifest(
  _args: {
    parser: string[];
    type: string;
    author: string;
    filepattern: string;
  },
) {
  // const {
  //   author,
  //   type,
  //   parser,
  //   filepattern,
  // } = args;
  // const dataFiles = await expandGlobPaths(filepattern);
  // const parsedData = await parseDataFiles({ parser, dataFiles });
  const manifest = typebox.Value.Create(Manifest);
  validateManifest({ manifest: {} });
  return manifest;
}

export async function writeManifest(
  { format, manifest }: {
    format: string;
    manifest: TManifest;
  },
) {
  const manifestTextFile: string = await jsonToText({
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
    writePath: string;
    manifestFilepath: string;
  },
) {
  const { pack, filepattern, writePath, manifestFilepath } = args;
  const filesToCompress = await expandGlobPaths(filepattern);
  filesToCompress.push(manifestFilepath);
  return await packFiles({ pack, filepaths: filesToCompress, writePath });
}

// async function parseDataFiles(args: any) {}

function validateManifest({ manifest }: { manifest: TManifest }) {
  const ManifestCompiler = typebox.TypeCompiler.Compile(Manifest);
  const manifestCheck = ManifestCompiler.Check(manifest);
  // const manifestErrors = [...ManifestCompiler.Errors(manifest)];
  return manifestCheck;
}
