---
title: 'Parser Plugin'
sidebar_position: 2
slug: /software/plugins/parser
---

# Parser Plugin

The FSML Plugin Framework provides the [Parser Interface](/software/plugins/parser#parser-interface) which defines the structure the plugin package must export.

## Structure
- **name** (string): An identifier for plugin.
- **type** (string): Type of the plugin. these must be one of the [Plugin Types](/software/plugins#plugin-types) provided by the FSML SDK.
- **run** (function): Main function of the module which takes in a file or a filepath and returns an FSML Manifest.
- **isApplicable** (function): Secondary function used to determine whether the input file has the correct format or properties to be correctly parsed by this module. It is essentially a validation function whose main utility is to prevent any attempt at parsing a file not suited for the parser.

## Parser Interface

The Parser Interface extends the [Plugin Interface](/software/plugins#plugin-interface). Notice how the **run** function in a Parser Plugin, extends the one from the Plugin interface into a specific set of input and output arguments, plus the additional isApplicable validation function.

The input to the **run** function can be either a filepath or a file data buffer or both, depending on the developer needs. For example, usually when working with the FSML CLI, the user will simply provide a filepath to where the input experimental data contents are located in the local file system. On the contrary, if the user/developer intends to leverage the FSML SDK within its own programming framework, she'll most likely benefit from passing in the data contents as a data buffer instead (e.g., from within a NodeRed Flow).

```typescript
interface IParser extends IPlugin {
  /** Any arbitrary name */
  name: "parserName",
  /** Must be of type PluginTypes.PARSER */
  type: PluginTypes.PARSER,
  /**
   * Receives a file as input and returns an FSML manifest (and optionally an output file).
   */
  run: (
    /* Input File, either as a filepath (string) or as file data buffer (UintArray8) */
    file: string | UintArray8,
  ) => Promise<{
      manifest: TManifest;
      file?: string | UintArray8;
    }>;
  /* Input File, either as a filepath (string) or the file data buffer (UintArray8) */
  isApplicable: (file: string | UintArray8) => Promise<boolean>;
}
```

## Template

Following the Plugins Framework interfaces described, we here show an example template of a Parser Plugin. that takes in a CSV file (either as a filepath or as a data buffer), parses it using any third-party npm csv reader packages and generates an FSML manifest.

Note that the FSML SDK provides a set of handy utility functions that help the developer in many different ways. In this example the
**createTemplateForType** function is leveraged, which generates an empty object (JSON) out of an FSML standard type imported from the FSML **standard** package.

```typescript
import fsml from "fsml"

const templateParser: IParser = {
  name: 'templateParser',
  type: PluginTypes.PARSER,
  run: async (file) => {
    // If file is a filepath, read file's contents
    const data: Uint8Array =
      typeof file === 'string' ? fs.readFileSync(file) : file;

    /**
     * The FSML SDK provides the 'createTemplateForType' util function
     * which creates an empty object FSML Manifest object.
     */
    const manifest: TManifest = fsml.utils.createTemplateForType(fsml.standard.Manifest);

    return await Promise.resolve({ manifest });
  },
  isApplicable: async (file) => {
    /** Custom validation logic should be implemented here */
    return Promise.resolve(true)
  },
};
```
