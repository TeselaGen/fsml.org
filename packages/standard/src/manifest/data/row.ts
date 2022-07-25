import { Type, Static } from '../../deps/typebox.ts';
import Value from './value.ts';

const Row = Type.Object({
  index: Type.Number(),
  values: Type.Array(Value),

  /**
   * TBD if we want to store the specs of a column
   * right here in the column object, or in the "specs" (aka metadata)
   * section
   */
  // spec: Type.Optional(Spec)
});

export default Row;
