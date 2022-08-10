import { Arguments } from "@fsml/cli/deps/yargs.ts";
import { set as _set, unset } from "@fsml/cli/deps/lodash.ts";
import { jsonToText, toStdOut } from "@fsml/cli/utils.ts";
import {
  editConfigs,
  getConfigs,
  parseConfigValue,
  saveConfigs,
} from "./utils.ts";

/** CLI "defaults" commmand handlers **/
async function edit(args: Arguments) {
  const { section } = args;
  const configs = await getConfigs();
  const configsToBeSet = section ? configs[section] : configs;
  editConfigs({ configs: configsToBeSet });
  await saveConfigs(configs);
}

async function list(args: Arguments) {
  const { format } = args;
  const configs = await getConfigs();
  const _format = format || configs?.defaults?.format;

  const stdout_text: string = await jsonToText({
    format: _format,
    content: configs,
  });
  await toStdOut(stdout_text);
}

async function set(args: Arguments) {
  const { key, value } = args;
  const configs = await getConfigs();
  _set(configs, key, parseConfigValue(value));
  await saveConfigs(configs);
}

async function reset(args: Arguments) {
  const { key } = args;
  const configs = await getConfigs();

  // If the key is nested, this might leave the parent childless,
  // we could remove the parent in these cases or not, either way the config is reset.
  unset(configs, key);

  await saveConfigs(configs);
}

async function resetAll(args: Arguments) {
  const { confirm: confirmOverride } = args;
  const _confirmed = confirmOverride ||
    confirm("Do you confirm reseting all defaults?");
  if (_confirmed) {
    await saveConfigs({});
    console.info("All config defaults have been reset.");
  } else {
    console.info("Command cancelled.");
  }
}

export { edit, list, reset, resetAll, set };
