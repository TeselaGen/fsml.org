import { TypeCompiler, Value, ValueError } from "./deps/typebox.ts";
import { conversion, fs, path, yaml } from "./deps/mod.ts";
import compress from "./deps/compress.ts";
import { partition } from "./deps/lodash.ts";

const UNION_TYPE_ERROR_CODE = 34;

export function remove(filepath: string, opts?: Deno.RemoveOptions) {
  return Deno.removeSync(filepath, opts);
}

export function read(filepath: string) {
  const text = Deno.readTextFileSync(filepath);
  return text;
}

export function toStdOut(str: string) {
  const text = new TextEncoder().encode(`${str}\n`);
  return conversion.writeAllSync(Deno.stdout, text);
}

export function toFile(args: { filepath: string; content: string }) {
  const { filepath, content } = args;
  Deno.writeTextFileSync(filepath, content);
}

export function jsonToText(
  // deno-lint-ignore no-explicit-any
  args: { format?: string; content: any },
): string {
  const { format, content } = args;
  let text: string;
  switch (format || "json") {
    case "yaml":
      text = yaml.stringify(content);
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

export async function textToJson(
  args: { format?: string; text: string },
  // deno-lint-ignore no-explicit-any
): Promise<any> {
  const { format, text } = args;
  switch (format || "json") {
    case "yaml":
      return await yaml.parse(text);

    case "json":
      return JSON.parse(text);

    default:
      throw new Error(
        `output format '${format}' not supported.`,
      );
  }
}

export function expandGlobPaths(filepattern: string) {
  const filepaths = [];
  for (const file of fs.expandGlobSync(filepattern)) {
    filepaths.push(file.path);
  }
  return filepaths;
}

// TypeBox is not fully well supported for deno yet,
// thus we have to use and ignore the 'any type here.
// According to the docs 'createValueForType(type: TSchema)' should work.
// deno-lint-ignore no-explicit-any
export function createTemplateForType(type: any) {
  return Value.Create(type);
}

export function validateType(
  // deno-lint-ignore no-explicit-any
  type: any,
  // deno-lint-ignore no-explicit-any
  value: any,
): { isValid: boolean; errors?: ValueError[] } {
  const ValueCompiler = TypeCompiler.Compile(type);
  const isValid = ValueCompiler.Check(value);
  const valueErrors = [...ValueCompiler.Errors(value)];

  if (!valueErrors.length) return { isValid };

  /**
   * TypeBox's TypeCompiler errors are quite verbosy and the escalate upwards the JSON tree, specially for Union Type.
   * So if the error is located at a given leaf in the JSON tree, additional errors upwards the tree
   * will be generated.
   * For this reason, a little formatting is done here to only keep the errors
   * for one of the last leafs of the json tree,
   */

  // Only keep last-leaf errors.
  const lastLeafPath = valueErrors[0].path;
  const lastLeafErrors = valueErrors.filter((error) =>
    error.path === lastLeafPath
  );
  const [unionErrors, otherErrors] = <ValueError[][]> partition(
    lastLeafErrors,
    (error: ValueError) => error.type === UNION_TYPE_ERROR_CODE,
  );

  // Prefer union errors.
  const errors = (unionErrors.length ? unionErrors : otherErrors);

  return { isValid, errors };
}

export async function packFiles(
  args: { pack: string; filepaths: string[]; write: string },
) {
  const { pack, filepaths, write } = args;
  switch (pack) {
    case "zip":
      return await compressFiles({
        compressor: "zip",
        filepaths,
        write,
        opts: { overwrite: true },
      });
    case "tar":
      return await compressFiles({ compressor: "tar", filepaths, write });
    case "tgz":
      return await compressFiles({ compressor: "tgz", filepaths, write });
    default:
      console.error(`Compressor ${pack} not implemented.`);
      break;
  }
}
/**
 * Uses one of the available compressors to compress 'filepaths'
 * into the 'write' path.
 */
async function compressFiles(
  args: {
    compressor: string;
    filepaths: string[];
    write: string;
    opts?: { overwrite: boolean };
  },
) {
  const { compressor, filepaths, write, opts } = args;
  // archivePath is the absolute path where the files to be compressed will be put.
  // 'write' is relative to the working directory.
  const archivePath = path.join(Deno.cwd(), write);

  // archiveName: name of the compressed file
  const archiveName = `${archivePath}.${compressor}`;

  // Create the directory to be compressed.
  fs.ensureDirSync(archivePath);

  // Move the filepaths to be compressed into the target directory.
  for (const filepath of filepaths) {
    // Get the filepath's file name, and join it with the archivePath.
    const destinationFilepath = path.join(archivePath, path.basename(filepath));
    // copy the filepath into the directory to be compressed.
    Deno.copyFileSync(filepath, destinationFilepath);
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
  remove(archivePath, { recursive: true });
  return true;
}
