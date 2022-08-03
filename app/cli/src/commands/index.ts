import edit from "./edit/index.ts";
import list from "./list/index.ts";
import set from "./set/index.ts";
import reset from "./reset/index.ts";
import resetAll from "./resetAll/index.ts";
import create from "./create/index.ts";

const commands = [
  edit,
  list,
  set,
  reset,
  resetAll,
  create
];

export default commands;
