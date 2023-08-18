"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={sidebar_position:3},l="Installation",i={unversionedId:"installation",id:"installation",title:"Installation",description:"In the document we will explain all the way to install the API package.  For how to use it see the Package Usage page.",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/api/package/docs/installation",draft:!1,editUrl:"https://github.com/clanny/clanny.github.io/edit/master/docs/installation.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Creating your API key",permalink:"/api/package/docs/creatingkeys"},next:{title:"Using our modern API Package",permalink:"/api/package/docs/packageusage"}},s={},c=[{value:"VS Code",id:"vs-code",level:2},{value:"Installation",id:"installation-1",level:3},{value:"Roblox Studio",id:"roblox-studio",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("p",null,"In the document we will explain all the way to install the API package.  For how to use it see the ",(0,o.kt)("a",{parentName:"p",href:"packageusage"},"Package Usage")," page."),(0,o.kt)("h2",{id:"vs-code"},"VS Code"),(0,o.kt)("p",null,"VS Code or Visual Studio Code is a code editor used by many devs and is just one way to program.  Many Roblox groups use this editor for game development, then connect to Roblox through a service like ",(0,o.kt)("a",{parentName:"p",href:"https://rojo.space"},"Rojo"),"."),(0,o.kt)("admonition",{title:"Rojo",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Rojo is a program for Roblox with multiple usages.  Including, connecting directly to Roblox Studio so you can see changes immediately, and building a game file from your terminal.")),(0,o.kt)("h3",{id:"installation-1"},"Installation"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install your favorite Toolchain manager, personally I use ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Roblox/foreman"},"Foreman"),"."),(0,o.kt)("li",{parentName:"ol"},"Next setup your toolchain manager with the tools needed.  If you're using Foreman, create a file named ",(0,o.kt)("inlineCode",{parentName:"li"},"foreman.toml"),", the code should look something like this.",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Make sure to run install on your manager to get the files you need.")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'[tools]\nrojo = { source = "rojo-rbx/rojo", version = "7.3.0" }\nwally = { source = "UpliftGames/wally", version = "0.3.1" }\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Next, create or find your ",(0,o.kt)("inlineCode",{parentName:"li"},"wally.toml")," file.  Inside of it crete a new line with ",(0,o.kt)("inlineCode",{parentName:"li"},"[server-dependencies]"),".  And add ",(0,o.kt)("inlineCode",{parentName:"li"},'Clanny = "minecraft2fun/clanny@^01.2"')," underneath of it.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'[server-dependencies]\nClanny = "minecraft2fun/clanny@^0.1.2"\n')),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"wally install")," to install your new package."),(0,o.kt)("li",{parentName:"ol"},"All set, you may need to shuffle around your ",(0,o.kt)("inlineCode",{parentName:"li"},"package.default.json")," file to make sure your server packages are noticed and being put into the game.")),(0,o.kt)("h2",{id:"roblox-studio"},"Roblox Studio"),(0,o.kt)("admonition",{title:"Coming Soon",type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"COMING SOON:")," if you really want to use this still, head to ",(0,o.kt)("a",{parentName:"p",href:"https://wally.run/package/minecraft2fun/clanny"},"Wally/clanny"),' and click "Download".  Copy all code in the ',(0,o.kt)("inlineCode",{parentName:"p"},".lua")," file into a Module Script in Roblox studio.  Make sure to place the script in ServerScriptService or ServerStorage.  From there continue as normal to the ",(0,o.kt)("a",{parentName:"p",href:"packageusage"},"Package Usage")," page.")))}d.isMDXComponent=!0}}]);