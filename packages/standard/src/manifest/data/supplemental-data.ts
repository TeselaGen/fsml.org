import { Type, Static } from '../../deps/typebox.ts';
import FileData from './file/index.ts';
import TabularData from './tabular/index.ts';

export const SupplementalData = Type.Object({
  type: Type.Literal('data'),
  utilityScore: Type.Number(), // normalized to be between 0 and 1 inclusive
  // categoryScores: UtilityScoreDetails, // we need to design these categories
  data: Type.Array(Type.Union([FileData, TabularData])),
  // suplemental data sections.
});

export type SupplementalData = Static<typeof SupplementalData>;
