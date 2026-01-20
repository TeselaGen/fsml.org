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
   * Any plugin used for other purposes. Keep in mind these type of plugins
   * will not necessarily work with all of the FSML SDK modules.
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
  type: PluginTypes.PARSER;
  /**
   * Receives a file as input and returns an FSML manifest (optionally an output file).
   */
  run: (
    /* Input File, either as a filepath (string) or the file's data buffer stream (Uint8Array) */
    file: string | Uint8Array,
  ) => Promise<{
    file?: string | Uint8Array;
    data: TTabularData | TTabularData[];
  }>;
  /* Input File, either as a filepath (string) or the file's data buffer stream (Uint8Array) */
  isApplicable: (file: string | Uint8Array) => Promise<boolean>;
}

/**
 * Parser interface that any Exporter Plugin should extend.
 */
export interface IExporter extends IPlugin {
  type: PluginTypes.EXPORTER;
  /**
   * Receives an fsml manifest and returns a
   * file and data object of some unknown type (e.g, json, yaml, etc.).
   */
  run: (
    // This could be either a filepath to a manifest, a buffer stream
    // or an already parsed JSON manifest.

    // NOTE: allowing multiple input type alternatives
    // passes the input type handling responsibility to Plugin implementation.
    // We could have different input vars for each input type alternative as well
    // or implement some sort of common input adapter
    manifest: string | Uint8Array | TManifest,
  ) => Promise<{ file?: string | Uint8Array; data: unknown }>;
}
