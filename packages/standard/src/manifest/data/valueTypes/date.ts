import { Type } from '../../../deps/typebox.ts';
import { ValueTypeEnum } from '../types.ts';

// NOTE: not an enum is the best here...
const enum DateFormats {
  'dd-mm-yyyy' = 'dd-mm-yyyy',
  'mm-dd-yyyy' = 'mm-dd-yyyy',
  'dd/mm/yyyy' = 'dd/mm/yyyy',
  'mm/dd/yyyy' = 'mm/dd/yyyy',
}

const DateType = Type.Object({
  type: Type.Literal(ValueTypeEnum.DATE),
  format: Type.Optional(Type.Enum(DateFormats)),
});

export default DateType;
