import { Argv } from 'yargs';
import { edit } from '../../handlers/defaults';

function builder(yargs: Argv) {
  return yargs.option('section', {
    type: 'string',
    describe: 'Config section',
  });
}
export default {
  command: 'edit',
  describe: 'Interactive mode to edit config defaults',
  builder,
  handler: edit,
};
