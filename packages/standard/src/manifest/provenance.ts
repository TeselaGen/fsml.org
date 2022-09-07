import { Static, Type } from '@sinclair/typebox';

// TODO: implement based on https://fsml.org/model/manifest/supplemental-sections/
export const Provenance = Type.Object({
  author: Type.String(),
  // abstract: Type.String(),
  // parentProtocol: Type.String(),
  // versionInformation: Type.String(),
  // changelog: Type.String(),
  // organization: Type.String(),
});

export type TProvenance = Static<typeof Provenance>;
export default Provenance;
