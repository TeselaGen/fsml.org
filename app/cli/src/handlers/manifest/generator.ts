import { uuid } from "@fsml/packages/utils/deps/mod.ts";
import { set } from "@fsml/packages/utils/deps/lodash.ts";
import { ManifestTypes } from "@fsml/cli/types/enums.ts";
import {
  createTemplateForType,
  jsonToText,
  read,
} from "@fsml/packages/utils/mod.ts";

import {
  Manifest,
  TManifest,
} from "@fsml/packages/standard/manifest/manifest.ts";
import {
  Provenance,
  TProvenance,
} from "@fsml/packages/standard/manifest/provenance.ts";
import {
  SupplementalData,
  TSupplementalData,
} from "@fsml/packages/standard/manifest/data/supplemental-data.ts";
import {
  FileData,
  TFileData,
} from "@fsml/packages/standard/manifest/data/file-data.ts";
import {
  TabularData,
  TTabularData,
} from "@fsml/packages/standard/manifest/data/tabular/mod.ts";
import { selectParser } from "../plugins/utils.ts";

const FSML_UUID = "0db4fe89-155e-4484-a09f-a8955294de1b";

type ManifestGeneratorOpts = {
  type?: ManifestTypes;
};

const ManifestGenerator = (
  _manifest?: TManifest,
  _opts?: ManifestGeneratorOpts,
) => {
  // Make an instance of the manifest if none is passed.
  const manifest = _manifest || <TManifest> createTemplateForType(Manifest);

  function author(author: string): TProvenance {
    const provenanceObject = <TProvenance> createTemplateForType(Provenance);
    set(provenanceObject, "author", author);
    return provenanceObject;
  }

  /**
   * Generates the Manifest's ID based on its content.
   */
  async function id(): Promise<TManifest> {
    const manifestUint8Array = new TextEncoder().encode(
      jsonToText({ format: "json", content: manifest }),
    );
    const manifestID = await uuid.v5.generate(FSML_UUID, manifestUint8Array);
    set(manifest, "id", manifestID);
    return manifest;
  }

  async function data(
    filepath: string,
    parser?: string,
  ): Promise<TSupplementalData> {
    const parserPlugin = await selectParser(filepath, parser);

    const SupplementalDataObject = <TSupplementalData> (
      createTemplateForType(SupplementalData)
    );

    let dataObject: TFileData | TTabularData;

    // When no parser is available a 'TFileData' data object
    // will be generated.
    if (!parserPlugin) {
      dataObject = <TFileData> createTemplateForType(FileData);
    } else {
      const result = await parserPlugin.run(filepath);
      dataObject = (result.data ||
        createTemplateForType(TabularData)) as TTabularData;
      if (!result.data && result.file) {
        dataObject = typeof result.file === "string"
          ? JSON.parse(await read(result.file))
          // NOTE: we may need to specify that the encoding (s.a., UTF-8)
          : (new TextDecoder().decode(result.file));
      }
    }
    SupplementalDataObject.data.push(dataObject);

    return SupplementalDataObject;
  }

  async function generate(args: {
    author: string;
    filepath: string;
    parser: string;
  }): Promise<TManifest> {
    const { author: _author, filepath, parser } = args;
    const provenanceObject = author(_author);
    const SupplementalDataObject = await data(filepath, parser);

    set(SupplementalDataObject, "provenance", provenanceObject);
    set(manifest, "supplementalInfo", SupplementalDataObject);

    await id();

    return manifest;
  }

  return { generate };
};

export default ManifestGenerator;
