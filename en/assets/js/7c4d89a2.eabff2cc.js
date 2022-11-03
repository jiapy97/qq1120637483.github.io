"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[83695],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,s=m["".concat(u,".").concat(d)]||m[d]||f[d]||c;return r?n.createElement(s,o(o({ref:t},p),{},{components:r})):n.createElement(s,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},70300:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return f}});var n=r(87462),a=r(63366),c=(r(67294),r(3905)),o=["components"],i={title:"JS\u4e2dreduce\u65b9\u6cd5",date:new Date("2021-04-14T00:00:00.000Z"),categories:"JavaScript\u5e38\u7528API",tags:["JavaScript\u5e38\u7528API"]},u=void 0,l={permalink:"/en/JS\u4e2dreduce\u65b9\u6cd5",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/JS\u4e2dreduce\u65b9\u6cd5.md",source:"@site/blog/JS\u4e2dreduce\u65b9\u6cd5.md",title:"JS\u4e2dreduce\u65b9\u6cd5",description:"reduce\u65b9\u6cd5\u53ef\u4ee5\u7528\u6765\u6c42\u4e00\u4e2a\u6570\u7ec4\u7684\u7d2f\u8ba1\u548c",date:"2021-04-14T00:00:00.000Z",formattedDate:"April 14, 2021",tags:[{label:"JavaScript\u5e38\u7528API",permalink:"/en/tags/java-script\u5e38\u7528-api"}],readingTime:.24,hasTruncateMarker:!1,authors:[],frontMatter:{title:"JS\u4e2dreduce\u65b9\u6cd5",date:"2021-04-14T00:00:00.000Z",categories:"JavaScript\u5e38\u7528API",tags:["JavaScript\u5e38\u7528API"]},prevItem:{title:"\u5251\u6307Offer\u2014\u2014\u4ece\u4e0a\u5230\u4e0b\u6253\u5370\u4e8c\u53c9\u6811II\uff08JS\u5b9e\u73b0\uff09",permalink:"/en/\u5251\u6307Offer\u2014\u2014\u4ece\u4e0a\u5230\u4e0b\u6253\u5370\u4e8c\u53c9\u6811II\uff08JS\u5b9e\u73b0\uff09"},nextItem:{title:"JS\u4e2d\u7684map\u65b9\u6cd5",permalink:"/en/JS\u4e2d\u7684map\u65b9\u6cd5"}},p={authorsImageUrls:[]},f=[{value:"reduce\u65b9\u6cd5\u53ef\u4ee5\u7528\u6765\u6c42\u4e00\u4e2a\u6570\u7ec4\u7684\u7d2f\u8ba1\u548c",id:"reduce\u65b9\u6cd5\u53ef\u4ee5\u7528\u6765\u6c42\u4e00\u4e2a\u6570\u7ec4\u7684\u7d2f\u8ba1\u548c",level:2},{value:"reduce\u65b9\u6cd5\u5c06\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u8fde\u63a5\u6210\u4e00\u4e2a\u957f\u7684\u5b57\u7b26\u4e32",id:"reduce\u65b9\u6cd5\u5c06\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u8fde\u63a5\u6210\u4e00\u4e2a\u957f\u7684\u5b57\u7b26\u4e32",level:2}],m={toc:f};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"reduce\u65b9\u6cd5\u53ef\u4ee5\u7528\u6765\u6c42\u4e00\u4e2a\u6570\u7ec4\u7684\u7d2f\u8ba1\u548c"},"reduce\u65b9\u6cd5\u53ef\u4ee5\u7528\u6765\u6c42\u4e00\u4e2a\u6570\u7ec4\u7684\u7d2f\u8ba1\u548c"),(0,c.kt)("p",null,(0,c.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/288c197ea9426cf7eff98c6fd86b51bf.png",alt:null})),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"pre\u4ee3\u8868\u524d\u9762\u6240\u6709\u7684\u52a0\u4e00\u8d77\u7684\u7d2f\u79ef\u503c"),(0,c.kt)("li",{parentName:"ul"},"0\u4ee3\u8868\u7684\u662f\u9ed8\u8ba4\u7684pre\u503c"),(0,c.kt)("li",{parentName:"ul"},"index\u4ee3\u8868\u7684\u662f\u4e0b\u6807")),(0,c.kt)("h2",{id:"reduce\u65b9\u6cd5\u5c06\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u8fde\u63a5\u6210\u4e00\u4e2a\u957f\u7684\u5b57\u7b26\u4e32"},"reduce\u65b9\u6cd5\u5c06\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u8fde\u63a5\u6210\u4e00\u4e2a\u957f\u7684\u5b57\u7b26\u4e32"),(0,c.kt)("p",null,(0,c.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/c6ed865df0cbf755b17409eaf5e704a2.png",alt:null})))}d.isMDXComponent=!0}}]);