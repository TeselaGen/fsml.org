import { Options, Yargs } from "@fsml/cli/deps/yargs.ts";
import { list } from "@fsml/cli/handlers/plugins/mod.ts";
import { PluginTypes } from "@fsml/packages/plugins/types.ts";

const OPTIONS: { [key: string]: Options } = {
  type: {
    alias: "t",
    type: "string",
    choices: Object.values(PluginTypes),
    describe: "Type of plugin",
  },
  regex: {
    alias: "r",
    type: "string",
    describe: "regex pattern for filtering plugins",
  },
  sort: {
    alias: "s",
    type: "string",
    choices: ["asc", "desc"],
    default: "desc",
    describe: "Sorts plugins in ascending/descending order.",
  },
};

function builder(yargs: Yargs) {
  yargs.options(OPTIONS);
}
export default {
  command: "list",
  describe: "Lists all installed plugins.",
  builder,
  handler: list,
};
