import { Type, Static } from '../../../deps/typebox.ts';
import Measurement from "./measurement.ts"
import Descriptor from "./descriptor.ts"
import Dimension from "./dimension.ts"

const DataFrame = Type.Object({
  // To be renamed...
  dataFrames: Type.Object({
    name: Type.String(),
    measurements: Type.Array(Measurement),
    descriptors: Type.Array(Descriptor),
    dimensions: Type.Array(Dimension),
  }),
});

export default DataFrame
