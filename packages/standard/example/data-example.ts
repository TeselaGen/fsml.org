// DataGrid example
const SupplementalDataExample = {
  type: 'data',
  utilityScore: -1,
  data: {
    dataGrids: [
      {
        name: 'data-grid-one',
        cells: [
          {
            rowIndex: 0,
            columnIndex: 0,
            value: 'header-one',
          },
          {
            rowIndex: 1,
            columnIndex: 0,
            value: '10.5',
          },
        ],
      },
    ],
  },
};

/**
 * DataFrame-One example
 *
 * Subject  ; Time  ; Time Unit ; Meas A ; Meas A Unit
 * Strain A ;   0   ;  hours    ;  10.5  ;  ug/ul
 * Strain A ;   1   ;  hours    ;  11.5  ;  ug/ul
 */
const SupplementalDataExample = {
  type: 'data',
  utilityScore: -1,
  data: {
    dataFrames: [
      {
        name: 'data-frame-one',
        columns: [
             {
                 index: 0,
                 name: "Subject",
                 values: [{index: 0, value: "Strain A"}, {index: 1, value: "Strain A"}]
             },
             {
                 index: 1,
                 name: "Time",
                 values: [{index: 0, value: "0"}, {index: 1, value: "1"}]
             },
             {
                 index: 2,
                 name: "Time Unit",
                 values: [{index: 0, value: "hours"}, {index: 1, value: "hours"}]
             },
             {
                index: 3,
                name: "Meas A",
                values: [{index: 0, value: "10.5" }, {index: 1, value: "11.5" }]
            },
            {
                index: 4,
                name: "Meas A Unit",
                values: [{index: 0, value: "ug/ul" }, {index: 1, value: "ug/ul" }]
            }
        ],
        metadata: [
            { index: 0, type: "SUBJECT" },
            { index: 1, type: "DIMENSION", dimension: {name: "hours", type: "TIME"} }
            { index: 2, type: "UNIT", unit: {value: "hours"} },
            { index: 3, type: "MEASUREMENT", measurement: {name: "Meas A", type: "NUMERIC"} }
            { index: 4, type: "UNIT", unit: {value: "ug/ul"} }
        ]
      },
    ],
  },
};

/**
 * DataFrame-Two Example
 *
 * This format attempts to include metadata information
 * within the actual data itself. As one might appreciate,
 * this approach can become a little caotic. IMO, keeping what's data
 * and what's metadata separate as in DataFrame Format One becomes more readable
 * and less caotic to construct. Also makes it more flexibile in terms of how much
 * metadata information the user wants.
 */
const SupplementalDataExampleTwo = {
  type: 'data',
  utilityScore: -1,
  data: {
    dataFrames: [
      {
        name: 'data-frame-one',
        dimensions: {
          name: 'Hours',
          type: 'Time',
        },
        descriptors: [
          {
            name: 'Bioreactor Volume',
            value: '200',
            // optional
            unit: {
                value: "L",
                dimension: {
                    // name: "volume", // optional
                    type: "VOLUME"
                }
            }
            type: 'NUMERIC',
          },
        ],
        measurements: [
          {
            name: 'Acetone',
            unit: 'gl/ul',
            value: 10.5,
          },
        ],
      },
    ],
  },
};
