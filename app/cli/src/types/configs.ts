import { Static, Type } from "@sinclair/typebox" ;
import { FormatTypes, PackTypes } from "@fsml/cli/types/enums" ;

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

// TODO: Once all configs are defined
// replace this generic config value with a more specific one.
export type TConfigValue =
  | string
  | null
  | number
  | boolean
  | { [x: string]: TConfigValue };
