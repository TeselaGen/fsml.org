---
title: 'Design Principles'
---

# Overview

Establishing design principles can help govern the development process and to ensure it produces a cohesive solution. After surveying the various existing protocol formats and use cases we’ve developed the following principles that we think will be useful.

### File First

The majority of protocols start their life as a flat file. We want to make sure the tools and specifications are first and foremost flat file friendly.

### Automated Generation

Whenever possible we should design things in a way that a program can automatically infer and generate information with little to no input from the user.

### - Reference toProtocols

We want to make sure that we can effectively reference other existing protocols without having to modify the original source content.

### - Web Focused

The web has become the most common way to share information and what tools or specifications are developed need to be highly compatible with existing web protocols and frameworks.

### - Portability

In order to attain a high adoption rate we need to ensure any tools are supported across multiple platforms.

### - Non Binary Adoption

We want to avoid an “all or nothing” approach. Instead we want users to be able to start using what they can right away and add in the remainder as time and priorities allow.

### - Extensibility

We can not predict the future and therefore must provide specific places where people can extend the model to meet their needs.

### - Pragmatic Ubiquity

Abstract modeling and theories can be very powerful when conceptualizing solutions however we want to make sure what we implement is likely to be widely used on a daily basis.
