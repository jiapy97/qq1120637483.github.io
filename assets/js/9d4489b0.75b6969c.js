"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[81185],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),y=c(n),m=o,f=y["".concat(l,".").concat(m)]||y[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=y;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"python\u2014\u2014split\u548cjoin\u51fd\u6570",date:new Date("2020-05-25T00:00:00.000Z"),categories:"python",tags:["python"]},i=void 0,p={permalink:"/blog/python\u2014\u2014split\u548cjoin\u51fd\u6570",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/python\u2014\u2014split\u548cjoin\u51fd\u6570.md",source:"@site/blog/python\u2014\u2014split\u548cjoin\u51fd\u6570.md",title:"python\u2014\u2014split\u548cjoin\u51fd\u6570",description:"\u4ee3\u7801\uff1a",date:"2020-05-25T00:00:00.000Z",formattedDate:"2020\u5e745\u670825\u65e5",tags:[{label:"python",permalink:"/blog/tags/python"}],readingTime:.375,hasTruncateMarker:!1,authors:[],frontMatter:{title:"python\u2014\u2014split\u548cjoin\u51fd\u6570",date:"2020-05-25T00:00:00.000Z",categories:"python",tags:["python"]},prevItem:{title:"LeetCode\u2014\u201402.\u6574\u6570\u53cd\u8f6c",permalink:"/blog/LeetCode\u2014\u201402.\u6574\u6570\u53cd\u8f6c"},nextItem:{title:"python\u2014\u2014\u5207\u7247\u64cd\u4f5c",permalink:"/blog/python\u2014\u2014\u5207\u7247\u64cd\u4f5c"}},l={authorsImageUrls:[]},c=[],s={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4ee3\u7801\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'a = "to be or not to be"\n\n# \u4e0d\u6307\u5b9a\u7684\u8bdd\uff0c\u6309\u7167\u7a7a\u683c\u8fdb\u884c\u5206\u5f00\nprint(a.split())\n# \u7ed9\u5b9a\u5b57\u7b26\u7684\u8bdd\uff0c\u8fd9\u4e2a\u5b57\u7b26\u4e0d\u8981\u4e86  \u76f8\u5f53\u4e8e\u628a"be"\u6362\u6210,\nprint(a.split("be"))\n\n# join()  \u6309\u7167join\u524d\u9762\u7684\u8fdb\u884c\u7ec4\u5408\nb = ["\u5f20\u4e09","\u674e\u56db","\u54c6\u5566A\u68a6"]\nprint("+".join(b))\nprint("".join(b))\n')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200525214410.png",alt:null})))}u.isMDXComponent=!0}}]);