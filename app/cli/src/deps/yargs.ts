// import yargs from "https://esm.sh/yargs@v17.5.1";
import yargs from "https://deno.land/x/yargs@v17.5.1-deno/deno.ts";
import { Arguments } from "https://deno.land/x/yargs@v17.5.1-deno/deno-types.ts";

// NOTE: Check if deno-types now exports a type for the yargs instance
// and use that one insetad.
import _Yargs from "https://deno.land/x/yargs@v17.5.1-deno/browser.d.ts";
type Yargs = ReturnType<typeof _Yargs>;

export type { Arguments, Yargs };
export default yargs;
