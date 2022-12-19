"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[2635],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=i,h=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(h,a(a({ref:t},p),{},{components:r})):n.createElement(h,a({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},284:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const o={title:"Design Principles"},a="Overview",s={unversionedId:"background/design-principles",id:"background/design-principles",title:"Design Principles",description:"Establishing design principles can help govern the development process and to ensure it produces a cohesive solution. After surveying the various existing protocol formats and use cases we\u2019ve developed the following principles that we think will be useful.",source:"@site/docs/background/design-principles.md",sourceDirName:"background",slug:"/background/design-principles",permalink:"/pr-preview/pr-97/background/design-principles",draft:!1,editUrl:"https://github.com/TeselaGen/fsml.org/tree/main/website/docs/background/design-principles.md",tags:[],version:"current",frontMatter:{title:"Design Principles"},sidebar:"tutorialSidebar",previous:{title:"Background",permalink:"/pr-preview/pr-97/background/"},next:{title:"Inspiration",permalink:"/pr-preview/pr-97/background/inspiration"}},l={},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Establishing design principles can help govern the development process and to ensure it produces a cohesive solution. After surveying the various existing protocol formats and use cases we\u2019ve developed the following principles that we think will be useful."),(0,i.kt)("h1",{id:"--file-first"},"- File First"),(0,i.kt)("p",null,"The majority of protocols start their life as a flat file. We want to make sure the tools and specifications are first and foremost flat file friendly."),(0,i.kt)("h1",{id:"--automated-generation"},"- Automated Generation"),(0,i.kt)("p",null,"Whenever possible we should design things in a way that a program can automatically infer and generate information with little to no input from the user."),(0,i.kt)("h1",{id:"--reference-toprotocols"},"- Reference toProtocols"),(0,i.kt)("p",null,"We want to make sure that we can effectively reference other existing protocols without having to modify the original source content."),(0,i.kt)("h1",{id:"--web-focused"},"- Web Focused"),(0,i.kt)("p",null,"The web has become the most common way to share information and what tools or specifications are developed need to be highly compatible with existing web protocols and frameworks."),(0,i.kt)("h1",{id:"--portability"},"- Portability"),(0,i.kt)("p",null,"In order to attain a high adoption rate we need to ensure any tools are supported across multiple platforms."),(0,i.kt)("h1",{id:"--non-binary-adoption"},"- Non Binary Adoption"),(0,i.kt)("p",null,"We want to avoid an \u201call or nothing\u201d approach. Instead we want users to be able to start using what they can right away and add in the remainder as time and priorities allow."),(0,i.kt)("h1",{id:"--extensibility"},"- Extensibility"),(0,i.kt)("p",null,"We can not predict the future and therefore must provide specific places where people can extend the model to meet their needs."),(0,i.kt)("h1",{id:"--pragmatic-ubiquity"},"- Pragmatic Ubiquity"),(0,i.kt)("p",null,"Abstract modeling and theories can be very powerful when conceptualizing solutions however we want to make sure what we implement is likely to be widely used on a daily basis."))}u.isMDXComponent=!0}}]);