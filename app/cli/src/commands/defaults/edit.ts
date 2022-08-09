import { Arguments } from "@fsml/cli/deps/yargs.ts";
import { edit } from "@fsml/cli/handlers/defaults/index.ts";

function builder(yargs: any) {
  yargs.option("section", {
    type: "string",
    describe: "Config section",
  });
}

function handler(argv: Arguments) {
  edit({ section: argv.section });
}

export default {
  command: "edit",
  describe: "Interactive mode to edit config defaults",
  builder,
  handler,
};
