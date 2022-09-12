import { Yargs } from "@fsml/cli/deps/yargs.ts";
import { uninstall } from "@fsml/cli/handlers/plugins/mod.ts";

function builder(yargs: Yargs) {
  yargs.positional("module", {
    type: "string",
    describe: "Module 'name[@version]' to be uninstalled.",
  });
}

export default {
  command: "uninstall <module>",
  describe:
    "Uninstalls the plugin by removing all local reference to it and any related cache.",
  builder,
  handler: uninstall,
};
