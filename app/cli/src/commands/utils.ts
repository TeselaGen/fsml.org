import { getConfigs } from "@fsml/cli/handlers/defaults/utils.ts";
import { Arguments, Yargs } from "@fsml/cli/deps/yargs.ts";

async function applyDefaults(yargs: Yargs) {
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
    builder: (yargs: Yargs) => void;
    handler: (args: Arguments) => void;
  }[];
}) {
  return {
    command,
    builder: async (yargs: Yargs) =>
      (await applyDefaults(yargs)).command([...subCommands]),
    handler: () => {},
  };
}
