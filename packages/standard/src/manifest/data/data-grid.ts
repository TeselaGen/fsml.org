import { Type, Static } from '../../deps/typebox.ts';

const DataGrid = Type.Object({
  // To be renamed...
  dataGrids: Type.Object({
    name: Type.String(),
    cells: Type.Array(
      Type.Object({
        /** value could be simply a string if ppl want to get their data as data grids...? */
        value: Type.String(),
        rowIndex: Type.Number(),
        columnIndex: Type.Number()
      })
    ),
  }),
});

export default DataGrid
