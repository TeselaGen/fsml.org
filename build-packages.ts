import * as path from 'https://deno.land/std@0.165.0/path/mod.ts';
import { existsSync } from 'https://deno.land/std@0.165.0/fs/mod.ts';
import {
  build,
  emptyDir,
  BuildOptions,
} from 'https://deno.land/x/dnt@0.31.0/mod.ts';
import { defaultVersionResolver } from '@fsml/cli/handlers/plugins/handler/utils.ts';

const PACKAGES_DIR = './packages';
const PACKAGE_CONFIG_FILE = 'dnt.config.json';

const [...packagesToBuild] = Deno.args;

const existingPackages = Array.from(Deno.readDirSync(PACKAGES_DIR));

for (const packageName of packagesToBuild) {
  const packageDir = getPkgDir(packageName);
  if (!packageDir) continue;

  const buildConfig = await getPkgConfig(packageDir);
  await build_npm(buildConfig);
}

async function getPkgConfig(packageDir: string): Promise<BuildOptions> {
  const pkgConfigPath = path.join(packageDir, PACKAGE_CONFIG_FILE);
  // NOTE: read that they may bring 'existsSync' back from being deprecated.
  if (!existsSync(pkgConfigPath))
    throw new Error(`dnt.config.json file missing for package ${packageDir}`);
  const pkgConfig = JSON.parse(Deno.readTextFileSync(pkgConfigPath));
  const pkgVersion = await getPackageVersion(pkgConfig.package.name);
  return {
    ...pkgConfig,
    package: {
      ...pkgConfig.package,
      version: pkgVersion,
    },
    outDir: path.join(packageDir, pkgConfig.outDir),
    entryPoints: pkgConfig.entryPoints.map((entryPoint: string) =>
      path.join(packageDir, entryPoint)
    ),
  };
}

async function getPackageVersion(name: string): Promise<string> {
  let version = '1.0.0';
  try {
    version = await defaultVersionResolver({ name });
  } catch {
    /* module not published yet. */
  }
  const newVersion =
    Deno.args[1] || prompt(`Current version '${version}'. Select version: `);
  return newVersion || version;
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
    shims = {
      deno: true,
      // Attempt to resolve this issue: https://github.com/denoland/deno/issues/16817
      // custom: [
      //   {
      //     package: {
      //       name: 'event-target-shim',
      //       version: '6.0.2',
      //     },
      //     globalNames: ['internal'],
      //   },
      // ],
    },
    ...rest
  } = configs;

  console.info(`Emptying build dir '${outDir}'`);
  await emptyDir(outDir);

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
    // There's a few caveats that make building for cjs/umd kind of cumbersome.
    // scriptModule: 'cjs',
    scriptModule: false,
    ...rest,
  });

  /**
   * post build steps
   */
  // Deno.copyFileSync("LICENSE", "npm/LICENSE");
  // Deno.copyFileSync("README.md", "npm/README.md");
}
