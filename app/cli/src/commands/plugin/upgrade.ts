import { Options, Yargs } from "@fsml/cli/deps/yargs.ts";
import { upgrade } from "@fsml/cli/handlers/plugins/mod.ts";

const OPTIONS: { [key: string]: Options } = {
  version: {
    alias: "v",
    type: "string",
    describe: "Upgrades to specific version.",
  },
  latest: {
    type: "boolean",
    describe: "Upgrades to the latest version",
  },
  major: {
    type: "boolean",
    default: false,
    describe: "Upgrades to latest major version",
  },
  minor: {
    type: "boolean",
    default: false,
    describe: "Upgrades to latest minor version",
  },
  patch: {
    type: "boolean",
    default: false,
    describe: "Upgrades to latest revision for current version",
  },
};

function builder(yargs: Yargs) {
  yargs.options(OPTIONS).positional("module", {
    type: "string",
    describe: "Module to be upgraded",
  });
}

export default {
  command: "upgrade <module>",
  describe: "Upgrades the plugin version.",
  builder,
  handler: upgrade,
};
