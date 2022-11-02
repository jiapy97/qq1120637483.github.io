"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[4887],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),k=u(n),m=o,f=k["".concat(l,".").concat(m)]||k[m]||s[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=k;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},77670:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const i={title:"\u6d45\u6790Vue\u4e2d$nextTick\u7684\u539f\u7406",date:new Date("2022-04-26T00:00:00.000Z"),author:"Justin",top:!1,cover:!1,categories:"Vue",tags:["Vue"]},a=void 0,c={permalink:"/blog/\u6d45\u6790Vue\u4e2d$nextTick\u7684\u539f\u7406",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/\u6d45\u6790Vue\u4e2d$nextTick\u7684\u539f\u7406.md",source:"@site/blog/\u6d45\u6790Vue\u4e2d$nextTick\u7684\u539f\u7406.md",title:"\u6d45\u6790Vue\u4e2d$nextTick\u7684\u539f\u7406",description:"\u4e00\u3001$nextTick\u6709\u4ec0\u4e48\u7528\uff1f",date:"2022-04-26T00:00:00.000Z",formattedDate:"2022\u5e744\u670826\u65e5",tags:[{label:"Vue",permalink:"/blog/tags/vue"}],readingTime:1.29,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"\u6d45\u6790Vue\u4e2d$nextTick\u7684\u539f\u7406",date:"2022-04-26T00:00:00.000Z",author:"Justin",top:!1,cover:!1,categories:"Vue",tags:["Vue"]},prevItem:{title:"\u4f60\u771f\u7684\u4e86\u89e3Vue\u7684\u751f\u547d\u5468\u671f\u5417\uff1f",permalink:"/blog/\u4f60\u771f\u7684\u4e86\u89e3Vue\u7684\u751f\u547d\u5468\u671f\u5417\uff1f"},nextItem:{title:"\u624b\u5199\u51fd\u6570\u67ef\u91cc\u5316",permalink:"/blog/Vue\u4e2d\u7684methods\u3001watch\u3001computed\u3001filters\u5230\u5e95\u6709\u4ec0\u4e48\u533a\u522b\uff1f"}},l={authorsImageUrls:[void 0]},u=[{value:"\u4e00\u3001$nextTick\u6709\u4ec0\u4e48\u7528\uff1f",id:"\u4e00nexttick\u6709\u4ec0\u4e48\u7528",level:2},{value:"\u4e8c\u3001$nextTick\u7684\u539f\u7406",id:"\u4e8cnexttick\u7684\u539f\u7406",level:2},{value:"\u4e09\u3001\u5faa\u73af\u8c03\u7528\u7684\u8bddnextTick\u91cc\u9762\u6709\u5bb9\u9519\u673a\u5236\u5417\uff1f",id:"\u4e09\u5faa\u73af\u8c03\u7528\u7684\u8bddnexttick\u91cc\u9762\u6709\u5bb9\u9519\u673a\u5236\u5417",level:2}],p={toc:u};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4e00nexttick\u6709\u4ec0\u4e48\u7528"},"\u4e00\u3001$nextTick\u6709\u4ec0\u4e48\u7528\uff1f"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Vue\u662f\u5f02\u6b65\u6e32\u67d3\u7684\u6846\u67b6\u3002"),(0,o.kt)("li",{parentName:"ol"},"data\u6539\u53d8\u4e4b\u540e\uff0cDOM\u4e0d\u4f1a\u7acb\u523b\u6e32\u67d3\u3002"),(0,o.kt)("li",{parentName:"ol"},"$nextTick\u4f1a\u5728DOM\u6e32\u67d3\u4e4b\u540e\u88ab\u89e6\u53d1\uff0c\u4ee5\u83b7\u53d6\u6700\u65b0\u7684DOM\u8282\u70b9\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8fde\u7eed\u591a\u6b21\u7684\u5f02\u6b65\u6e32\u67d3\uff0c$nextTick\u53ea\u4f1a\u6267\u884c\u6700\u540e\u4e00\u6b21\u6e32\u67d3\u540e\u7684\u7ed3\u679c\u3002")),(0,o.kt)("h2",{id:"\u4e8cnexttick\u7684\u539f\u7406"},"\u4e8c\u3001$nextTick\u7684\u539f\u7406"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\\$nextTick\u4e3b\u8981\u901a\u8fc7\u4e8b\u4ef6\u5faa\u73af\u4e2d\u7684\u4efb\u52a1\u961f\u5217\u7684\u65b9\u5f0f\u5f02\u6b65\u6267\u884c\u4f20\u5165\u7684\u56de\u8c03\u51fd\u6570\uff0c\u9996\u5148\u4f1a\u5224\u65ad\u5f53\u524d\u7684\u6267\u884c\u73af\u5883\u662f\u5426\u652f\u6301Promise\uff0cMutationObserver\uff0csetImmediate\uff0csetTimeout\u3002\u5982\u679c\u652f\u6301\u5219\u521b\u5efa\u5bf9\u5e94\u7684\u5f02\u6b65\u65b9\u6cd5\uff0c\u8fd9\u91cc\u7684MutationObserver\u5e76\u4e0d\u662f\u76d1\u542cDOM\uff0c\u800c\u662f\u5229\u7528\u5176\u5fae\u4efb\u52a1\u7279\u6027\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\u66f4\u65b0DOM\u7684\u65b9\u6cd5\u4e5f\u662f\u901a\u8fc7nextTick\u8fdb\u884c\u8c03\u7528\u7684\uff0c\u56e0\u6b64\u5c31\u53ef\u4ee5\u5b9e\u73b0\u4f20\u5165$.nextTick\u7684\u56de\u8c03\u51fd\u6570\u5728DOM\u6e32\u67d3\u5b8c\u6210\u4e4b\u540e\u6267\u884c\u8fd9\u4e9b\u5fae\u4efb\u52a1\u3002")),(0,o.kt)("h2",{id:"\u4e09\u5faa\u73af\u8c03\u7528\u7684\u8bddnexttick\u91cc\u9762\u6709\u5bb9\u9519\u673a\u5236\u5417"},"\u4e09\u3001\u5faa\u73af\u8c03\u7528\u7684\u8bddnextTick\u91cc\u9762\u6709\u5bb9\u9519\u673a\u5236\u5417\uff1f"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u591a\u6b21\u8c03\u7528 nextTick \u4f1a\u5c06\u65b9\u6cd5\u5b58\u5165\u961f\u5217 callbacks \u4e2d\uff0c\u901a\u8fc7\u8fd9\u4e2a\u5f02\u6b65\u65b9\u6cd5\u6e05\u7a7a\u5f53\u524d\u961f\u5217\u3002")))}s.isMDXComponent=!0}}]);