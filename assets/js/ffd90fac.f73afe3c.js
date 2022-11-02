"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[4286],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,g=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(g,c(c({ref:t},p),{},{components:n})):r.createElement(g,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<i;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},75170:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"React-10\uff1aReact\u7c7b\u4e2d\u81ea\u5b9a\u4e49\u65b9\u6cd5\u7684this\u6307\u5411",date:new Date("2021-04-06T00:00:00.000Z"),categories:"React",tags:["React"]},c=void 0,l={permalink:"/blog/React-10\uff1aReact\u7c7b\u4e2d\u81ea\u5b9a\u4e49\u65b9\u6cd5\u7684this\u6307\u5411",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/React-10\uff1aReact\u7c7b\u4e2d\u81ea\u5b9a\u4e49\u65b9\u6cd5\u7684this\u6307\u5411.md",source:"@site/blog/React-10\uff1aReact\u7c7b\u4e2d\u81ea\u5b9a\u4e49\u65b9\u6cd5\u7684this\u6307\u5411.md",title:"React-10\uff1aReact\u7c7b\u4e2d\u81ea\u5b9a\u4e49\u65b9\u6cd5\u7684this\u6307\u5411",description:"\u7c7b\u4e2d\u81ea\u5b9a\u4e49\u65b9\u6cd5\u7684this\u6307\u5411",date:"2021-04-06T00:00:00.000Z",formattedDate:"2021\u5e744\u67086\u65e5",tags:[{label:"React",permalink:"/blog/tags/react"}],readingTime:.82,hasTruncateMarker:!1,authors:[],frontMatter:{title:"React-10\uff1aReact\u7c7b\u4e2d\u81ea\u5b9a\u4e49\u65b9\u6cd5\u7684this\u6307\u5411",date:"2021-04-06T00:00:00.000Z",categories:"React",tags:["React"]},prevItem:{title:"React-09\uff1aReact\u4e2d\u7684\u4e8b\u4ef6\u7ed1\u5b9a",permalink:"/blog/React-09\uff1aReact\u4e2d\u7684\u4e8b\u4ef6\u7ed1\u5b9a"},nextItem:{title:"ERROR-Command `Install \u2018code\u2018 command in PATH` exited with status code 1",permalink:"/blog/ERROR-Command `Install \u2018code\u2018 command in PATH` exited with status code 1"}},o={authorsImageUrls:[]},s=[{value:"\u7c7b\u4e2d\u81ea\u5b9a\u4e49\u65b9\u6cd5\u7684this\u6307\u5411",id:"\u7c7b\u4e2d\u81ea\u5b9a\u4e49\u65b9\u6cd5\u7684this\u6307\u5411",level:2},{value:"bind\u65b9\u6cd5\u4e0d\u4ec5\u4ec5\u4fee\u6539\u4e86this\u6307\u5411\uff0c\u540c\u65f6\u5c06\u4fee\u6539\u5b8cthis\u6307\u5411\u7684\u51fd\u6570\u8fdb\u884c\u4e86\u8fd4\u56de\uff0c\u5373\u8fd4\u56de\u7684\u662f\u4e00\u4e2a\u51fd\u6570",id:"bind\u65b9\u6cd5\u4e0d\u4ec5\u4ec5\u4fee\u6539\u4e86this\u6307\u5411\u540c\u65f6\u5c06\u4fee\u6539\u5b8cthis\u6307\u5411\u7684\u51fd\u6570\u8fdb\u884c\u4e86\u8fd4\u56de\u5373\u8fd4\u56de\u7684\u662f\u4e00\u4e2a\u51fd\u6570",level:2},{value:"\u7c7b\u4e2d\u8d4b\u503c\u5f62\u5f0f\u7684\u5c5e\u6027\u662f\u5199\u5230\u5b9e\u4f8b\u5bf9\u8c61\u4e0a\u7684\uff0c\u800c\u65b9\u6cd5\u5219\u662f\u76f4\u63a5\u5199\u5230\u539f\u578b\u5bf9\u8c61\u4e2d\u7684",id:"\u7c7b\u4e2d\u8d4b\u503c\u5f62\u5f0f\u7684\u5c5e\u6027\u662f\u5199\u5230\u5b9e\u4f8b\u5bf9\u8c61\u4e0a\u7684\u800c\u65b9\u6cd5\u5219\u662f\u76f4\u63a5\u5199\u5230\u539f\u578b\u5bf9\u8c61\u4e2d\u7684",level:2},{value:"\u89e3\u51b3\u7ec4\u4ef6\u7c7b\u4e2d\u81ea\u5b9a\u4e49\u65b9\u6cd5\u7684this\u6307\u5411\u7684\u4e24\u79cd\u65b9\u6cd5",id:"\u89e3\u51b3\u7ec4\u4ef6\u7c7b\u4e2d\u81ea\u5b9a\u4e49\u65b9\u6cd5\u7684this\u6307\u5411\u7684\u4e24\u79cd\u65b9\u6cd5",level:2}],p={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u7c7b\u4e2d\u81ea\u5b9a\u4e49\u65b9\u6cd5\u7684this\u6307\u5411"},"\u7c7b\u4e2d\u81ea\u5b9a\u4e49\u65b9\u6cd5\u7684this\u6307\u5411"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/c984e5c8f231324cb1bf1abe0c6971cc.png",alt:null})),(0,a.kt)("h2",{id:"bind\u65b9\u6cd5\u4e0d\u4ec5\u4ec5\u4fee\u6539\u4e86this\u6307\u5411\u540c\u65f6\u5c06\u4fee\u6539\u5b8cthis\u6307\u5411\u7684\u51fd\u6570\u8fdb\u884c\u4e86\u8fd4\u56de\u5373\u8fd4\u56de\u7684\u662f\u4e00\u4e2a\u51fd\u6570"},"bind\u65b9\u6cd5\u4e0d\u4ec5\u4ec5\u4fee\u6539\u4e86this\u6307\u5411\uff0c\u540c\u65f6\u5c06\u4fee\u6539\u5b8cthis\u6307\u5411\u7684\u51fd\u6570\u8fdb\u884c\u4e86\u8fd4\u56de\uff0c\u5373\u8fd4\u56de\u7684\u662f\u4e00\u4e2a\u51fd\u6570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1a\u7c7b\u4e2d\u7684\u65b9\u6cd5\u662f\u653e\u5728\u539f\u578b\u5bf9\u8c61\u4e0a\u7684\n",(0,a.kt)("img",{parentName:"li",src:"https://img-blog.csdnimg.cn/img_convert/9e4fe20c0c42ccfeb6d1389242b88aa2.png",alt:null}),(0,a.kt)("img",{parentName:"li",src:"https://img-blog.csdnimg.cn/img_convert/33e8900a79205f27c5584d07790d12e7.png",alt:null}))),(0,a.kt)("h2",{id:"\u7c7b\u4e2d\u8d4b\u503c\u5f62\u5f0f\u7684\u5c5e\u6027\u662f\u5199\u5230\u5b9e\u4f8b\u5bf9\u8c61\u4e0a\u7684\u800c\u65b9\u6cd5\u5219\u662f\u76f4\u63a5\u5199\u5230\u539f\u578b\u5bf9\u8c61\u4e2d\u7684"},"\u7c7b\u4e2d\u8d4b\u503c\u5f62\u5f0f\u7684\u5c5e\u6027\u662f\u5199\u5230\u5b9e\u4f8b\u5bf9\u8c61\u4e0a\u7684\uff0c\u800c\u65b9\u6cd5\u5219\u662f\u76f4\u63a5\u5199\u5230\u539f\u578b\u5bf9\u8c61\u4e2d\u7684"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0b\u9762\u4e24\u79cd\u5199\u6cd5\uff0cstate\u548cdemo\u90fd\u662f\u76f4\u63a5\u5199\u5230\u5b9e\u4f8b\u5bf9\u8c61\u4e2d\u7684\u3002\n",(0,a.kt)("img",{parentName:"li",src:"https://img-blog.csdnimg.cn/img_convert/47b7750c8b6096f09293a5483f648621.png",alt:null}))),(0,a.kt)("h2",{id:"\u89e3\u51b3\u7ec4\u4ef6\u7c7b\u4e2d\u81ea\u5b9a\u4e49\u65b9\u6cd5\u7684this\u6307\u5411\u7684\u4e24\u79cd\u65b9\u6cd5"},"\u89e3\u51b3\u7ec4\u4ef6\u7c7b\u4e2d\u81ea\u5b9a\u4e49\u65b9\u6cd5\u7684this\u6307\u5411\u7684\u4e24\u79cd\u65b9\u6cd5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528bind\u8fdb\u884c\u91cd\u65b0\u7ed1\u5b9athis"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u7bad\u5934\u51fd\u6570")))}m.isMDXComponent=!0}}]);