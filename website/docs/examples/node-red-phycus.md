---
title: "Node-RED"
metaTitle: "Node-RED Flow: Phycus --> TeselaGen"
sidebar_position: 4
---

# Phycus-TeselaGen Integration

This is a real-world Node-RED integration between from FSML partners **Phycus** and **TeselaGen**.

Here we show how to leverage the Node-RED technology to integrate the Applikon Bioreactor data from **Phycus** into **TeselaGen** TEST module.

This .zip file is necessary to carry on with this example and those are available in the following link:

<!-- Not sure how to reference the file in the static folder -->
- [**phycusTeselagenNodeRed.zip**](https://raw.githubusercontent.com/TeselaGen/fsml.org/main/website/static/phycus-tg-nodered-example-01.zip)


## Node-RED Server

In order to get started with using Node-RED flows you will need a Node-RED server running.

TeselaGen offers one such server at https://biomade.teselagen.com/node-red-editor to all Biomade members logged into TeselaGen.

_NOTE: If you are a Biomade member looking to get an account to the app feel free to contact the TeselaGen Team at fsml@teselagen.com._
## Node-RED Flow

Included in the [**phycusTeselagenNodeRed.zip**](https://raw.githubusercontent.com/TeselaGen/fsml.org/main/website/static/phycus-tg-nodered-example-01.zip) file you will find the Node-RED Flow JSON file called `phycus-teselagen-flow.json` that you can import into any Node-RED editor as new Node-Red flow. The flow should like the following screenshot:

![image](https://user-images.githubusercontent.com/11540280/208500500-dd94e3b9-861c-41be-b749-d49fbb3647b8.png)


As you can observe, the Flow is pretty simple with just a few functional nodes and I/O http ones.

The first function node (FSML --> TG) contains code that imports an npm package called [tgExporter](https://www.npmjs.com/package/tg-exporter) that exports an [FSML Plugin Exporter](/software/plugins/exporter). It takes in an FSML Manifest and returns a TeselaGen Data Grid _(a data grid in TeselaGen is a an object specific to TeselaGen used to represent data as data cells)_.

```javascript
/** FSML --> TG Node-Red Function Node. **/

// Imports the tgExporter public npm package which exports an FSML Plugin Exporter
const tgExporter = global.get("tgExporter")

const { manifest } = msg.payload

msg.payload = tgExporter.run(manifest)

return msg;
```

The second functional node called `Prepare Data grid Body` is just TeselaGen specific code to format the body request of a POST /data-grids endpoint to create a Data Grid in TeselaGen's TEST Module app.

## FSML TeselaGen Exporter Plugin

The first function node in the above flow, imports the `tgExporter` npm package. This publicly available and works by generating a TeselaGen Data Grid by parsing any FSML data manifest. The implementation of such Exporter can be seen below:

<details>
<summary>TeselaGen's FSML Plugin Exporter</summary>

```javascript

import * as fs from 'fs';
import lodash from 'lodash';
import * as fsml_utils from 'fsml-utils';
import * as fsml_standard from 'fsml-standard';
import papaparse from 'papaparse';

const { get, flatMap } = lodash;

const tgExporter = {
  name: 'tgExporter',
  type: 'exporter',
  run: (manifest) => {

    // Leverages the FSML SDK to validate the provided manifest object.
    const { isValid } = fsml_utils.validateType(
      fsml_standard.Manifest,
      manifest
    );
    if (!isValid) throw new Error('Invalid FSML manifest');
    const manifestRows = get(manifest, 'supplementalInfo.data[0].rows');

    const dataRows = manifestRows.map((row) =>
      row.values.map((rowValue) => rowValue.value)
    );

    const dataGridCells = flatMap(
      dataRows.map((dataRow, rowPosition) =>
        dataRow.map((cellValue, columnPosition) => ({
          rowPosition,
          columnPosition,
          value: cellValue,
        }))
      )
    );

    const dataGrid = {
      name: 'fsml-datagrid',
      dataCells: dataGridCells,
    };

    const csvData = papaparse.unparse(dataRows);

    const csvDataBuffer = Buffer.from(csvData, 'utf-8');

    return { data: dataGrid, file: csvDataBuffer };
  },
};

export default tgExporter;
```

</details>

The above implementation leverages the FSML SDK for validation and parsing of an FSML Manifest file. The SDK is distributed into the following publicly available npm packages:

- [fsml-standard](https://www.npmjs.com/package/fsml-standard)
    * Exports all the FSML manifest schemas to build different parts of the FSML manifest.
- [fsml-plugins](https://www.npmjs.com/package/fsml-plugins)
    * Exports some typing functions for easier implementation of different FSML Plugins, mostly beneficial for TypeScript developers.
- [fsml-utils](https://www.npmjs.com/package/fsml-utils)
    * Exports several utility function to work with FSML, such as the `validateType` and `createTemplateForType` functions


## Import FSML into TeselaGen

Now, we are going to trigger the above Node-RED flow to get the FSML Phycus manifest into a TeselaGen Data Grid. Since Node-RED flows are essentially HTTP endpoints, we can trigger them with any kind of tool that allows calling http requests. If you are a Biomade member you can leverage TeselaGen's Biomade app, if not you can hit the endpoint of any Node-RED server you might have access to.

The next steps of the example are for Biomade members only.

#### Log into the Teselaegn Biomade app

Head to https://biomade.teselagen.com and log in with your credentials _(if you are a Biomade member and don't own an account, contact fsml@teselagen.com to get one)_.

#### Import TeselaGen Integration file

After logging into the app, head to [Setting > Intergations](https://biomade.teselagen.com/test/client/settings/integrations-management), you shall see the Integrations Management Panel, where you can upload an existing Integration. Included in the [**phycusTeselagenNodeRed.zip**](https://raw.githubusercontent.com/TeselaGen/fsml.org/main/website/static/phycus-tg-nodered-example-01.zip) file you should find a JSON file called `phycus-teselagen-integration.json` that you can use to uploading in the `Upload Existing` button shown below.


![image](https://user-images.githubusercontent.com/11540280/208506273-4404bd53-5547-4d44-ae2a-49eb0019774c.png)

After so, and if you scroll down to the `API Integration` subsection you shall a see a new TeselaGen Integration called `fsml` as shown here.

![image](https://user-images.githubusercontent.com/11540280/208506733-ba409a13-f9a5-404a-b93f-51f8a2ca1860.png)


The TeselaGen app runs its own dedicated Node-RED Server, you can open its Node-RED editor and look at the Node-RED flow by clicking in the View in Node Red button shown above, which should take you the same Node-RED flow explained at the beginning.

#### Run TeselaGen Integration Flow

Now that your integration is created, you can run it by calling TeselaGen's Integrations API. Documentation on it can be found at [TeselaGen API Docs](https://biomade.teselagen.com/test/cli-api/docs/#/Integrations/NodeRedCallIntegration). Here you can understand how to construct the HTTP request.

Essentially you need to make a POST request like the following.

```
 POST https://biomade.teselagen.com//test/cli-api/integrations?name=fsml

 body:  {
  manifest: PASTE YOUR FSML MANIFEST JSON HERE.
 }
```

_NOTE: you will need your API token in order to get authorization to the TeselaGen API. To do so head to [Settings > API Password > Generate API OTP], this will generate a one-time-password token that together with your email you can authenticate to TeselaGen's API._


### FSML Manifest imported as a TeselaGen Data Grid

Finally, after calling the Node-RED flow you can see how the Applikon Bioreactor data is imported as a Data Grid in TeselaGen's TEST Module by heading to [TEST > Experimental Data > Data Grids](https://biomade.teselagen.com/test/client/data-grids), you can open the Data grid and shall see the actual data imported.

![image](https://user-images.githubusercontent.com/11540280/208513113-f3b7d72d-092e-47cc-9bb0-a3e30f05e2bc.png)

