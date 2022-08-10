import yargs from "@fsml/cli/deps/yargs.ts";
import commands from "./commands/mod.ts";

yargs(Deno.args).command(commands).demandCommand().help().parse();
