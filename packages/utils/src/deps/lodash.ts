// This brings just the necessary lodash functions needed instead of pulling the whole package.
import identity from "https://deno.land/x/lodash@4.17.15-es/identity.js";
import get from "https://deno.land/x/lodash@4.17.15-es/get.js";
import set from "https://deno.land/x/lodash@4.17.15-es/set.js";
import unset from "https://deno.land/x/lodash@4.17.15-es/unset.js";
import isNil from "https://deno.land/x/lodash@4.17.15-es/isNil.js";
import merge from "https://deno.land/x/lodash@4.17.15-es/merge.js";
import omitBy from "https://deno.land/x/lodash@4.17.15-es/omitBy.js";
import isUndefined from "https://deno.land/x/lodash@4.17.15-es/isUndefined.js";
import uniqBy from "https://deno.land/x/lodash@4.17.15-es/uniqBy.js";
import find from "https://deno.land/x/lodash@4.17.15-es/find.js";
import sortBy from "https://deno.land/x/lodash@4.17.15-es/sortBy.js";
import every from "https://deno.land/x/lodash@4.17.15-es/every.js";
import partition from "https://deno.land/x/lodash@4.17.15-es/partition.js";
export {
  every,
  find,
  get,
  identity,
  isNil,
  isUndefined,
  merge,
  omitBy,
  partition,
  set,
  sortBy,
  uniqBy,
  unset,
};
