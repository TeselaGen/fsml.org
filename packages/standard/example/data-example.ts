/**
 * Data example
 *
 * Subject  ; Time  ; Time Unit ; Meas A ; Meas A Unit
 * Strain A ;   0   ;  hours    ;  10.5  ;  ug/ul
 * Strain A ;   1   ;  hours    ;  11.5  ;  ug/ul
 */
const SupplementalDataExample = {
  type: 'data',
  utilityScore: -1,
  data: [
    {
      name: 'data-frame',
      columns: [
        {
          index: 0, // these indexes would correspond to the column's position.
          name: 'Subject', // These names would be the column header names.
          // these values would correspond to the column values (its row values).
          values: [
            // 'index' corresponding to the row's position
            // 'value' corresponding to the cell value.
            { index: 0, value: 'Strain A' },
            { index: 1, value: 'Strain A' },
          ],
        },
        {
          index: 1,
          name: 'Time',
          values: [
            { index: 0, value: '0' },
            { index: 1, value: '21.9' },
          ],
        },
        {
          index: 2,
          name: 'Time Unit',
          values: [
            { index: 0, value: 'hours' },
            { index: 1, value: 'hours' },
          ],
        },
        {
          index: 3,
          name: 'Meas A',
          values: [
            { index: 0, value: '10.5' },
            { index: 1, value: '11.5' },
          ],
        },
      ],
      // specs would correspond to the 'mapping' or 'specifications'
      // explaining or giving meaning to each column
      specs: [
        { index: 0, spec: { type: 'SUBJECT', name: 'subject' } },
        {
          index: 1,
          spec: {
            type: 'REFERENCE_DIMENSION',
            name: 'hours',
            dimension: { type: 'DIMENSION', type: 'TIME' },
          },
        },
        // NOTE: notice here how the units are specific to each value in the column
        // referenced by specReference (i.e, column 1).
        {
          index: 2,
          spec: {
            type: 'UNIT',
            value: 'hours',
            dimension: { type: 'DIMENSION', type: 'TIME' },
            specReference: 1,
          },
        },
        // NOTE: notice here how the units are across the whole column.
        {
          index: 3,
          spec: {
            type: 'MEASUREMENT',
            name: 'Meas A',
            valueType: 'NUMERIC',
            dimension: { type: 'DIMENSION', type: 'CONCENTRATION' },
            unit: {
              type: 'UNIT',
              value: 'hours',
              dimension: { type: 'DIMENSION', type: 'CONCENTRATION' },
            },
          },
        },
      ],
    },
  ],
};
