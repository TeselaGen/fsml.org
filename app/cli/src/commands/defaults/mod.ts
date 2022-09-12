import edit from "./edit.ts";
import list from "./list.ts";
import set from "./set.ts";
import reset from "./reset.ts";
import resetAll from "./resetAll.ts";
import { commandFactory } from "../utils.ts";

export default commandFactory({
  command: "defaults <subcommand>",
  describe: "Configures default values for CLI flags",
  subCommands: [edit, list, set, reset, resetAll],
});
