"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[75472],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},i=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return n?o.createElement(f,p(p({ref:t},i),{},{components:n})):o.createElement(f,p({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var u=2;u<a;u++)p[u]=n[u];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84029:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const a={title:"React\u4e4bshouldComponentUpdate\u7684\u7528\u6cd5",date:"2021-7-19",author:"Justin",top:!1,cover:!1,categories:"React",tags:["React"]},p=void 0,l={permalink:"/blog/React\u4e4bshouldComponentUpdate\u7684\u7528\u6cd5",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/React\u4e4bshouldComponentUpdate\u7684\u7528\u6cd5.md",source:"@site/blog/React\u4e4bshouldComponentUpdate\u7684\u7528\u6cd5.md",title:"React\u4e4bshouldComponentUpdate\u7684\u7528\u6cd5",description:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528shouldComponentUpdate?",date:"2021-07-19T00:00:00.000Z",formattedDate:"2021\u5e747\u670819\u65e5",tags:[{label:"React",permalink:"/blog/tags/react"}],readingTime:.825,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"React\u4e4bshouldComponentUpdate\u7684\u7528\u6cd5",date:"2021-7-19",author:"Justin",top:!1,cover:!1,categories:"React",tags:["React"]},prevItem:{title:"React\u4e4bPureComponent\u7684\u7528\u6cd5",permalink:"/blog/React\u4e4bPureComponent\u7684\u7528\u6cd5"},nextItem:{title:"\u8fd9\u4e00\u6b21\u5f7b\u5e95\u641e\u61c2JS\u4e2d\u7684\u9632\u6296\u548c\u8282\u6d41",permalink:"/blog/\u8fd9\u4e00\u6b21\u5f7b\u5e95\u641e\u61c2JS\u4e2d\u7684\u9632\u6296\u548c\u8282\u6d41"}},c={authorsImageUrls:[void 0]},u=[{value:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528shouldComponentUpdate?",id:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528shouldcomponentupdate",level:2},{value:"shouldComponentUpdate\u7684\u7528\u6cd5",id:"shouldcomponentupdate\u7684\u7528\u6cd5",level:2},{value:"codeSandBox\u5728\u7ebf\u6f14\u793a",id:"codesandbox\u5728\u7ebf\u6f14\u793a",level:3}],i={toc:u};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528shouldcomponentupdate"},"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528shouldComponentUpdate?"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u53ea\u8981\u662f\u7ec4\u4ef6\u7ee7\u627f\u81eaReact.Component\u5c31\u4f1a\u5b58\u5728\u5f53\u7236\u7ec4\u4ef6\u91cd\u65b0render\u7684\u65f6\u5019\uff0c\u5b50\u7ec4\u4ef6\u4e5f\u4f1a\u91cd\u65b0\u6267\u884crender,\u5373\u4f7f\u8fd9\u4e2a\u5b50\u7ec4\u4ef6\u6ca1\u6709\u4efb\u4f55\u53d8\u5316\u3002\u5b50\u7ec4\u4ef6\u53ea\u8981\u8c03\u7528setState\u5c31\u4f1a\u91cd\u65b0\u6267\u884crender,\u53ca\u65f6setState\u7684\u53c2\u6570\u662f\u4e00\u4e2a\u7a7a\u5bf9\u8c61\u3002")),(0,r.kt)("h2",{id:"shouldcomponentupdate\u7684\u7528\u6cd5"},"shouldComponentUpdate\u7684\u7528\u6cd5"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5728\u5b50\u7ec4\u4ef6\u4e2d\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"shouldComponentUpdate(nextProps,nextState) {\n    if (nextProps.m1 === this.props.m1 && nextState.m2 === this.state.m2) {\n        return false;\n    } else {\n        return true;\n    }\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6839\u636e\u4e0b\u9762\u7684React\u751f\u547d\u5468\u671f\u6d41\u7a0b\u56fe\u53ef\u77e5\uff0c\u5f53shouldComponentUpdate\u8fd4\u56de\u4e3atrue\u7684\u65f6\u5019\uff0c\u5f53\u524d\u7ec4\u4ef6\u8fdb\u884crender\uff0c\u5982\u679c\u8fd4\u56de\u7684\u662ffalse\u5219\u4e0d\u8fdb\u884crender.\n",(0,r.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/66a7f53b2d64bfc5357631bcb108a359.png",alt:"image.png"}))),(0,r.kt)("h3",{id:"codesandbox\u5728\u7ebf\u6f14\u793a"},(0,r.kt)("a",{parentName:"h3",href:"https://codesandbox.io/s/reactzhongshouldcomponentupdatedeyongfa-9v08q?file=/src/index.js"},"codeSandBox\u5728\u7ebf\u6f14\u793a")))}s.isMDXComponent=!0}}]);