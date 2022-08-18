import { Options, Yargs } from "@fsml/cli/deps/yargs.ts";
import {
  FormatTypes,
  ManifestTypes,
  PackTypes,
} from "@fsml/cli/types/enums.ts";
import { create } from "@fsml/cli/handlers/manifest/mod.ts";

const OPTIONS: { [key: string]: Options } = {
  type: {
    alias: "t",
    type: "string",
    demandOption: true,
    choices: Object.values(ManifestTypes),
    describe: "Type of FSML manifest",
  },
  parser: {
    alias: "p",
    // NOTE: Yargs doesnt seem to support specifying the
    // type of the array elements.
    type: "array",
    demandOption: false,
    // choices: INSTALLED_PLUGINS,
    describe: "Parsers needed for the FSML manifest data type",
  },
  write: {
    alias: "o",
    type: "string",
    demandOption: false,
    describe: "Filepath for FSML Manifest",
  },
  format: {
    alias: "f",
    type: "string",
    demandOption: false,
    choices: Object.values(FormatTypes),
    describe: "Output format for FSML Manifest",
  },
  pack: {
    alias: "z",
    type: "string",
    demandOption: false,
    choices: Object.values(PackTypes),
    describe: "Format in which to compress the FSML Manifest file",
  },
  author: {
    alias: "a",
    type: "string",
    demandOption: true,
    describe: "Author of the FSML manifest",
  },
};

function builder(yargs: Yargs) {
  yargs.options(OPTIONS).positional("filepattern", {
    describe: "Glob pattern for files to be included in the manifest.",
    type: "string",
  });
}

export default {
  command: "create <filepattern>",
  describe: "Creates an FSML manifest",
  builder,
  handler: create,
};
