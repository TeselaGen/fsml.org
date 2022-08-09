// NOTE: /x/compress seems like a complete compression tool with the most standard
// compressors. 'ZIP' though is progress with /x/deno-zip in mind as a solution.
// using x/zip for now by also mimicking /x/compress/ api.
import { tar, tgz } from "https://deno.land/x/compress@v0.4.5/mod.ts";
import {
  compress as _compress,
  decompress as _decompress,
} from "https://deno.land/x/zip@v1.2.3/mod.ts";

const compress: {
  [key: string]: { compress: any; uncompress: any };
} = {
  zip: {
    compress: _compress,
    uncompress: _decompress,
  },
  tar,
  tgz,
};

export default compress;
