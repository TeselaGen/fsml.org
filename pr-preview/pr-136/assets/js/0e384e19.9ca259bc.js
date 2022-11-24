"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[9671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1,slug:"/"},i="FSML",s={unversionedId:"intro",id:"intro",title:"FSML",description:"Welcome to the Fermentation Systems Modeling Language (FSML) community portal!",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/pr-preview/pr-136/",draft:!1,editUrl:"https://github.com/TeselaGen/fsml.org/tree/main/website/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Background",permalink:"/pr-preview/pr-136/background/"}},l={},c=[{value:"Introduction - the first fermentation",id:"introduction---the-first-fermentation",level:2},{value:"Challenges",id:"challenges",level:2},{value:"Scope",id:"scope",level:2},{value:"Learn more",id:"learn-more",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fsml"},"FSML"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Welcome to the Fermentation Systems Modeling Language (FSML) community portal!")),(0,o.kt)("p",null,"TeselaGen (",(0,o.kt)("a",{parentName:"p",href:"https://teselagen.com/"},"https://teselagen.com/"),") in collaboration with BioMADE (",(0,o.kt)("a",{parentName:"p",href:"https://www.biomade.org/"},"https://www.biomade.org/"),") has launched FSML.org (Fermentation Systems Modeling Language) to help further our ability to create the best fermentation processes through protocol modeling.    "),(0,o.kt)("p",null,'BioMADE, or more formally the Bioindustrial Manufacturing and Design Ecosystem, launched in 2021 as a Manufacturing Innovation Institute sponsored by the U.S. Department of Defense. BioMADE has grown to 100 plus members and its goal is to "enable domestic bioindustrial manufacturing at all scales, develop technologies to enhance U.S. bioindustrial competitiveness, de-risk investment in relevant infrastructure, and expand the biomanufacturing workforce to realize the economic promise of industrial biotechnology."'),(0,o.kt)("h2",{id:"introduction---the-first-fermentation"},"Introduction - the first fermentation"),(0,o.kt)("p",null,"History tells that fermentation was used to make beer in Godin Tepe and Mesopotamia as early as 10,000 BC and and we\u2019re still trying to brew the perfect batch today.  Yeast is the most important ingredient in beer, giving the popular beverage it\u2019s booziness and bubbles. It does this by fermenting sugar into alcohol and carbon dioxide, and by generating chemicals that create different flavors and colors."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/144330/190490192-ea442716-d775-4166-9069-b50e0c62489f.png",alt:"mesopotamia-768x543"}),".",(0,o.kt)("br",{parentName:"p"}),"\n","Map showing the extent of Mesopotamia, a historical region situated within the Tigris-Euphrates river system."),(0,o.kt)("h2",{id:"challenges"},"Challenges"),(0,o.kt)("p",null,"The bioindustrial manufacturing and design community is in great need of new standards for open data exchange of the fermentation process, and new technologies that make exchanging information easier. There is also a need of new tools that can encourage more collaboration across the industry."),(0,o.kt)("h2",{id:"scope"},"Scope"),(0,o.kt)("p",null,"Here we will be documenting the basis of the new FSML (Fermentation Systems Modeling Language) data exchange standard. In this site you can also learn more about the guiding principles of FSML and an overview of the key sections describing the core FSML schema. We are also open sourcing the development of the FSML standard together with some basic tools to process FSML files. You will be able to find the open repository at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TeselaGen/fsml.org/"},"https://github.com/TeselaGen/fsml.org/"),".    "),(0,o.kt)("p",null,'As BioMADE CEO Douglas Friedman, Ph.D says, "The bioindustrial manufacturing industry stands to benefit from this standardization and the shared tools to follow.\u201d    '),(0,o.kt)("p",null,"If your are interested in making any contributions of suggestions to FSML, please do!:",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TeselaGen/fsml.org/issues"},"https://github.com/TeselaGen/fsml.org/issues")),(0,o.kt)("h2",{id:"learn-more"},"Learn more"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/background"},"Background")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/model"},"The Model")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/examples/pdf-yaml-example"},"An Example"))))}p.isMDXComponent=!0}}]);