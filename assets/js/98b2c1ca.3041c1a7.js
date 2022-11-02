"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[54946],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(r),g=a,f=m["".concat(i,".").concat(g)]||m[g]||u[g]||c;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,l=new Array(c);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<c;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},18717:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const c={title:"React-34\uff1a\u5411\u8def\u7531\u7ec4\u4ef6\u4f20\u9012state\u53c2\u6570",date:new Date("2021-04-21T00:00:00.000Z"),categories:"React",tags:["React"]},l=void 0,o={permalink:"/blog/React-34\uff1a\u5411\u8def\u7531\u7ec4\u4ef6\u4f20\u9012state\u53c2\u6570",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/React-34\uff1a\u5411\u8def\u7531\u7ec4\u4ef6\u4f20\u9012state\u53c2\u6570.md",source:"@site/blog/React-34\uff1a\u5411\u8def\u7531\u7ec4\u4ef6\u4f20\u9012state\u53c2\u6570.md",title:"React-34\uff1a\u5411\u8def\u7531\u7ec4\u4ef6\u4f20\u9012state\u53c2\u6570",description:"\u901a\u8fc7state\u53c2\u6570\u4f20\u9012\u7684\u7279\u70b9",date:"2021-04-21T00:00:00.000Z",formattedDate:"2021\u5e744\u670821\u65e5",tags:[{label:"React",permalink:"/blog/tags/react"}],readingTime:.215,hasTruncateMarker:!1,authors:[],frontMatter:{title:"React-34\uff1a\u5411\u8def\u7531\u7ec4\u4ef6\u4f20\u9012state\u53c2\u6570",date:"2021-04-21T00:00:00.000Z",categories:"React",tags:["React"]},prevItem:{title:"React-33\uff1a\u5411\u8def\u7531\u7ec4\u4ef6\u4f20\u9012search\u53c2\u6570",permalink:"/blog/React-33\uff1a\u5411\u8def\u7531\u7ec4\u4ef6\u4f20\u9012search\u53c2\u6570"},nextItem:{title:"React-35\uff1a\u8def\u7531\u7684push\u4e0ereplace",permalink:"/blog/React-35\uff1a\u8def\u7531\u7684push\u4e0ereplace"}},i={authorsImageUrls:[]},p=[{value:"\u901a\u8fc7state\u53c2\u6570\u4f20\u9012\u7684\u7279\u70b9",id:"\u901a\u8fc7state\u53c2\u6570\u4f20\u9012\u7684\u7279\u70b9",level:2},{value:"Link\u5f62\u5f0f",id:"link\u5f62\u5f0f",level:2},{value:"\u8def\u7531\u5f62\u5f0f",id:"\u8def\u7531\u5f62\u5f0f",level:2},{value:"\u63a5\u6536\u5f62\u5f0f",id:"\u63a5\u6536\u5f62\u5f0f",level:2}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u901a\u8fc7state\u53c2\u6570\u4f20\u9012\u7684\u7279\u70b9"},"\u901a\u8fc7state\u53c2\u6570\u4f20\u9012\u7684\u7279\u70b9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7state\u53c2\u6570\u4f20\u9012\u4e0d\u4f1a\u663e\u793a\u5728\u5730\u5740\u680f\u4e2d\u3002")),(0,a.kt)("h2",{id:"link\u5f62\u5f0f"},"Link\u5f62\u5f0f"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/27f12e682871f90c358bcb132a7e7aac.png",alt:null})),(0,a.kt)("h2",{id:"\u8def\u7531\u5f62\u5f0f"},"\u8def\u7531\u5f62\u5f0f"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/3d76c46b685642b49b9657ed711cd469.png",alt:null})),(0,a.kt)("h2",{id:"\u63a5\u6536\u5f62\u5f0f"},"\u63a5\u6536\u5f62\u5f0f"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/7ac5c59af976b237bfb0206f304e0730.png",alt:null})))}u.isMDXComponent=!0}}]);