import * as yaml from 'yaml';
import * as glob from 'glob';
import { TSchema } from '@sinclair/typebox';
import { Value } from '@sinclair/typebox/value/index.js';
import * as fs from 'fs';
import * as fse from 'fs-extra';
import * as path from 'path';

// TODO: find typescript libraries for browser-based
// compression.
const compress: {
  [key: string]: {
    compress: (...args: unknown[]) => Promise<void>;
    uncompress: (...args: unknown[]) => Promise<void>;
  };
} = {
  zip: {
    compress: () => {
      return Promise.resolve();
    },
    uncompress: () => {
      return Promise.resolve();
    },
  },
};

export function remove(
  filepath: string,
  opts: { recursive: boolean } = { recursive: false }
) {
  if (opts?.recursive) return fse.rmdirSync(filepath, opts);
  return fse.removeSync(filepath);
}

export function read(filepath: string) {
  const text = fs.readFileSync(filepath, 'utf-8');
  return text;
}

export function toStdOut(str: string) {
  const text = new TextEncoder().encode(str);
  process.stdout.write(text);
}

export function toFile(args: { filepath: string; content: string }) {
  const { filepath, content } = args;
  fse.writeFileSync(filepath, content);
}

export function jsonToText(args: {
  format?: string;
  content: unknown;
}): string {
  const { format, content } = args;
  let text: string;
  switch (format || 'json') {
    case 'yaml':
      text = yaml.stringify(content);
      break;

    case 'json':
      text = JSON.stringify(content, null, 2);
      break;

    case 'toml':
      text = JSON.stringify(content, null, 2);
      console.error(
        `output format '${format}' not implemented. Defaulting to 'json'`
      );
      console.error('output format not implemented.');
      break;

    default:
      text = JSON.stringify(content, null, 2);
      console.error(
        `output format '${format}' not supported. Defaulting to 'json'`
      );
      break;
  }
  return text;
}

export async function packFiles(args: {
  pack: string;
  filepaths: string[];
  write: string;
}) {
  const { pack, filepaths, write } = args;
  switch (pack) {
    case 'zip':
      return await compressFiles({
        compressor: 'zip',
        filepaths,
        write,
        opts: { overwrite: true },
      });
    case 'tar':
      return await compressFiles({ compressor: 'tar', filepaths, write });
    case 'tgz':
      return await compressFiles({ compressor: 'tgz', filepaths, write });
    default:
      console.error(`Compressor ${pack} not implemented.`);
      return;
  }
}

export async function expandGlobPaths(filepattern: string) {
  const filepaths = [];
  for (const file of glob.sync(filepattern)) {
    filepaths.push(file);
  }
  return filepaths;
}

export function createValueForType(type: TSchema) {
  return Value.Create(type);
}
/**
 * Uses one of the available compressors to compress 'filepaths'
 * into the 'write' path.
 */
async function compressFiles(args: {
  compressor: string;
  filepaths: string[];
  write: string;
  opts?: { overwrite: boolean };
}) {
  const { compressor, filepaths, write, opts } = args;
  // archivePath is the absolute path where the files to be compressed will be put.
  // 'write' is relative to the working directory.
  const archivePath = path.join(process.cwd(), write);

  // archiveName: name of the compressed file
  const archiveName = `${archivePath}.${compressor}`;

  // Create the directory to be compressed.
  await fse.ensureDir(archivePath);

  // Move the filepaths to be compressed into the target directory.
  for (const filepath of filepaths) {
    // Get the filepath's file name, and join it with the archivePath.
    const destinationFilepath = path.join(archivePath, path.basename(filepath));
    // copy the filepath into the directory to be compressed.
    fse.copySync(filepath, destinationFilepath);
  }

  // NOTE: refer to src/deps.ts as to why "zip" compressor is treated differently at the moment.
  if (compressor !== 'zip') {
    await compress[compressor].compress(archivePath, archiveName, opts);
  } else {
    // In order to avoid compressing the files with aboslute tree strcture
    // we have cd into the archivePath's parent dir.
    const originalCwd = process.cwd();
    process.chdir(path.dirname(archivePath));

    // Get the new filepaths relative to the new cwd of the files.
    const _filepaths = filepaths.map((filepath) =>
      path.join(path.basename(archivePath), path.basename(filepath))
    );

    // Compress the files.
    await compress[compressor].compress(_filepaths, archiveName, opts);

    // Finally, change back to the original working directory.
    process.chdir(originalCwd);
  }

  // Finally, delete the directory now that its already compressed
  // into the archiveName compression file
  remove(archivePath, { recursive: true });
  return true;
}
