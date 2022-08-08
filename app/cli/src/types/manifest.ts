import { Manifest } from "@fsml.org/standard/mod.ts";
import { SupplementalData as Data } from "@fsml.org/standard/manifest/data/supplemental-data.ts";
import { typebox } from "@cli/deps.ts";

export type TManifest = typebox.Static<typeof Manifest>;
export type TManifestData = typebox.Static<typeof Data>;

export type ManifestArgs = {
  type?: string;
  parser?: string | string[];
  format?: string;
  write?: string;
  pack?: string;
  author?: string;
  summary: boolean;
  from?: string;
  to?: string;
  id?: string;
  exporter: string[];
  filepattern?: string;
};
