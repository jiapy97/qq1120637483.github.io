"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[47369],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),f=n,g=m["".concat(i,".").concat(f)]||m[f]||u[f]||o;return r?a.createElement(g,c(c({ref:t},p),{},{components:r})):a.createElement(g,c({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var s=2;s<o;s++)c[s]=r[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},27407:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={title:"React-54\uff1astateHook\uff08\u8ba9\u51fd\u6570\u5f0f\u7ec4\u4ef6\u80fd\u591f\u4f7f\u7528state\uff09",date:new Date("2021-04-28T00:00:00.000Z"),categories:"React",tags:["React"]},c=void 0,l={permalink:"/blog/React-54\uff1astateHook\uff08\u8ba9\u51fd\u6570\u5f0f\u7ec4\u4ef6\u80fd\u591f\u4f7f\u7528state\uff09",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/React-54\uff1astateHook\uff08\u8ba9\u51fd\u6570\u5f0f\u7ec4\u4ef6\u80fd\u591f\u4f7f\u7528state\uff09.md",source:"@site/blog/React-54\uff1astateHook\uff08\u8ba9\u51fd\u6570\u5f0f\u7ec4\u4ef6\u80fd\u591f\u4f7f\u7528state\uff09.md",title:"React-54\uff1astateHook\uff08\u8ba9\u51fd\u6570\u5f0f\u7ec4\u4ef6\u80fd\u591f\u4f7f\u7528state\uff09",description:"\u4ec0\u4e48\u662fHook?",date:"2021-04-28T00:00:00.000Z",formattedDate:"2021\u5e744\u670828\u65e5",tags:[{label:"React",permalink:"/blog/tags/react"}],readingTime:.495,hasTruncateMarker:!1,authors:[],frontMatter:{title:"React-54\uff1astateHook\uff08\u8ba9\u51fd\u6570\u5f0f\u7ec4\u4ef6\u80fd\u591f\u4f7f\u7528state\uff09",date:"2021-04-28T00:00:00.000Z",categories:"React",tags:["React"]},prevItem:{title:"React-53\uff1a\u61d2\u52a0\u8f7d\u7684\u4f7f\u7528",permalink:"/blog/React-53\uff1a\u61d2\u52a0\u8f7d\u7684\u4f7f\u7528"},nextItem:{title:"React-55\uff1aEffectHook\uff08\u8ba9\u51fd\u6570\u5f0f\u7ec4\u4ef6\u80fd\u591f\u4f7f\u7528\u751f\u547d\u5468\u671f\u94a9\u5b50\uff09",permalink:"/blog/React-55\uff1aEffectHook\uff08\u8ba9\u51fd\u6570\u5f0f\u7ec4\u4ef6\u80fd\u591f\u4f7f\u7528\u751f\u547d\u5468\u671f\u94a9\u5b50\uff09"}},i={authorsImageUrls:[]},s=[{value:"\u4ec0\u4e48\u662fHook?",id:"\u4ec0\u4e48\u662fhook",level:2},{value:"\u4f7f\u7528useState",id:"\u4f7f\u7528usestate",level:2},{value:"\u4e24\u79cd\u6539\u53d8\u72b6\u6001\u7684\u5199\u6cd5",id:"\u4e24\u79cd\u6539\u53d8\u72b6\u6001\u7684\u5199\u6cd5",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u4ec0\u4e48\u662fhook"},"\u4ec0\u4e48\u662fHook?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Hook\u662fReact 16.8.0\u7248\u672c\u65b0\u589e\u7684\u65b0\u8bed\u6cd5"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u8ba9\u4f7f\u7528\u8005\u5728\u51fd\u6570\u7ec4\u4ef6\u4e2d\u4f7f\u7528state\u4ee5\u53ca\u5176\u4ed6\u7684react\u7279\u6027")),(0,n.kt)("h2",{id:"\u4f7f\u7528usestate"},"\u4f7f\u7528useState"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u6570\u7ec4\u7684\u89e3\u6784\u8d4b\u503c\uff0c\u6570\u7ec4\u7684\u89e3\u6784\u8d4b\u503c\u4e0d\u9700\u8981\u548c\u539f\u672c\u7684\u540d\u5b57\u4e00\u81f4\n",(0,n.kt)("img",{parentName:"li",src:"https://img-blog.csdnimg.cn/img_convert/33bab22e41ec3e3a9507ed92f0a77f27.png",alt:null})),(0,n.kt)("li",{parentName:"ul"},"0,'xidian'\u662f\u6211\u4eec\u7684\u521d\u59cb\u5316\u72b6\u6001\uff0csetXxx\u5219\u662f\u65b9\u6cd5")),(0,n.kt)("h2",{id:"\u4e24\u79cd\u6539\u53d8\u72b6\u6001\u7684\u5199\u6cd5"},"\u4e24\u79cd\u6539\u53d8\u72b6\u6001\u7684\u5199\u6cd5"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/5a1f1e2d4b8c03f3da687e33951ac67f.png",alt:null})))}u.isMDXComponent=!0}}]);