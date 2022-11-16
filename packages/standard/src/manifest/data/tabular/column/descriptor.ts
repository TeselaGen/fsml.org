import { Type } from "@fsml/packages/utils/deps/typebox.ts";
import { ColumnClassEnum } from "../../types.ts";
import Unit from "./unit.ts";

const Descriptor = Type.Object({
  type: Type.Literal(ColumnClassEnum.DESCRIPTOR),
  name: Type.String(),
  /**
   * The Descriptor Spec, could optional come with a unit.
   */
  unit: Type.Optional(Unit),
});

export default Descriptor;
