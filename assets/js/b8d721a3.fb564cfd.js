"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[43306],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,g=m["".concat(i,".").concat(f)]||m[f]||s[f]||o;return r?n.createElement(g,c(c({ref:t},u),{},{components:r})):n.createElement(g,c({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},73018:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"React-16\uff1a\u51fd\u6570\u67ef\u91cc\u5316",date:new Date("2021-04-09T00:00:00.000Z"),categories:"React",tags:["React"]},c=void 0,l={permalink:"/blog/React-16\uff1a\u51fd\u6570\u67ef\u91cc\u5316",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/React-16\uff1a\u51fd\u6570\u67ef\u91cc\u5316.md",source:"@site/blog/React-16\uff1a\u51fd\u6570\u67ef\u91cc\u5316.md",title:"React-16\uff1a\u51fd\u6570\u67ef\u91cc\u5316",description:"\u5bf9\u8c61\u4e2d\u8c03\u7528\u53d8\u91cf\u8981\u52a0[]",date:"2021-04-09T00:00:00.000Z",formattedDate:"2021\u5e744\u67089\u65e5",tags:[{label:"React",permalink:"/blog/tags/react"}],readingTime:.42,hasTruncateMarker:!1,authors:[],frontMatter:{title:"React-16\uff1a\u51fd\u6570\u67ef\u91cc\u5316",date:"2021-04-09T00:00:00.000Z",categories:"React",tags:["React"]},prevItem:{title:"LeetCode\u2014\u2014\u7528\u4e24\u4e2a\u6808\u5b9e\u73b0\u961f\u5217\uff08JS\u5b9e\u73b0\uff09",permalink:"/blog/LeetCode\u2014\u2014\u7528\u4e24\u4e2a\u6808\u5b9e\u73b0\u961f\u5217\uff08JS\u5b9e\u73b0\uff09"},nextItem:{title:"React-17\uff1a\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f",permalink:"/blog/React-17\uff1a\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f"}},i={authorsImageUrls:[]},p=[{value:"\u5bf9\u8c61\u4e2d\u8c03\u7528\u53d8\u91cf\u8981\u52a0[]",id:"\u5bf9\u8c61\u4e2d\u8c03\u7528\u53d8\u91cf\u8981\u52a0",level:2},{value:"\u51fd\u6570\u67ef\u91cc\u5316\u7684\u6982\u5ff5",id:"\u51fd\u6570\u67ef\u91cc\u5316\u7684\u6982\u5ff5",level:2},{value:"\u51fd\u6570\u67ef\u91cc\u5316\u7684\u6848\u4f8b",id:"\u51fd\u6570\u67ef\u91cc\u5316\u7684\u6848\u4f8b",level:2},{value:"\u4e0d\u4f7f\u7528\u51fd\u6570\u67ef\u91cc\u5316\u5b9e\u73b0form\u8868\u5355\u7684state\u66f4\u65b0",id:"\u4e0d\u4f7f\u7528\u51fd\u6570\u67ef\u91cc\u5316\u5b9e\u73b0form\u8868\u5355\u7684state\u66f4\u65b0",level:2}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5bf9\u8c61\u4e2d\u8c03\u7528\u53d8\u91cf\u8981\u52a0"},"\u5bf9\u8c61\u4e2d\u8c03\u7528\u53d8\u91cf\u8981\u52a0[]"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/30e9ee3ceb2f1dc6eddc9744bb762029.png",alt:null})),(0,a.kt)("h2",{id:"\u51fd\u6570\u67ef\u91cc\u5316\u7684\u6982\u5ff5"},"\u51fd\u6570\u67ef\u91cc\u5316\u7684\u6982\u5ff5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u51fd\u6570\u8c03\u7528\u7ee7\u7eed\u8fd4\u56de\u51fd\u6570\u7684\u65b9\u5f0f\uff0c\u5b9e\u73b0\u591a\u6b21\u63a5\u6536\u53c2\u6570\u6700\u540e\u7edf\u4e00\u5904\u7406\u7684\u51fd\u6570\u7f16\u7801\u5f62\u5f0f\u3002")),(0,a.kt)("h2",{id:"\u51fd\u6570\u67ef\u91cc\u5316\u7684\u6848\u4f8b"},"\u51fd\u6570\u67ef\u91cc\u5316\u7684\u6848\u4f8b"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/de2da94a95be5c23d75c7df17f467fb4.png",alt:null})),(0,a.kt)("h2",{id:"\u4e0d\u4f7f\u7528\u51fd\u6570\u67ef\u91cc\u5316\u5b9e\u73b0form\u8868\u5355\u7684state\u66f4\u65b0"},"\u4e0d\u4f7f\u7528\u51fd\u6570\u67ef\u91cc\u5316\u5b9e\u73b0form\u8868\u5355\u7684state\u66f4\u65b0"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/bce2e6fd24614620626bc468fd3629c6.png",alt:null})))}s.isMDXComponent=!0}}]);