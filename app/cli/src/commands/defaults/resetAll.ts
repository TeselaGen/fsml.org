import { Arguments } from "@fsml/cli/deps/yargs.ts";
import { resetAll } from "@fsml/cli/handlers/defaults/index.ts";

function builder(yargs: any) {
  yargs.option("confirm", {
    type: "string",
    describe: "Overrides confirmation prompt",
  });
}

function handler(argv: Arguments) {
  resetAll({ confirm: argv.confirm });
}

export default {
  command: "reset-all",
  describe: "Resets the value of all configs.",
  builder,
  handler,
};
