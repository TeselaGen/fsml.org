/** NOTE: We might move this into a monorepo "package" and maybe refactor it so it follows
 * whatever interface we end up designing for data parsers. **/
import { PluginTypes } from "@fsml/cli/types/enums.ts";
import { createValueForType } from "@fsml/packages/utils/mod.ts";
import {
  TabularData,
  TTabularData,
} from "@fsml/packages/standard/manifest/data/tabular/mod.ts";
import { IParser } from "@fsml/cli/handlers/plugins/utils.ts";

const DefaultDataParser: IParser = {
  name: "defaultDataParser",
  type: PluginTypes.PARSER,
  parse: async (filepath: string) => {
    console.info(`Parsing file '${filepath}'...`);
    const tabularDataObject = <TTabularData> createValueForType(TabularData);
    // TODO: write data object to file.
    return await Promise.resolve({ data: tabularDataObject });
  },

  isApplicable: async (filepath: string) => {
    console.info(`Checking if ${filepath} can be parsed...`);
    return await Promise.resolve(true);
  },
};

export default DefaultDataParser;
