import defaults from "./defaults.ts";

const set = {
  command: "set <command>",
  builder: (yargs) => yargs.command([defaults]),
  handler: () => {},
};

export default set;
