import { Type } from '@sinclair/typebox';
import { ColumnClassEnum } from '../../types';

const Subject = Type.Object({
  type: Type.Literal(ColumnClassEnum.SUBJECT),
  name: Type.String(),
});

export default Subject;
