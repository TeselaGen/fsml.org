import { Type, Static } from '../../../../deps/typebox.ts';
import { ColumnClassEnum, ValueTypeEnum } from '../../types.ts';
import Unit from './unit.ts';
import Dimension from './dimension.ts';

/**
 * TBD name.
 * Essentially, this column spec applies
 * to the column(s) that contains the reference dimension,
 * which is usually time. For example measurements are made
 * across a reference dimension and usually plotted
 */
const ReferenceDimension = Type.Object({
  type: Type.Literal(ColumnClassEnum.REFERENCE_DIMENSION),
  name: Type.String(),
  // NOTE: we could somehow make the dimension optional
  // iff it already comes with the unit property OR
  // another spec of type UNIT references this one.
  dimension: Dimension,
  /**
   * The ReferenceDimension Spec, could optional come with a unit.
   * If not, there's going to have to be a unit column with a unit spec.
   */
  unit: Type.Optional(Unit),
});

export default ReferenceDimension;
