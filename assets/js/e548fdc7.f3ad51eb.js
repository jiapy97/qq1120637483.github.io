"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[6885],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),g=a,d=u["".concat(c,".").concat(g)]||u[g]||m[g]||l;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},60315:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={title:"ES6\u2014\u201443\uff1aPromise",date:new Date("2021-03-18T00:00:00.000Z"),categories:"ES6",tags:["ES6"]},o=void 0,i={permalink:"/blog/ES6\u2014\u201443\uff1aPromise",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/ES6\u2014\u201443\uff1aPromise.md",source:"@site/blog/ES6\u2014\u201443\uff1aPromise.md",title:"ES6\u2014\u201443\uff1aPromise",description:"\u57fa\u672c\u4f7f\u7528",date:"2021-03-18T00:00:00.000Z",formattedDate:"2021\u5e743\u670818\u65e5",tags:[{label:"ES6",permalink:"/blog/tags/es-6"}],readingTime:1.715,hasTruncateMarker:!1,authors:[],frontMatter:{title:"ES6\u2014\u201443\uff1aPromise",date:"2021-03-18T00:00:00.000Z",categories:"ES6",tags:["ES6"]},prevItem:{title:"ES6\u2014\u201442\uff1a\u751f\u6210\u5668",permalink:"/blog/ES6\u2014\u201442\uff1a\u751f\u6210\u5668"},nextItem:{title:"ES6\u2014\u201444\uff1aMap\u6570\u636e\u7ed3\u6784",permalink:"/blog/ES6\u2014\u201444\uff1aMap\u6570\u636e\u7ed3\u6784"}},c={authorsImageUrls:[]},s=[{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:2},{value:"Promise\u5c01\u88c5\u8bfb\u53d6\u6587\u4ef6",id:"promise\u5c01\u88c5\u8bfb\u53d6\u6587\u4ef6",level:2},{value:"Promise\u5c01\u88c5AJAX\u8bf7\u6c42",id:"promise\u5c01\u88c5ajax\u8bf7\u6c42",level:2},{value:"Promise.prototype.then \u65b9\u6cd5",id:"promiseprototypethen-\u65b9\u6cd5",level:2},{value:"Promise\u5bf9\u8c61\u7684catch\u65b9\u6cd5",id:"promise\u5bf9\u8c61\u7684catch\u65b9\u6cd5",level:2},{value:"\u4f7f\u7528Promise\u8bfb\u53d6\u4e09\u4e2a\u6587\u4ef6\u4e2d\u7684\u5185\u5bb9",id:"\u4f7f\u7528promise\u8bfb\u53d6\u4e09\u4e2a\u6587\u4ef6\u4e2d\u7684\u5185\u5bb9",level:2},{value:"Promise.allSettled()\u65b9\u6cd5",id:"promiseallsettled\u65b9\u6cd5",level:2}],p={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u57fa\u672c\u4f7f\u7528"},"\u57fa\u672c\u4f7f\u7528"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/db7804af105d8cedd09f7d5df5952607.png",alt:null})),(0,a.kt)("h2",{id:"promise\u5c01\u88c5\u8bfb\u53d6\u6587\u4ef6"},"Promise\u5c01\u88c5\u8bfb\u53d6\u6587\u4ef6"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/44e7e89667c31444643637e0490ade9e.png",alt:null}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/b5cc0df85c9008f0f167e866cff22108.png",alt:null})),(0,a.kt)("h2",{id:"promise\u5c01\u88c5ajax\u8bf7\u6c42"},"Promise\u5c01\u88c5AJAX\u8bf7\u6c42"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const p = new Promise((resolve,reject) => {\n    // 1. \u521b\u5efa\u5bf9\u8c61\n    const xhr = new XMLHttpRequest();\n    // 2. \u521d\u59cb\u5316\n    xhr.open("GET","https://api.apiopen.top/getJoke");\n    // 3. \u53d1\u9001\n    xhr.send();\n    // 4. \u7ed1\u5b9a\u4e8b\u4ef6\uff0c\u5904\u7406\u54cd\u5e94\u7ed3\u679c\n    xhr.onreadystatechange = function() {\n        if (xhr.readyState === 4) {\n            if (xhr.status >= 200 && xhr.status <= 300) {\n                resolve(xhr.response);\n            } else {\n                reject(xhr.status);\n            }\n        }\n    }\n});\n\np.then(function(value) {\n    console.log(value);\n},function(reason) {\n    console.log(reason);\n});\n')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/c1246b449de327693defac371c4bd8e2.png",alt:null})),(0,a.kt)("h2",{id:"promiseprototypethen-\u65b9\u6cd5"},"Promise.prototype.then \u65b9\u6cd5"),(0,a.kt)("p",null,"then\u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u5206\u4ee5\u4e0b\u4e09\u79cd\u60c5\u51b5\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8fd4\u56de\u975ePromise\u5bf9\u8c61\n",(0,a.kt)("img",{parentName:"li",src:"https://img-blog.csdnimg.cn/img_convert/672619937e10bcdd4a8ce6aca0c09871.png",alt:null})),(0,a.kt)("li",{parentName:"ol"},"\u8fd4\u56dePromise\u5bf9\u8c61\uff08resove\u72b6\u6001\uff09\n",(0,a.kt)("img",{parentName:"li",src:"https://img-blog.csdnimg.cn/img_convert/7ecc720a5cac68f8c171180076556264.png",alt:null})),(0,a.kt)("li",{parentName:"ol"},"\u8fd4\u56dePromise\u5bf9\u8c61\uff08reject\u72b6\u6001\uff09\n",(0,a.kt)("img",{parentName:"li",src:"https://img-blog.csdnimg.cn/img_convert/6b4ffd0f841b7217da9b7836c58a5da2.png",alt:null}))),(0,a.kt)("h2",{id:"promise\u5bf9\u8c61\u7684catch\u65b9\u6cd5"},"Promise\u5bf9\u8c61\u7684catch\u65b9\u6cd5"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6b64\u65b9\u6cd5\u662f\u5f53Promise\u5bf9\u8c61\u7684\u72b6\u6001\u4e3areject\u65f6\uff0c\u8c03\u7528\u7684\u65b9\u6cd5\uff0c\u53c2\u6570\u53ea\u662f\u4e00\u4e2a\u51fd\u6570\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/6fa69162f0bcd3170ecba0d8a3538368.png",alt:null})),(0,a.kt)("h2",{id:"\u4f7f\u7528promise\u8bfb\u53d6\u4e09\u4e2a\u6587\u4ef6\u4e2d\u7684\u5185\u5bb9"},"\u4f7f\u7528Promise\u8bfb\u53d6\u4e09\u4e2a\u6587\u4ef6\u4e2d\u7684\u5185\u5bb9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// \u9996\u5148\uff0c\u5f15\u5165fs\u6a21\u5757\nconst fs = require(\'fs\');\n\nconst p = new Promise((resolve,reject) => {\n    fs.readFile("./test.md",(err,data) => {\n        resolve(data);\n    });\n});\n\np.then((value) => {\n    return new Promise((resolve,reject) => {\n        fs.readFile("./\u6728\u8a00\u4eba.md",(err,data) => {\n            resolve([value,data]);\n        });\n    });\n}).then((value) => {\n    return new Promise((resolve) => {\n        fs.readFile("./\u8bfb\u4e66\u6709\u611f.md",(err,data) => {\n            value.push(data);\n            resolve(value);\n        });\n    });\n}).then((value) => {\n    console.log(value.toString());\n});\n')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/7ae108cbabc7b4adad0404c2940ad4fc.png",alt:null})),(0,a.kt)("h2",{id:"promiseallsettled\u65b9\u6cd5"},"Promise.allSettled()\u65b9\u6cd5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53c2\u6570\u662f\u4e00\u4e2a\u6570\u7ec4\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8fd9\u4e2a\u6570\u7ec4\u7684\u6bcf\u4e00\u4e2a\u5143\u7d20\u90fd\u662f\u4e00\u4e2aPromise\u5bf9\u8c61"),(0,a.kt)("li",{parentName:"ul"},"\u8be5\u65b9\u6cd5\u8fd4\u56de\u7684\u59cb\u7ec8\u662f\u4e00\u4e2a\u6210\u529f\u7684Promise\u5bf9\u8c61\uff0c\u8fd9\u4e2a\u5bf9\u8c61\u7684\u7ed3\u679c\u5305\u542b\u4e86\u53c2\u6570\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e00\u4e2aPromise\u5bf9\u8c61\u7684\u8fd4\u56de\u72b6\u6001\u548c\u503c\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/3ee2df06f76d5f08aa2048e1c28e6340.png",alt:null})))}m.isMDXComponent=!0}}]);