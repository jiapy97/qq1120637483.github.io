"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[43501],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23327:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"LeetCode\u2014\u2014\u5b9e\u73b0strStr()\uff08KMP\u7b97\u6cd5\uff09",date:new Date("2021-12-23T00:00:00.000Z"),author:"Justin",top:!1,cover:!1,categories:"LeetCode",tags:["LeetCode"]},l=void 0,i={permalink:"/blog/LeetCode\u2014\u2014\u5b9e\u73b0strStr()\uff08KMP\u7b97\u6cd5\uff09",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/LeetCode\u2014\u2014\u5b9e\u73b0strStr()\uff08KMP\u7b97\u6cd5\uff09.md",source:"@site/blog\\LeetCode\u2014\u2014\u5b9e\u73b0strStr()\uff08KMP\u7b97\u6cd5\uff09.md",title:"LeetCode\u2014\u2014\u5b9e\u73b0strStr()\uff08KMP\u7b97\u6cd5\uff09",description:"\u9898\u76ee\u63cf\u8ff0",date:"2021-12-23T00:00:00.000Z",formattedDate:"2021\u5e7412\u670823\u65e5",tags:[{label:"LeetCode",permalink:"/blog/tags/leet-code"}],readingTime:2.07,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"LeetCode\u2014\u2014\u5b9e\u73b0strStr()\uff08KMP\u7b97\u6cd5\uff09",date:"2021-12-23T00:00:00.000Z",author:"Justin",top:!1,cover:!1,categories:"LeetCode",tags:["LeetCode"]},prevItem:{title:"LeetCode\u2014\u2014\u6570\u7ec4\u4e2d\u91cd\u590d\u7684\u6570\u636e\uff08\u4f7f\u7528\u7b26\u53f7\u8868\u793a\u662f\u5426\u51fa\u73b0\u8fc7\uff09",permalink:"/blog/LeetCode\u2014\u2014\u6570\u7ec4\u4e2d\u91cd\u590d\u7684\u6570\u636e\uff08\u4f7f\u7528\u7b26\u53f7\u8868\u793a\u662f\u5426\u51fa\u73b0\u8fc7\uff09"},nextItem:{title:"\u4f7f\u7528JS\u5b9e\u73b0\u6570\u7ec4\u4e0e\u6811\u7ed3\u6784\u4e4b\u95f4\u7684\u4e92\u6362",permalink:"/blog/\u4f7f\u7528JS\u5b9e\u73b0\u6570\u7ec4\u4e0e\u6811\u7ed3\u6784\u4e4b\u95f4\u7684\u4e92\u6362"}},c={authorsImageUrls:[void 0]},p=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u89e3\u9898\u601d\u8def",id:"\u89e3\u9898\u601d\u8def",level:2},{value:"\u9898\u76ee\u53cd\u601d",id:"\u9898\u76ee\u53cd\u601d",level:2}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u9898\u76ee\u63cf\u8ff0"},"\u9898\u76ee\u63cf\u8ff0"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5b9e\u73b0strStr()\u8fd9\u4e2a\u9898\u76ee\u7684\u672c\u8d28\u8003\u67e5KMP\u7b97\u6cd5\uff0c\u4e5f\u662f\u524d\u7aef\u7684indexOf\u8fd9\u4e2aAPI\u7684\u5e95\u5c42\u5b9e\u73b0\u539f\u7406\uff0c\u56e0\u6b64\u8fd9\u9053\u9898\u65e0\u8bba\u662f\u539f\u7406\u4e0a\u8fd8\u662f\u4ece\u9762\u8bd5\u89d2\u5ea6\u6765\u770b\u90fd\u662f\u975e\u5e38\u91cd\u8981\u7684\u4e00\u9053\u9898\u76ee\u3002")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/cc578fe6ea1208bda4a00c9f6a525afa.png",alt:"image.png"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/07866f2b667f6274eea3c228d9cdbdcb.png",alt:"image.png"})),(0,o.kt)("h2",{id:"\u89e3\u9898\u601d\u8def"},"\u89e3\u9898\u601d\u8def"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u8fd9\u9053\u9898\u76ee\u60f3\u5b9e\u73b0\u7684\u662f\u5b57\u7b26\u4e32\u5339\u914d\uff0c\u5373\u627e\u5230\u76ee\u6807\u6a21\u5f0f\u4e32\u5728\u6bcd\u4e32\u7684\u4f4d\u7f6e\uff0c\u5982\u679c\u6a21\u5f0f\u4e32\u4e3a\u7a7a\uff0c\u76f4\u63a5\u8fd4\u56de\u4e0b\u68070\uff0c\u5176\u4f59\u60c5\u51b5\uff0c\u8fd4\u56de\u6a21\u5f0f\u4e32\u9996\u6b21\u51fa\u73b0\u7684\u4f4d\u7f6e\u3002\u672c\u9898\u6700\u6838\u5fc3\u7684\u83ab\u8fc7\u4e8e\u6784\u5efanext\u6570\u7ec4\uff0cnext\u6570\u7ec4\u4ee3\u8868\u7684\u662f\u6a21\u5f0f\u4e32\u7684\u524d\u7f00\u548c\u540e\u7f00\u4e4b\u95f4\u76f8\u540c\u5143\u7d20\u7684\u4e2a\u6570\uff0c\u8fd9\u4e2anext\u6570\u7ec4\u53ef\u4ee5\u6307\u5bfc\u540e\u7eed\u6a21\u5f0f\u4e32\u5931\u914d\u7684\u65f6\u5019\u7684\u79fb\u52a8\u6b21\u6570\u3002\u8fd9\u662fkmp\u7b97\u6cd5\u7684\u6838\u5fc3\uff0c\u81f3\u4e8e\u4e3a\u4ec0\u4e48\u662f\u8fd9\u6837\uff0c\u672c\u6587\u4e0d\u518d\u8fdb\u884c\u8be6\u7ec6\u8d58\u8ff0\uff0c\u66f4\u52a0\u8be6\u7ec6\u7684\u60c5\u51b5\u53ef\u4ee5\u53bb\u641c\u7d22KMP\u7b97\u6cd5\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"}," var strStr = function(haystack, needle) {\n  let n = haystack.length;\n  let m = needle.length;\n  if (m === 0) return 0;\n\n  // \u6784\u9020next\u6570\u7ec4\n  let next = new Array(m).fill(0);\n  for (let j = 0,i = 1; i < m; i++) {\n    while (j > 0 && needle[i] != needle[j]) {\n      j = next[j-1];\n    }\n    if (needle[j] === needle[i]) {\n      j++;\n    }\n    next[i] = j;\n  }\n\n  // \u4f7f\u7528next\u6570\u7ec4\n  for (let i = 0, j = 0; i < n;i++) {\n    while (j > 0 && haystack[i] != needle[j]) {\n      j = next[j-1];\n    }\n    if (haystack[i] === needle[j]) {\n      j++;\n    }\n    if (j === m) {\n      return i - m + 1;\n    }\n  }\n\n  return -1;\n\n};\n")),(0,o.kt)("h2",{id:"\u9898\u76ee\u53cd\u601d"},"\u9898\u76ee\u53cd\u601d"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"KMP\u7b97\u6cd5\u662findexOf\u5b9e\u73b0\u7684\u5e95\u5c42\u539f\u7406\uff0c\u6838\u5fc3\u529f\u80fd\u5c31\u662f\u5229\u7528\u5df2\u7ecf\u5339\u914d\u7684\u5143\u7d20\u7684\u5df2\u77e5\u4fe1\u606f\uff0c\u51cf\u5c11\u4ece\u5934\u5339\u914d\u7684\u6b21\u6570\uff0c\u4ece\u800c\u63d0\u9ad8\u5339\u914d\u7684\u6548\u7387\u3002")))}s.isMDXComponent=!0}}]);