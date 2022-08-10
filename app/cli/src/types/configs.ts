import { Static, Type } from "@fsml/cli/deps/typebox.ts";
import { FormatTypes, PackTypes } from "@fsml/cli/types/enums.ts";

const DefaultsConfigs = Type.Object({
  filepath: Type.String(),
  format: Type.Enum(FormatTypes),
});

const ManifestConfigs = Type.Object({
  format: Type.Enum(FormatTypes),
  pack: Type.Enum(PackTypes),
});

// TODO: extend for all missing configs.
export const Configs = Type.Object({
  defaults: DefaultsConfigs,
  manifest: ManifestConfigs,
  // plugins: PluginConfigs,
  // registry: RegistryConfigs,
});

export type TManifestConfigs = Static<typeof ManifestConfigs>;
export type TDefaultsConfigs = Static<typeof DefaultsConfigs>;
export type TConfigs = Static<typeof Configs>;
