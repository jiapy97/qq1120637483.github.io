"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[40699],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,g=m["".concat(l,".").concat(f)]||m[f]||s[f]||c;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<c;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10476:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var r=n(87462),a=n(63366),c=(n(67294),n(3905)),o=["components"],i={title:"React-02\uff1a\u865a\u62dfDOM\u7684\u4e24\u79cd\u521b\u5efa\u65b9\u5f0f",date:new Date("2021-04-02T00:00:00.000Z"),categories:"React",tags:["React"]},l=void 0,u={permalink:"/en/React-02\uff1a\u865a\u62dfDOM\u7684\u4e24\u79cd\u521b\u5efa\u65b9\u5f0f",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/React-02\uff1a\u865a\u62dfDOM\u7684\u4e24\u79cd\u521b\u5efa\u65b9\u5f0f.md",source:"@site/blog/React-02\uff1a\u865a\u62dfDOM\u7684\u4e24\u79cd\u521b\u5efa\u65b9\u5f0f.md",title:"React-02\uff1a\u865a\u62dfDOM\u7684\u4e24\u79cd\u521b\u5efa\u65b9\u5f0f",description:"\u5b9e\u73b0\u5982\u4e0bDOM\u7ed3\u6784",date:"2021-04-02T00:00:00.000Z",formattedDate:"April 2, 2021",tags:[{label:"React",permalink:"/en/tags/react"}],readingTime:.12333333333333334,hasTruncateMarker:!1,authors:[],frontMatter:{title:"React-02\uff1a\u865a\u62dfDOM\u7684\u4e24\u79cd\u521b\u5efa\u65b9\u5f0f",date:"2021-04-02T00:00:00.000Z",categories:"React",tags:["React"]},prevItem:{title:"\u300c\u6ce8\u89e3\u300d\u300a\u4f60\u4e0d\u77e5\u9053\u7684JavaScript\uff08\u4e0a\u5377\uff09\u300b\u7b2c\u4e94\u7ae0\uff1a\u4f5c\u7528\u57df\u95ed\u5305",permalink:"/en/\u300c\u6ce8\u89e3\u300d\u300a\u4f60\u4e0d\u77e5\u9053\u7684JavaScript\uff08\u4e0a\u5377\uff09\u300b\u7b2c\u4e94\u7ae0\uff1a\u4f5c\u7528\u57df\u95ed\u5305"},nextItem:{title:"React-03\uff1a\u865a\u62dfDOM\u4e0e\u771f\u5b9eDOM",permalink:"/en/React-03\uff1a\u865a\u62dfDOM\u4e0e\u771f\u5b9eDOM"}},p={authorsImageUrls:[]},s=[{value:"\u5b9e\u73b0\u5982\u4e0bDOM\u7ed3\u6784",id:"\u5b9e\u73b0\u5982\u4e0bdom\u7ed3\u6784",level:2},{value:"\u4f7f\u7528\u4f20\u7edf\u7684js",id:"\u4f7f\u7528\u4f20\u7edf\u7684js",level:2},{value:"\u4f7f\u7528JSX",id:"\u4f7f\u7528jsx",level:2},{value:"\u603b\u7ed3\uff1a\u63a8\u8350\u4f7f\u7528JSX\u7684\u65b9\u5f0f\u5199\u865a\u62dfDOM",id:"\u603b\u7ed3\u63a8\u8350\u4f7f\u7528jsx\u7684\u65b9\u5f0f\u5199\u865a\u62dfdom",level:2}],m={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"\u5b9e\u73b0\u5982\u4e0bdom\u7ed3\u6784"},"\u5b9e\u73b0\u5982\u4e0bDOM\u7ed3\u6784"),(0,c.kt)("p",null,(0,c.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/8b2cf81d85abd024b4a4306eb9ab6556.png",alt:null})),(0,c.kt)("h2",{id:"\u4f7f\u7528\u4f20\u7edf\u7684js"},"\u4f7f\u7528\u4f20\u7edf\u7684js"),(0,c.kt)("p",null,(0,c.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/4a79fda35c1473c01552a243c0c5558b.png",alt:null})),(0,c.kt)("h2",{id:"\u4f7f\u7528jsx"},"\u4f7f\u7528JSX"),(0,c.kt)("p",null,(0,c.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/eb12e60b36e2c646c784af33346196b8.png",alt:null})),(0,c.kt)("h2",{id:"\u603b\u7ed3\u63a8\u8350\u4f7f\u7528jsx\u7684\u65b9\u5f0f\u5199\u865a\u62dfdom"},"\u603b\u7ed3\uff1a\u63a8\u8350\u4f7f\u7528JSX\u7684\u65b9\u5f0f\u5199\u865a\u62dfDOM"))}f.isMDXComponent=!0}}]);