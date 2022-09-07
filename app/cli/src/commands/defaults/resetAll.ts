import { Argv } from 'yargs';
import { resetAll } from '../../handlers/defaults';

function builder(yargs: Argv) {
  return yargs.option('confirm', {
    type: 'string',
    describe: 'Overrides confirmation prompt',
  });
}

export default {
  command: 'reset-all',
  describe: 'Resets the value of all configs.',
  builder,
  handler: resetAll,
};
