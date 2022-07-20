import { Type, Static } from '../../../../deps/typebox.ts';
import { ColumnTypesEnum } from './types.ts';

const Descriptor = Type.Object({
  type: Type.Literal(ColumnTypesEnum.DESCRIPTOR),
  name: Type.String(),
  valueType: Type.Enum(ValueTypeEnum),
});

export default Descriptor;
