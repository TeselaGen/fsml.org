import { Type } from '../../../../deps/mod.ts';
import { ValueTypeEnum } from '../../types.ts';

enum TextEncodings {
  utf8 = "utf8",
  ascii = "ascii",
}

const TextType = Type.Object({
  type: Type.Literal(ValueTypeEnum.TEXT),
  encoding: Type.Optional(Type.Enum(TextEncodings)),
});

export default TextType;
