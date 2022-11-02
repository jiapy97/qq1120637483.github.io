"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[38034],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=p(n),u=a,d=g["".concat(o,".").concat(u)]||g[u]||m[u]||l;return n?r.createElement(d,c(c({ref:t},s),{},{components:n})):r.createElement(d,c({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=g;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<l;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3327:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"ES6\u2014\u201424\uff1a\u51fd\u6570\u7684\u8c03\u7528\u65b9\u5f0f",date:new Date("2021-03-16T00:00:00.000Z"),categories:"ES6",tags:["ES6"]},c=void 0,i={permalink:"/blog/ES6\u2014\u201424\uff1a\u51fd\u6570\u7684\u8c03\u7528\u65b9\u5f0f",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/ES6\u2014\u201424\uff1a\u51fd\u6570\u7684\u8c03\u7528\u65b9\u5f0f.md",source:"@site/blog/ES6\u2014\u201424\uff1a\u51fd\u6570\u7684\u8c03\u7528\u65b9\u5f0f.md",title:"ES6\u2014\u201424\uff1a\u51fd\u6570\u7684\u8c03\u7528\u65b9\u5f0f",description:"1\uff1a\u666e\u901a\u51fd\u6570",date:"2021-03-16T00:00:00.000Z",formattedDate:"2021\u5e743\u670816\u65e5",tags:[{label:"ES6",permalink:"/blog/tags/es-6"}],readingTime:.235,hasTruncateMarker:!1,authors:[],frontMatter:{title:"ES6\u2014\u201424\uff1a\u51fd\u6570\u7684\u8c03\u7528\u65b9\u5f0f",date:"2021-03-16T00:00:00.000Z",categories:"ES6",tags:["ES6"]},prevItem:{title:"ES6\u2014\u201424\uff1a\u51fd\u6570\u5185\u90e8\u7684this\u6307\u5411",permalink:"/blog/ES6\u2014\u201424\uff1a\u51fd\u6570\u5185\u90e8\u7684this\u6307\u5411"},nextItem:{title:"ES6\u2014\u201425\uff1a\u51fd\u6570\u5185\u90e8this\u6307\u5411\u7684\u4e09\u79cd\u65b9\u6cd5",permalink:"/blog/ES6\u2014\u201425\uff1a\u51fd\u6570\u5185\u90e8this\u6307\u5411\u7684\u4e09\u79cd\u65b9\u6cd5"}},o={authorsImageUrls:[]},p=[{value:"1\uff1a\u666e\u901a\u51fd\u6570",id:"1\u666e\u901a\u51fd\u6570",level:2},{value:"2\uff1a\u5bf9\u8c61\u65b9\u6cd5",id:"2\u5bf9\u8c61\u65b9\u6cd5",level:2},{value:"3\uff1a\u6784\u9020\u51fd\u6570",id:"3\u6784\u9020\u51fd\u6570",level:2},{value:"4\uff1a\u7ed1\u5b9a\u4e8b\u4ef6\u51fd\u6570",id:"4\u7ed1\u5b9a\u4e8b\u4ef6\u51fd\u6570",level:2},{value:"5\uff1a\u5b9a\u65f6\u5668\u51fd\u6570",id:"5\u5b9a\u65f6\u5668\u51fd\u6570",level:2},{value:"6\uff1a\u7acb\u5373\u6267\u884c\u51fd\u6570",id:"6\u7acb\u5373\u6267\u884c\u51fd\u6570",level:2}],s={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\u666e\u901a\u51fd\u6570"},"1\uff1a\u666e\u901a\u51fd\u6570"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/cd3d8089a3c71b2ee1764dd1ebb065c3.png",alt:null})),(0,a.kt)("h2",{id:"2\u5bf9\u8c61\u65b9\u6cd5"},"2\uff1a\u5bf9\u8c61\u65b9\u6cd5"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/578acc5e73583e5998bae6bd1cacb11b.png",alt:null})),(0,a.kt)("h2",{id:"3\u6784\u9020\u51fd\u6570"},"3\uff1a\u6784\u9020\u51fd\u6570"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/e90f8727cdf7b37f8adc4b3484e09587.png",alt:null})),(0,a.kt)("h2",{id:"4\u7ed1\u5b9a\u4e8b\u4ef6\u51fd\u6570"},"4\uff1a\u7ed1\u5b9a\u4e8b\u4ef6\u51fd\u6570"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/2377985caac537c222c26567b4b31eca.png",alt:null})),(0,a.kt)("h2",{id:"5\u5b9a\u65f6\u5668\u51fd\u6570"},"5\uff1a\u5b9a\u65f6\u5668\u51fd\u6570"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/8d71fc4dbbbc3890f78a57b35bdf7e53.png",alt:null})),(0,a.kt)("h2",{id:"6\u7acb\u5373\u6267\u884c\u51fd\u6570"},"6\uff1a\u7acb\u5373\u6267\u884c\u51fd\u6570"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/5f833691cc7fa7d18804ce56d0eb00fb.png",alt:null})))}m.isMDXComponent=!0}}]);