import { Yargs } from "@fsml/cli/deps/yargs.ts";
import { list } from "@fsml/cli/handlers/defaults/mod.ts";

function builder(yargs: Yargs) {
  yargs.option("format", {
    type: "string",
    describe: "stdout format for configs",
    choices: ["yaml", "json"],
  });
}

export default {
  command: "list",
  describe: "Lists default configs",
  builder,
  handler: list,
};
