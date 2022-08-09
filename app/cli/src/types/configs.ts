import { Static, Type } from "@fsml/cli/deps/typebox.ts";
import { FormatTypes, PackTypes } from "@fsml/cli/types/enums.ts";

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

export type TConfigs = Static<typeof Configs>;
