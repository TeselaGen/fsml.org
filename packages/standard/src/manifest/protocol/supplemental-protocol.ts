import { Type, Static } from "@fsml/packages/utils/deps/typebox.ts";
import { UtilityScoreDetails } from "./utility-score-details.ts";

export const SupplementalProtocol = Type.Object({
  type: Type.Literal('protocol'),
  utilityScore: Type.Number(), // normalized to be between 0 and 1 inclusive
  categoryScores: UtilityScoreDetails,

  // supplemental protocol sections
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

export type SupplementalProtocol = Static<typeof SupplementalProtocol>;

/*
{
  ...
  supplementalInfo: {
    type: "protocol" or "data"

  }

}
*/
