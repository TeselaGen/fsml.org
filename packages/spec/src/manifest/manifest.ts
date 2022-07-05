import { Type, Static } from '../deps/typebox.ts';
import { ContentReference } from './content-reference.ts';
import { UtilityScoreDetails } from './utility-score-details.ts';

export const Manifest = Type.Object({
  id: Type.String(),
  name: Type.String(),
  version: Type.String(),
  type: Type.String(),
  identifierAuthority: Type.String(),
  identifierEncoding: Type.Optional(Type.String()),
  sourceContent: Type.Array(ContentReference),
  utilityScore: Type.Number(), // normalized to be between 0 and 1 inclusive
  categoryScores: UtilityScoreDetails,

  //supplemental sections
  provenance: Type.Optional(Type.Any()),
  classification: Type.Optional(Type.Any()),
  usage: Type.Optional(Type.Any()),
  executions: Type.Optional(Type.Any()),
  references: Type.Optional(Type.Any()),
  metadata: Type.Optional(Type.Any()),
  executionContext: Type.Optional(Type.Any()),
  protocolBlocks: Type.Optional(Type.Any()),
  operations: Type.Optional(Type.Any()),
  workflow: Type.Optional(Type.Any()),
  parameters: Type.Optional(Type.Any()),
  domainDictionary: Type.Optional(Type.Any()),
  keywords: Type.Optional(Type.Any()),
});

export type Manifest = Static<typeof Manifest>;
