import { typebox } from "@fsml/cli/deps.ts";
import { FormatTypes, PackTypes } from "@fsml/cli/types/enums.ts";

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
