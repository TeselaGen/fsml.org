---
title: 'Column'
---

# Column Types


## Column Kind

Column kinds increases the degree of completeness of the FSML Manifest by describing a column's "Kind". There are 4 different kinds defined
in the FSML data schema standard:

- **IDENTIFIER**: identifier columns are the experimental units or subjects under evaluation.

- **REFERENCE**: reference columns relates to the reference axis values. These correspond to the reference on which observations are taken course.

- **FACTOR**: factors are the inputs or controlled variables used to manipulate the experiment with the aim of triggering responses to be studied and analyzed.

- **OBSERVATION**: observations are the experiment's responses to the manipulated factors, these explain how the subjects behave under the experimental conditions applied. Also known as the dependent variables.


## Column Class

Column Classes are a more deeply detailed structure than Column Kinds. These include additional properties that further explain the nature of each column
such as the units, phyisical dimension and the type of the values that each column holds.

- **SUBJECT**: corresponds to the the subjects under evaluation or the experimental units subjected to experimental conditions.

- **REFERENCE_DIMENSION**: the reference dimension of the experiment's observations or measurements.

- **MEASURMENT**: the measurements performed during the experiment. These are restricted to be numeric values and associated with some dimensional units.

- **CALL**: observations restricted to be of type categoric.

- **COMPUTED_VALUE**: computed values are a computation of other values, (e.g., the division of two other observation columns).

- **DESCRIPTOR**: descriptors are columns that hold generic type descriptors/features value for each row. These can be independent variables that are controlled throughout the experiment or defined as initial conditions.

- **UNIT**: Usually units are equal across an entire column. But, passing in unit columns allows to be specific about the units of each value in another column.


