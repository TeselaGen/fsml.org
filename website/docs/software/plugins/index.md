---
title: 'Plugin Framework'
sidebar_position: 2
slug: /software/plugins/
---

# Plugin Framework

The Plugin Framework is part of the core features of the FSML SDK Library. It implements an interface that allows the community to develop programming packages that can leverage the SDK's functionalities and implement any custom logic required by the user's use cases.

## Plugin Types
The FSML SDK supports a specific set of different types of Plugins, although generic plugins can also be implemented with any custom specific scope.

- [Parser](/software/plugins/parser)
- [Exporter](/software/plugins/parser)
- [Generic](/software/plugins/parser)

```typescript
enum PluginTypes {
  /**
   * Any plugin used for transforming experimental
   * data into an FSML manifest.
   */
  PARSER = "parser",
  /**
   * Any plugin used for exporting an FSML manifest
   * into some other format.
   */
  EXPORTER = "exporter",
  /**
   * Any plugin used for other purposes. Keep in mind these type of plugins
   * will not necessarily work with all of the FSML SDK modules.
   */
  GENERIC = "generic",
}
```

## Plugin Interface
All Plugins must extend this interface in order interact and integrate with the FSML SDK.

```typescript
interface IPlugin {
    /** String identifier for plugin. */
    name: string;
    /** Type of the Plugin */
    type: PluginTypes;
    /** Generic main function */
    run: (...args: any[]) => Promise<any>;
}
```
