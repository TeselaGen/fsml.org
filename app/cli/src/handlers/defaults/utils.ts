import { lodash, path, typebox, yaml } from "src/deps.ts";
import { jsonToText, toStdOut } from "../../utils.ts";
import { Configs, TConfigs } from "types/configs.ts";

const __dirname = path.dirname(path.fromFileUrl(import.meta.url));
const DEFAULT_CONFIG_FILEPATH = path.normalize(
  path.join(__dirname, "../../default_configs.yaml"),
);
const USER_CONFIG_FILEPATH = path.normalize(
  path.join(__dirname, "../../configs.yaml"),
);

async function getDefaultConfigs() {
  const defaultConfigsText = await Deno.readTextFile(DEFAULT_CONFIG_FILEPATH);
  return await yaml.parse(defaultConfigsText);
}

async function getConfigs({ section }: { section?: string } = {}) {
  const defaultConfigs = await getDefaultConfigs();
  const configsText = await Deno.readTextFile(USER_CONFIG_FILEPATH);

  const configs = await yaml.parse(configsText);

  const finalConfigs = lodash.merge(defaultConfigs, configs || {});

  if (section) return finalConfigs[section];

  return finalConfigs;
}

async function saveConfigs(newConfigs: TConfigs) {
  if (await validateConfigs(newConfigs)) {
    const newConfigTextFile = await yaml.stringify(newConfigs);
    await Deno.writeTextFile(USER_CONFIG_FILEPATH, newConfigTextFile);
  }
}

function editConfigs({
  configs,
  parentPath,
}: {
  configs: TConfigs;
  parentPath?: string;
}) {
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
      const newValue = parseConfigValue(
        prompt(`${currentPath}:`, currentConfig),
      );
      lodash.set(configs, key, newValue);
    }
  }
}

// TODO: Switch to using a prompter that allows typing,
// for instance, https://deno.land/x/ask@1.0.5.
function parseConfigValue(value: string) {
  switch (value) {
    case "null":
      return null;
    case "true":
      return true;
    case "false":
      return false;
    default:
      return value;
  }
}

function validateConfigs(configs: TConfigs) {
  const ConfigsCompiler = typebox.TypeCompiler.Compile(Configs);
  const isValid = ConfigsCompiler.Check(configs);
  // NOTE: these config error messages may be too verbose
  // typebox documentation also references ajv for validation: https://deno.land/x/typebox@0.24.27#validation
  const configsErrors = [...ConfigsCompiler.Errors(configs)];
  if (!isValid) {
    configsErrors.forEach(async (error) =>
      toStdOut(await jsonToText({ format: "json", content: error }))
    );
  }
  return isValid;
}

export {
  editConfigs,
  getConfigs,
  getDefaultConfigs,
  parseConfigValue,
  saveConfigs,
};
