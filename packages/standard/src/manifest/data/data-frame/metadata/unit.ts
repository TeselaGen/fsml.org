import { Type, Static } from '../../../../deps/typebox.ts';

const Unit = Type.Object({
  type: Type.Literal('UNIT'),
  value: Type.String(),
});

export default Unit;
