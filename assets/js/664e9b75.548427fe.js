"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[90887],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=p(t),m=a,h=s["".concat(i,".").concat(m)]||s[m]||u[m]||o;return t?r.createElement(h,l(l({ref:n},d),{},{components:t})):r.createElement(h,l({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=s;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},78369:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={title:"ES6\u2014\u201419\uff1a\u67e5\u8be2\u5546\u54c1\u6848\u4f8b",date:new Date("2021-03-13T00:00:00.000Z"),categories:"ES6",tags:["ES6"]},l=void 0,c={permalink:"/blog/ES6\u2014\u201419\uff1a\u67e5\u8be2\u5546\u54c1\u6848\u4f8b",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/ES6\u2014\u201419\uff1a\u67e5\u8be2\u5546\u54c1\u6848\u4f8b.md",source:"@site/blog/ES6\u2014\u201419\uff1a\u67e5\u8be2\u5546\u54c1\u6848\u4f8b.md",title:"ES6\u2014\u201419\uff1a\u67e5\u8be2\u5546\u54c1\u6848\u4f8b",description:"1\uff1a\u4f7f\u7528forEach\u5faa\u73af\u6e32\u67d3\u6570\u636e",date:"2021-03-13T00:00:00.000Z",formattedDate:"2021\u5e743\u670813\u65e5",tags:[{label:"ES6",permalink:"/blog/tags/es-6"}],readingTime:2.7,hasTruncateMarker:!1,authors:[],frontMatter:{title:"ES6\u2014\u201419\uff1a\u67e5\u8be2\u5546\u54c1\u6848\u4f8b",date:"2021-03-13T00:00:00.000Z",categories:"ES6",tags:["ES6"]},prevItem:{title:"ES6\u2014\u201418\uff1a\u67e5\u627e\u6570\u7ec4\u4e2d\u662f\u5426\u6709\u6ee1\u8db3\u6761\u4ef6\u7684\u6570\u7ec4\uff08some\uff09",permalink:"/blog/ES6\u2014\u201418\uff1a\u67e5\u627e\u6570\u7ec4\u4e2d\u662f\u5426\u6709\u6ee1\u8db3\u6761\u4ef6\u7684\u6570\u7ec4\uff08some\uff09"},nextItem:{title:"ES6\u2014\u201420\uff1asome\u548cforEach\u7684\u533a\u522b",permalink:"/blog/ES6\u2014\u201420\uff1asome\u548cforEach\u7684\u533a\u522b"}},i={authorsImageUrls:[]},p=[{value:"1\uff1a\u4f7f\u7528forEach\u5faa\u73af\u6e32\u67d3\u6570\u636e",id:"1\u4f7f\u7528foreach\u5faa\u73af\u6e32\u67d3\u6570\u636e",level:2},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"2\uff1a\u6839\u636e\u4ef7\u683c\u7b5b\u9009\u5546\u54c1",id:"2\u6839\u636e\u4ef7\u683c\u7b5b\u9009\u5546\u54c1",level:2},{value:"\u5b9e\u73b0\u6548\u679c",id:"\u5b9e\u73b0\u6548\u679c",level:2}],d={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\u4f7f\u7528foreach\u5faa\u73af\u6e32\u67d3\u6570\u636e"},"1\uff1a\u4f7f\u7528forEach\u5faa\u73af\u6e32\u67d3\u6570\u636e"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/f2ba37b36900cf2ddd46622724dd781e.png",alt:null})),(0,a.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n    <style>\n        .search {\n            width: 600px;\n            margin: 20px auto;\n        }\n        input {\n            width: 50px;\n        }\n        table {\n            width: 400px;\n            border-collapse: collapse;\n            margin: 0 auto;\n        }\n        td,th {\n            border: 1px solid;\n            border-collapse: collapse;\n            text-align: center;\n        }\n    </style>\n</head>\n\n<body>\n    <div class="search">\n        \u6309\u7167\u4ef7\u683c\u67e5\u8be2\uff1a<input type="text"> - <input type="text">\n        <button class="search-price">\u641c\u7d22</button> \u6309\u7167\u5546\u54c1\u540d\u79f0\u67e5\u8be2\uff1a<input type="text" class="product"><button\n            class="search-pro">\u67e5\u8be2</button>\n    </div>\n    <table>\n        <thead>\n            <tr>\n                <th>id</th>\n                <th>\u4ea7\u54c1\u540d\u79f0</th>\n                <th>\u4ef7\u683c</th>\n            </tr>\n        </thead>\n        <tbody>\n\n        </tbody>\n    </table>\n\n    <script>\n        var data = [{\n            id: 1,\n            pname: "\u5c0f\u7c73",\n            price: 3999\n        }, {\n            id: 2,\n            pname: "oppo",\n            price: 999\n        }, {\n            id: 3,\n            pname: "\u8363\u8000",\n            price: 1299\n        }, {\n            id: 4,\n            pname: "\u534e\u4e3a",\n            price: 1999\n        }, ];\n        // \u83b7\u53d6\u76f8\u5e94\u7684\u5143\u7d20\n        var tbody = document.querySelector("tbody");\n        // \u628a\u6570\u636e\u6e32\u67d3\u5230\u9875\u9762\u4e2d\n        data.forEach(function(value) {\n            console.log(value.pname);\n            // \u5f00\u59cb\u6e32\u67d3\n            var tr = document.createElement(\'tr\');\n            tr.innerHTML = \'<td>\'+ value.id +\'</td><td>\'+ value.pname +\'</td><td>\'+ value.price +\'</td>\';\n            tbody.appendChild(tr);\n        })\n    <\/script>\n</body>\n\n</html>\n')),(0,a.kt)("h2",{id:"2\u6839\u636e\u4ef7\u683c\u7b5b\u9009\u5546\u54c1"},"2\uff1a\u6839\u636e\u4ef7\u683c\u7b5b\u9009\u5546\u54c1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n    <style>\n        .search {\n            width: 600px;\n            margin: 20px auto;\n        }\n\n        input {\n            width: 50px;\n        }\n\n        table {\n            width: 400px;\n            border-collapse: collapse;\n            margin: 0 auto;\n        }\n\n        td,\n        th {\n            border: 1px solid;\n            border-collapse: collapse;\n            text-align: center;\n        }\n    </style>\n</head>\n\n<body>\n<div class="search">\n\u6309\u7167\u4ef7\u683c\u67e5\u8be2\uff1a<input type="text" class="start"> - <input type="text" class="end">\n<button class="search-price">\u641c\u7d22</button> \u6309\u7167\u5546\u54c1\u540d\u79f0\u67e5\u8be2\uff1a<input type="text" class="product"><button\n    class="search-pro">\u67e5\u8be2</button>\n</div>\n<table>\n<thead>\n    <tr>\n        <th>id</th>\n        <th>\u4ea7\u54c1\u540d\u79f0</th>\n        <th>\u4ef7\u683c</th>\n    </tr>\n</thead>\n<tbody>\n\n</tbody>\n</table>\n\n<script>\nvar data = [{\n    id: 1,\n    pname: "\u5c0f\u7c73",\n    price: 3999\n}, {\n    id: 2,\n    pname: "oppo",\n    price: 999\n}, {\n    id: 3,\n    pname: "\u8363\u8000",\n    price: 1299\n}, {\n    id: 4,\n    pname: "\u534e\u4e3a",\n    price: 1999\n}];\n// \u83b7\u53d6\u76f8\u5e94\u7684\u5143\u7d20\nvar tbody = document.querySelector("tbody");\n// \u6839\u636e\u4ef7\u683c\u7b5b\u9009\u5546\u54c1\n// \u83b7\u53d6\u4ef7\u683c\u533a\u95f4\nvar newarr;\nvar search_price = document.querySelector(\'.search-price\');\nsearch_price.onclick = function () {\n    let input_start = document.querySelector(".start");\n    let input_end = document.querySelector(".end");\n    let tbody = document.querySelector(\'tbody\');\n    tbody.innerHTML = \'\';\n    newarr = data.filter(function (values) {\n        return values.price >= input_start.value && values.price <= input_end.value;\n    })\n    console.log(newarr);\n    if (newarr.length == 0) {\n    } else {\n        newarr.forEach(function (value) {\n            var tr = document.createElement(\'tr\');\n            tr.innerHTML = \'<td>\' + value.id + \'</td><td>\' + value.pname + \'</td><td>\' + value.price;\n            tbody.appendChild(tr);\n        })\n    }\n\n}\n\n// \u6839\u636e\u5546\u54c1\u540d\u79f0\u67e5\u8be2\nvar search_pro = document.querySelector(\'.search-pro\');\nsearch_pro.onclick = function() {\n    let tbody = document.querySelector(\'tbody\');\n    tbody.innerHTML = \'\';\n    var product = document.querySelector(\'.product\');\n    data.forEach(function(values) {\n        if(product.value == values.pname) {\n            let tr = document.createElement(\'tr\');\n            tr.innerHTML = \'<td>\' + values.id + \'</td><td>\' + values.pname + \'</td><td>\' + values.price;\n            tbody.appendChild(tr);    \n        }\n    })\n}\n    <\/script>\n</body>\n</html>\n')),(0,a.kt)("h2",{id:"\u5b9e\u73b0\u6548\u679c"},"\u5b9e\u73b0\u6548\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/36e428e1405b068c7e7b3297b1555e8a.png",alt:null}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/f78c93e602731b52358d66f959516e0d.png",alt:null})))}u.isMDXComponent=!0}}]);