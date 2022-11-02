"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[34375],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=p(r),m=a,g=f["".concat(l,".").concat(m)]||f[m]||u[m]||o;return r?n.createElement(g,c(c({ref:t},s),{},{components:r})):n.createElement(g,c({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},30764:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"ES6\u2014\u201415\uff1a\u7c7b\u7684\u672c\u8d28",date:new Date("2021-03-13T00:00:00.000Z"),categories:"ES6",tags:["ES6"]},c=void 0,i={permalink:"/blog/ES6\u2014\u201415\uff1a\u7c7b\u7684\u672c\u8d28",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/ES6\u2014\u201415\uff1a\u7c7b\u7684\u672c\u8d28.md",source:"@site/blog/ES6\u2014\u201415\uff1a\u7c7b\u7684\u672c\u8d28.md",title:"ES6\u2014\u201415\uff1a\u7c7b\u7684\u672c\u8d28",description:"1\uff1aclass\u7684\u672c\u8d28\u662ffunction",date:"2021-03-13T00:00:00.000Z",formattedDate:"2021\u5e743\u670813\u65e5",tags:[{label:"ES6",permalink:"/blog/tags/es-6"}],readingTime:.16,hasTruncateMarker:!1,authors:[],frontMatter:{title:"ES6\u2014\u201415\uff1a\u7c7b\u7684\u672c\u8d28",date:"2021-03-13T00:00:00.000Z",categories:"ES6",tags:["ES6"]},prevItem:{title:"ES6\u2014\u201414\uff1a\u501f\u7528\u539f\u578b\u5bf9\u8c61\u7ee7\u627f\u7236\u6784\u9020\u51fd\u6570\u7684\u65b9\u6cd5",permalink:"/blog/ES6\u2014\u201414\uff1a\u501f\u7528\u539f\u578b\u5bf9\u8c61\u7ee7\u627f\u7236\u6784\u9020\u51fd\u6570\u7684\u65b9\u6cd5"},nextItem:{title:"ES6\u2014\u201416\uff1a\u8fed\u4ee3\u6570\u7ec4\uff08forEach\uff09",permalink:"/blog/ES6\u2014\u201416\uff1a\u8fed\u4ee3\u6570\u7ec4\uff08forEach\uff09"}},l={authorsImageUrls:[]},p=[{value:"1\uff1aclass\u7684\u672c\u8d28\u662ffunction",id:"1class\u7684\u672c\u8d28\u662ffunction",level:2},{value:"2\uff1a\u7c7b\u4e5f\u6709\u539f\u578b\u5bf9\u8c61",id:"2\u7c7b\u4e5f\u6709\u539f\u578b\u5bf9\u8c61",level:2},{value:"3\uff1a\u7c7b\u4e5f\u53ef\u4ee5\u901a\u8fc7\u539f\u578b\u5bf9\u8c61\u6dfb\u52a0\u65b9\u6cd5",id:"3\u7c7b\u4e5f\u53ef\u4ee5\u901a\u8fc7\u539f\u578b\u5bf9\u8c61\u6dfb\u52a0\u65b9\u6cd5",level:2}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1class\u7684\u672c\u8d28\u662ffunction"},"1\uff1aclass\u7684\u672c\u8d28\u662ffunction"),(0,a.kt)("h2",{id:"2\u7c7b\u4e5f\u6709\u539f\u578b\u5bf9\u8c61"},"2\uff1a\u7c7b\u4e5f\u6709\u539f\u578b\u5bf9\u8c61"),(0,a.kt)("h2",{id:"3\u7c7b\u4e5f\u53ef\u4ee5\u901a\u8fc7\u539f\u578b\u5bf9\u8c61\u6dfb\u52a0\u65b9\u6cd5"},"3\uff1a\u7c7b\u4e5f\u53ef\u4ee5\u901a\u8fc7\u539f\u578b\u5bf9\u8c61\u6dfb\u52a0\u65b9\u6cd5"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/a6de325846f29ce2992a030cbcf62216.png",alt:null})))}u.isMDXComponent=!0}}]);