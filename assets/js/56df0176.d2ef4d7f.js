"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[6675],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,g=m["".concat(l,".").concat(f)]||m[f]||u[f]||c;return r?n.createElement(g,o(o({ref:t},s),{},{components:r})):n.createElement(g,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<c;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},90571:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const c={title:"React-31\uff1a\u5d4c\u5957\u8def\u7531\u7684\u4f7f\u7528",date:new Date("2021-04-21T00:00:00.000Z"),categories:"React",tags:["React"]},o=void 0,i={permalink:"/blog/React-31\uff1a\u5d4c\u5957\u8def\u7531\u7684\u4f7f\u7528",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/React-31\uff1a\u5d4c\u5957\u8def\u7531\u7684\u4f7f\u7528.md",source:"@site/blog/React-31\uff1a\u5d4c\u5957\u8def\u7531\u7684\u4f7f\u7528.md",title:"React-31\uff1a\u5d4c\u5957\u8def\u7531\u7684\u4f7f\u7528",description:"\u57fa\u672c\u4f7f\u7528",date:"2021-04-21T00:00:00.000Z",formattedDate:"2021\u5e744\u670821\u65e5",tags:[{label:"React",permalink:"/blog/tags/react"}],readingTime:.1,hasTruncateMarker:!1,authors:[],frontMatter:{title:"React-31\uff1a\u5d4c\u5957\u8def\u7531\u7684\u4f7f\u7528",date:"2021-04-21T00:00:00.000Z",categories:"React",tags:["React"]},prevItem:{title:"React-31\uff1aRedirect\u7684\u4f7f\u7528",permalink:"/blog/React-31\uff1aRedirect\u7684\u4f7f\u7528"},nextItem:{title:"React-32\uff1a\u5411\u8def\u7531\u7ec4\u4ef6\u4f20\u9012params\u53c2\u6570",permalink:"/blog/React-32\uff1a\u5411\u8def\u7531\u7ec4\u4ef6\u4f20\u9012params\u53c2\u6570"}},l={authorsImageUrls:[]},p=[{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:2},{value:"\u7b2c\u4e00\u7ea7\u8def\u7531\u4e0d\u80fd\u52a0\u4e25\u683c\u6a21\u5f0f",id:"\u7b2c\u4e00\u7ea7\u8def\u7531\u4e0d\u80fd\u52a0\u4e25\u683c\u6a21\u5f0f",level:2}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u57fa\u672c\u4f7f\u7528"},"\u57fa\u672c\u4f7f\u7528"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/fa145897c3157931dc74284a9558698c.png",alt:null})),(0,a.kt)("h2",{id:"\u7b2c\u4e00\u7ea7\u8def\u7531\u4e0d\u80fd\u52a0\u4e25\u683c\u6a21\u5f0f"},"\u7b2c\u4e00\u7ea7\u8def\u7531\u4e0d\u80fd\u52a0\u4e25\u683c\u6a21\u5f0f"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/8043207b9d233110242872e5aa217e21.png",alt:null})))}u.isMDXComponent=!0}}]);