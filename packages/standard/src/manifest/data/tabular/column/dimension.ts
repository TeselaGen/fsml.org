import { Type } from "@fsml/packages/utils/deps/typebox.ts";
import { DimensionsEnum } from '../../types.ts';

const Dimension = Type.Object({
  type: Type.Literal("DIMENSION"),
  /**
   * dimensionType is one of many possible physical dimensions
   */
  dimensionType: Type.Enum(DimensionsEnum),
});

export default Dimension;
