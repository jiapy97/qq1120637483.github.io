"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[18418],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,g=f["".concat(l,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},76469:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"ES6\u2014\u201433\uff1a\u89e3\u6784\u8d4b\u503c",date:new Date("2021-03-17T00:00:00.000Z"),categories:"ES6",tags:["ES6"]},i=void 0,c={permalink:"/blog/ES6\u2014\u201433\uff1a\u89e3\u6784\u8d4b\u503c",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/ES6\u2014\u201433\uff1a\u89e3\u6784\u8d4b\u503c.md",source:"@site/blog/ES6\u2014\u201433\uff1a\u89e3\u6784\u8d4b\u503c.md",title:"ES6\u2014\u201433\uff1a\u89e3\u6784\u8d4b\u503c",description:"\u6570\u7ec4\u89e3\u6784\u8d4b\u503c\u548c\u5bf9\u8c61\u89e3\u6784\u8d4b\u503c",date:"2021-03-17T00:00:00.000Z",formattedDate:"2021\u5e743\u670817\u65e5",tags:[{label:"ES6",permalink:"/blog/tags/es-6"}],readingTime:.075,hasTruncateMarker:!1,authors:[],frontMatter:{title:"ES6\u2014\u201433\uff1a\u89e3\u6784\u8d4b\u503c",date:"2021-03-17T00:00:00.000Z",categories:"ES6",tags:["ES6"]},prevItem:{title:"ES6\u2014\u201432\uff1a\u6d45\u62f7\u8d1d\u548c\u6df1\u62f7\u8d1d",permalink:"/blog/ES6\u2014\u201432\uff1a\u6d45\u62f7\u8d1d\u548c\u6df1\u62f7\u8d1d"},nextItem:{title:"ES6\u2014\u201434\uff1a\u5269\u4f59\u53c2\u6570",permalink:"/blog/ES6\u2014\u201434\uff1a\u5269\u4f59\u53c2\u6570"}},l={authorsImageUrls:[]},p=[{value:"\u6570\u7ec4\u89e3\u6784\u8d4b\u503c\u548c\u5bf9\u8c61\u89e3\u6784\u8d4b\u503c",id:"\u6570\u7ec4\u89e3\u6784\u8d4b\u503c\u548c\u5bf9\u8c61\u89e3\u6784\u8d4b\u503c",level:2}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u6570\u7ec4\u89e3\u6784\u8d4b\u503c\u548c\u5bf9\u8c61\u89e3\u6784\u8d4b\u503c"},"\u6570\u7ec4\u89e3\u6784\u8d4b\u503c\u548c\u5bf9\u8c61\u89e3\u6784\u8d4b\u503c"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/3e931a63f9fc64fddddd29bbebf4e02d.png",alt:null})))}s.isMDXComponent=!0}}]);