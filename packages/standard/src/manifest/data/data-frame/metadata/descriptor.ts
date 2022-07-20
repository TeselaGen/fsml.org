import { Type, Static } from '../../../deps/typebox.ts';
import {ColumnTypesEnum} from "./index.ts"

// If we do support ranges, figure out how the descripor object would look like.
enum ValueTypeEnum {
  NUMERIC,
  RANGE,
  CATEGORIC,
}

const Descriptor = Type.Object({
  type: Type.Literal(ColumnTypesEnum.DESCRIPTOR)
  name: Type.String()
  valueType: Type.Enum(ValueTypeEnum)
});

export default Descriptor;