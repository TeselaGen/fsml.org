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

  return lodash.merge(defaultConfigs, configs || {});
}

async function setConfigs(newConfigs) {
  const newConfigTextFile = await yaml.stringify(newConfigs);
  await Deno.writeTextFile(USER_CONFIG_FILEPATH, newConfigTextFile);
}

function editConfigs({ configs, parentPath } = {}) {
  const configKeys = Object.keys(configs);
  for (const key of configKeys) {
    const currentPath = parentPath ? `${parentPath}${key}` : key;
    const currentConfig = configs[key];
    if (typeof currentConfig === "object") {
      const enterSectionConfirmation = confirm(
        `Set defaults for config section '${currentPath}'?`,
      );
      if (enterSectionConfirmation) {
        editConfigs({ configs: currentConfig, parentPath: `${key}.` });
      } else continue;
    } else {
      const newValue = prompt(`${currentPath}:`);
      lodash.isNil(newValue)
        ? lodash.unset(configs, key)
        : lodash.set(configs, key, newValue);
    }
  }
}

export { editConfigs, getConfigs, getDefaultConfigs, setConfigs };
