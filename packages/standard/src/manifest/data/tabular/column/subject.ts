import { Type } from '../../../../deps/mod.ts';
import { ColumnClassEnum } from '../../types.ts';

const Subject = Type.Object({
  type: Type.Literal(ColumnClassEnum.SUBJECT),
  name: Type.String(),
});

export default Subject;
