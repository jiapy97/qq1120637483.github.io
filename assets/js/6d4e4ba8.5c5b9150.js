"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[33570],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(r),f=a,g=s["".concat(l,".").concat(f)]||s[f]||m[f]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},94405:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"ES6\u2014\u201422\uff1aObject.defineProperty()\u65b9\u6cd5",date:new Date("2021-03-16T00:00:00.000Z"),categories:"ES6",tags:["ES6"]},i=void 0,c={permalink:"/blog/ES6\u2014\u201422\uff1aObject.defineProperty()\u65b9\u6cd5",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/ES6\u2014\u201422\uff1aObject.defineProperty()\u65b9\u6cd5.md",source:"@site/blog\\ES6\u2014\u201422\uff1aObject.defineProperty()\u65b9\u6cd5.md",title:"ES6\u2014\u201422\uff1aObject.defineProperty()\u65b9\u6cd5",description:"\u57fa\u672c\u53c2\u6570",date:"2021-03-16T00:00:00.000Z",formattedDate:"2021\u5e743\u670816\u65e5",tags:[{label:"ES6",permalink:"/blog/tags/es-6"}],readingTime:.32,hasTruncateMarker:!1,authors:[],frontMatter:{title:"ES6\u2014\u201422\uff1aObject.defineProperty()\u65b9\u6cd5",date:"2021-03-16T00:00:00.000Z",categories:"ES6",tags:["ES6"]},prevItem:{title:"ES6\u2014\u201421\uff1atrim()\u65b9\u6cd5\u53bb\u9664\u5b57\u7b26\u4e32\u4e24\u4fa7\u7a7a\u683c",permalink:"/blog/ES6\u2014\u201421\uff1atrim()\u65b9\u6cd5\u53bb\u9664\u5b57\u7b26\u4e32\u4e24\u4fa7\u7a7a\u683c"},nextItem:{title:"ES6\u2014\u201423\uff1a\u51fd\u6570\u7684\u5b9a\u4e49\u65b9\u5f0f",permalink:"/blog/ES6\u2014\u201423\uff1a\u51fd\u6570\u7684\u5b9a\u4e49\u65b9\u5f0f"}},l={authorsImageUrls:[]},p=[{value:"\u57fa\u672c\u53c2\u6570",id:"\u57fa\u672c\u53c2\u6570",level:2},{value:"\u7528\u6cd5\u5b9e\u4f8b",id:"\u7528\u6cd5\u5b9e\u4f8b",level:2}],u={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u57fa\u672c\u53c2\u6570"},"\u57fa\u672c\u53c2\u6570"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/67df5925a84cbb80d8fe440e89d1b979.png",alt:null}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/c7e1f0729cc8dd6d9b66bc415c68d67b.png",alt:null})),(0,a.kt)("h2",{id:"\u7528\u6cd5\u5b9e\u4f8b"},"\u7528\u6cd5\u5b9e\u4f8b"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/4eadef9927299210e7eb8c2140c31cd3.png",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"enumerable: true  \u4f1a\u4f7f\u5f97\u8bbe\u7f6e\u7684\u8fd9\u4e2a\u53c2\u6570\u80fd\u591f\u88ab\u904d\u5386\u5230\uff0c\u53cd\u4e4b\u4e0d\u80fd\u88ab\u904d\u5386\u5230"),(0,a.kt)("li",{parentName:"ul"},"configurable: true \u4f1a\u4f7f\u5f97\u8bbe\u7f6e\u7684\u8fd9\u4e2a\u53c2\u6570\u7684\u5c5e\u6027\u4e0d\u80fd\u88ab\u5220\u9664\uff0c\u9ed8\u8ba4\u4e3afalse")))}m.isMDXComponent=!0}}]);