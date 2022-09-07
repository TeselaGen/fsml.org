import create from "./create" ;
import _import from "./import" ;
import { commandFactory } from "../utils" ;

export default commandFactory({
  command: "manifest <command>",
  subCommands: [create, _import],
});
