import { compress, conversion, fs, path, yaml } from "@cli/deps.ts";

const __dirname = path.dirname(path.fromFileUrl(import.meta.url));

export async function remove(filepath: string, opts?: Deno.RemoveOptions) {
  return await Deno.remove(filepath, opts);
}

export async function toStdOut(str: string) {
  const text = new TextEncoder().encode(str);
  await conversion.writeAll(Deno.stdout, text);
}

export async function toFile(args: { filepath: string; content: string }) {
  const { filepath, content } = args;
  await Deno.writeTextFile(filepath, content);
}

export async function jsonToText(
  args: { format: string; content: string },
): Promise<string> {
  const { format, content } = args;
  let text: string;
  switch (format || "json") {
    case "yaml":
      text = await yaml.stringify(content);
      break;

    case "json":
      text = JSON.stringify(content, null, 2);
      break;

    case "toml":
      text = JSON.stringify(content, null, 2);
      console.error(
        `output format '${format}' not implemented. Defaulting to 'json'`,
      );
      console.error("output format not implemented.");
      break;

    default:
      text = JSON.stringify(content, null, 2);
      console.error(
        `output format '${format}' not supported. Defaulting to 'json'`,
      );
      break;
  }
  return text;
}

export async function packFiles(
  args: { pack: string; filepaths: string[]; writePath: string },
) {
  const { pack, filepaths, writePath } = args;
  switch (pack) {
    case "zip":
      return await compressFiles({
        compressor: "zip",
        filepaths,
        writePath,
        opts: { overwrite: true },
      });
    case "tar":
      return await compressFiles({ compressor: "tar", filepaths, writePath });
    case "tgz":
      return await compressFiles({ compressor: "tgz", filepaths, writePath });
    default:
      console.error(`Compressor ${pack} not implemented.`);
      break;
  }
}

export async function expandGlobPaths(filepattern: string) {
  const filepaths = [];
  for await (const file of fs.expandGlob(filepattern)) {
    filepaths.push(file.path);
  }
  return filepaths;
}

/**
 * Uses one of the available compressors to compress 'filepaths'
 * into 'writePath'
 */
async function compressFiles(
  args: {
    compressor: string;
    filepaths: string[];
    writePath: string;
    opts?: { overwrite: boolean };
  },
) {
  const { compressor, filepaths, writePath, opts } = args;
  // archivePath is the absolute path where the files to be compressed will be put.
  // 'writePath' is relative to the working directory.
  const archivePath = path.join(Deno.cwd(), writePath);

  // archiveName: name of the compressed file
  const archiveName = `${archivePath}.${compressor}`;

  // Create the directory to be compressed.
  await fs.ensureDir(archivePath);

  // Move the filepaths to be compressed into the target directory.
  for (const filepath of filepaths) {
    // Get the filepath's file name, and join it with the archivePath.
    const destinationFilepath = path.join(archivePath, path.basename(filepath));
    // copy the filepath into the directory to be compressed.
    await Deno.copyFile(filepath, destinationFilepath);
  }

  // NOTE: refer to src/deps.ts as to why "zip" compressor is treated differently at the moment.
  if (compressor !== "zip") {
    await compress[compressor].compress(archivePath, archiveName, opts);
  } else {
    // In order to avoid compressing the files with aboslute tree strcture
    // we have cd into the archivePath's parent dir.
    const originalCwd = Deno.cwd();
    Deno.chdir(path.dirname(archivePath));

    // Get the new filepaths relative to the new cwd of the files.
    const _filepaths = filepaths.map((filepath) =>
      path.join(path.basename(archivePath), path.basename(filepath))
    );

    // Compress the files.
    await compress[compressor].compress(_filepaths, archiveName, opts);

    // Finally, change back to the original working directory.
    Deno.chdir(originalCwd);
  }

  // Finally, delete the directory now that its already compressed
  // into the archiveName compression file
  await remove(archivePath, { recursive: true });
  return true;
}
