import { Type, Static } from '../../../deps/typebox.ts';
import Subject from './subject.ts';
import Dimension from './dimension.ts';
import ReferenceDimension from './reference-dimension.ts';
import Measurement from './measurement.ts';
import Descriptor from './descriptor.ts';
import Unit from './unit.ts';

const Spec = Type.Object({
  /**
   * Index of the column this metadata object is referring to.
   */
  index: Type.Number(),
  /**
   * The column specs (e.g, measurement, descriptor, etc.)
   */
  spec: Type.Union([Subject, ReferenceDimension, Dimension, Measurement, Descriptor, Unit]),
});

export default Spec;
