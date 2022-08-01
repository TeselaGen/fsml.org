import { resetAll } from "handlers/defaults/index.ts";

function builder(yargs) {
  yargs.option("confirm", {
    type: "string",
    describe: "Overrides confirmation prompt",
  });
}

function handler({ confirm }) {
  resetAll({ confirm });
}

const defaults = {
  command: "defaults",
  describe: "Resets the value of all configs.",
  builder,
  handler,
};

export default defaults;
