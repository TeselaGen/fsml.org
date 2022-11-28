import { fs, path } from "@fsml/cli/deps/mod.ts";
import { merge, set } from "@fsml/packages/utils/deps/lodash.ts";
import {
  jsonToText,
  read,
  textToJson,
  toFile,
  toStdOut,
  validateType,
} from "@fsml/packages/utils/mod.ts";
import { Configs, TConfigs, TConfigValue } from "@fsml/cli/types/configs.ts";

export const DEFAULT_CONFIGS = {
  "defaults": { "filepath": "./configs.yaml", "format": "yaml" },
  "manifest": {
    "author": null,
    "format": "yaml",
    "write": null,
    "pack": null,
    "unpack": false,
    "summary": false,
  },
  "plugin": { "cache": false, "sort": "asc", "latest": true },
  "registry": { "platform": "git", "properties": "" },
};

const userHomePath = Deno.env.get("HOME") || "~/";
const homeFsmlPath = path.resolve(userHomePath, ".fsml/");

const USER_CONFIG_FILEPATH = path.normalize(
  path.join(homeFsmlPath, "./configs.yaml"),
);

function getDefaultConfigs() {
  return DEFAULT_CONFIGS;
}

async function getConfigs({ section }: { section?: string } = {}) {
  const defaultConfigs = getDefaultConfigs();
  fs.ensureFileSync(USER_CONFIG_FILEPATH);
  const configsText = read(USER_CONFIG_FILEPATH);

  const configs = await textToJson({ format: "yaml", text: configsText });

  const finalConfigs = merge(defaultConfigs, configs || {});

  if (section) return finalConfigs[section];

  return finalConfigs;
}

function saveConfigs(
  newConfigs: Partial<TConfigs>,
) {
  if (validateConfigs(newConfigs)) {
    const newConfigTextFile = jsonToText({
      format: "yaml",
      content: newConfigs,
    });
    toFile({
      filepath: USER_CONFIG_FILEPATH,
      content: newConfigTextFile,
    });
  }
}

function editConfigs({
  configs,
  parentPath,
}: {
  configs: { [key: string]: TConfigValue };
  parentPath?: string;
}) {
  for (const [key, currentConfig] of Object.entries(configs)) {
    const currentPath = parentPath ? `${parentPath}${key}` : key;
    if (typeof currentConfig === "object" && currentConfig !== null) {
      const enterSectionConfirmation = confirm(
        `Set defaults for config section '${currentPath}'?`,
      );
      if (enterSectionConfirmation) {
        editConfigs({ configs: currentConfig, parentPath: `${key}.` });
      } else continue;
    } else {
      const newValue = parseConfigValue(
        prompt(`${currentPath}:`, currentConfig?.toString()),
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

function validateConfigs(configs: Partial<TConfigs>) {
  const { isValid, errors } = validateType(Configs, configs);

  if (!isValid) {
    toStdOut(JSON.stringify(errors, null, 2));
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
