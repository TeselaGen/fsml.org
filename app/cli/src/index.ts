import yargs from 'yargs';
import defaultsCommand from './commands/defaults';
import manifestCommand from './commands/manifest';

yargs(process.argv.slice(2))
  .command(defaultsCommand)
  .demandCommand()
  .command(manifestCommand)
  .demandCommand()
  .help()
  .parse();
