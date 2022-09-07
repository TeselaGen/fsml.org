import { ExecutorContext } from '@nrwl/devkit';
// NOTE: tried with execa but stumbled upon some ESM issues.
import { execSync } from 'child_process';

type RollupOptions = {
  entrypoint: string;
  rollupConfig: string;
};

function rollupExecutor(options: RollupOptions, _context: ExecutorContext) {
  const { rollupConfig, entrypoint } = options;

  const command = `rollup -c ${rollupConfig} -i ${entrypoint}`;

  execSync(command, {
    stdio: 'inherit',
  });

  return { success: true };
}

export default rollupExecutor;

// TODO: Move this rollup executor build command to somwehere else.
//
// Build with: `npx tsc tools/executors/rollup/impl.ts`
