import { Type } from '../../../../deps/mod.ts';
import { ValueTypeEnum } from '../../types.ts';

const CategoricType = Type.Object({
  type: Type.Literal(ValueTypeEnum.CATEGORIC),
  categories: Type.Optional(Type.Array(Type.String())),
});

export default CategoricType;

