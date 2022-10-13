import yargs from "@fsml/cli/deps/yargs.ts";
import commands from "./commands/mod.ts";

yargs(Deno.args).scriptName("fsml").command(commands).demandCommand().parse();
