"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[53442],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},75845:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={title:"LeetCode\u2014\u2014\u4e24\u4e2a\u6570\u7ec4\u7684\u4ea4\u96c6\uff08JS\u5b9e\u73b0\uff09",date:"2021-7-24",author:"Justin",top:!1,cover:!1,categories:"LeetCode",tags:["LeetCode"]},l=void 0,i={permalink:"/blog/LeetCode\u2014\u2014\u4e24\u4e2a\u6570\u7ec4\u7684\u4ea4\u96c6\uff08JS\u5b9e\u73b0\uff09",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/LeetCode\u2014\u2014\u4e24\u4e2a\u6570\u7ec4\u7684\u4ea4\u96c6\uff08JS\u5b9e\u73b0\uff09.md",source:"@site/blog\\LeetCode\u2014\u2014\u4e24\u4e2a\u6570\u7ec4\u7684\u4ea4\u96c6\uff08JS\u5b9e\u73b0\uff09.md",title:"LeetCode\u2014\u2014\u4e24\u4e2a\u6570\u7ec4\u7684\u4ea4\u96c6\uff08JS\u5b9e\u73b0\uff09",description:"\u9898\u76ee\u63cf\u8ff0",date:"2021-07-24T00:00:00.000Z",formattedDate:"2021\u5e747\u670824\u65e5",tags:[{label:"LeetCode",permalink:"/blog/tags/leet-code"}],readingTime:.725,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"LeetCode\u2014\u2014\u4e24\u4e2a\u6570\u7ec4\u7684\u4ea4\u96c6\uff08JS\u5b9e\u73b0\uff09",date:"2021-7-24",author:"Justin",top:!1,cover:!1,categories:"LeetCode",tags:["LeetCode"]},prevItem:{title:"LeetCode\u2014\u2014\u6570\u7ec4\u4e2d\u7684\u7b2cK\u4e2a\u6700\u5927\u5143\u7d20\uff08JS\u5b9e\u73b0\uff09",permalink:"/blog/LeetCode\u2014\u2014\u6570\u7ec4\u4e2d\u7684\u7b2cK\u4e2a\u6700\u5927\u5143\u7d20\uff08JS\u5b9e\u73b0\uff09"},nextItem:{title:"\u7535\u8bdd\u53f7\u7801\u9a8c\u8bc1\u5668\uff08FreeCodeCamp\uff09",permalink:"/blog/\u7535\u8bdd\u53f7\u7801\u9a8c\u8bc1\u5668\uff08FreeCodeCamp\uff09"}},c={authorsImageUrls:[void 0]},u=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u89e3\u9898\u601d\u8def",id:"\u89e3\u9898\u601d\u8def",level:2},{value:"\u89e3\u9898\u4ee3\u7801",id:"\u89e3\u9898\u4ee3\u7801",level:2},{value:"\u9898\u76ee\u53cd\u601d",id:"\u9898\u76ee\u53cd\u601d",level:2}],p={toc:u};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u9898\u76ee\u63cf\u8ff0"},"\u9898\u76ee\u63cf\u8ff0"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/fe4d35dcad75d216871e8a01071d9645.png",alt:"image.png"})),(0,o.kt)("h2",{id:"\u89e3\u9898\u601d\u8def"},"\u89e3\u9898\u601d\u8def"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9996\u5148\u901a\u8fc7\u96c6\u5408\u7684\u65b9\u5f0f\u5bf9\u6570\u7ec4\u8fdb\u884c\u53bb\u91cd\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u53bb\u91cd\u4e4b\u540e\u904d\u5386\u5176\u4e2d\u4e00\u4e2a\u6570\u7ec4\uff0c\u5982\u679c\u8be5\u6570\u7ec4\u5728\u53e6\u4e00\u4e2a\u6570\u7ec4\u4e2d\u5219\u5c06\u5176\u52a0\u5165\u5230\u7ed3\u679c\u6570\u7ec4\u4e2d\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u6700\u540e\u8fd4\u56de\u7ed3\u679c\u6570\u7ec4\u3002")),(0,o.kt)("h2",{id:"\u89e3\u9898\u4ee3\u7801"},"\u89e3\u9898\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var intersection = function(nums1, nums2) {\n    const temp1 = [...new Set(nums1)]\n    const temp2 = [...new Set(nums2)];\n    const result = [];\n    for (let v of temp1) {\n        if (temp2.includes(v)) {\n            result.push(v)\n        }\n    }\n    return result\n};\n")),(0,o.kt)("h2",{id:"\u9898\u76ee\u53cd\u601d"},"\u9898\u76ee\u53cd\u601d"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5b66\u4f1a\u4f7f\u7528\u96c6\u5408\u5bf9\u6570\u7ec4\u53bb\u91cd\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5b66\u4f1a\u4f7f\u7528includes\u5224\u65ad\u6570\u7ec4\u4e2d\u662f\u5426\u5b58\u5728\u67d0\u4e00\u5143\u7d20\u3002")))}s.isMDXComponent=!0}}]);