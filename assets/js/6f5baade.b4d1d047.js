"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[90289],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>s});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),v=u(r),s=n,m=v["".concat(p,".").concat(s)]||v[s]||k[s]||l;return r?a.createElement(m,o(o({ref:t},c),{},{components:r})):a.createElement(m,o({ref:t},c))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=v;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}v.displayName="MDXCreateElement"},77034:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const l={title:"\u8fd9\u4e00\u6b21\uff0c\u5f7b\u5e95\u641e\u61c2Vue\u4e2d\u7684keep-alive",date:new Date("2022-05-05T00:00:00.000Z"),author:"Justin",top:!1,cover:!1,categories:"Vue",tags:["Vue"]},o=void 0,i={permalink:"/blog/\u8fd9\u4e00\u6b21\uff0c\u5f7b\u5e95\u641e\u61c2Vue\u4e2d\u7684keep-alive",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/\u8fd9\u4e00\u6b21\uff0c\u5f7b\u5e95\u641e\u61c2Vue\u4e2d\u7684keep-alive.md",source:"@site/blog/\u8fd9\u4e00\u6b21\uff0c\u5f7b\u5e95\u641e\u61c2Vue\u4e2d\u7684keep-alive.md",title:"\u8fd9\u4e00\u6b21\uff0c\u5f7b\u5e95\u641e\u61c2Vue\u4e2d\u7684keep-alive",description:"keep-alive\u7684\u4f7f\u7528\u573a\u666f\u53ca\u5176\u7279\u70b9",date:"2022-05-05T00:00:00.000Z",formattedDate:"2022\u5e745\u67085\u65e5",tags:[{label:"Vue",permalink:"/blog/tags/vue"}],readingTime:2.015,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"\u8fd9\u4e00\u6b21\uff0c\u5f7b\u5e95\u641e\u61c2Vue\u4e2d\u7684keep-alive",date:"2022-05-05T00:00:00.000Z",author:"Justin",top:!1,cover:!1,categories:"Vue",tags:["Vue"]},prevItem:{title:"for...in\u548cfor....of\u7684\u533a\u522b\u662f\u4ec0\u4e48\uff1f",permalink:"/blog/for...in\u548cfor....of\u7684\u533a\u522b\u662f\u4ec0\u4e48\uff1f"},nextItem:{title:"LeetCode\u2014\u2014\u7b80\u5316\u8def\u5f84\uff08\u8f85\u52a9\u6808\uff09",permalink:"/blog/LeetCode\u2014\u2014\u7b80\u5316\u8def\u5f84\uff08\u8f85\u52a9\u6808\uff09"}},p={authorsImageUrls:[void 0]},u=[{value:"keep-alive\u7684\u4f7f\u7528\u573a\u666f\u53ca\u5176\u7279\u70b9",id:"keep-alive\u7684\u4f7f\u7528\u573a\u666f\u53ca\u5176\u7279\u70b9",level:2},{value:"keep-alive\u7684\u539f\u7406\uff1f",id:"keep-alive\u7684\u539f\u7406",level:2},{value:"keep-alive\u5982\u4f55\u6839\u636e\u4e0d\u540c\u573a\u666f\u6765\u66f4\u65b0\u6570\u636e\uff1f",id:"keep-alive\u5982\u4f55\u6839\u636e\u4e0d\u540c\u573a\u666f\u6765\u66f4\u65b0\u6570\u636e",level:2}],c={toc:u};function k(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"keep-alive\u7684\u4f7f\u7528\u573a\u666f\u53ca\u5176\u7279\u70b9"},"keep-alive\u7684\u4f7f\u7528\u573a\u666f\u53ca\u5176\u7279\u70b9"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u7528\u4e8eVue\u6027\u80fd\u4f18\u5316\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u7f13\u5b58\u7ec4\u4ef6\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u9891\u7e41\u5207\u6362\uff0c\u4e0d\u9700\u8981\u91cd\u590d\u6e32\u67d3\u3002"),(0,n.kt)("li",{parentName:"ol"},"keep-alive\u6709include\u548cexclude\u5c5e\u6027\uff0c\u8fd9\u4e24\u4e2a\u5c5e\u6027\u51b3\u5b9a\u4e86\u54ea\u4e9b\u7ec4\u4ef6\u53ef\u4ee5\u8fdb\u5165\u7f13\u5b58\u3002"),(0,n.kt)("li",{parentName:"ol"},"keep-alive\u8fd8\u6709\u4e00\u4e2amax\u5c5e\u6027\uff0c\u901a\u8fc7\u5b83\u53ef\u4ee5\u8bbe\u7f6e\u6700\u5927\u7f13\u5b58\u6570\uff0c\u5f53\u7f13\u5b58\u7684\u5b9e\u4f8b\u8d85\u8fc7max\u7684\u65f6\u5019\uff0cvue\u4f1a\u5220\u9664\u6700\u4e45\u6ca1\u6709\u4f7f\u7528\u7684\u7f13\u5b58\uff0c\u5c5e\u4e8eLRU\u7f13\u5b58\u7b56\u7565\u3002"),(0,n.kt)("li",{parentName:"ol"},"keep-alive\u5176\u5185\u90e8\u6240\u6709\u5d4c\u5957\u7684\u7ec4\u4ef6\u90fd\u5177\u6709\u4e24\u4e2a\u751f\u547d\u5468\u671f\u94a9\u5b50\u51fd\u6570\uff0c\u5206\u522b\u662factivated\u548cdeactivated\uff0c\u5b83\u4eec\u5206\u522b\u5728\u7ec4\u4ef6\u6fc0\u6d3b\u548c\u5931\u6d3b\u7684\u65f6\u5019\u89e6\u53d1\u3002")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u5c06\u7ec4\u4ef6\u653e\u5165keep-alive\u4e2d\u5373\u53ef\u5b9e\u73b0\u7ec4\u4ef6\u7684\u7f13\u5b58\u3002")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"<keep-alive>\n    <KeepaliveA v-if=\"state === 'A' \" />\n    <KeepaliveB v-if=\"state === 'B' \"/>\n    <KeepaliveC v-if=\"state === 'C' \"/>\n</keep-alive>\n")),(0,n.kt)("h2",{id:"keep-alive\u7684\u539f\u7406"},"keep-alive\u7684\u539f\u7406\uff1f"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"keep-alive\u5728\u5b9e\u73b0\u4e0a\uff0c\u7ef4\u62a4\u4e86\u4e00\u4e2akey\u6570\u7ec4\u548c\u4e00\u4e2a\u7f13\u5b58\u5bf9\u8c61\uff0c\u8fd9\u4e2akey\u6570\u7ec4\u8bb0\u5f55\u76ee\u524d\u7f13\u5b58\u7684\u7ec4\u4ef6\u7684key\u503c\uff0c\u5982\u679c\u8fd9\u4e2a\u7ec4\u4ef6\u6ca1\u6709\u6307\u5b9akey\u503c\uff0c\u4f1a\u81ea\u52a8\u751f\u6210\u4e00\u4e2a\u552f\u4e00\u7684key\u503c\uff0c\u7f13\u5b58\u5bf9\u8c61\u4f1a\u4ee5key\u503c\u4e3a\u952e\uff0cvnode\u4e3a\u503c\uff0c\u7528\u4e8e\u7f13\u5b58\u7ec4\u4ef6\u5bf9\u5e94\u7684\u865a\u62dfDOM\uff0c\u5728keep-alive\u7684\u6e32\u67d3\u51fd\u6570\u4e2d\uff0c\u5176\u57fa\u672c\u903b\u8f91\u662f\u5224\u65ad\u5f53\u524d\u6e32\u67d3\u7684vnode\u662f\u5426\u6709\u5bf9\u5e94\u7684\u7f13\u5b58\uff0c\u5982\u679c\u6709\u5219\u4ece\u7f13\u5b58\u4e2d\u8bfb\u53d6\u5230\u5bf9\u5e94\u7684\u7ec4\u4ef6\u5b9e\u4f8b\uff0c\u6ca1\u6709\u5c31\u628a\u5b83\u7f13\u5b58\u3002")),(0,n.kt)("h2",{id:"keep-alive\u5982\u4f55\u6839\u636e\u4e0d\u540c\u573a\u666f\u6765\u66f4\u65b0\u6570\u636e"},"keep-alive\u5982\u4f55\u6839\u636e\u4e0d\u540c\u573a\u666f\u6765\u66f4\u65b0\u6570\u636e\uff1f"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u53ef\u4ee5\u5229\u7528keep-alive\u63d0\u4f9b\u7684include\u548cexclude\u6307\u5b9a\u7f13\u5b58\u54ea\u4e9b\u7ec4\u4ef6\u4e0d\u7f13\u5b58\u54ea\u4e9b\u7ec4\u4ef6\uff0c\u7136\u540e\u914d\u5408vuex\u7b49\u72b6\u6001\u7ba1\u7406\u5de5\u5177\u5b9e\u73b0\u52a8\u6001\u63a7\u5236\u3002")))}k.isMDXComponent=!0}}]);