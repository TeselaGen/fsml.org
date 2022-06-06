import {
  Static,
  Type,
} from 'https://deno.land/x/typebox@0.23.4/src/typebox.ts';

const ContentReference = Type.Object({
  format: Type.String(),
  uri: Type.String(),
});

export const Manifest = Type.Object({
  id: Type.String(),
  name: Type.String(),
  timestamp: Type.Integer(),
  contentReferences: Type.Array(ContentReference),
});

export type Manifest = Static<typeof Manifest>;
