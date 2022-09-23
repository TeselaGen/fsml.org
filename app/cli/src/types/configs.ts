import { Static, TSchema, Type } from "@fsml/packages/utils/deps/typebox.ts";
import { FormatTypes, PackTypes } from "@fsml/cli/types/enums.ts";

const Nullable = <T extends TSchema>(type: T) =>
  Type.Union([type, Type.Null()]);

const DefaultsConfigs = Type.Object({
  filepath: Type.String(),
  format: Type.Enum(FormatTypes),
});

const ManifestConfigs = Type.Object({
  format: Type.Enum(FormatTypes),
  pack: Nullable(Type.Enum(PackTypes)),
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
