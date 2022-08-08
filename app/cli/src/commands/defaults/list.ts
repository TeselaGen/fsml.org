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

export default {
  command: "list",
  describe: "Lists default configs",
  builder,
  handler,
};
