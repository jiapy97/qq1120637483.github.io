"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[95273],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),k=r,g=m["".concat(p,".").concat(k)]||m[k]||i[k]||l;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56166:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>i,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={title:"Egg.js\u4e2d\u95f4\u4ef6\u7684\u6838\u5fc3\u7528\u6cd5",date:new Date("2021-10-30T00:00:00.000Z"),author:"Justin",top:!1,cover:!1,categories:"Egg.js",tags:["Egg.js"]},o=void 0,s={permalink:"/blog/Egg.js\u4e2d\u95f4\u4ef6\u7684\u6838\u5fc3\u7528\u6cd5",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/Egg.js\u4e2d\u95f4\u4ef6\u7684\u6838\u5fc3\u7528\u6cd5.md",source:"@site/blog\\Egg.js\u4e2d\u95f4\u4ef6\u7684\u6838\u5fc3\u7528\u6cd5.md",title:"Egg.js\u4e2d\u95f4\u4ef6\u7684\u6838\u5fc3\u7528\u6cd5",description:"\u4e00\u3001\u5728\u5e94\u7528\u4e2d\u4f7f\u7528\u4e2d\u95f4\u4ef6",date:"2021-10-30T00:00:00.000Z",formattedDate:"2021\u5e7410\u670830\u65e5",tags:[{label:"Egg.js",permalink:"/blog/tags/egg-js"}],readingTime:4.24,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"Egg.js\u4e2d\u95f4\u4ef6\u7684\u6838\u5fc3\u7528\u6cd5",date:"2021-10-30T00:00:00.000Z",author:"Justin",top:!1,cover:!1,categories:"Egg.js",tags:["Egg.js"]},prevItem:{title:"\uff08\u6700\u7cfb\u7edf\u3001\u6700\u5168\u9762\uff09\u8fd9\u4e00\u6b21\uff0c\u5f7b\u5e95\u641e\u61c2HTTP\u9762\u8bd5",permalink:"/blog/\uff08\u6700\u7cfb\u7edf\u3001\u6700\u5168\u9762\uff09\u8fd9\u4e00\u6b21\uff0c\u5f7b\u5e95\u641e\u61c2HTTP\u9762\u8bd5"},nextItem:{title:"Egg.js\u4e2d\u4f7f\u7528extend\u3001Cookie\u3001Session\u7684\u57fa\u672c\u65b9\u5f0f",permalink:"/blog/Egg.js\u4e2d\u4f7f\u7528extend\u3001Cookie\u3001Session\u7684\u57fa\u672c\u65b9\u5f0f"}},p={authorsImageUrls:[void 0]},c=[{value:"\u4e00\u3001\u5728\u5e94\u7528\u4e2d\u4f7f\u7528\u4e2d\u95f4\u4ef6",id:"\u4e00\u5728\u5e94\u7528\u4e2d\u4f7f\u7528\u4e2d\u95f4\u4ef6",level:2},{value:"\u4e8c\u3001\u5728router.js\u4e2d\u4f7f\u7528\u4e2d\u95f4\u4ef6",id:"\u4e8c\u5728routerjs\u4e2d\u4f7f\u7528\u4e2d\u95f4\u4ef6",level:2},{value:"\u4e09\u3001Egg.js\u4e2d\u4f7f\u7528KOA\u7684\u4e2d\u95f4\u4ef6",id:"\u4e09eggjs\u4e2d\u4f7f\u7528koa\u7684\u4e2d\u95f4\u4ef6",level:2},{value:"\u56db\u3001\u4e2d\u95f4\u4ef6\u7684\u901a\u7528\u914d\u7f6e",id:"\u56db\u4e2d\u95f4\u4ef6\u7684\u901a\u7528\u914d\u7f6e",level:2},{value:"\u4e94\u3001\u8bbe\u7f6e\u672a\u7ecf\u6388\u6743\u7684\u7528\u6237\u65e0\u6cd5\u8bbf\u95ee\u6307\u5b9a\u9875\u9762",id:"\u4e94\u8bbe\u7f6e\u672a\u7ecf\u6388\u6743\u7684\u7528\u6237\u65e0\u6cd5\u8bbf\u95ee\u6307\u5b9a\u9875\u9762",level:2}],u={toc:c};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4e00\u5728\u5e94\u7528\u4e2d\u4f7f\u7528\u4e2d\u95f4\u4ef6"},"\u4e00\u3001\u5728\u5e94\u7528\u4e2d\u4f7f\u7528\u4e2d\u95f4\u4ef6"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5728app/middleware\u6587\u4ef6\u5939\u4e0b\u65b0\u5efa\u4e00\u4e2aauth2.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = (option,app) => {\n\n  return async function auth2(ctx,next) {\n\n    console.log(new Date);\n\n    // \u4e0b\u9762\u7684\u8fd9\u4e2a\u8bed\u53e5\u5f88\u91cd\u8981\uff0c\u5982\u679c\u6ca1\u6709\u4e0b\u9762\u8fd9\u4e2a\u8bed\u53e5\uff0c\u7ebf\u7a0b\u6267\u884c\u5230\u8fd9\u91cc\u5c31\u8981\u7ec8\u6b62\u4e86\n    await next();\n  }\n}\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u6ce8\u518c\u4e2d\u95f4\u4ef6")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5728config.default.js\u4e2d\u8fdb\u884c\u6ce8\u518c\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"config.middleware = ['auth2'];\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u7ed9\u4e2d\u95f4\u4ef6\u4f20\u53c2")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"config.middleware = ['auth2'];\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"\u4e2d\u95f4\u4ef6\u8bfb\u53d6\u4f20\u8fc7\u6765\u7684\u53c2\u6570")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"return async function auth2(ctx,next) {\n    console.log(option);\n\n    console.log(new Date);\n\n    // \u4e0b\u9762\u7684\u8fd9\u4e2a\u8bed\u53e5\u5f88\u91cd\u8981\uff0c\u5982\u679c\u6ca1\u6709\u4e0b\u9762\u8fd9\u4e2a\u8bed\u53e5\uff0c\u7ebf\u7a0b\u6267\u884c\u5230\u8fd9\u91cc\u5c31\u8981\u7ec8\u6b62\u4e86\n    await next();\n  }\n")),(0,r.kt)("h2",{id:"\u4e8c\u5728routerjs\u4e2d\u4f7f\u7528\u4e2d\u95f4\u4ef6"},"\u4e8c\u3001\u5728router.js\u4e2d\u4f7f\u7528\u4e2d\u95f4\u4ef6"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u672c\u8282\u7684\u76ee\u6807\u662f\u7ed9\u6307\u5b9a\u8def\u7531\u914d\u7f6e\u4e2d\u95f4\u4ef6\u3002\u4e0b\u9762\u7684\u8fd9\u79cd\u65b9\u5f0f\uff0c\u4e0d\u9700\u8981\u518dconfig.default.js\u4e2d\u6ce8\u518c\u8def\u7531\u4e86\u3002")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u4e2d\u95f4\u4ef6\u7684\u65b9\u5f0f\u548c\u4e0a\u6587\u7684\u5b9a\u4e49\u65b9\u5f0f\u4e00\u81f4\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728router.js\u4e2d\u83b7\u53d6\u4e2d\u95f4\u4ef6\uff0c\u5e76\u6307\u5b9a\u54ea\u4e9b\u8def\u7531\u80fd\u591f\u89e6\u53d1\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = app => {\n  const { router, controller } = app;\n  const auth = app.middleware.auth();\n  router.get('/',auth, controller.home.setSession);\n  router.get('/news', controller.news.index);\n  router.get('/deletecookie',controller.home.deletecookie)\n};\n")),(0,r.kt)("h2",{id:"\u4e09eggjs\u4e2d\u4f7f\u7528koa\u7684\u4e2d\u95f4\u4ef6"},"\u4e09\u3001Egg.js\u4e2d\u4f7f\u7528KOA\u7684\u4e2d\u95f4\u4ef6"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e0b\u6587\u6211\u4eec\u4ee5egg\u4e2d\u4f7f\u7528koa-jsonp\u8fd9\u4e2a\u4e2d\u95f4\u4ef6\u4e3a\u4f8b\u8fdb\u884c\u7cfb\u7edf\u6027\u9610\u8ff0\u3002")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5b89\u88c5koa-jsonp")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install koa-jsonp\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u5728app/middleware\u4e2d\u65b0\u5efa\u4e00\u4e2ajsonp.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u914d\u7f6eKOA\u7684\u4e2d\u95f4\u4ef6\n\nconst jsonp = require('koa-jsonp');\n\nmodule.exports = jsonp;\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u6ce8\u518c\u4e2d\u95f4\u4ef6(\u5728config.default.js)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"config.middleware = ['jsonp'];\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"\u8bf7\u6c42\u6307\u5b9a\u8def\u5f84")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"http://127.0.0.1:7001/shop?callback=666\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/825fdeccb69c8329c5a327bae582a113.png",alt:"image.png"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e0b\u6587\u7ee7\u7eed\u8bb2\u4e00\u4e2akoa-compress\u7684\u4e2d\u95f4\u4ef6\uff0c\u8fd9\u4e2a\u4e2d\u95f4\u4ef6\u80fd\u591f\u5f00\u542f\u670d\u52a1\u5668Gzip\u538b\u7f29\u7684\u529f\u80fd\u3002")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5b89\u88c5koa-compress")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install koa-compress\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u5728app/middleware\u4e0b\u65b0\u5efa\u4e00\u4e2acompress.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = require('koa-compress');\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u6ce8\u518c\u4e2d\u95f4\u4ef6")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"config.middleware = ['jsonp','compress'];\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u4e2d\u95f4\u4ef6\u7684\u53c2\u6570")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"config.compress = {\n    threshold: 1024   // \u8bbe\u7f6e\u538b\u7f29\u95e8\u9650\u503c\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6b64\u65f6\u8bbf\u95ee\u6307\u5b9a\u9875\u9762\u7684\u6587\u4ef6\u90fd\u662f\u7ecf\u8fc7\u538b\u7f29\u7684\u6587\u4ef6\u4e86\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u662f\u975e\u6807\u51c6\u7684\u4e2d\u95f4\u4ef6\uff0c\u4e2d\u95f4\u4ef6\u7684\u5b9a\u4e49\u65b9\u5f0f\u5982\u4e0b\u6240\u793a\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u4e0b\u9762\u6f14\u793a\u975e\u6807\u51c6\u4e2d\u95f4\u4ef6\u7684\u4f7f\u7528\n\nconst middleWare = require('xxx');\n\nmodule.exports = (option,app) => {\n  return middleWare(options1,options2)\n}\n")),(0,r.kt)("h2",{id:"\u56db\u4e2d\u95f4\u4ef6\u7684\u901a\u7528\u914d\u7f6e"},"\u56db\u3001\u4e2d\u95f4\u4ef6\u7684\u901a\u7528\u914d\u7f6e"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u65e0\u8bba\u662f\u5f15\u7528\u5c42\u52a0\u8f7d\u7684\u4e2d\u95f4\u4ef6\u8fd8\u662f\u6846\u67b6\u518d\u5e26\u7684\u4e2d\u95f4\u4ef6\uff0c\u90fd\u652f\u6301\u4e0b\u9762\u4e09\u4e2a\u901a\u7528\u7684\u914d\u7f6e\u9879\u3002")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"enable\uff1a\u63a7\u5236\u4e2d\u95f4\u4ef6\u662f\u5426\u5f00\u542f\u3002"),(0,r.kt)("li",{parentName:"ol"},"match\uff1a\u8bbe\u7f6e\u53ea\u6709\u7b26\u5408\u67d0\u4e9b\u89c4\u5219\u7684\u8bf7\u6c42\u624d\u4f1a\u7ecf\u8fc7\u8fd9\u4e2a\u4e2d\u95f4\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ol"},"ignore\uff1a\u8bbe\u7f6e\u7b26\u5408\u67d0\u4e9b\u89c4\u5219\u7684\u8bf7\u6c42\u4e0d\u7ecf\u8fc7\u8fd9\u4e2a\u4e2d\u95f4\u4ef6\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7981\u7528\u67d0\u4e2a\u4e2d\u95f4\u4ef6")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"config.compress = {\n    enable: false,\n    threshold: 10   // \u8bbe\u7f6e\u538b\u7f29\u95e8\u9650\u503c\n  }\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u8ba9\u67d0\u4e2a\u8def\u7531\u80fd\u5339\u914d\u4e2d\u95f4\u4ef6")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"config.auth = {\n    match: '/news',\n    title: 'auth \u4f60\u597d'\n  }\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u60f3\u5ffd\u7565\u67d0\u4e2a\u8def\u7531\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u5199\u6cd5")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"config.auth = {\n    ignore: '/news',\n    title: 'auth \u4f60\u597d'\n  }\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u8981\u5904\u7406\u7684\u8def\u7531\u60c5\u51b5\u6bd4\u8f83\u590d\u6742\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684match\u65b9\u6cd5")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"config.auth = {\n    match(ctx) {\n      if (ctx.request.url === '/shop' || ctx.request.url === \"/news\") {\n        return true;\n      }\n      return false\n    },\n    title: 'auth \u4f60\u597d'\n  }\n")),(0,r.kt)("h2",{id:"\u4e94\u8bbe\u7f6e\u672a\u7ecf\u6388\u6743\u7684\u7528\u6237\u65e0\u6cd5\u8bbf\u95ee\u6307\u5b9a\u9875\u9762"},"\u4e94\u3001\u8bbe\u7f6e\u672a\u7ecf\u6388\u6743\u7684\u7528\u6237\u65e0\u6cd5\u8bbf\u95ee\u6307\u5b9a\u9875\u9762"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5728app/middleware/ \u4e0b\u521b\u5efa\u6307\u5b9a\u4e2d\u95f4\u4ef6")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = (option,app) => {\n  return async function auth(ctx,next) {\n    if (ctx.session && ctx.session.userinfo) {\n      await next()\n    } else {\n      if (ctx.request.url === '/') {\n        await next();\n      } else {\n        ctx.redirect('/');\n      }\n    }\n  }\n}\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u6ce8\u518c\u4e2d\u95f4\u4ef6")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  config.middleware = ['auth','compress','adminAuth'];\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u8ba9\u6307\u5b9a\u8def\u5f84\u7684\u8def\u7531\u89e6\u53d1\u4e2d\u95f4\u4ef6")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  config.adminAuth = {\n    match: '/admin/user'\n  }\n")))}i.isMDXComponent=!0}}]);