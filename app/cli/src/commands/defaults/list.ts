import { Arguments } from "@fsml/cli/deps/yargs.ts";
import { list } from "@fsml/cli/handlers/defaults/index.ts";

function builder(yargs: any) {
  yargs.option("format", {
    type: "string",
    describe: "stdout format for configs",
    choices: ["yaml", "json"],
  });
}

function handler(argv: Arguments) {
  list({ format: argv.format });
}

export default {
  command: "list",
  describe: "Lists default configs",
  builder,
  handler,
};
