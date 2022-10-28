import { Arguments, Yargs } from "@fsml/cli/deps/yargs.ts";
import { getConfigs } from "@fsml/cli/handlers/defaults/utils.ts";

async function applyDefaults(yargs: Yargs): Promise<Yargs> {
  const argv = yargs.argv;
  // NOTE: the first argument in the command matches the model or section
  // in the configs file.
  // @ts-ignore:next-line : I think typescript assumes "_" properties are private
  // and cant be read
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
  describe,
}: {
  command: string;
  subCommands: {
    command: string;
    describe?: string;
    builder: (yargs: Yargs) => void;
    handler: (args: Arguments) => void;
  }[];
  describe?: string;
}) {
  return {
    command,
    describe,
    builder: async (yargs: Yargs) =>
      // @ts-ignore:next-line : harmless signature type mismatch for handler function.
      (await applyDefaults(yargs)).command([...subCommands]),
    handler: () => {},
  };
}
