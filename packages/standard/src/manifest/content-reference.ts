import { Type, Static } from '@sinclair/typebox';

export const ContentReference = Type.Object({
  contentType: Type.String(),
  contentUri: Type.String(),
});

export type ContentReference = Static<typeof ContentReference>;
