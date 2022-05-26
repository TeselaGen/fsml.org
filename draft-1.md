<!-- Output copied to clipboard! -->

<!-----

Yay, no errors, warnings, or alerts!

Conversion time: 0.867 seconds.


Using this Markdown file:

1. Paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs to Markdown version 1.0β33
* Thu May 26 2022 08:29:16 GMT-0700 (PDT)
* Source doc: FSML Update - May 2022

WARNING:
You have 9 H1 headings. You may want to use the "H1 -> H2" option to demote all headings by one level.

----->

<p style="color: red; font-weight: bold">>>>>>  gd2md-html alert:  ERRORs: 0; WARNINGs: 1; ALERTS: 0.</p>
<ul style="color: red; font-weight: bold"><li>See top comment block for details on ERRORs and WARNINGs. <li>In the converted Markdown or HTML, search for inline alerts that start with >>>>>  gd2md-html alert:  for specific instances that need correction.</ul>

<p style="color: red; font-weight: bold">Links to alert messages:</p>
<p style="color: red; font-weight: bold">>>>>> PLEASE check and correct alert issues and delete this message and the inline alerts.<hr></p>

FSML.org Update

25-May-2022

# Home Page

The first fermentation happened 13,000 years ago and we’re still trying to brew the perfect batch today.

TeselaGen in collaboration with BioMADE has created fsml.org (Fermentation Systems Modeling Language) to help further our ability to create the best fermentation processes through protocol modeling.

(links)

Background

The Model

An Example

# Background Page

Fermentation is as much of an art as it is science. In nearly all fermentation processes the challenge is to create the right environment with the right food for the right microbial strain to yield the desired product.

Timing, temperature, feed rate, pH, and many other factors have to oftentimes be in fairly narrow ranges in order to yield the optimal result. Additionally these ranges are rarely known ahead of time and must be discovered through a combination of different methods, such as trial and error, intuition, statistical analysis, and now machine learning.

The latter two methods require the use of computational resources which means the data around these fermentation processes must be able to be parsed and understood by a program. However the first two methods are largely human driven which means we need language that can model the fermentation systems and processes and be both parsed and understood by machines and read and understood by people.

(links)

Inspiration

Design Principles

Utility Score

Technical Architecture

# Inspiration

We want to make sure that we build upon previous successes. To this end much of our design has taken inspiration from a variety of well used technologies. The two main sources of inspiration are HTML and NCBI.

**HTML** - is a specification that is formalized through usage. Unlike other language specifications which are formalized first and then must be adopted. Most HTML language features are proposed and then become standardized through implementation and usage. We want to take a similar approach by providing a small set of core standardized language sections accompanied by a much larger set of optional sections which may or may not get adopted and used.

**NCBI** - has tackled the enormous task of cataloging a wide variety of scientific research. This research comes in many different formats. One of the strategies used by NCBI is to create a standardized summary which then references the specific piece of research in its native format. We plan to adopt this pattern as well. Instead of requiring protocols to first be converted into a new format we will instead create a standardized summary or manifest that references the original protocol.

# Design Principles

Establishing design principles can help govern the development process and to ensure it produces a cohesive solution. After surveying the various existing protocol formats and use cases we’ve developed the following principles that we think will be useful.

File First - The majority of protocols start their life as a flat file. We want to make sure the tools and specifications are first and foremost flat file friendly.

Automated Generation - Whenever possible we should design things in a way that a program can automatically infer and generate information with little to no input from the user.

Reference toProtocols - We want to make sure that we can effectively reference other existing protocols without having to modify the original source content.

Web Focused - The web has become the most common way to share information and what tools or specifications are developed need to be highly compatible with existing web protocols and frameworks.

Portability - In order to attain a high adoption rate we need to ensure any tools are supported across multiple platforms.

Non Binary Adoption - We want to avoid an “all or nothing” approach. Instead we want users to be able to start using what they can right away and add in the remainder as time and priorities allow.

Extensibility - We can not predict the future and therefore must provide specific places where people can extend the model to meet their needs.

Pragmatic Ubiquity - Abstract modeling and theories can be very powerful when conceptualizing solutions however we want to make sure what we implement is likely to be widely used on a daily basis.

# Technical Architecture

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

We plan to develop the following tools to enable using the language.

