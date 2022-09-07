import { Type } from '@sinclair/typebox';
import { ColumnClassEnum } from '../../types';
import Unit from './unit';

const Descriptor = Type.Object({
  type: Type.Literal(ColumnClassEnum.DESCRIPTOR),
  name: Type.String(),
  /**
   * The Descriptor Spec, could optional come with a unit.
   */
  unit: Type.Optional(Unit),
});

export default Descriptor;
