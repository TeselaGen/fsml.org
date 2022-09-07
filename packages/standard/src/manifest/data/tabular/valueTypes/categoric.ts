import { Type } from '@sinclair/typebox';
import { ValueTypeEnum } from '../../types';

const NumericType = Type.Object({
  type: Type.Literal(ValueTypeEnum.CATEGORIC),
  categories: Type.Optional(Type.Array(Type.String())),
});

export default NumericType;
