"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[89224],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,g=m["".concat(p,".").concat(f)]||m[f]||u[f]||i;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67662:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"TypeScript\u4e4b\u521d\u8bc6interface",date:new Date("2021-10-20T00:00:00.000Z"),author:"Justin",top:!1,cover:!1,categories:"TypeScript",tags:["TypeScript"]},o=void 0,l={permalink:"/blog/TypeScript\u4e4b\u521d\u8bc6interface",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/TypeScript\u4e4b\u521d\u8bc6interface.md",source:"@site/blog/TypeScript\u4e4b\u521d\u8bc6interface.md",title:"TypeScript\u4e4b\u521d\u8bc6interface",description:"interface\u7684\u4f5c\u7528",date:"2021-10-20T00:00:00.000Z",formattedDate:"2021\u5e7410\u670820\u65e5",tags:[{label:"TypeScript",permalink:"/blog/tags/type-script"}],readingTime:1.335,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"TypeScript\u4e4b\u521d\u8bc6interface",date:"2021-10-20T00:00:00.000Z",author:"Justin",top:!1,cover:!1,categories:"TypeScript",tags:["TypeScript"]},prevItem:{title:"\u9012\u5f52\u6a21\u677f\u89e3\u51b3\u4e8c\u53c9\u6811\u7684\u524d\u4e2d\u540e\u5e8f\u904d\u5386\u95ee\u9898",permalink:"/blog/\u9012\u5f52\u6a21\u677f\u89e3\u51b3\u4e8c\u53c9\u6811\u7684\u524d\u4e2d\u540e\u5e8f\u904d\u5386\u95ee\u9898"},nextItem:{title:"\u524d\u7aef\u7ecf\u4e45\u4e0d\u8870\u7684\u9762\u8bd5\u9898--\u6570\u7ec4\u4e71\u5e8f",permalink:"/blog/\u524d\u7aef\u7ecf\u4e45\u4e0d\u8870\u7684\u9762\u8bd5\u9898--\u6570\u7ec4\u4e71\u5e8f"}},p={authorsImageUrls:[void 0]},c=[{value:"interface\u7684\u4f5c\u7528",id:"interface\u7684\u4f5c\u7528",level:2},{value:"\u4e00\u3001\u63cf\u8ff0\u5bf9\u8c61\u7684\u5f62\u72b6",id:"\u4e00\u63cf\u8ff0\u5bf9\u8c61\u7684\u5f62\u72b6",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"interface\u7684\u4f5c\u7528"},"interface\u7684\u4f5c\u7528"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u63cf\u8ff0\u5bf9\u8c61\u7684\u5f62\u72b6"),(0,a.kt)("li",{parentName:"ol"},"\u5bf9\u7c7b\u7684\u4e00\u90e8\u5206\u884c\u4e3a\u8fdb\u884c\u62bd\u8c61",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"\u4e0b\u9762\u7684\u6587\u7ae0\u4e3b\u8981\u56f4\u7ed5\u7740\u4e0a\u9762\u7684\u4e24\u90e8\u5206\u8fdb\u884c\u8bb2\u89e3\u3002")))),(0,a.kt)("h2",{id:"\u4e00\u63cf\u8ff0\u5bf9\u8c61\u7684\u5f62\u72b6"},"\u4e00\u3001\u63cf\u8ff0\u5bf9\u8c61\u7684\u5f62\u72b6"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u4e0b\u9762\u7684interface\u4e4b\u95f4\u7684\u5143\u7d20\u662f\u901a\u8fc7\u5206\u53f7\u8fdb\u884c\u5206\u5272\u7684\u3002interface \u540e\u9762\u8ddf\u7684\u540d\u5b57\u5927\u5c0f\u5199\u90fd\u53ef\u4ee5\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface person {\n    name: string;\n    music: string;\n}\nlet person: person = {\n    name: 'justin',\n    music: 'test'\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7interface\u5b9a\u4e49\u7684\u5bf9\u8c61\uff0c\u5c5e\u6027\u7684\u4e2a\u6570\u4e0d\u53ef\u591a\u9875\u4e0d\u53ef\u5c11\uff0c\u5982\u679c\u975e\u8981\u5c11\u7684\u8bdd\uff0c\u53ef\u4ee5\u91c7\u53d6\u4e0b\u9762\u7684\u8fd9\u79cd\u5f62\u5f0f\u3002",(0,a.kt)("strong",{parentName:"li"},"\u53ef\u9009\u5c5e\u6027"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface person {\n    name: string;\n    music?: string;\n}\nlet person: person = {\n    name: 'justin',\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7",(0,a.kt)("strong",{parentName:"li"},"interface"),"\u5b9a\u4e49\u7684\u5bf9\u8c61\uff0c\u5982\u679c\u60f3\u51fa\u73b0",(0,a.kt)("strong",{parentName:"li"},"\u81ea\u7531\u5c5e\u6027"),"\uff0c\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u7684\u8fd9\u79cd\u65b9\u5f0f\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface person {\n    name: string;\n    music?: string;\n    [propName: string]: any;\n}\nlet person: person = {\n    name: 'justin',\n    sex: 'fox'\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7",(0,a.kt)("strong",{parentName:"li"},"readonly"),"\u5b9a\u4e49",(0,a.kt)("strong",{parentName:"li"},"\u53ea\u8bfb\u5c5e\u6027"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface person {\n    readonly id: number;\n    name: string;\n    music?: string;\n    [propName: string]: any;\n}\nlet person: person = {\n    id: 123456,\n    name: 'justin',\n    sex: 'fox'\n}\n\nperson.id = 666;  // \u6b64\u5904\u4f1a\u62a5\u9519\n")))}u.isMDXComponent=!0}}]);