/**
 * Data example
 *
 * Subject  ; Time  ; Time Units ; Bioreactor Volume (L) ; Meas A (ug/ul)
 * Strain A ;   0   ;  hours     ;        2              ;     10.5
 * Strain A ;   1   ;  hours     ;        4              ;     11.5
 */

/**
 * Standard Option 1 (row-based)
 */
const SupplementalDataExample = {
  type: 'data',
  utilityScore: -1,
  data: [
    {
      sourceFileReference: 'some reference to manifest.sourceContent',
      name: 'dataset',
      rows: [
        {
          index: 0,
          values: [
            { index: 0, value: 'Strain A' },
            { index: 1, value: '0' },
            { index: 2, value: 'hours' },
            { index: 3, value: '10.5' },
          ],
        },
        {
          index: 1,
          values: [
            { index: 0, value: 'Strain A' },
            { index: 1, value: '1' },
            { index: 2, value: 'hours' },
            { index: 3, value: '11.5' },
          ],
        },
      ],
      // columnDefinitions would correspond to the 'mapping' or 'specifications'
      // explaining and giving meaning to each column.
      columns: {
        '0': {
          index: 0,
          name: 'Subject',
          description: 'An optional for-humans field to decribe my column',
          kind: {
            type: 'IDENTIFIER',
            valueType: 'TEXT',
            class: { type: 'SUBJECT', name: 'subject' },
          },
        },
        '1': {
          index: 1,
          name: 'Time',
          kind: {
            type: 'REFERENCE',
            valueType: 'NUMERIC',
            class: {
              type: 'REFERENCE_DIMENSION',
              name: 'hours',
              // dimension could potentially be optional at the expense of a lower utility score
              // OR if there's another column definition referencing this one.
              dimension: { type: 'DIMENSION', type: 'TIME' },
            },
          },
          // NOTE: notice here how the refdim units are specific to each value in the column
        },
        // referenced by specReference (i.e, column 1).
        '2': {
          index: 2,
          name: 'Time Units',
          kind: {
            // type: "" // kind.type is N/A to unit columns
            valueType: 'TEXT',
            class: {
              type: 'UNIT',
              value: 'hours',
              dimension: { type: 'DIMENSION', type: 'TIME' },
              // reference to this unit's values.
              valueReference: 1,
            },
          },
        },
        '3': {
          index: 3,
          name: 'Bioreactor Volume (L)',
          kind: {
            type: 'FACTOR',
            valueType: 'NUMERIC',
            class: {
              type: 'DESCRIPTOR',
              name: 'Bioreactor Volume',
              dimension: { type: 'DIMENSION', type: 'VOLUME' },
              unit: {
                type: 'UNIT',
                value: 'L',
                dimension: { type: 'DIMENSION', type: 'VOLUME' },
              },
            },
          },
        },
        // NOTE: notice here how the units are across the whole column.
        '4': {
          index: 4,
          name: 'Meas A (ug/ul)',
          kind: {
            type: 'OBSERVATION',
            valueType: 'NUMERIC',
            class: {
              type: 'MEASUREMENT',
              name: 'Meas A',
              valueType: 'NUMERIC',
              // dimension could potentially be option at the expense of a lower utility score
              // plus in this case, the measurement has a column-wide unit applied,
              // and units already come with a dimension...
              dimension: { type: 'DIMENSION', type: 'CONCENTRATION' },
              unit: {
                type: 'UNIT',
                value: 'hours',
                dimension: { type: 'DIMENSION', type: 'CONCENTRATION' },
              },
            },
          },
        },
      },
      // NOTE: Columns as an array, havent yet find a typebox type for '[key:string]: SomeType'.
      columns: [
        {
          index: 0,
          name: 'Subject',
          description: 'An optional for-humans field to decribe my column',
          kind: {
            type: 'IDENTIFIER',
            valueType: 'TEXT',
            class: { type: 'SUBJECT', name: 'subject' },
          },
        },
        {
          index: 1,
          name: 'Time',
          kind: {
            type: 'REFERENCE',
            valueType: 'NUMERIC',
            class: {
              type: 'REFERENCE_DIMENSION',
              name: 'hours',
              // dimension could potentially be optional at the expense of a lower utility score
              // OR if there's another column definition referencing this one.
              dimension: { type: 'DIMENSION', type: 'TIME' },
            },
          },
          // NOTE: notice here how the refdim units are specific to each value in the column
        },
        // referenced by specReference (i.e, column 1).
        {
          index: 2,
          name: 'Time Units',
          kind: {
            // type: "" // kind.type is N/A to unit columns
            valueType: 'TEXT',
            class: {
              type: 'UNIT',
              value: 'hours',
              dimension: { type: 'DIMENSION', type: 'TIME' },
              // reference to this unit's values.
              valueReference: 1,
            },
          },
        },
        {
          index: 3,
          name: 'Bioreactor Volume (L)',
          kind: {
            type: 'FACTOR',
            valueType: 'NUMERIC',
            class: {
              type: 'DESCRIPTOR',
              name: 'Bioreactor Volume',
              dimension: { type: 'DIMENSION', type: 'VOLUME' },
              unit: {
                type: 'UNIT',
                value: 'L',
                dimension: { type: 'DIMENSION', type: 'VOLUME' },
              },
            },
          },
        },
        // NOTE: notice here how the units are across the whole column.
        {
          index: 4,
          name: 'Meas A (ug/ul)',
          kind: {
            type: 'OBSERVATION',
            valueType: 'NUMERIC',
            class: {
              type: 'MEASUREMENT',
              name: 'Meas A',
              valueType: 'NUMERIC',
              // dimension could potentially be option at the expense of a lower utility score
              // plus in this case, the measurement has a column-wide unit applied,
              // and units already come with a dimension...
              dimension: { type: 'DIMENSION', type: 'CONCENTRATION' },
              unit: {
                type: 'UNIT',
                value: 'hours',
                dimension: { type: 'DIMENSION', type: 'CONCENTRATION' },
              },
            },
          },
        },
      ],
    },
  ],
};

/**
 * Standard Option 1 (column-based)
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
      // columnDefinitions would correspond to the 'mapping' or 'specifications'
      // explaining or giving meaning to each column
      // Could be of "[key: string]: value" type or an array.
      columnDefinitions: {
        '0': { name: 'Subject', def: { type: 'SUBJECT', name: 'subject' } },
        '1': {
          name: 'Time',
          def: {
            type: 'REFERENCE_DIMENSION',
            name: 'hours',
            // dimension could potentially be option at the expense of a lower utility score
            // OR if there's another column spec referencing this one.
            dimension: { type: 'DIMENSION', type: 'TIME' },
          },
          // NOTE: notice here how the units are specific to each value in the column
        },
        // referenced by specReference (i.e, column 1).
        '2': {
          name: 'Time Units',
          def: {
            type: 'UNIT',
            value: 'hours',
            dimension: { type: 'DIMENSION', type: 'TIME' },
            specReference: 1,
          },
        },
        // NOTE: notice here how the units are across the whole column.
        '3': {
          name: 'Meas A (ug/ul)',
          def: {
            type: 'MEASUREMENT',
            name: 'Meas A',
            valueType: 'NUMERIC',
            // dimension could potentially be option at the expense of a lower utility score
            // plus in this case, the measurement has a column-wide unit applied,
            // and units already come with a dimension...
            dimension: { type: 'DIMENSION', type: 'CONCENTRATION' },
            unit: {
              type: 'UNIT',
              value: 'hours',
              dimension: { type: 'DIMENSION', type: 'CONCENTRATION' },
            },
          },
        },
      },
    },
  ],
};
