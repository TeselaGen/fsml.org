import { reset } from "handlers/defaults/index.ts";

function builder(yargs) {
  yargs.positional("key", {
    type: "string",
    describe: "Config key path",
  });
}

function handler({ key }) {
  reset({ key });
}

const defaults = {
  command: "defaults <key>",
  describe: "Resets the value of a config key.",
  builder,
  handler,
};

export default defaults;
