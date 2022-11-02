"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[35743],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||l;return r?n.createElement(g,o(o({ref:t},s),{},{components:r})):n.createElement(g,o({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},97583:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={title:"React-40\uff1aantd\u6837\u5f0f\u7684\u6309\u9700\u5f15\u5165",date:new Date("2021-04-23T00:00:00.000Z"),categories:"React",tags:["React"]},o=void 0,i={permalink:"/blog/React-40\uff1aantd\u6837\u5f0f\u7684\u6309\u9700\u5f15\u5165",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/React-40\uff1aantd\u6837\u5f0f\u7684\u6309\u9700\u5f15\u5165.md",source:"@site/blog\\React-40\uff1aantd\u6837\u5f0f\u7684\u6309\u9700\u5f15\u5165.md",title:"React-40\uff1aantd\u6837\u5f0f\u7684\u6309\u9700\u5f15\u5165",description:"\u4e3a\u4ec0\u4e48\u8981\u6309\u9700\u5f15\u5165\uff1f",date:"2021-04-23T00:00:00.000Z",formattedDate:"2021\u5e744\u670823\u65e5",tags:[{label:"React",permalink:"/blog/tags/react"}],readingTime:.88,hasTruncateMarker:!1,authors:[],frontMatter:{title:"React-40\uff1aantd\u6837\u5f0f\u7684\u6309\u9700\u5f15\u5165",date:"2021-04-23T00:00:00.000Z",categories:"React",tags:["React"]},prevItem:{title:"\u5251\u6307Offer\u2014\u2014II.\u5e73\u8861\u4e8c\u53c9\u6811\uff08JS\u5b9e\u73b0\uff09",permalink:"/blog/\u5251\u6307Offer\u2014\u2014II.\u5e73\u8861\u4e8c\u53c9\u6811\uff08JS\u5b9e\u73b0\uff09"},nextItem:{title:"React-41\uff1aantd\u81ea\u5b9a\u4e49\u4e3b\u9898",permalink:"/blog/React-41\uff1aantd\u81ea\u5b9a\u4e49\u4e3b\u9898"}},c={authorsImageUrls:[]},p=[{value:"\u7b2c\u4e00\u6b65\uff1a\u5b89\u88c5\u5de5\u5177\u5305",id:"\u7b2c\u4e00\u6b65\u5b89\u88c5\u5de5\u5177\u5305",level:2},{value:"\u7b2c\u4e8c\u6b65\uff1a\u5c06\u9879\u76ee\u6587\u4ef6\u4e2d\u7684package.json\u4e2d\u7684\u6587\u4ef6\u8fdb\u884c\u4e0b\u9762\u7684\u4fee\u6539",id:"\u7b2c\u4e8c\u6b65\u5c06\u9879\u76ee\u6587\u4ef6\u4e2d\u7684packagejson\u4e2d\u7684\u6587\u4ef6\u8fdb\u884c\u4e0b\u9762\u7684\u4fee\u6539",level:2},{value:"\u7b2c\u4e09\u6b65\uff1a\u9879\u76ee\u6839\u76ee\u5f55\u521b\u5efa\u4e00\u4e2a config-overrides.js \u7528\u4e8e\u4fee\u6539\u9ed8\u8ba4\u914d\u7f6e",id:"\u7b2c\u4e09\u6b65\u9879\u76ee\u6839\u76ee\u5f55\u521b\u5efa\u4e00\u4e2a-config-overridesjs-\u7528\u4e8e\u4fee\u6539\u9ed8\u8ba4\u914d\u7f6e",level:2},{value:"\u7b2c\u56db\u6b65\uff1a\u5b89\u88c5babel-plugin-import",id:"\u7b2c\u56db\u6b65\u5b89\u88c5babel-plugin-import",level:2},{value:"\u5230\u8fd9\u5217\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5c06\u6700\u5f00\u59cb\u7684\u90a3\u4e2a\u8bed\u53e5\u5220\u6389\u4e86\u3002",id:"\u5230\u8fd9\u5217\u6211\u4eec\u5c31\u53ef\u4ee5\u5c06\u6700\u5f00\u59cb\u7684\u90a3\u4e2a\u8bed\u53e5\u5220\u6389\u4e86",level:2},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",level:2}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e3a\u4ec0\u4e48\u8981\u6309\u9700\u5f15\u5165\uff1f"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"\u50cf\u4e0b\u9762\u8fd9\u79cd\u5c06\u5168\u90e8\u6837\u5f0f\u90fd\u5f15\u5165\uff0c\u4f1a\u9020\u6210\u5185\u5b58\u6d88\u8017\u8fc7\u5927\uff0c\u56e0\u4e3a\u6211\u4eec\u5f15\u5165\u4e86\u5f88\u591a\u6211\u4eec\u5e76\u4e0d\u4f7f\u7528\u7684\u6837\u5f0f\n",(0,a.kt)("img",{parentName:"li",src:"https://img-blog.csdnimg.cn/img_convert/bbbab9180a82160751642daa28e9663a.png",alt:null})))),(0,a.kt)("h2",{id:"\u7b2c\u4e00\u6b65\u5b89\u88c5\u5de5\u5177\u5305"},"\u7b2c\u4e00\u6b65\uff1a\u5b89\u88c5\u5de5\u5177\u5305"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install react-app-rewired customize-cra\n")),(0,a.kt)("h2",{id:"\u7b2c\u4e8c\u6b65\u5c06\u9879\u76ee\u6587\u4ef6\u4e2d\u7684packagejson\u4e2d\u7684\u6587\u4ef6\u8fdb\u884c\u4e0b\u9762\u7684\u4fee\u6539"},"\u7b2c\u4e8c\u6b65\uff1a\u5c06\u9879\u76ee\u6587\u4ef6\u4e2d\u7684package.json\u4e2d\u7684\u6587\u4ef6\u8fdb\u884c\u4e0b\u9762\u7684\u4fee\u6539"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/784e6dbc996c528e874c3ad521a55a02.png",alt:null})),(0,a.kt)("h2",{id:"\u7b2c\u4e09\u6b65\u9879\u76ee\u6839\u76ee\u5f55\u521b\u5efa\u4e00\u4e2a-config-overridesjs-\u7528\u4e8e\u4fee\u6539\u9ed8\u8ba4\u914d\u7f6e"},"\u7b2c\u4e09\u6b65\uff1a\u9879\u76ee\u6839\u76ee\u5f55\u521b\u5efa\u4e00\u4e2a config-overrides.js \u7528\u4e8e\u4fee\u6539\u9ed8\u8ba4\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { override, fixBabelImports } = require('customize-cra');\nmodule.exports = override(\n    fixBabelImports('import', {\n        libraryName: 'antd',\n        libraryDirectory: 'es',\n        style: 'css',\n    }),\n);\n")),(0,a.kt)("h2",{id:"\u7b2c\u56db\u6b65\u5b89\u88c5babel-plugin-import"},"\u7b2c\u56db\u6b65\uff1a\u5b89\u88c5babel-plugin-import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install babel-plugin-import\n")),(0,a.kt)("h2",{id:"\u5230\u8fd9\u5217\u6211\u4eec\u5c31\u53ef\u4ee5\u5c06\u6700\u5f00\u59cb\u7684\u90a3\u4e2a\u8bed\u53e5\u5220\u6389\u4e86"},"\u5230\u8fd9\u5217\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5c06\u6700\u5f00\u59cb\u7684\u90a3\u4e2a\u8bed\u53e5\u5220\u6389\u4e86\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6837\u5f0f\u6b63\u5e38\n",(0,a.kt)("img",{parentName:"li",src:"https://img-blog.csdnimg.cn/img_convert/2eb3c94f810f22b1505e2563ec908138.png",alt:null}))),(0,a.kt)("h2",{id:"\u53c2\u8003\u6587\u732e"},"\u53c2\u8003\u6587\u732e"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://3x.ant.design/docs/react/use-with-create-react-app-cn"},"https://3x.ant.design/docs/react/use-with-create-react-app-cn")))}u.isMDXComponent=!0}}]);