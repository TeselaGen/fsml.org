/**
 * These are the different column spec types.
 */
export enum SpecTypesEnum {
  SUBJECT = 'SUBJECT',
  DIMENSION = 'DIMENSION',
  REFERENCE_DIMENSION = 'REFERENCE_DIMENSION',
  MEASUREMENT = 'MEASUREMENT',
  DESCRIPTOR = 'DESCRIPTOR',
  UNIT = 'UNIT',
}

/**
 * It may not be practical to set up an ENUM
 * for the accepted dimensions, since there could be many.
 *
 * But on the other hand, it is useful and if a new one is needed
 * an extension could be proposed.
 */
export enum DimensionsEnum {
  TIME = 'TIME',
  MASS = 'MASS',
  VOLUME = 'VOLUME',
  CONCENTRATION = 'CONCENTRATION',
  DENSITY = 'DENSITY',
}

// NOTE: If we do support ranges, figure out how the descripor object should look like.
export enum ValueTypeEnum {
  NUMERIC,
  RANGE,
  CATEGORIC,
}
