"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[18845],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(g,l(l({ref:t},i),{},{components:n})):r.createElement(g,l({ref:t},i))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84536:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"Node 02--Node\u4e2d\u7684\u6a21\u5757\u7cfb\u7edf\u4e0e\u54cd\u5e94\u4e2d\u6587\u7f16\u7801",date:"2021-8-6",author:"Justin",top:!1,cover:!1,categories:"Node",tags:["Node"]},l=void 0,p={permalink:"/blog/Node 02--Node\u4e2d\u7684\u6a21\u5757\u7cfb\u7edf\u4e0e\u54cd\u5e94\u4e2d\u6587\u7f16\u7801",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/Node 02--Node\u4e2d\u7684\u6a21\u5757\u7cfb\u7edf\u4e0e\u54cd\u5e94\u4e2d\u6587\u7f16\u7801.md",source:"@site/blog\\Node 02--Node\u4e2d\u7684\u6a21\u5757\u7cfb\u7edf\u4e0e\u54cd\u5e94\u4e2d\u6587\u7f16\u7801.md",title:"Node 02--Node\u4e2d\u7684\u6a21\u5757\u7cfb\u7edf\u4e0e\u54cd\u5e94\u4e2d\u6587\u7f16\u7801",description:"require\u7684\u52a0\u8f7d\u987a\u5e8f",date:"2021-08-06T00:00:00.000Z",formattedDate:"2021\u5e748\u67086\u65e5",tags:[{label:"Node",permalink:"/blog/tags/node"}],readingTime:1.94,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"Node 02--Node\u4e2d\u7684\u6a21\u5757\u7cfb\u7edf\u4e0e\u54cd\u5e94\u4e2d\u6587\u7f16\u7801",date:"2021-8-6",author:"Justin",top:!1,cover:!1,categories:"Node",tags:["Node"]},prevItem:{title:"Node 03--\u5728Node\u4e2d\u4f7f\u7528\u6a21\u677f\u5f15\u64ce\u8fdb\u884c\u6e32\u67d3",permalink:"/blog/Node 03--\u5728Node\u4e2d\u4f7f\u7528\u6a21\u677f\u5f15\u64ce\u8fdb\u884c\u6e32\u67d3"},nextItem:{title:"Node 01--\u4f7f\u7528Node\u8bfb\u5199\u6587\u4ef6\u4e0e\u7b80\u5355\u7684Http\u670d\u52a1",permalink:"/blog/Node 01--\u4f7f\u7528Node\u8bfb\u5199\u6587\u4ef6\u4e0e\u7b80\u5355\u7684Http\u670d\u52a1"}},c={authorsImageUrls:[void 0]},s=[{value:"require\u7684\u52a0\u8f7d\u987a\u5e8f",id:"require\u7684\u52a0\u8f7d\u987a\u5e8f",level:2},{value:"Node\u4e2d\u6ca1\u6709\u5168\u5c40\u4f5c\u7528\u57df\u53ea\u6709\u6a21\u5757\u4f5c\u7528\u57df",id:"node\u4e2d\u6ca1\u6709\u5168\u5c40\u4f5c\u7528\u57df\u53ea\u6709\u6a21\u5757\u4f5c\u7528\u57df",level:2},{value:"\u4f7f\u7528exports\u66b4\u9732\u6a21\u5757",id:"\u4f7f\u7528exports\u66b4\u9732\u6a21\u5757",level:2},{value:"\u54cd\u5e94\u4e2d\u6587\u7f16\u7801",id:"\u54cd\u5e94\u4e2d\u6587\u7f16\u7801",level:2},{value:"Content-Type\u6709\u4ec0\u4e48\u4f5c\u7528\uff1f",id:"content-type\u6709\u4ec0\u4e48\u4f5c\u7528",level:3}],i={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"require\u7684\u52a0\u8f7d\u987a\u5e8f"},"require\u7684\u52a0\u8f7d\u987a\u5e8f"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"require\u52a0\u8f7d\u6587\u4ef6\u662f\u8fd0\u884c\u5230\u8be5\u4f4d\u7f6e\u624d\u52a0\u8f7d\uff0c\u8bf7\u770b\u4e0b\u9762\u7684\u4e00\u6bb5\u4ee3\u7801\n",(0,o.kt)("strong",{parentName:"p"},"a.js")),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"console.log('a\u5f00\u59cb\u6267\u884c\u4e86');\n"))),(0,o.kt)("p",null,"require('./b');"),(0,o.kt)("p",null,"console.log('a \u6267\u884c\u7ed3\u675f\u4e86');"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\n**b.js**\n```js\nconsole.log('b\u6267\u884c\u7ed3\u675f');\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6267\u884c\u7ed3\u679c")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/98ddaa4903f6a00c69ff9e802005767b.png",alt:"image.png"})),(0,o.kt)("h2",{id:"node\u4e2d\u6ca1\u6709\u5168\u5c40\u4f5c\u7528\u57df\u53ea\u6709\u6a21\u5757\u4f5c\u7528\u57df"},"Node\u4e2d\u6ca1\u6709\u5168\u5c40\u4f5c\u7528\u57df\u53ea\u6709\u6a21\u5757\u4f5c\u7528\u57df"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u8bf7\u770b\u4e0b\u9762\u7684\u4e24\u7aef\u4ee3\u7801\n",(0,o.kt)("strong",{parentName:"p"},"a.js"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var a = '777'\nconsole.log('a\u5f00\u59cb\u6267\u884c\u4e86');\n\nrequire('./b');\n\nconsole.log('a \u6267\u884c\u7ed3\u675f\u4e86');\n\nconsole.log('a\u7684\u503c\u662f\uff1a',a);\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"b.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var a = '666'\n\nconsole.log('b\u6267\u884c\u7ed3\u675f');\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6267\u884c\u7ed3\u679c")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/15f0b3d999220af3744ae370143ec520.png",alt:"image.png"})),(0,o.kt)("h2",{id:"\u4f7f\u7528exports\u66b4\u9732\u6a21\u5757"},"\u4f7f\u7528exports\u66b4\u9732\u6a21\u5757"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"exports\u5176\u5b9e\u662f\u4e00\u4e2a\u7a7a\u5bf9\u8c61\uff0c\u6211\u4eec\u76f8\u5f53\u4e8e\u5411\u8fd9\u4e2a\u7a7a\u5bf9\u8c61\u4e2d\u6dfb\u52a0\u5143\u7d20\uff0c\u7136\u540e\u8fdb\u884c\u66b4\u9732\u3002\n",(0,o.kt)("strong",{parentName:"p"},"a.js")),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const test = require('./b');\n"))),(0,o.kt)("p",null,"console.log(test.a);"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\n**b.js**\n```js\nvar a = '666'\n\nexports.a = a;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"node\u8fd0\u884c a.js"),"\n",(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/22bef6f5fb36d2cb2a54b76929a02e4c.png",alt:"image.png"})),(0,o.kt)("h2",{id:"\u54cd\u5e94\u4e2d\u6587\u7f16\u7801"},"\u54cd\u5e94\u4e2d\u6587\u7f16\u7801"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u670d\u52a1\u5668\u76f4\u63a5\u8fd4\u56de\u4e2d\u6587\uff0c\u5728\u6d4f\u89c8\u5668\u4e0a\u663e\u793a\u7684\u662f\u4e71\u7801\uff0c\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6esetHeader\u4e2d\u7684\u7f16\u7801\u683c\u5f0f\u6765\u89e3\u51b3\u8fd9\u4e00\u95ee\u9898\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"server.on('request',(req,res) => {\n    res.setHeader('Content-Type','text/plain; charset=utf-8');\n    res.end('Node,\u4f60\u597d');\n})\n")),(0,o.kt)("h3",{id:"content-type\u6709\u4ec0\u4e48\u4f5c\u7528"},"Content-Type\u6709\u4ec0\u4e48\u4f5c\u7528\uff1f"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Content-Type\u5c31\u662f\u7528\u6765\u544a\u77e5\u5bf9\u65b9\u53d1\u9001\u7684\u6570\u636e\u5185\u5bb9\u662f\u4ec0\u4e48\u7c7b\u578b\u7684\u3002\u4e0b\u9762\u6211\u4eec\u5c06\u7ed9\u51faContent-Type\u7684\u4f8b\u5b50"))),(0,o.kt)("p",null,"\u4f8b\u5b50\uff1a\u8bbe\u7f6e\u4e3a\u666e\u901a\u6587\u672c\u7c7b\u578b\uff08plain\uff09\u4e0ehtml\u7c7b\u578b\u7684"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"server.on('request',(req,res) => {\n    const url = req.url;\n    if (url === '/plain') {\n        res.setHeader('Content-Type','text/plain; charset=utf-8');\n        res.end('\u8fd9\u662f\u4e2d\u6587\u54e6\uff01');\n    } else if (url === '/html') {\n        res.end('<h1>\u4f60\u597d\u8fd9\u662f\u4e00\u7ea7\u6807\u9898</h1');\n    }\n})\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6d4f\u89c8\u5668\u4f1a\u9ed8\u8ba4\u5c06html\u7684\u5b57\u7b26\u4e32\u89e3\u6790\u4e3aHTML\u4ee3\u7801\uff0c\u5982\u679c\u6211\u4eec\u60f3\u8981\u7684\u4e0d\u662fHTML\u4ee3\u7801\u800c\u662f\u5b57\u7b26\u4e32\uff0c\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6esetHeader\u4e3atext/plain\uff1b")))}u.isMDXComponent=!0}}]);