import defaults from "./defaults.ts";
import { commandFactory } from "../utils.ts"

export default commandFactory({ command: "reset <command>", subCommands: [defaults] });
