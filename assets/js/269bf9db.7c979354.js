"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[53578],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,g=m["".concat(l,".").concat(f)]||m[f]||p[f]||c;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<c;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39711:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),c=(n(67294),n(3905)),o=["components"],i={title:"React-52\uff1asetState\u7684\u4e24\u79cd\u66f4\u65b0\u72b6\u6001\u7684\u65b9\u5f0f",date:new Date("2021-04-28T00:00:00.000Z"),categories:"React",tags:["React"]},l=void 0,u={permalink:"/React-52\uff1asetState\u7684\u4e24\u79cd\u66f4\u65b0\u72b6\u6001\u7684\u65b9\u5f0f",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/React-52\uff1asetState\u7684\u4e24\u79cd\u66f4\u65b0\u72b6\u6001\u7684\u65b9\u5f0f.md",source:"@site/blog/React-52\uff1asetState\u7684\u4e24\u79cd\u66f4\u65b0\u72b6\u6001\u7684\u65b9\u5f0f.md",title:"React-52\uff1asetState\u7684\u4e24\u79cd\u66f4\u65b0\u72b6\u6001\u7684\u65b9\u5f0f",description:"\u65b9\u5f0f1\uff1a\u5bf9\u8c61\u5f0f\u7684setState",date:"2021-04-28T00:00:00.000Z",formattedDate:"2021\u5e744\u670828\u65e5",tags:[{label:"React",permalink:"/tags/react"}],readingTime:.19333333333333333,hasTruncateMarker:!1,authors:[],frontMatter:{title:"React-52\uff1asetState\u7684\u4e24\u79cd\u66f4\u65b0\u72b6\u6001\u7684\u65b9\u5f0f",date:"2021-04-28T00:00:00.000Z",categories:"React",tags:["React"]},prevItem:{title:"\u5251\u6307Offer\u2014\u2014\u6570\u636e\u6d41\u4e2d\u7684\u4e2d\u4f4d\u6570\uff08JS\u5b9e\u73b0\uff09",permalink:"/\u5251\u6307Offer\u2014\u2014\u6570\u636e\u6d41\u4e2d\u7684\u4e2d\u4f4d\u6570\uff08JS\u5b9e\u73b0\uff09"},nextItem:{title:"React-53\uff1a\u61d2\u52a0\u8f7d\u7684\u4f7f\u7528",permalink:"/React-53\uff1a\u61d2\u52a0\u8f7d\u7684\u4f7f\u7528"}},s={authorsImageUrls:[]},p=[{value:"\u65b9\u5f0f1\uff1a\u5bf9\u8c61\u5f0f\u7684setState",id:"\u65b9\u5f0f1\u5bf9\u8c61\u5f0f\u7684setstate",level:2},{value:"\u65b9\u5f0f2\uff1a\u51fd\u6570\u5f0f\u7684setState",id:"\u65b9\u5f0f2\u51fd\u6570\u5f0f\u7684setstate",level:2}],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"\u65b9\u5f0f1\u5bf9\u8c61\u5f0f\u7684setstate"},"\u65b9\u5f0f1\uff1a\u5bf9\u8c61\u5f0f\u7684setState"),(0,c.kt)("p",null,(0,c.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/0c675dd92ebfb849592901c9bd6408bc.png",alt:null}),"\n",(0,c.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/1112846bc4d975ed408f742b34998636.png",alt:null})),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u56de\u8c03\u7684\u65b9\u5f0f\n",(0,c.kt)("img",{parentName:"li",src:"https://img-blog.csdnimg.cn/img_convert/784c9a7b3956c979dc4d0d92064143db.png",alt:null}))),(0,c.kt)("h2",{id:"\u65b9\u5f0f2\u51fd\u6570\u5f0f\u7684setstate"},"\u65b9\u5f0f2\uff1a\u51fd\u6570\u5f0f\u7684setState"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u51fd\u6570\u5f0f\u7684setState\uff0c\u8be5\u51fd\u6570\u80fd\u591f\u63a5\u6536\u5230\u4e24\u4e2a\u53c2\u6570\uff0c\u4e00\u4e2a\u662fstate\uff0c\u53e6\u4e00\u4e2a\u5219\u662fprops\n",(0,c.kt)("img",{parentName:"li",src:"https://img-blog.csdnimg.cn/img_convert/c25f4fe03a1edc6ece7eac77630c6b39.png",alt:null}))))}f.isMDXComponent=!0}}]);