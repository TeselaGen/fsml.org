import { Static, Type } from "@fsml/packages/utils/deps/typebox.ts";
import FileData from "./file-data.ts";
import TabularData from "./tabular/mod.ts";
import Provenance from "../provenance.ts";

export const SupplementalData = Type.Object({
  type: Type.Literal("data"),
  utilityScore: Type.Number(), // normalized to be between 0 and 1 inclusive
  // categoryScores: UtilityScoreDetails, // we need to design these categories
  data: Type.Array(Type.Union([FileData, TabularData])),
  // suplemental data sections.

  // NOTE: This could be moved up a level.
  provenance: Type.Optional(Provenance),
});

export type TSupplementalData = Static<typeof SupplementalData>;
export default SupplementalData;
