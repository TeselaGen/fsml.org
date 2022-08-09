import { Yargs } from "@fsml/cli/deps/yargs.ts";
import { reset } from "@fsml/cli/handlers/defaults/mod.ts";

function builder(yargs: Yargs) {
  yargs.positional("key", {
    type: "string",
    describe: "Config key path",
  });
}


export default {
  command: "reset <key>",
  describe: "Resets the value of a config key.",
  builder,
  handler: reset,
};
