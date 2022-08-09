import { Arguments } from "@fsml/cli/deps/yargs.ts";
import { reset } from "@fsml/cli/handlers/defaults/index.ts";

function builder(yargs: any) {
  yargs.positional("key", {
    type: "string",
    describe: "Config key path",
  });
}

function handler(argv: Arguments) {
  reset({ key: argv.key });
}

export default {
  command: "reset <key>",
  describe: "Resets the value of a config key.",
  builder,
  handler,
};
