"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[822],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),y=c(n),d=r,g=y["".concat(l,".").concat(d)]||y[d]||p[d]||a;return n?o.createElement(g,i(i({ref:t},u),{},{components:n})):o.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[y]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70929:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={sidebar_position:2},i="Creating your API key",s={unversionedId:"creatingkeys",id:"creatingkeys",title:"Creating your API key",description:"API keys are needed every time you want to use the Clanny API.  Nothing we have can be used without your group's security key or API key.",source:"@site/docs/creatingkeys.md",sourceDirName:".",slug:"/creatingkeys",permalink:"/docs/creatingkeys",draft:!1,editUrl:"https://github.com/clanny/packageAPI/edit/master/docs/creatingkeys.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Intro",permalink:"/docs/intro"},next:{title:"Installation",permalink:"/docs/installation"}},l={},c=[{value:"Dashboard",id:"dashboard",level:2},{value:"Logging in",id:"logging-in",level:3},{value:"Navigating to the API page",id:"navigating-to-the-api-page",level:3},{value:"API creation",id:"api-creation",level:3},{value:"Deleting API keys",id:"deleting-api-keys",level:3}],u={toc:c},y="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(y,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-your-api-key"},"Creating your API key"),(0,r.kt)("p",null,"API keys are needed every time you want to use the Clanny API.  Nothing we have can be used without your group's security key or API key."),(0,r.kt)("admonition",{title:"Sharing API Keys",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"No NOT share API Key data with anyone you wouldn't trust not to destroy your group!")),(0,r.kt)("h2",{id:"dashboard"},"Dashboard"),(0,r.kt)("p",null,"As most people know, Discord's slash commands can be really annoying.  So because of that we have a ",(0,r.kt)("a",{parentName:"p",href:"https://dashboard.clanny.systems"},"dashboard")," that allows easy setup of your group, one of those things is creating your API keys.  If you've tried running the ",(0,r.kt)("inlineCode",{parentName:"p"},"/API")," command you have most likely already been directed to the dashboard."),(0,r.kt)("h3",{id:"logging-in"},"Logging in"),(0,r.kt)("p",null,"Once you get to the dashboard you'll most likely be asked to login through Discord.  Don't worry, the login redirects you to Discord, then they tell the website if you actually own your account or not.  All your info stays safe with Discord."),(0,r.kt)("h3",{id:"navigating-to-the-api-page"},"Navigating to the API page"),(0,r.kt)("p",null,'Once logged in, find the group you want to create an API key for and press "Open" to see your group\'s information.  Once there, look to the Left side of your screen to the button saying "Group API Keys" and click on it.'),(0,r.kt)("h3",{id:"api-creation"},"API creation"),(0,r.kt)("p",null,'Now, You will see a button saying "Create New API Key".  Once you click it you will be given your API data ',(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"DO NOT SHARE IT")),".  But remember to copy all the information on the prompt is shows, once you close the prompt you can not open it again to see the API Key.  Your Key ID acts as an identifier or a name for the key and tells the code which to authenticate so that will stay visible to you."),(0,r.kt)("h3",{id:"deleting-api-keys"},"Deleting API keys"),(0,r.kt)("p",null,"Because it can be really unsafe and a mess if you could only create these keys ",(0,r.kt)("em",{parentName:"p"},"(trust me, the clanny group has over 20 keys)"),' we give you a way of deleting them.  Simply press that "Delete" button, once deleted that API Key is no longer usable'))}p.isMDXComponent=!0}}]);