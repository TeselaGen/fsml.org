import { edit } from "handlers/defaults/index.ts";

function builder(yargs) {
  yargs.option("section", {
    type: "string",
    describe: "Config section",
  });
}

function handler({ section }) {
  edit({ section });
}

const defaults = {
  command: "defaults",
  describe: "Interactive mode to set config defaults",
  builder,
  handler,
};

export default defaults;
