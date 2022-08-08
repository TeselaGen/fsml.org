import { yaml, lodash, path } from "src/deps.ts";

const __dirname = path.dirname(path.fromFileUrl(import.meta.url));
const DEFAULT_CONFIG_FILEPATH = path.normalize(path.join(__dirname, "../../default_configs.yaml"));
const USER_CONFIG_FILEPATH = path.normalize(path.join(__dirname, "../../configs.yaml"));

async function getDefaultConfigs() {
  const defaultConfigsText = await Deno.readTextFile(DEFAULT_CONFIG_FILEPATH);
  return await yaml.parse(defaultConfigsText);
}

async function getConfigs({ section } = {}) {
  const defaultConfigs = await getDefaultConfigs();
  const configsText = await Deno.readTextFile(USER_CONFIG_FILEPATH);

  const configs = await yaml.parse(configsText);

  const finalConfigs = lodash.merge(defaultConfigs, configs || {});

  if (section)
    return finalConfigs[section]

  return finalConfigs
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
    if (!lodash.isNil(currentConfig) && typeof currentConfig === "object") {
      const enterSectionConfirmation = confirm(
        `Set defaults for config section '${currentPath}'?`,
      );
      if (enterSectionConfirmation) {
        editConfigs({ configs: currentConfig, parentPath: `${key}.` });
      } else continue;
    } else {
      const newValue = prompt(`${currentPath}:`);
      lodash.set(configs, key, newValue || currentConfig);
    }
  }
}

export { editConfigs, getConfigs, getDefaultConfigs, setConfigs };
