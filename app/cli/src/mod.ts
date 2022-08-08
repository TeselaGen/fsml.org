import { yargs } from "@cli/deps.ts";
import commands from "./commands/index.ts";

yargs(Deno.args).command(commands).demandCommand().help().argv;
