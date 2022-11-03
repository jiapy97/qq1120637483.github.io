"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[33562],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),f=o,d=s["".concat(i,".").concat(f)]||s[f]||m[f]||a;return n?r.createElement(d,c(c({ref:t},u),{},{components:n})):r.createElement(d,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=s;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},10870:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),c=["components"],l={title:"React-59\uff1aPureComponent",date:new Date("2021-04-30T00:00:00.000Z"),categories:"React",tags:["React"]},i=void 0,p={permalink:"/React-59\uff1aPureComponent",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/React-59\uff1aPureComponent.md",source:"@site/blog/React-59\uff1aPureComponent.md",title:"React-59\uff1aPureComponent",description:"React\u4e2d\u7684component\u5b58\u5728\u4e24\u4e2a\u95ee\u9898",date:"2021-04-30T00:00:00.000Z",formattedDate:"2021\u5e744\u670830\u65e5",tags:[{label:"React",permalink:"/tags/react"}],readingTime:.54,hasTruncateMarker:!1,authors:[],frontMatter:{title:"React-59\uff1aPureComponent",date:"2021-04-30T00:00:00.000Z",categories:"React",tags:["React"]},prevItem:{title:"React-62\uff1a\u7ec4\u4ef6\u95f4\u901a\u4fe1\u65b9\u5f0f\u603b\u7ed3",permalink:"/React-62\uff1a\u7ec4\u4ef6\u95f4\u901a\u4fe1\u65b9\u5f0f\u603b\u7ed3"},nextItem:{title:"React-60\uff1arender props",permalink:"/React-60\uff1arender props"}},u={authorsImageUrls:[]},m=[{value:"React\u4e2d\u7684component\u5b58\u5728\u4e24\u4e2a\u95ee\u9898",id:"react\u4e2d\u7684component\u5b58\u5728\u4e24\u4e2a\u95ee\u9898",level:2},{value:"\u9020\u6210\u4e0a\u8ff0\u95ee\u9898\u7684\u539f\u56e0",id:"\u9020\u6210\u4e0a\u8ff0\u95ee\u9898\u7684\u539f\u56e0",level:2},{value:"\u6548\u7387\u9ad8\u7684\u505a\u6cd5",id:"\u6548\u7387\u9ad8\u7684\u505a\u6cd5",level:2}],s={toc:m};function f(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"react\u4e2d\u7684component\u5b58\u5728\u4e24\u4e2a\u95ee\u9898"},"React\u4e2d\u7684component\u5b58\u5728\u4e24\u4e2a\u95ee\u9898"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53ea\u8981\u6267\u884csetState()\uff0c\u5373\u4f7f\u4e0d\u6539\u53d8\u72b6\u6001\u6570\u636e\uff0c\u7ec4\u4ef6\u4e5f\u4f1a\u91cd\u65b0render()"),(0,a.kt)("li",{parentName:"ul"},"\u5f53\u524d\u7ec4\u4ef6\u91cd\u65b0render()\uff0c\u5c31\u4f1a\u81ea\u52a8\u91cd\u65b0render\u5b50\u7ec4\u4ef6\uff0c\u5982\u679c\u5b50\u7ec4\u4ef6\u5e76\u6ca1\u6709\u7528\u5230\u7236\u7ec4\u4ef6\u7684\u4efb\u4f55\u4e1c\u897f\uff0c\u8fd9\u6837\u5c31\u4f1a\u4f7f\u5f97\u6548\u7387\u4f4e\u3002")),(0,a.kt)("h2",{id:"\u9020\u6210\u4e0a\u8ff0\u95ee\u9898\u7684\u539f\u56e0"},"\u9020\u6210\u4e0a\u8ff0\u95ee\u9898\u7684\u539f\u56e0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"shouldComponentUpdate()\u603b\u662f\u8fd4\u56detrue")),(0,a.kt)("h2",{id:"\u6548\u7387\u9ad8\u7684\u505a\u6cd5"},"\u6548\u7387\u9ad8\u7684\u505a\u6cd5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53ea\u6709\u5f53\u7ec4\u4ef6\u7684state\u6216props\u6570\u636e\u53d1\u751f\u6539\u53d8\u65f6\u624d\u91cd\u65b0render")),(0,a.kt)("blockquote",null,(0,a.kt)("h2",{parentName:"blockquote",id:"\u89e3\u51b3\u95ee\u9898\u7684\u65b9\u6cd5"},"\u89e3\u51b3\u95ee\u9898\u7684\u65b9\u6cd5")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u901a\u8fc7\u624b\u52a8\u5224\u65adshouldComponentUpdate\u6765\u51b3\u5b9a\u662f\u5426render\n",(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/c4df7016662d629ee16258d9a2491ef4.png",alt:null}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5c06\u4eceReact\u4e2d\u5f15\u5165\u7684Component\u6539\u4e3aPureComponent\uff08\u7236\u5b50\u7ec4\u4ef6\u90fd\u5f97\u6539\uff09\n",(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/59081042e068265011d8fee31d741c87.png",alt:null})))))}f.isMDXComponent=!0}}]);