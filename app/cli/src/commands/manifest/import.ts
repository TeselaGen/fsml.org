import { Argv, Options } from 'yargs';
import { import as _import } from '../../handlers/manifest';

const OPTIONS: { [key: string]: Options } = {
  to: {
    alias: 't',
    type: 'string',
    demandOption: true,
    describe: 'Registry name/alias',
  },
  from: {
    alias: 'f',
    type: 'array',
    demandOption: true,
    describe: 'Registry name/alias',
  },
  'from-uri': {
    alias: 'u',
    type: 'array',
    demandOption: true,
    describe: 'download uri',
  },
};

function builder(yargs: Argv) {
  return yargs.options(OPTIONS).positional('id', {
    describe: 'Manifest ID',
    type: 'string',
  });
}

export default {
  command: 'import <id>',
  describe: 'Imports an FSML manifest from a registry',
  builder,
  handler: _import,
};
