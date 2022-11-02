"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[9167],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),f=o,g=m["".concat(i,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(g,c(c({ref:t},p),{},{components:n})):r.createElement(g,c({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},17525:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"ES6\u2014\u201445\uff1a\u5b50\u7c7b\u5bf9\u7236\u7c7b\u65b9\u6cd5\u7684\u91cd\u5199",date:new Date("2021-03-18T00:00:00.000Z"),categories:"ES6",tags:["ES6"]},c=void 0,l={permalink:"/blog/ES6\u2014\u201445\uff1a\u5b50\u7c7b\u5bf9\u7236\u7c7b\u65b9\u6cd5\u7684\u91cd\u5199",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/ES6\u2014\u201445\uff1a\u5b50\u7c7b\u5bf9\u7236\u7c7b\u65b9\u6cd5\u7684\u91cd\u5199.md",source:"@site/blog\\ES6\u2014\u201445\uff1a\u5b50\u7c7b\u5bf9\u7236\u7c7b\u65b9\u6cd5\u7684\u91cd\u5199.md",title:"ES6\u2014\u201445\uff1a\u5b50\u7c7b\u5bf9\u7236\u7c7b\u65b9\u6cd5\u7684\u91cd\u5199",description:"\u4ee3\u7801\u793a\u4f8b",date:"2021-03-18T00:00:00.000Z",formattedDate:"2021\u5e743\u670818\u65e5",tags:[{label:"ES6",permalink:"/blog/tags/es-6"}],readingTime:.425,hasTruncateMarker:!1,authors:[],frontMatter:{title:"ES6\u2014\u201445\uff1a\u5b50\u7c7b\u5bf9\u7236\u7c7b\u65b9\u6cd5\u7684\u91cd\u5199",date:"2021-03-18T00:00:00.000Z",categories:"ES6",tags:["ES6"]},prevItem:{title:"ES6\u2014\u201444\uff1aMap\u6570\u636e\u7ed3\u6784",permalink:"/blog/ES6\u2014\u201444\uff1aMap\u6570\u636e\u7ed3\u6784"},nextItem:{title:"ES6\u2014\u201446\uff1aclass\u4e2dgetter\u548csetter\u7684\u8bbe\u7f6e\u65b9\u6cd5",permalink:"/blog/ES6\u2014\u201446\uff1aclass\u4e2dgetter\u548csetter\u7684\u8bbe\u7f6e\u65b9\u6cd5"}},i={authorsImageUrls:[]},s=[{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b",level:2},{value:"\u5b9e\u73b0\u6548\u679c",id:"\u5b9e\u73b0\u6548\u679c",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4ee3\u7801\u793a\u4f8b"},"\u4ee3\u7801\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'class Father {\n    constructor(name,price) {\n        this.name = name;\n        this.price = price;\n    };\n    call() {\n        console.log("\u624b\u673a\u53ef\u4ee5\u6253\u7535\u8bdd\uff01");\n    };\n};\n\nclass Son extends Father {\n    constructor(name,price,color,size) {\n        super(name,price);\n        this.color = color;\n        this.size = size;\n    };\n    photo() {\n        console.log("\u624b\u673a\u53ef\u4ee5\u62cd\u7167");\n    };\n    call() {\n        console.log("\u8fd9\u662f\u5b50\u7c7b\u7684\u51fd\u6570");\n    };\n};\n\nconst xiaomi = new Son("\u7ea2\u7c73K30","4999","\u8363\u8000\u9ed1","6.7\u82f1\u5bf8");\n\nconsole.log(xiaomi);\nxiaomi.call();\n')),(0,o.kt)("h2",{id:"\u5b9e\u73b0\u6548\u679c"},"\u5b9e\u73b0\u6548\u679c"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/e608b5df66ff80489c5cb09f6968c34b.png",alt:null})))}u.isMDXComponent=!0}}]);