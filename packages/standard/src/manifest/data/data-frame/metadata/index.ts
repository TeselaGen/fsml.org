import { Type, Static } from '../../../deps/typebox.ts';
import Subject from './subject.ts';
import Dimension from './dimension.ts';
import Measurement from './measurement.ts';
import Descriptor from './descriptor.ts';
import Unit from './unit.ts';

// If we do support ranges, figure out how the descripor object would look like.
export enum ColumnTypesEnum {
  SUBJECT,
  DIMENSION,
  MEASUREMENT,
  DESCRIPTOR,
  UNIT,
}

const ColumnType = Type.Enum(ColumnTypesEnum);

const Metadata = Type.Object({
  /**
   * Index of the column this metadata object is referring to.
   */
  index: Type.Number(),
  /**
   * The column specs (e.g, measurement, descriptor, etc.)
   */
  spec: Type.Union([Subject, Dimension, Measurement, Descriptor, Unit]),
});

export default Metadata;
