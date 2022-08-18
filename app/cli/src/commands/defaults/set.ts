import { Yargs } from "@fsml/cli/deps/yargs.ts";
import { set } from "@fsml/cli/handlers/defaults/mod.ts";

function builder(yargs: Yargs) {
  yargs.positional("key", {
    type: "string",
    describe: "Config key path",
  }).positional("value", {
    type: "string",
    describe: "Value for config key",
  });
}

export default {
  command: "set <key> <value>",
  describe: "Sets a new default value for a config key",
  builder,
  handler: set,
};
