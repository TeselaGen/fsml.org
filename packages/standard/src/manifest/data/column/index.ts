import { Type, Static } from '../../../deps/typebox.ts';
import { ColumnKindEnum, ValueTypeEnum } from './types.ts';
import Subject from './subject.ts';
import Dimension from './dimension.ts';
import ReferenceDimension from './reference-dimension.ts';
import Measurement from './measurement.ts';
import Descriptor from './descriptor.ts';
import Unit from './unit.ts';

const ColumnDescription = Type.Object({
  /**
   * Index of the column this metadata object is referring to.
   */
  index: Type.Number(),
  /**
   * name of the column, e.g., the column header.
   */
  name: Type.Number(),
  /**
   * An optional field for a plain text description of the column.
   */
  description: Type.Optional(Type.String()),
  /**
   * The column's kind gives it a context
   * or meaning.
   */
  kind: Type.Optional(
    Type.Object({
      /**
       * Tells whether the column corresponds to input or output values.
       */
      type: Type.Optional(Type.Enum(ColumnKindEnum)),
      /**
       * type of value this column stores.
       */
      valueType: Type.Optional(Type.Enum(ValueTypeEnum)),
      /**
       * The column class (e.g, measurement, descriptor, etc.).
       *
       * Classifying columns give them a more detailed description
       * of its meaning.
       */
      class: Type.Optional(
        Type.Union([Subject, ReferenceDimension, Measurement, Descriptor, Unit])
      ),
    })
  ),
});

export default ColumnDescription;
