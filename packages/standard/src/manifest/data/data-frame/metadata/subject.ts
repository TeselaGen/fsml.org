import { Type, Static } from '../../../../deps/typebox.ts';
import { ColumnTypesEnum } from './index.ts';

const Subject = Type.Object({
  // type: Type.Literal(ColumnTypesEnum.SUBJECT), // not sure why 'ColumnTypesEnum' is undefined here.
  type: Type.Literal('SUBJECT'),
  name: Type.String(),
});

export default Subject;
