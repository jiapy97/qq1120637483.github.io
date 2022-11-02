"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[57965],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},f=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),s=p(r),u=a,g=s["".concat(l,".").concat(u)]||s[u]||m[u]||o;return r?n.createElement(g,c(c({ref:t},f),{},{components:r})):n.createElement(g,c({ref:t},f))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},33626:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"React-56\uff1aRefHook\uff08\u8ba9\u51fd\u6570\u5f0f\u7ec4\u4ef6\u80fd\u591f\u4f7f\u7528ref\uff09",date:new Date("2021-04-28T00:00:00.000Z"),categories:"React",tags:["React"]},c=void 0,i={permalink:"/blog/React-56\uff1aRefHook\uff08\u8ba9\u51fd\u6570\u5f0f\u7ec4\u4ef6\u80fd\u591f\u4f7f\u7528ref\uff09",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/React-56\uff1aRefHook\uff08\u8ba9\u51fd\u6570\u5f0f\u7ec4\u4ef6\u80fd\u591f\u4f7f\u7528ref\uff09.md",source:"@site/blog/React-56\uff1aRefHook\uff08\u8ba9\u51fd\u6570\u5f0f\u7ec4\u4ef6\u80fd\u591f\u4f7f\u7528ref\uff09.md",title:"React-56\uff1aRefHook\uff08\u8ba9\u51fd\u6570\u5f0f\u7ec4\u4ef6\u80fd\u591f\u4f7f\u7528ref\uff09",description:"\u521b\u5efaref",date:"2021-04-28T00:00:00.000Z",formattedDate:"2021\u5e744\u670828\u65e5",tags:[{label:"React",permalink:"/blog/tags/react"}],readingTime:.055,hasTruncateMarker:!1,authors:[],frontMatter:{title:"React-56\uff1aRefHook\uff08\u8ba9\u51fd\u6570\u5f0f\u7ec4\u4ef6\u80fd\u591f\u4f7f\u7528ref\uff09",date:"2021-04-28T00:00:00.000Z",categories:"React",tags:["React"]},prevItem:{title:"React-55\uff1aEffectHook\uff08\u8ba9\u51fd\u6570\u5f0f\u7ec4\u4ef6\u80fd\u591f\u4f7f\u7528\u751f\u547d\u5468\u671f\u94a9\u5b50\uff09",permalink:"/blog/React-55\uff1aEffectHook\uff08\u8ba9\u51fd\u6570\u5f0f\u7ec4\u4ef6\u80fd\u591f\u4f7f\u7528\u751f\u547d\u5468\u671f\u94a9\u5b50\uff09"},nextItem:{title:"JS\u4e2dimport\u65f6\u4ec0\u4e48\u65f6\u5019\u5141\u8bb8\u81ea\u5b9a\u4e49\u547d\u540d\uff0c\u4ec0\u4e48\u65f6\u5019\u4e0d\u5141\u8bb8\u81ea\u5b9a\u4e49\u547d\u540d",permalink:"/blog/JS\u4e2dimport\u65f6\u4ec0\u4e48\u65f6\u5019\u5141\u8bb8\u81ea\u5b9a\u4e49\u547d\u540d\uff0c\u4ec0\u4e48\u65f6\u5019\u4e0d\u5141\u8bb8\u81ea\u5b9a\u4e49\u547d\u540d"}},l={authorsImageUrls:[]},p=[{value:"\u521b\u5efaref",id:"\u521b\u5efaref",level:2},{value:"\u4f7f\u7528ref",id:"\u4f7f\u7528ref",level:2}],f={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u521b\u5efaref"},"\u521b\u5efaref"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/08e411d5c8e9cb2ced3b7c5a7451009a.png",alt:null})),(0,a.kt)("h2",{id:"\u4f7f\u7528ref"},"\u4f7f\u7528ref"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/56d1a32c1705bb1678f0ba3994af3a2a.png",alt:null}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/4af93d907edb7c87de5f89f907c4e2ab.png",alt:null})))}m.isMDXComponent=!0}}]);