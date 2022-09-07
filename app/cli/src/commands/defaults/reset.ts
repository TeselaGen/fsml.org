import { Argv } from 'yargs';
import { reset } from '../../handlers/defaults';

function builder(yargs: Argv) {
  return yargs.positional('key', {
    type: 'string',
    describe: 'Config key path',
  });
}

export default {
  command: 'reset <key>',
  describe: 'Resets the value of a config key.',
  builder,
  handler: reset,
};
