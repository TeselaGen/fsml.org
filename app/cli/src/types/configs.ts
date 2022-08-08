import { typebox } from "src/deps.ts";
import { FormatTypes, PackTypes } from "types/enums.ts"

const { Type } = typebox;

export const Configs = Type.Object({
    defaults: Type.Object({
        format: Type.Enum(FormatTypes)
    }),
    manifest: Type.Object({
        format: Type.Enum(FormatTypes),
        pack: Type.Enum(PackTypes),
    }),
})
