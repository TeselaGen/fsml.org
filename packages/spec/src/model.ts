import {
  Static,
  Type,
} from 'https://deno.land/x/typebox@0.23.4/src/typebox.ts';

const ContentReference = Type.Object({
  format: Type.String(),
  uri: Type.String(),
});


