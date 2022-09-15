"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[8843],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?r.createElement(f,i(i({ref:t},p),{},{components:a})):r.createElement(f,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},834:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={title:"Tabular"},i="Tabular Schema",l={unversionedId:"model/manifest/supplemental-sections/data/tabular-data",id:"model/manifest/supplemental-sections/data/tabular-data",title:"Tabular",description:"The tabular schema stores data as an array of rows referencing the source data file(s). Additionally,",source:"@site/docs/model/manifest/supplemental-sections/data/tabular-data.md",sourceDirName:"model/manifest/supplemental-sections/data",slug:"/model/manifest/supplemental-sections/data/tabular-data",permalink:"/pr-preview/pr-105/model/manifest/supplemental-sections/data/tabular-data",draft:!1,editUrl:"https://github.com/TeselaGen/fsml.org/tree/main/website/docs/model/manifest/supplemental-sections/data/tabular-data.md",tags:[],version:"current",frontMatter:{title:"Tabular"},sidebar:"tutorialSidebar",previous:{title:"File",permalink:"/pr-preview/pr-105/model/manifest/supplemental-sections/data/file-data"},next:{title:"Presentation",permalink:"/pr-preview/pr-105/model/presentation/"}},s={},c=[],p={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tabular-schema"},"Tabular Schema"),(0,n.kt)("p",null,"The tabular schema stores data as an array of rows referencing the source data file(s). Additionally,\nthe schema provides a columns array where all the information expalining each column is stored. The Tabular schema\nis particularly useful for storing datasets such as fermentation experiments."),(0,n.kt)("h1",{id:"row"},"Row"),(0,n.kt)("p",null,"Rows represent a line of text extracted from a specific data file. For its lowest degree of completeness\neach row would simply correspond to the full unparsed text of a particular line in the data file. For highest completeness,\neach text line is converted into column values usually by splitting the row based on some column delimiter."),(0,n.kt)("h1",{id:"columns"},"Columns"),(0,n.kt)("p",null,"An array type property of the tabular schema which increases the degree of completeness and the overall Utility Score as it stores\ndetailed information on each of the tabular data columns."),(0,n.kt)("p",null,"This information explains in a well-defined set of properties the nature of each column, both human and machine\nreadable which makes it specifically useful for the automation of processes such a Statisticaly Analyses or Machine Learning modelling."),(0,n.kt)("p",null,"This well-defined properties as described as ",(0,n.kt)("a",{parentName:"p",href:"../data-types"},"Data Types"),"."),(0,n.kt)("h1",{id:"file-reference"},"File Reference"),(0,n.kt)("p",null,"A reference to the source file as ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-105/model/manifest/supplemental-sections/data/file-data"},"File Schema"),"."),(0,n.kt)("h1",{id:"metadata"},"Metadata"),(0,n.kt)("p",null,"Metadata is a flexible property in the schema to support storing anye extra information such a notes, a description or\neven the column delimiter used for parsing rows."))}u.isMDXComponent=!0}}]);