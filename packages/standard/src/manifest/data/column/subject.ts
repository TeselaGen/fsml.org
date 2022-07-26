import { Type, Static } from '../../../deps/typebox.ts';
import { ColumnClassEnum } from '../types.ts';

const Subject = Type.Object({
  type: Type.Literal(ColumnClassEnum.SUBJECT),
  name: Type.String(),
});

export default Subject;
