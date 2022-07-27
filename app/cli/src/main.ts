import yargs from "https://deno.land/x/yargs@v17.5.1-deno/deno.ts";
import { Arguments } from "https://deno.land/x/yargs@v17.5.1-deno/deno-types.ts";
/**
 * Returns the average of two numbers.
 *
 * @remarks
 * This method is part of the {@link core-library#Statistics | Statistics subsystem}.
 *
 * @param x - The first input number
 * @param y - The second input number
 * @returns The arithmetic mean of `x` and `y`
 *
 * @beta
 */
export function getAverage(x: number, y: number): number {
  return (x + y) / 2.0;
}

/**
 * download command
 *
 * @param yargs - a list of arguments
 */
yargs(Deno.args)
  .command(
    "download <files...>",
    "download a list of files",
    (yargs: Arguments) => {
      getAverage(2, 5);

      return yargs.positional("files", {
        describe: "a list of files to do something with",
      });
    },
    (argv: Arguments) => {
      console.info(argv);
      //hey
    },
  )
  .strictCommands()
  .demandCommand(1)
  .parse();
