"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[3327],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,d=u["".concat(s,".").concat(f)]||u[f]||c[f]||l;return r?n.createElement(d,o(o({ref:t},m),{},{components:r})):n.createElement(d,o({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6261:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const l={title:"MicroByre Manifest",metaTitle:"FSML Manifest for MicroByre",metaDescription:"FSML PDF Protocol with a YAML generated manifest"},o="MicroByre: FSML Manifest Generation",i={unversionedId:"examples/microbyre-example",id:"examples/microbyre-example",title:"MicroByre Manifest",description:"This is a real-world example from FSML partner MicroByre.",source:"@site/docs/examples/microbyre-example.md",sourceDirName:"examples",slug:"/examples/microbyre-example",permalink:"/pr-preview/pr-129/examples/microbyre-example",draft:!1,editUrl:"https://github.com/TeselaGen/fsml.org/tree/main/website/docs/examples/microbyre-example.md",tags:[],version:"current",frontMatter:{title:"MicroByre Manifest",metaTitle:"FSML Manifest for MicroByre",metaDescription:"FSML PDF Protocol with a YAML generated manifest"},sidebar:"tutorialSidebar",previous:{title:"Examples",permalink:"/pr-preview/pr-129/examples/"},next:{title:"PDF YAML Manifest",permalink:"/pr-preview/pr-129/examples/pdf-yaml-example"}},s={},p=[{value:"Installing the FSML CLI Tool",id:"installing-the-fsml-cli-tool",level:2},{value:"Trying out the FSML CLI Tool",id:"trying-out-the-fsml-cli-tool",level:2},{value:"Installing the Microbyre plugin",id:"installing-the-microbyre-plugin",level:2},{value:"Parsing Data Files into an FSML Manifest",id:"parsing-data-files-into-an-fsml-manifest",level:2}],m={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"microbyre-fsml-manifest-generation"},"MicroByre: FSML Manifest Generation"),(0,a.kt)("p",null,"This is a real-world example from FSML partner ",(0,a.kt)("strong",{parentName:"p"},"MicroByre"),"."),(0,a.kt)("p",null,"This example showcases how to leverage the FSML CLI tool to install a parser plugin compatible with the FSML Plugin Framework and generate an FSML manifest from a data file."),(0,a.kt)("p",null,"Three files are necessary to carry on with this example and those are available in the following link:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/TeselaGen/fsml.org/main/website/static/microbyreExample-01.zip"},(0,a.kt)("strong",{parentName:"a"},"microbyreExample.zip")))),(0,a.kt)("h2",{id:"installing-the-fsml-cli-tool"},"Installing the FSML CLI Tool"),(0,a.kt)("p",null,"Double-click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"fsml-v1.1.0-239859b-x64.pkg")," installer file and follow through the MacOS installer steps."),(0,a.kt)("h2",{id:"trying-out-the-fsml-cli-tool"},"Trying out the FSML CLI Tool"),(0,a.kt)("p",null,"Open a terminal window and type the following command ",(0,a.kt)("em",{parentName:"p"},"(note that the \u201c$>\u201d symbol is not to be typed, it's just used here to represent your CLI prompt)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    $> fsml\n")),(0,a.kt)("p",null,"You should see the FSML CLI helper docs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"fsml <command>\n\nCommands:\n  fsml defaults <subcommand>  Configures default values for CLI flags\n  fsml manifest <subcommand>  Operates with the FSML manifest\n  fsml plugin <subcommand>    Handles external plugin modules\n")),(0,a.kt)("p",null,"Feel free to navigate into the CLI commands docs by typing any of the described commands (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"$> fsml defaults"),")."),(0,a.kt)("h2",{id:"installing-the-microbyre-plugin"},"Installing the Microbyre plugin"),(0,a.kt)("p",null,"We need to install the microbyreParser.ts plugin that contains the custom logic to parse the Microbyre Data Lector files."),(0,a.kt)("p",null,"To do so, run the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    $> fsml plugin install microbyreParser --from-url file://$(pwd)/microbyreParser.ts\n")),(0,a.kt)("p",null,"Note that the \u2018$(pwd)\u2019 part of the --from-url option is just to get you working directory, this assumes you have your parser located here."),(0,a.kt)("p",null,"Now to double-check the parser is properly installed you can run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    $> fsml plugin list\n")),(0,a.kt)("p",null,"You should see something like this ",(0,a.kt)("em",{parentName:"p"},"(the actual file:// will depend on the current directory you are working in)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- name: microbyreParser\n  version: latest\n  url: >-\n    file:///fsml/microbyreParser.ts\n  uriScheme: file\n  type: generic\n  cached: true\n")),(0,a.kt)("h2",{id:"parsing-data-files-into-an-fsml-manifest"},"Parsing Data Files into an FSML Manifest"),(0,a.kt)("p",null,"Now that we have the proper parser installed we can use it to parse one of the Data Lector Files. Run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    $> fsml manifest create microbyreData.csv --parser microbyreParser --type data --author YOUR_NAME --format json --write mbManifest --pack tar\n")),(0,a.kt)("p",null,"Noted all the flags passed to the command? Well, we can set some of them as defaults so we don\u2019t have to pass them in every time."),(0,a.kt)("p",null,"To do so we can use the \u201cdefaults\u201d commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    $> fsml defaults set manifest.type data\n    $> fsml defaults set manifest.author YOUR_NAME\n    $> fsml defaults set manifest.format json\n    $> fsml defaults set manifest.write myManifest\n    $> fsml defaults set manifest.pack tar\n")),(0,a.kt)("p",null,"Now you can try the previous command with fewer flags."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    $> fsml manifest create microbyreData.csv --parser microbyreParser\n")),(0,a.kt)("p",null,"That\u2019s it, you should have generated some .tar files. You can untar them and you shall see your fsml.json manifest file."),(0,a.kt)("p",null,"Feel free to continue exploring the different commands at ",(0,a.kt)("a",{parentName:"p",href:"/pr-preview/pr-129/software/tools/cli"},"Software > Tools > CLI")," and implementing your own plugin parsers following the ",(0,a.kt)("a",{parentName:"p",href:"/pr-preview/pr-129/software/plugins/"},"Plugin Framework"),"."))}c.isMDXComponent=!0}}]);