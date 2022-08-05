import { conversion, yaml, compress, fs, path } from "src/deps.ts";

const __dirname = path.dirname(path.fromFileUrl(import.meta.url));

export async function remove(filepath, opts) {
  return await Deno.remove(filepath, opts)
}

export async function toStdOut(str: string) {
  const text = new TextEncoder().encode(str);
  await conversion.writeAll(Deno.stdout, text);
}

export async function toFile({ filepath, content }) {
  await Deno.writeTextFile(filepath, content);
}

export async function jsonToText({ format, content }) {
  let text;
  switch (format) {
    case "yaml":
      text = await yaml.stringify(content);
      break;

    case "json":
      text = JSON.stringify(content, null, 2);
      break;

    case "toml":
      console.error("output format not implemented.");
      break;

    default:
      console.error("output format not supported.");
      break;
  }
  return text
}

export async function packFiles({ pack, filepaths, writePath }) {
  switch (pack) {
    case 'zip':
      const opts = { overwrite: true }
      return await compressFiles({ compressor: "zip", filepaths, writePath, opts })
    case 'tar':
      return await compressFiles({ compressor: "tar", filepaths, writePath })
    case 'tgz':
      return await compressFiles({ compressor: "tgz", filepaths, writePath })
    default:
      console.error(`Compressor ${pack} not implemented.`)
      break;
  }
}

export async function expandGlobPaths(filepattern) {
  const filepaths = []
  for await (const file of fs.expandGlob(filepattern)) {
    filepaths.push(file.path)
  }
  return filepaths
}

/**
 * Uses one of the available compressors to compress 'filepaths'
 * into 'writePath'
 */
async function compressFiles({ compressor, filepaths, writePath, opts }) {
  // archivePath is the absolute path where the files to be compressed will be put.
  // 'writePath' is relative to the working directory.
  const archivePath = path.join(Deno.cwd(), writePath)

  // archiveName: name of the compressed file
  const archiveName = `${archivePath}.${compressor}`

  // Create the directory to be compressed.
  await fs.ensureDir(archivePath)

  // Move the filepaths to be compressed into the target directory.
  for (const filepath of filepaths) {
    // Get the filepath's file name, and join it with the archivePath.
    const destinationFilepath = path.join(archivePath, path.basename(filepath))
    // copy the filepath into the directory to be compressed.
    await Deno.copyFile(filepath, destinationFilepath)
  }

  // NOTE: refer to src/deps.ts as to why "zip" compressor is treated differently at the moment.
  if (compressor !== "zip") {
    await compress[compressor].compress(archivePath, archiveName, opts)
  } else {
    // In order to avoid compressing the files with aboslute tree strcture
    // we have cd into the archivePath's parent dir.
    const originalCwd = Deno.cwd(path.dirname(archivePath))
    Deno.chdir(path.dirname(archivePath));

    // Get the new filepaths relative to the new cwd of the files.
    const _filepaths = filepaths.map(filepath => path.join(path.basename(archivePath), path.basename(filepath)))

    // Compress the files.
    await compress[compressor].compress(_filepaths, archiveName, opts)

    // Finally, change back to the original working directory.
    Deno.chdir(originalCwd);
  }

  // Finally, delete the directory now that its already compressed
  // into the archiveName compression file
  const res = await remove(archivePath, { recursive: true })
  return true
}
