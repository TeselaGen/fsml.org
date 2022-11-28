import { Yargs } from "@fsml/cli/deps/yargs.ts";
import { validate } from "@fsml/cli/handlers/manifest/mod.ts";

function builder(yargs: Yargs) {
  yargs.positional("filepath", {
    describe: "FSML Manifest absolute file path",
    type: "string",
  });
}

export default {
  command: "validate <filepath>",
  describe: "Validate an FSML manifest",
  builder,
  handler: validate,
};
