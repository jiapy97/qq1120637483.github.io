"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[96210],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(r),g=a,d=m["".concat(c,".").concat(g)]||m[g]||u[g]||l;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},29578:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={title:"Ajax-05\uff1aAjax\u8bf7\u6c42\u7684\u57fa\u672c\u6b65\u9aa4",date:new Date("2021-03-22T00:00:00.000Z"),categories:"Ajax",tags:["Ajax"]},o=void 0,i={permalink:"/blog/Ajax-05\uff1aAjax\u8bf7\u6c42\u7684\u57fa\u672c\u6b65\u9aa4",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/Ajax-05\uff1aAjax\u8bf7\u6c42\u7684\u57fa\u672c\u6b65\u9aa4.md",source:"@site/blog/Ajax-05\uff1aAjax\u8bf7\u6c42\u7684\u57fa\u672c\u6b65\u9aa4.md",title:"Ajax-05\uff1aAjax\u8bf7\u6c42\u7684\u57fa\u672c\u6b65\u9aa4",description:"XHR\u8bf7\u6c42\u5373Ajax\u8bf7\u6c42",date:"2021-03-22T00:00:00.000Z",formattedDate:"2021\u5e743\u670822\u65e5",tags:[{label:"Ajax",permalink:"/blog/tags/ajax"}],readingTime:1.04,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Ajax-05\uff1aAjax\u8bf7\u6c42\u7684\u57fa\u672c\u6b65\u9aa4",date:"2021-03-22T00:00:00.000Z",categories:"Ajax",tags:["Ajax"]},prevItem:{title:"Ajax-04\uff1a\u4f7f\u7528Ajax\u524d\u7684\u51c6\u5907\u5de5\u4f5c",permalink:"/blog/Ajax-04\uff1a\u4f7f\u7528Ajax\u524d\u7684\u51c6\u5907\u5de5\u4f5c"},nextItem:{title:"JavaScript\u4e2d\u94fe\u8868\u7684\u57fa\u7840\u7ed3\u6784\u4e0e\u589e\u52a0\u8282\u70b9\u7684\u65b9\u6cd5",permalink:"/blog/JavaScript\u4e2d\u94fe\u8868\u7684\u57fa\u7840\u7ed3\u6784\u4e0e\u589e\u52a0\u8282\u70b9\u7684\u65b9\u6cd5"}},c={authorsImageUrls:[]},p=[{value:"XHR\u8bf7\u6c42\u5373Ajax\u8bf7\u6c42",id:"xhr\u8bf7\u6c42\u5373ajax\u8bf7\u6c42",level:2},{value:"1\uff1a\u521b\u5efa\u5bf9\u8c61",id:"1\u521b\u5efa\u5bf9\u8c61",level:2},{value:"2\uff1a\u8bbe\u7f6e\u8bf7\u6c42\u65b9\u6cd5\u548curl",id:"2\u8bbe\u7f6e\u8bf7\u6c42\u65b9\u6cd5\u548curl",level:2},{value:"3\uff1a\u53d1\u9001",id:"3\u53d1\u9001",level:2},{value:"4\uff1a\u4e8b\u4ef6\u7ed1\u5b9a",id:"4\u4e8b\u4ef6\u7ed1\u5b9a",level:2}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"xhr\u8bf7\u6c42\u5373ajax\u8bf7\u6c42"},"XHR\u8bf7\u6c42\u5373Ajax\u8bf7\u6c42"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/dabb9311e04d4195a1d69070fa6272ac.png",alt:null})),(0,a.kt)("h2",{id:"1\u521b\u5efa\u5bf9\u8c61"},"1\uff1a\u521b\u5efa\u5bf9\u8c61"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const xhr = new XMLHttpRequest();\n")),(0,a.kt)("h2",{id:"2\u8bbe\u7f6e\u8bf7\u6c42\u65b9\u6cd5\u548curl"},"2\uff1a\u8bbe\u7f6e\u8bf7\u6c42\u65b9\u6cd5\u548curl"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"xhr.open('GET','http://127.0.0.1:8000/server');\n")),(0,a.kt)("h2",{id:"3\u53d1\u9001"},"3\uff1a\u53d1\u9001"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"xhr.send();\n")),(0,a.kt)("h2",{id:"4\u4e8b\u4ef6\u7ed1\u5b9a"},"4\uff1a\u4e8b\u4ef6\u7ed1\u5b9a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"on \u5f53...\u7684\u65f6\u5019"),(0,a.kt)("li",{parentName:"ul"},"readystate \u662fxhr\u5bf9\u8c61\u7684\u5c5e\u6027\uff0c\u8868\u793a\u72b6\u60010 1 2 3 4"),(0,a.kt)("li",{parentName:"ul"},"0 \u8868\u793a\u672a\u521d\u59cb\u5316"),(0,a.kt)("li",{parentName:"ul"},"1 \u8868\u793aopen\u65b9\u6cd5\u5df2\u7ecf\u8c03\u7528\u5b8c\u6bd5"),(0,a.kt)("li",{parentName:"ul"},"2 \u8868\u793asend\u65b9\u6cd5\u5df2\u7ecf\u8c03\u7528\u5b8c\u6bd5"),(0,a.kt)("li",{parentName:"ul"},"3 \u8868\u793a\u670d\u52a1\u7aef\u8fd4\u56de\u4e86\u90e8\u5206\u7ed3\u679c"),(0,a.kt)("li",{parentName:"ul"},"4 \u8868\u793a\u670d\u52a1\u7aef\u8fd4\u56de\u4e86\u5168\u90e8\u7ed3\u679c")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"xhr.onreadystatechange = function() {\n      // \u9996\u5148\u5224\u65ad\u670d\u52a1\u7aef\u662f\u5426\u8fd4\u56de\u4e86\u6240\u6709\u7ed3\u679c\n      if (xhr.readyState === 4) {\n          // \u5224\u65ad\u54cd\u5e94\u72b6\u6001\u7801  2XX \u8868\u793a\u6210\u529f\n          if (xhr.status >= 200 && xhr.status < 300) {\n              // \u72b6\u6001\u7801\n              console.log(xhr.status);\n              // \u72b6\u6001\u5b57\u7b26\u4e32\n              console.log(xhr.statusText);\n              // \u6240\u6709\u54cd\u5e94\u5934\n              console.log(xhr.getAllResponseHeaders());\n              // \u54cd\u5e94\u4f53\n              console.log(xhr.response);\n              result.innerHTML = xhr.response;\n          }\n\n      }\n  }\n")))}u.isMDXComponent=!0}}]);