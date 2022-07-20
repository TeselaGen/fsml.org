import { Type, Static } from '../../../../deps/typebox.ts';

enum DimensionsEnum {
  TIME,
  VOLUME,
}

const Dimension = Type.Object({
  type: Type.Literal('DIMENSION'),
  // might be nice to have a name as an alias for the type,
  // since type is a fixed enum.
  name: Type.Optional(Type.String()),
  dimensionType: Type.Enum(DimensionsEnum),
});

export default Dimension;
