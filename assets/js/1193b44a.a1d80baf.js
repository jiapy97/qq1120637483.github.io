"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[58660],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),i=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=i(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=i(t),m=s,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return t?n.createElement(f,o(o({ref:r},u),{},{components:t})):n.createElement(f,o({ref:r},u))}));function m(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var a=t.length,o=new Array(a);o[0]=c;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p.mdxType="string"==typeof e?e:s,o[1]=p;for(var i=2;i<a;i++)o[i]=t[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},73498:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var n=t(87462),s=(t(67294),t(3905));const a={title:"Express_02--\u5904\u7406\u8868\u5355\u7684POST\u8bf7\u6c42",date:new Date("2021-10-24T00:00:00.000Z"),author:"Justin",top:!1,cover:!1,categories:"Express",tags:["Express"]},o=void 0,p={permalink:"/blog/Express_02--\u5904\u7406\u8868\u5355\u7684POST\u8bf7\u6c42",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/Express_02--\u5904\u7406\u8868\u5355\u7684POST\u8bf7\u6c42.md",source:"@site/blog/Express_02--\u5904\u7406\u8868\u5355\u7684POST\u8bf7\u6c42.md",title:"Express_02--\u5904\u7406\u8868\u5355\u7684POST\u8bf7\u6c42",description:"express\u5904\u7406\u8868\u5355\u7684post\u8bf7\u6c42",date:"2021-10-24T00:00:00.000Z",formattedDate:"2021\u5e7410\u670824\u65e5",tags:[{label:"Express",permalink:"/blog/tags/express"}],readingTime:1.615,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"Express_02--\u5904\u7406\u8868\u5355\u7684POST\u8bf7\u6c42",date:"2021-10-24T00:00:00.000Z",author:"Justin",top:!1,cover:!1,categories:"Express",tags:["Express"]},prevItem:{title:"\u817e\u8baf\u4e91Severless\u6838\u5fc3\u7528\u6cd5",permalink:"/blog/\u817e\u8baf\u4e91Severless\u6838\u5fc3\u7528\u6cd5"},nextItem:{title:"\u8fed\u4ee3\u6cd5\u5b9e\u73b0\u5bf9\u4e8c\u53c9\u6811\u7684\u524d\u4e2d\u540e\u5e8f\u904d\u5386",permalink:"/blog/\u8fed\u4ee3\u6cd5\u5b9e\u73b0\u5bf9\u4e8c\u53c9\u6811\u7684\u524d\u4e2d\u540e\u5e8f\u904d\u5386"}},l={authorsImageUrls:[void 0]},i=[{value:"express\u5904\u7406\u8868\u5355\u7684post\u8bf7\u6c42",id:"express\u5904\u7406\u8868\u5355\u7684post\u8bf7\u6c42",level:2},{value:"\u914d\u7f6ebody-parser\u4e2d\u95f4\u4ef6",id:"\u914d\u7f6ebody-parser\u4e2d\u95f4\u4ef6",level:3},{value:"1. \u5b89\u88c5",id:"1-\u5b89\u88c5",level:4},{value:"2. \u5bfc\u5165\u5e76\u914d\u7f6e",id:"2-\u5bfc\u5165\u5e76\u914d\u7f6e",level:4},{value:"3. \u6b64\u65f6\u5373\u53ef\u6210\u529f\u83b7\u53d6req.body(\u5ba2\u6237\u7aefpost\u7684\u5185\u5bb9)",id:"3-\u6b64\u65f6\u5373\u53ef\u6210\u529f\u83b7\u53d6reqbody\u5ba2\u6237\u7aefpost\u7684\u5185\u5bb9",level:4},{value:"\u5c06\u8bfb\u53d6\u5230\u7684\u5b57\u7b26\u4e32\u8f6c\u4e3aJSON",id:"\u5c06\u8bfb\u53d6\u5230\u7684\u5b57\u7b26\u4e32\u8f6c\u4e3ajson",level:2},{value:"\u5c06\u6240\u6709\u7684\u8def\u7531\u7ed3\u6784\u63d0\u53d6\u5230\u4e00\u4e2a\u6587\u4ef6\u4e2d\uff0c\u5e76\u8fdb\u884c\u66b4\u9732",id:"\u5c06\u6240\u6709\u7684\u8def\u7531\u7ed3\u6784\u63d0\u53d6\u5230\u4e00\u4e2a\u6587\u4ef6\u4e2d\u5e76\u8fdb\u884c\u66b4\u9732",level:2},{value:"\u65b9\u5f0f\u4e00\uff1a\u81ea\u5df1\u5c01\u88c5\u51fd\u6570",id:"\u65b9\u5f0f\u4e00\u81ea\u5df1\u5c01\u88c5\u51fd\u6570",level:3},{value:"\u65b9\u5f0f\u4e8c\uff1a\u4f7f\u7528Express\u81ea\u5e26\u7684\u8def\u7531\u5bb9\u5668",id:"\u65b9\u5f0f\u4e8c\u4f7f\u7528express\u81ea\u5e26\u7684\u8def\u7531\u5bb9\u5668",level:3},{value:"1.\u5728\u8def\u7531\u6587\u4ef6\u4e2d\u521b\u5efa\u8def\u7531\u5bb9\u5668\uff0c\u5e76\u8fdb\u884c\u66b4\u9732",id:"1\u5728\u8def\u7531\u6587\u4ef6\u4e2d\u521b\u5efa\u8def\u7531\u5bb9\u5668\u5e76\u8fdb\u884c\u66b4\u9732",level:4},{value:"2. \u5c06\u8def\u7531\u5bb9\u5668\u6302\u8f7d\u5230app\u4e0a",id:"2-\u5c06\u8def\u7531\u5bb9\u5668\u6302\u8f7d\u5230app\u4e0a",level:4}],u={toc:i};function d(e){let{components:r,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"express\u5904\u7406\u8868\u5355\u7684post\u8bf7\u6c42"},"express\u5904\u7406\u8868\u5355\u7684post\u8bf7\u6c42"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u9700\u8981\u6211\u4eec\u6ce8\u610f\u7684\u662fexpress\u5185\u7f6e\u4e86\u83b7\u53d6get\u8bf7\u6c42\u4f53\u7684API(req.query)\uff0c\u4f46\u662f\u5e76\u6ca1\u6709\u5185\u7f6e\u83b7\u53d6post\u8bf7\u6c42\u4f53\u7684API\uff0c\u6240\u4ee5\u9700\u8981\u6211\u4eec\u624b\u52a8\u7684\u53bb\u914d\u7f6e\u4e2d\u95f4\u4ef6\u3002")),(0,s.kt)("h3",{id:"\u914d\u7f6ebody-parser\u4e2d\u95f4\u4ef6"},"\u914d\u7f6ebody-parser\u4e2d\u95f4\u4ef6"),(0,s.kt)("h4",{id:"1-\u5b89\u88c5"},"1. \u5b89\u88c5"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"npm install body-parser\n")),(0,s.kt)("h4",{id:"2-\u5bfc\u5165\u5e76\u914d\u7f6e"},"2. \u5bfc\u5165\u5e76\u914d\u7f6e"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const bodyParser = require('body-parser')\napp.use(bodyParser.urlencoded({ extended: false }))\napp.use(bodyParser.json())\n")),(0,s.kt)("h4",{id:"3-\u6b64\u65f6\u5373\u53ef\u6210\u529f\u83b7\u53d6reqbody\u5ba2\u6237\u7aefpost\u7684\u5185\u5bb9"},"3. \u6b64\u65f6\u5373\u53ef\u6210\u529f\u83b7\u53d6req.body(\u5ba2\u6237\u7aefpost\u7684\u5185\u5bb9)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"app.post('/post',(req,res) => {\n    console.log(req.body);\n})\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"[Object: null prototype] { name: 'faithpassi', message: 'dsddfgfgdf' }\n")),(0,s.kt)("h2",{id:"\u5c06\u8bfb\u53d6\u5230\u7684\u5b57\u7b26\u4e32\u8f6c\u4e3ajson"},"\u5c06\u8bfb\u53d6\u5230\u7684\u5b57\u7b26\u4e32\u8f6c\u4e3aJSON"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"fs.readFile('./db.json','utf8', (err, data) => {\n    if (!err) {\n        res.render('index.html', {\n            students: JSON.parse(data).students\n        });\n    }\n})\n")),(0,s.kt)("h2",{id:"\u5c06\u6240\u6709\u7684\u8def\u7531\u7ed3\u6784\u63d0\u53d6\u5230\u4e00\u4e2a\u6587\u4ef6\u4e2d\u5e76\u8fdb\u884c\u66b4\u9732"},"\u5c06\u6240\u6709\u7684\u8def\u7531\u7ed3\u6784\u63d0\u53d6\u5230\u4e00\u4e2a\u6587\u4ef6\u4e2d\uff0c\u5e76\u8fdb\u884c\u66b4\u9732"),(0,s.kt)("h3",{id:"\u65b9\u5f0f\u4e00\u81ea\u5df1\u5c01\u88c5\u51fd\u6570"},"\u65b9\u5f0f\u4e00\uff1a\u81ea\u5df1\u5c01\u88c5\u51fd\u6570"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const fs = require('fs');\nmodule.exports = function (app) {\n    app.get('/students', (req, res) => {\n        fs.readFile('./db.json', 'utf8', (err, data) => {\n            if (!err) {\n                res.render('index.html', {\n                    students: JSON.parse(data).students\n                });\n            }\n        })\n    })\n}\n")),(0,s.kt)("h3",{id:"\u65b9\u5f0f\u4e8c\u4f7f\u7528express\u81ea\u5e26\u7684\u8def\u7531\u5bb9\u5668"},"\u65b9\u5f0f\u4e8c\uff1a\u4f7f\u7528Express\u81ea\u5e26\u7684\u8def\u7531\u5bb9\u5668"),(0,s.kt)("h4",{id:"1\u5728\u8def\u7531\u6587\u4ef6\u4e2d\u521b\u5efa\u8def\u7531\u5bb9\u5668\u5e76\u8fdb\u884c\u66b4\u9732"},"1.\u5728\u8def\u7531\u6587\u4ef6\u4e2d\u521b\u5efa\u8def\u7531\u5bb9\u5668\uff0c\u5e76\u8fdb\u884c\u66b4\u9732"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const express = require('express');\n// \u521b\u5efa\u4e00\u4e2a\u8def\u7531\u5bb9\u5668\nconst router = express.Router();\n\nrouter.get('/students', (req, res) => {\n    fs.readFile('./db.json', 'utf8', (err, data) => {\n        if (!err) {\n            res.render('index.html', {\n                students: JSON.parse(data).students\n            });\n        }\n    })\n})\nmodule.exports = router;\n")),(0,s.kt)("h4",{id:"2-\u5c06\u8def\u7531\u5bb9\u5668\u6302\u8f7d\u5230app\u4e0a"},"2. \u5c06\u8def\u7531\u5bb9\u5668\u6302\u8f7d\u5230app\u4e0a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// \u628a\u8def\u7531\u5668\u6302\u8f7d\u5230 app\u4e0a\napp.use(router)\n")))}d.isMDXComponent=!0}}]);