import { Type, Static } from '../../../deps/typebox.ts';

enum DimensionsEnum {
  Time,
}

const Dimension = Type.Object({
  // might be nice to have a name as an alias for the type,
  // since type is a fixed enum.
  name: Type.String(),
  type: Type.Enum(DimensionsEnum),
});

export default Dimension;
