import { get } from 'lodash-es';
import { Argv, CommandModule } from 'yargs';
import { getConfigs } from '../handlers/defaults/utils';

async function applyDefaults(yargs: Argv): Promise<Argv> {
  const argv = yargs.argv;
  // NOTE: the first argument in the command matches the model or section
  // in the configs file.
  // and cant be read
  const model = get(argv, '_')[0];
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
  subCommands: CommandModule[];
}): CommandModule {
  return {
    command,
    builder: async (yargs: Argv) => {
      let _yargs = await applyDefaults(yargs);
      subCommands.forEach((subCommand) => {
        _yargs = _yargs.command(subCommand);
      });
      return _yargs;
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    handler: () => {},
  };
}
