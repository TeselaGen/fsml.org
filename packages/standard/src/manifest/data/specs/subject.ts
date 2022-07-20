import { Type, Static } from '../../../deps/typebox.ts';
import { SpecTypesEnum } from './types.ts';

const Subject = Type.Object({
  type: Type.Literal(SpecTypesEnum.SUBJECT),
  name: Type.String(),
});

export default Subject;
