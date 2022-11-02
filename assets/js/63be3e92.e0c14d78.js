"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[57325],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57213:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"LeetCode\u2014\u2014\u7ec4\u5408\u603b\u548c\uff08DFS\uff09",date:new Date("2021-12-13T00:00:00.000Z"),author:"Justin",top:!1,cover:!1,categories:"LeetCode",tags:["LeetCode"]},i=void 0,l={permalink:"/blog/LeetCode\u2014\u2014\u7ec4\u5408\u603b\u548c\uff08DFS\uff09",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/LeetCode\u2014\u2014\u7ec4\u5408\u603b\u548c\uff08DFS\uff09.md",source:"@site/blog\\LeetCode\u2014\u2014\u7ec4\u5408\u603b\u548c\uff08DFS\uff09.md",title:"LeetCode\u2014\u2014\u7ec4\u5408\u603b\u548c\uff08DFS\uff09",description:"\u9898\u76ee\u63cf\u8ff0",date:"2021-12-13T00:00:00.000Z",formattedDate:"2021\u5e7412\u670813\u65e5",tags:[{label:"LeetCode",permalink:"/blog/tags/leet-code"}],readingTime:1.31,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"LeetCode\u2014\u2014\u7ec4\u5408\u603b\u548c\uff08DFS\uff09",date:"2021-12-13T00:00:00.000Z",author:"Justin",top:!1,cover:!1,categories:"LeetCode",tags:["LeetCode"]},prevItem:{title:"Egg.js\u4e2d\u914d\u7f6e\u8de8\u57df\u4e0e\u8def\u7531\u5206\u7ec4",permalink:"/blog/Egg.js\u4e2d\u914d\u7f6e\u8de8\u57df\u4e0e\u8def\u7531\u5206\u7ec4"},nextItem:{title:"\u8fd9\u4e00\u6b21\uff0c\u5f7b\u5e95\u641e\u61c2EventLoop",permalink:"/blog/\u8fd9\u4e00\u6b21\uff0c\u5f7b\u5e95\u641e\u61c2EventLoop"}},c={authorsImageUrls:[void 0]},p=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u89e3\u9898\u601d\u8def",id:"\u89e3\u9898\u601d\u8def",level:2},{value:"\u9898\u76ee\u53cd\u601d",id:"\u9898\u76ee\u53cd\u601d",level:2}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u9898\u76ee\u63cf\u8ff0"},"\u9898\u76ee\u63cf\u8ff0"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/4b8de592a62bc4f504e6e75f90543c37.png",alt:"image.png"})),(0,o.kt)("h2",{id:"\u89e3\u9898\u601d\u8def"},"\u89e3\u9898\u601d\u8def"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"DFS\u662f\u89e3\u51b3\u8fd9\u9053\u9898\u7684\u6838\u5fc3\u601d\u8def\uff0cDFS\u51fd\u6570\u603b\u5171\u63a5\u6536\u4e09\u4e2a\u53c2\u6570\u3002")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u904d\u5386\u7684\u8d77\u59cb\u4f4d\u7f6e\uff0c\u8fd9\u4e2a\u53c2\u6570\u5b58\u5728\u7684\u610f\u4e49\u5728\u4e8e\u9632\u6b62\u91cd\u590d\u904d\u5386\uff0c\u53ea\u6dfb\u52a0\u8fd9\u4e2a\u5143\u7d20\u540e\u9762\u7684\u5143\u7d20\uff0c\u8fd9\u4e2a\u5143\u7d20\u524d\u9762\u7684\u4e0d\u518d\u904d\u5386\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u4e34\u65f6\u6570\u7ec4\uff0c\u7528\u6765\u8bb0\u5f55\u4e00\u6b21\u904d\u5386\u7684\u6570\u7ec4\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u4e2a\u53c2\u6570\u662f\u4e34\u65f6\u6570\u7ec4\u5185\u7684\u548c\u3002")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u8fb9\u754c\u6761\u4ef6\u662f\u5982\u679c\u4e34\u65f6\u548c\u5927\u4e8e\u7b49\u4e8etarget\u5219\u7ee7\u7eed\u5224\u65ad\uff0c\u5982\u679c\u7b49\u4e8e\u5219\u5b58\u50a8\uff0c\u4e0d\u7b49\u4e8e\u5219\u8fd4\u56de\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var combinationSum = function(candidates, target) {\n\n  const res = [];\n\n  function dfs(start,temp,sum) {\n    if (sum >= target) {\n      if (sum === target) {\n        res.push(temp.slice());\n      }\n      return;\n    }\n    for (let i = start; i < candidates.length ;i++) {\n      temp.push(candidates[i]);\n      dfs(i,temp,sum + candidates[i]);\n      temp.pop();\n    }\n  }\n\n  dfs(0,[],0);\n\n  return res;\n};\n")),(0,o.kt)("h2",{id:"\u9898\u76ee\u53cd\u601d"},"\u9898\u76ee\u53cd\u601d"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"DFS\u662f\u4e00\u7c7b\u9898\u76ee\u7684\u601d\u60f3\uff0c\u6211\u4eec\u8981\u60f3\u5f7b\u5e95\u638c\u63e1\u8fd9\u7c7b\u9898\u76ee\uff0c\u4e00\u5b9a\u8981\u591a\u505a\u76f8\u5173\u7684\u9898\u76ee\uff0c\u7136\u540e\u8fdb\u884c\u603b\u7ed3\uff0c\u7c7b\u4f3c\u7684\u7ecf\u5178\u9898\u76ee\u6709\u5168\u6392\u5217\u3001\u7ec4\u5408\u603b\u548c\u7b49\u3002")))}s.isMDXComponent=!0}}]);