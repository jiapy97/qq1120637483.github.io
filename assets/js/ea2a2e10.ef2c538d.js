"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[9439],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,g=m["".concat(i,".").concat(f)]||m[f]||s[f]||o;return r?n.createElement(g,c(c({ref:t},u),{},{components:r})):n.createElement(g,c({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},49976:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"React-05\uff1a\u865a\u62dfDOM\u4e2d\u53ea\u80fd\u5199JS\u7684\u8868\u8fbe\u5f0f",date:new Date("2021-04-02T00:00:00.000Z"),categories:"React",tags:["React"]},c=void 0,l={permalink:"/blog/React-05\uff1a\u865a\u62dfDOM\u4e2d\u53ea\u80fd\u5199JS\u7684\u8868\u8fbe\u5f0f",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/React-05\uff1a\u865a\u62dfDOM\u4e2d\u53ea\u80fd\u5199JS\u7684\u8868\u8fbe\u5f0f.md",source:"@site/blog/React-05\uff1a\u865a\u62dfDOM\u4e2d\u53ea\u80fd\u5199JS\u7684\u8868\u8fbe\u5f0f.md",title:"React-05\uff1a\u865a\u62dfDOM\u4e2d\u53ea\u80fd\u5199JS\u7684\u8868\u8fbe\u5f0f",description:"\u9996\u5148\u533a\u5206\u4ec0\u4e48\u662f\u8868\u8fbe\u5f0f\u548c\u8bed\u53e5",date:"2021-04-02T00:00:00.000Z",formattedDate:"2021\u5e744\u67082\u65e5",tags:[{label:"React",permalink:"/blog/tags/react"}],readingTime:.235,hasTruncateMarker:!1,authors:[],frontMatter:{title:"React-05\uff1a\u865a\u62dfDOM\u4e2d\u53ea\u80fd\u5199JS\u7684\u8868\u8fbe\u5f0f",date:"2021-04-02T00:00:00.000Z",categories:"React",tags:["React"]},prevItem:{title:"React-04\uff1aJSX\u8bed\u6cd5\u89c4\u5219",permalink:"/blog/React-04\uff1aJSX\u8bed\u6cd5\u89c4\u5219"},nextItem:{title:"LeetCode\u2014\u2014\u4ece\u5c3e\u5230\u5934\u6253\u5370\u94fe\u8868",permalink:"/blog/LeetCode\u2014\u2014\u4ece\u5c3e\u5230\u5934\u6253\u5370\u94fe\u8868"}},i={authorsImageUrls:[]},p=[{value:"\u9996\u5148\u533a\u5206\u4ec0\u4e48\u662f\u8868\u8fbe\u5f0f\u548c\u8bed\u53e5",id:"\u9996\u5148\u533a\u5206\u4ec0\u4e48\u662f\u8868\u8fbe\u5f0f\u548c\u8bed\u53e5",level:2},{value:"\u6848\u4f8b",id:"\u6848\u4f8b",level:2}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u9996\u5148\u533a\u5206\u4ec0\u4e48\u662f\u8868\u8fbe\u5f0f\u548c\u8bed\u53e5"},"\u9996\u5148\u533a\u5206\u4ec0\u4e48\u662f\u8868\u8fbe\u5f0f\u548c\u8bed\u53e5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8868\u8fbe\u5f0f\u4f1a\u6709\u4e00\u4e2a\u8fd4\u56de\u503c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8bed\u53e5\u6ca1\u6709\u8fd4\u56de\u503c"),(0,a.kt)("li",{parentName:"ul"},"for\u5faa\u73af\uff0cif\u8bed\u53e5\uff0cswitch\u90fd\u5c5e\u4e8e\u8bed\u53e5")),(0,a.kt)("h2",{id:"\u6848\u4f8b"},"\u6848\u4f8b"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/77e50bcefd964d740594dbd4ffd4db85.png",alt:null}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/64601bea880e71412539ae017b36c10c.png",alt:null})))}s.isMDXComponent=!0}}]);