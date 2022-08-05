import { toStdOut, remove } from "../../utils.ts"
import { generateManifest, writeManifest, packManifest } from "./utils.ts";

async function create(
  { type, parser, format, write, pack, author, filepattern },
) {
  const manifest = await generateManifest({ parser, filepattern })
  if (write) {
    const manifestFilepath = await writeManifest({ format, manifest })
    if (pack) {
      const success = await packManifest({ pack, filepattern, writePath: write, manifestFilepath })
      if (success) await remove(manifestFilepath)
    }
  }
  else
    await toStdOut(manifest)
}

async function update(
  {
    type,
    parser,
    format,
    write,
    pack,
    patch,
    patchFile,
    patchType,
    author,
    path,
  },
) { }

async function fetch({ registry: { name, uri }, format, unpack, write, id }) { }

async function _import({ from, to, id }) { }

async function describe({ output, write, select, summary, section, path }) { }

async function score({ formula, dryRun, author, path }) { }

async function _export({ exporter: { name, flags }, write, path }) { }

async function validate({ path }) { }

async function pack({ pack, path }) { }

async function unpack({ path }) { }

export {
  _export as export,
  _import as import,
  create,
  describe,
  fetch,
  pack,
  score,
  unpack,
  update,
  validate,
};
