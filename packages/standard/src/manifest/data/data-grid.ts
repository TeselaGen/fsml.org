import { Type, Static } from '../../deps/typebox.ts';

// To be renamed... what about dataTable?
const DataGrid = Type.Object({
  dataGrids: Type.Object({
    name: Type.String(),
    cells: Type.Array(
      Type.Object({
        /** value could be simply a string here.
         * If ppl want to get more specific they maybe shouldnt use data grids */
        value: Type.String(),
        rowIndex: Type.Number(),
        columnIndex: Type.Number(),
      })
    ),
  }),
});

export default DataGrid;
