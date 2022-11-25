---
title: 'Phycus Parser Example'
metaTitle: 'FSML Manifest for MicroByre'
metaDescription: 'Phycus Parser Example'
sidebar_position: 2
---

# Phycus: FSML Parser Plugin

This is a real-world example from FSML partner **Phycus**.

This example showcases how to build an FSML Parser Plugin to parse experimental data into an FSML Manifest. The Plugin will then be installed
with the FSML CLI tool and used to take in the experimental data file and convert that into an FSML Manifest.

Three files are necessary to carry on with this example and those are available in the following link:

<!-- Not sure how to reference the file in the static folder -->
- [**phycusExample.zip**](/)


## Installing the FSML CLI Tool

Follow the steps in [Installing CLI Tool](/software/tools/cli#installing-cli-tool). Get familiarized with the CLI Tool commands in [CLI Tool](/software/tools/cli).

## Phycus Applikon Bioreactor Data

Bioreactors provide a controlled environment for experiments involving growth or biological reactions under specific conditions. For example, the Applikon bioreactor allows a user to set and measure parameters such as temperature, dissolved oxygen, pH, and stirring speed. After a run, the bioreactor exports a CSV describing the experimental design. An example of such CSV is included in the [**phycusExample.zip**](/) file.

The columns of the Applikon Bioreactor’s output file denote the independent variables of time, dissolved oxygen, pH, stirring speed, and volume.

## Phycus Plugin Parser

Leverage the FSML [Parser Plugin Template](/software/plugins/parser/#template) as the starting point for implementing the Phycus Plugin Parser for Applikon Bioreactor data.

This template generates a very generic FSML manifest file, so to convert an equipment-specific exported file to a more well-defined and descriptive FSML data schema, in this case a CSV exported from the Applikon Bioreactor, we'll need to describe the CSV columns by filling out the FSML [Columns](/model/manifest/supplemental-sections/data/tabular-data/columns) type object.

### Column Definitions

The first CSV column with the header of "Time [h]" is converted to an object with an index of 0 (column 0). The valueType object has a type of [Numeric](/model/manifest/supplemental-sections/data/data-types/values#numeric), as the timepoints are displayed as numbers. The [Column Kind](/model/manifest/supplemental-sections/data/data-types/columns#kind) object for the "Time [h]" column has a type of **Reference**, and the [Column Class](/model/manifest/supplemental-sections/data/data-types/columns#class) object has a type of **Reference_Dimension**, as the timepoints correspond to a series of observations. The dimension object has a dimension type of [TIME](/model/manifest/supplemental-sections/data/data-types/dimensions/), and the unit object has a value of **Hours**.

Finally, the primary schema for the FSML Column object for the first columns ends up as:

<details>
<summary>Time column definition</summary>

```json
{
  "name": "Time [h]",
  "description": "Time",
  "valueType": { "type": "NUMERIC" },
  "kind": {
    "type": "REFERENCE",
    "class": {
      "type": "REFERENCE_DIMENSION",
      "name": "Time",
      "dimension": { "type": "DIMENSION", "dimensionType": "TIME" },
      "unit": {
        "type": "UNIT",
        "value": "HOURS",
        "dimension": { "type": "DIMENSION", "dimensionType": "TIME" }
      }
    }
  }
}
```
</details>

Converting the CSV to a structured object allows for consistency across parsing the columns, as the "Time [h]" column contains the unit within the header, whereas the following columns specify the unit in the second row (e.g. the "cal_ls_opt_do" column and "%").

<br/>
The second CSV column with the header of "cal_ls_opt_do" is converted to an object with an index of 1 (column 1). The description key allows for a more human-readable explanation of the column as **Dissolved Oxygen**, compared to the machine generated name of "cal_ls_opt_do" used as the column header. The valueType object has a type of [Numeric](/model/manifest/supplemental-sections/data/data-types/values#numeric), as the dissolved oxygen measurements are numbers. Because dissolved oxygen is measured as a percentage, a range of '[0, 100]' can be specified.

The [Column Kind](/model/manifest/supplemental-sections/data/data-types/columns#kind) object for the "cal_ls_opt_do" column has a type of **FACTOR**, as dissolved oxygen is a controlled input variable used to trigger responses to be analyzed in the experiment. Similarly, the [Column Class](/model/manifest/supplemental-sections/data/data-types/columns#class) object has a type of **Descriptor**, as dissolved oxygen is an independent variable in the experiment. The dimension object has a dimension type of [CONCENTRATION](/model/manifest/supplemental-sections/data/data-types/dimensions/), corresponding to concentration of oxygen, and the unit object has a value of **Percent** (%).

Finally, the primary schema for the FSML Column object for the second columns ends up as:

<details>
<summary>Dissolved Oxygen column definition</summary>

```json
{
  "name": "cal_ls_opt_do",
  "description": "Dissolved Oxygen",
  "valueType": { "type": "NUMERIC", "range": [0, 100] },
  "kind": {
    "type": "FACTOR",
    "class": {
      "type": "DESCRIPTOR",
      "name": "Dissolved Oxygen",
      "dimension": { "type": "DIMENSION", "dimensionType": "CONCENTRATION" },
      "unit": {
        "type": "UNIT",
        "value": "PERCENT",
        "dimension": { "type": "DIMENSION", "dimensionType": "CONCENTRATION" }
      }
    }
  }
}
```
</details>

<br/>
Subsequent columns indicating other parameters of the experimental design are similarly converted to the structured FSML data schema format.
<br/><br/>

<details>
<summary>Other column definitions</summary>

```json
[
  {
    "name": "m_ph",
    "description": "pH",
    "valueType": { "type": "NUMERIC", "range": [0, 14] },
    "kind": {
      "type": "FACTOR",
      "class": {
        "type": "DESCRIPTOR",
        "name": "pH",
        "dimension": { "type": "DIMENSION", "dimensionType": "CONCENTRATION" }
      }
    }
  },
  {
    "name": "m_stirrer",
    "description": "Stirring Speed",
    "valueType": { "type": "NUMERIC" },
    "kind": {
      "type": "FACTOR",
      "class": {
        "type": "DESCRIPTOR",
        "name": "Stirring Speed",
        "dimension": { "type": "DIMENSION", "dimensionType": "SPEED" },
        "unit": {
          "type": "UNIT",
          "value": "RPM",
          "dimension": { "type": "DIMENSION", "dimensionType": "SPEED" }
        }
      }
    }
  },
  {
    "name": "dm_spump1",
    "description": "Volume",
    "valueType": { "type": "NUMERIC" },
    "kind": {
      "type": "FACTOR",
      "class": {
        "type": "DESCRIPTOR",
        "name": "Volume",
        "dimension": { "type": "DIMENSION", "dimensionType": "VOLUME" },
        "unit": {
          "type": "UNIT",
          "value": "MILLILITER",
          "dimension": { "type": "DIMENSION", "dimensionType": "VOLUME" }
        }
      }
    }
  }
]
```

</details>


### Main Implementation

Implementation of a parser will only need to be done once before the plugin can be regularly used to parse files.

Following the FSML [Parser Plugin Template](/software/plugins/parser/#template), we'll describe how the main **run** function. Note that the parsing logic in this implementation is scoped for a CSV file, other than CSV file types may require different implementations. There are many popular npm packages out there commonly used for parsing different file types, such as .xlsx, .yaml, .json, etc.

#### CSV Parsing

The first step in the implementation is converting the CSV data into a javascript object (JSON) in order to handle it properly within the program. A popular npm csv parser is [papaparse](https://www.papaparse.com/). It is conveniently easy to use and a short snippet of it is shown here (complete implementation is found in the [**phycusExample.zip**](/))


<details>
<summary>CSV Snippet</summary>

```javascript
import * as fs from 'fs';
import papaparse from 'papaparse';

// Main function of the FSML Parser Pplugin.
const run: (file) => {

    // Reads the file in case its a filepath and converts the buffer stream into a string
    // which papaparse accepts as input to return the CSV data as a JSON array.
    let buffer = file;
    if (typeof file === 'string') {
      buffer = fs.readFileSync(file);
    }
    const dataString = buffer.toString('utf-8');
    // the 'data' object will contain the array of rows in the CSV file.
    const { data } = papaparse.parse(dataString);
}
```

</details>


#### FSML Schema Objects
The second thing implemented in the parser, is that it leverages the FSML SDK utils package to generate the empty FSML Manifest schema objects to be then filled with the data. These utility functions eases the developer's experience by auto-generating the manifest objects instead of doing it manually.


Here, we generate the [TabularData](http://localhost:4444/model/manifest/supplemental-sections/data/tabular-data/) schema object, which it's type is exported by the FSML standard package.

<details>
<summary>Schema Objects</summary>

```javascript
import fsml_standard from "fsml-standard"
import fsml_utils from "fsml-utils"
import lodash from "lodash"

// Imports the JSON of column definitions
import columnDefinitions from './columnDefinitions.json';

// Main function of the FSML Parser Plugin.
const run: (file) => {

    // The 'createTemplateForType' utility function generates an empty template object for the provided FSML standard types.
    const TabularData = fsml_utils.createTemplateForType(fsml_standard.TabularData);

    /**
     * The generated 'TabularData' object should look something like
     *
     * {
     *   "type": "TABULAR",
     *   "index": 0,
     *   "name": "",
     *   "rows": [],
     *   "columns": {},
     *   "fileReference": { "type": "FILE", "index": 0, "reference": "" }
     * }
     */

    // Then we can stitch everything together by first adding the column definitions
    // to the 'column' property of the 'TabularData'.
    lodash.set(TabularData, 'column', columnDefinitions);
}
```

</details>

Finally, all that is left to do is to populate the **rows** property of the **TabularData** object with the CSV data and return our FSML Manifest.

<details>
<summary>Populate Data</summary>

```javascript
import * as fs from 'fs';
import papaparse from 'papaparse';

// Main function of the FSML Parser Pplugin.
const run: (file) => {

    /**
     * Recall the 'data' object we holding our data came:
     * const { data } = papaparse.parse(dataString);
     *
     * And that the 'TabularData' came from:
     * const TabularData = createTemplateForType(fsml_standard.TabularData);
     * */

    // Simply loops through the data array and populate the rows.
    data.forEach((dataRow, rowIndex) => {
      const values = [];
      // loops through the CSV row to get each row's value.
      dataRow.forEach((value, columnIndex) => {
        values.push({
          index: columnIndex,
          value,
        });
      });
      // Generates the Row schema, to then populate it with the rowIndex and row values.
      const Row = createTemplateForType(fsml_standard.Row);
      set(Row, "index", rowIndex)
      set(Row, "values", values)
      // Pushes a new Row to the 'TabularData' object.
      TabularData.rows.push(Row);
    });

    // and return the FSML data schema
    return await Promise.resolve({ data: TabularData });
}
```
</details>

## Phycus FSML Manifest

The Phycus Applikon Plugin Parser is complete. Next, we can use the FSML CLI tool to install it and generate the FSML Manifest. To do install this Plugin we can either publish it to the npm registries and install it via its public https URL, or use a local version of it.
