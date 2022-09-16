---
title: 'Supplemental Sections'
---

# Supplemental Sections

Supplemental sections may or may not be able to be generated in an automated fashion. However the format of the sections will be standardized in a manner that can be machine readable because the presence and completeness of a supplemental section will be used in the calculation of the Utility Score.


## Experimental Data Schema

FSML defines a [data schema](./data) for protocols experimentation data. Currently, this is the most important component of the FSML schema and the most useful one, the one that could be used for sharing and training most models. 


## Other Supplemental Sections

### Protocol Content Blocks

When surveying the current formats for protocols there were quite a few differences. If one of the end goals is to enable better sharing of protocols we have to find common ground. One of the few commonalities found was that all protocol formats seem to organize content into “blocks”. This is an abstraction over things like paragraphs, hashmap keys, list entries, etc. However it appears possible to be able to take an existing protocol and subdivide the content into blocks of content.

Depending on the source of the content the blocks will have different types. Additionally we plan to support the following block behaviors:

- Blocks can be reusable - especially useful for repetitive tasks
- Blocks can be nested - many protocols have an outline style format and machine readable formats are often nested
- Blocks can be parameterized - a block may accept parameters which will adjust the block content
- Blocks can be conditional - depending on the situation a block may be optional
- Blocks should have metadata attributes - one of the remaining items is to determine what attributes should be standard when describing blocks

### Protocol Workflow

Every protocol has a specific order of operations or list instructions that need to be performed in a specific sequence. The workflow section arranges the protocol blocks in the order in which they need to be executed. Initially we plan to support either a list based ordering and a directed acyclic graph based ordering.

Additionally workflows may be subdivided into workflow sections. These sections are reusable in the top level workflow. Sections may also reference operations that should take place in the background while this section of the workflow is being executed. Workflow sections can also be conditional.

Workflows and workflow sections can be both parameterized.

Individual steps in a workflow should reference a protocol content block and optional define parameters and any conditional arguments.

Expected execution time as well as Execution Context resources can either be specified at the workflow level, workflow section level, or at the individual step level.

### Execution Context

This section is broken into multiple subsections that describe the “environment” needed to execute the protocol.

- Expertise - what level of expertise or different types of expertise are needed to execute this protocol
- Space - what type of lab space(s) are needed to execute this protocol
- Equipment - what types of equipment are needed to execute this protocol
- Capabilities - what capabilities are needed to execute this type of protocol such as sequencing or HPLC analysis. Oftentimes these capabilities may be provided by external vendors.

### Bill of Materials

This is a list of materials required for the protocol. The equivalent to an ingredient list.

### Expected Results

This is a description of the expected result of protocol. Usually this will describe the yield of a particular fermentation.

### Provenance

Provenance will be broken down into multiple subsections all of which help describe how this protocol came into existence. Currently proposed subsections are:

- Author - who authored the protocol
- Abstract - usually a link to a paper that describes the development of the protocol
- Parent Protocol - was this derived from another protocol
- Version Information - is this a newer version of an existing protocol
- Changelog - revision history of protocol
- Organization - was this protocol developed by a specific organization

### Classification

Classification is another section that will be broken down into subsections and will also provide the ability for users to extend this section. This section should describe restrictions on how the protocol can be shared as well as communicate the current development status of the protocol. Classification also will provide an area for specific search terms and keywords to allow other users to find protocols.

(the subsections are still under development)
### Operations

The operations section is a list of operations or tasks that need to be periodically performed during specific time points in a workflow. The operations are reusable and will be referenced by the workflow section it applies to.

### Parameters

For a protocol to be flexible across multiple situations it must be able to be configurable. This section describes the available parameters for the protocol. All parameters must have default values. Parameters should be categorized in the following subsections to help with Utility Score calculations.

- Scalability Parameters - parameters to scale the protocol up or down
- Automation Parameters - parameters to adjust the protocol to use or not use lab automation equipment
- Contextual Parameters - all other parameters go here

### Target Use Cases

This is a section where users can specify information about how and when this protocol should be used. It allows a user to tune the Utility Score.

### Associated Executions

This is a section which can reference execution logs or traces that describes executions of this protocol and their results.

### Relevant References

This section list references such as literature references that pertain to this protocol

### User Defined Metadata

This is a free form section that allows users to storage metadata which doesn’t fit in any other section but is useful for this particular protocol

### Domain Dictionaries

Protocols can oftentimes use domain specific lingo that may make it difficult for novices or people in other disciplines to understand. This section provides a place to either reference via URL or define inline domain specific terminology.

### Search Attributes

This section provides a place to define attributes used for querying or searching for this protocol.
