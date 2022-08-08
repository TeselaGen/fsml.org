import defaults from "./defaults.ts";
import plugins from "./plugins.ts";
import { commandFactory } from "../utils.ts"

export default commandFactory({ command: "list <command>", subCommands: [defaults, plugins] });

