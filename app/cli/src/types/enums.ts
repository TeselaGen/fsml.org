// TODO: This will be clearer once the Plugin Interface
// design is complete.
export enum PluginTypes {
  PARSER = "parser",
  GENERIC = "generic",
}

export enum ManifestTypes {
  PROTOCOL = "protocol",
  DATA = "data",
}

export enum FormatTypes {
  JSON = "json",
  YAML = "yaml",
  TOML = "toml",
}

export enum PackTypes {
  ZIP = "zip",
  TAR = "tar",
  TGZ = "tgz",
}

export enum DataFileFormats {
  CSV = "csv",
  XSLX = "xslx",
  JSON = "json",
  YAML = "yaml",
  TOML = "toml",
}
