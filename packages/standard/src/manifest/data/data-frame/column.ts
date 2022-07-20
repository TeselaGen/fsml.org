import { Type, Static } from '../../../deps/typebox.ts';
import Value from './value.ts';

const Column = Type.Object({
  index: Type.Number(),
  name: Type.String(),
  values: Type.Array(Value),
});

export default Column;
