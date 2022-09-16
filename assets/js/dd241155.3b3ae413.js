"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[5334],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(o),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return o?n.createElement(m,r(r({ref:t},p),{},{components:o})):n.createElement(m,r({ref:t},p))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=o[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},3419:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=o(7462),a=(o(7294),o(3905));const i={title:"Supplemental Sections"},r="Supplemental Sections",s={unversionedId:"model/manifest/supplemental-sections/index",id:"model/manifest/supplemental-sections/index",title:"Supplemental Sections",description:"Supplemental sections may or may not be able to be generated in an automated fashion. However the format of the sections will be standardized in a manner that can be machine readable because the presence and completeness of a supplemental section will be used in the calculation of the Utility Score.",source:"@site/docs/model/manifest/supplemental-sections/index.md",sourceDirName:"model/manifest/supplemental-sections",slug:"/model/manifest/supplemental-sections/",permalink:"/model/manifest/supplemental-sections/",draft:!1,editUrl:"https://github.com/TeselaGen/fsml.org/tree/main/website/docs/model/manifest/supplemental-sections/index.md",tags:[],version:"current",frontMatter:{title:"Supplemental Sections"},sidebar:"tutorialSidebar",previous:{title:"Core Sections",permalink:"/model/manifest/core-sections"},next:{title:"Data schema",permalink:"/model/manifest/supplemental-sections/data/"}},l={},c=[],p={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"supplemental-sections"},"Supplemental Sections"),(0,a.kt)("p",null,"Supplemental sections may or may not be able to be generated in an automated fashion. However the format of the sections will be standardized in a manner that can be machine readable because the presence and completeness of a supplemental section will be used in the calculation of the Utility Score."),(0,a.kt)("h1",{id:"bill-of-materials"},"Bill of Materials"),(0,a.kt)("p",null,"This is a list of materials required for the protocol. The equivalent to an ingredient list."),(0,a.kt)("h1",{id:"expected-results"},"Expected Results"),(0,a.kt)("p",null,"This is a description of the expected result of protocol. Usually this will describe the yield of a particular fermentation."),(0,a.kt)("h1",{id:"provenance"},"Provenance"),(0,a.kt)("p",null,"Provenance will be broken down into multiple subsections all of which help describe how this protocol came into existence. Currently proposed subsections are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Author - who authored the protocol"),(0,a.kt)("li",{parentName:"ul"},"Abstract - usually a link to a paper that describes the development of the protocol"),(0,a.kt)("li",{parentName:"ul"},"Parent Protocol - was this derived from another protocol"),(0,a.kt)("li",{parentName:"ul"},"Version Information - is this a newer version of an existing protocol"),(0,a.kt)("li",{parentName:"ul"},"Changelog - revision history of protocol"),(0,a.kt)("li",{parentName:"ul"},"Organization - was this protocol developed by a specific organization")),(0,a.kt)("h1",{id:"classification"},"Classification"),(0,a.kt)("p",null,"Classification is another section that will be broken down into subsections and will also provide the ability for users to extend this section. This section should describe restrictions on how the protocol can be shared as well as communicate the current development status of the protocol. Classification also will provide an area for specific search terms and keywords to allow other users to find protocols."),(0,a.kt)("p",null,"(the subsections are still under development)"),(0,a.kt)("h1",{id:"target-use-cases"},"Target Use Cases"),(0,a.kt)("p",null,"This is a section where users can specify information about how and when this protocol should be used. It allows a user to tune the Utility Score."),(0,a.kt)("h1",{id:"associated-executions"},"Associated Executions"),(0,a.kt)("p",null,"This is a section which can reference execution logs or traces that describes executions of this protocol and their results."),(0,a.kt)("h1",{id:"relevant-references"},"Relevant References"),(0,a.kt)("p",null,"This section list references such as literature references that pertain to this protocol"),(0,a.kt)("h1",{id:"user-defined-metadata"},"User Defined Metadata"),(0,a.kt)("p",null,"This is a free form section that allows users to storage metadata which doesn\u2019t fit in any other section but is useful for this particular protocol"),(0,a.kt)("h1",{id:"execution-context"},"Execution Context"),(0,a.kt)("p",null,"This section is broken into multiple subsections that describe the \u201cenvironment\u201d needed to execute the protocol."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Expertise - what level of expertise or different types of expertise are needed to execute this protocol"),(0,a.kt)("li",{parentName:"ul"},"Space - what type of lab space(s) are needed to execute this protocol"),(0,a.kt)("li",{parentName:"ul"},"Equipment - what types of equipment are needed to execute this protocol"),(0,a.kt)("li",{parentName:"ul"},"Capabilities - what capabilities are needed to execute this type of protocol such as sequencing or HPLC analysis. Oftentimes these capabilities may be provided by external vendors.")),(0,a.kt)("h1",{id:"protocol-content-blocks"},"Protocol Content Blocks"),(0,a.kt)("p",null,"When surveying the current formats for protocols there were quite a few differences. If one of the end goals is to enable better sharing of protocols we have to find common ground. One of the few commonalities found was that all protocol formats seem to organize content into \u201cblocks\u201d. This is an abstraction over things like paragraphs, hashmap keys, list entries, etc. However it appears possible to be able to take an existing protocol and subdivide the content into blocks of content."),(0,a.kt)("p",null,"Depending on the source of the content the blocks will have different types. Additionally we plan to support the following block behaviors:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Blocks can be reusable - especially useful for repetitive tasks"),(0,a.kt)("li",{parentName:"ul"},"Blocks can be nested - many protocols have an outline style format and machine readable formats are often nested"),(0,a.kt)("li",{parentName:"ul"},"Blocks can be parameterized - a block may accept parameters which will adjust the block content"),(0,a.kt)("li",{parentName:"ul"},"Blocks can be conditional - depending on the situation a block may be optional"),(0,a.kt)("li",{parentName:"ul"},"Blocks should have metadata attributes - one of the remaining items is to determine what attributes should be standard when describing blocks")),(0,a.kt)("h1",{id:"operations"},"Operations"),(0,a.kt)("p",null,"The operations section is a list of operations or tasks that need to be periodically performed during specific time points in a workflow. The operations are reusable and will be referenced by the workflow section it applies to."),(0,a.kt)("h1",{id:"workflow"},"Workflow"),(0,a.kt)("p",null,"Every protocol has a specific order of operations or list instructions that need to be performed in a specific sequence. The workflow section arranges the protocol blocks in the order in which they need to be executed. Initially we plan to support either a list based ordering and a directed acyclic graph based ordering."),(0,a.kt)("p",null,"Additionally workflows may be subdivided into workflow sections. These sections are reusable in the top level workflow. Sections may also reference operations that should take place in the background while this section of the workflow is being executed. Workflow sections can also be conditional."),(0,a.kt)("p",null,"Workflows and workflow sections can be both parameterized."),(0,a.kt)("p",null,"Individual steps in a workflow should reference a protocol content block and optional define parameters and any conditional arguments."),(0,a.kt)("p",null,"Expected execution time as well as Execution Context resources can either be specified at the workflow level, workflow section level, or at the individual step level."),(0,a.kt)("h1",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"For a protocol to be flexible across multiple situations it must be able to be configurable. This section describes the available parameters for the protocol. All parameters must have default values. Parameters should be categorized in the following subsections to help with Utility Score calculations."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Scalability Parameters - parameters to scale the protocol up or down"),(0,a.kt)("li",{parentName:"ul"},"Automation Parameters - parameters to adjust the protocol to use or not use lab automation equipment"),(0,a.kt)("li",{parentName:"ul"},"Contextual Parameters - all other parameters go here")),(0,a.kt)("h1",{id:"domain-dictionaries"},"Domain Dictionaries"),(0,a.kt)("p",null,"Protocols can oftentimes use domain specific lingo that may make it difficult for novices or people in other disciplines to understand. This section provides a place to either reference via URL or define inline domain specific terminology."),(0,a.kt)("h1",{id:"search-attributes"},"Search Attributes"),(0,a.kt)("p",null,"This section provides a place to define attributes used for querying or searching for this protocol."),(0,a.kt)("h1",{id:"experimental-data"},"Experimental Data"),(0,a.kt)("p",null,"FSML defines a ",(0,a.kt)("a",{parentName:"p",href:"./data"},"data schema")," for protocols experimentation data."))}u.isMDXComponent=!0}}]);