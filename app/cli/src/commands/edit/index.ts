import defaults from "./defaults.ts";

const edit = {
  command: "edit <command>",
  builder: (yargs) => yargs.command([defaults]),
  handler: () => {},
};

export default edit;
