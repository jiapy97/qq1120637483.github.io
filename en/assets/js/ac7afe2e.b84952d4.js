"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[61720],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return s}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=l(r),s=a,m=f["".concat(i,".").concat(s)]||f[s]||d[s]||o;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,c[1]=u;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},28205:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),c=["components"],u={title:"React-42\uff1aredux\u7b80\u4ecb",date:new Date("2021-04-23T00:00:00.000Z"),categories:"React",tags:["React"]},i=void 0,l={permalink:"/en/React-42\uff1aredux\u7b80\u4ecb",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/React-42\uff1aredux\u7b80\u4ecb.md",source:"@site/blog/React-42\uff1aredux\u7b80\u4ecb.md",title:"React-42\uff1aredux\u7b80\u4ecb",description:"1. redux\u662f\u4ec0\u4e48\uff1f",date:"2021-04-23T00:00:00.000Z",formattedDate:"April 23, 2021",tags:[{label:"React",permalink:"/en/tags/react"}],readingTime:.24333333333333335,hasTruncateMarker:!1,authors:[],frontMatter:{title:"React-42\uff1aredux\u7b80\u4ecb",date:"2021-04-23T00:00:00.000Z",categories:"React",tags:["React"]},prevItem:{title:"React-41\uff1aantd\u81ea\u5b9a\u4e49\u4e3b\u9898",permalink:"/en/React-41\uff1aantd\u81ea\u5b9a\u4e49\u4e3b\u9898"},nextItem:{title:"React\u811a\u624b\u67b6\u62a5\u9519 Cannot create a project named \u201c\u201c because of npm naming restrictions",permalink:"/en/React\u811a\u624b\u67b6\u62a5\u9519 Cannot create a project named \u201c\u201c because of npm naming restrictions"}},p={authorsImageUrls:[]},d=[{value:"1. redux\u662f\u4ec0\u4e48\uff1f",id:"1-redux\u662f\u4ec0\u4e48",level:2},{value:"2. \u4ec0\u4e48\u60c5\u51b5\u4e0b\u4f7f\u7528redux",id:"2-\u4ec0\u4e48\u60c5\u51b5\u4e0b\u4f7f\u7528redux",level:2},{value:"3. redux\u539f\u7406\u56fe",id:"3-redux\u539f\u7406\u56fe",level:2}],f={toc:d};function s(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-redux\u662f\u4ec0\u4e48"},"1. redux\u662f\u4ec0\u4e48\uff1f"),(0,o.kt)("p",null,"\u7b54\uff1a\u4e00\u4e2a\u4e13\u95e8\u7528\u6765\u505a\u7ba1\u7406\u72b6\u6001\u7684JS\u5e93\u3002"),(0,o.kt)("h2",{id:"2-\u4ec0\u4e48\u60c5\u51b5\u4e0b\u4f7f\u7528redux"},"2. \u4ec0\u4e48\u60c5\u51b5\u4e0b\u4f7f\u7528redux"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u67d0\u4e2a\u7ec4\u4ef6\u7684\u72b6\u6001\uff0c\u9700\u8981\u8ba9\u5176\u4ed6\u7ec4\u4ef6\u53ef\u4ee5\u968f\u65f6\u62ff\u5230\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u7ec4\u4ef6\u9700\u8981\u6539\u53d8\u53e6\u4e00\u4e2a\u7ec4\u4ef6\u7684\u72b6\u6001\u3002")),(0,o.kt)("h2",{id:"3-redux\u539f\u7406\u56fe"},"3. redux\u539f\u7406\u56fe"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/89492a04f432c1e27d5cfb548aa2a74c.png",alt:null})))}s.isMDXComponent=!0}}]);