"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[15491],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),y=s(n),m=r,f=y["".concat(l,".").concat(m)]||y[m]||u[m]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=y;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},98453:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={title:"ES6\u2014\u201451\uff1aawiat\u4e0easync\u7ed3\u5408\u4f7f\u7528",date:new Date("2021-03-19T00:00:00.000Z"),categories:"ES6",tags:["ES6"]},o=void 0,c={permalink:"/blog/ES6\u2014\u201451\uff1aawiat\u4e0easync\u7ed3\u5408\u4f7f\u7528",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/ES6\u2014\u201451\uff1aawiat\u4e0easync\u7ed3\u5408\u4f7f\u7528.md",source:"@site/blog/ES6\u2014\u201451\uff1aawiat\u4e0easync\u7ed3\u5408\u4f7f\u7528.md",title:"ES6\u2014\u201451\uff1aawiat\u4e0easync\u7ed3\u5408\u4f7f\u7528",description:"await\u8981\u653e\u5728async\u51fd\u6570\u4e2d",date:"2021-03-19T00:00:00.000Z",formattedDate:"2021\u5e743\u670819\u65e5",tags:[{label:"ES6",permalink:"/blog/tags/es-6"}],readingTime:.58,hasTruncateMarker:!1,authors:[],frontMatter:{title:"ES6\u2014\u201451\uff1aawiat\u4e0easync\u7ed3\u5408\u4f7f\u7528",date:"2021-03-19T00:00:00.000Z",categories:"ES6",tags:["ES6"]},prevItem:{title:"LeetCode\u2014\u2014\u7b2c\u4e00\u4e2a\u53ea\u51fa\u73b0\u4e00\u6b21\u7684\u5b57\u7b26",permalink:"/blog/LeetCode\u2014\u2014\u7b2c\u4e00\u4e2a\u53ea\u51fa\u73b0\u4e00\u6b21\u7684\u5b57\u7b26"},nextItem:{title:"ES6\u2014\u201452\uff1a\u6b63\u5219\u62d3\u5c55",permalink:"/blog/ES6\u2014\u201452\uff1a\u6b63\u5219\u62d3\u5c55"}},l={authorsImageUrls:[]},s=[{value:"await\u8981\u653e\u5728async\u51fd\u6570\u4e2d",id:"await\u8981\u653e\u5728async\u51fd\u6570\u4e2d",level:2},{value:"\u57fa\u7840\u7528\u6cd5",id:"\u57fa\u7840\u7528\u6cd5",level:2},{value:"async\u548cawait\u7ed3\u5408\u8bfb\u53d6\u6587\u4ef6\u5185\u5bb9",id:"async\u548cawait\u7ed3\u5408\u8bfb\u53d6\u6587\u4ef6\u5185\u5bb9",level:2},{value:"async\u4e0eawait\u7ed3\u5408\u53d1\u9001ajax\u8bf7\u6c42",id:"async\u4e0eawait\u7ed3\u5408\u53d1\u9001ajax\u8bf7\u6c42",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"await\u8981\u653e\u5728async\u51fd\u6570\u4e2d"},"await\u8981\u653e\u5728async\u51fd\u6570\u4e2d"),(0,r.kt)("h2",{id:"\u57fa\u7840\u7528\u6cd5"},"\u57fa\u7840\u7528\u6cd5"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/c7456a1452804442a9e9512d0e20203c.png",alt:null})),(0,r.kt)("h2",{id:"async\u548cawait\u7ed3\u5408\u8bfb\u53d6\u6587\u4ef6\u5185\u5bb9"},"async\u548cawait\u7ed3\u5408\u8bfb\u53d6\u6587\u4ef6\u5185\u5bb9"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/302340f1abec4308160dbf99e02df396.png",alt:null})),(0,r.kt)("h2",{id:"async\u4e0eawait\u7ed3\u5408\u53d1\u9001ajax\u8bf7\u6c42"},"async\u4e0eawait\u7ed3\u5408\u53d1\u9001ajax\u8bf7\u6c42"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function sendAjax(url) {\n    return new Promise((resolve,reject) => {\n        // 1. \u521b\u5efa\u5bf9\u8c61\n        const x = new XMLHttpRequest();\n        // 2. \u521d\u59cb\u5316\n        x.open('GET',url);\n        // 3. \u53d1\u9001\n        x.send();\n        // 4. \u4e8b\u4ef6\u7ed1\u5b9a\n        x.onreadystatechange = function() {\n            if (x.readyState === 4) {\n                if (x.status >= 200 && x.status <= 300) {\n                    resolve(x.response);\n                } else {\n                    reject(x.status);\n                };\n            };\n        };\n    });\n};\n\nasync function readAjax() {\n    let result = await sendAjax('https://api.apiopen.top/getJoke');\n    console.log(result);\n}\n\nreadAjax();\n")))}u.isMDXComponent=!0}}]);