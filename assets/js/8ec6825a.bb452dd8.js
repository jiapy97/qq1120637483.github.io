"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[93309],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),s=p(n),f=a,k=s["".concat(o,".").concat(f)]||s[f]||u[f]||i;return n?r.createElement(k,l(l({ref:t},m),{},{components:n})):r.createElement(k,l({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},25160:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"React-27\uff1aNavLink\u7684\u57fa\u672c\u4f7f\u7528",date:new Date("2021-04-19T00:00:00.000Z"),categories:"React",tags:["React"]},l=void 0,c={permalink:"/blog/React-27\uff1aNavLink\u7684\u57fa\u672c\u4f7f\u7528",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/React-27\uff1aNavLink\u7684\u57fa\u672c\u4f7f\u7528.md",source:"@site/blog\\React-27\uff1aNavLink\u7684\u57fa\u672c\u4f7f\u7528.md",title:"React-27\uff1aNavLink\u7684\u57fa\u672c\u4f7f\u7528",description:"\u901a\u8fc7NavLink\u53ef\u4ee5\u7ed9Link\u6dfb\u52a0\u7c7b\u540d\uff0c\u4ece\u800c\u5b9e\u73b0\u4fee\u6539\u6837\u5f0f",date:"2021-04-19T00:00:00.000Z",formattedDate:"2021\u5e744\u670819\u65e5",tags:[{label:"React",permalink:"/blog/tags/react"}],readingTime:.565,hasTruncateMarker:!1,authors:[],frontMatter:{title:"React-27\uff1aNavLink\u7684\u57fa\u672c\u4f7f\u7528",date:"2021-04-19T00:00:00.000Z",categories:"React",tags:["React"]},prevItem:{title:"React-26\uff1aReact\u4e2d\u8def\u7531\u7ec4\u4ef6\u548c\u4e00\u822c\u7ec4\u4ef6\u7684\u533a\u522b",permalink:"/blog/React-26\uff1aReact\u4e2d\u8def\u7531\u7ec4\u4ef6\u548c\u4e00\u822c\u7ec4\u4ef6\u7684\u533a\u522b"},nextItem:{title:"\u5251\u6307Offer\u2014\u2014\u80a1\u7968\u7684\u6700\u5927\u5229\u6da6\uff08JS\u5b9e\u73b0\uff09",permalink:"/blog/\u5251\u6307Offer\u2014\u2014\u80a1\u7968\u7684\u6700\u5927\u5229\u6da6\uff08JS\u5b9e\u73b0\uff09"}},o={authorsImageUrls:[]},p=[{value:"\u901a\u8fc7NavLink\u53ef\u4ee5\u7ed9Link\u6dfb\u52a0\u7c7b\u540d\uff0c\u4ece\u800c\u5b9e\u73b0\u4fee\u6539\u6837\u5f0f",id:"\u901a\u8fc7navlink\u53ef\u4ee5\u7ed9link\u6dfb\u52a0\u7c7b\u540d\u4ece\u800c\u5b9e\u73b0\u4fee\u6539\u6837\u5f0f",level:2},{value:"\u5c01\u88c5NavLink",id:"\u5c01\u88c5navlink",level:2}],m={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u901a\u8fc7navlink\u53ef\u4ee5\u7ed9link\u6dfb\u52a0\u7c7b\u540d\u4ece\u800c\u5b9e\u73b0\u4fee\u6539\u6837\u5f0f"},"\u901a\u8fc7NavLink\u53ef\u4ee5\u7ed9Link\u6dfb\u52a0\u7c7b\u540d\uff0c\u4ece\u800c\u5b9e\u73b0\u4fee\u6539\u6837\u5f0f"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/1d8998ddbf2b7d0a189e08cf7e913105.png",alt:null})),(0,a.kt)("h2",{id:"\u5c01\u88c5navlink"},"\u5c01\u88c5NavLink"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u7ec4\u4ef6MyNavLink"),(0,a.kt)("li",{parentName:"ul"},"\u5f15\u5165\u81ea\u5b9a\u4e49\u7ec4\u4ef6")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import MyNavLink from './components/MyNavLink';\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5411\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4f20to\u5c5e\u6027\uff0c\u503c\u4e3a\u8def\u7531\u4fe1\u606f\n",(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/cda9b2f407fe0915185fab147dbe3288.png",alt:null}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4e2d\uff0c\u8fd4\u56deNavLink\n",(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/ac545fed84fac203fb53e46832f429dc.png",alt:null}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528\u62d3\u5c55\u8fd0\u7b97\u7b26\u89e3\u6784\u5bf9\u8c61\u662f\u5173\u952e\uff0c\u56e0\u4e3a\u4e0a\u9762\u7684MyNavLink\u4e2d\u95f4\u7684\u503c\u4f5c\u4e3achildren\u5c5e\u6027\u4f20\u9012\u7ed9\u4e86\u5c01\u88c5\u7684NavLink"))))}u.isMDXComponent=!0}}]);