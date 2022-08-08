import defaults from "./defaults.ts";
import { commandFactory } from "../utils.ts";

export default commandFactory({
  command: "edit <command>",
  subCommands: [defaults],
});
