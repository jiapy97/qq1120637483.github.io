"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[65083],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(r),m=a,b=f["".concat(c,".").concat(m)]||f[m]||s[m]||o;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},62158:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"ES6\u2014\u201409\uff1a\u5bf9\u8c61\u6210\u5458\u67e5\u627e\u89c4\u5219",date:new Date("2021-03-12T00:00:00.000Z"),categories:"ES6",tags:["ES6"]},i=void 0,l={permalink:"/blog/ES6\u2014\u201409\uff1a\u5bf9\u8c61\u6210\u5458\u67e5\u627e\u89c4\u5219",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/ES6\u2014\u201409\uff1a\u5bf9\u8c61\u6210\u5458\u67e5\u627e\u89c4\u5219.md",source:"@site/blog\\ES6\u2014\u201409\uff1a\u5bf9\u8c61\u6210\u5458\u67e5\u627e\u89c4\u5219.md",title:"ES6\u2014\u201409\uff1a\u5bf9\u8c61\u6210\u5458\u67e5\u627e\u89c4\u5219",description:"1\uff1a\u5f53\u8bbf\u95ee\u4e00\u4e2a\u5bf9\u8c61\u7684\u5c5e\u6027\u65f6\uff0c\u9996\u5148\u67e5\u627e\u8fd9\u4e2a\u5bf9\u8c61\u81ea\u8eab\u6709\u6ca1\u6709\u8be5\u5c5e\u6027\u3002\u6709\u5219\u4f7f\u7528\uff0c\u65e0\u5219\u8fdb\u5165\u7b2c\u4e8c\u6b65\u3002",date:"2021-03-12T00:00:00.000Z",formattedDate:"2021\u5e743\u670812\u65e5",tags:[{label:"ES6",permalink:"/blog/tags/es-6"}],readingTime:.405,hasTruncateMarker:!1,authors:[],frontMatter:{title:"ES6\u2014\u201409\uff1a\u5bf9\u8c61\u6210\u5458\u67e5\u627e\u89c4\u5219",date:"2021-03-12T00:00:00.000Z",categories:"ES6",tags:["ES6"]},prevItem:{title:"ES6\u2014\u201408\uff1a\u539f\u578b\u94fe",permalink:"/blog/ES6\u2014\u201408\uff1a\u539f\u578b\u94fe"},nextItem:{title:"ES6\u2014\u201410\uff1a\u539f\u578b\u5bf9\u8c61\u7684this\u6307\u5411\u95ee\u9898",permalink:"/blog/ES6\u2014\u201410\uff1a\u539f\u578b\u5bf9\u8c61\u7684this\u6307\u5411\u95ee\u9898"}},c={authorsImageUrls:[]},p=[{value:"1\uff1a\u5f53\u8bbf\u95ee\u4e00\u4e2a\u5bf9\u8c61\u7684\u5c5e\u6027\u65f6\uff0c\u9996\u5148\u67e5\u627e\u8fd9\u4e2a\u5bf9\u8c61\u81ea\u8eab\u6709\u6ca1\u6709\u8be5\u5c5e\u6027\u3002\u6709\u5219\u4f7f\u7528\uff0c\u65e0\u5219\u8fdb\u5165\u7b2c\u4e8c\u6b65\u3002",id:"1\u5f53\u8bbf\u95ee\u4e00\u4e2a\u5bf9\u8c61\u7684\u5c5e\u6027\u65f6\u9996\u5148\u67e5\u627e\u8fd9\u4e2a\u5bf9\u8c61\u81ea\u8eab\u6709\u6ca1\u6709\u8be5\u5c5e\u6027\u6709\u5219\u4f7f\u7528\u65e0\u5219\u8fdb\u5165\u7b2c\u4e8c\u6b65",level:2},{value:"2\uff1a\u5982\u679c\u6ca1\u6709\u5c31\u67e5\u627e\u5b83\u7684\u539f\u578b\u3002",id:"2\u5982\u679c\u6ca1\u6709\u5c31\u67e5\u627e\u5b83\u7684\u539f\u578b",level:2},{value:"3\uff1a\u5982\u679c\u8fd8\u6ca1\u6709\u5c31\u67e5\u627e\u539f\u578b\u5bf9\u8c61\u7684\u539f\u578b\u3002",id:"3\u5982\u679c\u8fd8\u6ca1\u6709\u5c31\u67e5\u627e\u539f\u578b\u5bf9\u8c61\u7684\u539f\u578b",level:2},{value:"4\uff1a\u4ee5\u6b64\u7c7b\u63a8\u4e00\u76f4\u627e\u5230Object\u4e3a\u6b62\u3002",id:"4\u4ee5\u6b64\u7c7b\u63a8\u4e00\u76f4\u627e\u5230object\u4e3a\u6b62",level:2}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\u5f53\u8bbf\u95ee\u4e00\u4e2a\u5bf9\u8c61\u7684\u5c5e\u6027\u65f6\u9996\u5148\u67e5\u627e\u8fd9\u4e2a\u5bf9\u8c61\u81ea\u8eab\u6709\u6ca1\u6709\u8be5\u5c5e\u6027\u6709\u5219\u4f7f\u7528\u65e0\u5219\u8fdb\u5165\u7b2c\u4e8c\u6b65"},"1\uff1a\u5f53\u8bbf\u95ee\u4e00\u4e2a\u5bf9\u8c61\u7684\u5c5e\u6027\u65f6\uff0c\u9996\u5148\u67e5\u627e\u8fd9\u4e2a\u5bf9\u8c61\u81ea\u8eab\u6709\u6ca1\u6709\u8be5\u5c5e\u6027\u3002\u6709\u5219\u4f7f\u7528\uff0c\u65e0\u5219\u8fdb\u5165\u7b2c\u4e8c\u6b65\u3002"),(0,a.kt)("h2",{id:"2\u5982\u679c\u6ca1\u6709\u5c31\u67e5\u627e\u5b83\u7684\u539f\u578b"},"2\uff1a\u5982\u679c\u6ca1\u6709\u5c31\u67e5\u627e\u5b83\u7684\u539f\u578b\u3002"),(0,a.kt)("h2",{id:"3\u5982\u679c\u8fd8\u6ca1\u6709\u5c31\u67e5\u627e\u539f\u578b\u5bf9\u8c61\u7684\u539f\u578b"},"3\uff1a\u5982\u679c\u8fd8\u6ca1\u6709\u5c31\u67e5\u627e\u539f\u578b\u5bf9\u8c61\u7684\u539f\u578b\u3002"),(0,a.kt)("h2",{id:"4\u4ee5\u6b64\u7c7b\u63a8\u4e00\u76f4\u627e\u5230object\u4e3a\u6b62"},"4\uff1a\u4ee5\u6b64\u7c7b\u63a8\u4e00\u76f4\u627e\u5230Object\u4e3a\u6b62\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/6a28c76791c35dfbb4c6d5250bb97b5f.png",alt:null})))}s.isMDXComponent=!0}}]);