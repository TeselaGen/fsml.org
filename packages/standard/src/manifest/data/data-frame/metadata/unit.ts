import { Type, Static } from '../../../deps/typebox.ts';
import {ColumnTypesEnum} from "./index.ts"

const Unit = Type.Object({
  type: Type.Literal(ColumnTypesEnum.UNIT)
  value: Type.String()
});

export default Unit