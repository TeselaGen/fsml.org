import { conversion, yaml, compress, fs, path } from "src/deps.ts";

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

export async function packFiles({ pack, filepaths, archiveName }) {
  switch (pack) {
    case 'zip':
      const opts = { overwrite: true }
      return await compressFiles({ compressor: "zip", filepaths, archiveName, opts })
    case 'tar':
      return await compressFiles({ compressor: "tar", filepaths, archiveName })
    case 'tgz':
      return await compressFiles({ compressor: "tgz", filepaths, archiveName })
    default:
      console.error(`Compressor ${pack} not implemented.`)
      break;
  }
}

async function compressFiles({ compressor, filepaths, archiveName, opts }) {
  const archivePath = `${archiveName}.${compressor}`
  // NOTE: refer to src/deps.ts as to why "zip" compressor is treated differently at the moment.
  if (compressor === "zip") {
    return await compress[compressor].compress(filepaths, archivePath, opts)
  } else {
    await fs.ensureDir(archiveName)
    for (const filepath of filepaths) {
      await Deno.copyFile(filepath, path.join(archiveName, filepath))
    }
    await compress[compressor].compress(archiveName, archivePath, opts)
    const res = await remove(archiveName, { recursive: true })
    return true
  }
}
