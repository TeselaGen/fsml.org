import { Type } from '../../../../deps/typebox.ts';
import { ValueTypeEnum } from '../../types.ts';

const NumericType = Type.Object({
  type: Type.Literal(ValueTypeEnum.NUMERIC),
  range: Type.Optional(Type.Tuple([Type.Number(), Type.Number()])),

  // NOTE: range type could also be more specific
  // on min/max as so,
  // range: Type.Optional(
  //   Type.Object({
  //     min: Type.Number(),
  //     max: Type.Number(),
  //   })
  // ),
});

export default NumericType;
