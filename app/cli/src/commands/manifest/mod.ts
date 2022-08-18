import create from "./create.ts";
import _import from "./import.ts";
import { commandFactory } from "../utils.ts";

export default commandFactory({
  command: "manifest <command>",
  subCommands: [create, _import],
});
