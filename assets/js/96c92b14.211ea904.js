"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[5492],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73922:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"LeetCode\u2014\u2014\u4e8c\u53c9\u641c\u7d22\u6811\u7684\u7b2cK\u5927\u7684\u8282\u70b9",date:new Date("2021-04-05T00:00:00.000Z"),categories:"LeetCode",tags:["LeetCode"]},l=void 0,i={permalink:"/blog/LeetCode\u2014\u2014\u4e8c\u53c9\u641c\u7d22\u6811\u7684\u7b2cK\u5927\u7684\u8282\u70b9",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/LeetCode\u2014\u2014\u4e8c\u53c9\u641c\u7d22\u6811\u7684\u7b2cK\u5927\u7684\u8282\u70b9.md",source:"@site/blog/LeetCode\u2014\u2014\u4e8c\u53c9\u641c\u7d22\u6811\u7684\u7b2cK\u5927\u7684\u8282\u70b9.md",title:"LeetCode\u2014\u2014\u4e8c\u53c9\u641c\u7d22\u6811\u7684\u7b2cK\u5927\u7684\u8282\u70b9",description:"\u9898\u76ee\u63cf\u8ff0",date:"2021-04-05T00:00:00.000Z",formattedDate:"2021\u5e744\u67085\u65e5",tags:[{label:"LeetCode",permalink:"/blog/tags/leet-code"}],readingTime:.705,hasTruncateMarker:!1,authors:[],frontMatter:{title:"LeetCode\u2014\u2014\u4e8c\u53c9\u641c\u7d22\u6811\u7684\u7b2cK\u5927\u7684\u8282\u70b9",date:"2021-04-05T00:00:00.000Z",categories:"LeetCode",tags:["LeetCode"]},prevItem:{title:"ERROR-Command `Install \u2018code\u2018 command in PATH` exited with status code 1",permalink:"/blog/ERROR-Command `Install \u2018code\u2018 command in PATH` exited with status code 1"},nextItem:{title:"React-06\uff1a\u51fd\u6570\u5f0f\u7ec4\u4ef6",permalink:"/blog/React-06\uff1a\u51fd\u6570\u5f0f\u7ec4\u4ef6"}},c={authorsImageUrls:[]},s=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u89e3\u9898\u601d\u8def",id:"\u89e3\u9898\u601d\u8def",level:2},{value:"\u5b9e\u73b0\u4ee3\u7801",id:"\u5b9e\u73b0\u4ee3\u7801",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u9898\u76ee\u63cf\u8ff0"},"\u9898\u76ee\u63cf\u8ff0"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/385b4bb94b1d322da577b788c6022680.png",alt:null})),(0,o.kt)("h2",{id:"\u89e3\u9898\u601d\u8def"},"\u89e3\u9898\u601d\u8def"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9996\u5148\u6784\u5efa\u4e00\u4e2a\u96c6\u5408\u7528\u6765\u5b58\u50a8\u904d\u5386\u7684\u6240\u6709\u5143\u7d20\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528DFS\u904d\u5386\u4e8c\u53c9\u6811\uff0c\u5e76\u5c06\u7ed3\u679c\u5b58\u5230\u96c6\u5408\u4e2d\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5c06\u96c6\u5408\u8f6c\u5316\u4e3a\u6570\u7ec4"),(0,o.kt)("li",{parentName:"ul"},"\u901a\u8fc7sort\u65b9\u6cd5\u8fdb\u884c\u964d\u5e8f\u6392\u5e8f"),(0,o.kt)("li",{parentName:"ul"},"\u6392\u597d\u5e8f\u7684\u6570\u7ec4\u7684\u4e0b\u6807\u4e3a","[k-1]","\u7684\u5143\u7d20\u5373\u4e3a\u4e8c\u53c9\u641c\u7d22\u6811\u7684\u7b2cK\u5927\u7684\u5143\u7d20")),(0,o.kt)("h2",{id:"\u5b9e\u73b0\u4ee3\u7801"},"\u5b9e\u73b0\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var kthLargest = function(root, k) {\n\n    const set = new Set();\n    const dfs = function(node) {\n        if (node === null) {\n            return;\n        }\n\n        set.add(node.val);\n        dfs(node.left);\n        dfs(node.right);\n    }\n    dfs(root);\n    const arr = [...set];\n    arr.sort((a,b) => {\n        return b-a;\n    });\n\n    return arr[k-1];\n\n};\n")))}u.isMDXComponent=!0}}]);