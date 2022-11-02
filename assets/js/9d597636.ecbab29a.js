"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[71070],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(r),f=n,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||o;return r?a.createElement(d,l(l({ref:t},s),{},{components:r})):a.createElement(d,l({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},30007:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const o={title:"React-38\uff1aBrowserRouter\u4e0eHashRouter\u7684\u533a\u522b",date:new Date("2021-04-22T00:00:00.000Z"),categories:"React",tags:["React"]},l=void 0,i={permalink:"/blog/React-38\uff1aBrowserRouter\u4e0eHashRouter\u7684\u533a\u522b",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/React-38\uff1aBrowserRouter\u4e0eHashRouter\u7684\u533a\u522b.md",source:"@site/blog/React-38\uff1aBrowserRouter\u4e0eHashRouter\u7684\u533a\u522b.md",title:"React-38\uff1aBrowserRouter\u4e0eHashRouter\u7684\u533a\u522b",description:"\u533a\u522b\u4e00\uff1a\u5e95\u5c42\u539f\u7406\u4e0d\u540c",date:"2021-04-22T00:00:00.000Z",formattedDate:"2021\u5e744\u670822\u65e5",tags:[{label:"React",permalink:"/blog/tags/react"}],readingTime:.565,hasTruncateMarker:!1,authors:[],frontMatter:{title:"React-38\uff1aBrowserRouter\u4e0eHashRouter\u7684\u533a\u522b",date:"2021-04-22T00:00:00.000Z",categories:"React",tags:["React"]},prevItem:{title:"React-37\uff1awithRouter\u7684\u4f7f\u7528",permalink:"/blog/React-37\uff1awithRouter\u7684\u4f7f\u7528"},nextItem:{title:"React-39\uff1aantd\u7684\u57fa\u672c\u4f7f\u7528",permalink:"/blog/React-39\uff1aantd\u7684\u57fa\u672c\u4f7f\u7528"}},c={authorsImageUrls:[]},u=[{value:"\u533a\u522b\u4e00\uff1a\u5e95\u5c42\u539f\u7406\u4e0d\u540c",id:"\u533a\u522b\u4e00\u5e95\u5c42\u539f\u7406\u4e0d\u540c",level:2},{value:"\u533a\u522b\u4e8c\uff1aURL\u8868\u73b0\u5f62\u5f0f\u4e0d\u4e00\u6837",id:"\u533a\u522b\u4e8curl\u8868\u73b0\u5f62\u5f0f\u4e0d\u4e00\u6837",level:2},{value:"\u533a\u522b\u4e09\uff1a\u5237\u65b0\u540e\u5bf9\u8def\u7531state\u53c2\u6570\u7684\u5f71\u54cd",id:"\u533a\u522b\u4e09\u5237\u65b0\u540e\u5bf9\u8def\u7531state\u53c2\u6570\u7684\u5f71\u54cd",level:2}],s={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u533a\u522b\u4e00\u5e95\u5c42\u539f\u7406\u4e0d\u540c"},"\u533a\u522b\u4e00\uff1a\u5e95\u5c42\u539f\u7406\u4e0d\u540c"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"BrowserRouter\u4f7f\u7528\u7684\u662fH5\u7684history API\uff0c\u4e0d\u517c\u5bb9IE9\u53ca\u4ee5\u4e0b\u7248\u672c\u3002"),(0,n.kt)("li",{parentName:"ul"},"HashRouter\u4f7f\u7528\u7684\u662fURL\u7684\u54c8\u5e0c\u503c\u3002")),(0,n.kt)("h2",{id:"\u533a\u522b\u4e8curl\u8868\u73b0\u5f62\u5f0f\u4e0d\u4e00\u6837"},"\u533a\u522b\u4e8c\uff1aURL\u8868\u73b0\u5f62\u5f0f\u4e0d\u4e00\u6837"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"BrowserRouter\u7684\u8def\u5f84\u4e2d\u6ca1\u6709#"),(0,n.kt)("li",{parentName:"ul"},"HashRouter\u7684\u8def\u5f84\u4e2d\u5305\u542b#")),(0,n.kt)("h2",{id:"\u533a\u522b\u4e09\u5237\u65b0\u540e\u5bf9\u8def\u7531state\u53c2\u6570\u7684\u5f71\u54cd"},"\u533a\u522b\u4e09\uff1a\u5237\u65b0\u540e\u5bf9\u8def\u7531state\u53c2\u6570\u7684\u5f71\u54cd"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5237\u65b0\u540eBrowserRouter\u6ca1\u6709\u4efb\u4f55\u5f71\u54cd\uff0c\u56e0\u4e3astate\u4fdd\u5b58\u5728history\u5bf9\u8c61\u4e2d\u3002"),(0,n.kt)("li",{parentName:"ul"},"HashRouter\u5237\u65b0\u540e\u4f1a\u5bfc\u81f4\u8def\u7531state\u53c2\u6570\u7684\u4e22\u5931\u3002")))}p.isMDXComponent=!0}}]);