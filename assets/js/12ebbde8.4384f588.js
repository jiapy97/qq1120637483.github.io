"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[26731],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,j=s["".concat(l,".").concat(m)]||s[m]||f[m]||o;return n?r.createElement(j,c(c({ref:t},p),{},{components:n})):r.createElement(j,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},82510:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return f}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),c=["components"],i={title:"Ajax-17\uff1a\u4f7f\u7528fetch\u51fd\u6570\u53d1\u9001ajax\u8bf7\u6c42",date:new Date("2021-03-25T00:00:00.000Z"),categories:"Ajax",tags:["Ajax"]},l=void 0,u={permalink:"/Ajax-17\uff1a\u4f7f\u7528fetch\u51fd\u6570\u53d1\u9001ajax\u8bf7\u6c42",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/Ajax-17\uff1a\u4f7f\u7528fetch\u51fd\u6570\u53d1\u9001ajax\u8bf7\u6c42.md",source:"@site/blog/Ajax-17\uff1a\u4f7f\u7528fetch\u51fd\u6570\u53d1\u9001ajax\u8bf7\u6c42.md",title:"Ajax-17\uff1a\u4f7f\u7528fetch\u51fd\u6570\u53d1\u9001ajax\u8bf7\u6c42",description:"\u57fa\u7840\u7528\u6cd5",date:"2021-03-25T00:00:00.000Z",formattedDate:"2021\u5e743\u670825\u65e5",tags:[{label:"Ajax",permalink:"/tags/ajax"}],readingTime:.14333333333333334,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Ajax-17\uff1a\u4f7f\u7528fetch\u51fd\u6570\u53d1\u9001ajax\u8bf7\u6c42",date:"2021-03-25T00:00:00.000Z",categories:"Ajax",tags:["Ajax"]},prevItem:{title:"Ajax-16\uff1aAxios\u53d1\u9001Ajax\u8bf7\u6c42",permalink:"/Ajax-16\uff1aAxios\u53d1\u9001Ajax\u8bf7\u6c42"},nextItem:{title:"Ajax-18\uff1a\u540c\u6e90\u7b56\u7565",permalink:"/Ajax-18\uff1a\u540c\u6e90\u7b56\u7565"}},p={authorsImageUrls:[]},f=[{value:"\u57fa\u7840\u7528\u6cd5",id:"\u57fa\u7840\u7528\u6cd5",level:2}],s={toc:f};function m(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u57fa\u7840\u7528\u6cd5"},"\u57fa\u7840\u7528\u6cd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"btn.onclick = function() {\n    fetch('http://localhost:8000/fetch',{\n        // \u8bf7\u6c42\u65b9\u6cd5\n        method: 'POST',\n        // \u8bf7\u6c42\u5934\n        headers: {\n            name: 'justin'\n        },\n        // \u8bf7\u6c42\u4f53\n        body: {\n            username: 'jusitn',\n            password: 123456\n        }\n    }).then(value => {console.log(value);})\n}\n")))}m.isMDXComponent=!0}}]);