import { Type, Static } from '../../../deps/typebox.ts';
import Dimension from './dimension.ts';

const Unit = Type.Object({
  value: Type.String(),
  dimension: Dimension
});

export default Unit
