"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[91216],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},22592:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"React-46\uff1aProvider\u7ec4\u4ef6\u7684\u4f7f\u7528",date:new Date("2021-04-26T00:00:00.000Z"),categories:"React",tags:["React"]},i=void 0,c={permalink:"/blog/React-46\uff1aProvider\u7ec4\u4ef6\u7684\u4f7f\u7528",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/React-46\uff1aProvider\u7ec4\u4ef6\u7684\u4f7f\u7528.md",source:"@site/blog/React-46\uff1aProvider\u7ec4\u4ef6\u7684\u4f7f\u7528.md",title:"React-46\uff1aProvider\u7ec4\u4ef6\u7684\u4f7f\u7528",description:"\u5728\u5165\u53e3\u6587\u4ef6\u4e2d\u5f15\u5165Provider",date:"2021-04-26T00:00:00.000Z",formattedDate:"2021\u5e744\u670826\u65e5",tags:[{label:"React",permalink:"/blog/tags/react"}],readingTime:.235,hasTruncateMarker:!1,authors:[],frontMatter:{title:"React-46\uff1aProvider\u7ec4\u4ef6\u7684\u4f7f\u7528",date:"2021-04-26T00:00:00.000Z",categories:"React",tags:["React"]},prevItem:{title:"React-45\uff1amapDispatchToProps\u7684\u7b80\u5199\u65b9\u6cd5",permalink:"/blog/React-45\uff1amapDispatchToProps\u7684\u7b80\u5199\u65b9\u6cd5"},nextItem:{title:"React-47\uff1a\u4e00\u5f20\u56fe\u770b\u61c2react-redux\u7684\u57fa\u672c\u6d41\u7a0b",permalink:"/blog/React-47\uff1a\u4e00\u5f20\u56fe\u770b\u61c2react-redux\u7684\u57fa\u672c\u6d41\u7a0b"}},l={authorsImageUrls:[]},p=[{value:"\u5728\u5165\u53e3\u6587\u4ef6\u4e2d\u5f15\u5165Provider",id:"\u5728\u5165\u53e3\u6587\u4ef6\u4e2d\u5f15\u5165provider",level:2}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5728\u5165\u53e3\u6587\u4ef6\u4e2d\u5f15\u5165provider"},"\u5728\u5165\u53e3\u6587\u4ef6\u4e2d\u5f15\u5165Provider"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u7ed9Provider\u4f20\u9012store\uff0c\u5c31\u4e0d\u7528\u901a\u8fc7\u7ed9\u6bcf\u4e00\u4e2a\u5bb9\u5668\u7ec4\u4ef6\u4f20\u9012store\u4e86"),(0,a.kt)("li",{parentName:"ul"},"\u522b\u5fd8\u4e86\u5728\u5165\u53e3\u6587\u4ef6\u5f15\u5165store\n",(0,a.kt)("img",{parentName:"li",src:"https://img-blog.csdnimg.cn/img_convert/fe25453f1f37bd89e983352384d91e8d.png",alt:null}))))}u.isMDXComponent=!0}}]);