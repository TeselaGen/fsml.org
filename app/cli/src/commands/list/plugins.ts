import { list } from "handlers/plugins/index.ts";

function builder(yargs) {
  yargs.option("format", {
    type: "string",
    describe: "stdout format for configs",
    choices: ["yaml", "json"],
  });
}

function handler({ format }) {
  list({ format });
}

const defaults = {
  command: "plugins",
  describe: "Lists installed plugins",
  builder,
  handler,
};

export default defaults;
