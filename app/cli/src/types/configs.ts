import { typebox } from 'src/deps.ts';
import { FormatTypes, PackTypes } from 'types/enums.ts';

const { Type } = typebox;

// TODO: extend for all missing configs.
export const Configs = Type.Object({
  defaults: Type.Object({
    format: Type.Enum(FormatTypes),
  }),
  manifest: Type.Object({
    format: Type.Enum(FormatTypes),
    pack: Type.Enum(PackTypes),
  }),
});

export type TConfigs = typebox.Static<typeof Configs>;
