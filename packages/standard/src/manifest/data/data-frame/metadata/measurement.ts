import { Type, Static } from '../../../deps/typebox.ts';
import {ColumnTypesEnum} from "./index.ts"

const Measurement = Type.Object({
  type: Type.Literal(ColumnTypesEnum.MEASUREMENT)
  name: Type.String()
});

export default Measurement
