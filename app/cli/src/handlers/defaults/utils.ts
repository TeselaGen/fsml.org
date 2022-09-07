import * as yaml from 'yaml';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { merge, set } from 'lodash-es';
import { TypeCompiler } from '@sinclair/typebox/compiler/index.js';
import { jsonToText, toStdOut, read, toFile } from '@fsml.org/utils';
import { Configs, TConfigs, TConfigValue } from '../../types/configs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DEFAULT_CONFIG_FILEPATH = path.normalize(
  path.join(__dirname, '../../default_configs.yaml')
);
const USER_CONFIG_FILEPATH = path.normalize(
  path.join(__dirname, '../../configs.yaml')
);

async function getDefaultConfigs() {
  const defaultConfigsText = read(DEFAULT_CONFIG_FILEPATH);
  return await yaml.parse(defaultConfigsText);
}

async function getConfigs({ section }: { section?: string } = {}) {
  const defaultConfigs = await getDefaultConfigs();
  const configsText = read(USER_CONFIG_FILEPATH);

  const configs = await yaml.parse(configsText);

  const finalConfigs = merge(defaultConfigs, configs || {});

  if (section) return finalConfigs[section];

  return finalConfigs;
}

async function saveConfigs(newConfigs: Partial<TConfigs>) {
  if (validateConfigs(newConfigs)) {
    const newConfigTextFile = yaml.stringify(newConfigs);
    toFile({ filepath: USER_CONFIG_FILEPATH, content: newConfigTextFile });
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
    if (typeof currentConfig === 'object' && currentConfig !== null) {
      const enterSectionConfirmation = confirm(
        `Set defaults for config section '${currentPath}'?`
      );
      if (enterSectionConfirmation) {
        editConfigs({ configs: currentConfig, parentPath: `${key}.` });
      } else continue;
    } else {
      const newValue = parseConfigValue(
        prompt(`${currentPath}:`, currentConfig?.toString())
      );
      set(configs, key, newValue);
    }
  }
}

// TODO: Switch to using a prompter that allows typing,
// for instance, https://deno.land/x/ask@1.0.5.
function parseConfigValue(value: string | null) {
  switch (value) {
    case 'null':
      return null;
    case 'true':
      return true;
    case 'false':
      return false;
    default:
      return value;
  }
}

function validateConfigs(configs: Partial<TConfigs>) {
  const ConfigsCompiler = TypeCompiler.Compile(Configs);
  const isValid = ConfigsCompiler.Check(configs);
  // NOTE: these config error messages may be too verbose
  // typebox documentation also references ajv for validation: https://deno.land/x/typebox@0.24.27#validation
  const configsErrors = [...ConfigsCompiler.Errors(configs)];
  if (!isValid) {
    configsErrors.forEach((error) =>
      toStdOut(jsonToText({ format: 'json', content: error }))
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
