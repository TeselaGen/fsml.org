import { yaml } from "src/deps.ts";
import { lodash } from "src/deps.ts";

const DEFAULT_CONFIG_FILEPATH = "./src/default_configs.yaml";
const USER_CONFIG_FILEPATH = "./src/configs.yaml";

async function getDefaultConfigs() {
  const defaultConfigsText = await Deno.readTextFile(DEFAULT_CONFIG_FILEPATH);
  return await yaml.parse(defaultConfigsText);
}

async function getConfigs() {
  const defaultConfigs = await getDefaultConfigs();

  const configsText = await Deno.readTextFile(USER_CONFIG_FILEPATH);
  const configs = await yaml.parse(configsText);

  return { ...defaultConfigs, ...(configs || {}) };
}

async function setConfigs(newConfigs) {
  const newConfigTextFile = await yaml.stringify(newConfigs);
  await Deno.writeTextFile(USER_CONFIG_FILEPATH, newConfigTextFile);
}

async function edit() {}

/** CLI Commmands for "defaults" **/
async function list() {
  const configs = await getConfigs();
  return configs;
}

async function set({ key, value }) {
  const configs = await getConfigs();
  lodash.set(configs, key, value);
  await setConfigs(configs);
}

async function reset({ key }) {
  const configs = await getConfigs();

  // If the key is nested, this might leave the parent childless,
  // we could remove the parent in these cases or not, either way is equal.
  lodash.unset(configs, key);

  await setConfigs(configs);
}

async function resetAll({ confirm }) {
  if (confirm) await setConfigs({});
  else {
    // TODO: request user confirmation
  }
}

const defaults = {
  edit,
  list,
  set,
  reset,
  resetAll,
};

export default defaults;
