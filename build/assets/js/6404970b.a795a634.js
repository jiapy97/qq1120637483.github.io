"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[61152],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||o;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},66919:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"React-51\uff1aReact\u9879\u76ee\u6253\u5305\u8fd0\u884c",date:new Date("2021-04-27T00:00:00.000Z"),categories:"React",tags:["React"]},c=void 0,i={permalink:"/blog/React-51\uff1aReact\u9879\u76ee\u6253\u5305\u8fd0\u884c",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/React-51\uff1aReact\u9879\u76ee\u6253\u5305\u8fd0\u884c.md",source:"@site/blog\\React-51\uff1aReact\u9879\u76ee\u6253\u5305\u8fd0\u884c.md",title:"React-51\uff1aReact\u9879\u76ee\u6253\u5305\u8fd0\u884c",description:"1. build\u521b\u5efa",date:"2021-04-27T00:00:00.000Z",formattedDate:"2021\u5e744\u670827\u65e5",tags:[{label:"React",permalink:"/blog/tags/react"}],readingTime:.2,hasTruncateMarker:!1,authors:[],frontMatter:{title:"React-51\uff1aReact\u9879\u76ee\u6253\u5305\u8fd0\u884c",date:"2021-04-27T00:00:00.000Z",categories:"React",tags:["React"]},prevItem:{title:"React-50\uff1a\u4e00\u6587\u5b66\u4f1aredux\u5f00\u53d1\u8005\u5de5\u5177\u7684\u57fa\u672c\u4f7f\u7528",permalink:"/blog/React-50\uff1a\u4e00\u6587\u5b66\u4f1aredux\u5f00\u53d1\u8005\u5de5\u5177\u7684\u57fa\u672c\u4f7f\u7528"},nextItem:{title:"\u5251\u6307Offer\u2014\u2014\u5305\u542bmin\u51fd\u6570\u7684\u6808\uff08JS\u5b9e\u73b0\uff09",permalink:"/blog/\u5251\u6307Offer\u2014\u2014\u5305\u542bmin\u51fd\u6570\u7684\u6808\uff08JS\u5b9e\u73b0\uff09"}},l={authorsImageUrls:[]},p=[{value:"1. build\u521b\u5efa",id:"1-build\u521b\u5efa",level:2},{value:"2. \u5168\u5c40\u5b89\u88c5serve\u5e93",id:"2-\u5168\u5c40\u5b89\u88c5serve\u5e93",level:2},{value:"3. \u4ee5build\u6587\u4ef6\u5939\u4e3a\u670d\u52a1\u5668\u7684\u6839\u76ee\u5f55",id:"3-\u4ee5build\u6587\u4ef6\u5939\u4e3a\u670d\u52a1\u5668\u7684\u6839\u76ee\u5f55",level:2}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-build\u521b\u5efa"},"1. build\u521b\u5efa"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm run build\n")),(0,a.kt)("h2",{id:"2-\u5168\u5c40\u5b89\u88c5serve\u5e93"},"2. \u5168\u5c40\u5b89\u88c5serve\u5e93"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm i serve -g\n")),(0,a.kt)("h2",{id:"3-\u4ee5build\u6587\u4ef6\u5939\u4e3a\u670d\u52a1\u5668\u7684\u6839\u76ee\u5f55"},"3. \u4ee5build\u6587\u4ef6\u5939\u4e3a\u670d\u52a1\u5668\u7684\u6839\u76ee\u5f55"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"serve build\n")))}s.isMDXComponent=!0}}]);