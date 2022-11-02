"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[43177],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,g=m["".concat(o,".").concat(f)]||m[f]||s[f]||l;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},32754:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={title:"React-07\uff1a\u7c7b\u5f0f\u7ec4\u4ef6",date:new Date("2021-04-05T00:00:00.000Z"),categories:"React",tags:["React"]},i=void 0,c={permalink:"/blog/React-07\uff1a\u7c7b\u5f0f\u7ec4\u4ef6",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/React-07\uff1a\u7c7b\u5f0f\u7ec4\u4ef6.md",source:"@site/blog/React-07\uff1a\u7c7b\u5f0f\u7ec4\u4ef6.md",title:"React-07\uff1a\u7c7b\u5f0f\u7ec4\u4ef6",description:"\u521b\u5efa\u7c7b\u7ec4\u4ef6",date:"2021-04-05T00:00:00.000Z",formattedDate:"2021\u5e744\u67085\u65e5",tags:[{label:"React",permalink:"/blog/tags/react"}],readingTime:.4,hasTruncateMarker:!1,authors:[],frontMatter:{title:"React-07\uff1a\u7c7b\u5f0f\u7ec4\u4ef6",date:"2021-04-05T00:00:00.000Z",categories:"React",tags:["React"]},prevItem:{title:"React-06\uff1a\u51fd\u6570\u5f0f\u7ec4\u4ef6",permalink:"/blog/React-06\uff1a\u51fd\u6570\u5f0f\u7ec4\u4ef6"},nextItem:{title:"JS\u6587\u4ef6\u901a\u8fc7Node\u8fd0\u884c\u548cHTML\u6587\u4ef6\u7684script\u6807\u7b7e\u8fd0\u884c\u4e0d\u4e00\u81f4\u7684\u539f\u56e0",permalink:"/blog/JS\u6587\u4ef6\u901a\u8fc7Node\u8fd0\u884c\u548cHTML\u6587\u4ef6\u7684script\u6807\u7b7e\u8fd0\u884c\u4e0d\u4e00\u81f4\u7684\u539f\u56e0"}},o={authorsImageUrls:[]},p=[{value:"\u521b\u5efa\u7c7b\u7ec4\u4ef6",id:"\u521b\u5efa\u7c7b\u7ec4\u4ef6",level:2},{value:"\u6e32\u67d3\u7c7b\u7ec4\u4ef6\u5230\u9875\u9762",id:"\u6e32\u67d3\u7c7b\u7ec4\u4ef6\u5230\u9875\u9762",level:2},{value:"\u7c7b\u7ec4\u4ef6\u4e2d\u7684this\u6307\u5411\u7684\u662f\u8c01\uff1f",id:"\u7c7b\u7ec4\u4ef6\u4e2d\u7684this\u6307\u5411\u7684\u662f\u8c01",level:2}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u521b\u5efa\u7c7b\u7ec4\u4ef6"},"\u521b\u5efa\u7c7b\u7ec4\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u7ec4\u4ef6\u5fc5\u987b\u7ee7\u627fReact.Component"),(0,a.kt)("li",{parentName:"ul"},"\u5fc5\u987b\u6709render\u51fd\u6570"),(0,a.kt)("li",{parentName:"ul"},"render\u51fd\u6570\u4e2d\u5fc5\u987b\u6709return\n",(0,a.kt)("img",{parentName:"li",src:"https://img-blog.csdnimg.cn/img_convert/c5321911639db9590003d5039727b11d.png",alt:null}))),(0,a.kt)("h2",{id:"\u6e32\u67d3\u7c7b\u7ec4\u4ef6\u5230\u9875\u9762"},"\u6e32\u67d3\u7c7b\u7ec4\u4ef6\u5230\u9875\u9762"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u6807\u7b7e\n",(0,a.kt)("img",{parentName:"li",src:"https://img-blog.csdnimg.cn/img_convert/e02766799a357ee12f0cc476201de6bf.png",alt:null}))),(0,a.kt)("h2",{id:"\u7c7b\u7ec4\u4ef6\u4e2d\u7684this\u6307\u5411\u7684\u662f\u8c01"},"\u7c7b\u7ec4\u4ef6\u4e2d\u7684this\u6307\u5411\u7684\u662f\u8c01\uff1f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u7ec4\u4ef6\u4e2d\u7684this\u6307\u7684\u662f\u8fd9\u4e2a\u7c7b\u7ec4\u4ef6\u7684\u5b9e\u4f8b\u5bf9\u8c61\n",(0,a.kt)("img",{parentName:"li",src:"https://img-blog.csdnimg.cn/img_convert/96b38af6bc32f0d8aca0211f5fc4bf1e.png",alt:null}))))}s.isMDXComponent=!0}}]);