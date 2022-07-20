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
 * DataFrame example
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
        // TBD: a way to represent how unit columns are going to be linked
        // to value columns like meas, dimension, and potentially even descriptors.
        metadata: [
            { index: 0, spec: {type: "SUBJECT", name: "subject"} },
            { index: 1, spec: "DIMENSION", dimension: {name: "hours", type: "TIME"} }
            { index: 2, spec: "UNIT", unit: {value: "hours"} },
            { index: 3, spec: "MEASUREMENT", measurement: {name: "Meas A", type: "NUMERIC"} }
            { index: 4, spec: "UNIT", unit: {value: "ug/ul"} }
        ]
      },
    ],
  },
};
