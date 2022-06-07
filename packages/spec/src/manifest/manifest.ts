import { Type, Static } from '../deps/typebox.ts';

export const Manifest = Type.Object({
  id: Type.String(),
  name: Type.String(),
  timestamp: Type.Integer(),
  contentReferences: Type.Array(ContentReference),
});

export type Manifest = Static<typeof Manifest>;
