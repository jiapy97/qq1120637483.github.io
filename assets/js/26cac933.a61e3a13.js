"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[8462],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),i=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=i(r),d=a,g=m["".concat(o,".").concat(d)]||m[d]||u[d]||s;return r?n.createElement(g,p(p({ref:t},c),{},{components:r})):n.createElement(g,p({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,p=new Array(s);p[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var i=2;i<s;i++)p[i]=r[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},81802:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const s={title:"Express_01--Express\u4e2d\u7684\u57fa\u672c\u5e38\u8bc6\u548c\u6a21\u677f\u5f15\u64ce\u7684\u7528\u6cd5",date:"2021-8-12",author:"Justin",top:!1,cover:!1,categories:"Express",tags:["Express"]},p=void 0,l={permalink:"/blog/Express_01--Express\u4e2d\u7684\u57fa\u672c\u5e38\u8bc6\u548c\u6a21\u677f\u5f15\u64ce\u7684\u7528\u6cd5",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/Express_01--Express\u4e2d\u7684\u57fa\u672c\u5e38\u8bc6\u548c\u6a21\u677f\u5f15\u64ce\u7684\u7528\u6cd5.md",source:"@site/blog/Express_01--Express\u4e2d\u7684\u57fa\u672c\u5e38\u8bc6\u548c\u6a21\u677f\u5f15\u64ce\u7684\u7528\u6cd5.md",title:"Express_01--Express\u4e2d\u7684\u57fa\u672c\u5e38\u8bc6\u548c\u6a21\u677f\u5f15\u64ce\u7684\u7528\u6cd5",description:"1. \u5b89\u88c5express",date:"2021-08-12T00:00:00.000Z",formattedDate:"2021\u5e748\u670812\u65e5",tags:[{label:"Express",permalink:"/blog/tags/express"}],readingTime:2.51,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"Express_01--Express\u4e2d\u7684\u57fa\u672c\u5e38\u8bc6\u548c\u6a21\u677f\u5f15\u64ce\u7684\u7528\u6cd5",date:"2021-8-12",author:"Justin",top:!1,cover:!1,categories:"Express",tags:["Express"]},prevItem:{title:"LeetCode\u2014\u2014\u53cd\u8f6c\u94fe\u8868\uff08\u53cc\u6307\u9488\uff09",permalink:"/blog/LeetCode\u2014\u2014\u53cd\u8f6c\u94fe\u8868\uff08\u53cc\u6307\u9488\uff09"},nextItem:{title:"Node\u62a5\u9519 npm ERR! code EINVALIDTAGNAME",permalink:"/blog/Node\u62a5\u9519npm ERR code EINVALIDTAGNAME"}},o={authorsImageUrls:[void 0]},i=[{value:"1. \u5b89\u88c5express",id:"1-\u5b89\u88c5express",level:2},{value:"2. Express\u7684Hello,World",id:"2-express\u7684helloworld",level:2},{value:"3. \u5c06\u4e00\u4e2a\u6587\u4ef6\u5939\u4e0b\u7684\u6240\u6709\u6587\u4ef6\u53d8\u4e3a\u53ef\u8bbf\u95ee",id:"3-\u5c06\u4e00\u4e2a\u6587\u4ef6\u5939\u4e0b\u7684\u6240\u6709\u6587\u4ef6\u53d8\u4e3a\u53ef\u8bbf\u95ee",level:2},{value:"4. \u4f7f\u7528nodemon\u6765\u4fdd\u5b58\u540e\u81ea\u52a8\u91cd\u542f",id:"4-\u4f7f\u7528nodemon\u6765\u4fdd\u5b58\u540e\u81ea\u52a8\u91cd\u542f",level:2},{value:"\u57fa\u672c\u8def\u7531",id:"\u57fa\u672c\u8def\u7531",level:2},{value:"\u66b4\u9732\u6587\u4ef6\u4e0d\u540c\u65b9\u5f0f\u7684\u533a\u522b",id:"\u66b4\u9732\u6587\u4ef6\u4e0d\u540c\u65b9\u5f0f\u7684\u533a\u522b",level:2},{value:"1. \u53ea\u6709\u4e00\u4e2a\u53c2\u6570\uff08URL\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee\u6587\u4ef6\u540d\uff09",id:"1-\u53ea\u6709\u4e00\u4e2a\u53c2\u6570url\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee\u6587\u4ef6\u540d",level:3},{value:"2. \u4e24\u4e2a\u53c2\u6570\uff08URL\u5fc5\u987b\u5305\u542b\u6307\u5411\u6539\u6587\u4ef6\u7684\u8def\u5f84\uff09",id:"2-\u4e24\u4e2a\u53c2\u6570url\u5fc5\u987b\u5305\u542b\u6307\u5411\u6539\u6587\u4ef6\u7684\u8def\u5f84",level:3},{value:"3. \u522b\u540d\u7684\u5f62\u5f0f",id:"3-\u522b\u540d\u7684\u5f62\u5f0f",level:3},{value:"\u5728express\u4e2d\u914d\u7f6e\u6a21\u677f\u5f15\u64ceart-template",id:"\u5728express\u4e2d\u914d\u7f6e\u6a21\u677f\u5f15\u64ceart-template",level:2},{value:"1. \u5b89\u88c5art-template",id:"1-\u5b89\u88c5art-template",level:3},{value:"2. API\u4ecb\u7ecd",id:"2-api\u4ecb\u7ecd",level:3},{value:"\u4e00\u4e2a\u57fa\u4e8eexpress\u7684\u7559\u8a00\u672c\u5c0f\u6848\u4f8b",id:"\u4e00\u4e2a\u57fa\u4e8eexpress\u7684\u7559\u8a00\u672c\u5c0f\u6848\u4f8b",level:3}],c={toc:i};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-\u5b89\u88c5express"},"1. \u5b89\u88c5express"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"npm i express\n")),(0,a.kt)("h2",{id:"2-express\u7684helloworld"},"2. Express\u7684Hello,World"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const express = require('express');\n\nconst app = express();\n\napp.get('/',(req,res) => {\n    res.send('Hello,Express!');\n})\n\napp.listen(3000,() => {\n    console.log('\u670d\u52a1\u5668\u542f\u52a8\u6210\u529f\uff01');\n})\n")),(0,a.kt)("h2",{id:"3-\u5c06\u4e00\u4e2a\u6587\u4ef6\u5939\u4e0b\u7684\u6240\u6709\u6587\u4ef6\u53d8\u4e3a\u53ef\u8bbf\u95ee"},"3. \u5c06\u4e00\u4e2a\u6587\u4ef6\u5939\u4e0b\u7684\u6240\u6709\u6587\u4ef6\u53d8\u4e3a\u53ef\u8bbf\u95ee"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"app.use('/public',express.static('./public'));\n")),(0,a.kt)("h2",{id:"4-\u4f7f\u7528nodemon\u6765\u4fdd\u5b58\u540e\u81ea\u52a8\u91cd\u542f"},"4. \u4f7f\u7528nodemon\u6765\u4fdd\u5b58\u540e\u81ea\u52a8\u91cd\u542f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install nodemon -g\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4ee5\u540e\u542f\u52a8\u4e00\u4e2a\u6587\u4ef6\u4e0d\u518d\u4f7f\u7528node + \u6587\u4ef6\u540d\u7684\u65b9\u5f0f\uff0c\u800c\u662f\u4f7f\u7528nodemon + \u6587\u4ef6\u540d\u7684\u65b9\u5f0f\u3002\u8fd9\u6837\u53ef\u4ee5\u5b9e\u73b0\u70ed\u66f4\u65b0\uff0c\u5373\u4fdd\u5b58\u5c31\u66f4\u65b0\u670d\u52a1\u5668\u3002")),(0,a.kt)("h2",{id:"\u57fa\u672c\u8def\u7531"},"\u57fa\u672c\u8def\u7531"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"app.get('/',(req,res) => {\n    res.send('Hello,Express666!');\n})\n\napp.get('/about',(req,res) => {\n    res.send('\u5173\u4e8e');\n})\n")),(0,a.kt)("h2",{id:"\u66b4\u9732\u6587\u4ef6\u4e0d\u540c\u65b9\u5f0f\u7684\u533a\u522b"},"\u66b4\u9732\u6587\u4ef6\u4e0d\u540c\u65b9\u5f0f\u7684\u533a\u522b"),(0,a.kt)("h3",{id:"1-\u53ea\u6709\u4e00\u4e2a\u53c2\u6570url\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee\u6587\u4ef6\u540d"},"1. \u53ea\u6709\u4e00\u4e2a\u53c2\u6570\uff08URL\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee\u6587\u4ef6\u540d\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"app.use(express.static('./public'));\n")),(0,a.kt)("h3",{id:"2-\u4e24\u4e2a\u53c2\u6570url\u5fc5\u987b\u5305\u542b\u6307\u5411\u6539\u6587\u4ef6\u7684\u8def\u5f84"},"2. \u4e24\u4e2a\u53c2\u6570\uff08URL\u5fc5\u987b\u5305\u542b\u6307\u5411\u6539\u6587\u4ef6\u7684\u8def\u5f84\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"app.use('/public',express.static('./public'));\n")),(0,a.kt)("h3",{id:"3-\u522b\u540d\u7684\u5f62\u5f0f"},"3. \u522b\u540d\u7684\u5f62\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"app.use('/a',express.static('./public'));\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8fd9\u91cc\u7684a\u610f\u601d\u662f\u8def\u5f84\u4e2d\u4ee5a\u5f00\u5934\u7684\uff0c\u5c31\u53ef\u4ee5\u8bbf\u95eepublic\u8def\u5f84\u4e0b\u7684\u6587\u4ef6\u3002")),(0,a.kt)("h2",{id:"\u5728express\u4e2d\u914d\u7f6e\u6a21\u677f\u5f15\u64ceart-template"},"\u5728express\u4e2d\u914d\u7f6e\u6a21\u677f\u5f15\u64ceart-template"),(0,a.kt)("h3",{id:"1-\u5b89\u88c5art-template"},"1. \u5b89\u88c5art-template"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save art-template\nnpm install --save express-art-template\n")),(0,a.kt)("h3",{id:"2-api\u4ecb\u7ecd"},"2. API\u4ecb\u7ecd"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5f53\u6e32\u67d3\u4ee5.art\u7ed3\u5c3e\u7684\u6587\u4ef6\u7684\u65f6\u5019\uff0c\u4f7f\u7528art-template\u6a21\u677f\u5f15\u64ce"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"app.engine('art', require('express-art-template'));\n//\u6216\u8005\uff0c\u4e0b\u9762\u7684\u8fd9\u79cd\u65b9\u5f0f\u4e5f\u662f\u53ef\u4ee5\u7684\napp.engine('html', require('express-art-template'));\n")),(0,a.kt)("p",{parentName:"blockquote"},"\u8c03\u7528res.render\u7684\u65f6\u5019\uff0c\u4f1a\u9ed8\u8ba4\u53bb\u9879\u76ee\u7684views\u76ee\u5f55\u4e2d\u67e5\u627e\u6307\u5b9a\u7684\u6587\u4ef6\uff0c\u4f46\u662f\u8be5\u6587\u4ef6\u5fc5\u987b\u4ee5art\u7ed3\u5c3e\u3002\u5982\u679cengine\u4e2d\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u662fhtml\uff0c\u5219\u4e0d\u9700\u8981\u8fdb\u884c\u91cd\u547d\u540d\uff0c\u5373\u4e0b\u9762\u7684\u7b2c\u4e8c\u79cd\u65b9\u5f0f\u3002"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"app.get('/',(req,res) => {\n    res.render('404.art');\n})\n// \u65b9\u5f0f\u4e8c\napp.get('/',(req,res) => {\n    res.render('404.html');\n})\n")),(0,a.kt)("p",{parentName:"blockquote"},"\u4fee\u6539\u9ed8\u8ba4\u7684views\u76ee\u5f55"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"app.set('views','test');\n"))),(0,a.kt)("h3",{id:"\u4e00\u4e2a\u57fa\u4e8eexpress\u7684\u7559\u8a00\u672c\u5c0f\u6848\u4f8b"},"\u4e00\u4e2a\u57fa\u4e8eexpress\u7684\u7559\u8a00\u672c\u5c0f\u6848\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const express = require('express');\n\nconst app = express();\nlet comments = [\n    {\n        name: '\u9ec4\u591a\u591a',\n        message: '\u7238\u7238\u53bb\u54ea\u4e86',\n        dateTime: '2020-5-21'\n    },\n]\n\napp.engine('html', require('express-art-template'));\n\napp.get('/', (req, res) => {\n    res.render('index.html',{\n        comments\n    });\n})\n\napp.get('/post', (req, res) => {\n    res.render('post.html');\n})\n\napp.get('/pinglun',(req,res) => {\n    let comment = req.query;\n    comment.dateTime = new Date().toLocaleString();\n    comments.unshift(comment);\n    res.redirect('/');\n})\n// \u5f00\u653epublic\u76ee\u5f55\napp.use('/public', express.static('public'));\napp.listen(3000, () => {\n    console.log('\u670d\u52a1\u5668\u57283000\u7aef\u53e3\u542f\u52a8\u6210\u529f......');\n})\n")))}u.isMDXComponent=!0}}]);