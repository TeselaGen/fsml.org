import { Type } from "@fsml/packages/utils/deps/typebox.ts";
import { ColumnClassEnum, ValueTypeEnum } from '../../types.ts';
import Unit from './unit.ts';
import Dimension from './dimension.ts';

const Measurement = Type.Object({
  type: Type.Literal(ColumnClassEnum.MEASUREMENT),
  valueType: Type.Enum(ValueTypeEnum),
  name: Type.String(),
  // NOTE: we could somehow make the dimension optional
  // iff it already comes with the unit property OR
  // another spec of type UNIT references this one.
  dimension: Dimension,
  /**
   * The Measurement Spec, could optional come with a unit.
   * If not, there's going to have to be a unit column with a unit spec.
   */
  unit: Type.Optional(Unit),
});

export default Measurement;
