import { Type, Static } from '@sinclair/typebox';

export const UtilityScoreCategory = Type.Object({
  score: Type.Number(),
  categoryWeight: Type.Number(),
  criteria: Type.Optional(Type.Record(Type.String(), Type.Unknown())),
  criteriaScores: Type.Optional(Type.Record(Type.String(), Type.Number())),
  criteriaWeights: Type.Optional(Type.Record(Type.String(), Type.Number())),
});

export type UtilityScoreCategory = Static<typeof UtilityScoreCategory>;
