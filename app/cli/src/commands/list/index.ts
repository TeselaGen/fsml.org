import defaults from "./defaults.ts";
import plugins from "./plugins.ts";

const list = {
  command: "list <command>",
  builder: (yargs) => yargs.command([defaults, plugins]),
  handler: () => {},
};

export default list;
