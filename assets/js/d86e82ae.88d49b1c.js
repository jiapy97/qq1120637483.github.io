"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[40699],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),g=a,f=m["".concat(i,".").concat(g)]||m[g]||u[g]||c;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<c;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1274:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const c={title:"React-02\uff1a\u865a\u62dfDOM\u7684\u4e24\u79cd\u521b\u5efa\u65b9\u5f0f",date:new Date("2021-04-02T00:00:00.000Z"),categories:"React",tags:["React"]},o=void 0,l={permalink:"/blog/React-02\uff1a\u865a\u62dfDOM\u7684\u4e24\u79cd\u521b\u5efa\u65b9\u5f0f",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/React-02\uff1a\u865a\u62dfDOM\u7684\u4e24\u79cd\u521b\u5efa\u65b9\u5f0f.md",source:"@site/blog/React-02\uff1a\u865a\u62dfDOM\u7684\u4e24\u79cd\u521b\u5efa\u65b9\u5f0f.md",title:"React-02\uff1a\u865a\u62dfDOM\u7684\u4e24\u79cd\u521b\u5efa\u65b9\u5f0f",description:"\u5b9e\u73b0\u5982\u4e0bDOM\u7ed3\u6784",date:"2021-04-02T00:00:00.000Z",formattedDate:"2021\u5e744\u67082\u65e5",tags:[{label:"React",permalink:"/blog/tags/react"}],readingTime:.185,hasTruncateMarker:!1,authors:[],frontMatter:{title:"React-02\uff1a\u865a\u62dfDOM\u7684\u4e24\u79cd\u521b\u5efa\u65b9\u5f0f",date:"2021-04-02T00:00:00.000Z",categories:"React",tags:["React"]},prevItem:{title:"\u300c\u6ce8\u89e3\u300d\u300a\u4f60\u4e0d\u77e5\u9053\u7684JavaScript\uff08\u4e0a\u5377\uff09\u300b\u7b2c\u4e94\u7ae0\uff1a\u4f5c\u7528\u57df\u95ed\u5305",permalink:"/blog/\u300c\u6ce8\u89e3\u300d\u300a\u4f60\u4e0d\u77e5\u9053\u7684JavaScript\uff08\u4e0a\u5377\uff09\u300b\u7b2c\u4e94\u7ae0\uff1a\u4f5c\u7528\u57df\u95ed\u5305"},nextItem:{title:"React-03\uff1a\u865a\u62dfDOM\u4e0e\u771f\u5b9eDOM",permalink:"/blog/React-03\uff1a\u865a\u62dfDOM\u4e0e\u771f\u5b9eDOM"}},i={authorsImageUrls:[]},p=[{value:"\u5b9e\u73b0\u5982\u4e0bDOM\u7ed3\u6784",id:"\u5b9e\u73b0\u5982\u4e0bdom\u7ed3\u6784",level:2},{value:"\u4f7f\u7528\u4f20\u7edf\u7684js",id:"\u4f7f\u7528\u4f20\u7edf\u7684js",level:2},{value:"\u4f7f\u7528JSX",id:"\u4f7f\u7528jsx",level:2},{value:"\u603b\u7ed3\uff1a\u63a8\u8350\u4f7f\u7528JSX\u7684\u65b9\u5f0f\u5199\u865a\u62dfDOM",id:"\u603b\u7ed3\u63a8\u8350\u4f7f\u7528jsx\u7684\u65b9\u5f0f\u5199\u865a\u62dfdom",level:2}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5b9e\u73b0\u5982\u4e0bdom\u7ed3\u6784"},"\u5b9e\u73b0\u5982\u4e0bDOM\u7ed3\u6784"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/8b2cf81d85abd024b4a4306eb9ab6556.png",alt:null})),(0,a.kt)("h2",{id:"\u4f7f\u7528\u4f20\u7edf\u7684js"},"\u4f7f\u7528\u4f20\u7edf\u7684js"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/4a79fda35c1473c01552a243c0c5558b.png",alt:null})),(0,a.kt)("h2",{id:"\u4f7f\u7528jsx"},"\u4f7f\u7528JSX"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/eb12e60b36e2c646c784af33346196b8.png",alt:null})),(0,a.kt)("h2",{id:"\u603b\u7ed3\u63a8\u8350\u4f7f\u7528jsx\u7684\u65b9\u5f0f\u5199\u865a\u62dfdom"},"\u603b\u7ed3\uff1a\u63a8\u8350\u4f7f\u7528JSX\u7684\u65b9\u5f0f\u5199\u865a\u62dfDOM"))}u.isMDXComponent=!0}}]);