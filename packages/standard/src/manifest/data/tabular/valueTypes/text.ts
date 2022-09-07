import { Type } from '@sinclair/typebox';
import { ValueTypeEnum } from '../../types';

enum TextEncodings {
  utf8 = 'utf8',
}

const TextType = Type.Object({
  type: Type.Literal(ValueTypeEnum.TEXT),
  encoding: Type.Optional(Type.Enum(TextEncodings)),
});

export default TextType;
