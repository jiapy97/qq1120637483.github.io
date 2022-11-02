"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[61460],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),f=a,g=s["".concat(c,".").concat(f)]||s[f]||m[f]||o;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},98886:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"ES6\u2014\u201405\uff1a\u5229\u7528\u6784\u9020\u51fd\u6570\u521b\u5efa\u5bf9\u8c61",date:new Date("2021-03-12T00:00:00.000Z"),categories:"ES6",tags:["ES6"]},l=void 0,i={permalink:"/blog/ES6\u2014\u201405\uff1a\u5229\u7528\u6784\u9020\u51fd\u6570\u521b\u5efa\u5bf9\u8c61",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/ES6\u2014\u201405\uff1a\u5229\u7528\u6784\u9020\u51fd\u6570\u521b\u5efa\u5bf9\u8c61.md",source:"@site/blog\\ES6\u2014\u201405\uff1a\u5229\u7528\u6784\u9020\u51fd\u6570\u521b\u5efa\u5bf9\u8c61.md",title:"ES6\u2014\u201405\uff1a\u5229\u7528\u6784\u9020\u51fd\u6570\u521b\u5efa\u5bf9\u8c61",description:"\u57fa\u672c\u5b9e\u4f8b",date:"2021-03-12T00:00:00.000Z",formattedDate:"2021\u5e743\u670812\u65e5",tags:[{label:"ES6",permalink:"/blog/tags/es-6"}],readingTime:1.06,hasTruncateMarker:!1,authors:[],frontMatter:{title:"ES6\u2014\u201405\uff1a\u5229\u7528\u6784\u9020\u51fd\u6570\u521b\u5efa\u5bf9\u8c61",date:"2021-03-12T00:00:00.000Z",categories:"ES6",tags:["ES6"]},prevItem:{title:"ES6\u2014\u201404\uff1a\u4f7f\u7528\u7c7b\u65f6\u6ce8\u610f\u4e8b\u9879",permalink:"/blog/ES6\u2014\u201404\uff1a\u4f7f\u7528\u7c7b\u65f6\u6ce8\u610f\u4e8b\u9879"},nextItem:{title:"ES6\u2014\u201406\uff1a\u6784\u9020\u51fd\u6570\u539f\u578b\u5bf9\u8c61prototype",permalink:"/blog/ES6\u2014\u201406\uff1a\u6784\u9020\u51fd\u6570\u539f\u578b\u5bf9\u8c61prototype"}},c={authorsImageUrls:[]},p=[{value:"\u57fa\u672c\u5b9e\u4f8b",id:"\u57fa\u672c\u5b9e\u4f8b",level:2},{value:"new\u5728\u6267\u884c\u7684\u65f6\u5019\u53d1\u751f\u7684\u56db\u4ef6\u4e8b\u60c5",id:"new\u5728\u6267\u884c\u7684\u65f6\u5019\u53d1\u751f\u7684\u56db\u4ef6\u4e8b\u60c5",level:2},{value:"\u9759\u6001\u6210\u5458\u4e0e\u5b9e\u4f8b\u6210\u5458",id:"\u9759\u6001\u6210\u5458\u4e0e\u5b9e\u4f8b\u6210\u5458",level:2},{value:"\u7ed9\u6784\u9020\u51fd\u6570\u6dfb\u52a0\u9759\u6001\u6210\u5458\u5e76\u8c03\u7528",id:"\u7ed9\u6784\u9020\u51fd\u6570\u6dfb\u52a0\u9759\u6001\u6210\u5458\u5e76\u8c03\u7528",level:2}],u={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u57fa\u672c\u5b9e\u4f8b"},"\u57fa\u672c\u5b9e\u4f8b"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/93b24155fd699d209537e38ae3798638.png",alt:null})),(0,a.kt)("h2",{id:"new\u5728\u6267\u884c\u7684\u65f6\u5019\u53d1\u751f\u7684\u56db\u4ef6\u4e8b\u60c5"},"new\u5728\u6267\u884c\u7684\u65f6\u5019\u53d1\u751f\u7684\u56db\u4ef6\u4e8b\u60c5"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728\u5185\u5b58\u4e2d\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u7a7a\u5bf9\u8c61\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8ba9this\u6307\u5411\u8fd9\u4e2a\u65b0\u7684\u5bf9\u8c61\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6267\u884c\u6784\u9020\u51fd\u6570\u91cc\u9762\u7684\u4ee3\u7801\uff0c\u7ed9\u8fd9\u4e2a\u65b0\u5bf9\u8c61\u6dfb\u52a0\u5c5e\u6027\u548c\u65b9\u6cd5\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8fd4\u56de\u8fd9\u4e2a\u65b0\u5bf9\u8c61\u3002")),(0,a.kt)("h2",{id:"\u9759\u6001\u6210\u5458\u4e0e\u5b9e\u4f8b\u6210\u5458"},"\u9759\u6001\u6210\u5458\u4e0e\u5b9e\u4f8b\u6210\u5458"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4ec0\u4e48\u662f\u6210\u5458\uff1f\n\u7b54\uff1a\u5728\u6784\u9020\u51fd\u6570\u4e2d\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\u6211\u4eec\u79f0\u4e4b\u4e3a\u6210\u5458\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4ec0\u4e48\u662f\u5b9e\u4f8b\u6210\u5458\uff1f\n\u7b54\uff1a\u5b9e\u4f8b\u6210\u5458\u5c31\u662f\u6784\u9020\u51fd\u6570\u5185\u90e8\u901a\u8fc7this\u6dfb\u52a0\u7684\u6210\u5458\u3002\u5b9e\u4f8b\u6210\u5458\u53ea\u80fd\u901a\u8fc7\u5b9e\u4f8b\u5316\u7684\u5bf9\u8c61\u6765\u8bbf\u95ee\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4ec0\u4e48\u662f\u9759\u6001\u6210\u5458\uff1f\n\u7b54\uff1a\u5728\u6784\u9020\u51fd\u6570\u672c\u8eab\u4e0a\u6dfb\u52a0\u7684\u6210\u5458\u3002\u9759\u6001\u6210\u5458\u53ea\u80fd\u901a\u8fc7\u6784\u9020\u51fd\u6570\u6765\u8bbf\u95ee\u3002")),(0,a.kt)("h2",{id:"\u7ed9\u6784\u9020\u51fd\u6570\u6dfb\u52a0\u9759\u6001\u6210\u5458\u5e76\u8c03\u7528"},"\u7ed9\u6784\u9020\u51fd\u6570\u6dfb\u52a0\u9759\u6001\u6210\u5458\u5e76\u8c03\u7528"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/e606b0729bbcd0b5ef6c1c4807c7fea8.png",alt:null})))}m.isMDXComponent=!0}}]);