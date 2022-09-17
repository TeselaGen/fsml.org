---
title: 'Core Sections'
---

## Core Sections

Core sections of the shema are sections that must be present in all manifest files. They represent the minimum that is required to model a protocol using FSML.

### Version

This section describes the version of the specification format that this content adheres to.

### Identification

Every manifest must provide a way to uniquely identify a protocol. This can come in 2 main ways:

Content Identification - in this case an identifier (hash) is generated from the protocol content itself.

Authoritative Identification - in this an authority such as a software platform issues an ID to the protocol.

### Source Content

Every manifest must provide URL’s (or relative file paths if in an archive) to the various sources of content that comprise this protocol. Additionally the mime type of each content source should be annotated if possible. In most cases these will be links to files or HTTP GET URL’s that will serve up the content on demand.

### Utility Score

The intent behind a protocol can vary greatly based on the use case that precipitated its creation. For example a protocol that is used in a highly regulated production environment is going to be focused on including content that is different from the content in protocols used in a development environment where researchers are focused on trying to optimize the performance of the protocol.

The Utility Score attempts to represent at a high level the ability for a protocol to be useful in a particular situation. The Utility Score is a set of scores for specific categories of “utility” that are then normalized and aggregated together. A perfect utility score would represent a protocol that is very flexible and can be utilized in a wide variety of situations whereas lower utility scores mean a protocol only works well in certain situations.

Listed below are the categories of utility that we’re currently planning to include in the first version of the specification. These are subject to change as we work through the process of determining how to calculate them.

- **Readable** - How readable is this by a person (does it have an HTML rendering method)
- **Parsability** - How easily can this be parsed by a program in a standardized automated fashion (is it formatted in a machine readable source such as JSON)
- **Scalability** - How easily can this be scaled to yield different amounts of product
- **Automatible** - How easily can this protocol be run on lab automation equipment
- **Viability** - How many times has this been successfully executed
- **Traceability** - How well can someone trace the source of this protocol, it’s history, and any authorship restrictions (copyrights and/or licenses)
- **Parameterization** - How many of the attributes of this protocol are specified in a way that they can be parsed into individual sets or ranges of parameters for analysis.
- **Transferability** - How easily can this protocol be transferred from one system to another
- **Executability** - How much information is provided regarding the requirements (lab space, equipment, etc.) needed to execute the protocol
- **Predictability** - How much information is provided to be able to predict the amount of time and resources needed to execute a protocol as well as the expected yield.
- **Relevance** - Is this protocol still relevant or has it been superseded by another protocol
- **Queryable** - How easily can this protocol be organized in a storage scheme and queried for.
- **Comparability** - How easily can this protocol be compared to another “similar” protocol
- **Clarity** - How clear or easy to understand are the instructions in the protocol. This specifically focuses on terminology or phrases that aren’t found in common usage or the domain dictionary.
- **Flexibility** - How many optional configurations does the protocol provide to support various situations.
