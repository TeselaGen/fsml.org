import defaults from "./defaults.ts";

const resetAll = {
  command: "reset-all <command>",
  builder: (yargs) => yargs.command([defaults]),
  handler: () => {},
};

export default resetAll;
