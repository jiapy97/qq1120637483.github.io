"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[95448],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(r),m=a,g=f["".concat(i,".").concat(m)]||f[m]||u[m]||o;return r?n.createElement(g,c(c({ref:t},p),{},{components:r})):n.createElement(g,c({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},20620:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={title:"React-24\uff1aReact\u4e2d\u4f7f\u7528fetch\u53d1\u9001\u8bf7\u6c42\u7684\u4e24\u79cd\u65b9\u5f0f",date:new Date("2021-04-19T00:00:00.000Z"),categories:"React",tags:["React"]},c=void 0,s={permalink:"/blog/React-24\uff1aReact\u4e2d\u4f7f\u7528fetch\u53d1\u9001\u8bf7\u6c42\u7684\u4e24\u79cd\u65b9\u5f0f",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/React-24\uff1aReact\u4e2d\u4f7f\u7528fetch\u53d1\u9001\u8bf7\u6c42\u7684\u4e24\u79cd\u65b9\u5f0f.md",source:"@site/blog\\React-24\uff1aReact\u4e2d\u4f7f\u7528fetch\u53d1\u9001\u8bf7\u6c42\u7684\u4e24\u79cd\u65b9\u5f0f.md",title:"React-24\uff1aReact\u4e2d\u4f7f\u7528fetch\u53d1\u9001\u8bf7\u6c42\u7684\u4e24\u79cd\u65b9\u5f0f",description:"\u65b9\u5f0f1\uff1a\u4f7f\u7528promise\u7684\u65b9\u5f0f",date:"2021-04-19T00:00:00.000Z",formattedDate:"2021\u5e744\u670819\u65e5",tags:[{label:"React",permalink:"/blog/tags/react"}],readingTime:.54,hasTruncateMarker:!1,authors:[],frontMatter:{title:"React-24\uff1aReact\u4e2d\u4f7f\u7528fetch\u53d1\u9001\u8bf7\u6c42\u7684\u4e24\u79cd\u65b9\u5f0f",date:"2021-04-19T00:00:00.000Z",categories:"React",tags:["React"]},prevItem:{title:"\u5251\u6307Offer\u2014\u2014\u6808\u7684\u538b\u5165\u3001\u5f39\u51fa\u5e8f\u5217\uff08JS\u5b9e\u73b0\uff09",permalink:"/blog/\u5251\u6307Offer\u2014\u2014\u6808\u7684\u538b\u5165\u3001\u5f39\u51fa\u5e8f\u5217\uff08JS\u5b9e\u73b0\uff09"},nextItem:{title:"React-25\uff1aReact\u4e2d\u8def\u7531\u7684\u57fa\u672c\u4f7f\u7528",permalink:"/blog/React-25\uff1aReact\u4e2d\u8def\u7531\u7684\u57fa\u672c\u4f7f\u7528"}},i={authorsImageUrls:[]},l=[{value:"\u65b9\u5f0f1\uff1a\u4f7f\u7528promise\u7684\u65b9\u5f0f",id:"\u65b9\u5f0f1\u4f7f\u7528promise\u7684\u65b9\u5f0f",level:2},{value:"\u65b9\u5f0f2\uff1a\u4f7f\u7528await async",id:"\u65b9\u5f0f2\u4f7f\u7528await-async",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u65b9\u5f0f1\u4f7f\u7528promise\u7684\u65b9\u5f0f"},"\u65b9\u5f0f1\uff1a\u4f7f\u7528promise\u7684\u65b9\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'fetch(`http://localhost:3000/api1/search/users2?q=${this.input1.value}`).then(\n            response => {\n                console.log(\'\u6210\u529f\u8054\u7cfb\u5230\u670d\u52a1\u5668\');\n                return response.json();\n            },\n        ).then(\n            response => {\n                console.log("\u6210\u529f\u83b7\u53d6\u5230\u6570\u636e", response);\n            },\n        ).catch(\n            error => {\n                console.log("\u8bf7\u6c42\u51fa\u9519",error);\n            }\n        )\n')),(0,a.kt)("h2",{id:"\u65b9\u5f0f2\u4f7f\u7528await-async"},"\u65b9\u5f0f2\uff1a\u4f7f\u7528await async"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"try {\n            const response = await fetch(`http://localhost:3000/api1/search/users2?q=${this.input1.value}`);\n            const data = await response.json();\n            PubSub.publish('Item', { isLoading: false, isFirst: false,users: data.items });\n            console.log(data);\n        } catch (error) {\n            PubSub.publish('Item', { isLoading:false,err:error.message });\n\n        }\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u522b\u5fd8\u4e86\u5728\u51fd\u6570\u7684\u5f00\u5934\u52a0\u4e0aasync\n",(0,a.kt)("img",{parentName:"li",src:"https://img-blog.csdnimg.cn/img_convert/7a8aa43b55f5f5574d7ae0b02a880828.png",alt:null}))))}u.isMDXComponent=!0}}]);