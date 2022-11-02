"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[69407],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},O=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),O=p(r),m=a,f=O["".concat(l,".").concat(m)]||O[m]||s[m]||o;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=O;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}O.displayName="MDXCreateElement"},42313:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"React-03\uff1a\u865a\u62dfDOM\u4e0e\u771f\u5b9eDOM",date:new Date("2021-04-02T00:00:00.000Z"),categories:"React",tags:["React"]},c=void 0,i={permalink:"/blog/React-03\uff1a\u865a\u62dfDOM\u4e0e\u771f\u5b9eDOM",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/React-03\uff1a\u865a\u62dfDOM\u4e0e\u771f\u5b9eDOM.md",source:"@site/blog/React-03\uff1a\u865a\u62dfDOM\u4e0e\u771f\u5b9eDOM.md",title:"React-03\uff1a\u865a\u62dfDOM\u4e0e\u771f\u5b9eDOM",description:"\u865a\u62dfDOM\u7684\u51e0\u4e2a\u7279\u70b9",date:"2021-04-02T00:00:00.000Z",formattedDate:"2021\u5e744\u67082\u65e5",tags:[{label:"React",permalink:"/blog/tags/react"}],readingTime:.29,hasTruncateMarker:!1,authors:[],frontMatter:{title:"React-03\uff1a\u865a\u62dfDOM\u4e0e\u771f\u5b9eDOM",date:"2021-04-02T00:00:00.000Z",categories:"React",tags:["React"]},prevItem:{title:"React-02\uff1a\u865a\u62dfDOM\u7684\u4e24\u79cd\u521b\u5efa\u65b9\u5f0f",permalink:"/blog/React-02\uff1a\u865a\u62dfDOM\u7684\u4e24\u79cd\u521b\u5efa\u65b9\u5f0f"},nextItem:{title:"React-04\uff1aJSX\u8bed\u6cd5\u89c4\u5219",permalink:"/blog/React-04\uff1aJSX\u8bed\u6cd5\u89c4\u5219"}},l={authorsImageUrls:[]},p=[{value:"\u865a\u62dfDOM\u7684\u51e0\u4e2a\u7279\u70b9",id:"\u865a\u62dfdom\u7684\u51e0\u4e2a\u7279\u70b9",level:2}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u865a\u62dfdom\u7684\u51e0\u4e2a\u7279\u70b9"},"\u865a\u62dfDOM\u7684\u51e0\u4e2a\u7279\u70b9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u865a\u62dfDOM\u662fObject\u7c7b\u578b\u7684\u5bf9\u8c61"),(0,a.kt)("li",{parentName:"ul"},"\u865a\u62dfDOM\u7684\u5c5e\u6027\u6bd4\u8f83\u5c11\uff0c\u771f\u5b9eDOM\u7684\u5c5e\u6027\u6bd4\u8f83\u591a\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u865a\u62dfDOM\u6700\u7ec8\u4f1a\u88abReact\u8f6c\u5316\u4e3a\u771f\u5b9eDOM\uff0c\u5e76\u5448\u73b0\u5728\u9875\u9762\u4e0a\u3002")))}s.isMDXComponent=!0}}]);