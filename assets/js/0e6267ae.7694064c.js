"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[69868],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},29685:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"LeetCode\u2014\u2014\u6570\u7ec4\u4e2d\u6570\u5b57\u51fa\u73b0\u7684\u6b21\u6570II",date:new Date("2021-03-27T00:00:00.000Z"),categories:"LeetCode",tags:["LeetCode"]},l=void 0,i={permalink:"/blog/LeetCode\u2014\u2014\u6570\u7ec4\u4e2d\u6570\u5b57\u51fa\u73b0\u7684\u6b21\u6570II",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/LeetCode\u2014\u2014\u6570\u7ec4\u4e2d\u6570\u5b57\u51fa\u73b0\u7684\u6b21\u6570II.md",source:"@site/blog/LeetCode\u2014\u2014\u6570\u7ec4\u4e2d\u6570\u5b57\u51fa\u73b0\u7684\u6b21\u6570II.md",title:"LeetCode\u2014\u2014\u6570\u7ec4\u4e2d\u6570\u5b57\u51fa\u73b0\u7684\u6b21\u6570II",description:"\u9898\u76ee\u63cf\u8ff0",date:"2021-03-27T00:00:00.000Z",formattedDate:"2021\u5e743\u670827\u65e5",tags:[{label:"LeetCode",permalink:"/blog/tags/leet-code"}],readingTime:.74,hasTruncateMarker:!1,authors:[],frontMatter:{title:"LeetCode\u2014\u2014\u6570\u7ec4\u4e2d\u6570\u5b57\u51fa\u73b0\u7684\u6b21\u6570II",date:"2021-03-27T00:00:00.000Z",categories:"LeetCode",tags:["LeetCode"]},prevItem:{title:"LeetCode\u2014\u2014\u4e8c\u53c9\u6811\u7684\u955c\u50cf",permalink:"/blog/LeetCode\u2014\u2014\u4e8c\u53c9\u6811\u7684\u955c\u50cf"},nextItem:{title:"\u300c\u6ce8\u89e3\u300d\u300a\u4f60\u4e0d\u77e5\u9053\u7684JavaScript\uff08\u4e0a\u5377\uff09\u300b\u7b2c\u4e09\u7ae0\uff1a\u51fd\u6570\u4f5c\u7528\u57df\u548c\u5757\u4f5c\u7528\u57df",permalink:"/blog/\u300c\u6ce8\u89e3\u300d\u300a\u4f60\u4e0d\u77e5\u9053\u7684JavaScript\uff08\u4e0a\u5377\uff09\u300b\u7b2c\u4e09\u7ae0\uff1a\u51fd\u6570\u4f5c\u7528\u57df\u548c\u5757\u4f5c\u7528\u57df"}},c={authorsImageUrls:[]},p=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u89e3\u9898\u601d\u8def",id:"\u89e3\u9898\u601d\u8def",level:2},{value:"\u89e3\u9898\u4ee3\u7801",id:"\u89e3\u9898\u4ee3\u7801",level:2}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u9898\u76ee\u63cf\u8ff0"},"\u9898\u76ee\u63cf\u8ff0"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/61c65afd8488266619d74e11314a5cb5.png",alt:null})),(0,a.kt)("h2",{id:"\u89e3\u9898\u601d\u8def"},"\u89e3\u9898\u601d\u8def"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528JS\u4e2d\u7684Map\u6570\u636e\u7ed3\u6784"),(0,a.kt)("li",{parentName:"ul"},"\u9996\u5148\u521b\u5efaMap\u6570\u636e\u7ed3\u6784\uff0c\u7136\u540e\u4f9d\u6b21\u904d\u5386\u5224\u65ad\u8be5\u6570\u636e\u7ed3\u6784\u4e2d\u662f\u5426\u5305\u542b\u6570\u7ec4\u7684\u5143\u7d20\uff0c\u5982\u679c\u4e0d\u5305\u542b\u5c31\u521b\u5efa\u952e\u503c\u5bf9\uff0c\u5e76\u5c06\u503c\u7f6e\u4e3a1\uff0c\u5305\u542b\u7684\u8bdd\u5219\u5c06\u503c+1"),(0,a.kt)("li",{parentName:"ul"},"\u6700\u540e\u904d\u5386Map\u6570\u636e\u7ed3\u6784\uff0c\u5982\u679c\u503c\u4e3a1\u7684\u8bdd\uff0c\u5219\u8fd4\u56de\u5bf9\u5e94\u7684\u952e\u3002")),(0,a.kt)("h2",{id:"\u89e3\u9898\u4ee3\u7801"},"\u89e3\u9898\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var singleNumber = function(nums) {\n    const m = new Map();\n\n    for(let v of nums) {\n        if (m.has(v)) {\n            m.set(v,m.get(v)+1);\n        } else {\n            m.set(v,1);\n        }\n    };\n    for (let v of m) {\n        if(v[1] === 1) {\n            return v[0];\n        }\n    }\n};\n")))}s.isMDXComponent=!0}}]);