import { Type, Static } from '../deps/typebox.ts';

export const SupplementalData = Type.Object({
  type: Type.Literal("data"),
  data: Type.Any()
});

export type SupplementalData = Static<typeof SupplementalData>;
