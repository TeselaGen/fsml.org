import defaults from "./defaults/mod.ts";
import manifest from "./manifest/mod.ts";
import plugins from "./plugin/mod.ts";
// import registries from "./registries/mod.ts";

const commands = [
  defaults,
  manifest,
  plugins,
  // registries
];

export default commands;
