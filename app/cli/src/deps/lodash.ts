// This brings just the necessary lodash functions needed instead of pulling the whole package.
import identity from "https://deno.land/x/lodash@4.17.15-es/identity.js";
import get from "https://deno.land/x/lodash@4.17.15-es/get.js";
import set from "https://deno.land/x/lodash@4.17.15-es/set.js";
import unset from "https://deno.land/x/lodash@4.17.15-es/unset.js";
import isNil from "https://deno.land/x/lodash@4.17.15-es/isNil.js";
import merge from "https://deno.land/x/lodash@4.17.15-es/merge.js";
export { get, identity, isNil, merge, set, unset };
