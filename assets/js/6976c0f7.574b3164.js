"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[74021],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),f=l,g=m["".concat(u,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31268:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),l=(n(67294),n(3905));const a={title:"LeetCode\u2014\u2014\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4\uff08\u53cc\u6307\u9488\uff09",date:new Date("2021-12-17T00:00:00.000Z"),author:"Justin",top:!1,cover:!1,categories:"LeetCode",tags:["LeetCode"]},o=void 0,i={permalink:"/blog/LeetCode\u2014\u2014\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4\uff08\u53cc\u6307\u9488\uff09",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/LeetCode\u2014\u2014\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4\uff08\u53cc\u6307\u9488\uff09.md",source:"@site/blog/LeetCode\u2014\u2014\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4\uff08\u53cc\u6307\u9488\uff09.md",title:"LeetCode\u2014\u2014\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4\uff08\u53cc\u6307\u9488\uff09",description:"\u9898\u76ee\u63cf\u8ff0",date:"2021-12-17T00:00:00.000Z",formattedDate:"2021\u5e7412\u670817\u65e5",tags:[{label:"LeetCode",permalink:"/blog/tags/leet-code"}],readingTime:1.375,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"LeetCode\u2014\u2014\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4\uff08\u53cc\u6307\u9488\uff09",date:"2021-12-17T00:00:00.000Z",author:"Justin",top:!1,cover:!1,categories:"LeetCode",tags:["LeetCode"]},prevItem:{title:"\u8fd9\u4e00\u6b21\uff0c\u5f7b\u5e95\u641e\u61c2\u7bad\u5934\u51fd\u6570",permalink:"/blog/\u8fd9\u4e00\u6b21\uff0c\u5f7b\u5e95\u641e\u61c2\u7bad\u5934\u51fd\u6570"},nextItem:{title:"\u8fd9\u4e00\u6b21\u5f7b\u5e95\u641e\u61c2CSRF\u4e0eXSS",permalink:"/blog/\u8fd9\u4e00\u6b21\u5f7b\u5e95\u641e\u61c2CSRF\u4e0eXSS"}},u={authorsImageUrls:[void 0]},c=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u89e3\u9898\u601d\u8def",id:"\u89e3\u9898\u601d\u8def",level:2},{value:"AC\u4ee3\u7801",id:"ac\u4ee3\u7801",level:2},{value:"\u9898\u76ee\u53cd\u601d",id:"\u9898\u76ee\u53cd\u601d",level:2}],s={toc:c};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u9898\u76ee\u63cf\u8ff0"},"\u9898\u76ee\u63cf\u8ff0"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/860cffda351e0350f20dd29d45b88786.png",alt:"image.png"})),(0,l.kt)("h2",{id:"\u89e3\u9898\u601d\u8def"},"\u89e3\u9898\u601d\u8def"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u9996\u5148\u4f7f\u7528splice\u65b9\u6cd5\uff0c\u5c06nums1\u548cnums2\u6307\u5b9a\u4f4d\u7f6e\u4e4b\u540e\u7684\u65e0\u5173\u5143\u7d20\u53bb\u9664\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u4e8c\u8005\u5176\u4e2d\u6709\u4e00\u4e2a\u662f\u7a7a\u6570\u7ec4\uff0c\u5219\u76f4\u63a5push\u5230nums1\u4e2d\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u53cc\u6307\u9488\uff0c\u8fdb\u884c\u4f9d\u6b21\u6bd4\u8f83\uff0c\u5c0f\u7684\u653e\u5230nums1\u4e2d\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5224\u65ad\u5de6\u53f3\u6307\u9488\u8c01\u5148\u8d70\u5230\u5934\u7684\u60c5\u51b5\u3002")),(0,l.kt)("h2",{id:"ac\u4ee3\u7801"},"AC\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var merge = function(nums1, m, nums2, n) {\n  // \u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u662f\u5c06nums2\u5408\u5e76\u5230nums1\u4e2d\uff0c\u5e76\u4e14\u662f\u539f\u5730\u6392\u5e8f\uff0c\u4e0d\u5141\u8bb8\u51fa\u73b0\u8d4b\u503c\u7684\u60c5\u51b5\u3002\n  // 1. \u53bb\u9664\u65e0\u5173\u5143\u7d20\n  nums1.splice(m);\n  nums2.splice(n);\n  // 2. \u7279\u6b8a\u60c5\u51b5\u5224\u65ad\n  if (nums1.length === 0 || nums2.length === 0) {\n    nums1.push(...nums2);\n    return;\n  }\n  // 3. \u4e00\u822c\u60c5\u51b5\u5224\u65ad\n  let left = 0;\n  let right = 0;\n  while (left < nums1.length && right < nums2.length) {\n    if (nums1[left] <= nums2[right]) {\n      left++;\n      continue;\n    } else {\n      nums1.splice(left,0,nums2[right]);\n      right++\n    }\n  }\n  if (left === nums1.length && right < nums2.length) {\n    nums1.push(...nums2.slice(right));\n  }\n\n};\n")),(0,l.kt)("h2",{id:"\u9898\u76ee\u53cd\u601d"},"\u9898\u76ee\u53cd\u601d"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b66\u4f1a\u4f7f\u7528splice\u65b9\u6cd5\u6dfb\u52a0\u5143\u7d20\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u610f\u9898\u76ee\u7684\u8981\u6c42\u662f\u539f\u5730\u6392\u5e8f\uff0c\u76f4\u63a5\u8d4b\u503c\u7ed9\u4e00\u4e2a\u53c2\u6570\u662f\u4e0d\u4f1a\u901a\u8fc7\u6d4b\u8bd5\u7684\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5b66\u4f1a\u4f7f\u7528\u53cc\u6307\u9488\u3002")))}p.isMDXComponent=!0}}]);