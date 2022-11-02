"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[39773],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},i=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,y=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return r?n.createElement(y,c(c({ref:t},i),{},{components:r})):n.createElement(y,c({ref:t},i))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},36417:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"Ajax-15\uff1aJquery\u4e2d\u7684Ajax",date:new Date("2021-03-24T00:00:00.000Z"),categories:"Ajax",tags:["Ajax"]},c=void 0,l={permalink:"/blog/Ajax-15\uff1aJquery\u4e2d\u7684Ajax",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/Ajax-15\uff1aJquery\u4e2d\u7684Ajax.md",source:"@site/blog/Ajax-15\uff1aJquery\u4e2d\u7684Ajax.md",title:"Ajax-15\uff1aJquery\u4e2d\u7684Ajax",description:"\u6ce8\u610f\u4e8b\u9879\uff1a\u5728\u4f7f\u7528Jquery\u4e4b\u524d\u4e00\u5b9a\u8981\u5148\u5f15\u5165\u76f8\u5173\u5e93\u3002",date:"2021-03-24T00:00:00.000Z",formattedDate:"2021\u5e743\u670824\u65e5",tags:[{label:"Ajax",permalink:"/blog/tags/ajax"}],readingTime:.845,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Ajax-15\uff1aJquery\u4e2d\u7684Ajax",date:"2021-03-24T00:00:00.000Z",categories:"Ajax",tags:["Ajax"]},prevItem:{title:"Ajax-14\uff1a\u8bf7\u6c42\u91cd\u590d\u53d1\u9001\u95ee\u9898",permalink:"/blog/Ajax-14\uff1a\u8bf7\u6c42\u91cd\u590d\u53d1\u9001\u95ee\u9898"},nextItem:{title:"LeetCode\u2014\u2014\u5de6\u65cb\u8f6c\u5b57\u7b26\u4e32",permalink:"/blog/LeetCode\u2014\u2014\u5de6\u65cb\u8f6c\u5b57\u7b26\u4e32"}},p={authorsImageUrls:[]},u=[],i={toc:u};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\u4e8b\u9879\uff1a\u5728\u4f7f\u7528Jquery\u4e4b\u524d\u4e00\u5b9a\u8981\u5148\u5f15\u5165\u76f8\u5173\u5e93\u3002"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"><\/script>\n')),(0,a.kt)("h2",{parentName:"blockquote",id:"\u4f7f\u7528jquery\u53d1\u9001get\u8bf7\u6c42"},"\u4f7f\u7528Jquery\u53d1\u9001GET\u8bf7\u6c42"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"$('button').eq(0).click(function() {\n  $.get('http://localhost:8000/jquery-server',{a:20,b:30},function(data) {\n      console.log(data);\n  },'json')\n});\n")),(0,a.kt)("h2",{parentName:"blockquote",id:"\u4f7f\u7528jquery\u53d1\u9001post\u8bf7\u6c42"},"\u4f7f\u7528Jquery\u53d1\u9001POST\u8bf7\u6c42"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"$('button').eq(1).click(function() {\n    $.post('http://localhost:8000/jquery-server',{a:20,b:30},function(data) {\n        console.log(data);\n    })\n});\n")),(0,a.kt)("h2",{parentName:"blockquote",id:"\u4f7f\u7528jquery\u8fdb\u884c\u901a\u7528\u578b\u65b9\u6cd5\u8bf7\u6c42"},"\u4f7f\u7528Jquery\u8fdb\u884c\u901a\u7528\u578b\u65b9\u6cd5\u8bf7\u6c42"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u901a\u7528\u578b\u65b9\u6cd5\n$('button').eq(2).click(function () {\n    $.ajax({\n        url: 'http://localhost:8000/jquery-server',\n        data: { a: 20, b: 100 },\n        dataType: 'json',\n        type: 'GET',\n        success: function (data) {\n            console.log(data);\n        },\n        // \u8d85\u65f6\u65f6\u95f4\n        timeout: 4000,\n        error: function () {\n            console.log(\"\u7f51\u7edc\u8d85\u65f6\");\n        },\n"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    headers: {\n        a: 666,\n        b: 777\n    }\n})\n")),(0,a.kt)("p",null,"})"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"* \u4e0a\u9762\u7684\u5f88\u591a\u5c5e\u6027\u90fd\u662f\u53ef\u4ee5\u8fdb\u884c\u81ea\u5b9a\u4e49\u7684\u3002\n* \u5728\u8bbe\u7f6eheaders\u7684\u65f6\u5019\uff0c\u670d\u52a1\u7aef\u5fc5\u987b\u6709\u4e0b\u9762\u8fd9\u6bb5\u4ee3\u7801\n")),(0,a.kt)("p",null,"response.setHeader('Access-Control-Allow-Headers', '*');"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"")))}s.isMDXComponent=!0}}]);