import { Type, Static } from '../../../deps/typebox.ts';

// If we do support ranges, figure out how the descripor object would look like.
enum DescriptorTypeEnum {
  NUMERIC,
  RANGE,
  CATEGORIC,
}

const DescriptorType = Type.Enum(DescriptorTypeEnum);

const Descriptor = Type.Object({
  name: Type.String(),
  // maybe just number, given that we have the unit
  // although we could make the unit optional and reduce the utility score.
  value: Type.Union([Type.String(), Type.Number()]),
  type: DescriptorType,
});

export default Descriptor
