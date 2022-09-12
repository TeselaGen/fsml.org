import { Type } from '../../../deps/mod.ts';
import Value from './value.ts';

// NOTE: we might want to add a property specific to the row
// referencing its data file.
const Row = Type.Object({
  index: Type.Number(),
  // /**
  //  * Value corresponds to the whole row string,
  //  */
  // NOTE: figure out if typebox has a type for either value or values.
  // value: Type.String(),
  /**
   * Values corresponds to the row string parsed into columns.
   */
  values: Type.Array(Value),
  /**
   * A dataset can be split into multiple files,
   * so there's the optional row-specific sourceFileReference
   */
  // NOTE: instead of type string we might end up making a specific
  // source file reference type.
  fileReference: Type.Optional(Type.String()),
});

export default Row;
