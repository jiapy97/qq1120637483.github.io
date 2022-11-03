"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[68270],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=u(r),m=a,g=f["".concat(l,".").concat(m)]||f[m]||s[m]||o;return r?n.createElement(g,c(c({ref:t},p),{},{components:r})):n.createElement(g,c({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},28584:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),c=["components"],i={title:"React-11\uff1asetState\u7684\u4f7f\u7528",date:new Date("2021-04-07T00:00:00.000Z"),categories:"React",tags:["React"]},l=void 0,u={permalink:"/React-11\uff1asetState\u7684\u4f7f\u7528",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/React-11\uff1asetState\u7684\u4f7f\u7528.md",source:"@site/blog/React-11\uff1asetState\u7684\u4f7f\u7528.md",title:"React-11\uff1asetState\u7684\u4f7f\u7528",description:"\u72b6\u6001\u4e0d\u53ef\u76f4\u63a5\u66f4\u6539",date:"2021-04-07T00:00:00.000Z",formattedDate:"2021\u5e744\u67087\u65e5",tags:[{label:"React",permalink:"/tags/react"}],readingTime:.07,hasTruncateMarker:!1,authors:[],frontMatter:{title:"React-11\uff1asetState\u7684\u4f7f\u7528",date:"2021-04-07T00:00:00.000Z",categories:"React",tags:["React"]},prevItem:{title:"LeetCode\u2014\u2014\u7ffb\u8f6c\u94fe\u8868\uff08JS\u5b9e\u73b0\uff09",permalink:"/LeetCode\u2014\u2014\u7ffb\u8f6c\u94fe\u8868\uff08JS\u5b9e\u73b0\uff09"},nextItem:{title:"React-12\uff1a\u7ec4\u4ef6\u5b9e\u4f8b\u7684\u4e09\u5927\u6838\u5fc3\u5c5e\u6027\u4e4bprops",permalink:"/React-12\uff1a\u7ec4\u4ef6\u5b9e\u4f8b\u7684\u4e09\u5927\u6838\u5fc3\u5c5e\u6027\u4e4bprops"}},p={authorsImageUrls:[]},s=[{value:"\u72b6\u6001\u4e0d\u53ef\u76f4\u63a5\u66f4\u6539",id:"\u72b6\u6001\u4e0d\u53ef\u76f4\u63a5\u66f4\u6539",level:2},{value:"\u72b6\u6001\u5fc5\u987b\u901a\u8fc7setState\u4fee\u6539",id:"\u72b6\u6001\u5fc5\u987b\u901a\u8fc7setstate\u4fee\u6539",level:2}],f={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u72b6\u6001\u4e0d\u53ef\u76f4\u63a5\u66f4\u6539"},"\u72b6\u6001\u4e0d\u53ef\u76f4\u63a5\u66f4\u6539"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/197d0c51ad6a122cf3c7a21052366324.png",alt:null})),(0,o.kt)("h2",{id:"\u72b6\u6001\u5fc5\u987b\u901a\u8fc7setstate\u4fee\u6539"},"\u72b6\u6001\u5fc5\u987b\u901a\u8fc7setState\u4fee\u6539"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/5c3a08045dbd1297af4fc3c9806075e8.png",alt:null})))}m.isMDXComponent=!0}}]);