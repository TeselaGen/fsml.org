import { Static, Type } from "@fsml/packages/utils/deps/typebox.ts";

const Value = Type.Object({
  /**
   * Column number
   */
  index: Type.Number(),
  // Metadata on the value will be stored
  // in the metadata type
  value: Type.String(),

  /** TBD if we shall support adding units here. */
  // unit: Type.Optional(Unit)
});

export type TValue = Static<typeof Value>;
export default Value;
