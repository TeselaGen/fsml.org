import { Static, Type } from "@fsml/packages/utils/deps/typebox.ts";
import { ContentReference } from "./content-reference.ts";
import { SupplementalData } from "./data/supplemental-data.ts";
import { SupplementalProtocol } from "./protocol/supplemental-protocol.ts";

export const Manifest = Type.Object({
  id: Type.String(),
  name: Type.String(),
  version: Type.String(),
  identifierAuthority: Type.String(),
  identifierEncoding: Type.Optional(Type.String()),
  sourceContent: Type.Array(ContentReference),

  supplementalInfo: Type.Union([SupplementalData, SupplementalProtocol]),
});

export type TManifest = Static<typeof Manifest>;
