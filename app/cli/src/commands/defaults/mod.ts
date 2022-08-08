import edit from "./edit.ts";
import list from "./list.ts";
import set from "./set.ts";
import reset from "./reset.ts";
import resetAll from "./resetAll.ts";
import { commandFactory } from "../utils.ts";

export default commandFactory({
  command: "defaults <command>",
  subCommands: [edit, list, set, reset, resetAll],
});
