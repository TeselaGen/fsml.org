import { yargs } from "@fsml/cli/deps.ts";
import { resetAll } from "@fsml/cli/handlers/defaults/index.ts";

function builder(yargs: yargs.Yargs) {
  yargs.option("confirm", {
    type: "string",
    describe: "Overrides confirmation prompt",
  });
}

function handler(argv: yargs.Arguments) {
  resetAll({ confirm: argv.confirm });
}

export default {
  command: "reset-all",
  describe: "Resets the value of all configs.",
  builder,
  handler,
};
