import { TTabularData } from "@fsml/packages/standard/manifest/data/tabular/mod.ts";
import { TManifest } from "@fsml/packages/standard/manifest/manifest.ts";

export enum PluginTypes {
  /**
   * Any plugin used for transforming experimental
   * data into the FSML schema.
   */
  PARSER = "parser",
  /**
   * Any plugin used for exporting an FSML manifest
   * into some other format.
   */
  EXPORTER = "exporter",
  /**
   * Any plugin used other purposes.
   */
  GENERIC = "generic",
}

/**
 * Common Plugin interface that any FSML plugin should extend.
 */
export interface IPlugin {
  name: string;
  type: PluginTypes;
  // deno-lint-ignore no-explicit-any
  run: (...args: any[]) => Promise<any>;
}

/**
 * Parser interface that any Parser Plugin should extend.
 */
export interface IParser extends IPlugin {
  /**
   * Receives filepath as input and returns
   * a filepath as an output and/or along with the parsed data
   * of type TTabularData
   */
  run: (
    filepath: string,
  ) => Promise<
    Partial<{
      filepath: string;
      data: TTabularData;
    }>
  >;
  isApplicable: (filepath: string) => Promise<boolean>;
}

/**
 * Parser interface that any Exporter Plugin should extend.
 */
export interface IExporter extends IPlugin {
  /**
   * Receives an fsml manifest and returns a
   * filepath as an output and/or along with
   * a data object of some unknown type (e.g, json, yaml, etc.). */
  run: (
    manifest: TManifest,
  ) => Promise<Partial<{ filepath: string; data: unknown }>>;
}
