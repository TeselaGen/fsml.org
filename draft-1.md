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

