import { yargs } from "@cli/deps.ts";
import { reset } from "@cli/handlers/defaults/index.ts";

function builder(yargs: yargs.Yargs) {
  yargs.positional("key", {
    type: "string",
    describe: "Config key path",
  });
}

function handler(argv: yargs.Arguments) {
  reset({ key: argv.key });
}

const defaults = {
  command: "defaults <key>",
  describe: "Resets the value of a config key.",
  builder,
  handler,
};

export default defaults;
