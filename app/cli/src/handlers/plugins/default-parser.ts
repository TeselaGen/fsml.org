/** NOTE: We might move this into a monorepo "package" and maybe refactor it so it follows
 * whatever interface we end up designing for data parsers. **/
import { IParser, PluginTypes } from "@fsml/packages/plugins/types.ts";
import { set } from "@fsml/packages/utils/deps/lodash.ts";
import { createValueForType } from "@fsml/packages/utils/mod.ts";
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

// TODO: This one shall be extended so that it becomes
// an actually useful default parser by somehow auto-detecting
// things from the data file, like column delimiter, and also maybe
// column kinds. It could potentially also be extended to prompt the user
// for information on how to parse the dataset in a first version.
const DefaultDataParser: IParser = {
  name: "defaultDataParser",
  type: PluginTypes.PARSER,
  run: async (filepath: string) => {
    console.info(`Parsing file '${filepath}'...`);
    const tabularDataObject = <TTabularData> createValueForType(TabularData);
    const columnObject = <TColumn> createValueForType(Column);
    const kindObject = <TKind> createValueForType(Kind);
    const classObject = <TClass> createValueForType(Class);

    set(kindObject, "class", classObject);
    set(columnObject, "kind", kindObject);
    set(columnObject, "kind", kindObject);
    set(tabularDataObject, "column", columnObject);

    // TODO: write data object to file.
    return await Promise.resolve({ data: tabularDataObject });
  },

  isApplicable: async (filepath: string) => {
    console.info(`Checking if ${filepath} can be parsed...`);
    return await Promise.resolve(true);
  },
};

export default DefaultDataParser;
