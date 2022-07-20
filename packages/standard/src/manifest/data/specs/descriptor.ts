import { Type, Static } from '../../../deps/typebox.ts';
import { SpecTypesEnum, ValueTypeEnum } from './types.ts';
import Unit from './unit.ts';

const Descriptor = Type.Object({
  type: Type.Literal(SpecTypesEnum.DESCRIPTOR),
  name: Type.String(),
  valueType: Type.Enum(ValueTypeEnum),
  /**
   * The Descriptor Spec, could optional come with a unit.
   */
  unit: Type.Optional(Unit),
});

export default Descriptor;
