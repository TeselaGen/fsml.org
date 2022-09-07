import { Argv } from 'yargs';
import { list } from '../../handlers/defaults';

function builder(yargs: Argv) {
  return yargs.option('format', {
    type: 'string',
    describe: 'stdout format for configs',
    choices: ['yaml', 'json'],
  });
}

export default {
  command: 'list',
  describe: 'Lists default configs',
  builder,
  handler: list,
};
