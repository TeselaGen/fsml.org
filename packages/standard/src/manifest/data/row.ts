import { Type, Static } from '../../deps/typebox.ts';
import Value from './value.ts';

// NOTE: we might want to add a property specific to the row
// referencing its data file.
const Row = Type.Object({
  index: Type.Number(),
  values: Type.Array(Value),
  /**
   * A dataset can be split into multiple files,
   * so there's the optional row-specific sourceFileReference
   */
  // NOTE: instead of type string we might end up making a specific
  // source file reference type.
  sourceFileReference: Type.Optional(Type.String()),
  /**
   * TBD if we want to store the specs of a column
   * right here in the column object, or in the "specs" (aka metadata)
   * section
   */
  // spec: Type.Optional(Spec)
});

export default Row;
