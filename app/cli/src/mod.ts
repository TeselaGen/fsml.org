import yargs from "@fsml/cli/deps/yargs.ts";
import commands from "./commands/index.ts";

const input = yargs(Deno.args).command(commands).demandCommand().help();
input.parse();
