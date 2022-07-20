import { Type, Static } from '../../../deps/typebox.ts';
import { SpecTypesEnum, ValueTypeEnum } from './types.ts';
import Unit from './unit.ts';
import Dimension from './dimension.ts';

const Measurement = Type.Object({
  type: Type.Literal(SpecTypesEnum.MEASUREMENT),
  valueType: Type.Enum(ValueTypeEnum),
  name: Type.String(),
  dimension: Dimension,
  /**
   * The Measurement Spec, could optional come with a unit.
   * If not, there's going to have to be a unit column with a unit spec.
   */
  unit: Type.Optional(Unit),
});

export default Measurement;
