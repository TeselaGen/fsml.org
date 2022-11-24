---
title: 'Exporter Plugin'
sidebar_position: 3
slug: /software/plugins/exporter
---

# Exporter Plugin

The FSML Plugin Framework provides the [Exporter Interface](/software/plugins/appendix#exporter-interface) which defines the structure the plugin package must export.

## Structure
- **name** (string): An identifier for plugin.
- **type** (string): Type of the plugin. these must be one of the [Plugin Types](/software/plugins/appendix#plugin-types) provided by the FSML SDK.
- **run** (function): Main function of the module which takes in an FSML manifest and returns one or many data objects along with optional files.


## Exporter Interface

The Exporter Interface extends the [Plugin Interface](/software/plugins#plugin-interface). Notice how the **run** function in an Exporter Plugin, extends the one from the Plugin interface into a specific set of input and output arguments.

The input to the **run** function is an FSML manifest object and the output is one or many data objects or files with the contents of the FSML manifest in some other format.

```typescript
interface IExporter extends IPlugin {
  /** Any arbitrary name */
  name: "exporterName",
  /** Must be of type PluginTypes.EXPORTER */
  type: PluginTypes.EXPORTER,
  /**
   * Receives an fsml manifest and returns a
   * file and data object of some unknown type (e.g, json, yaml, etc.).
   */
  run: (
    manifest: TManifest,
  ) => Promise<{ filepath: string; data: unknown }[]>;
}
```
