import { yargs } from "@fsml/cli/deps.ts";
import { reset } from "@fsml/cli/handlers/defaults/index.ts";

function builder(yargs: yargs.Yargs) {
  yargs.positional("key", {
    type: "string",
    describe: "Config key path",
  });
}

function handler(argv: yargs.Arguments) {
  reset({ key: argv.key });
}

export default {
  command: "reset <key>",
  describe: "Resets the value of a config key.",
  builder,
  handler,
};
