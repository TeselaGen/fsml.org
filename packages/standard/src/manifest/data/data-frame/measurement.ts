import { Type, Static } from '../../../deps/typebox.ts';
import Unit from './unit.ts';

const Measurement = Type.Object({
  name: Type.String(),
  // maybe just number, given that we have the unit
  // although we could make the unit optional and reduce the utility score.
  value: Type.Union([Type.String(), Type.Number()]),
  unit: Unit,
});

export default Measurement
