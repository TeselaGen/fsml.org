import defaults from "./defaults.ts";

const reset = {
  command: "reset <command>",
  builder: (yargs) => yargs.command([defaults]),
  handler: () => {},
};

export default reset;
