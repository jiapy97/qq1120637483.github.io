"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[39107],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=p(r),m=a,f=g["".concat(c,".").concat(m)]||g[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},82464:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={title:"ES6\u2014\u201438\uff1aString\u7684\u62d3\u5c55\u65b9\u6cd5",date:new Date("2021-03-17T00:00:00.000Z"),categories:"ES6",tags:["ES6"]},o=void 0,l={permalink:"/blog/ES6\u2014\u201438\uff1aString\u7684\u62d3\u5c55\u65b9\u6cd5",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/ES6\u2014\u201438\uff1aString\u7684\u62d3\u5c55\u65b9\u6cd5.md",source:"@site/blog\\ES6\u2014\u201438\uff1aString\u7684\u62d3\u5c55\u65b9\u6cd5.md",title:"ES6\u2014\u201438\uff1aString\u7684\u62d3\u5c55\u65b9\u6cd5",description:"startsWith()\u548cendsWith()\u65b9\u6cd5",date:"2021-03-17T00:00:00.000Z",formattedDate:"2021\u5e743\u670817\u65e5",tags:[{label:"ES6",permalink:"/blog/tags/es-6"}],readingTime:.205,hasTruncateMarker:!1,authors:[],frontMatter:{title:"ES6\u2014\u201438\uff1aString\u7684\u62d3\u5c55\u65b9\u6cd5",date:"2021-03-17T00:00:00.000Z",categories:"ES6",tags:["ES6"]},prevItem:{title:"ES6\u2014\u201437\uff1a\u6a21\u677f\u5b57\u7b26\u4e32",permalink:"/blog/ES6\u2014\u201437\uff1a\u6a21\u677f\u5b57\u7b26\u4e32"},nextItem:{title:"ES6\u2014\u201439\uff1aset\u6570\u636e\u7ed3\u6784",permalink:"/blog/ES6\u2014\u201439\uff1aset\u6570\u636e\u7ed3\u6784"}},c={authorsImageUrls:[]},p=[{value:"startsWith()\u548cendsWith()\u65b9\u6cd5",id:"startswith\u548cendswith\u65b9\u6cd5",level:2},{value:"repeat()\u65b9\u6cd5\uff1a\u8868\u793a\u5c06\u539f\u5b57\u7b26\u4e32\u91cd\u590dn\u6b21",id:"repeat\u65b9\u6cd5\u8868\u793a\u5c06\u539f\u5b57\u7b26\u4e32\u91cd\u590dn\u6b21",level:2}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"startswith\u548cendswith\u65b9\u6cd5"},"startsWith()\u548cendsWith()\u65b9\u6cd5"),(0,a.kt)("p",null,"\u5224\u65ad\u5b57\u7b26\u4e32\u662f\u5426\u5728\u539f\u5b57\u7b26\u4e32\u7684\u5934\u90e8\u6216\u5c3e\u90e8\u3002\n",(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/5ef45e5c0cdac64078445635abfdfaae.png",alt:null})),(0,a.kt)("h2",{id:"repeat\u65b9\u6cd5\u8868\u793a\u5c06\u539f\u5b57\u7b26\u4e32\u91cd\u590dn\u6b21"},"repeat()\u65b9\u6cd5\uff1a\u8868\u793a\u5c06\u539f\u5b57\u7b26\u4e32\u91cd\u590dn\u6b21"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/4c61b40ada639fc02b729baa3b5f68f4.png",alt:null})))}u.isMDXComponent=!0}}]);