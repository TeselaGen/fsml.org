import { Type, Static } from '@sinclair/typebox';
// import { UtilityScoreCategory } from "./utility-score-category";

export const UtilityScoreDetails = Type.Object({});

export type UtilityScoreDetails = Static<typeof UtilityScoreDetails>;

// NOTE: the following could be considered for the utility score of data
/**
 * - MissingCells: score on if and how many empty values the data has
 * - MissingRows: score on if and how empty rows the data has
 * - HasReferenceDimension: score on whether the data has a specified reference dimension
 * - HasMeasurements: score on whether the data has specified dimensions
 * - HasUnits: score on whether the reference dimension and measurements have specified units
 */
