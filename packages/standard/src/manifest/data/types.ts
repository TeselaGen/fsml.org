export enum DataTypesEnum {
  FILE = 'FILE'
  TABULAR = 'TABULAR'
}

export enum ColumnClassEnum {
  /**
   * This corresponds to the the subjects under evaluation or the experimental units
   * subjected to experimental conditions.
   */
  SUBJECT = 'SUBJECT',
  /**
   * This is the reference dimension of the experiment's observations or measurements.
   */
  REFERENCE_DIMENSION = 'REFERENCE_DIMENSION',
  /**
   * These are the measurements performed during the experiment.
   */
  MEASUREMENT = 'MEASUREMENT',
  /**
   * Calls are categoric observations.
   */
  CALL = 'CALL',
  /**
   * Computed values are a computation of other values, (e.g., the divisin of two other observation columns).
   */
  COMPUTED_VALUE = 'COMPUTED_VALUE',
  /**
   * Descriptors are columns that hold generic type descriptors/features
   * value for each row. These can be independent variables that are controlled in the experiment
   * or even initial conditions.
   *
   * TODO: Might be a good idea to somehow make the distinction here between row descriptors and experiment descriptors.
   */
  DESCRIPTOR = 'DESCRIPTOR',
  /**
   * Usually units are equal across an entire column.
   *
   * But, passing in unit columns allows to be specific about
   * the units of each value in another column.
   */
  UNIT = 'UNIT',
}

export enum ColumnKindEnum {
  /**
   * Identifier columns are the experimental units or subjects under evaluation.
   */
  IDENTIFIER = 'IDENTIFIER',
  /**
   * Reference columns relates to the reference axis values.
   * These correspond to the reference on which observations are taken course.
   */
  REFERENCE = 'REFERENCE',
  /**
   * Factors are the inputs or controlled variables
   * used to manipulate the experiment with the aim of triggering
   * responses to be studied and analyzed.
   */
  FACTOR = 'FACTOR',
  /**
   * Observations are the experiment's responses to the manipulated factors,
   * these explain how the subjects behave under the experimental conditions applied.
   *
   * Also known as the dependent variables.
   */
  OBSERVATION = 'OBSERVATION', // NOTE: more statistically understood as RESPONSE.
}

/**
 * It may not be practical to set up an ENUM
 * for the accepted dimensions, since there could be many.
 *
 * But on the other hand, it is useful and if a new one is needed
 * an extension could be proposed.
 *
 * We could leverage existing dimension and unit defitions out there.
 *
 * Here's a public example of a quite complete defition of dimension and units
 * https://raw.githubusercontent.com/hgrecco/pint/master/pint/default_en.txt
 */
export enum DimensionsEnum {
  TIME = 'TIME',
  MASS = 'MASS',
  LENGTH = 'LENGTH',
  VOLUME = 'VOLUME',
  TEMPERATURE = 'TEMPERATURE',
  ENERGY = 'ENERGY',
  VOLUMETRIC_FLOW_RATE = 'VOLUMETRIC_FLOW_RATE',
  CONCENTRATION = 'CONCENTRATION',
  DENSITY = 'DENSITY',
}

/**
 * We could do a similar thing for units
 * But the enum might get quite large affecting the size
 * of the fsml-schema.json.
 *
 * Ex: Just take a glance at the length of unit defined here:
 * https://github.com/hgrecco/pint/blob/master/pint/default_en.txt
 */
// export enum UnitsEnum { ... }

// NOTE: If we do support ranges, figure out how the descripor object should look like.
export enum ValueTypeEnum {
  // NOTE: We could into more details with numeric values such as
  // differentiating between integers, floats or even deeper such as count or continous.
  NUMERIC,
  CATEGORIC,
  // NOTE: Could be expanded to account for encoding
  TEXT,
  // NOTE: Could be expanded to account for date format
  DATE,
}
