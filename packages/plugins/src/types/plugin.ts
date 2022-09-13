import {
  TTabularData,
} from "@fsml/packages/standard/manifest/data/tabular/mod.ts";
import { TManifest } from "@fsml/packages/standard/manifest/manifest.ts";

export enum PluginTypes {
  GENERIC = "generic",
  PARSER = "parser",
  EXPORTER = "exporter",
}

export interface IPlugin {
  // Design plugin interface. The current plan is to
  // make them publishable packages that can be dynamically imported in deno.
  name: string;
  type: PluginTypes;
}

// deno-lint-ignore no-explicit-any
export abstract class CPlugin<RunFunction extends (...args: any[]) => void>
  implements IPlugin {
  name: string;
  type: PluginTypes;

  constructor(name: string, type: PluginTypes) {
    this.name = name;
    this.type = type;
  }

  public abstract run: RunFunction;
}

type ParserRun = (
  filepath: string,
) => Promise<
  Partial<{
    filepath: string;
    data: TTabularData;
  }>
>;
export interface IParser extends CPlugin<ParserRun> {
  /**
   * Receives filepath as input and returns
   * a filepath as an output and/or along with the parsed data
   * of type TTabularData
   */
  run: ParserRun;
  isApplicable: (filepath: string) => Promise<boolean>;
}

type ExporterRun = (
  manifest: TManifest,
) => Promise<Partial<{ filepath: string; data: unknown }>>;
export interface IExporter extends CPlugin<ExporterRun> {
  /**
   * Receives an fsml manifest and returns a
   * filepath as an output and/or along with
   * a data object of some unknown type (e.g, json, yaml, etc.). */
  run: ExporterRun;
}
