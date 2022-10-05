import { Yargs } from "@fsml/cli/deps/yargs.ts";
import { run } from "@fsml/cli/handlers/plugins/mod.ts";

function builder(yargs: Yargs) {
  yargs.positional("module", {
    type: "string",
    describe: "Plugin to run",
  });
}

export default {
  command: "run <module>",
  describe: "Runs the module",
  builder,
  handler: run,
};
