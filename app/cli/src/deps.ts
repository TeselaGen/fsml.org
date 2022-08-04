// This brings just the necessary lodash functions needed instead of pulling the whole package.
import get from "https://deno.land/x/lodash@4.17.15-es/get.js";
import set from "https://deno.land/x/lodash@4.17.15-es/set.js";
import unset from "https://deno.land/x/lodash@4.17.15-es/unset.js";
import isNil from "https://deno.land/x/lodash@4.17.15-es/isNil.js";
import merge from "https://deno.land/x/lodash@4.17.15-es/merge.js";
const lodash = {
  get,
  set,
  unset,
  isNil,
  merge,
};

import yargs from "https://deno.land/x/yargs@v17.5.1-deno/deno.ts";

// NOTE: /x/compress seems like a complete compression tool with the most standard
// compressors. 'ZIP' though is progress with /x/deno-zip in mind as a solution.
// using x/zip for now by also mimicking /x/compress/ api.
import { tar, tgz } from "https://deno.land/x/compress@v0.4.5/mod.ts"
import {
  compress as _compress,
  decompress as _decompress
} from "https://deno.land/x/zip@v1.2.3/mod.ts";
const compress = {
  zip: {
    compress: _compress,
    decompress: _decompress
  },
  tar, tgz
}

// NOTE: typebox API cant be directly imported in deno, one solution was
// to use esm.sh. https://github.com/sinclairzx81/typebox/issues/216
import { Value } from "https://esm.sh/@sinclair/typebox@0.24.27/value/value?target=deno";
import { TypeCompiler } from "https://esm.sh/@sinclair/typebox@0.24.27/compiler/compiler?target=deno";

const typebox = {
  Value,
  TypeCompiler
}


export * as path from "https://deno.land/std@0.149.0/path/mod.ts";
export * as conversion from "https://deno.land/std@0.150.0/streams/conversion.ts";
export * as fs from "https://deno.land/std@0.150.0/fs/mod.ts"
export * as yaml from "https://deno.land/std@0.82.0/encoding/yaml.ts";
// export * as denoTypes from "https://deno.land/x/yargs@v17.5.1-deno/deno-types.ts";

export { lodash, yargs, compress, typebox };
