import { path } from "@fsml/cli/deps/mod.ts";
import { TypeCompiler } from "@fsml/cli/deps/typebox.ts";
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

import {
  importPlugin,
  IParser,
  isParser,
} from "@fsml/cli/handlers/plugins/utils.ts";
import ManifestGenerator from "./generator.ts";
import DefaultDataParser from "./data-parser.ts";

// NOTE: update this with some default config for the manifest
// filename, and also maybe path.
const FSML_MANIFEST_FILEPATH = (format: string) =>
  path.join(Deno.cwd(), `fsml.${format}`);

// WIP: Needs to be extended so that can accept a parser
// and data to be parsed.
export async function generateManifest(
  args: {
    parser: string[];
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
 * @param filepath input data filepath
 * @param parser one or many potential parsers for input file
 * @returns The selected parser.
 */
export async function selectParser(
  filepath: string,
  parser?: string | string[],
): Promise<IParser | void> {
  if (Array.isArray(parser)) {
    // TODO: implement parser finding logic.
    // Plan is to select a single parser from the array of parsers
    // based on some boolean heuristic function each parser implements
    // that should tell whether the parser is able to parse the given file.

    // dynamically import parser plugins.
    const plugins = await Promise.all(
      parser.map((_parser) => importPlugin(_parser)),
    );

    // Filter any plugin that is not a parser plugin.
    const parserPlugin = plugins.filter(isParser);

    console.info(`Finding parser for '${filepath}'...`);
    // Filter all non-applicable parsers for the given data file.
    // TODO: This could be made parallelizable (e.g., with deno workers).
    const applicableParsersPlugins = (await Promise.all(
      parserPlugin.filter((plugin) => plugin.isApplicable(filepath)),
    ));

    // TODO: When many parsers are applicable, extend this
    // to let the user choose via a prompt. (choosing first one for now).
    const selectedParser = applicableParsersPlugins[0];
    return selectedParser;
  }

  if (parser) {
    const plugin = await importPlugin(parser);
    if (isParser(plugin)) {
      if (!await plugin.isApplicable(filepath)) return plugin;
    }
  }
  // If no parser is provided use the default parser if applicable.
  if (await DefaultDataParser.isApplicable(filepath)) return DefaultDataParser;

  console.info(`No applicable parser found for '${filepath}'`);
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

// async function parseDataFiles(args: any) {}

function validateManifest(manifest: TManifest): boolean {
  //@ts-ignore:next-line : This seems like an issue with typebox types.
  const ManifestCompiler = TypeCompiler.Compile(Manifest);
  const isValid = ManifestCompiler.Check(manifest);
  const manifestErrors = [...ManifestCompiler.Errors(manifest)];
  if (!isValid) {
    toStdOut("Error in Manifest: \n")
    manifestErrors.forEach((error) =>
      // NOTE: Maybe extend it so that these errors can be written
      // into a log file.
      toStdOut(jsonToText({ format: "json", content: error }))
    );
  }
  return isValid;
}
