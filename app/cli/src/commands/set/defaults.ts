import { yargs } from "@cli/deps.ts";
import { set } from "@cli/handlers/defaults/index.ts";

function builder(yargs: yargs.Yargs) {
  yargs.positional("key", {
    type: "string",
    describe: "Config key path",
  }).positional("value", {
    type: "string",
    describe: "Value for config key",
  });
}

function handler(argv: yargs.Arguments) {
  const { key, value } = argv;
  set({ key, value });
}

const defaults = {
  command: "defaults <key> <value>",
  describe: "Sets a new default value for a config key",
  builder,
  handler,
};

export default defaults;
