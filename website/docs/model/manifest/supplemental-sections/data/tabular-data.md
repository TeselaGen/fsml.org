---
title: 'Tabular'
---

# Tabular Schema

The tabular schema stores data as an array of rows referencing the source data file(s). Additionally,
the schema provides a columns array where all the information expalining each column is stored. The Tabular schema
is particularly useful for storing datasets such as fermentation experiments.

# Row

Rows represent a line of text extracted from a specific data file. For its lowest degree of completeness
each row would simply correspond to the full unparsed text of a particular line in the data file. For highest completeness,
each text line is converted into column values usually by splitting the row based on some column delimiter.

# Columns

An array type property of the tabular schema which increases the degree of completeness and the overall Utility Score as it stores
detailed information on each of the tabular data columns.

This information explains in a well-defined set of properties the nature of each column, both human and machine
readable which makes it specifically useful for the automation of processes such a Statisticaly Analyses or Machine Learning modelling.


# File Reference
A reference to the source file as [File Schema](./file-data.md).

# Metadata
Metadata is a flexible property in the schema to support storing anye extra information such a notes, a description or
even the column delimiter used for parsing rows.
