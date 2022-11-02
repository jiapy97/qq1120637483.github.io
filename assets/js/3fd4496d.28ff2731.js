"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[43852],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=p(r),m=a,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||o;return r?n.createElement(d,l(l({ref:t},s),{},{components:r})):n.createElement(d,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},70474:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"LeetCode\u2014\u2014\u7b2c\u4e00\u4e2a\u53ea\u51fa\u73b0\u4e00\u6b21\u7684\u5b57\u7b26",date:new Date("2021-03-20T00:00:00.000Z"),categories:"LeetCode",tags:["LeetCode"]},l=void 0,i={permalink:"/blog/LeetCode\u2014\u2014\u7b2c\u4e00\u4e2a\u53ea\u51fa\u73b0\u4e00\u6b21\u7684\u5b57\u7b26",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/LeetCode\u2014\u2014\u7b2c\u4e00\u4e2a\u53ea\u51fa\u73b0\u4e00\u6b21\u7684\u5b57\u7b26.md",source:"@site/blog\\LeetCode\u2014\u2014\u7b2c\u4e00\u4e2a\u53ea\u51fa\u73b0\u4e00\u6b21\u7684\u5b57\u7b26.md",title:"LeetCode\u2014\u2014\u7b2c\u4e00\u4e2a\u53ea\u51fa\u73b0\u4e00\u6b21\u7684\u5b57\u7b26",description:"\u9898\u76ee\u63cf\u8ff0",date:"2021-03-20T00:00:00.000Z",formattedDate:"2021\u5e743\u670820\u65e5",tags:[{label:"LeetCode",permalink:"/blog/tags/leet-code"}],readingTime:.56,hasTruncateMarker:!1,authors:[],frontMatter:{title:"LeetCode\u2014\u2014\u7b2c\u4e00\u4e2a\u53ea\u51fa\u73b0\u4e00\u6b21\u7684\u5b57\u7b26",date:"2021-03-20T00:00:00.000Z",categories:"LeetCode",tags:["LeetCode"]},prevItem:{title:"Ajax-03\uff1aExpress\u57fa\u672c\u4f7f\u7528",permalink:"/blog/Ajax-03\uff1aExpress\u57fa\u672c\u4f7f\u7528"},nextItem:{title:"ES6\u2014\u201451\uff1aawiat\u4e0easync\u7ed3\u5408\u4f7f\u7528",permalink:"/blog/ES6\u2014\u201451\uff1aawiat\u4e0easync\u7ed3\u5408\u4f7f\u7528"}},c={authorsImageUrls:[]},p=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u89e3\u9898\u65b9\u6cd5",id:"\u89e3\u9898\u65b9\u6cd5",level:2}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u9898\u76ee\u63cf\u8ff0"},"\u9898\u76ee\u63cf\u8ff0"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/6c482ae46a512ff0f185da678baa78da.png",alt:null})),(0,a.kt)("h2",{id:"\u89e3\u9898\u65b9\u6cd5"},"\u89e3\u9898\u65b9\u6cd5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7JS\u4e2d\u7684Map\u6570\u636e\u7ed3\u6784"),(0,a.kt)("li",{parentName:"ul"},"\u5c06\u5b57\u7b26\u5217\u4e3a\u952e\uff0c\u8be5\u5b57\u7b26\u51fa\u73b0\u7684\u6b21\u6570\u5217\u4e3a\u503c\uff0c\u627e\u5230\u7b2c\u4e00\u4e2a\u503c\u4e3a1\u7684\u5373\u4e3a\u8fd4\u56de\u503c")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var firstUniqChar = function (s) {\n    const m = new Map();\n    const flag = 1;\n    for (let v of s) {\n        if (m.has(v) === false) {\n            m.set(v,flag)\n        } else {\n            m.set(v,m.get(v)+1);\n        }\n    }\n    \n    var result = ' ';\n    for (let v of m) {\n        if (v[1] === 1) {\n            result = v[0];\n            break;\n        }\n    }\n\n    return result;\n\n};\n")))}u.isMDXComponent=!0}}]);