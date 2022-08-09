import { Arguments, Yargs } from "@fsml/cli/deps/yargs.ts";
import { set } from "@fsml/cli/handlers/defaults/index.ts";

function builder(yargs: Yargs) {
  yargs.positional("key", {
    type: "string",
    describe: "Config key path",
  }).positional("value", {
    type: "string",
    describe: "Value for config key",
  });
}

function handler(argv: Arguments) {
  const { key, value } = argv;
  set({ key, value });
}

export default {
  command: "set <key> <value>",
  describe: "Sets a new default value for a config key",
  builder,
  handler,
};
