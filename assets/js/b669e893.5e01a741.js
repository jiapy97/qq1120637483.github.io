"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[64918],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>v});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),f=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=f(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=f(r),v=o,m=s["".concat(c,".").concat(v)]||s[v]||p[v]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var f=2;f<a;f++)i[f]=r[f];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},5830:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>f});var n=r(87462),o=(r(67294),r(3905));const a={title:"Vue\u4e2d\u7684v-if\u548cv-for\u4e3a\u4ec0\u4e48\u4e0d\u80fd\u4e00\u8d77\u7528\uff1f",date:new Date("2022-05-07T00:00:00.000Z"),author:"Justin",top:!1,cover:!1,categories:"\u9762\u8bd5\u9898",tags:["\u9762\u8bd5\u9898"]},i=void 0,l={permalink:"/blog/Vue\u4e2d\u7684v-if\u548cv-for\u4e3a\u4ec0\u4e48\u4e0d\u80fd\u4e00\u8d77\u7528\uff1f",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/Vue\u4e2d\u7684v-if\u548cv-for\u4e3a\u4ec0\u4e48\u4e0d\u80fd\u4e00\u8d77\u7528\uff1f.md",source:"@site/blog/Vue\u4e2d\u7684v-if\u548cv-for\u4e3a\u4ec0\u4e48\u4e0d\u80fd\u4e00\u8d77\u7528\uff1f.md",title:"Vue\u4e2d\u7684v-if\u548cv-for\u4e3a\u4ec0\u4e48\u4e0d\u80fd\u4e00\u8d77\u7528\uff1f",description:"\u5047\u5982v-if\u548cv-for\u4e00\u8d77\u4f7f\u7528\u4f1a\u51fa\u73b0\u4ec0\u4e48\u60c5\u51b5\uff1f",date:"2022-05-07T00:00:00.000Z",formattedDate:"2022\u5e745\u67087\u65e5",tags:[{label:"\u9762\u8bd5\u9898",permalink:"/blog/tags/\u9762\u8bd5\u9898"}],readingTime:.585,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"Vue\u4e2d\u7684v-if\u548cv-for\u4e3a\u4ec0\u4e48\u4e0d\u80fd\u4e00\u8d77\u7528\uff1f",date:"2022-05-07T00:00:00.000Z",author:"Justin",top:!1,cover:!1,categories:"\u9762\u8bd5\u9898",tags:["\u9762\u8bd5\u9898"]},prevItem:{title:"Promise\u7684\u5f02\u5e38\u6355\u83b7\u95ee\u9898",permalink:"/blog/Promise\u7684\u5f02\u5e38\u6355\u83b7\u95ee\u9898"},nextItem:{title:"for...in\u548cfor....of\u7684\u533a\u522b\u662f\u4ec0\u4e48\uff1f",permalink:"/blog/for...in\u548cfor....of\u7684\u533a\u522b\u662f\u4ec0\u4e48\uff1f"}},c={authorsImageUrls:[void 0]},f=[{value:"\u5047\u5982v-if\u548cv-for\u4e00\u8d77\u4f7f\u7528\u4f1a\u51fa\u73b0\u4ec0\u4e48\u60c5\u51b5\uff1f",id:"\u5047\u5982v-if\u548cv-for\u4e00\u8d77\u4f7f\u7528\u4f1a\u51fa\u73b0\u4ec0\u4e48\u60c5\u51b5",level:2},{value:"\u4e3a\u4ec0\u4e48\u4e0d\u80fd\u4e00\u8d77\u4f7f\u7528\uff1f",id:"\u4e3a\u4ec0\u4e48\u4e0d\u80fd\u4e00\u8d77\u4f7f\u7528",level:2}],u={toc:f};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5047\u5982v-if\u548cv-for\u4e00\u8d77\u4f7f\u7528\u4f1a\u51fa\u73b0\u4ec0\u4e48\u60c5\u51b5"},"\u5047\u5982v-if\u548cv-for\u4e00\u8d77\u4f7f\u7528\u4f1a\u51fa\u73b0\u4ec0\u4e48\u60c5\u51b5\uff1f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<ul>\n  <li v-for="(item,index) in arr " v-if="flag" :key="index"  >\n    {{item}}\n  </li>\n</ul>\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4e00\u8d77\u4f7f\u7528\uff0c\u4f1a\u51fa\u73b0\u4e0b\u9762\u7684\u9519\u8bef\u63d0\u793a\uff1a")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/7b7a4485ef10f50740dc8c06fbac449e.png",alt:"image.png"})),(0,o.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u4e0d\u80fd\u4e00\u8d77\u4f7f\u7528"},"\u4e3a\u4ec0\u4e48\u4e0d\u80fd\u4e00\u8d77\u4f7f\u7528\uff1f"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u56e0\u4e3av-for\u7684\u4f18\u5148\u7ea7\u6bd4v-if\u7684\u4f18\u5148\u7ea7\u9ad8\uff0c\u6240\u4ee5\u5982\u679c\u5d4c\u5957\u4f7f\u7528\u7684\u8bdd\uff0c\u6bcf\u6b21v-for\u90fd\u4f1a\u6267\u884c\u4e00\u6b21v-if\uff0c\u9020\u6210\u91cd\u590d\u8ba1\u7b97\u7684\u95ee\u9898\uff0c\u4f1a\u5f71\u54cd\u6027\u80fd\uff0c\u6240\u4ee5vue\u5b98\u65b9\u4e0d\u63a8\u8350\u8fd9\u6837\u4f7f\u7528\u3002")))}p.isMDXComponent=!0}}]);