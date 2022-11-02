"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[31065],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,g=u["".concat(c,".").concat(f)]||u[f]||m[f]||a;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37620:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"ES6\u2014\u201432\uff1a\u6d45\u62f7\u8d1d\u548c\u6df1\u62f7\u8d1d",date:new Date("2021-03-17T00:00:00.000Z"),categories:"ES6",tags:["ES6"]},l=void 0,i={permalink:"/blog/ES6\u2014\u201432\uff1a\u6d45\u62f7\u8d1d\u548c\u6df1\u62f7\u8d1d",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/ES6\u2014\u201432\uff1a\u6d45\u62f7\u8d1d\u548c\u6df1\u62f7\u8d1d.md",source:"@site/blog\\ES6\u2014\u201432\uff1a\u6d45\u62f7\u8d1d\u548c\u6df1\u62f7\u8d1d.md",title:"ES6\u2014\u201432\uff1a\u6d45\u62f7\u8d1d\u548c\u6df1\u62f7\u8d1d",description:"1. \u6d45\u62f7\u8d1d\u53ea\u662f\u62f7\u8d1d\u4e00\u5c42\uff0c\u66f4\u6df1\u5c42\u6b21\u5bf9\u8c61\u7ea7\u522b\u7684\u53ea\u662f\u62f7\u8d1d\u5f15\u7528\u3002",date:"2021-03-17T00:00:00.000Z",formattedDate:"2021\u5e743\u670817\u65e5",tags:[{label:"ES6",permalink:"/blog/tags/es-6"}],readingTime:.895,hasTruncateMarker:!1,authors:[],frontMatter:{title:"ES6\u2014\u201432\uff1a\u6d45\u62f7\u8d1d\u548c\u6df1\u62f7\u8d1d",date:"2021-03-17T00:00:00.000Z",categories:"ES6",tags:["ES6"]},prevItem:{title:"ES6\u2014\u201431\uff1a\u9012\u5f52\u57fa\u7840",permalink:"/blog/ES6\u2014\u201431\uff1a\u9012\u5f52\u57fa\u7840"},nextItem:{title:"ES6\u2014\u201433\uff1a\u89e3\u6784\u8d4b\u503c",permalink:"/blog/ES6\u2014\u201433\uff1a\u89e3\u6784\u8d4b\u503c"}},c={authorsImageUrls:[]},p=[{value:"\u6d45\u62f7\u8d1d",id:"\u6d45\u62f7\u8d1d",level:2},{value:"ES6\u63d0\u4f9b\u7684\u6d45\u62f7\u8d1d\u65b9\u6cd5",id:"es6\u63d0\u4f9b\u7684\u6d45\u62f7\u8d1d\u65b9\u6cd5",level:2},{value:"\u6df1\u62f7\u8d1d\uff08\u539f\u751fJS\uff09",id:"\u6df1\u62f7\u8d1d\u539f\u751fjs",level:2}],s={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6d45\u62f7\u8d1d\u53ea\u662f\u62f7\u8d1d\u4e00\u5c42\uff0c\u66f4\u6df1\u5c42\u6b21\u5bf9\u8c61\u7ea7\u522b\u7684\u53ea\u662f\u62f7\u8d1d\u5f15\u7528\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u6df1\u62f7\u8d1d\u62f7\u8d1d\u591a\u5c42\uff0c\u6bcf\u4e00\u7ea7\u522b\u7684\u6570\u636e\u90fd\u4f1a\u62f7\u8d1d\u3002")),(0,o.kt)("h2",{id:"\u6d45\u62f7\u8d1d"},"\u6d45\u62f7\u8d1d"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/ede0170e296c33f01ad3e4938564ff1e.png",alt:null}),"\n\u6d45\u62f7\u8d1d\u5728\u62f7\u8d1d\u5bf9\u8c61\u7684\u65f6\u5019\uff0c\u53ea\u4f1a\u62f7\u8d1d\u5f15\u7528\u3002"),(0,o.kt)("h2",{id:"es6\u63d0\u4f9b\u7684\u6d45\u62f7\u8d1d\u65b9\u6cd5"},"ES6\u63d0\u4f9b\u7684\u6d45\u62f7\u8d1d\u65b9\u6cd5"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/84df2535bd5256e386619a6c67a23248.png",alt:null})),(0,o.kt)("h2",{id:"\u6df1\u62f7\u8d1d\u539f\u751fjs"},"\u6df1\u62f7\u8d1d\uff08\u539f\u751fJS\uff09"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<script>\n        var obj = {\n            id: 1,\n            name: 'andy',\n            age: {\n                pink: 666\n            }\n        };\n        var o = {};\n        \n        function deepCopy(newObj,oldObj) {\n            for(var k in oldObj) {\n                // \u9996\u5148\u83b7\u53d6\u6bcf\u4e00\u4e2a\u952e\u5bf9\u5e94\u7684\u503c\uff0c\u7136\u540e\u5224\u65ad\u8fd9\u4e2a\u503c\u662f\u5426\u4e3a\u6570\u7ec4\u3001\u5bf9\u8c61\n                var temp = oldObj[k];\n                if(temp instanceof Array) {\n                    newObj[k] = [];\n                    deepCopy(newObj[k],temp);\n                } else if(temp instanceof Object) {\n                    newObj[k] = {};\n                    deepCopy(newObj[k],temp);\n                } else {\n                    newObj[k] = temp;\n                }\n            }\n        }\n        deepCopy(o,obj);\n        // console.log(o);\n        o.age.pink = 777;\n        console.log(obj);\n        console.log(o);\n    <\/script>\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/944c2178f9cfcc00fe10b17fc7264968.png",alt:null})))}m.isMDXComponent=!0}}]);