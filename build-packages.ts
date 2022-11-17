import * as path from 'https://deno.land/std@0.165.0/path/mod.ts';
import { existsSync } from 'https://deno.land/std@0.165.0/fs/mod.ts';
import { build, BuildOptions } from 'https://deno.land/x/dnt@0.31.0/mod.ts';

const PACKAGES_DIR = './packages';
const PACKAGE_CONFIG_FILE = 'dnt.config.json';

const [...packagesToBuild] = Deno.args;

const existingPackages = Array.from(Deno.readDirSync(PACKAGES_DIR));

for (const packageName of packagesToBuild) {
  const packageDir = getPkgDir(packageName);
  if (!packageDir) continue;

  const buildConfig = getPkgConfig(packageDir);
  await build_npm(buildConfig);
}

function getPkgConfig(packageDir: string): BuildOptions {
  const pkgConfigPath = path.join(packageDir, PACKAGE_CONFIG_FILE);
  // NOTE: read that they may bring 'existsSync' back from being deprecated.
  if (!existsSync(pkgConfigPath))
    throw new Error(`dnt.config.json file missing for package ${packageDir}`);
  const pkgConfig = JSON.parse(Deno.readTextFileSync(pkgConfigPath));
  return {
    ...pkgConfig,
    outDir: path.join(packageDir, pkgConfig.outDir),
    entryPoints: pkgConfig.entryPoints.map((entryPoint: string) =>
      path.join(packageDir, entryPoint)
    ),
  };
}

function getPkgDir(packageName: string) {
  const packageFound = existingPackages.find(
    (dirItem) => dirItem.name === packageName
  );
  if (!packageFound) return;
  return path.join(PACKAGES_DIR, packageFound.name);
}

async function build_npm(configs: BuildOptions) {
  const {
    entryPoints,
    outDir,
    package: _package,
    shims = { deno: true },
    ...rest
  } = configs;

  await build({
    entryPoints,
    outDir,
    shims,
    packageManager: 'yarn',
    /** package.json properties */
    package: _package,

    /**
     * NOTE: can't get 'importMap' working (I think is not very well supported).
     * So I defaulted back to bundling the deno code first
     * and building the npm pkg based on such bundle.
     */
    // importMap: "./import_map.json",

    /**
     * NOTE: we are building the npm pkg based on a deno bundle because of the importMap
     * issue described above. Unfortunately, deno bundling doesnt support typing yet,
     * it's an open issue https://github.com/denoland/deno/issues/3385.
     */
    typeCheck: false,
    test: false,
    scriptModule: false,
    ...rest,
  });

  /**
   * post build steps
   */
  // Deno.copyFileSync("LICENSE", "npm/LICENSE");
  // Deno.copyFileSync("README.md", "npm/README.md");
}
