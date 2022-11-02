"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[67640],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||c;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<c;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},52722:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const c={title:"React-48\uff1a\u4e3a\u4ec0\u4e48redux\u4e2d\u7684reducer\u8fd4\u56de\u72b6\u6001\u65f6\u4e0d\u80fd\u7528unshift\u7b49API\uff1f",date:new Date("2021-04-26T00:00:00.000Z"),categories:"React",tags:["React"]},i=void 0,o={permalink:"/blog/React-48\uff1a\u4e3a\u4ec0\u4e48redux\u4e2d\u7684reducer\u8fd4\u56de\u72b6\u6001\u65f6\u4e0d\u80fd\u7528unshift\u7b49API\uff1f",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/React-48\uff1a\u4e3a\u4ec0\u4e48redux\u4e2d\u7684reducer\u8fd4\u56de\u72b6\u6001\u65f6\u4e0d\u80fd\u7528unshift\u7b49API\uff1f.md",source:"@site/blog/React-48\uff1a\u4e3a\u4ec0\u4e48redux\u4e2d\u7684reducer\u8fd4\u56de\u72b6\u6001\u65f6\u4e0d\u80fd\u7528unshift\u7b49API\uff1f.md",title:"React-48\uff1a\u4e3a\u4ec0\u4e48redux\u4e2d\u7684reducer\u8fd4\u56de\u72b6\u6001\u65f6\u4e0d\u80fd\u7528unshift\u7b49API\uff1f",description:"\u5148\u8bf4\u7ed3\u8bba\uff1a\u4f7f\u7528unshift\u662f\u4e0d\u8d77\u4f5c\u7528\u7684",date:"2021-04-26T00:00:00.000Z",formattedDate:"2021\u5e744\u670826\u65e5",tags:[{label:"React",permalink:"/blog/tags/react"}],readingTime:.52,hasTruncateMarker:!1,authors:[],frontMatter:{title:"React-48\uff1a\u4e3a\u4ec0\u4e48redux\u4e2d\u7684reducer\u8fd4\u56de\u72b6\u6001\u65f6\u4e0d\u80fd\u7528unshift\u7b49API\uff1f",date:"2021-04-26T00:00:00.000Z",categories:"React",tags:["React"]},prevItem:{title:"React-47\uff1a\u4e00\u5f20\u56fe\u770b\u61c2react-redux\u7684\u57fa\u672c\u6d41\u7a0b",permalink:"/blog/React-47\uff1a\u4e00\u5f20\u56fe\u770b\u61c2react-redux\u7684\u57fa\u672c\u6d41\u7a0b"},nextItem:{title:"\u5251\u6307Offer\u2014\u2014\u4e0d\u7528\u52a0\u51cf\u4e58\u9664\u505a\u52a0\u6cd5\uff08JS\u5b9e\u73b0\uff09",permalink:"/blog/\u5251\u6307Offer\u2014\u2014\u4e0d\u7528\u52a0\u51cf\u4e58\u9664\u505a\u52a0\u6cd5\uff08JS\u5b9e\u73b0\uff09"}},l={authorsImageUrls:[]},u=[{value:"\u5148\u8bf4\u7ed3\u8bba\uff1a\u4f7f\u7528unshift\u662f\u4e0d\u8d77\u4f5c\u7528\u7684",id:"\u5148\u8bf4\u7ed3\u8bba\u4f7f\u7528unshift\u662f\u4e0d\u8d77\u4f5c\u7528\u7684",level:2},{value:"\u539f\u56e0",id:"\u539f\u56e0",level:2},{value:"\u89e3\u51b3\u529e\u6cd5\uff08reducer\u5fc5\u987b\u662f\u4e00\u4e2a\u7eaf\u51fd\u6570\uff09",id:"\u89e3\u51b3\u529e\u6cd5reducer\u5fc5\u987b\u662f\u4e00\u4e2a\u7eaf\u51fd\u6570",level:2}],p={toc:u};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5148\u8bf4\u7ed3\u8bba\u4f7f\u7528unshift\u662f\u4e0d\u8d77\u4f5c\u7528\u7684"},"\u5148\u8bf4\u7ed3\u8bba\uff1a\u4f7f\u7528unshift\u662f\u4e0d\u8d77\u4f5c\u7528\u7684"),(0,a.kt)("h2",{id:"\u539f\u56e0"},"\u539f\u56e0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"redux\u7684\u5e95\u5c42\u4f1a\u6bd4\u8f83preState\u7684\u5730\u5740\u662f\u5426\u53d1\u751f\u4e86\u53d8\u5316\uff0c\u5982\u679c\u6ca1\u6709\u53d1\u751f\u53d8\u5316\uff0c\u5c31\u4e0d\u4f1a\u66f4\u65b0\u9875\u9762\uff0c\u53ea\u6709\u53d1\u751f\u4e86\u53d8\u5316\u624d\u4f1a\u66f4\u65b0\u9875\u9762\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e0b\u9762\u8fd9\u79cd\u5c31\u662f\u5730\u5740\u6ca1\u6709\u53d1\u751f\u53d8\u5316\n",(0,a.kt)("img",{parentName:"li",src:"https://img-blog.csdnimg.cn/img_convert/b0cd9d04d9ee2d03d44a513094aee7c5.png",alt:null}))),(0,a.kt)("h2",{id:"\u89e3\u51b3\u529e\u6cd5reducer\u5fc5\u987b\u662f\u4e00\u4e2a\u7eaf\u51fd\u6570"},"\u89e3\u51b3\u529e\u6cd5\uff08reducer\u5fc5\u987b\u662f\u4e00\u4e2a\u7eaf\u51fd\u6570\uff09"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u91c7\u7528\u4e0b\u9762\u8fd9\u79cd\u65b9\u6cd5\u8fdb\u884c\u8fd4\u56de\n",(0,a.kt)("img",{parentName:"li",src:"https://img-blog.csdnimg.cn/img_convert/a01a0747d833ef2807cab651f5abb999.png",alt:null}))))}s.isMDXComponent=!0}}]);