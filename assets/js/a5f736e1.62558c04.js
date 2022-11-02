"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[29640],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,g=m["".concat(c,".").concat(f)]||m[f]||s[f]||o;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},82133:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"ES6\u201430\uff1a\u4e00\u6587\u641e\u61c2\u95ed\u5305",date:new Date("2021-03-16T00:00:00.000Z"),categories:"ES6",tags:["ES6"]},l=void 0,i={permalink:"/blog/ES6\u201430\uff1a\u4e00\u6587\u641e\u61c2\u95ed\u5305",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/ES6\u201430\uff1a\u4e00\u6587\u641e\u61c2\u95ed\u5305.md",source:"@site/blog\\ES6\u201430\uff1a\u4e00\u6587\u641e\u61c2\u95ed\u5305.md",title:"ES6\u201430\uff1a\u4e00\u6587\u641e\u61c2\u95ed\u5305",description:"\u4ec0\u4e48\u662f\u95ed\u5305\uff1f",date:"2021-03-16T00:00:00.000Z",formattedDate:"2021\u5e743\u670816\u65e5",tags:[{label:"ES6",permalink:"/blog/tags/es-6"}],readingTime:1.095,hasTruncateMarker:!1,authors:[],frontMatter:{title:"ES6\u201430\uff1a\u4e00\u6587\u641e\u61c2\u95ed\u5305",date:"2021-03-16T00:00:00.000Z",categories:"ES6",tags:["ES6"]},prevItem:{title:"ES6\u2014\u201440\uff1aSymbol\u7684\u7528\u6cd5",permalink:"/blog/ES6\u2014\u201440\uff1aSymbol\u7684\u7528\u6cd5"},nextItem:{title:"ES6\u2014\u201421\uff1atrim()\u65b9\u6cd5\u53bb\u9664\u5b57\u7b26\u4e32\u4e24\u4fa7\u7a7a\u683c",permalink:"/blog/ES6\u2014\u201421\uff1atrim()\u65b9\u6cd5\u53bb\u9664\u5b57\u7b26\u4e32\u4e24\u4fa7\u7a7a\u683c"}},c={authorsImageUrls:[]},p=[{value:"\u4ec0\u4e48\u662f\u95ed\u5305\uff1f",id:"\u4ec0\u4e48\u662f\u95ed\u5305",level:2},{value:"\u95ed\u5305\u7684\u4e3b\u8981\u4f5c\u7528",id:"\u95ed\u5305\u7684\u4e3b\u8981\u4f5c\u7528",level:2},{value:"\u95ed\u5305\u5e94\u75281\uff08\u5229\u7528\u95ed\u5305\u7684\u65b9\u5f0f\u5f97\u5230\u5f53\u524d\u5c0fli\u7684\u7d22\u5f15\u53f7\uff09",id:"\u95ed\u5305\u5e94\u75281\u5229\u7528\u95ed\u5305\u7684\u65b9\u5f0f\u5f97\u5230\u5f53\u524d\u5c0fli\u7684\u7d22\u5f15\u53f7",level:2},{value:"\u95ed\u5305\u5e94\u75282\uff08\u8ba1\u7b97\u6253\u8f66\u4ef7\u683c\uff09",id:"\u95ed\u5305\u5e94\u75282\u8ba1\u7b97\u6253\u8f66\u4ef7\u683c",level:2}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4ec0\u4e48\u662f\u95ed\u5305"},"\u4ec0\u4e48\u662f\u95ed\u5305\uff1f"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u95ed\u5305\u662f\u4e00\u79cd\u6709\u6743\u8bbf\u95ee\u53e6\u4e00\u4e2a\u51fd\u6570\u4f5c\u7528\u57df\u4e2d\u53d8\u91cf\u7684",(0,a.kt)("strong",{parentName:"p"},"\u51fd\u6570"),"\u3002")),(0,a.kt)("h2",{id:"\u95ed\u5305\u7684\u4e3b\u8981\u4f5c\u7528"},"\u95ed\u5305\u7684\u4e3b\u8981\u4f5c\u7528"),(0,a.kt)("p",null,"\u7b54\uff1a\u5ef6\u4f38\u4e86\u53d8\u91cf\u7684\u4f5c\u7528\u8303\u56f4\u3002"),(0,a.kt)("h2",{id:"\u95ed\u5305\u5e94\u75281\u5229\u7528\u95ed\u5305\u7684\u65b9\u5f0f\u5f97\u5230\u5f53\u524d\u5c0fli\u7684\u7d22\u5f15\u53f7"},"\u95ed\u5305\u5e94\u75281\uff08\u5229\u7528\u95ed\u5305\u7684\u65b9\u5f0f\u5f97\u5230\u5f53\u524d\u5c0fli\u7684\u7d22\u5f15\u53f7\uff09"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/9f311b6d5760493173c22803ad7d011a.png",alt:null})),(0,a.kt)("h2",{id:"\u95ed\u5305\u5e94\u75282\u8ba1\u7b97\u6253\u8f66\u4ef7\u683c"},"\u95ed\u5305\u5e94\u75282\uff08\u8ba1\u7b97\u6253\u8f66\u4ef7\u683c\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"<script>\n// \u8ba1\u7b97\u6253\u8f66\u4ef7\u683c\n// \u6253\u8f66\u8d77\u6b65\u4ef713\uff083\u516c\u91cc\u5185\uff09\uff0c\u4e4b\u540e\u6bcf\u591a\u4e00\u516c\u91cc\u589e\u52a05\u5757\u94b1\uff0c\u7528\u6237\u8f93\u5165\u516c\u91cc\u6570\u5c31\u53ef\u4ee5\u8ba1\u7b97\n// \u6253\u8f66\u4ef7\u683c\uff0c\u5982\u679c\u6709\u62e5\u5835\u7684\u60c5\u51b5\uff0c\u603b\u4ef7\u683c\u591a\u6536\u53d610\u5757\u94b1\u7684\u62e5\u5835\u8d39\nvar user_price = (function () {\n    var start = 13;\n    var total = 0;\n    return {\n        price: function (n, flag) {\n            if (n <= 3) {\n                total = start;\n            } else {\n                total = start + (n - 3) * 5;\n            }\n            if (flag == true) {\n                total = total + 10;\n            } else {\n                total = total;\n            }\n            return total;\n        }\n    }\n})();\nconsole.log(user_price.price(5, true));\nconsole.log(user_price.price(1, false));\n\n<\/script>\n")))}s.isMDXComponent=!0}}]);