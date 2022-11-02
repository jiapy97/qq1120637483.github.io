"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[48700],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),m=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=m(r),u=a,s=g["".concat(i,".").concat(u)]||g[u]||f[u]||o;return r?n.createElement(s,c(c({ref:t},p),{},{components:r})):n.createElement(s,c({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var m=2;m<o;m++)c[m]=r[m];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},17260:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var n=r(87462),a=(r(67294),r(3905));const o={title:"React-57\uff1aFragment\uff08\u8ba9\u51fd\u6570\u5f0f\u7ec4\u4ef6\u80fd\u591f\u4f7f\u7528ref\uff09",date:new Date("2021-04-29T00:00:00.000Z"),categories:"React",tags:["React"]},c=void 0,l={permalink:"/blog/React-57\uff1aFragment\uff08\u8ba9\u51fd\u6570\u5f0f\u7ec4\u4ef6\u80fd\u591f\u4f7f\u7528ref\uff09",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/React-57\uff1aFragment\uff08\u8ba9\u51fd\u6570\u5f0f\u7ec4\u4ef6\u80fd\u591f\u4f7f\u7528ref\uff09.md",source:"@site/blog\\React-57\uff1aFragment\uff08\u8ba9\u51fd\u6570\u5f0f\u7ec4\u4ef6\u80fd\u591f\u4f7f\u7528ref\uff09.md",title:"React-57\uff1aFragment\uff08\u8ba9\u51fd\u6570\u5f0f\u7ec4\u4ef6\u80fd\u591f\u4f7f\u7528ref\uff09",description:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528Fragment\uff1f",date:"2021-04-29T00:00:00.000Z",formattedDate:"2021\u5e744\u670829\u65e5",tags:[{label:"React",permalink:"/blog/tags/react"}],readingTime:.36,hasTruncateMarker:!1,authors:[],frontMatter:{title:"React-57\uff1aFragment\uff08\u8ba9\u51fd\u6570\u5f0f\u7ec4\u4ef6\u80fd\u591f\u4f7f\u7528ref\uff09",date:"2021-04-29T00:00:00.000Z",categories:"React",tags:["React"]},prevItem:{title:"\u5251\u6307Offer\u2014\u2014\u6700\u5c0f\u7684K\u4e2a\u6570\uff08JS\u5b9e\u73b0\uff09",permalink:"/blog/\u5251\u6307Offer\u2014\u2014\u6700\u5c0f\u7684K\u4e2a\u6570\uff08JS\u5b9e\u73b0\uff09"},nextItem:{title:"React-58\uff1aContext\uff08\u7ec4\u4ef6\u95f4\u8fdb\u884c\u901a\u4fe1\uff09",permalink:"/blog/React-58\uff1aContext\uff08\u7ec4\u4ef6\u95f4\u8fdb\u884c\u901a\u4fe1\uff09"}},i={authorsImageUrls:[]},m=[{value:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528Fragment\uff1f",id:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528fragment",level:2},{value:"Fragment\u6807\u7b7e\u7684\u6548\u679c",id:"fragment\u6807\u7b7e\u7684\u6548\u679c",level:2}],p={toc:m};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528fragment"},"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528Fragment\uff1f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7React\u8fdb\u884c\u5f00\u53d1\u7684\u65f6\u5019\uff0c\u6709\u65f6\u5019\u4f1a\u4ea7\u751f\u5f88\u591a\u65e0\u7528\u7684\u5305\u88f9\u6807\u7b7e\n",(0,a.kt)("img",{parentName:"li",src:"https://img-blog.csdnimg.cn/img_convert/ffd296bfb4a806ce1087a1b783835692.png",alt:null}))),(0,a.kt)("h2",{id:"fragment\u6807\u7b7e\u7684\u6548\u679c"},"Fragment\u6807\u7b7e\u7684\u6548\u679c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728React\u8fdb\u884c\u89e3\u6790\u7684\u65f6\u5019\uff0c\u4f1a\u5c06Fragment\u4e22\u6389\uff0c\u53ef\u4ee5\u6709\u6548\u7684\u9632\u6b62\u6807\u7b7e\u5305\u88f9\u65e0\u6548\u5197\u4f59\u3002\n",(0,a.kt)("img",{parentName:"li",src:"https://img-blog.csdnimg.cn/img_convert/c085d08d6d2bf123e87af299db915e01.png",alt:null}))))}f.isMDXComponent=!0}}]);