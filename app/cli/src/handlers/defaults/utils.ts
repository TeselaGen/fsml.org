import { path, yaml } from "@fsml/cli/deps/mod.ts";
import { isNil, merge, set } from "@fsml/cli/deps/lodash.ts";
import { TypeCompiler } from "@fsml/cli/deps/typebox.ts";
import { jsonToText, toStdOut } from "@fsml/packages/utils/mod.ts";
import { Configs } from "@fsml/cli/types/configs.ts";

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

  const finalConfigs = merge(defaultConfigs, configs || {});

  if (section) return finalConfigs[section];

  return finalConfigs;
}

async function saveConfigs(newConfigs: { [key: string]: any }) {
  if (validateConfigs(newConfigs)) {
    const newConfigTextFile = yaml.stringify(newConfigs);
    await Deno.writeTextFile(USER_CONFIG_FILEPATH, newConfigTextFile);
  }
}

function editConfigs({
  configs,
  parentPath,
}: {
  configs: { [key: string]: any };
  parentPath?: string;
}) {
  const configKeys = Object.keys(configs);
  for (const key of configKeys) {
    const currentPath = parentPath ? `${parentPath}${key}` : key;
    const currentConfig: string = configs[key];
    if (!isNil(currentConfig) && typeof currentConfig === "object") {
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
      set(configs, key, newValue);
    }
  }
}

// TODO: Switch to using a prompter that allows typing,
// for instance, https://deno.land/x/ask@1.0.5.
function parseConfigValue(value: string | null) {
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

function validateConfigs(configs: { [key: string]: any }) {
  //@ts-ignore:next-line : This seems like an issue with typebox types.
  const ConfigsCompiler = TypeCompiler.Compile(Configs);
  const isValid = ConfigsCompiler.Check(configs);
  // NOTE: these config error messages may be too verbose
  // typebox documentation also references ajv for validation: https://deno.land/x/typebox@0.24.27#validation
  const configsErrors = [...ConfigsCompiler.Errors(configs)];
  if (!isValid) {
    configsErrors.forEach((error) =>
      toStdOut(jsonToText({ format: "json", content: error }))
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
