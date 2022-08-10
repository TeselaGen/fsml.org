// NOTE: not all of typebox API can be directly imported in deno, one solution was
// to use esm.sh. https://github.com/sinclairzx81/typebox/issues/216
import { Value } from "https://esm.sh/@sinclair/typebox@0.24.27/value";
import { TypeCompiler } from "https://esm.sh/@sinclair/typebox@0.24.27/compiler";

export * from "https://deno.land/x/typebox@0.24.27/src/typebox.ts";
export { TypeCompiler, Value };
