// This brings just the necessary lodash functions needed instead of pulling the whole package.
import get from "https://deno.land/x/lodash@4.17.15-es/get.js";
import set from "https://deno.land/x/lodash@4.17.15-es/set.js";
import unset from "https://deno.land/x/lodash@4.17.15-es/unset.js";
import isNil from "https://deno.land/x/lodash@4.17.15-es/isNil.js";
import merge from "https://deno.land/x/lodash@4.17.15-es/merge.js";

import yargs from "https://deno.land/x/yargs@v17.5.1-deno/deno.ts";

export * as yaml from "https://deno.land/std@0.82.0/encoding/yaml.ts";
// export * as path from "https://deno.land/std@0.149.0/path/mod.ts";
export * as denoTypes from "https://deno.land/x/yargs@v17.5.1-deno/deno-types.ts";
export * as conversion from "https://deno.land/std@0.150.0/streams/conversion.ts";

const lodash = {
  get,
  set,
  unset,
  isNil,
  merge,
};

export { lodash, yargs };
