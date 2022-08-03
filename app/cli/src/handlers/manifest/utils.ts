import { Manifest } from '@fsml.org/standard/mod.ts';
import { fs, path } from "src/deps.ts";
import { jsonToText, toFile, packFiles } from "../../utils.ts"

const FSML_MANIFEST_FILENAME = "fsml"

// WIP: Needs to be extended so that can accept a parser
// and data to be parsed.
export async function generateManifest({ parser }) {
    const manifest = JSON.parse(JSON.stringify(Manifest))
    return manifest
}

export async function writeManifest({ format, manifest }) {
    const manifestTextFile: string = await jsonToText({ format, content: manifest });
    const manifestFilepath = `${FSML_MANIFEST_FILENAME}.${format}`
    await toFile({ filepath: manifestFilepath, content: manifestTextFile })
    return manifestFilepath
}

export async function packManifest({ pack, filepattern, archiveName, manifestFilepath }) {
    const filesToCompress = [manifestFilepath];
    for await (const file of fs.expandGlob(filepattern)) {
        const filepath = path.parse(file.path)
        filesToCompress.push(filepath.base)
    }
    return await packFiles({ pack, filepaths: filesToCompress, archiveName })
}
