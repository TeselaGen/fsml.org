import { set } from "handlers/defaults/index.ts";

function builder(yargs) {
  yargs.positional("key", {
    type: "string",
    describe: "Config key path",
  }).positional("value", {
    type: "string",
    describe: "Value for config key",
  });
}

function handler({ key, value }) {
  set({ key, value });
}

const defaults = {
  command: "defaults <key> <value>",
  describe: "Sets a new default value for a config key",
  builder,
  handler,
};

export default defaults;
