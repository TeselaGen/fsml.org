async function create(
  { type, parser, format, write, pack, author, filepattern },
) {}

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
) {}

async function fetch({ registry: { name, uri }, format, unpack, write, id }) {}

async function _import({ from, to, id }) {}

async function describe({ output, write, select, summary, section, path }) {}

async function score({ formula, dryRun, author, path }) {}

async function _export({ exporter: { name, flags }, write, path }) {}

async function validate({ path }) {}

async function pack({ pack, path }) {}

async function unpack({ path }) {}

const manifest = {
  create,
  update,
  fetch,
  import: _import,
  describe,
  score,
  export: _export,
  validate,
  pack,
  unpack,
};

export default manifest;