import { Type, Static } from '../../../deps/typebox.ts';
import { SpecTypesEnum } from './types.ts';
import Dimension from './dimension.ts';

const Unit = Type.Object({
  type: Type.Literal(SpecTypesEnum.UNIT),
  value: Type.String(),
  dimension: Dimension,
  /**
   * TBD the name of this property.
   * Essentially we need a property that can tell us
   * about which column holds the values for this unit.
   *
   * NOTE: there's also the option to define a column-wide unit
   * by specifying a unit in the Measurement or Dimension Spec.
   */
  specReference: Type.Optional(Type.Number()),
});

export default Unit;
