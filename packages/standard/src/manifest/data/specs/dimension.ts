import { Type, Static } from '../../../deps/typebox.ts';
import { SpecTypesEnum, DimensionsEnum } from './types.ts';

const Dimension = Type.Object({
  type: Type.Literal(SpecTypesEnum.DIMENSION),
  /**
   * dimensionType is one of many possible physical dimensions
   */
  dimensionType: Type.Enum(DimensionsEnum),
});

export default Dimension;
