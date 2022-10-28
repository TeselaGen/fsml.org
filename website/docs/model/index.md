---
title: 'Model'
sidebar_position: 3
slug: /model/
---

# Overview

The model consists of two main pieces:

- **Data Model**: a machine friendly data model that’s straightforward to parse
- **Presentation Layer**: a human readable rendering of the data

# Data Model

The initial implementation of the model language\* aims to embody the language within an existing real world language, TypeScript, that can generate a cross platform schema via JSON Schema. You can read more about the architecture here (link to architecture)

As mentioned in our Design Principles we’re taking a file first approach that enables us to talk _about_ a protocol using a manifest file. There are three core mandatory sections to the manifest file all of which can be generated in an automated way. The remaining supplemental sections are optional but increase the utility score.

### Learn more

- [Core Sections](/model/manifest/core-sections)
- [Supplemental Sections](/model/manifest/supplemental-sections)
- [An Example](/examples/pdf-yaml-example)

# Presentation Layer

Being able to exchange data in an automated way is important but it’s equally important for users to be able to consume the data in a human friendly medium. To support this the modeling specification provides a way for the manifest file to specify how to render the data in HTML (specifically XHTML). Markdown is also provided as a render format since it is relatively straightforward to convert Markdown into HTML and Markdown, while less rich, can be an easier format to generate.

### Learn more

- [Rendering Frameworks](/model/presentation/rendering-frameworks)
- [Markdown Conversion Support](/model/presentation/markdown-support)

\*Note: this schema is still under heavy development and subject to change!
