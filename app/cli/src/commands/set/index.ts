import defaults from "./defaults.ts";
import { commandFactory } from "../utils.ts"

export default commandFactory({ command: "set <command>", subCommands: [defaults] });
