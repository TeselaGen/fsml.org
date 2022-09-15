import { Yargs } from "@fsml/cli/deps/yargs.ts";
import { cache } from "@fsml/cli/handlers/plugins/mod.ts";

function builder(yargs: Yargs) {
  yargs.option("all", {
    type: "boolean",
    describe: "Caches all installed plugins",
  });
}
export default {
  command: "cache <module>",
  describe: "Force plugin to be downloaded and cached locally",
  builder,
  handler: cache,
};
