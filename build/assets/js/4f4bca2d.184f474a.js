"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[24420],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),d=a,f=s["".concat(l,".").concat(d)]||s[d]||m[d]||c;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<c;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},5739:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const c={title:"JS\u4e2dreduce\u65b9\u6cd5",date:new Date("2021-04-14T00:00:00.000Z"),categories:"JavaScript\u5e38\u7528API",tags:["JavaScript\u5e38\u7528API"]},o=void 0,i={permalink:"/blog/JS\u4e2dreduce\u65b9\u6cd5",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/JS\u4e2dreduce\u65b9\u6cd5.md",source:"@site/blog\\JS\u4e2dreduce\u65b9\u6cd5.md",title:"JS\u4e2dreduce\u65b9\u6cd5",description:"reduce\u65b9\u6cd5\u53ef\u4ee5\u7528\u6765\u6c42\u4e00\u4e2a\u6570\u7ec4\u7684\u7d2f\u8ba1\u548c",date:"2021-04-14T00:00:00.000Z",formattedDate:"2021\u5e744\u670814\u65e5",tags:[{label:"JavaScript\u5e38\u7528API",permalink:"/blog/tags/java-script\u5e38\u7528-api"}],readingTime:.36,hasTruncateMarker:!1,authors:[],frontMatter:{title:"JS\u4e2dreduce\u65b9\u6cd5",date:"2021-04-14T00:00:00.000Z",categories:"JavaScript\u5e38\u7528API",tags:["JavaScript\u5e38\u7528API"]},prevItem:{title:"\u67e5\u627e\u5b57\u7b26\u4e32\u4e2d\u6700\u957f\u7684\u5355\u8bcd",permalink:"/blog/\u67e5\u627e\u5b57\u7b26\u4e32\u4e2d\u6700\u957f\u7684\u5355\u8bcd"},nextItem:{title:"JS\u4e2d\u7684map\u65b9\u6cd5",permalink:"/blog/JS\u4e2d\u7684map\u65b9\u6cd5"}},l={authorsImageUrls:[]},p=[{value:"reduce\u65b9\u6cd5\u53ef\u4ee5\u7528\u6765\u6c42\u4e00\u4e2a\u6570\u7ec4\u7684\u7d2f\u8ba1\u548c",id:"reduce\u65b9\u6cd5\u53ef\u4ee5\u7528\u6765\u6c42\u4e00\u4e2a\u6570\u7ec4\u7684\u7d2f\u8ba1\u548c",level:2},{value:"reduce\u65b9\u6cd5\u5c06\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u8fde\u63a5\u6210\u4e00\u4e2a\u957f\u7684\u5b57\u7b26\u4e32",id:"reduce\u65b9\u6cd5\u5c06\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u8fde\u63a5\u6210\u4e00\u4e2a\u957f\u7684\u5b57\u7b26\u4e32",level:2}],u={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"reduce\u65b9\u6cd5\u53ef\u4ee5\u7528\u6765\u6c42\u4e00\u4e2a\u6570\u7ec4\u7684\u7d2f\u8ba1\u548c"},"reduce\u65b9\u6cd5\u53ef\u4ee5\u7528\u6765\u6c42\u4e00\u4e2a\u6570\u7ec4\u7684\u7d2f\u8ba1\u548c"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/288c197ea9426cf7eff98c6fd86b51bf.png",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"pre\u4ee3\u8868\u524d\u9762\u6240\u6709\u7684\u52a0\u4e00\u8d77\u7684\u7d2f\u79ef\u503c"),(0,a.kt)("li",{parentName:"ul"},"0\u4ee3\u8868\u7684\u662f\u9ed8\u8ba4\u7684pre\u503c"),(0,a.kt)("li",{parentName:"ul"},"index\u4ee3\u8868\u7684\u662f\u4e0b\u6807")),(0,a.kt)("h2",{id:"reduce\u65b9\u6cd5\u5c06\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u8fde\u63a5\u6210\u4e00\u4e2a\u957f\u7684\u5b57\u7b26\u4e32"},"reduce\u65b9\u6cd5\u5c06\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u8fde\u63a5\u6210\u4e00\u4e2a\u957f\u7684\u5b57\u7b26\u4e32"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/c6ed865df0cbf755b17409eaf5e704a2.png",alt:null})))}m.isMDXComponent=!0}}]);