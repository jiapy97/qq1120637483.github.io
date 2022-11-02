"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[18394],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=l(r),y=p,d=m["".concat(c,".").concat(y)]||m[y]||u[y]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function y(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=r.length,i=new Array(a);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:p,i[1]=o;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},16976:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=r(87462),p=(r(67294),r(3905));const a={title:"TypeScript\u4ecb\u7ecd--(TypeScript 01)",date:"2021-7-20",author:"Justin",top:!1,cover:!1,categories:"TypeScript",tags:["TypeScript"]},i=void 0,o={permalink:"/blog/TypeScript\u4ecb\u7ecd--(TypeScript 01)",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/TypeScript\u4ecb\u7ecd--(TypeScript 01).md",source:"@site/blog/TypeScript\u4ecb\u7ecd--(TypeScript 01).md",title:"TypeScript\u4ecb\u7ecd--(TypeScript 01)",description:"TypeScript\u7684\u4e94\u4e2a\u7279\u70b9",date:"2021-07-20T00:00:00.000Z",formattedDate:"2021\u5e747\u670820\u65e5",tags:[{label:"TypeScript",permalink:"/blog/tags/type-script"}],readingTime:.985,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"TypeScript\u4ecb\u7ecd--(TypeScript 01)",date:"2021-7-20",author:"Justin",top:!1,cover:!1,categories:"TypeScript",tags:["TypeScript"]},prevItem:{title:"LeetCode\u2014\u2014\u5b57\u7b26\u4e32\u76f8\u52a0\uff08JS\u5b9e\u73b0\uff09",permalink:"/blog/LeetCode\u2014\u2014\u5b57\u7b26\u4e32\u76f8\u52a0\uff08JS\u5b9e\u73b0\uff09"},nextItem:{title:"\u8fd9\u4e00\u6b21\uff0c\u5f7b\u5e95\u641e\u61c2React\u751f\u547d\u5468\u671f",permalink:"/blog/\u8fd9\u4e00\u6b21\uff0c\u5f7b\u5e95\u641e\u61c2React\u751f\u547d\u5468\u671f"}},c={authorsImageUrls:[void 0]},l=[{value:"TypeScript\u7684\u4e94\u4e2a\u7279\u70b9",id:"typescript\u7684\u4e94\u4e2a\u7279\u70b9",level:2},{value:"\u5168\u5c40\u5b89\u88c5TS",id:"\u5168\u5c40\u5b89\u88c5ts",level:2},{value:"\u5c06TS\u6587\u4ef6\u7f16\u8bd1\u4e3aJS\u6587\u4ef6",id:"\u5c06ts\u6587\u4ef6\u7f16\u8bd1\u4e3ajs\u6587\u4ef6",level:2},{value:"\u4e3a\u4ec0\u4e48\u8bf4TS\u662f\u9759\u6001\u7c7b\u578b\uff0cJS\u662f\u52a8\u6001\u7c7b\u578b\uff1f",id:"\u4e3a\u4ec0\u4e48\u8bf4ts\u662f\u9759\u6001\u7c7b\u578bjs\u662f\u52a8\u6001\u7c7b\u578b",level:2}],s={toc:l};function u(e){let{components:t,...r}=e;return(0,p.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"typescript\u7684\u4e94\u4e2a\u7279\u70b9"},"TypeScript\u7684\u4e94\u4e2a\u7279\u70b9"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"TS\u662f\u7531\u5fae\u8f6f\u5f00\u53d1\u7684\u5f00\u6e90\u7f16\u7a0b\u8bed\u8a00\u3002"),(0,p.kt)("li",{parentName:"ol"},"TS\u662fJS\u7684\u8d85\u96c6\u3002\uff08\u6240\u8c13\u7684\u8d85\u96c6\u662f\u6307\u517c\u5bb9\u4e86\u6240\u6709\u7684\u7279\u6027\uff09"),(0,p.kt)("li",{parentName:"ol"},"TS\u662f\u5f00\u53d1\u5927\u578b\u5e94\u7528\u7684\u57fa\u77f3\u3002"),(0,p.kt)("li",{parentName:"ol"},"TS\u63d0\u4f9b\u4e86\u66f4\u52a0\u4e30\u5bcc\u7684\u8bed\u6cd5\u63d0\u793a\u3002"),(0,p.kt)("li",{parentName:"ol"},"TS\u5728\u7f16\u5199\u9636\u6bb5\u80fd\u591f\u68c0\u67e5\u9519\u8bef\u3002")),(0,p.kt)("h2",{id:"\u5168\u5c40\u5b89\u88c5ts"},"\u5168\u5c40\u5b89\u88c5TS"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"npm install typescript -g\n")),(0,p.kt)("h2",{id:"\u5c06ts\u6587\u4ef6\u7f16\u8bd1\u4e3ajs\u6587\u4ef6"},"\u5c06TS\u6587\u4ef6\u7f16\u8bd1\u4e3aJS\u6587\u4ef6"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"tsc index.ts\n")),(0,p.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u8bf4ts\u662f\u9759\u6001\u7c7b\u578bjs\u662f\u52a8\u6001\u7c7b\u578b"},"\u4e3a\u4ec0\u4e48\u8bf4TS\u662f\u9759\u6001\u7c7b\u578b\uff0cJS\u662f\u52a8\u6001\u7c7b\u578b\uff1f"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u5728JS\u4e2d\u7ed9\u4e00\u4e2a\u5b57\u7b26\u4e32\u53d8\u91cf\u8d4b\u503c\u4e3anumber\u662f\u53ef\u4ee5\u7684\uff0c\u4f46\u662f\u5728TS\u4e2d\u5219\u4e0d\u884c\uff0c\u8fd9\u53ef\u4ee5\u7406\u89e3\u4e3a\u4e3a\u4ec0\u4e48\u8bf4TS\u662f\u9759\u6001\u7684\uff0cJS\u662f\u52a8\u6001\u7684\u3002\u53ef\u4ee5\u7406\u89e3\u4e3aTS\u4e2d\u7c7b\u578b\u662f\u4e00\u65e6\u786e\u5b9a\u4e0b\u6765\u65e0\u6cd5\u66f4\u6539\uff0cJS\u5219\u4e0d\u662f\u3002")),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/7eae35ed35d7d9cefc59bab3c1cca360.png",alt:"image.png"})))}u.isMDXComponent=!0}}]);