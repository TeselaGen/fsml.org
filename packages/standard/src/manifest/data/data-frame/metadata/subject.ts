import { Type, Static } from '../../../deps/typebox.ts';
import {ColumnTypesEnum} from "./index.ts"

const Subject = Type.Object({
  type: Type.Literal(ColumnTypesEnum.SUBJECT)
  name: Type.String(),
});

export default Subject;
