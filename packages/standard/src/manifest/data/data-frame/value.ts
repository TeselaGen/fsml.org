import { Type, Static } from '../../../deps/typebox.ts';

const Value = Type.Object({
  index: Type.Number(),
  // Metadata on the value will be stored
  // in the metadata type
  value: Type.String(),
});

export default Value;
