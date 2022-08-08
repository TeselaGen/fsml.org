import { yargs } from "@cli/deps.ts";
import { edit } from "@cli/handlers/defaults/index.ts";

function builder(yargs: yargs.Yargs) {
  yargs.option("section", {
    type: "string",
    describe: "Config section",
  });
}

function handler(argv: yargs.Arguments) {
  edit({ section: argv.section });
}

const defaults = {
  command: "defaults",
  describe: "Interactive mode to set config defaults",
  builder,
  handler,
};

export default defaults;
