"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[43083],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||l;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},73898:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const l={title:"Vue3\u4e2d\u7684Teleport\u6709\u4ec0\u4e48\u7528\uff1f",date:new Date("2021-12-25T00:00:00.000Z"),author:"Justin",top:!1,cover:!1,categories:"Vue",tags:["Vue"]},a=void 0,i={permalink:"/blog/Vue3\u4e2d\u7684Teleport\u6709\u4ec0\u4e48\u7528\uff1f",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/Vue3\u4e2d\u7684Teleport\u6709\u4ec0\u4e48\u7528\uff1f.md",source:"@site/blog\\Vue3\u4e2d\u7684Teleport\u6709\u4ec0\u4e48\u7528\uff1f.md",title:"Vue3\u4e2d\u7684Teleport\u6709\u4ec0\u4e48\u7528\uff1f",description:"\u4e00\u3001Teleport\u6709\u4ec0\u4e48\u7528\uff1f",date:"2021-12-25T00:00:00.000Z",formattedDate:"2021\u5e7412\u670825\u65e5",tags:[{label:"Vue",permalink:"/blog/tags/vue"}],readingTime:.58,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"Vue3\u4e2d\u7684Teleport\u6709\u4ec0\u4e48\u7528\uff1f",date:"2021-12-25T00:00:00.000Z",author:"Justin",top:!1,cover:!1,categories:"Vue",tags:["Vue"]},prevItem:{title:"\u7cfb\u7edf\u68b3\u7406Webpack\u914d\u7f6e",permalink:"/blog/\u7cfb\u7edf\u68b3\u7406Webpack\u914d\u7f6e"},nextItem:{title:"LeetCode\u2014\u2014\u6570\u7ec4\u4e2d\u91cd\u590d\u7684\u6570\u636e\uff08\u4f7f\u7528\u7b26\u53f7\u8868\u793a\u662f\u5426\u51fa\u73b0\u8fc7\uff09",permalink:"/blog/LeetCode\u2014\u2014\u6570\u7ec4\u4e2d\u91cd\u590d\u7684\u6570\u636e\uff08\u4f7f\u7528\u7b26\u53f7\u8868\u793a\u662f\u5426\u51fa\u73b0\u8fc7\uff09"}},c={authorsImageUrls:[void 0]},p=[{value:"\u4e00\u3001Teleport\u6709\u4ec0\u4e48\u7528\uff1f",id:"\u4e00teleport\u6709\u4ec0\u4e48\u7528",level:2},{value:"\u4e8c\u3001\u5982\u4f55\u4f7f\u7528\uff1f",id:"\u4e8c\u5982\u4f55\u4f7f\u7528",level:2}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4e00teleport\u6709\u4ec0\u4e48\u7528"},"\u4e00\u3001Teleport\u6709\u4ec0\u4e48\u7528\uff1f"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Vue3\u4e2d\u7684\u7ec4\u4ef6\u6a21\u677f\u5c5e\u4e8e\u8be5\u7ec4\u4ef6\uff0c\u6709\u65f6\u5019\u6211\u4eec\u60f3\u628a\u6a21\u677f\u7684\u5185\u5bb9\u79fb\u52a8\u5230\u5f53\u524d\u7ec4\u4ef6\u4e4b\u5916\u7684DOM\u4e2d\uff0c\u8fd9\u4e2a\u65f6\u5019\u5c31\u53ef\u4ee5\u4f7f\u7528Teleport\u3002")),(0,o.kt)("h2",{id:"\u4e8c\u5982\u4f55\u4f7f\u7528"},"\u4e8c\u3001\u5982\u4f55\u4f7f\u7528\uff1f"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u53ea\u9700\u5c06\u7ec4\u4ef6\u5305\u88f9\u5728teleport\u7ec4\u4ef6\u4e2d\uff0c\u5e76\u6307\u793a\u79fb\u52a8\u5230\u54ea\u4e2aDOM\u5143\u7d20\u4e2d\u5373\u53ef\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<template>\n<teleport to="body">\n    <div class="modal-bg" v-if="visible">\n        <div class="modal-content">\n            <button class="close" @click="$emit(\'close-modal\')"> X </button>\n            <div class="model-title">{{title}}</div>\n            <div class="model-body">\n                <slot>\n                    \u6a21\u6001\u5bf9\u8bdd\u6846\n                </slot>\n            </div>\n        </div>\n    </div>\n</teleport>\n</template>\n')))}s.isMDXComponent=!0}}]);