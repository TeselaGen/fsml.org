import { Options, Yargs } from "@fsml/cli/deps/yargs.ts";
import { import as _import } from "@fsml/cli/handlers/manifest/mod.ts";

const OPTIONS: { [key: string]: Options } = {
  to: {
    alias: "t",
    type: "string",
    demandOption: true,
    describe: "Registry name/alias",
  },
  from: {
    alias: "f",
    type: "array",
    demandOption: true,
    describe: "Registry name/alias",
  },
  "from-uri": {
    alias: "u",
    type: "array",
    demandOption: true,
    describe: "download uri",
  },
};

function builder(yargs: Yargs) {
  yargs.options(OPTIONS).positional("id", {
    describe: "Manifest ID",
    type: "string",
  });
}

export default {
  command: "import <id>",
  describe: "Imports an FSML manifest from a registry",
  builder,
  handler: _import,
};
