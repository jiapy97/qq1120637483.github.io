"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[20171],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(r),f=n,g=m["".concat(i,".").concat(f)]||m[f]||u[f]||l;return r?a.createElement(g,o(o({ref:t},s),{},{components:r})):a.createElement(g,o({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},76774:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const l={title:"React-08\uff1a\u7ec4\u4ef6\u5b9e\u4f8b\u7684\u4e09\u5927\u6838\u5fc3\u5c5e\u6027\u4e4bstate",date:new Date("2021-04-06T00:00:00.000Z"),categories:"React",tags:["React"]},o=void 0,c={permalink:"/blog/React-08\uff1a\u7ec4\u4ef6\u5b9e\u4f8b\u7684\u4e09\u5927\u6838\u5fc3\u5c5e\u6027\u4e4bstate",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/React-08\uff1a\u7ec4\u4ef6\u5b9e\u4f8b\u7684\u4e09\u5927\u6838\u5fc3\u5c5e\u6027\u4e4bstate.md",source:"@site/blog/React-08\uff1a\u7ec4\u4ef6\u5b9e\u4f8b\u7684\u4e09\u5927\u6838\u5fc3\u5c5e\u6027\u4e4bstate.md",title:"React-08\uff1a\u7ec4\u4ef6\u5b9e\u4f8b\u7684\u4e09\u5927\u6838\u5fc3\u5c5e\u6027\u4e4bstate",description:"\u51c6\u786e\u533a\u5206\u4ec0\u4e48\u662f\u7b80\u5355\u7ec4\u4ef6\u4e0e\u590d\u6742\u7ec4\u4ef6",date:"2021-04-06T00:00:00.000Z",formattedDate:"2021\u5e744\u67086\u65e5",tags:[{label:"React",permalink:"/blog/tags/react"}],readingTime:.505,hasTruncateMarker:!1,authors:[],frontMatter:{title:"React-08\uff1a\u7ec4\u4ef6\u5b9e\u4f8b\u7684\u4e09\u5927\u6838\u5fc3\u5c5e\u6027\u4e4bstate",date:"2021-04-06T00:00:00.000Z",categories:"React",tags:["React"]},prevItem:{title:"\u7ec3\u4e60\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u597d\u65b9\u6cd5\u63a8\u8350",permalink:"/blog/\u7ec3\u4e60\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u597d\u65b9\u6cd5\u63a8\u8350"},nextItem:{title:"React-09\uff1aReact\u4e2d\u7684\u4e8b\u4ef6\u7ed1\u5b9a",permalink:"/blog/React-09\uff1aReact\u4e2d\u7684\u4e8b\u4ef6\u7ed1\u5b9a"}},i={authorsImageUrls:[]},p=[{value:"\u51c6\u786e\u533a\u5206\u4ec0\u4e48\u662f\u7b80\u5355\u7ec4\u4ef6\u4e0e\u590d\u6742\u7ec4\u4ef6",id:"\u51c6\u786e\u533a\u5206\u4ec0\u4e48\u662f\u7b80\u5355\u7ec4\u4ef6\u4e0e\u590d\u6742\u7ec4\u4ef6",level:2},{value:"\u521d\u59cb\u5316state",id:"\u521d\u59cb\u5316state",level:2},{value:"state\u7684\u4e00\u822c\u7b80\u5199",id:"state\u7684\u4e00\u822c\u7b80\u5199",level:2}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u51c6\u786e\u533a\u5206\u4ec0\u4e48\u662f\u7b80\u5355\u7ec4\u4ef6\u4e0e\u590d\u6742\u7ec4\u4ef6"},"\u51c6\u786e\u533a\u5206\u4ec0\u4e48\u662f\u7b80\u5355\u7ec4\u4ef6\u4e0e\u590d\u6742\u7ec4\u4ef6"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7b80\u5355\u7ec4\u4ef6\u65e0state"),(0,n.kt)("li",{parentName:"ul"},"\u590d\u6742\u7ec4\u4ef6\u6709state")),(0,n.kt)("h2",{id:"\u521d\u59cb\u5316state"},"\u521d\u59cb\u5316state"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5728\u7ec4\u4ef6\u7c7b\u7684\u6784\u9020\u5668\u4e2d\u4fee\u6539"),(0,n.kt)("li",{parentName:"ul"},"\u5148\u7ed9\u6784\u9020\u5668\u4f20\u53c2\u6570props\uff0c\u8fd9\u4e2a\u53c2\u6570\u662fReact\u81ea\u52a8\u7ed9\u6211\u4eec\u4f20\u7684\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u8c03\u7528super()"),(0,n.kt)("li",{parentName:"ul"},"\u521d\u59cb\u5316state"),(0,n.kt)("li",{parentName:"ul"},"\u8fd9\u91cc\u7684this\u6307\u7684\u662f\u7ec4\u4ef6\u7684\u5b9e\u4f8b\u5bf9\u8c61\n",(0,n.kt)("img",{parentName:"li",src:"https://img-blog.csdnimg.cn/img_convert/8d2525c98893df8d6a26e3808e0f95e6.png",alt:null}))),(0,n.kt)("h2",{id:"state\u7684\u4e00\u822c\u7b80\u5199"},"state\u7684\u4e00\u822c\u7b80\u5199"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/64ab1fa6810cb20b345deee225f224a5.png",alt:null})))}u.isMDXComponent=!0}}]);