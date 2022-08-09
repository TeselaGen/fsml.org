import { Arguments } from "@fsml/cli/deps/yargs.ts";
import { remove, toStdOut } from "../../utils.ts";
import { generateManifest, packManifest, writeManifest } from "./utils.ts";

/** CLI "manifest" commmand handlers **/

async function create(args: Arguments) {
  const { type, parser, format, write, pack, author, filepattern } = args;
  const manifest = await generateManifest({
    parser,
    type,
    filepattern,
    author,
  });
  if (write) {
    const manifestFilepath = await writeManifest({ format, manifest });
    if (pack) {
      const success = await packManifest({
        pack,
        filepattern,
        writePath: write,
        manifestFilepath,
      });
      if (success) await remove(manifestFilepath);
    }
  } else {
    await toStdOut(manifest);
  }
}

// async function update(args: ManifestArgs) {}

// async function fetch(args: ManifestArgs) {}

function _import(args: Arguments) {
  const { to, from } = args;
}

// async function describe(args: ManifestArgs) {}

// async function score(args: ManifestArgs) {}

// async function _export(args: ManifestArgs) {}

// async function validate(args: ManifestArgs) {}

// async function pack(args: ManifestArgs) {}

// async function unpack(args: ManifestArgs) {}

export {
  // _export as export,
  _import as import,
  create,
  // describe,
  // fetch,
  // pack,
  // score,
  // unpack,
  // update,
  // validate,
};
