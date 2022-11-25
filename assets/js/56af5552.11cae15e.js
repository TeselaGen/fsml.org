"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[1036],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=l.createContext({}),m=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=m(e.components);return l.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},f=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=m(n),d=a,c=f["".concat(i,".").concat(d)]||f[d]||p[d]||o;return n?l.createElement(c,r(r({ref:t},u),{},{components:n})):l.createElement(c,r({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var m=2;m<o;m++)r[m]=n[m];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}f.displayName="MDXCreateElement"},554:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var l=n(7462),a=(n(7294),n(3905));const o={title:"CLI",slug:"/software/tools/cli"},r="Command Line Interface",s={unversionedId:"software/tools/cli",id:"software/tools/cli",title:"CLI",description:"The FSML CLI tool is one of the FSML implemented client programs that interact with the FSML SDK Library. Its Application Programming Interface (API) provides access to the core FSML funcionalities and basic operations for working with FSML manifest files.",source:"@site/docs/software/tools/cli.md",sourceDirName:"software/tools",slug:"/software/tools/cli",permalink:"/software/tools/cli",draft:!1,editUrl:"https://github.com/TeselaGen/fsml.org/tree/main/website/docs/software/tools/cli.md",tags:[],version:"current",frontMatter:{title:"CLI",slug:"/software/tools/cli"},sidebar:"tutorialSidebar",previous:{title:"Tools",permalink:"/software/tools/"},next:{title:"Node-RED",permalink:"/software/tools/nodered"}},i={},m=[{value:"CLI Commands",id:"cli-commands",level:2},{value:"Defaults",id:"defaults",level:3},{value:"Manifest",id:"manifest",level:3},{value:"Plugin",id:"plugin",level:3},{value:"Installing CLI Tool",id:"installing-cli-tool",level:2},{value:"Trying out the FSML CLI Tool",id:"trying-out-the-fsml-cli-tool",level:2},{value:"Releases",id:"releases",level:2},{value:"Version 1.1.0",id:"version-110",level:4},{value:"macos",id:"macos",level:6},{value:"debian",id:"debian",level:6}],u={toc:m};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"command-line-interface"},"Command Line Interface"),(0,a.kt)("p",null,"The FSML CLI tool is one of the FSML implemented client programs that interact with the FSML SDK Library. Its Application Programming Interface (API) provides access to the core FSML funcionalities and basic operations for working with FSML manifest files."),(0,a.kt)("p",null,"The CLI itself comes with documentation on all the available commands and what they are used for. Essentially the CLI reads and writes FSML manifest files, parses experimental data and allows the installation of either properietary or community-implemented plugins that follow the ",(0,a.kt)("a",{parentName:"p",href:"../../plugins"},"Plugin Framework")," interface."),(0,a.kt)("h2",{id:"cli-commands"},"CLI Commands"),(0,a.kt)("p",null,"To get a list of the available CLI commands type ",(0,a.kt)("inlineCode",{parentName:"p"},"fsml")," and you should see the following commands available:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Commands:\n  fsml defaults <subcommand>  Configures default values for CLI flags\n  fsml manifest <subcommand>  Operates with the FSML manifest\n  fsml plugin <subcommand>    Handles external plugin modules\n")),(0,a.kt)("h3",{id:"defaults"},"Defaults"),(0,a.kt)("p",null,"If you type ",(0,a.kt)("inlineCode",{parentName:"p"},"fsml defaults")," you should see the following subcommands available:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Commands:\n  fsml defaults edit               Interactive mode to edit config defaults\n  fsml defaults list               Lists default configs\n  fsml defaults set <key> <value>  Sets a new default value for a config key\n  fsml defaults reset <key>        Resets the value of a config key.\n  fsml defaults reset-all          Resets the value of all configs.\n\nOptions:\n  --help      Show help                                                [boolean]\n  --version   Show version number                                      [boolean]\n  --filepath                                         [default: "./configs.yaml"]\n  --format                                                     [default: "yaml"]\n')),(0,a.kt)("h3",{id:"manifest"},"Manifest"),(0,a.kt)("p",null,"If you type ",(0,a.kt)("inlineCode",{parentName:"p"},"fsml manifest")," you should see the following subcommands available:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Commands:\n  fsml manifest create <filepattern>  Creates an FSML manifest\n  fsml manifest import <id>           Imports an FSML manifest from a registry\n\nOptions:\n  --help     Show help                                                 [boolean]\n  --version  Show version number                                       [boolean]\n  --author                                                       [default: null]\n  --format                                                     [default: "yaml"]\n  --write                                                        [default: null]\n  --pack                                                         [default: null]\n  --unpack                                                      [default: false]\n  --summary                                                     [default: false]\n')),(0,a.kt)("h3",{id:"plugin"},"Plugin"),(0,a.kt)("p",null,"If you type ",(0,a.kt)("inlineCode",{parentName:"p"},"fsml plugin")," you should see the following subcommands available:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Commands:\n  fsml plugin install <module>    Installs the plugin by saving a local referenc\n                                  e to it.\n  fsml plugin uninstall <module>  Uninstalls the plugin by removing all local re\n                                  ference to it and any related cache.\n  fsml plugin list                Lists all installed plugins.\n  fsml plugin upgrade <module>    Upgrades the plugin version.\n  fsml plugin cache <module>      Force plugin to be downloaded and cached local\n                                  ly\n  fsml plugin run <module>        Runs the module\n\nOptions:\n  --help     Show help                                                 [boolean]\n  --version  Show version number                                       [boolean]\n  --cache                                                       [default: false]\n  --sort                                                        [default: "asc"]\n  --latest                                                       [default: true]\n')),(0,a.kt)("h2",{id:"installing-cli-tool"},"Installing CLI Tool"),(0,a.kt)("p",null,"Download the installer files from the links provided in the ",(0,a.kt)("a",{parentName:"p",href:"/software/tools/cli#releases"},"Releases")," section."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For Mac users, double-click on the installer ",(0,a.kt)("inlineCode",{parentName:"p"},".pkg")," file and follow through the MacOS installer steps.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For Linux users, a popular way of installing ",(0,a.kt)("inlineCode",{parentName:"p"},".deb")," files is via the ",(0,a.kt)("inlineCode",{parentName:"p"},"dpkg")," command as so:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    sudo dpkg -i PATH_TO_FSML_INSTALLER\n")),(0,a.kt)("h2",{id:"trying-out-the-fsml-cli-tool"},"Trying out the FSML CLI Tool"),(0,a.kt)("p",null,"Open a terminal window and type the following command ",(0,a.kt)("em",{parentName:"p"},"(note that the \u201c$>\u201d symbol is not to be typed, it's just used here to represent your CLI prompt)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    $> fsml\n")),(0,a.kt)("p",null,"You should see the FSML CLI helper docs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"fsml <command>\n\nCommands:\n  fsml defaults <subcommand>  Configures default values for CLI flags\n  fsml manifest <subcommand>  Operates with the FSML manifest\n  fsml plugin <subcommand>    Handles external plugin modules\n")),(0,a.kt)("p",null,"Feel free to navigate into the CLI commands docs by typing any of the described commands (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"$> fsml defaults"),")."),(0,a.kt)("h2",{id:"releases"},"Releases"),(0,a.kt)("h4",{id:"version-110"},"Version 1.1.0"),(0,a.kt)("h6",{id:"macos"},"macos"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/TeselaGen/fsml.org/releases/download/v.1.1.0/fsml-v1.1.0-239859b-x64.pkg"},(0,a.kt)("strong",{parentName:"a"},"fsml-v1.1.0-239859b-x64.pkg"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/TeselaGen/fsml.org/releases/download/v.1.1.0/fsml-v1.1.0-239859b-arm64.pkg"},(0,a.kt)("strong",{parentName:"a"},"fsml-v1.1.0-239859b-arm64.pkg")))),(0,a.kt)("h6",{id:"debian"},"debian"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/TeselaGen/fsml.org/releases/download/v.1.1.0/fsml_1.1.0.239859b-1_amd64.deb"},(0,a.kt)("strong",{parentName:"a"},"fsml_1.1.0.239859b-1_amd64.deb"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/TeselaGen/fsml.org/releases/download/v.1.1.0/fsml_1.1.0.239859b-1_armel.deb"},(0,a.kt)("strong",{parentName:"a"},"fsml_1.1.0.239859b-1_armel.deb")))))}p.isMDXComponent=!0}}]);