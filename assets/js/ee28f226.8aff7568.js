"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[67269],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"LeetCode\u2014\u2014\u53bb\u9664\u91cd\u590d\u5b57\u6bcd\uff08\u501f\u52a9\u6808\uff09",date:"2021-8-30",author:"Justin",top:!1,cover:!1,categories:"LeetCode",tags:["LeetCode"]},l=void 0,i={permalink:"/blog/LeetCode\u2014\u2014\u53bb\u9664\u91cd\u590d\u5b57\u6bcd\uff08\u501f\u52a9\u6808\uff09",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/LeetCode\u2014\u2014\u53bb\u9664\u91cd\u590d\u5b57\u6bcd\uff08\u501f\u52a9\u6808\uff09.md",source:"@site/blog\\LeetCode\u2014\u2014\u53bb\u9664\u91cd\u590d\u5b57\u6bcd\uff08\u501f\u52a9\u6808\uff09.md",title:"LeetCode\u2014\u2014\u53bb\u9664\u91cd\u590d\u5b57\u6bcd\uff08\u501f\u52a9\u6808\uff09",description:"\u9898\u76ee\u63cf\u8ff0",date:"2021-08-30T00:00:00.000Z",formattedDate:"2021\u5e748\u670830\u65e5",tags:[{label:"LeetCode",permalink:"/blog/tags/leet-code"}],readingTime:2.305,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"LeetCode\u2014\u2014\u53bb\u9664\u91cd\u590d\u5b57\u6bcd\uff08\u501f\u52a9\u6808\uff09",date:"2021-8-30",author:"Justin",top:!1,cover:!1,categories:"LeetCode",tags:["LeetCode"]},prevItem:{title:"useState\u662f\u600e\u4e48\u56de\u4e8b\uff1f",permalink:"/blog/useState\u662f\u600e\u4e48\u56de\u4e8b"},nextItem:{title:"\u4e3a\u4ec0\u4e48\u9700\u8981React Hooks?",permalink:"/blog/\u4e3a\u4ec0\u4e48\u9700\u8981React Hooks"}},c={authorsImageUrls:[void 0]},p=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u89e3\u9898\u601d\u8def",id:"\u89e3\u9898\u601d\u8def",level:2},{value:"\u7b2c\u4e00\u6b65: \u5982\u679c\u5b57\u7b26\u51fa\u73b0\u5728\u6808\u4e2d\u5219\u76f4\u63a5\u8df3\u8fc7",id:"\u7b2c\u4e00\u6b65-\u5982\u679c\u5b57\u7b26\u51fa\u73b0\u5728\u6808\u4e2d\u5219\u76f4\u63a5\u8df3\u8fc7",level:3},{value:"\u7b2c\u4e8c\u6b65: \u5982\u679c\u5b57\u7b26\u6ca1\u6709\u51fa\u73b0\u5728\u6808\u4e2d,\u5219\u8fdb\u884c\u4e0b\u9762\u7684\u5224\u65ad",id:"\u7b2c\u4e8c\u6b65-\u5982\u679c\u5b57\u7b26\u6ca1\u6709\u51fa\u73b0\u5728\u6808\u4e2d\u5219\u8fdb\u884c\u4e0b\u9762\u7684\u5224\u65ad",level:3},{value:"\u7b2c\u4e09\u6b65: \u5c06\u7b2ci\u4e2a\u5143\u7d20\u5165\u6808",id:"\u7b2c\u4e09\u6b65-\u5c06\u7b2ci\u4e2a\u5143\u7d20\u5165\u6808",level:3},{value:"\u7b2c\u56db\u6b65: \u901a\u8fc7join\u65b9\u6cd5\u5c06\u6570\u7ec4\u8fde\u63a5\u6210\u5b57\u7b26\u4e32",id:"\u7b2c\u56db\u6b65-\u901a\u8fc7join\u65b9\u6cd5\u5c06\u6570\u7ec4\u8fde\u63a5\u6210\u5b57\u7b26\u4e32",level:3},{value:"AC\u4ee3\u7801",id:"ac\u4ee3\u7801",level:2},{value:"\u9898\u76ee\u53cd\u601d",id:"\u9898\u76ee\u53cd\u601d",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u9898\u76ee\u63cf\u8ff0"},"\u9898\u76ee\u63cf\u8ff0"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/73aaaef9c869036d2d22c3df49109d1f.png",alt:"image.png"})),(0,a.kt)("h2",{id:"\u89e3\u9898\u601d\u8def"},"\u89e3\u9898\u601d\u8def"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u9898\u6211\u4eec\u91c7\u7528\u6808\u7684\u601d\u8def\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898,\u5728\u89e3\u51b3\u95ee\u9898\u4e4b\u524d,\u9996\u5148\u6211\u4eec\u8981\u770b\u61c2\u8fd9\u4e2a\u9898\u76ee,\u8fd9\u4e2a\u9898\u76ee\u5e76\u4e0d\u662f\u8bf4\u5bf9\u5b57\u6bcd\u53bb\u91cd\u540e\u76f4\u63a5\u6309\u7167\u5b57\u5178\u5e8f\u6392\u5217\u7684,\u800c\u662f\u9644\u52a0\u4e86\u4e00\u4e2a\u6761\u4ef6\u5373\u4e0d\u80fd\u6253\u4e71\u5176\u4ed6\u5b57\u7b26\u7684\u76f8\u5bf9\u4f4d\u7f6e,\u5982\u4f55\u80fd\u4fdd\u8bc1\u4e0d\u6253\u4e71\u5176\u4ed6\u5b57\u7b26\u7684\u76f8\u5bf9\u4f4d\u7f6e\u5462?\u53ef\u4ee5\u91c7\u7528\u5c06\u8be5\u5143\u7d20\u5728\u5b57\u7b26\u4e32\u4e2d\u6700\u540e\u4e00\u6b21\u51fa\u73b0\u65f6\u518d\u52a0\u5165\u6808,\u5373\u4f7f\u524d\u9762\u52a0\u5165\u4e86\u4e5f\u8981pop\u51fa\u53bb.")),(0,a.kt)("h3",{id:"\u7b2c\u4e00\u6b65-\u5982\u679c\u5b57\u7b26\u51fa\u73b0\u5728\u6808\u4e2d\u5219\u76f4\u63a5\u8df3\u8fc7"},"\u7b2c\u4e00\u6b65: \u5982\u679c\u5b57\u7b26\u51fa\u73b0\u5728\u6808\u4e2d\u5219\u76f4\u63a5\u8df3\u8fc7"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"if (stack.indexOf(char) > -1) continue;\n")),(0,a.kt)("h3",{id:"\u7b2c\u4e8c\u6b65-\u5982\u679c\u5b57\u7b26\u6ca1\u6709\u51fa\u73b0\u5728\u6808\u4e2d\u5219\u8fdb\u884c\u4e0b\u9762\u7684\u5224\u65ad"},"\u7b2c\u4e8c\u6b65: \u5982\u679c\u5b57\u7b26\u6ca1\u6709\u51fa\u73b0\u5728\u6808\u4e2d,\u5219\u8fdb\u884c\u4e0b\u9762\u7684\u5224\u65ad"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6808\u4e2d\u662f\u5426\u6709\u5143\u7d20."),(0,a.kt)("li",{parentName:"ol"},"\u6808\u9876\u5143\u7d20\u662f\u5426\u5927\u4e8e\u7b2ci\u4e2a\u5b57\u7b26."),(0,a.kt)("li",{parentName:"ol"},"\u7b2ci\u4e2a\u5b57\u7b26\u540e\u9762\u8fd8\u6709\u6808\u9876\u5143\u7d20\u5417?",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"\u90fd\u6ee1\u8db3\u5219\u8ba9\u6808\u9876\u5143\u7d20\u51fa\u6808.")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"while (stack.length > 0 && stack[stack.length -1] > char && s.indexOf(stack[stack.length - 1],i) > i) {\n    // \u8d70\u5230\u8fd9\u91cc\u8bf4\u660e\u8be5\u5143\u7d20\u9700\u8981\u8df3\u8fc7\n    stack.pop();\n}\n")),(0,a.kt)("h3",{id:"\u7b2c\u4e09\u6b65-\u5c06\u7b2ci\u4e2a\u5143\u7d20\u5165\u6808"},"\u7b2c\u4e09\u6b65: \u5c06\u7b2ci\u4e2a\u5143\u7d20\u5165\u6808"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"stack.push(char);\n")),(0,a.kt)("h3",{id:"\u7b2c\u56db\u6b65-\u901a\u8fc7join\u65b9\u6cd5\u5c06\u6570\u7ec4\u8fde\u63a5\u6210\u5b57\u7b26\u4e32"},"\u7b2c\u56db\u6b65: \u901a\u8fc7join\u65b9\u6cd5\u5c06\u6570\u7ec4\u8fde\u63a5\u6210\u5b57\u7b26\u4e32"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"stack.join('')\n")),(0,a.kt)("h2",{id:"ac\u4ee3\u7801"},"AC\u4ee3\u7801"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/fbdb1a1a49b0f30313c50b583c618805.png",alt:"image.png"})),(0,a.kt)("h2",{id:"\u9898\u76ee\u53cd\u601d"},"\u9898\u76ee\u53cd\u601d"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5b66\u4f1a\u4f7f\u7528\u6808\u6765\u89e3\u51b3\u91cd\u590d\u5b57\u6bcd\u95ee\u9898."),(0,a.kt)("li",{parentName:"ol"},"\u5b66\u4f1a\u901a\u8fc7join\u65b9\u6cd5\u5c06\u6570\u7ec4\u53d8\u4e3a\u5b57\u7b26\u4e32."),(0,a.kt)("li",{parentName:"ol"},"\u5224\u65ad\u4e00\u4e2a\u5143\u7d20\u662f\u5426\u5728\u6570\u7ec4\u4e2d\u51fa\u73b0\u8fc7\u4e0d\u4ec5\u53ef\u4ee5\u901a\u8fc7ES6\u4e2d\u7684\u65b9\u6cd5,\u8fd8\u53ef\u4ee5\u901a\u8fc7indexof\u4e0e-1\u7684\u5173\u7cfb\u6765\u8fdb\u884c\u5224\u65ad."),(0,a.kt)("li",{parentName:"ol"},"indexof\u53ef\u4ee5\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570,\u7b2c\u4e00\u4e2a\u53c2\u6570\u4ee3\u8868\u7684\u662f\u54ea\u4e00\u4e2a\u5b57\u7b26,\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4ee3\u8868\u7684\u662f\u4ece\u54ea\u91cc\u5f00\u59cb\u5f80\u540e\u67e5\u627e,\u8fd9\u4e2a\u77e5\u8bc6\u5728\u89e3\u51b3\u672c\u9898\u7684\u8fc7\u7a0b\u4e2d,\u53d1\u6325\u4e86\u4e0d\u53ef\u78e8\u706d\u7684\u4f5c\u7528.")))}u.isMDXComponent=!0}}]);