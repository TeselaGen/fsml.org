import { list } from "handlers/defaults/index.ts";

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
  command: "defaults",
  describe: "Lists default configs",
  builder,
  handler,
};

export default defaults;
