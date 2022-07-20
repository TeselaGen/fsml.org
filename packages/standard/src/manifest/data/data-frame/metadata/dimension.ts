import { Type, Static } from '../../../deps/typebox.ts';
import { ColumnTypesEnum } from './index.ts';

enum DimensionsEnum {
  TIME,
  VOLUME,
}

const Dimension = Type.Object({
  type: Type.Literal(ColumnTypesEnum.DIMENSION),
  // might be nice to have a name as an alias for the type,
  // since type is a fixed enum.
  name: Type.Optional(Type.String()),
  dimensionType: Type.Enum(DimensionsEnum),
});

export default Dimension;
