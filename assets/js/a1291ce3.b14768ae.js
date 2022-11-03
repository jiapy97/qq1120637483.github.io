"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[66353],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),m=o,g=s["".concat(l,".").concat(m)]||s[m]||f[m]||a;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},87376:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return f}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={title:"JS\u4e2d\u5c06ASCII\u7801\u503c\u8f6c\u6362\u4e3a\u5bf9\u5e94\u5b57\u7b26",date:new Date("2021-06-27T00:00:00.000Z"),categories:"JavaScript\u5e38\u7528API",tags:["JavaScript\u5e38\u7528API"]},l=void 0,u={permalink:"/JS\u4e2d\u5c06ASCII\u7801\u503c\u8f6c\u6362\u4e3a\u5bf9\u5e94\u5b57\u7b26",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/JS\u4e2d\u5c06ASCII\u7801\u503c\u8f6c\u6362\u4e3a\u5bf9\u5e94\u5b57\u7b26.md",source:"@site/blog/JS\u4e2d\u5c06ASCII\u7801\u503c\u8f6c\u6362\u4e3a\u5bf9\u5e94\u5b57\u7b26.md",title:"JS\u4e2d\u5c06ASCII\u7801\u503c\u8f6c\u6362\u4e3a\u5bf9\u5e94\u5b57\u7b26",description:"\u901a\u8fc7String.fromCharCode",date:"2021-06-27T00:00:00.000Z",formattedDate:"2021\u5e746\u670827\u65e5",tags:[{label:"JavaScript\u5e38\u7528API",permalink:"/tags/java-script\u5e38\u7528-api"}],readingTime:.05,hasTruncateMarker:!1,authors:[],frontMatter:{title:"JS\u4e2d\u5c06ASCII\u7801\u503c\u8f6c\u6362\u4e3a\u5bf9\u5e94\u5b57\u7b26",date:"2021-06-27T00:00:00.000Z",categories:"JavaScript\u5e38\u7528API",tags:["JavaScript\u5e38\u7528API"]},prevItem:{title:"ByteDance\u7684\u9762\u8bd5\u9898",permalink:"/ByteDance\u7684\u9762\u8bd5\u9898"},nextItem:{title:"JS\u4e2d\u5c06\u4e8c\u8fdb\u5236\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u5341\u8fdb\u5236\u7684\u65b9\u6cd5",permalink:"/JS\u4e2d\u5c06\u4e8c\u8fdb\u5236\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u5341\u8fdb\u5236\u7684\u65b9\u6cd5"}},p={authorsImageUrls:[]},f=[{value:"\u901a\u8fc7String.fromCharCode",id:"\u901a\u8fc7stringfromcharcode",level:2}],s={toc:f};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u901a\u8fc7stringfromcharcode"},"\u901a\u8fc7String.fromCharCode"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/20210624101052927.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})))}m.isMDXComponent=!0}}]);