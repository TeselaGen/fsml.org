import { Type, Static } from '../deps/typebox.ts';

export const ContentReference = Type.Object({
  contentType: Type.String(),
  contentUri: Type.String(),
});

export type ContentReference = Static<typeof ContentReference>;
