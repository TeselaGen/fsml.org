import { Yargs } from "@fsml/cli/deps/yargs.ts";
import { edit } from "@fsml/cli/handlers/defaults/mod.ts";

function builder(yargs: Yargs) {
  yargs.option("section", {
    type: "string",
    describe: "Config section",
  });
}
export default {
  command: "edit",
  describe: "Interactive mode to edit config defaults",
  builder,
  handler: edit,
};
