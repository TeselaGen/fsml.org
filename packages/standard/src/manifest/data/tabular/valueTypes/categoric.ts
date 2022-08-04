import { Type } from '../../../../deps/typebox.ts';
import { ValueTypeEnum } from '../../types.ts';

const NumericType = Type.Object({
  type: Type.Literal(ValueTypeEnum.CATEGORIC),
  categories: Type.Optional(Type.Array(Type.String())),
});

export default NumericType;
