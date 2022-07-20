import { Type, Static } from '../../../../deps/typebox.ts';

const Measurement = Type.Object({
  type: Type.Literal('MEASUREMENT'),
  name: Type.String(),
});

export default Measurement;
