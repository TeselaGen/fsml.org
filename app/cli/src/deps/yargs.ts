// import yargs from "https://esm.sh/yargs@v17.5.1";
import yargs from "https://deno.land/x/yargs@v17.5.1-deno/deno.ts";
import { Arguments } from "https://deno.land/x/yargs@v17.5.1-deno/deno-types.ts";
// NOTE: Check if deno-types now exports a type for the yargs instance.
import _Yargs from "https://esm.sh/yargs@17.5.1";

type Options = _Yargs.Options;
type Yargs = ReturnType<typeof _Yargs>;

export type { Arguments, Options, Yargs };
export default yargs;
