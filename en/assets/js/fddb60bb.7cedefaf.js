"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[52428],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=u(n),m=a,g=f["".concat(l,".").concat(m)]||f[m]||s[m]||c;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<c;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},93555:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var r=n(87462),a=n(63366),c=(n(67294),n(3905)),o=["components"],i={title:"React-34\uff1a\u5411\u8def\u7531\u7ec4\u4ef6\u4f20\u9012state\u53c2\u6570",date:new Date("2021-04-21T00:00:00.000Z"),categories:"React",tags:["React"]},l=void 0,u={permalink:"/en/React-34\uff1a\u5411\u8def\u7531\u7ec4\u4ef6\u4f20\u9012state\u53c2\u6570",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/React-34\uff1a\u5411\u8def\u7531\u7ec4\u4ef6\u4f20\u9012state\u53c2\u6570.md",source:"@site/blog/React-34\uff1a\u5411\u8def\u7531\u7ec4\u4ef6\u4f20\u9012state\u53c2\u6570.md",title:"React-34\uff1a\u5411\u8def\u7531\u7ec4\u4ef6\u4f20\u9012state\u53c2\u6570",description:"\u901a\u8fc7state\u53c2\u6570\u4f20\u9012\u7684\u7279\u70b9",date:"2021-04-21T00:00:00.000Z",formattedDate:"April 21, 2021",tags:[{label:"React",permalink:"/en/tags/react"}],readingTime:.14333333333333334,hasTruncateMarker:!1,authors:[],frontMatter:{title:"React-34\uff1a\u5411\u8def\u7531\u7ec4\u4ef6\u4f20\u9012state\u53c2\u6570",date:"2021-04-21T00:00:00.000Z",categories:"React",tags:["React"]},prevItem:{title:"React-33\uff1a\u5411\u8def\u7531\u7ec4\u4ef6\u4f20\u9012search\u53c2\u6570",permalink:"/en/React-33\uff1a\u5411\u8def\u7531\u7ec4\u4ef6\u4f20\u9012search\u53c2\u6570"},nextItem:{title:"React-35\uff1a\u8def\u7531\u7684push\u4e0ereplace",permalink:"/en/React-35\uff1a\u8def\u7531\u7684push\u4e0ereplace"}},p={authorsImageUrls:[]},s=[{value:"\u901a\u8fc7state\u53c2\u6570\u4f20\u9012\u7684\u7279\u70b9",id:"\u901a\u8fc7state\u53c2\u6570\u4f20\u9012\u7684\u7279\u70b9",level:2},{value:"Link\u5f62\u5f0f",id:"link\u5f62\u5f0f",level:2},{value:"\u8def\u7531\u5f62\u5f0f",id:"\u8def\u7531\u5f62\u5f0f",level:2},{value:"\u63a5\u6536\u5f62\u5f0f",id:"\u63a5\u6536\u5f62\u5f0f",level:2}],f={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"\u901a\u8fc7state\u53c2\u6570\u4f20\u9012\u7684\u7279\u70b9"},"\u901a\u8fc7state\u53c2\u6570\u4f20\u9012\u7684\u7279\u70b9"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u901a\u8fc7state\u53c2\u6570\u4f20\u9012\u4e0d\u4f1a\u663e\u793a\u5728\u5730\u5740\u680f\u4e2d\u3002")),(0,c.kt)("h2",{id:"link\u5f62\u5f0f"},"Link\u5f62\u5f0f"),(0,c.kt)("p",null,(0,c.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/27f12e682871f90c358bcb132a7e7aac.png",alt:null})),(0,c.kt)("h2",{id:"\u8def\u7531\u5f62\u5f0f"},"\u8def\u7531\u5f62\u5f0f"),(0,c.kt)("p",null,(0,c.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/3d76c46b685642b49b9657ed711cd469.png",alt:null})),(0,c.kt)("h2",{id:"\u63a5\u6536\u5f62\u5f0f"},"\u63a5\u6536\u5f62\u5f0f"),(0,c.kt)("p",null,(0,c.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/7ac5c59af976b237bfb0206f304e0730.png",alt:null})))}m.isMDXComponent=!0}}]);