import { yaml } from "src/deps.ts";
import { lodash } from "src/deps.ts";
import { toStdOut } from "../../utils.ts";
import { editConfigs, getConfigs, setConfigs } from "./utils.ts";

/** CLI Commmands for "defaults" **/
async function edit({ section } = {}) {
  const configs = await getConfigs();
  const configsToBeSet = section ? configs[section] : configs;
  editConfigs({ configs: configsToBeSet });
  await setConfigs(configs);
}

async function list({ format } = {}) {
  const configs = await getConfigs();
  const _format = format || configs?.defaults?.format;

  const stdout_text: string = await jsonToText({ format: _format, content: configs })
  await toStdOut(stdout_text);
}

async function set({ key, value }) {
  const configs = await getConfigs();
  lodash.set(configs, key, value);
  await setConfigs(configs);
}

async function reset({ key }) {
  const configs = await getConfigs();

  // If the key is nested, this might leave the parent childless,
  // we could remove the parent in these cases or not, either way the config is reset.
  lodash.unset(configs, key);

  await setConfigs(configs);
}

async function resetAll({ confirm: confirmOverride } = {}) {
  const _confirmed = confirmOverride ||
    confirm("Do you confirm reseting all defaults?");
  if (_confirmed) {
    await setConfigs({});
    console.info("All config defaults have been reset.");
  } else {
    console.info("Command cancelled.");
  }
}

export { edit, list, reset, resetAll, set };
