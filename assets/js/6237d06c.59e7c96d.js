"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[31288],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=p(r),m=a,f=g["".concat(c,".").concat(m)]||g[m]||s[m]||l;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},50121:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={title:"LeetCode\u2014\u2014\u6bd4\u8f83\u7248\u672c\u53f7\uff08\u5206\u5272-\u53bb\u96f6-\u586b\u96f6-\u6bd4\u8f83\uff09",date:new Date("2021-11-20T00:00:00.000Z"),author:"Justin",top:!1,cover:!1,categories:"LeetCode",tags:["LeetCode"]},o=void 0,i={permalink:"/blog/LeetCode\u2014\u2014\u6bd4\u8f83\u7248\u672c\u53f7\uff08\u5206\u5272-\u53bb\u96f6-\u586b\u96f6-\u6bd4\u8f83\uff09",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/LeetCode\u2014\u2014\u6bd4\u8f83\u7248\u672c\u53f7\uff08\u5206\u5272-\u53bb\u96f6-\u586b\u96f6-\u6bd4\u8f83\uff09.md",source:"@site/blog/LeetCode\u2014\u2014\u6bd4\u8f83\u7248\u672c\u53f7\uff08\u5206\u5272-\u53bb\u96f6-\u586b\u96f6-\u6bd4\u8f83\uff09.md",title:"LeetCode\u2014\u2014\u6bd4\u8f83\u7248\u672c\u53f7\uff08\u5206\u5272-\u53bb\u96f6-\u586b\u96f6-\u6bd4\u8f83\uff09",description:"\u9898\u76ee\u63cf\u8ff0",date:"2021-11-20T00:00:00.000Z",formattedDate:"2021\u5e7411\u670820\u65e5",tags:[{label:"LeetCode",permalink:"/blog/tags/leet-code"}],readingTime:2.615,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"LeetCode\u2014\u2014\u6bd4\u8f83\u7248\u672c\u53f7\uff08\u5206\u5272-\u53bb\u96f6-\u586b\u96f6-\u6bd4\u8f83\uff09",date:"2021-11-20T00:00:00.000Z",author:"Justin",top:!1,cover:!1,categories:"LeetCode",tags:["LeetCode"]},prevItem:{title:"\u5728Egg.js\u4e2d\u5b9e\u73b0RBAC\u6743\u9650\u7ba1\u7406",permalink:"/blog/\u5728Egg.js\u4e2d\u5b9e\u73b0RBAC\u6743\u9650\u7ba1\u7406"},nextItem:{title:"\u9762\u8bd5\u5b98\uff1a\u8bf7\u5b9e\u73b0\u5355\u884c\u6587\u672c\u5c45\u4e2d\uff0c\u591a\u884c\u6587\u672c\u5de6\u5bf9\u9f50\uff1f",permalink:"/blog/\u9762\u8bd5\u5b98\uff1a\u8bf7\u5b9e\u73b0\u5355\u884c\u6587\u672c\u5c45\u4e2d\uff0c\u591a\u884c\u6587\u672c\u5de6\u5bf9\u9f50\uff1f"}},c={authorsImageUrls:[void 0]},p=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u89e3\u9898\u601d\u8def",id:"\u89e3\u9898\u601d\u8def",level:2},{value:"AC\u4ee3\u7801",id:"ac\u4ee3\u7801",level:2},{value:"\u9898\u76ee\u53cd\u601d",id:"\u9898\u76ee\u53cd\u601d",level:2}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u9898\u76ee\u63cf\u8ff0"},"\u9898\u76ee\u63cf\u8ff0"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/2dafc44aea1f6493687f2ba748b224b1.png",alt:"image.png"})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/1fb684c5a6cde54724a2e5ce04624b0a.png",alt:"image.png"})),(0,a.kt)("h2",{id:"\u89e3\u9898\u601d\u8def"},"\u89e3\u9898\u601d\u8def"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9996\u5148\u4f7f\u7528split\u5c06\u5143\u7d20\u6839\u636e\u6807\u70b9\u7b26\u53f7\u70b9\uff0c\u8fdb\u884c\u5206\u5272\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5bf9\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e00\u4e2a\u5143\u7d20\u8fdb\u884c\u53bb\u96f6\u64cd\u4f5c\uff0c\u5e76\u4e0d\u662f\u6240\u6709\u7684\u5143\u7d20\u90fd\u8981\u8fdb\u884c\u53bb\u96f6\u64cd\u4f5c\uff0c\u53ea\u6709\u8be5\u5143\u7d20\u5305\u542b\u4e86\u4e24\u4e2a\u5b57\u7b26\u6216\u8005\u4ee5\u4e0a\u5185\u5bb9\u7684\u65f6\u5019\uff0c\u5e76\u4e14\u8be5\u5143\u7d20\u7684\u7b2c\u4e00\u4e2a\u5b57\u6bcd\u662f0\u624d\u9700\u8981\u8fdb\u884c\u53bb\u96f6\u64cd\u4f5c\uff0c\u5176\u4f59\u5219\u4e0d\u9700\u8981\u53bb\u96f6\u64cd\u4f5c\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u586b0\u64cd\u4f5c\uff1a\u9996\u5148\u6bd4\u8f83\u4e24\u4e2a\u6570\u7ec4\u7684\u957f\u5ea6\uff0c\u957f\u5ea6\u8f83\u77ed\u7684\u6570\u7ec4\u901a\u8fc7\u586b0\u64cd\u4f5c\uff0c\u8865\u5145\u5230\u76f8\u540c\u7684\u957f\u5ea6\uff0c\u8fd9\u6837\u53ef\u4ee5\u65b9\u4fbf\u540e\u7eed\u7684\u6bd4\u8f83\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6bd4\u8f83\uff1a\u5b9a\u4e49\u4e24\u4e2a\u6307\u9488\uff0c\u5206\u522b\u6307\u5411\u8fd9\u4e24\u4e2a\u6570\u7ec4\uff0c\u540c\u65f6\u5f80\u540e\u904d\u5386\uff0c\u53ea\u8981\u6bd4\u8f83\u5230\u5927\u5c0f\u5173\u7cfb\u5219\u8fdb\u884c\u8fd4\u56de\u5bf9\u5e94\u7684\u503c\u3002")),(0,a.kt)("h2",{id:"ac\u4ee3\u7801"},"AC\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var compareVersion = function (version1, version2) {\n  const arr1 = version1.split('.');\n  const arr2 = version2.split('.');\n\n  // \u5bf9\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e00\u4e2a\u5b57\u7b26\u4e32\u8fdb\u884c\u53bb0\u64cd\u4f5c\uff1a\u53ea\u6709\u4e24\u4f4d\u4ee5\u4e0a\u7684\u624d\u9700\u8981\u8fdb\u884c\u53bb0\u64cd\u4f5c\n  function deleteZero(arr) {\n    for (let i = 0; i < arr.length; i++) {\n      while (arr[i].length > 1 && arr[i][0] === '0') {\n        let temp = arr[i].split('');\n        temp.shift();\n        arr[i] = temp.join('');\n      }\n    }\n  }\n\n  deleteZero(arr1);\n  deleteZero(arr2);\n\n  // \u8fdb\u884c\u586b0\u64cd\u4f5c\n  // \u9996\u5148\u6bd4\u8f83\u4e24\u4e2a\u6570\u7ec4\u7684\u957f\u5ea6\n  if (arr1.length > arr2.length) {\n    let flag = arr2.length\n    for (let i = flag; i < arr1.length; i++) {\n      arr2[i] = '0';\n    }\n  }\n  else if (arr1.length < arr2.length) {\n    let flag = arr1.length;\n    for (let i = flag; i < arr2.length; i++) {\n      arr1[i] = '0';\n    }\n  }\n\n  let left = 0;\n  let right = 0;\n  while (left < arr1.length) {\n    if (Number(arr1[left]) === Number(arr2[right])) {\n      left++;\n      right++;\n      continue;\n    }\n    if (Number(arr1[left]) < Number(arr2[right])) {\n      return -1;\n    }\n    if (Number(arr1[left]) > Number(arr2[right])) {\n      return 1;\n    }\n  }\n  return 0;\n\n};\n")),(0,a.kt)("h2",{id:"\u9898\u76ee\u53cd\u601d"},"\u9898\u76ee\u53cd\u601d"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u9898\u53ef\u80fd\u4e0d\u662f\u6700\u4f18\u89e3\uff0c\u4f46\u662f\u901a\u8fc7\u8fd9\u4e2a\u9898\u76ee\u544a\u8bc9\u6211\u4eec\u7684\u662f\u9762\u5bf9\u95ee\u9898\u4e0d\u8981\u754f\u60e7\uff0c\u53ea\u8981\u7406\u6e05\u601d\u8def\uff0c\u627e\u5230\u9898\u76ee\u4e2d\u7684\u6848\u4f8b\u4e4b\u95f4\u7684\u89c4\u5f8b\uff0c\u9898\u76ee\u90fd\u662f\u80fd\u591f\u8fce\u5203\u800c\u89e3\u7684\uff0c\u4e0b\u9762\u8ba9\u6211\u4eec\u5206\u6790\u4e0b\u672c\u9898\u90fd\u7528\u5230\u4e86\u54ea\u4e9b\u77e5\u8bc6\u70b9\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b66\u4f1a\u4f7f\u7528split\u5c06\u5b57\u7b26\u4e32\u5206\u5272\u4e3a\u6570\u7ec4\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5b66\u4f1a\u7ed9\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u8fdb\u884c\u53bb\u9664\u548c\u586b\u5145\u64cd\u4f5c\u3002")))}s.isMDXComponent=!0}}]);