"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[81986],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),f=p(r),m=a,g=f["".concat(i,".").concat(m)]||f[m]||u[m]||c;return r?n.createElement(g,l(l({ref:t},s),{},{components:r})):n.createElement(g,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,l=new Array(c);l[0]=f;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<c;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},92735:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const c={title:"React-35\uff1a\u8def\u7531\u7684push\u4e0ereplace",date:new Date("2021-04-21T00:00:00.000Z"),categories:"React",tags:["React"]},l=void 0,o={permalink:"/blog/React-35\uff1a\u8def\u7531\u7684push\u4e0ereplace",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/React-35\uff1a\u8def\u7531\u7684push\u4e0ereplace.md",source:"@site/blog/React-35\uff1a\u8def\u7531\u7684push\u4e0ereplace.md",title:"React-35\uff1a\u8def\u7531\u7684push\u4e0ereplace",description:"push\u6a21\u5f0f\u662f\u6808\u7684\u5e38\u89c4\u6a21\u5f0f",date:"2021-04-21T00:00:00.000Z",formattedDate:"2021\u5e744\u670821\u65e5",tags:[{label:"React",permalink:"/blog/tags/react"}],readingTime:.225,hasTruncateMarker:!1,authors:[],frontMatter:{title:"React-35\uff1a\u8def\u7531\u7684push\u4e0ereplace",date:"2021-04-21T00:00:00.000Z",categories:"React",tags:["React"]},prevItem:{title:"React-34\uff1a\u5411\u8def\u7531\u7ec4\u4ef6\u4f20\u9012state\u53c2\u6570",permalink:"/blog/React-34\uff1a\u5411\u8def\u7531\u7ec4\u4ef6\u4f20\u9012state\u53c2\u6570"},nextItem:{title:"\u5251\u6307Offer\u2014\u2014\u8fde\u7eed\u5b50\u6570\u7ec4\u7684\u6700\u5927\u548c\uff08JS\u5b9e\u73b0\uff09",permalink:"/blog/\u5251\u6307Offer\u2014\u2014\u8fde\u7eed\u5b50\u6570\u7ec4\u7684\u6700\u5927\u548c\uff08JS\u5b9e\u73b0\uff09"}},i={authorsImageUrls:[]},p=[{value:"push\u6a21\u5f0f\u662f\u6808\u7684\u5e38\u89c4\u6a21\u5f0f",id:"push\u6a21\u5f0f\u662f\u6808\u7684\u5e38\u89c4\u6a21\u5f0f",level:2},{value:"replace\u6a21\u5f0f\u662f\u66ff\u6362\u6a21\u5f0f\uff0c\u4f1a\u66ff\u6362\u6389\u6808\u9876\u7684\u8def\u7531",id:"replace\u6a21\u5f0f\u662f\u66ff\u6362\u6a21\u5f0f\u4f1a\u66ff\u6362\u6389\u6808\u9876\u7684\u8def\u7531",level:2}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"push\u6a21\u5f0f\u662f\u6808\u7684\u5e38\u89c4\u6a21\u5f0f"},"push\u6a21\u5f0f\u662f\u6808\u7684\u5e38\u89c4\u6a21\u5f0f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4ecenews\u5230message\uff0c\u7136\u540emessage\u8fd4\u56de\u5230news")),(0,a.kt)("h2",{id:"replace\u6a21\u5f0f\u662f\u66ff\u6362\u6a21\u5f0f\u4f1a\u66ff\u6362\u6389\u6808\u9876\u7684\u8def\u7531"},"replace\u6a21\u5f0f\u662f\u66ff\u6362\u6a21\u5f0f\uff0c\u4f1a\u66ff\u6362\u6389\u6808\u9876\u7684\u8def\u7531"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f00\u542f\u65b9\u6cd5\n",(0,a.kt)("img",{parentName:"li",src:"https://img-blog.csdnimg.cn/img_convert/5fc5f345626e311b3c88c5035ca1bb6d.png",alt:null}))))}u.isMDXComponent=!0}}]);