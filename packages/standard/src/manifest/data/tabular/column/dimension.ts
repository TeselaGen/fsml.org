import { Type } from '@sinclair/typebox';
import { DimensionsEnum } from '../../types';

const Dimension = Type.Object({
  type: Type.Literal("DIMENSION"),
  /**
   * dimensionType is one of many possible physical dimensions
   */
  dimensionType: Type.Enum(DimensionsEnum),
});

export default Dimension;
