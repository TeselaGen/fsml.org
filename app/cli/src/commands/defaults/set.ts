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

export default {
  command: "set <key> <value>",
  describe: "Sets a new default value for a config key",
  builder,
  handler,
};
