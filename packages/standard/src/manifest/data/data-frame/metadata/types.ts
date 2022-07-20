export enum ColumnTypesEnum {
  SUBJECT = 'SUBJECT',
  DIMENSION = 'DIMENSION',
  MEASUREMENT = 'MEASUREMENT',
  DESCRIPTOR = 'DESCRIPTOR',
  UNIT = 'UNIT',
}

export enum DimensionsEnum {
  TIME,
  VOLUME,
}

// If we do support ranges, figure out how the descripor object should look like.
export enum ValueTypeEnum {
  NUMERIC,
  RANGE,
  CATEGORIC,
}
