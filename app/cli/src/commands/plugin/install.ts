import { Options, Yargs } from "@fsml/cli/deps/yargs.ts";
import { install } from "@fsml/cli/handlers/plugins/mod.ts";

const OPTIONS: { [key: string]: Options } = {
  cache: {
    type: "boolean",
    alias: "c",
    describe: "Caches the plugin",
  },
  ["from-url"]: {
    type: "string",
    alias: "u",
    describe: "Installs plugin from specific URL",
  },
};

function builder(yargs: Yargs) {
  yargs.options(OPTIONS).positional("module", {
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
