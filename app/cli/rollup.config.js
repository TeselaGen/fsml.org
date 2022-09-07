import * as path from 'path';
import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';

const SOURCE_DIR = 'app/cli/';
const DEST_DIR = 'dist/cli';

function inSrc(filename) {
  if (filename) return path.join(SOURCE_DIR, filename);
  return SOURCE_DIR;
}

function inDest(filename) {
  if (filename) return path.join(DEST_DIR, filename);
  return DEST_DIR;
}

const config = [
  {
    input: inSrc('src/index.ts'),
    output: {
      file: inDest('index.js'),
      sourcemap: true,
      // NOTE: couldnt make this work,
      // assetFileNames: 'app/cli/src/default_configs.yaml',
    },
    external: [],
    plugins: [
      typescript({ tsconfig: inSrc('tsconfig.app.json') }),
      copy({
        targets: [{ src: inSrc('src/default_configs.yaml'), dest: inDest() }],
      }),
    ],
  },
];
export default config;
