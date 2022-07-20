import { Type, Static } from '../../deps/typebox.ts';
import DataGrid from './data-grid.ts';
import DataFrame from './data-frame/index.ts';
// import DataSchema from "./data-schema"

export const SupplementalData = Type.Object({
  type: Type.Literal('data'),
  utilityScore: Type.Number(), // normalized to be between 0 and 1 inclusive
  // categoryScores: UtilityScoreDetails, // we need to design these categories
  data: Type.Union([
    // we may not need to support a datagrid-like format because the 'metadata'
    // type in data-frame can be optional...
    // Type.Array(DataGrid),
    Type.Array(DataFrame),
  ]),

  // suplemental data sections.
  // dataSchema: DataSchema
});

export type SupplementalData = Static<typeof SupplementalData>;
