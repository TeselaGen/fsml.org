import manifest from "./manifest.ts";
import { commandFactory } from "../utils.ts";

export default commandFactory({
  command: "create <command>",
  subCommands: [manifest],
});
