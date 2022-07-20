import { Type, Static } from '../../../deps/typebox.ts';
import Column from './column.ts';
import Metadata from './metadata/index.ts';

// To be renamed...
const DataFrame = Type.Object({
  dataFrames: Type.Object({
    name: Type.String(),
    columns: Type.Array(Column),
    /**
     * - I think "metadata" could be renamed to something more clear like "columnSpecs".
     * - It can also be optional at the expense of a lower utility score.
     */
    metadata: Type.Optional(Type.Array(Metadata))
  }),
});

export default DataFrame;
