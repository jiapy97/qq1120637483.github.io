"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[58624],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),f=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=f(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=f(r),m=o,d=s["".concat(i,".").concat(m)]||s[m]||u[m]||a;return r?n.createElement(d,c(c({ref:t},p),{},{components:r})):n.createElement(d,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=s;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var f=2;f<a;f++)c[f]=r[f];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},39271:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>f});var n=r(87462),o=(r(67294),r(3905));const a={title:"React-55\uff1aEffectHook\uff08\u8ba9\u51fd\u6570\u5f0f\u7ec4\u4ef6\u80fd\u591f\u4f7f\u7528\u751f\u547d\u5468\u671f\u94a9\u5b50\uff09",date:new Date("2021-04-28T00:00:00.000Z"),categories:"React",tags:["React"]},c=void 0,l={permalink:"/blog/React-55\uff1aEffectHook\uff08\u8ba9\u51fd\u6570\u5f0f\u7ec4\u4ef6\u80fd\u591f\u4f7f\u7528\u751f\u547d\u5468\u671f\u94a9\u5b50\uff09",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/React-55\uff1aEffectHook\uff08\u8ba9\u51fd\u6570\u5f0f\u7ec4\u4ef6\u80fd\u591f\u4f7f\u7528\u751f\u547d\u5468\u671f\u94a9\u5b50\uff09.md",source:"@site/blog\\React-55\uff1aEffectHook\uff08\u8ba9\u51fd\u6570\u5f0f\u7ec4\u4ef6\u80fd\u591f\u4f7f\u7528\u751f\u547d\u5468\u671f\u94a9\u5b50\uff09.md",title:"React-55\uff1aEffectHook\uff08\u8ba9\u51fd\u6570\u5f0f\u7ec4\u4ef6\u80fd\u591f\u4f7f\u7528\u751f\u547d\u5468\u671f\u94a9\u5b50\uff09",description:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528EffectHook?",date:"2021-04-28T00:00:00.000Z",formattedDate:"2021\u5e744\u670828\u65e5",tags:[{label:"React",permalink:"/blog/tags/react"}],readingTime:1.175,hasTruncateMarker:!1,authors:[],frontMatter:{title:"React-55\uff1aEffectHook\uff08\u8ba9\u51fd\u6570\u5f0f\u7ec4\u4ef6\u80fd\u591f\u4f7f\u7528\u751f\u547d\u5468\u671f\u94a9\u5b50\uff09",date:"2021-04-28T00:00:00.000Z",categories:"React",tags:["React"]},prevItem:{title:"React-54\uff1astateHook\uff08\u8ba9\u51fd\u6570\u5f0f\u7ec4\u4ef6\u80fd\u591f\u4f7f\u7528state\uff09",permalink:"/blog/React-54\uff1astateHook\uff08\u8ba9\u51fd\u6570\u5f0f\u7ec4\u4ef6\u80fd\u591f\u4f7f\u7528state\uff09"},nextItem:{title:"React-56\uff1aRefHook\uff08\u8ba9\u51fd\u6570\u5f0f\u7ec4\u4ef6\u80fd\u591f\u4f7f\u7528ref\uff09",permalink:"/blog/React-56\uff1aRefHook\uff08\u8ba9\u51fd\u6570\u5f0f\u7ec4\u4ef6\u80fd\u591f\u4f7f\u7528ref\uff09"}},i={authorsImageUrls:[]},f=[{value:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528EffectHook?",id:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528effecthook",level:2},{value:"\u6838\u5fc3\u51fd\u6570\uff1auseEffect\uff08\u63a5\u6536\u4e24\u4e2a\u53c2\u6570\uff09",id:"\u6838\u5fc3\u51fd\u6570useeffect\u63a5\u6536\u4e24\u4e2a\u53c2\u6570",level:2}],p={toc:f};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528effecthook"},"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528EffectHook?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u56e0\u4e3a\u5728\u51fd\u6570\u5f0f\u7ec4\u4ef6\u4e2d\u65e0\u6cd5\u4f7f\u7528\u751f\u547d\u5468\u671f\u94a9\u5b50\u7684\uff0c\u4f8b\u5982\uff1acomponentDidMount\u8fd9\u4e2a\u751f\u547d\u5468\u671f\u94a9\u5b50\uff0c\u901a\u8fc7\u8fd9\u4e2aHook\u53ef\u4ee5\u8ba9\u6211\u4eec\u5728\u51fd\u6570\u5f0f\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u751f\u547d\u5468\u671f\u94a9\u5b50\u3002")),(0,o.kt)("h2",{id:"\u6838\u5fc3\u51fd\u6570useeffect\u63a5\u6536\u4e24\u4e2a\u53c2\u6570"},"\u6838\u5fc3\u51fd\u6570\uff1auseEffect\uff08\u63a5\u6536\u4e24\u4e2a\u53c2\u6570\uff09"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u4e2a\u53c2\u6570\uff1a\u662f\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\n\u8fd9\u4e2a\u56de\u8c03\u51fd\u6570\u76f8\u5f53\u4e8e\u662fcomponentDidMount\uff0c\u8fd9\u4e2a\u56de\u8c03\u51fd\u6570\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\uff0c\u8fd4\u56de\u7684\u8fd9\u4e2a\u56de\u8c03\u51fd\u6570\u5219\u662f\u76f8\u5f53\u4e8ecomponentWillUnmount\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4ee3\u8868\u7740\u76d1\u63a7\u8c01\uff0c\u4e00\u65e6\u76d1\u63a7\u7684\u5bf9\u8c61\u53d1\u751f\u4e86\u53d8\u5316\uff0c\u5219\u8981\u8c03\u7528\u7b2c\u4e00\u4e2a\u53c2\u6570\u91cc\u7684\u56de\u8c03\u51fd\u6570\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e0d\u5199\u4ee3\u8868\u76d1\u63a7\u6240\u6709\u7684\u72b6\u6001\uff0c\u5199\u8c01\u4ee3\u8868\u76d1\u63a7\u8c01\uff0c\u6240\u4ee5\u5728\u4e0b\u9762\u7684\u6848\u4f8b\u4e2d\uff0c\u4f20\u5165\u7684\u662f\u4e00\u4e2a\u7a7a\u6570\u7ec4\uff0c\u4ee3\u8868\u8c01\u4e5f\u4e0d\u76d1\u63a7\uff0c\u8fd9\u5c31\u5b9e\u73b0\u4e86\u7b2c\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u7684componentDidMount\u7684\u4f5c\u7528\u3002\n",(0,o.kt)("img",{parentName:"li",src:"https://img-blog.csdnimg.cn/img_convert/43d6129389fa3d402bd0b73896d77fe4.png",alt:null}))))}u.isMDXComponent=!0}}]);