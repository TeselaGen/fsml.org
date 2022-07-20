import { Type, Static } from '../../deps/typebox.ts';
import Data from './data.ts';

export const SupplementalData = Type.Object({
  type: Type.Literal('data'),
  utilityScore: Type.Number(), // normalized to be between 0 and 1 inclusive
  // categoryScores: UtilityScoreDetails, // we need to design these categories
  data: Type.Array(Data),
  // suplemental data sections.
});

export type SupplementalData = Static<typeof SupplementalData>;
