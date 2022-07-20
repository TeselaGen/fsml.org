import { Type, Static } from '../../../../deps/typebox.ts';
import { ColumnTypesEnum, DimensionsEnum } from './types.ts';

const Dimension = Type.Object({
  type: Type.Literal(ColumnTypesEnum.DIMENSION),
  name: Type.Optional(Type.String()),
  dimensionType: Type.Enum(DimensionsEnum),
});

export default Dimension;
