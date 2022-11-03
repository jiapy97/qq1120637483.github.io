"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[86447],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return s}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),m=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=m(n),s=o,g=b["".concat(i,".").concat(s)]||b[s]||u[s]||l;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var m=2;m<l;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},68272:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return u}});var r=n(87462),o=n(63366),l=(n(67294),n(3905)),a=["components"],c={title:"ES6\u2014\u201440\uff1aSymbol\u7684\u7528\u6cd5",date:new Date("2021-03-17T00:00:00.000Z"),categories:"ES6",tags:["ES6"]},i=void 0,m={permalink:"/en/ES6\u2014\u201440\uff1aSymbol\u7684\u7528\u6cd5",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/ES6\u2014\u201440\uff1aSymbol\u7684\u7528\u6cd5.md",source:"@site/blog/ES6\u2014\u201440\uff1aSymbol\u7684\u7528\u6cd5.md",title:"ES6\u2014\u201440\uff1aSymbol\u7684\u7528\u6cd5",description:"* Symbol\u7684\u503c\u662f\u552f\u4e00\u7684\u3002",date:"2021-03-17T00:00:00.000Z",formattedDate:"March 17, 2021",tags:[{label:"ES6",permalink:"/en/tags/es-6"}],readingTime:.39666666666666667,hasTruncateMarker:!1,authors:[],frontMatter:{title:"ES6\u2014\u201440\uff1aSymbol\u7684\u7528\u6cd5",date:"2021-03-17T00:00:00.000Z",categories:"ES6",tags:["ES6"]},prevItem:{title:"ES6\u2014\u201439\uff1aset\u6570\u636e\u7ed3\u6784",permalink:"/en/ES6\u2014\u201439\uff1aset\u6570\u636e\u7ed3\u6784"},nextItem:{title:"ES6\u201430\uff1a\u4e00\u6587\u641e\u61c2\u95ed\u5305",permalink:"/en/ES6\u201430\uff1a\u4e00\u6587\u641e\u61c2\u95ed\u5305"}},p={authorsImageUrls:[]},u=[{value:"\u521b\u5efaSymbol",id:"\u521b\u5efasymbol",level:2},{value:"Symbol\u4e0d\u80fd\u4e0e\u5176\u4ed6\u6570\u636e\u8fdb\u884c\u8fd0\u7b97",id:"symbol\u4e0d\u80fd\u4e0e\u5176\u4ed6\u6570\u636e\u8fdb\u884c\u8fd0\u7b97",level:2},{value:"Symbol\u7684\u4f7f\u7528\u573a\u666f",id:"symbol\u7684\u4f7f\u7528\u573a\u666f",level:2}],b={toc:u};function s(e){var t=e.components,n=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Symbol\u7684\u503c\u662f\u552f\u4e00\u7684\u3002")),(0,l.kt)("h2",{id:"\u521b\u5efasymbol"},"\u521b\u5efaSymbol"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/191bead386ccb692fac6d4a6d232db06.png",alt:null})),(0,l.kt)("h2",{id:"symbol\u4e0d\u80fd\u4e0e\u5176\u4ed6\u6570\u636e\u8fdb\u884c\u8fd0\u7b97"},"Symbol\u4e0d\u80fd\u4e0e\u5176\u4ed6\u6570\u636e\u8fdb\u884c\u8fd0\u7b97"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/2f6db9207cc38e218b11b650ff67d09a.png",alt:null})),(0,l.kt)("h2",{id:"symbol\u7684\u4f7f\u7528\u573a\u666f"},"Symbol\u7684\u4f7f\u7528\u573a\u666f"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6709\u65f6\u5019\u4e00\u4e2a\u5bf9\u8c61\u91cc\u6709\u5f88\u591a\u5c5e\u6027\u53ef\u80fd\u5f88\u76f8\u4f3c\uff0c\u4ee5\u81f3\u4e8e\u6211\u4eec\u4e0d\u77e5\u9053\u627e\u90a3\u4e2a\u5c5e\u6027\uff0cSymbol\u53ef\u4ee5\u8ba9\u4ed6\u4eec\u53d8\u4e3a\u552f\u4e00\u3002"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"\u5047\u5982\u5bf9\u8c61\u4e2d\u6709\u91cd\u590d\u5c5e\u6027\uff0c\u53ea\u663e\u793a\u4e00\u4e2a\uff08\u8fd9\u662f\u4e0d\u7b26\u5408\u903b\u8f91\u7684\uff09\n",(0,l.kt)("img",{parentName:"li",src:"https://img-blog.csdnimg.cn/img_convert/02fa098de18efc351feb108877063e21.png",alt:null}),(0,l.kt)("img",{parentName:"li",src:"https://img-blog.csdnimg.cn/img_convert/d5c7e53319c63bbd82732e72ebbdd363.png",alt:null}))),(0,l.kt)("h2",{parentName:"blockquote",id:"symbol\u5185\u7f6e\u5c5e\u6027"},"Symbol\u5185\u7f6e\u5c5e\u6027"),(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},"\u81ea\u5df1\u63a7\u5236instance\u68c0\u6d4b\n",(0,l.kt)("img",{parentName:"li",src:"https://img-blog.csdnimg.cn/img_convert/c6adcc62815c11dcee3ee763c6404370.png",alt:null}))),(0,l.kt)("h2",{parentName:"blockquote",id:"description\u5c5e\u6027"},"description\u5c5e\u6027"),(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/db4457110c0e689a9e5737f9138c8fec.png",alt:null}))))}s.isMDXComponent=!0}}]);