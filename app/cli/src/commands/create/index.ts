import manifest from "./manifest.ts";
import { getConfigs } from "handlers/defaults/utils.ts";

/** Relocate this configs middleware */
async function configsMiddleware(argv) {
    const model = argv._[1]
    const modelConfigs = await getConfigs({ section: model })
    const argvWithConfigs = { ...modelConfigs, ...argv }
    return argvWithConfigs
}

const create = {
    command: "create <command>",
    builder: (yargs) => yargs.command([manifest]).middleware(configsMiddleware),
    handler: () => { },
};

export default create;
