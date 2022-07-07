---
title: 'Architecture'
---

# Overview

Our initial approach is to embody the Fermentation Systems Modeling Language in existing frameworks and languages.

We have chosen the JavaScript or more specifically TypeScript language because:

- It’s portable
- It’s web friendly
- It’s widely used
- It’s extensible
- It provide static typing
- We have familiarity with it

In order to provide a very high level of cross platform adoption we’re developing using the TypeBox framework which enables static transpile time typing of code in the associated tools as well as generating a JSON Schema which can be used by a wide variety of languages besides JavaScript and TypeScript.

Our initial implementation is using the Deno runtime instead of Node.js because Deno provides native TypeScript support and can target and compile code into a portable executable (as well as WASM).

# Tooling

We plan to develop the following tools to enable using the language.

- SDK - An isomorphic (usable on server or in a browser) software development kit / package that will provide the ability to generate, parse, validate, and support rendering of protocol manifests.
- JSON Schema - A specification file that can be used to validate protocol manifests. JSON Schema supports a variety of formats such as JSON, YAML, and TOML.
- CLI - A portable command line tool that can be used to access the functionality of the SDK.
- Editing Tools - A collection of tools to assist users in editing manifest files.
- Conversion Tools - A collection of tools and scripts to assist users in converting from one source format to another.
- TeselaGen Integrations - Integrate tools into TeselaGen Platform
