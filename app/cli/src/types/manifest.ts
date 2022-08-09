import { Static } from "@fsml/cli/deps/typebox.ts";
import { Manifest } from "@fsml/packages/standard/mod.ts";
import { SupplementalData as Data } from "@fsml/packages/standard/manifest/data/supplemental-data.ts";

export type TManifest = Static<typeof Manifest>;
export type TManifestData = Static<typeof Data>;

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
