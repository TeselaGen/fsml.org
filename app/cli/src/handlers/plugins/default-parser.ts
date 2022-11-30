/** NOTE: We might move this into a monorepo "package" and maybe refactor it so it follows
 * whatever interface we end up designing for data parsers. **/
import { IParser, PluginTypes } from "@fsml/packages/plugins/types.ts";
import { set } from "@fsml/packages/utils/deps/lodash.ts";
import { createTemplateForType, read } from "@fsml/packages/utils/mod.ts";
import {
  TabularData,
  TTabularData,
} from "@fsml/packages/standard/manifest/data/tabular/mod.ts";
import {
  Class,
  Column,
  Kind,
  TClass,
  TColumn,
  TKind,
} from "@fsml/packages/standard/manifest/data/tabular/column/mod.ts";
import papaparse from "https://esm.sh/papaparse@5.3.2";
import { TValue } from "../../../../../packages/standard/src/manifest/data/tabular/value.ts";

// TODO: This one shall be extended so that it becomes
// an actually useful default parser by somehow auto-detecting
// things from the data file, like column delimiter, and also maybe
// column kinds. It could potentially also be extended to prompt the user
// for information on how to parse the dataset in a first version.
const DefaultDataParser: IParser = {
  name: "defaultDataParser",
  type: PluginTypes.PARSER,
  run: async (file) => {
    console.info(`Parsing file '${file}'...`);

    const tabularDataObject = <TTabularData> createTemplateForType(TabularData);
    const columnObject = <TColumn> createTemplateForType(Column);
    const kindObject = <TKind> createTemplateForType(Kind);
    const classObject = <TClass> createTemplateForType(Class);

    set(kindObject, "class", classObject);
    set(columnObject, "kind", kindObject);
    set(columnObject, "kind", kindObject);
    set(tabularDataObject, "column", columnObject);

    const data = typeof file === "string" ? read(file) : file.toString();
    const dataRows = <string[][]> papaparse.parse(data).data;
    dataRows.forEach((csvRow, rowIndex) => {
      const values: TValue[] = [];
      csvRow.forEach((value, columnIndex) => {
        values.push({
          index: columnIndex,
          value,
        });
      });
      tabularDataObject.rows.push({
        index: rowIndex,
        values,
      });
    });

    // TODO: write data object to file.
    return await Promise.resolve({ data: tabularDataObject });
  },
  isApplicable: async (file) => {
    console.info(`Checking if file can be parsed...`);
    if (typeof file === "string" && file.endsWith(".csv")) {
      console.info(`File suitable for the defaultDataParser...`);
      return await Promise.resolve(true);
    }
    return await Promise.resolve(false);
  },
};

export default DefaultDataParser;
