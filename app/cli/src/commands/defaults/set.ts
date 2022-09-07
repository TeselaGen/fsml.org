import { Argv } from 'yargs';
import { set } from '../../handlers/defaults';

function builder(yargs: Argv) {
  return yargs
    .positional('key', {
      type: 'string',
      describe: 'Config key path',
    })
    .positional('value', {
      type: 'string',
      describe: 'Value for config key',
    });
}

export default {
  command: 'set <key> <value>',
  describe: 'Sets a new default value for a config key',
  builder,
  handler: set,
};
