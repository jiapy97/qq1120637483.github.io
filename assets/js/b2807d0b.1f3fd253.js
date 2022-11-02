"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[34020],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=s(r),m=a,f=g["".concat(c,".").concat(m)]||g[m]||u[m]||o;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},43e3:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"ES6\u2014\u201446\uff1aclass\u4e2dgetter\u548csetter\u7684\u8bbe\u7f6e\u65b9\u6cd5",date:new Date("2021-03-18T00:00:00.000Z"),categories:"ES6",tags:["ES6"]},l=void 0,i={permalink:"/blog/ES6\u2014\u201446\uff1aclass\u4e2dgetter\u548csetter\u7684\u8bbe\u7f6e\u65b9\u6cd5",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/ES6\u2014\u201446\uff1aclass\u4e2dgetter\u548csetter\u7684\u8bbe\u7f6e\u65b9\u6cd5.md",source:"@site/blog/ES6\u2014\u201446\uff1aclass\u4e2dgetter\u548csetter\u7684\u8bbe\u7f6e\u65b9\u6cd5.md",title:"ES6\u2014\u201446\uff1aclass\u4e2dgetter\u548csetter\u7684\u8bbe\u7f6e\u65b9\u6cd5",description:"\u6d4b\u8bd5\u4ee3\u7801",date:"2021-03-18T00:00:00.000Z",formattedDate:"2021\u5e743\u670818\u65e5",tags:[{label:"ES6",permalink:"/blog/tags/es-6"}],readingTime:.06,hasTruncateMarker:!1,authors:[],frontMatter:{title:"ES6\u2014\u201446\uff1aclass\u4e2dgetter\u548csetter\u7684\u8bbe\u7f6e\u65b9\u6cd5",date:"2021-03-18T00:00:00.000Z",categories:"ES6",tags:["ES6"]},prevItem:{title:"ES6\u2014\u201445\uff1a\u5b50\u7c7b\u5bf9\u7236\u7c7b\u65b9\u6cd5\u7684\u91cd\u5199",permalink:"/blog/ES6\u2014\u201445\uff1a\u5b50\u7c7b\u5bf9\u7236\u7c7b\u65b9\u6cd5\u7684\u91cd\u5199"},nextItem:{title:"ES6\u2014\u201447\uff1aES6\u4e2d\u7684\u6570\u503c\u62d3\u5c55",permalink:"/blog/ES6\u2014\u201447\uff1aES6\u4e2d\u7684\u6570\u503c\u62d3\u5c55"}},c={authorsImageUrls:[]},s=[{value:"\u6d4b\u8bd5\u4ee3\u7801",id:"\u6d4b\u8bd5\u4ee3\u7801",level:2},{value:"\u5b9e\u73b0\u6548\u679c",id:"\u5b9e\u73b0\u6548\u679c",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u6d4b\u8bd5\u4ee3\u7801"},"\u6d4b\u8bd5\u4ee3\u7801"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/555d6a15b634f6d447258165f5e3e693.png",alt:null})),(0,a.kt)("h2",{id:"\u5b9e\u73b0\u6548\u679c"},"\u5b9e\u73b0\u6548\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/8a6f252a9859b4d2e9eb911164173e6b.png",alt:null})))}u.isMDXComponent=!0}}]);