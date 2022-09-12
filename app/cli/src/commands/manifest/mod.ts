import create from "./create.ts";
import _import from "./import.ts";
import { commandFactory } from "../utils.ts";

export default commandFactory({
  command: "manifest <subcommand>",
  describe: "Operates with the FSML manifest",
  subCommands: [create, _import],
});
