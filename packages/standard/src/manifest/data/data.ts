import { Type, Static } from '../../deps/typebox.ts';
import Column from './column.ts';
import Spec from './specs/index.ts';

const Data = Type.Object({
  name: Type.String(),
  columns: Type.Array(Column),
  specs: Type.Optional(Type.Array(Spec)),
});

export default Data;
