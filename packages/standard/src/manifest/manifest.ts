import { Static, Type } from '@sinclair/typebox';
import { ContentReference } from './content-reference';
import { SupplementalData } from './data/supplemental-data';
import { SupplementalProtocol } from './protocol/supplemental-protocol';

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