- SDK - An isomorphic (usable on server or in a browser) software development kit / package that will provide the ability to generate, parse, validate, and support rendering of protocol manifests.
- JSON Schema - A specification file that can be used to validate protocol manifests. JSON Schema supports a variety of formats such as JSON, YAML, and TOML.
- CLI - A portable command line tool that can be used to access the functionality of the SDK.
- Editing Tools - A collection of tools to assist users in editing manifest files.
- Conversion Tools - A collection of tools and scripts to assist users in converting from one source format to another.

# The Model Page

The model consists of two main pieces:

Data Model: a machine friendly data model that’s straightforward to parse

Presentation Layer: a human readable rendering of the data

**Data Model**

The initial implementation of the model language\* aims to embody the language within an existing real world language, TypeScript, that can generate a cross platform schema via JSON Schema. You can read more about the architecture here (link to architecture)

As mentioned in our Design Principles we’re taking a file first approach that enables us to talk _about_ a protocol using a manifest file. There are three core mandatory sections to the manifest file all of which can be generated in an automated way. The remaining supplemental sections are optional but increase the utility score.

(links)

Core Sections

Supplemental Sections

An Example

**Presentation Layer**

Being able to exchange data in an automated way is important but it’s equally important for users to be able to consume the data in a human friendly medium. To support this the modeling specification provides a way for the manifest file to specify how to render the data in HTML (specifically XHTML). Markdown is also provided as a render format since it is relatively straightforward to convert Markdown into HTML and Markdown, while less rich, can be an easier format to generate.

(links)

Rendering Frameworks

Markdown Conversion Support

\*Note: this schema is still under heavy development and subject to change!

# Core Sections

**Version**

This section describes the version of the specification format that this content adheres to.

**Identification**

Every manifest must provide a way to uniquely identify a protocol. This can come in 2 main ways:

Content Identification - in this case an identifier (hash) is generated from the protocol content itself.

Authoritative Identification - in this an authority such as a software platform issues an ID to the protocol.

**Source Content**

Every manifest must provide URL’s (or relative file paths if in an archive) to the various sources of content that comprise this protocol. Additionally the mime type of each content source should be annotated if possible. In most cases these will be links to files or HTTP GET URL’s that will serve up the content on demand.

**Utility Score**

The intent behind a protocol can vary greatly based on the use case that precipitated its creation. For example a protocol that is used in a highly regulated production environment is going to be focused on including content that is different from the content in protocols used in a development environment where researchers are focused on trying to optimize the performance of the protocol.

The Utility Score attempts to represent at a high level the ability for a protocol to be useful in a particular situation. The Utility Score is a set of scores for specific categories of “utility” that are then normalized and aggregated together. A perfect utility score would represent a protocol that is very flexible and can be utilized in a wide variety of situations whereas lower utility scores mean a protocol only works well in certain situations.

Listed below are the categories of utility that we’re currently planning to include in the first version of the specification. These are subject to change as we work through the process of determining how to calculate them.

- Readable - How readable is this by a person (does it have an HTML rendering method)
- Parsability - How easily can this be parsed by a program in a standardized automated fashion (is it formatted in a machine readable source such as JSON)
- Scalability - How easily can this be scaled to yield different amounts of product
- Automatible - How easily can this protocol be run on lab automation equipment
- Viability - How many times has this been successfully executed
- Traceability - How well can someone trace the source of this protocol, it’s history, and any authorship restrictions (copyrights and/or licenses)
- Parameterization - How many of the attributes of this protocol are specified in a way that they can be parsed into individual sets or ranges of parameters for analysis.
- Transferability - How easily can this protocol be transferred from one system to another
- Executability - How much information is provided regarding the requirements (lab space, equipment, etc.) needed to execute the protocol
- Predictability - How much information is provided to be able to predict the amount of time and resources needed to execute a protocol as well as the expected yield.
- Relevance - Is this protocol still relevant or has it been superseded by another protocol
- Queryable - How easily can this protocol be organized in a storage scheme and queried for.
- Comparability - How easily can this protocol be compared to another “similar” protocol
- Clarity - How clear or easy to understand are the instructions in the protocol. This specifically focuses on terminology or phrases that aren’t found in common usage or the domain dictionary.
- Flexibility - How many optional configurations does the protocol provide to support various situations.

# Supplemental Sections

Supplemental sections may or may not be able to be generated in an automated fashion. However the format of the sections will be standardized in a manner that can be machine readable because the presence and completeness of a supplemental section will be used in the calculation of the Utility Score.

