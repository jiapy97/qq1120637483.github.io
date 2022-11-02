"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[49252],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=p(n),b=a,d=g["".concat(o,".").concat(b)]||g[b]||m[b]||c;return n?r.createElement(d,l(l({ref:t},s),{},{components:n})):r.createElement(d,l({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=g;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<c;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},91799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const c={title:"ES6\u2014\u201448\uff1aES6\u7684\u5bf9\u8c61\u65b9\u6cd5\u62d3\u5c55",date:new Date("2021-03-18T00:00:00.000Z"),categories:"ES6",tags:["ES6"]},l=void 0,i={permalink:"/blog/ES6\u2014\u201448\uff1aES6\u7684\u5bf9\u8c61\u65b9\u6cd5\u62d3\u5c55",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/ES6\u2014\u201448\uff1aES6\u7684\u5bf9\u8c61\u65b9\u6cd5\u62d3\u5c55.md",source:"@site/blog/ES6\u2014\u201448\uff1aES6\u7684\u5bf9\u8c61\u65b9\u6cd5\u62d3\u5c55.md",title:"ES6\u2014\u201448\uff1aES6\u7684\u5bf9\u8c61\u65b9\u6cd5\u62d3\u5c55",description:"\u5224\u65ad\u4e24\u4e2a\u503c\u662f\u5426\u5b8c\u5168\u76f8\u7b49\uff08Object.is\uff09",date:"2021-03-18T00:00:00.000Z",formattedDate:"2021\u5e743\u670818\u65e5",tags:[{label:"ES6",permalink:"/blog/tags/es-6"}],readingTime:.585,hasTruncateMarker:!1,authors:[],frontMatter:{title:"ES6\u2014\u201448\uff1aES6\u7684\u5bf9\u8c61\u65b9\u6cd5\u62d3\u5c55",date:"2021-03-18T00:00:00.000Z",categories:"ES6",tags:["ES6"]},prevItem:{title:"ES6\u2014\u201447\uff1aES6\u4e2d\u7684\u6570\u503c\u62d3\u5c55",permalink:"/blog/ES6\u2014\u201447\uff1aES6\u4e2d\u7684\u6570\u503c\u62d3\u5c55"},nextItem:{title:"ES6\u2014\u201449\uff1a\u6a21\u5757\u5316",permalink:"/blog/ES6\u2014\u201449\uff1a\u6a21\u5757\u5316"}},o={authorsImageUrls:[]},p=[{value:"\u5224\u65ad\u4e24\u4e2a\u503c\u662f\u5426\u5b8c\u5168\u76f8\u7b49\uff08Object.is\uff09",id:"\u5224\u65ad\u4e24\u4e2a\u503c\u662f\u5426\u5b8c\u5168\u76f8\u7b49objectis",level:2},{value:"\u5bf9\u8c61\u7684\u5408\u5e76",id:"\u5bf9\u8c61\u7684\u5408\u5e76",level:2},{value:"\u8bbe\u7f6e\u5bf9\u8c61\u7684\u539f\u578b\u5bf9\u8c61",id:"\u8bbe\u7f6e\u5bf9\u8c61\u7684\u539f\u578b\u5bf9\u8c61",level:2},{value:"\u83b7\u53d6\u5bf9\u8c61\u6240\u6709\u7684\u952e\uff08Object.keys()\uff09",id:"\u83b7\u53d6\u5bf9\u8c61\u6240\u6709\u7684\u952eobjectkeys",level:2},{value:"\u83b7\u53d6\u5bf9\u8c61\u952e\u5bf9\u5e94\u7684\u6240\u6709\u7684\u503c\uff08Object.values(obj)\uff09",id:"\u83b7\u53d6\u5bf9\u8c61\u952e\u5bf9\u5e94\u7684\u6240\u6709\u7684\u503cobjectvaluesobj",level:2},{value:"\u628a\u5bf9\u8c61\u7684\u952e\u503c\u6620\u5c04\u6210\u4e00\u4e2a\u62e5\u6709\u4e24\u4e2a\u503c\u7684\u6570\u7ec4\uff08Object.entries(obj)\uff09",id:"\u628a\u5bf9\u8c61\u7684\u952e\u503c\u6620\u5c04\u6210\u4e00\u4e2a\u62e5\u6709\u4e24\u4e2a\u503c\u7684\u6570\u7ec4objectentriesobj",level:2},{value:"entries\u4e0emap\u7ed3\u5408\u4f7f\u7528",id:"entries\u4e0emap\u7ed3\u5408\u4f7f\u7528",level:2},{value:"\u83b7\u53d6\u5bf9\u8c61\u7684\u5c5e\u6027\u63cf\u8ff0Object.getOwnPropertyDescriptors(obj)",id:"\u83b7\u53d6\u5bf9\u8c61\u7684\u5c5e\u6027\u63cf\u8ff0objectgetownpropertydescriptorsobj",level:2},{value:"Object.fromEntries\u65b9\u6cd5",id:"objectfromentries\u65b9\u6cd5",level:2}],s={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5224\u65ad\u4e24\u4e2a\u503c\u662f\u5426\u5b8c\u5168\u76f8\u7b49objectis"},"\u5224\u65ad\u4e24\u4e2a\u503c\u662f\u5426\u5b8c\u5168\u76f8\u7b49\uff08Object.is\uff09"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/067d32b033656d936d1ba046e25a44c3.png",alt:null})),(0,a.kt)("h2",{id:"\u5bf9\u8c61\u7684\u5408\u5e76"},"\u5bf9\u8c61\u7684\u5408\u5e76"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/be59fc4c9aa86459e7218a6cc82aa068.png",alt:null})),(0,a.kt)("h2",{id:"\u8bbe\u7f6e\u5bf9\u8c61\u7684\u539f\u578b\u5bf9\u8c61"},"\u8bbe\u7f6e\u5bf9\u8c61\u7684\u539f\u578b\u5bf9\u8c61"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/9db22bf41a3b945ea294824c3d3a8cca.png",alt:null}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/fc5a50a4ab4a245b5deb629964590ebe.png",alt:null})),(0,a.kt)("h2",{id:"\u83b7\u53d6\u5bf9\u8c61\u6240\u6709\u7684\u952eobjectkeys"},"\u83b7\u53d6\u5bf9\u8c61\u6240\u6709\u7684\u952e\uff08Object.keys()\uff09"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/d6a0bb0f2ad1dffaa1150110c71f2171.png",alt:null})),(0,a.kt)("h2",{id:"\u83b7\u53d6\u5bf9\u8c61\u952e\u5bf9\u5e94\u7684\u6240\u6709\u7684\u503cobjectvaluesobj"},"\u83b7\u53d6\u5bf9\u8c61\u952e\u5bf9\u5e94\u7684\u6240\u6709\u7684\u503c\uff08Object.values(obj)\uff09"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/8795b90cd0eb7b7ef1c2183a7303ed35.png",alt:null})),(0,a.kt)("h2",{id:"\u628a\u5bf9\u8c61\u7684\u952e\u503c\u6620\u5c04\u6210\u4e00\u4e2a\u62e5\u6709\u4e24\u4e2a\u503c\u7684\u6570\u7ec4objectentriesobj"},"\u628a\u5bf9\u8c61\u7684\u952e\u503c\u6620\u5c04\u6210\u4e00\u4e2a\u62e5\u6709\u4e24\u4e2a\u503c\u7684\u6570\u7ec4\uff08Object.entries(obj)\uff09"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/393f723b693e7879b2df38d9d2dce5c0.png",alt:null})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/393f723b693e7879b2df38d9d2dce5c0.png",alt:null})),(0,a.kt)("h2",{id:"entries\u4e0emap\u7ed3\u5408\u4f7f\u7528"},"entries\u4e0emap\u7ed3\u5408\u4f7f\u7528"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/03307def5a16440174d11a7082aade6d.png",alt:null})),(0,a.kt)("h2",{id:"\u83b7\u53d6\u5bf9\u8c61\u7684\u5c5e\u6027\u63cf\u8ff0objectgetownpropertydescriptorsobj"},"\u83b7\u53d6\u5bf9\u8c61\u7684\u5c5e\u6027\u63cf\u8ff0Object.getOwnPropertyDescriptors(obj)"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/25075278f7df3a3794c34ddc2de0c7bd.png",alt:null}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/e5a31feb1a14bfc122a72de08b50c0e4.png",alt:null})),(0,a.kt)("h2",{id:"objectfromentries\u65b9\u6cd5"},"Object.fromEntries\u65b9\u6cd5"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/7e7c3d8401c66b7785fd51eaed52e4ec.png",alt:null}),"\nentries\u4e0efromEntries\u4e92\u4e3a\u9006\u8fd0\u7b97\u3002"))}m.isMDXComponent=!0}}]);