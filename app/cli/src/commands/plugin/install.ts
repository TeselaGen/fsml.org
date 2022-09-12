import { Yargs } from "@fsml/cli/deps/yargs.ts";
import { install } from "@fsml/cli/handlers/plugins/mod.ts";

function builder(yargs: Yargs) {
  yargs.option("cache", {
    type: "boolean",
    describe: "Caches the plugin",
  }).positional("module", {
    type: "string",
    describe:
      "Module to be installed in the format of name@version (latest version will be used by default)",
  });
}

export default {
  command: "install <module>",
  describe: "Installs the plugin by saving a local reference to it.",
  builder,
  handler: install,
};
