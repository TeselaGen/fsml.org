import { yargs } from "@cli/deps.ts";
import { list } from "@cli/handlers/defaults/index.ts";

function builder(yargs: yargs.Yargs) {
  yargs.option("format", {
    type: "string",
    describe: "stdout format for configs",
    choices: ["yaml", "json"],
  });
}

function handler(argv: yargs.Arguments) {
  list({ format: argv.format });
}

const defaults = {
  command: "defaults",
  describe: "Lists default configs",
  builder,
  handler,
};

export default defaults;
