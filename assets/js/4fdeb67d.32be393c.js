"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[70966],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(r),f=a,y=m["".concat(c,".").concat(f)]||m[f]||s[f]||o;return r?n.createElement(y,p(p({ref:t},u),{},{components:r})):n.createElement(y,p({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4562:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),p=["components"],i={title:"TypeScript\u7684\u7c7b\u578b\u63a8\u8bba\u4e0e\u8054\u5408\u7c7b\u578b--(TypeScript 03)",date:"2021-7-22",author:"Justin",top:!1,cover:!1,categories:"TypeScript",tags:["TypeScript"]},c=void 0,l={permalink:"/TypeScript\u7684\u7c7b\u578b\u63a8\u8bba\u4e0e\u8054\u5408\u7c7b\u578b--(TypeScript 03)",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/TypeScript\u7684\u7c7b\u578b\u63a8\u8bba\u4e0e\u8054\u5408\u7c7b\u578b--(TypeScript 03).md",source:"@site/blog/TypeScript\u7684\u7c7b\u578b\u63a8\u8bba\u4e0e\u8054\u5408\u7c7b\u578b--(TypeScript 03).md",title:"TypeScript\u7684\u7c7b\u578b\u63a8\u8bba\u4e0e\u8054\u5408\u7c7b\u578b--(TypeScript 03)",description:"\u4ec0\u4e48\u662fTS\u4e2d\u7684\u7c7b\u578b\u63a8\u65ad\uff1f",date:"2021-07-22T00:00:00.000Z",formattedDate:"2021\u5e747\u670822\u65e5",tags:[{label:"TypeScript",permalink:"/tags/type-script"}],readingTime:.8166666666666667,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"TypeScript\u7684\u7c7b\u578b\u63a8\u8bba\u4e0e\u8054\u5408\u7c7b\u578b--(TypeScript 03)",date:"2021-7-22",author:"Justin",top:!1,cover:!1,categories:"TypeScript",tags:["TypeScript"]},prevItem:{title:"\u7535\u8bdd\u53f7\u7801\u9a8c\u8bc1\u5668\uff08FreeCodeCamp\uff09",permalink:"/\u7535\u8bdd\u53f7\u7801\u9a8c\u8bc1\u5668\uff08FreeCodeCamp\uff09"},nextItem:{title:"TypeScript\u7684\u7c7b\u578b\u6ce8\u89e3--(TypeScript 02)",permalink:"/TypeScript\u7684\u7c7b\u578b\u6ce8\u89e3--(TypeScript 02)"}},u={authorsImageUrls:[void 0]},s=[{value:"\u4ec0\u4e48\u662fTS\u4e2d\u7684\u7c7b\u578b\u63a8\u65ad\uff1f",id:"\u4ec0\u4e48\u662fts\u4e2d\u7684\u7c7b\u578b\u63a8\u65ad",level:2},{value:"\u4ec0\u4e48\u65f6\u5019\u9700\u8981\u8fdb\u884c\u7c7b\u578b\u6ce8\u89e3\u4ec0\u4e48\u65f6\u5019\u4e0d\u9700\u8981\u5462\uff1f",id:"\u4ec0\u4e48\u65f6\u5019\u9700\u8981\u8fdb\u884c\u7c7b\u578b\u6ce8\u89e3\u4ec0\u4e48\u65f6\u5019\u4e0d\u9700\u8981\u5462",level:2},{value:"\u4ec0\u4e48\u662f\u8054\u5408\u7c7b\u578b\uff1f",id:"\u4ec0\u4e48\u662f\u8054\u5408\u7c7b\u578b",level:2}],m={toc:s};function f(e){var t=e.components,r=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4ec0\u4e48\u662fts\u4e2d\u7684\u7c7b\u578b\u63a8\u65ad"},"\u4ec0\u4e48\u662fTS\u4e2d\u7684\u7c7b\u578b\u63a8\u65ad\uff1f"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4ee5\u4e0b\u9762\u7684\u4f8b\u5b50\u4e3a\u4f8b\uff0c\u6709\u65f6\u5019\u6211\u4eec\u5e76\u6ca1\u6709\u8fdb\u884c\u7c7b\u578b\u6ce8\u89e3\uff0cTS\u7ecf\u8fc7\u63a8\u65ad\u540e\u7ed9\u6211\u4eec\u6dfb\u52a0\u7684\u7c7b\u578b\u6ce8\u89e3\u3002\n",(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/b836150831c19865195d5dfbb48506de.png",alt:"image.png"}))),(0,o.kt)("h2",{id:"\u4ec0\u4e48\u65f6\u5019\u9700\u8981\u8fdb\u884c\u7c7b\u578b\u6ce8\u89e3\u4ec0\u4e48\u65f6\u5019\u4e0d\u9700\u8981\u5462"},"\u4ec0\u4e48\u65f6\u5019\u9700\u8981\u8fdb\u884c\u7c7b\u578b\u6ce8\u89e3\u4ec0\u4e48\u65f6\u5019\u4e0d\u9700\u8981\u5462\uff1f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6bd4\u5982\u4e0b\u9762\u7684\u4ee3\u7801\uff0cTS\u80fd\u591f\u63a8\u65ad\u7684\uff0c\u6211\u4eec\u53ef\u4ee5\u4e0d\u8fdb\u884c\u6ce8\u89e3")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"let a = 3;\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6bd4\u5982\u4e0b\u9762\u7684\u4ee3\u7801\uff0cTS\u4e0d\u80fd\u591f\u5bf9\u53c2\u6570\u8fdb\u884c\u63a8\u65ad\u7684\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u9700\u8981\u8fdb\u884c\u6ce8\u89e3")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function test(a,b) {\n    return a + b;\n}\n")),(0,o.kt)("h2",{id:"\u4ec0\u4e48\u662f\u8054\u5408\u7c7b\u578b"},"\u4ec0\u4e48\u662f\u8054\u5408\u7c7b\u578b\uff1f"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u8054\u5408\u7c7b\u578b\u6307\u7684\u662f\u4e00\u4e2a\u53d8\u91cf\u53ef\u80fd\u5177\u6709\u591a\u79cd\u7c7b\u578b\uff0c\u4e0b\u9762\u6211\u4eec\u770b\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\u5c31\u660e\u767d\u4e86\u3002"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"let a: string | number;\n"))),(0,o.kt)("p",null,"a = 2;\na = '123';"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"* \u8054\u5408\u7c7b\u578b\u8c03\u7528\u5171\u6709\u5c5e\u6027\u53ef\u4ee5\uff0c\u4f46\u662f\u5982\u679c\u662f\u975e\u5171\u6709\u5c5e\u6027\u5219\u4e0d\u884c\u3002\n```ts\nfunction test(a: number | string) {\n    return a.split('');   //Error\n}\n\nfunction test(a: number | string) {\n    return a.toString()    //Right\n}\n\ntest(1)\n")))}f.isMDXComponent=!0}}]);