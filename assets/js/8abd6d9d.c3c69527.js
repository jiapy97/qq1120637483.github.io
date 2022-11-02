"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[78677],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=p(n),k=l,d=s["".concat(u,".").concat(k)]||s[k]||c[k]||a;return n?r.createElement(d,o(o({ref:t},m),{},{components:n})):r.createElement(d,o({ref:t},m))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},55692:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),l=(n(67294),n(3905));const a={title:"\u3010\u9752\u8bad\u8425\u3011- Node.js\u57fa\u7840\u5165\u95e8\u7b14\u8bb02",date:"2021-8-24",author:"Justin",top:!1,cover:!1,categories:"\u5b57\u8282\u9752\u8bad\u8425",tags:["\u5b57\u8282\u9752\u8bad\u8425"]},o=void 0,i={permalink:"/blog/\u3010\u9752\u8bad\u8425\u3011- Node.js\u57fa\u7840\u5165\u95e8\u7b14\u8bb02",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/\u3010\u9752\u8bad\u8425\u3011- Node.js\u57fa\u7840\u5165\u95e8\u7b14\u8bb02.md",source:"@site/blog/\u3010\u9752\u8bad\u8425\u3011- Node.js\u57fa\u7840\u5165\u95e8\u7b14\u8bb02.md",title:"\u3010\u9752\u8bad\u8425\u3011- Node.js\u57fa\u7840\u5165\u95e8\u7b14\u8bb02",description:"\u6a21\u5757\u5316\u673a\u5236",date:"2021-08-24T00:00:00.000Z",formattedDate:"2021\u5e748\u670824\u65e5",tags:[{label:"\u5b57\u8282\u9752\u8bad\u8425",permalink:"/blog/tags/\u5b57\u8282\u9752\u8bad\u8425"}],readingTime:2.565,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"\u3010\u9752\u8bad\u8425\u3011- Node.js\u57fa\u7840\u5165\u95e8\u7b14\u8bb02",date:"2021-8-24",author:"Justin",top:!1,cover:!1,categories:"\u5b57\u8282\u9752\u8bad\u8425",tags:["\u5b57\u8282\u9752\u8bad\u8425"]},prevItem:{title:"\u3010\u9752\u8bad\u8425\u3011- TypeScript\u5165\u95e8\u7b14\u8bb0",permalink:"/blog/\u3010\u9752\u8bad\u8425\u3011- TypeScript\u5165\u95e8\u7b14\u8bb0"},nextItem:{title:"\u3010\u9752\u8bad\u8425\u3011- Node.js\u57fa\u7840\u5165\u95e8\u7b14\u8bb01",permalink:"/blog/\u3010\u9752\u8bad\u8425\u3011- Node.js\u57fa\u7840\u5165\u95e8\u7b14\u8bb01"}},u={authorsImageUrls:[void 0]},p=[{value:"\u6a21\u5757\u5316\u673a\u5236",id:"\u6a21\u5757\u5316\u673a\u5236",level:2},{value:"CommonJS\u89c4\u8303",id:"commonjs\u89c4\u8303",level:3},{value:"\u5176\u4ed6\u6a21\u5757\u5316\u89c4\u8303",id:"\u5176\u4ed6\u6a21\u5757\u5316\u89c4\u8303",level:3},{value:"\u5305\u7ba1\u7406\u673a\u5236",id:"\u5305\u7ba1\u7406\u673a\u5236",level:2},{value:"\u5f02\u6b65\u7f16\u7a0b",id:"\u5f02\u6b65\u7f16\u7a0b",level:2},{value:"Promise",id:"promise",level:3},{value:"Web\u5e94\u7528\u5f00\u53d1",id:"web\u5e94\u7528\u5f00\u53d1",level:2},{value:"HTTP\u6a21\u5757",id:"http\u6a21\u5757",level:3},{value:"KOA\u4ecb\u7ecd",id:"koa\u4ecb\u7ecd",level:3}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u6a21\u5757\u5316\u673a\u5236"},"\u6a21\u5757\u5316\u673a\u5236"),(0,l.kt)("h3",{id:"commonjs\u89c4\u8303"},"CommonJS\u89c4\u8303"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u52a0\u8f7d\u65b9\u5f0f")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u52a0\u8f7d\u5185\u7f6e\u6a21\u5757require('fs')"),(0,l.kt)("li",{parentName:"ol"},"\u52a0\u8f7d\u76f8\u5bf9\u6216\u7edd\u5bf9\u8def\u5f84\u7684\u6587\u4ef6\u6a21\u5757require('/User/...')"),(0,l.kt)("li",{parentName:"ol"},"\u52a0\u8f7dnpm\u5305 require('lodash')")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"npm\u5305\u67e5\u627e\u539f\u5219")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5f53\u524d\u76ee\u5f55\u7684node_modules\u6587\u4ef6\u5939"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u6ca1\u6709\uff0c\u6cbf\u7740\u8def\u5f84\u5411\u4e0a\u9012\u5f52\uff0c\u76f4\u5230\u6839\u76ee\u5f55\u4e0b\u7684node_modules"),(0,l.kt)("li",{parentName:"ol"},"\u627e\u5230\u4e4b\u540e\u4f1a\u52a0\u8f7dpackage.json \u4e2dmain\u5c5e\u6027\u6307\u5411\u7684\u6587\u4ef6\uff0c\u5982\u679c\u6ca1\u6709package.json\u5219\u4f9d\u6b21\u67e5\u627eindex.js\u3001index.json\u3001index.node")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"require.cache",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"require.cache\u4e2d\u7f13\u5b58\u7740\u52a0\u8f7d\u8fc7\u7684\u6a21\u5757\uff0c\u7f13\u5b58\u7684\u539f\u56e0\uff1a\u540c\u6b65\u52a0\u8f7d\u3002")))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6587\u4ef6\u6a21\u5757\u67e5\u627e\u6bd4\u8f83\u8017\u65f6\uff0c\u5982\u679c\u6bcf\u6b21require\u90fd\u9700\u8981\u91cd\u65b0\u904d\u5386\u67e5\u627e\uff0c\u6027\u80fd\u4f1a\u6bd4\u8f83\u5dee\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728\u5b9e\u9645\u5f00\u53d1\u4e2d\u6a21\u5757\u53ef\u80fd\u5305\u542b\u526f\u4f5c\u7528\u4ee3\u7801\u3002")),(0,l.kt)("h3",{id:"\u5176\u4ed6\u6a21\u5757\u5316\u89c4\u8303"},"\u5176\u4ed6\u6a21\u5757\u5316\u89c4\u8303"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"AMD\u662fRequireJS\u5728\u63a8\u5e7f\u8fc7\u7a0b\u4e2d\u89c4\u8303\u5316\u4ea7\u51fa\uff0c\u5f02\u6b65\u52a0\u8f7d\uff0c\u63a8\u5d07\u4f9d\u8d56\u524d\u7f6e\u3002"),(0,l.kt)("li",{parentName:"ul"},"CMD\u662fSeaJS\u5728\u63a8\u5e7f\u8fc7\u7a0b\u4e2d\u89c4\u8303\u5316\u4ea7\u51fa\uff0c\u5f02\u6b65\u52a0\u8f7d\uff0c\u63a8\u5d07\u5c31\u8fd1\u4f9d\u8d56\u3002"),(0,l.kt)("li",{parentName:"ul"},"UMD\u89c4\u8303\uff0c\u517c\u5bb9AMD\u548cCommonJS\u6a21\u5f0f\u3002"),(0,l.kt)("li",{parentName:"ul"},"ES Modules,\u8bed\u8a00\u5c42\u9762\u7684\u6a21\u5757\u5316\u89c4\u8303\uff0c\u4e0e\u73af\u5883\u65e0\u5173\uff0c\u53ef\u501f\u52a9babel\u7f16\u8bd1\u3002")),(0,l.kt)("h2",{id:"\u5305\u7ba1\u7406\u673a\u5236"},"\u5305\u7ba1\u7406\u673a\u5236"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"npm\u662fNode.js\u4e2d\u7684\u5305\u7ba1\u7406\u5176\uff0c\u63d0\u4f9b\u4e86\u5b89\u88c5\u3001\u5220\u9664\u7b49\u5176\u4ed6\u547d\u4ee4\u6765\u7ba1\u7406\u5305\u3002")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5e38\u7528\u547d\u4ee4")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm init\nnpm config\nnpm run\nnpm install \nnpm uninstall\nnpm update\nnpm publish\n")),(0,l.kt)("h2",{id:"\u5f02\u6b65\u7f16\u7a0b"},"\u5f02\u6b65\u7f16\u7a0b"),(0,l.kt)("h3",{id:"promise"},"Promise"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Promise\u662f\u4e00\u4e2a\u5177\u6709\u56db\u4e2a\u72b6\u6001\u7684\u6709\u9650\u72b6\u6001\u673a\uff0c\u5176\u4e2d\u4e09\u4e2a\u6838\u5fc3\u72b6\u6001\u4e3apending,fulfilled\u3001rejected\u4ee5\u53ca\u8fd8\u6709\u4e00\u4e2a\u672a\u5f00\u59cb\u7684\u72b6\u6001\u3002")),(0,l.kt)("h2",{id:"web\u5e94\u7528\u5f00\u53d1"},"Web\u5e94\u7528\u5f00\u53d1"),(0,l.kt)("h3",{id:"http\u6a21\u5757"},"HTTP\u6a21\u5757"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u642d\u5efa\u4e00\u4e2a\u6700\u7b80\u5355\u7684HTTP\u670d\u52a1\uff0c\u53ef\u4ee5\u901a\u8fc7Node.js\u5185\u7f6e\u7684HTTP\u6a21\u5757\u3002")),(0,l.kt)("h3",{id:"koa\u4ecb\u7ecd"},"KOA\u4ecb\u7ecd"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Koa\u662f\u57fa\u4e8eNode.js\u5e73\u53f0\u7684\u4e0b\u4e00\u4ee3Web\u5f00\u53d1\u6846\u67b6\uff0cKoa\u5b83\u4ec5\u4ec5\u63d0\u4f9b\u4e86\u4e00\u4e2a\u8f7b\u91cf\u4f18\u96c5\u7684\u51fd\u6570\u5e93\uff0c\u4f7f\u5f97\u7f16\u5199Web\u5e94\u7528\u53d8\u5f97\u5f97\u5fc3\u5e94\u624b\uff0c\u4e0d\u5728\u5185\u6838\u65b9\u6cd5\u4e2d\u7ed1\u5b9a\u4efb\u4f55\u4e2d\u95f4\u4ef6\u3002\u4e0b\u9762\u4ecb\u7ecd\u4e0b\u6267\u884c\u8fc7\u7a0b\u3002"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"\u670d\u52a1\u542f\u52a8",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u4f8b\u5316application"),(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u518c\u4e2d\u95f4\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u670d\u52a1\u3001\u76d1\u542c\u7aef\u53e3"))),(0,l.kt)("li",{parentName:"ul"},"\u63a5\u53d7/\u5904\u7406\u8bf7\u6c42",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u83b7\u53d6req/res\u5bf9\u8c61"),(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c\u4e2d\u95f4\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u8f93\u51fa\u8bbe\u7f6e\u5230ctx.body\u4e0a\u7684\u5185\u5bb9"))))))}c.isMDXComponent=!0}}]);