import { getConfigs } from "handlers/defaults/utils.ts";

async function applyDefaults(yargs) {
    const argv = yargs.argv
    const model = argv._[1]
    const modelConfigs = await getConfigs({ section: model })
    Object.keys(modelConfigs).forEach(configKey => yargs.default(configKey, modelConfigs[configKey]))
    return yargs
}

export function commandFactory({ command, subCommands }) {
    return {
        command,
        builder: async (yargs) => (await applyDefaults(yargs)).command([...subCommands]),
        handler: () => { }
    }
}
