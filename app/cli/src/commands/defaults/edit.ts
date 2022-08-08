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

export default {
  command: "edit",
  describe: "Interactive mode to edit config defaults",
  builder,
  handler,
};
