import list from "./list.ts";
import cache from "./cache.ts";
import install from "./install.ts";
import uninstall from "./uninstall.ts";
import upgrade from "./upgrade.ts";
import run from "./run.ts";
import { commandFactory } from "../utils.ts";

export default commandFactory({
  command: "plugin <subcommand>",
  describe: "Handles external plugin modules",
  subCommands: [
    install,
    uninstall,
    list,
    upgrade,
    cache,
    // uncache,
    run
  ],
});
