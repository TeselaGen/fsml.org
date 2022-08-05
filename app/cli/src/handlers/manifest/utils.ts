import { Manifest } from '@fsml.org/standard/mod.ts';
import { fs, path, typebox } from "src/deps.ts";
import { jsonToText, toFile, packFiles, expandGlobPaths } from "../../utils.ts"

const FSML_MANIFEST_FILEPATH = (format) => path.join(Deno.cwd(), `fsml.${format}`)

// WIP: Needs to be extended so that can accept a parser
// and data to be parsed.
export async function generateManifest({ parser, filepattern }) {
    const dataFiles = await expandGlobPaths(filepattern)
    const parsedData = await parseDataFiles({ parser, dataFiles })
    const manifest = typebox.Value.Create(Manifest)
    validateManifest({ manifest: {} })
    return manifest
}

export async function writeManifest({ format, manifest }) {
    const manifestTextFile: string = await jsonToText({ format, content: manifest });
    const manifestFilepath = FSML_MANIFEST_FILEPATH(format)
    await toFile({ filepath: manifestFilepath, content: manifestTextFile })
    return manifestFilepath
}

export async function packManifest({ pack, filepattern, writePath, manifestFilepath }) {
    const filesToCompress = await expandGlobPaths(filepattern);
    filesToCompress.push(manifestFilepath)
    return await packFiles({ pack, filepaths: filesToCompress, writePath })
}

async function parseDataFiles({ parser, dataFiles }) { }

function validateManifest({ manifest }) {
    const ManifestCompiler = typebox.TypeCompiler.Compile(Manifest)
    const manifestCheck = ManifestCompiler.Check(manifest)
    const manifestErrors = [...ManifestCompiler.Errors(manifest)]
    return manifestCheck
}
