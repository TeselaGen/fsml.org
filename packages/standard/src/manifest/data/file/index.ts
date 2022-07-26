import { Type, Static } from '../../../deps/typebox.ts';
import { DataTypesEnum } from '../types.ts';

const FileData = Type.Object({
  type: Type.Literal(DataTypesEnum.FILE),
  name: Type.Optional(Type.String()),
  // NOTE: we may end up making a special type for
  // file references
  reference: Type.String(),
});

export default FileData;
