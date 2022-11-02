"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[38783],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=i(r),f=a,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||p;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<p;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},23719:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>c,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const p={title:"React-20\uff1a\u5bf9props\u8fdb\u884c\u9650\u5236",date:new Date("2021-04-14T00:00:00.000Z"),categories:"React",tags:["React"]},o=void 0,c={permalink:"/blog/React-20\uff1a\u5bf9props\u8fdb\u884c\u9650\u5236",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/React-20\uff1a\u5bf9props\u8fdb\u884c\u9650\u5236.md",source:"@site/blog/React-20\uff1a\u5bf9props\u8fdb\u884c\u9650\u5236.md",title:"React-20\uff1a\u5bf9props\u8fdb\u884c\u9650\u5236",description:"1\uff1a\u4f7f\u7528npm\u5b89\u88c5prop-types\u5305",date:"2021-04-14T00:00:00.000Z",formattedDate:"2021\u5e744\u670814\u65e5",tags:[{label:"React",permalink:"/blog/tags/react"}],readingTime:.24,hasTruncateMarker:!1,authors:[],frontMatter:{title:"React-20\uff1a\u5bf9props\u8fdb\u884c\u9650\u5236",date:"2021-04-14T00:00:00.000Z",categories:"React",tags:["React"]},prevItem:{title:"JS\u4e2d\u7684map\u65b9\u6cd5",permalink:"/blog/JS\u4e2d\u7684map\u65b9\u6cd5"},nextItem:{title:"React-21\uff1aReact\u4e2d\u5173\u4e8e\u4fee\u6539state\u65b9\u6cd5\u7684\u6838\u5fc3\u4e00\u53e5\u8bdd",permalink:"/blog/React-21\uff1aReact\u4e2d\u5173\u4e8e\u4fee\u6539state\u65b9\u6cd5\u7684\u6838\u5fc3\u4e00\u53e5\u8bdd"}},l={authorsImageUrls:[]},i=[{value:"1\uff1a\u4f7f\u7528npm\u5b89\u88c5prop-types\u5305",id:"1\u4f7f\u7528npm\u5b89\u88c5prop-types\u5305",level:2},{value:"2\uff1a\u5bfc\u5165\u5de5\u5177\u5305",id:"2\u5bfc\u5165\u5de5\u5177\u5305",level:2},{value:"3\uff1a\u5bf9\u4f20\u5165\u7684props\u8fdb\u884c\u9650\u5236\uff08\u8fd9\u4e2a\u662f\u5199\u5728\u88ab\u4f20\u5165\u7684\u4f4d\u7f6e\uff09",id:"3\u5bf9\u4f20\u5165\u7684props\u8fdb\u884c\u9650\u5236\u8fd9\u4e2a\u662f\u5199\u5728\u88ab\u4f20\u5165\u7684\u4f4d\u7f6e",level:2}],s={toc:i};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\u4f7f\u7528npm\u5b89\u88c5prop-types\u5305"},"1\uff1a\u4f7f\u7528npm\u5b89\u88c5prop-types\u5305"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"npm install prop-types")),(0,a.kt)("h2",{id:"2\u5bfc\u5165\u5de5\u5177\u5305"},"2\uff1a\u5bfc\u5165\u5de5\u5177\u5305"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import PropTypes from 'prop-types';\n")),(0,a.kt)("h2",{id:"3\u5bf9\u4f20\u5165\u7684props\u8fdb\u884c\u9650\u5236\u8fd9\u4e2a\u662f\u5199\u5728\u88ab\u4f20\u5165\u7684\u4f4d\u7f6e"},"3\uff1a\u5bf9\u4f20\u5165\u7684props\u8fdb\u884c\u9650\u5236\uff08\u8fd9\u4e2a\u662f\u5199\u5728\u88ab\u4f20\u5165\u7684\u4f4d\u7f6e\uff09"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/577095bb2b50f647d3e5fd35b0d5ffd1.png",alt:null})))}m.isMDXComponent=!0}}]);