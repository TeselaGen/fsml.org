"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[8843],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return a?r.createElement(f,l(l({ref:t},u),{},{components:a})):r.createElement(f,l({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},834:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={title:"Tabular"},l="Tabular Schema",s={unversionedId:"model/manifest/supplemental-sections/data/tabular-data",id:"model/manifest/supplemental-sections/data/tabular-data",title:"Tabular",description:"The tabular schema stores data as an array of rows referencing the source data file(s). Additionally,",source:"@site/docs/model/manifest/supplemental-sections/data/tabular-data.md",sourceDirName:"model/manifest/supplemental-sections/data",slug:"/model/manifest/supplemental-sections/data/tabular-data",permalink:"/model/manifest/supplemental-sections/data/tabular-data",draft:!1,editUrl:"https://github.com/TeselaGen/fsml.org/tree/main/website/docs/model/manifest/supplemental-sections/data/tabular-data.md",tags:[],version:"current",frontMatter:{title:"Tabular"},sidebar:"tutorialSidebar",previous:{title:"File",permalink:"/model/manifest/supplemental-sections/data/file-data"},next:{title:"Presentation",permalink:"/model/presentation/"}},i={},c=[],u={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tabular-schema"},"Tabular Schema"),(0,n.kt)("p",null,"The tabular schema stores data as an array of rows referencing the source data file(s). Additionally,\nthe schema provides a columns array where all the information expalining each column is stored. The Tabular schema\nis particularly useful for storing datasets such as fermentation experiments."),(0,n.kt)("h1",{id:"row"},"Row"),(0,n.kt)("p",null,"Rows represent a line of text extracted from a specific data file. For its lowest degree of completeness\neach row would simply correspond to the full unparsed text of a particular line in the data file. For highest completeness,\neach text line is converted into column values usually by splitting the row based on some column delimiter."),(0,n.kt)("h1",{id:"columns"},"Columns"),(0,n.kt)("p",null,"An array type property of the tabular schema which increases the degree of completeness and the overall Utility Score as it stores\ndetailed information on each of the tabular data columns."),(0,n.kt)("p",null,"This information explains in a well-defined set of properties the nature of each column, both human and machine\nreadable which makes it specifically useful for the automation of processes such a Statisticaly Analyses or Machine Learning modelling."),(0,n.kt)("p",null,"This well-defined properties as described as ",(0,n.kt)("a",{parentName:"p",href:"../data-types"},"Data Types"),"."),(0,n.kt)("h1",{id:"file-reference"},"File Reference"),(0,n.kt)("p",null,"A reference to the source file as ",(0,n.kt)("a",{parentName:"p",href:"/model/manifest/supplemental-sections/data/file-data"},"File Schema"),"."),(0,n.kt)("h1",{id:"metadata"},"Metadata"),(0,n.kt)("p",null,"Metadata is a flexible property in the schema to support storing anye extra information such a notes, a description or\neven the column delimiter used for parsing rows."))}p.isMDXComponent=!0}}]);