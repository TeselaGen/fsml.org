import create from "./create.ts";
import { commandFactory } from "../utils.ts";

export default commandFactory({
  command: "manifest <command>",
  subCommands: [create],
});
