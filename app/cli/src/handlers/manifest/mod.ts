import { Arguments } from "@fsml/cli/deps/yargs.ts";
import { jsonToText, remove, toStdOut } from "@fsml/cli/utils.ts";
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

  // Stop if no manifest is generated.
  if (!manifest) return;

  // Manifest will be sent to stdout when no write path is passed.
  if (!write) {
    return await toStdOut(jsonToText({ content: manifest }));
  }

  const manifestFilepath = await writeManifest({ format, manifest });

  // Packs the manifest file along with any files provided.
  if (pack) {
    const success = await packManifest({
      pack,
      write,
      filepattern,
      manifestFilepath,
    });
    if (success) await remove(manifestFilepath);
  }
}

// async function update(args: Arguments) {}

// async function fetch(args: Arguments) {}

async function _import() {}

// async function describe(args: Arguments) {}

// async function score(args: Arguments) {}

// async function _export(args: Arguments) {}

// async function validate(args: Arguments) {}

// async function pack(args: Arguments) {}

// async function unpack(args: Arguments) {}

export {
  _import as import,
  // _export as export,
  create,
  // describe,
  // fetch,
  // pack,
  // score,
  // unpack,
  // update,
  // validate,
};
