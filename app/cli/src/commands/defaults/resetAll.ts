import { Yargs } from "@fsml/cli/deps/yargs.ts";
import { resetAll } from "@fsml/cli/handlers/defaults/mod.ts";

function builder(yargs: Yargs) {
  yargs.option("confirm", {
    type: "string",
    describe: "Overrides confirmation prompt",
  });
}

export default {
  command: "reset-all",
  describe: "Resets the value of all configs.",
  builder,
  handler: resetAll,
};
