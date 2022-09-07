import edit from "./edit" ;
import list from "./list" ;
import set from "./set" ;
import reset from "./reset" ;
import resetAll from "./resetAll" ;
import { commandFactory } from "../utils" ;

export default commandFactory({
  command: "defaults <command>",
  subCommands: [edit, list, set, reset, resetAll],
});
