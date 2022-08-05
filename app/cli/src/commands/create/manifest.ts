import { ManifestTypes, FormatTypes, PackTypes } from "types/enums.ts"
import { create } from "handlers/manifest/index.ts";

const OPTIONS = {
    "type": {
        alias: "t",
        demandOption: true,
        choices: Object.values(ManifestTypes),
        describe: "Type of FSML manifest",
    },
    "parser": {
        alias: "p",
        // NOTE: Yargs doesnt seem to support specifying the type of the array elements.
        type: "array",
        demandOption: false,
        // choices: INSTALLED_PLUGINS,
        describe: "Parsers needed for the FSML manifest data type",
    },
    "write": {
        alias: "o",
        type: "string",
        demandOption: false,
        describe: "Filepath for FSML Manifest"
    },
    "format": {
        alias: "f",
        demandOption: false,
        choices: Object.values(FormatTypes),
        describe: "Output format for FSML Manifest"
    },
    "pack": {
        alias: "z",
        demandOption: false,
        choices: Object.values(PackTypes),
        describe: "Format in which to compress the FSML Manifest file"
    },
    "author": {
        alias: "a",
        type: "string",
        demandOption: true,
        describe: "Author of the FSML manifest"
    }
}

function builder(yargs) {
    yargs
        .options(OPTIONS)
        .positional("filepattern", {
            describe: "Glob pattern for files to be included in the manifest.",
            type: "string"
        })
}

function handler({ type, parser, format, write, pack, author, filepattern }) {
    create({ type, parser, format, write, pack, author, filepattern });
}

const manifest = {
    command: "manifest <filepattern>",
    describe: "Creates an FSML manifest",
    builder,
    handler,
};

export default manifest;