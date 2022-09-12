import { Static, Type } from "@fsml/packages/standard/deps/mod.ts";
import { DataTypesEnum } from "@fsml/packages/standard/data/types.ts";

export const FileData = Type.Object({
  type: Type.Literal(DataTypesEnum.FILE),
  index: Type.Number(),
  name: Type.Optional(Type.String()),
  // NOTE: we may end up making a special type for
  // file references
  reference: Type.String(),
});

export type TFileData = Static<typeof FileData>;
export default FileData;
