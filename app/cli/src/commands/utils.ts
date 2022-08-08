import { getConfigs } from "@cli/handlers/defaults/utils.ts";
import { yargs } from "@cli/deps.ts";

async function applyDefaults(yargs: yargs.Yargs) {
  const argv = yargs.argv;
  const model = argv._[0];
  const modelConfigs = await getConfigs({ section: model });
  Object.keys(modelConfigs).forEach((configKey) =>
    yargs.default(configKey, modelConfigs[configKey])
  );
  return yargs;
}

export function commandFactory({
  command,
  subCommands,
}: {
  command: string;
  subCommands: {
    command: string;
    describe?: string;
    builder: (yargs: yargs.Yargs) => void;
    handler: (args: yargs.Arguments) => void;
  }[];
}) {
  return {
    command,
    builder: async (yargs: yargs.Yargs) =>
      (await applyDefaults(yargs)).command([...subCommands]),
    handler: () => {},
  };
}
