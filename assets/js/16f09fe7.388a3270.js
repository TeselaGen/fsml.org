"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[8822],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=s,h=c["".concat(l,".").concat(d)]||c[d]||u[d]||r;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2155:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(7462),s=(n(7294),n(3905));const r={title:"Parser Plugin",metaTitle:"FSML Manifest for Phycus",metaDescription:"Phycus Parser Example",sidebar_position:2},o="Phycus: FSML Parser Plugin",i={unversionedId:"examples/plugin-phycus",id:"examples/plugin-phycus",title:"Parser Plugin",description:"This is a real-world example from FSML partner Phycus.",source:"@site/docs/examples/plugin-phycus.md",sourceDirName:"examples",slug:"/examples/plugin-phycus",permalink:"/examples/plugin-phycus",draft:!1,editUrl:"https://github.com/TeselaGen/fsml.org/tree/main/website/docs/examples/plugin-phycus.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Parser Plugin",metaTitle:"FSML Manifest for Phycus",metaDescription:"Phycus Parser Example",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"FSML CLI",permalink:"/examples/cli-microbyre"},next:{title:"Node-RED",permalink:"/examples/node-red-phycus"}},l={},p=[{value:"Installing the FSML CLI Tool",id:"installing-the-fsml-cli-tool",level:2},{value:"Phycus Applikon Bioreactor Data",id:"phycus-applikon-bioreactor-data",level:2},{value:"Phycus Plugin Parser",id:"phycus-plugin-parser",level:2},{value:"Column Definitions",id:"column-definitions",level:3},{value:"Main Implementation",id:"main-implementation",level:3},{value:"CSV Parsing",id:"csv-parsing",level:4},{value:"FSML Schema Objects",id:"fsml-schema-objects",level:4},{value:"Phycus FSML Manifest",id:"phycus-fsml-manifest",level:2}],m={toc:p};function u(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"phycus-fsml-parser-plugin"},"Phycus: FSML Parser Plugin"),(0,s.kt)("p",null,"This is a real-world example from FSML partner ",(0,s.kt)("strong",{parentName:"p"},"Phycus"),"."),(0,s.kt)("p",null,"This example showcases how to build an FSML Parser Plugin to parse experimental data into an FSML Manifest. The Plugin will then be installed\nwith the FSML CLI tool and used to take in the experimental data file and convert that into an FSML Manifest."),(0,s.kt)("p",null,"This .zip file is necessary to carry on with this example and those are available in the following link:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/TeselaGen/fsml.org/main/website/static/phycus-parser-example-01.zip"},(0,s.kt)("strong",{parentName:"a"},"phycusExample.zip")))),(0,s.kt)("h2",{id:"installing-the-fsml-cli-tool"},"Installing the FSML CLI Tool"),(0,s.kt)("p",null,"Follow the steps in ",(0,s.kt)("a",{parentName:"p",href:"/software/tools/cli#installing-cli-tool"},"Installing CLI Tool"),". Get familiarized with the CLI Tool commands in ",(0,s.kt)("a",{parentName:"p",href:"/software/tools/cli"},"CLI Tool"),"."),(0,s.kt)("h2",{id:"phycus-applikon-bioreactor-data"},"Phycus Applikon Bioreactor Data"),(0,s.kt)("p",null,"Bioreactors provide a controlled environment for experiments involving growth or biological reactions under specific conditions. For example, the Applikon bioreactor allows a user to set and measure parameters such as temperature, dissolved oxygen, pH, and stirring speed. After a run, the bioreactor exports a CSV describing the experimental design. An example of such CSV is included in the ",(0,s.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/TeselaGen/fsml.org/main/website/static/phycus-parser-example-01.zip"},(0,s.kt)("strong",{parentName:"a"},"phycusExample.zip"))," file."),(0,s.kt)("p",null,"The columns of the Applikon Bioreactor\u2019s output file denote the independent variables of time, dissolved oxygen, pH, stirring speed, and volume."),(0,s.kt)("h2",{id:"phycus-plugin-parser"},"Phycus Plugin Parser"),(0,s.kt)("p",null,"Leverage the FSML ",(0,s.kt)("a",{parentName:"p",href:"/software/plugins/parser/#template"},"Parser Plugin Template")," as the starting point for implementing the Phycus Plugin Parser for Applikon Bioreactor data."),(0,s.kt)("p",null,"This template generates a very generic FSML manifest file, so to convert an equipment-specific exported file to a more well-defined and descriptive FSML data schema, in this case a CSV exported from the Applikon Bioreactor, we'll need to describe the CSV columns by filling out the FSML ",(0,s.kt)("a",{parentName:"p",href:"/model/manifest/supplemental-sections/data/tabular-data#columns"},"Columns")," type object."),(0,s.kt)("h3",{id:"column-definitions"},"Column Definitions"),(0,s.kt)("p",null,'The first CSV column with the header of "Time ',"[h]",'" is converted to an object with an index of 0 (column 0). The valueType object has a type of ',(0,s.kt)("a",{parentName:"p",href:"/model/manifest/supplemental-sections/data/data-types/values#numeric"},"Numeric"),", as the timepoints are displayed as numbers. The ",(0,s.kt)("a",{parentName:"p",href:"/model/manifest/supplemental-sections/data/data-types/columns#kind"},"Column Kind"),' object for the "Time ',"[h]",'" column has a type of ',(0,s.kt)("strong",{parentName:"p"},"Reference"),", and the ",(0,s.kt)("a",{parentName:"p",href:"/model/manifest/supplemental-sections/data/data-types/columns#class"},"Column Class")," object has a type of ",(0,s.kt)("strong",{parentName:"p"},"Reference_Dimension"),", as the timepoints correspond to a series of observations. The dimension object has a dimension type of ",(0,s.kt)("a",{parentName:"p",href:"/model/manifest/supplemental-sections/data/data-types/dimensions/"},"TIME"),", and the unit object has a value of ",(0,s.kt)("strong",{parentName:"p"},"Hours"),"."),(0,s.kt)("p",null,"Finally, the primary schema for the FSML Column object for the first columns ends up as:"),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Time column definition"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Time [h]",\n  "description": "Time",\n  "valueType": { "type": "NUMERIC" },\n  "kind": {\n    "type": "REFERENCE",\n    "class": {\n      "type": "REFERENCE_DIMENSION",\n      "name": "Time",\n      "dimension": { "type": "DIMENSION", "dimensionType": "TIME" },\n      "unit": {\n        "type": "UNIT",\n        "value": "HOURS",\n        "dimension": { "type": "DIMENSION", "dimensionType": "TIME" }\n      }\n    }\n  }\n}\n'))),(0,s.kt)("p",null,'Converting the CSV to a structured object allows for consistency across parsing the columns, as the "Time ',"[h]",'" column contains the unit within the header, whereas the following columns specify the unit in the second row (e.g. the "cal_ls_opt_do" column and "%").'),(0,s.kt)("br",null),'The second CSV column with the header of "cal_ls_opt_do" is converted to an object with an index of 1 (column 1). The description key allows for a more human-readable explanation of the column as **Dissolved Oxygen**, compared to the machine generated name of "cal_ls_opt_do" used as the column header. The valueType object has a type of [Numeric](/model/manifest/supplemental-sections/data/data-types/values#numeric), as the dissolved oxygen measurements are numbers. Because dissolved oxygen is measured as a percentage, a range of \'[0, 100]\' can be specified.',(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"/model/manifest/supplemental-sections/data/data-types/columns#kind"},"Column Kind"),' object for the "cal_ls_opt_do" column has a type of ',(0,s.kt)("strong",{parentName:"p"},"FACTOR"),", as dissolved oxygen is a controlled input variable used to trigger responses to be analyzed in the experiment. Similarly, the ",(0,s.kt)("a",{parentName:"p",href:"/model/manifest/supplemental-sections/data/data-types/columns#class"},"Column Class")," object has a type of ",(0,s.kt)("strong",{parentName:"p"},"Descriptor"),", as dissolved oxygen is an independent variable in the experiment. The dimension object has a dimension type of ",(0,s.kt)("a",{parentName:"p",href:"/model/manifest/supplemental-sections/data/data-types/dimensions/"},"CONCENTRATION"),", corresponding to concentration of oxygen, and the unit object has a value of ",(0,s.kt)("strong",{parentName:"p"},"Percent")," (%)."),(0,s.kt)("p",null,"Finally, the primary schema for the FSML Column object for the second columns ends up as:"),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Dissolved Oxygen column definition"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "cal_ls_opt_do",\n  "description": "Dissolved Oxygen",\n  "valueType": { "type": "NUMERIC", "range": [0, 100] },\n  "kind": {\n    "type": "FACTOR",\n    "class": {\n      "type": "DESCRIPTOR",\n      "name": "Dissolved Oxygen",\n      "dimension": { "type": "DIMENSION", "dimensionType": "CONCENTRATION" },\n      "unit": {\n        "type": "UNIT",\n        "value": "PERCENT",\n        "dimension": { "type": "DIMENSION", "dimensionType": "CONCENTRATION" }\n      }\n    }\n  }\n}\n'))),(0,s.kt)("br",null),"Subsequent columns indicating other parameters of the experimental design are similarly converted to the structured FSML data schema format.",(0,s.kt)("br",null),(0,s.kt)("br",null),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Other column definitions"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "name": "m_ph",\n    "description": "pH",\n    "valueType": { "type": "NUMERIC", "range": [0, 14] },\n    "kind": {\n      "type": "FACTOR",\n      "class": {\n        "type": "DESCRIPTOR",\n        "name": "pH",\n        "dimension": { "type": "DIMENSION", "dimensionType": "CONCENTRATION" }\n      }\n    }\n  },\n  {\n    "name": "m_stirrer",\n    "description": "Stirring Speed",\n    "valueType": { "type": "NUMERIC" },\n    "kind": {\n      "type": "FACTOR",\n      "class": {\n        "type": "DESCRIPTOR",\n        "name": "Stirring Speed",\n        "dimension": { "type": "DIMENSION", "dimensionType": "SPEED" },\n        "unit": {\n          "type": "UNIT",\n          "value": "RPM",\n          "dimension": { "type": "DIMENSION", "dimensionType": "SPEED" }\n        }\n      }\n    }\n  },\n  {\n    "name": "dm_spump1",\n    "description": "Volume",\n    "valueType": { "type": "NUMERIC" },\n    "kind": {\n      "type": "FACTOR",\n      "class": {\n        "type": "DESCRIPTOR",\n        "name": "Volume",\n        "dimension": { "type": "DIMENSION", "dimensionType": "VOLUME" },\n        "unit": {\n          "type": "UNIT",\n          "value": "MILLILITER",\n          "dimension": { "type": "DIMENSION", "dimensionType": "VOLUME" }\n        }\n      }\n    }\n  }\n]\n'))),(0,s.kt)("h3",{id:"main-implementation"},"Main Implementation"),(0,s.kt)("p",null,"Implementation of a parser will only need to be done once before the plugin can be regularly used to parse files."),(0,s.kt)("p",null,"Following the FSML ",(0,s.kt)("a",{parentName:"p",href:"/software/plugins/parser/#template"},"Parser Plugin Template"),", we'll describe how the main ",(0,s.kt)("strong",{parentName:"p"},"run")," function. Note that the parsing logic in this implementation is scoped for a CSV file, other than CSV file types may require different implementations. There are many popular npm packages out there commonly used for parsing different file types, such as .xlsx, .yaml, .json, etc."),(0,s.kt)("h4",{id:"csv-parsing"},"CSV Parsing"),(0,s.kt)("p",null,"The first step in the implementation is converting the CSV data into a javascript object (JSON) in order to handle it properly within the program. A popular npm csv parser is ",(0,s.kt)("a",{parentName:"p",href:"https://www.papaparse.com/"},"papaparse"),". It is conveniently easy to use and a short snippet of it is shown here (complete implementation is found in the ",(0,s.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/TeselaGen/fsml.org/main/website/static/phycus-parser-example-01.zip"},(0,s.kt)("strong",{parentName:"a"},"phycusExample.zip")),")"),(0,s.kt)("details",null,(0,s.kt)("summary",null,"CSV Snippet"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import * as fs from 'fs';\nimport papaparse from 'papaparse';\n\n// Main function of the FSML Parser Plugin.\nconst run: (file) => {\n\n    // Reads the file in case its a filepath and converts the buffer stream into a string\n    // which papaparse accepts as input to return the CSV data as a JSON array.\n    let buffer = file;\n    if (typeof file === 'string') {\n      buffer = fs.readFileSync(file);\n    }\n    const dataString = buffer.toString('utf-8');\n    // the 'data' object will contain the array of rows in the CSV file.\n    const { data } = papaparse.parse(dataString);\n}\n"))),(0,s.kt)("h4",{id:"fsml-schema-objects"},"FSML Schema Objects"),(0,s.kt)("p",null,"The second thing implemented in the parser, is that it leverages the FSML SDK utils package to generate the empty FSML Manifest schema objects to be then filled with the data. These utility functions eases the developer's experience by auto-generating the manifest objects instead of doing it manually."),(0,s.kt)("p",null,"Here, we generate the ",(0,s.kt)("a",{parentName:"p",href:"http://localhost:4444/model/manifest/supplemental-sections/data/tabular-data/"},"TabularData")," schema object, which it's type is exported by the FSML standard package."),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Schema Objects"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'import fsml_standard from "fsml-standard"\nimport fsml_utils from "fsml-utils"\nimport lodash from "lodash"\n\n// Imports the JSON of column definitions\nimport columnDefinitions from \'./columnDefinitions.json\';\n\n// Main function of the FSML Parser Plugin.\nconst run: (file) => {\n\n    // The \'createTemplateForType\' utility function generates an empty template object for the provided FSML standard types.\n    const TabularData = fsml_utils.createTemplateForType(fsml_standard.TabularData);\n\n    /**\n     * The generated \'TabularData\' object should look something like\n     *\n     * {\n     *   "type": "TABULAR",\n     *   "index": 0,\n     *   "name": "",\n     *   "rows": [],\n     *   "columns": {},\n     *   "fileReference": { "type": "FILE", "index": 0, "reference": "" }\n     * }\n     */\n\n    // Then we can stitch everything together by first adding the column definitions\n    // to the \'column\' property of the \'TabularData\'.\n    lodash.set(TabularData, \'column\', columnDefinitions);\n}\n'))),(0,s.kt)("p",null,"Finally, all that is left to do is to populate the ",(0,s.kt)("strong",{parentName:"p"},"rows")," property of the ",(0,s.kt)("strong",{parentName:"p"},"TabularData")," object with the CSV data and return our FSML Manifest."),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Populate Data"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import * as fs from 'fs';\nimport papaparse from 'papaparse';\n\n// Main function of the FSML Parser Plugin.\nconst run: (file) => {\n\n    /**\n     * Recall the 'data' object we holding our data came:\n     * const { data } = papaparse.parse(dataString);\n     *\n     * And that the 'TabularData' came from:\n     * const TabularData = createTemplateForType(fsml_standard.TabularData);\n     * */\n\n    // Simply loops through the data array and populate the rows.\n    data.forEach((dataRow, rowIndex) => {\n      const values = [];\n      // loops through the CSV row to get each row's value.\n      dataRow.forEach((value, columnIndex) => {\n        values.push({\n          index: columnIndex,\n          value,\n        });\n      });\n      // Generates the Row schema, to then populate it with the rowIndex and row values.\n      const Row = createTemplateForType(fsml_standard.Row);\n      set(Row, \"index\", rowIndex)\n      set(Row, \"values\", values)\n      // Pushes a new Row to the 'TabularData' object.\n      TabularData.rows.push(Row);\n    });\n\n    // and return the FSML data schema\n    return await Promise.resolve({ data: TabularData });\n}\n"))),(0,s.kt)("h2",{id:"phycus-fsml-manifest"},"Phycus FSML Manifest"),(0,s.kt)("p",null,"The Phycus Applikon Plugin Parser is complete. Next, we can use the FSML CLI tool to install it and generate the FSML Manifest. To install this Plugin we can either publish it to the npm registries and install it via its public https URL, or use a local version of it. Here, we'll use a published version of the npm package: ",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/phycus-parser"},"phycus-parser@1.2.0"),"."),(0,s.kt)("p",null,"To install the Phycus Parser Plugin run the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"      $> fsml plugin install phycus-parser@1.2.0\n")),(0,s.kt)("p",null,"Then, you can double-check that the plugin is installed with:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"      $> fsml plugin list\n")),(0,s.kt)("p",null,"That should output the metadata of the phycus-parser, such as its remote url import."),(0,s.kt)("p",null,"Finally, run the following command to generate the FSML Manifest."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# NOTE: this assumes that the 'applikonBioreactor.csv' data file is located in the current directory\n      $> fsml manifest create $(pwd)/data.csv --parser phycus-parser --type data --author YOUR_NAME --format json --write phycusManifest --pack tar\n")),(0,s.kt)("p",null,"Note all the flags passed to the command? Well, we can set some of them as defaults so we don\u2019t have to pass them in every time."),(0,s.kt)("p",null,"To do so we can use the \u201cdefaults\u201d commands:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"    $> fsml defaults set manifest.type data\n    $> fsml defaults set manifest.author YOUR_NAME\n    $> fsml defaults set manifest.format json\n    $> fsml defaults set manifest.write phycusManifest\n    $> fsml defaults set manifest.pack tar\n")),(0,s.kt)("p",null,"Now you can try the previous command with fewer flags."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"    $> fsml manifest create $(pwd)/data.csv --parser phycus-parser\n")),(0,s.kt)("p",null,"That\u2019s it, you should have generated a .tar file. You can untar it and you shall see the fsml.json manifest file."),(0,s.kt)("p",null,"Feel free to continue exploring the different commands at ",(0,s.kt)("a",{parentName:"p",href:"/software/tools/cli"},"Software > Tools > CLI")," and implementing your own plugin parsers following the ",(0,s.kt)("a",{parentName:"p",href:"/software/plugins/"},"Plugin Framework"),"."))}u.isMDXComponent=!0}}]);