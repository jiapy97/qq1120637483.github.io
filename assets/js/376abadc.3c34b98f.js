"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[87498],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>s});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),s=l,d=m["".concat(u,".").concat(s)]||m[s]||k[s]||o;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function s(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},83950:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>k,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),l=(r(67294),r(3905));const o={title:"\u8fd9\u4e00\u6b21\uff0c\u5f7b\u5e95\u641e\u5b9a\u4f2a\u7c7b\u548c\u4f2a\u5143\u7d20\u7684\u533a\u522b",date:"2021-9-30",author:"Justin",top:!1,cover:!1,categories:"\u9762\u8bd5\u9898",tags:["\u9762\u8bd5\u9898"]},a=void 0,i={permalink:"/blog/\u8fd9\u4e00\u6b21\uff0c\u5f7b\u5e95\u641e\u5b9a\u4f2a\u7c7b\u548c\u4f2a\u5143\u7d20\u7684\u533a\u522b",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/\u8fd9\u4e00\u6b21\uff0c\u5f7b\u5e95\u641e\u5b9a\u4f2a\u7c7b\u548c\u4f2a\u5143\u7d20\u7684\u533a\u522b.md",source:"@site/blog/\u8fd9\u4e00\u6b21\uff0c\u5f7b\u5e95\u641e\u5b9a\u4f2a\u7c7b\u548c\u4f2a\u5143\u7d20\u7684\u533a\u522b.md",title:"\u8fd9\u4e00\u6b21\uff0c\u5f7b\u5e95\u641e\u5b9a\u4f2a\u7c7b\u548c\u4f2a\u5143\u7d20\u7684\u533a\u522b",description:"\u5f88\u591a\u4eba\u7ecf\u5e38\u5bf9CSS\u4e2d\u7684\u4f2a\u7c7b\u548c\u4f2a\u5143\u7d20\u5206\u4e0d\u6e05\u695a\uff0c\u6216\u8005\u5c06\u8fd9\u4e24\u8005\u6df7\u4e3a\u4e00\u8c08\uff0c\u4eca\u5929\u8ba9\u6211\u4eec\u6765\u4e86\u89e3\u4e0b\u8fd9\u4e24\u8005\u90fd\u6709\u54ea\u4e9b\u533a\u522b\u3002\u5728CSS3\u4e4b\u524d\u662f\u6ca1\u6709\u4f2a\u5143\u7d20\u4e0e\u4f2a\u7c7b\u7684\u533a\u522b\u7684\uff0c\u76f4\u5230CSS3\u624d\u5c06\u8fd9\u4e8c\u8005\u533a\u5206\u5f00\u6765\u3002",date:"2021-09-30T00:00:00.000Z",formattedDate:"2021\u5e749\u670830\u65e5",tags:[{label:"\u9762\u8bd5\u9898",permalink:"/blog/tags/\u9762\u8bd5\u9898"}],readingTime:2.765,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"\u8fd9\u4e00\u6b21\uff0c\u5f7b\u5e95\u641e\u5b9a\u4f2a\u7c7b\u548c\u4f2a\u5143\u7d20\u7684\u533a\u522b",date:"2021-9-30",author:"Justin",top:!1,cover:!1,categories:"\u9762\u8bd5\u9898",tags:["\u9762\u8bd5\u9898"]},prevItem:{title:"\u8fd9\u4e00\u6b21\uff0c\u5f7b\u5e95\u641e\u61c2React\u7684diff\u7b97\u6cd5",permalink:"/blog/\u8fd9\u4e00\u6b21\uff0c\u5f7b\u5e95\u641e\u61c2React\u7684diff\u7b97\u6cd5"},nextItem:{title:"\u4e00\u9053\u8003\u9891\u8f83\u9ad8\u7684\u9762\u8bd5\u9898\uff1a\u6570\u7ec4\u548c\u94fe\u8868\u7684\u533a\u522b",permalink:"/blog/\u4e00\u9053\u8003\u9891\u8f83\u9ad8\u7684\u9762\u8bd5\u9898\uff1a\u6570\u7ec4\u548c\u94fe\u8868\u7684\u533a\u522b"}},u={authorsImageUrls:[void 0]},c=[{value:"\u4e3a\u4ec0\u4e48\u8981\u5f15\u5165\u4f2a\u7c7b\u548c\u4f2a\u5143\u7d20\uff1f",id:"\u4e3a\u4ec0\u4e48\u8981\u5f15\u5165\u4f2a\u7c7b\u548c\u4f2a\u5143\u7d20",level:2},{value:"\u4ec0\u4e48\u662f\u4f2a\u7c7b\uff1f",id:"\u4ec0\u4e48\u662f\u4f2a\u7c7b",level:2},{value:"\u4f2a\u7c7b\u7684\u5206\u7c7b",id:"\u4f2a\u7c7b\u7684\u5206\u7c7b",level:2},{value:"\u72b6\u6001\u6027\u4f2a\u7c7b",id:"\u72b6\u6001\u6027\u4f2a\u7c7b",level:3},{value:"\u7ed3\u6784\u6027\u4f2a\u7c7b",id:"\u7ed3\u6784\u6027\u4f2a\u7c7b",level:3},{value:"\u4ec0\u4e48\u662f\u4f2a\u5143\u7d20\uff1f",id:"\u4ec0\u4e48\u662f\u4f2a\u5143\u7d20",level:2},{value:"\u4f2a\u7c7b\u548c\u4f2a\u5143\u7d20\u7684\u533a\u522b",id:"\u4f2a\u7c7b\u548c\u4f2a\u5143\u7d20\u7684\u533a\u522b",level:2}],p={toc:c};function k(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5f88\u591a\u4eba\u7ecf\u5e38\u5bf9CSS\u4e2d\u7684\u4f2a\u7c7b\u548c\u4f2a\u5143\u7d20\u5206\u4e0d\u6e05\u695a\uff0c\u6216\u8005\u5c06\u8fd9\u4e24\u8005\u6df7\u4e3a\u4e00\u8c08\uff0c\u4eca\u5929\u8ba9\u6211\u4eec\u6765\u4e86\u89e3\u4e0b\u8fd9\u4e24\u8005\u90fd\u6709\u54ea\u4e9b\u533a\u522b\u3002\u5728CSS3\u4e4b\u524d\u662f\u6ca1\u6709\u4f2a\u5143\u7d20\u4e0e\u4f2a\u7c7b\u7684\u533a\u522b\u7684\uff0c\u76f4\u5230CSS3\u624d\u5c06\u8fd9\u4e8c\u8005\u533a\u5206\u5f00\u6765\u3002")),(0,l.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u8981\u5f15\u5165\u4f2a\u7c7b\u548c\u4f2a\u5143\u7d20"},"\u4e3a\u4ec0\u4e48\u8981\u5f15\u5165\u4f2a\u7c7b\u548c\u4f2a\u5143\u7d20\uff1f"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"CSS\u4e4b\u6240\u4ee5\u8981\u5f15\u5165\u4f2a\u7c7b\u548c\u4f2a\u5143\u7d20\u662f\u4e3a\u4e86\u683c\u5f0f\u5316\u6587\u6863\u6811\u4e4b\u5916\u7684\u4fe1\u606f\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u4f2a\u7c7b\u548c\u4f2a\u5143\u7d20\u662f\u7528\u6765\u4fee\u9970\u4e0d\u5728\u6587\u6863\u6811\u7684\u90e8\u5206\uff0c\u6bd4\u5982\u7b2c\u4e00\u53e5\u8bdd\u4e2d\u7684\u7b2c\u4e00\u4e2a\u5b57\u6bcd\u6216\u5217\u8868\u4e2d\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\u3002")),(0,l.kt)("h2",{id:"\u4ec0\u4e48\u662f\u4f2a\u7c7b"},"\u4ec0\u4e48\u662f\u4f2a\u7c7b\uff1f"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4f2a\u7c7b\u8868\u793a\u7684\u662f\u88ab\u9009\u62e9\u5143\u7d20\u7684\u67d0\u79cd\u72b6\u6001,\u4f8b\u5982hover\u3002")),(0,l.kt)("h2",{id:"\u4f2a\u7c7b\u7684\u5206\u7c7b"},"\u4f2a\u7c7b\u7684\u5206\u7c7b"),(0,l.kt)("h3",{id:"\u72b6\u6001\u6027\u4f2a\u7c7b"},"\u72b6\u6001\u6027\u4f2a\u7c7b"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u72b6\u6001\u6027\u4f2a\u7c7b\u662f\u6839\u636e\u5143\u7d20\u5f53\u524d\u7684\u72b6\u6001\u8fdb\u884c\u9009\u62e9\u7684\uff0c\u5f53\u5143\u7d20\u8fdb\u5165\u67d0\u79cd\u72b6\u6001\u65f6\u5448\u73b0\u4e00\u79cd\u6837\u5f0f\uff0c\u8fdb\u5165\u53e6\u4e00\u79cd\u72b6\u6001\u65f6\u5448\u73b0\u53e6\u4e00\u79cd\u6837\u5f0f\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5178\u578b\u7684\u72b6\u6001\u6027\u4f2a\u7c7b\u6709\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},":link \u5e94\u7528\u4e0e\u672a\u88ab\u8bbf\u95ee\u8fc7\u7684\u94fe\u63a5\u3002"),(0,l.kt)("li",{parentName:"ul"},":hover \u5e94\u7528\u4e8e\u9f20\u6807\u60ac\u505c\u5230\u7684\u5143\u7d20\u3002"),(0,l.kt)("li",{parentName:"ul"},":active \u5e94\u7528\u4e8e\u88ab\u6fc0\u6d3b\u7684\u5143\u7d20\u3002"),(0,l.kt)("li",{parentName:"ul"},":visited \u5e94\u7528\u4e8e\u88ab\u8bbf\u95ee\u8fc7\u7684\u94fe\u63a5\uff0c\u4e0e:link\u4e92\u65a5\u3002"),(0,l.kt)("li",{parentName:"ul"},":focus \u5e94\u7528\u4e8e\u62e5\u6709\u952e\u76d8\u8f93\u5165\u7126\u70b9\u7684\u5143\u7d20\u3002")),(0,l.kt)("h3",{id:"\u7ed3\u6784\u6027\u4f2a\u7c7b"},"\u7ed3\u6784\u6027\u4f2a\u7c7b"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"CSS3\u65b0\u589e\u9009\u62e9\u5668\uff0c\u5229\u7528DOM\u6811\u8fdb\u884c\u5143\u7d20\u8fc7\u6ee4\uff0c\u901a\u8fc7\u6587\u6863\u7ed3\u6784\u7684\u4e92\u76f8\u5173\u7cfb\u6765\u5339\u914d\u5143\u7d20\uff0c\u80fd\u591f\u51cf\u5c11class\u548cid\u5c5e\u6027\u7684\u5b9a\u4e49\uff0c\u4f7f\u5f97\u6587\u6863\u7ed3\u6784\u66f4\u52a0\u7b80\u6d01\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5178\u578b\u7684\u7ed3\u6784\u6027\u4f2a\u7c7b\u6709\u4e0b\u9762\u7684\u4f8b\u5b50\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"div:first-child \u9009\u62e9\u5c5e\u4e8e\u5176\u7236\u5143\u7d20\u7684\u7b2c\u4e00\u4e2a\u5b50\u5143\u7d20\u7684\u6bcf\u4e2adiv\u5143\u7d20\u3002"),(0,l.kt)("li",{parentName:"ul"},"div:last-child \u9009\u62e9\u5c5e\u4e8e\u5176\u7236\u5143\u7d20\u6700\u540e\u4e00\u4e2a\u5b50\u5143\u7d20\u7684\u6bcf\u4e2adiv\u5143\u7d20\u3002"),(0,l.kt)("li",{parentName:"ul"},"div:nth-child(n) \u9009\u62e9\u5c5e\u4e8e\u5176\u7236\u5143\u7d20\u7684\u7b2cn\u4e2a\u5b50\u5143\u7d20\u7684\u6bcf\u4e2adiv\u5143\u7d20\u3002")),(0,l.kt)("h2",{id:"\u4ec0\u4e48\u662f\u4f2a\u5143\u7d20"},"\u4ec0\u4e48\u662f\u4f2a\u5143\u7d20\uff1f"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4f2a\u5143\u7d20\u8868\u793a\u7684\u662f\u88ab\u9009\u62e9\u5143\u7d20\u7684\u67d0\u4e2a\u90e8\u5206\uff0c\u8fd9\u4e2a\u90e8\u5206\u770b\u8d77\u6765\u50cf\u4e00\u4e2a\u72ec\u7acb\u7684\u5143\u7d20\uff0c\u4f8b\u5982::before\u548c::after\u3002")),(0,l.kt)("h2",{id:"\u4f2a\u7c7b\u548c\u4f2a\u5143\u7d20\u7684\u533a\u522b"},"\u4f2a\u7c7b\u548c\u4f2a\u5143\u7d20\u7684\u533a\u522b"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4f2a\u7c7b\u662f\u64cd\u4f5c\u6587\u6863\u4e2d\u5df2\u6709\u7684\u5143\u7d20\uff0c\u800c\u4f2a\u5143\u7d20\u5219\u662f\u521b\u5efa\u4e86\u4e00\u4e2a\u4e0d\u5728\u6587\u6863\u6811\u4e2d\u7684\u5143\u7d20\uff0c\u5e76\u4e3a\u5176\u6dfb\u52a0\u6837\u5f0f\u3002")))}k.isMDXComponent=!0}}]);