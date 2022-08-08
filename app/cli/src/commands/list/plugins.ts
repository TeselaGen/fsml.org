import { yargs } from "@cli/deps.ts";
import { list } from "@cli/handlers/plugins/index.ts";

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
  command: "plugins",
  describe: "Lists installed plugins",
  builder,
  handler,
};

export default defaults;