**Bill of Materials**

This is a list of materials required for the protocol. The equivalent to an ingredient list.

**Expected Results**

This is a description of the expected result of protocol. Usually this will describe the yield of a particular fermentation.

**Provenance** \
Provenance will be broken down into multiple subsections all of which help describe how this protocol came into existence. Currently proposed subsections are:

- Author - who authored the protocol
- Abstract - usually a link to a paper that describes the development of the protocol
- Parent Protocol - was this derived from another protocol
- Version Information - is this a newer version of an existing protocol
- Changelog - revision history of protocol
- Organization - was this protocol developed by a specific organization

**Classification**

Classification is another section that will be broken down into subsections and will also provide the ability for users to extend this section. This section should describe restrictions on how the protocol can be shared as well as communicate the current development status of the protocol. Classification also will provide an area for specific search terms and keywords to allow other users to find protocols.

(the subsections are still under development)

**Target Use Cases**

This is a section where users can specify information about how and when this protocol should be used. It allows a user to tune the Utility Score.

**Associated Executions**

This is a section which can reference execution logs or traces that describes executions of this protocol and their results.

**Relevant References**

This section list references such as literature references that pertain to this protocol

**User Defined Metadata**

This is a free form section that allows users to storage metadata which doesn’t fit in any other section but is useful for this particular protocol

**Execution Context**

This section is broken into multiple subsections that describe the “environment” needed to execute the protocol.

- Expertise - what level of expertise or different types of expertise are needed to execute this protocol
- Space - what type of lab space(s) are needed to execute this protocol
- Equipment - what types of equipment are needed to execute this protocol
- Capabilities - what capabilities are needed to execute this type of protocol such as sequencing or HPLC analysis. Oftentimes these capabilities may be provided by external vendors.

**Protocol Content Blocks**

When surveying the current formats for protocols there were quite a few differences. If one of the end goals is to enable better sharing of protocols we have to find common ground. One of the few commonalities found was that all protocol formats seem to organize content into “blocks”. This is an abstraction over things like paragraphs, hashmap keys, list entries, etc. However it appears possible to be able to take an existing protocol and subdivide the content into blocks of content.

Depending on the source of the content the blocks will have different types. Additionally we plan to support the following block behaviors:

- Blocks can be reusable - especially useful for repetitive tasks
- Blocks can be nested - many protocols have an outline style format and machine readable formats are often nested
- Blocks can be parameterized - a block may accept parameters which will adjust the block content
- Blocks can be conditional - depending on the situation a block may be optional
- Blocks should have metadata attributes - one of the remaining items is to determine what attributes should be standard when describing blocks

**Operations**

The operations section is a list of operations or tasks that need to be periodically performed during specific time points in a workflow. The operations are reusable and will be referenced by the workflow section it applies to.

**Workflow**

Every protocol has a specific order of operations or list instructions that need to be performed in a specific sequence. The workflow section arranges the protocol blocks in the order in which they need to be executed. Initially we plan to support either a list based ordering and a directed acyclic graph based ordering.

Additionally workflows may be subdivided into workflow sections. These sections are reusable in the top level workflow. Sections may also reference operations that should take place in the background while this section of the workflow is being executed. Workflow sections can also be conditional.

Workflows and workflow sections can be both parameterized.

Individual steps in a workflow should reference a protocol content block and optional define parameters and any conditional arguments.

Expected execution time as well as Execution Context resources can either be specified at the workflow level, workflow section level, or at the individual step level.

**Parameters**

For a protocol to be flexible across multiple situations it must be able to be configurable. This section describes the available parameters for the protocol. All parameters must have default values. Parameters should be categorized in the following subsections to help with Utility Score calculations.

- Scalability Parameters - parameters to scale the protocol up or down
- Automation Parameters - parameters to adjust the protocol to use or not use lab automation equipment
- Contextual Parameters - all other parameters go here

**Domain Dictionaries**

Protocols can oftentimes use domain specific lingo that may make it difficult for novices or people in other disciplines to understand. This section provides a place to either reference via URL or define inline domain specific terminology.

**Search Attributes**

This section provides a place to define attributes used for querying or searching for this protocol.

# Example

Below is a contrived example of what it will look like if a user has an existing protocol in a PDF file and wants to generate a protocol manifest in the YAML format.

(example from slides)
