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
      type: 'TABULAR',
      fileReference: 'some reference to manifest.sourceContent',
      name: 'dataset',
      // NOTE: it could be useful to store some optional metadata such as the delimiter used to parse rows into columns.
      // delimiter?: "",
      rows: [
        {
          index: 0,
          // fileReference: 'row-specific data file ref',
          // Figure out if Typebox has type that can specify either value or values.
          // value:
          //   'Subject  ; Time  ; Time Units ; Bioreactor Volume (L) ; Meas A (ug/ul)',
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
          valueType: {
            type: 'TEXT'
          }
          kind: {
            type: 'IDENTIFIER',
            class: { type: 'SUBJECT', name: 'subject' },
          },
        },
        '1': {
          index: 1,
          name: 'Time',
          valueType: {
            type: 'NUMERIC'
          },
          kind: {
            type: 'REFERENCE',
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
          valueType: {
            type: 'NUMERIC',
            range: [2, 4]
          },
          kind: {
            type: 'FACTOR',
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
            valueType: {
              type: 'NUMERIC'
            },
            class: {
              type: 'MEASUREMENT',
              name: 'Meas A',
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
      metadata: {
        delimiter: ";"
      }
    },
    {
      type: 'FILE',
    }
    // NOTE: expand on how to represent images.
    // {
    //   sourceFileReference: 'image file ref',
    //   // ...imageProperties
    // },
  ],
};
