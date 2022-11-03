"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[45271],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),m=o,d=s["".concat(l,".").concat(m)]||s[m]||f[m]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},68166:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return f}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={title:"React-46\uff1aProvider\u7ec4\u4ef6\u7684\u4f7f\u7528",date:new Date("2021-04-26T00:00:00.000Z"),categories:"React",tags:["React"]},l=void 0,u={permalink:"/en/React-46\uff1aProvider\u7ec4\u4ef6\u7684\u4f7f\u7528",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/React-46\uff1aProvider\u7ec4\u4ef6\u7684\u4f7f\u7528.md",source:"@site/blog/React-46\uff1aProvider\u7ec4\u4ef6\u7684\u4f7f\u7528.md",title:"React-46\uff1aProvider\u7ec4\u4ef6\u7684\u4f7f\u7528",description:"\u5728\u5165\u53e3\u6587\u4ef6\u4e2d\u5f15\u5165Provider",date:"2021-04-26T00:00:00.000Z",formattedDate:"April 26, 2021",tags:[{label:"React",permalink:"/en/tags/react"}],readingTime:.15666666666666668,hasTruncateMarker:!1,authors:[],frontMatter:{title:"React-46\uff1aProvider\u7ec4\u4ef6\u7684\u4f7f\u7528",date:"2021-04-26T00:00:00.000Z",categories:"React",tags:["React"]},prevItem:{title:"React-45\uff1amapDispatchToProps\u7684\u7b80\u5199\u65b9\u6cd5",permalink:"/en/React-45\uff1amapDispatchToProps\u7684\u7b80\u5199\u65b9\u6cd5"},nextItem:{title:"React-47\uff1a\u4e00\u5f20\u56fe\u770b\u61c2react-redux\u7684\u57fa\u672c\u6d41\u7a0b",permalink:"/en/React-47\uff1a\u4e00\u5f20\u56fe\u770b\u61c2react-redux\u7684\u57fa\u672c\u6d41\u7a0b"}},p={authorsImageUrls:[]},f=[{value:"\u5728\u5165\u53e3\u6587\u4ef6\u4e2d\u5f15\u5165Provider",id:"\u5728\u5165\u53e3\u6587\u4ef6\u4e2d\u5f15\u5165provider",level:2}],s={toc:f};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5728\u5165\u53e3\u6587\u4ef6\u4e2d\u5f15\u5165provider"},"\u5728\u5165\u53e3\u6587\u4ef6\u4e2d\u5f15\u5165Provider"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u7ed9Provider\u4f20\u9012store\uff0c\u5c31\u4e0d\u7528\u901a\u8fc7\u7ed9\u6bcf\u4e00\u4e2a\u5bb9\u5668\u7ec4\u4ef6\u4f20\u9012store\u4e86"),(0,a.kt)("li",{parentName:"ul"},"\u522b\u5fd8\u4e86\u5728\u5165\u53e3\u6587\u4ef6\u5f15\u5165store\n",(0,a.kt)("img",{parentName:"li",src:"https://img-blog.csdnimg.cn/img_convert/fe25453f1f37bd89e983352384d91e8d.png",alt:null}))))}m.isMDXComponent=!0}}]);