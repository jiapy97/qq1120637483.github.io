"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[55357],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||g[m]||o;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},48363:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Vue+TS\u4e2d\u5168\u5c40\u7ed1\u5b9aaxios\u3001storage\u3001\u63a5\u53e3\u5730\u5740\u7684\u65b9\u6cd5",date:new Date("2022-01-24T00:00:00.000Z"),author:"Justin",top:!1,cover:!1,categories:"vue",tags:["vue"]},l=void 0,i={permalink:"/blog/Vue+TS\u4e2d\u5168\u5c40\u7ed1\u5b9aaxios\u3001storage\u3001\u63a5\u53e3\u5730\u5740\u7684\u65b9\u6cd5",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/Vue+TS\u4e2d\u5168\u5c40\u7ed1\u5b9aaxios\u3001storage\u3001\u63a5\u53e3\u5730\u5740\u7684\u65b9\u6cd5.md",source:"@site/blog/Vue+TS\u4e2d\u5168\u5c40\u7ed1\u5b9aaxios\u3001storage\u3001\u63a5\u53e3\u5730\u5740\u7684\u65b9\u6cd5.md",title:"Vue+TS\u4e2d\u5168\u5c40\u7ed1\u5b9aaxios\u3001storage\u3001\u63a5\u53e3\u5730\u5740\u7684\u65b9\u6cd5",description:"\u5168\u5c40\u7ed1\u5b9aaxios(\u5728TypeScript\u4e2d)",date:"2022-01-24T00:00:00.000Z",formattedDate:"2022\u5e741\u670824\u65e5",tags:[{label:"vue",permalink:"/blog/tags/vue"}],readingTime:2.575,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"Vue+TS\u4e2d\u5168\u5c40\u7ed1\u5b9aaxios\u3001storage\u3001\u63a5\u53e3\u5730\u5740\u7684\u65b9\u6cd5",date:"2022-01-24T00:00:00.000Z",author:"Justin",top:!1,cover:!1,categories:"vue",tags:["vue"]},prevItem:{title:"nextTick\u7684\u5b9e\u9645\u4f7f\u7528\u573a\u666f\u5206\u6790",permalink:"/blog/nextTick\u7684\u5b9e\u9645\u4f7f\u7528\u573a\u666f\u5206\u6790"},nextItem:{title:"Error on importing VueAnalytics to main.ts in Vue CLI (Vue3)",permalink:"/blog/Error on importing VueAnalytics to main in Vue CLI (Vue3)"}},s={authorsImageUrls:[void 0]},p=[{value:"\u5168\u5c40\u7ed1\u5b9aaxios(\u5728TypeScript\u4e2d)",id:"\u5168\u5c40\u7ed1\u5b9aaxios\u5728typescript\u4e2d",level:2},{value:"\u5c01\u88c5\u5e76\u5168\u5c40\u7ed1\u5b9astorage",id:"\u5c01\u88c5\u5e76\u5168\u5c40\u7ed1\u5b9astorage",level:2},{value:"\u5c01\u88c5storage",id:"\u5c01\u88c5storage",level:3},{value:"\u5168\u5c40\u7ed1\u5b9astorage",id:"\u5168\u5c40\u7ed1\u5b9astorage",level:3},{value:"\u5c01\u88c5\u63a5\u53e3\u5730\u5740",id:"\u5c01\u88c5\u63a5\u53e3\u5730\u5740",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],c={toc:p};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u5168\u5c40\u7ed1\u5b9aaxios\u5728typescript\u4e2d"},"\u5168\u5c40\u7ed1\u5b9aaxios(\u5728TypeScript\u4e2d)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7cnpm\u5b89\u88c5\u5230\u9879\u76ee\u4e2d\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cnpm i axios --save\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u5728main.ts\u4e2d\u5f15\u5165\u4e0b\u9762\u7684\u63a5\u53e3\u548c\u7ec4\u4ef6")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import Axios,{AxiosInstance} from  'axios'\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u5728main.ts\u4e2d\u8fdb\u884c\u5982\u4e0b\u58f0\u660e")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"declare module '@vue/runtime-core' {\n  interface ComponentCustomProperties {\n    $axios: AxiosInstance\n  }\n}\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"\u5728\u65b9\u6cd5\u4e2d\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7this.$axios\u8fdb\u884c\u8c03\u7528\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"requestData() {\n  this.$axios.get('https://s.itying.com/api/v1/login').then(res => {\n    console.log(res);\n  })\n}\n")),(0,r.kt)("h2",{id:"\u5c01\u88c5\u5e76\u5168\u5c40\u7ed1\u5b9astorage"},"\u5c01\u88c5\u5e76\u5168\u5c40\u7ed1\u5b9astorage"),(0,r.kt)("h3",{id:"\u5c01\u88c5storage"},"\u5c01\u88c5storage"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9996\u5148\u521b\u5efa\u4e00\u4e2astorage.ts\u6587\u4ef6")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4e0b\u9762\u662fstorage.ts\u6587\u4ef6\u4e2d\u7684\u5185\u5bb9"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export interface StorageInstance {\n  set(key: string,value: any): void;\n  get(key: string): any;\n  remove(key: string): void;\n}\n\nclass StorageClass implements StorageInstance {\n  set(key: string, value: any): void {\n    localStorage.setItem(key,JSON.stringify(value));\n  }\n  get(key: string): any {\n    let temp = localStorage.getItem(key);\n    if (temp) {\n      return JSON.parse(temp);\n    }\n    return null;\n  }\n  remove(key: string): void {\n    localStorage.removeItem(key);\n  }\n}\nlet Storge = new StorageClass();\n\nexport default Storage;\n")),(0,r.kt)("h3",{id:"\u5168\u5c40\u7ed1\u5b9astorage"},"\u5168\u5c40\u7ed1\u5b9astorage"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u6211\u4eec\u5168\u5c40\u7ed1\u5b9a\u7684\u662f\u6211\u4eec\u4e0a\u4e00\u6b65\u66b4\u9732\u7684storage\u3002")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5f15\u5165\u5df2\u7ecf\u5c01\u88c5\u597d\u7684storage\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import Storage,{StorageInstance} from './model/storage'\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u58f0\u660emodule")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"declare module '@vue/runtime-core' {\n  interface ComponentCustomProperties {\n    $axios: AxiosInstance,\n    $storage: StorageInstance\n  }\n}\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u6302\u8f7d\u5230\u5168\u5c40")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"app.config.globalProperties.$storage = Storage\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7this.$storage\u5373\u53ef\u8bbf\u95ee")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'this.$storage.set("token",res.data.token)\n')),(0,r.kt)("h2",{id:"\u5c01\u88c5\u63a5\u53e3\u5730\u5740"},"\u5c01\u88c5\u63a5\u53e3\u5730\u5740"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efaconfig.ts")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u6587\u4ef6\u4e2d\u66b4\u9732\u76f8\u5173\u63a5\u53e3\u5730\u5740"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export interface ConfigInstance {\n  apiUrl: string;\n  imgUrl: string;\n}\n\nclass ConfigClass implements ConfigInstance {\n  apiUrl: string;\n  imgUrl: string;\n  constructor() {\n    this.apiUrl = 'https://s.itying.com/api/v1';\n    this.imgUrl = 'https://s.itying.com'\n  }\n}\n\nconst Config = new ConfigClass();\n\nexport default Config;\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u5728main.ts\u4e2d\u8fdb\u884c\u58f0\u660e\u4e0e\u6302\u8f7d")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import Config,{ConfigInstance} from './model/config'\ndeclare module '@vue/runtime-core' {\n  interface ComponentCustomProperties {\n    $axios: AxiosInstance,\n    $storage: StorageInstance,\n    $config: ConfigInstance\n  }\n}\napp.config.globalProperties.$config = Config\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"\u7ec4\u4ef6\u4e2d\u83b7\u53d6\u53ea\u9700\u901a\u8fc7this.$config.apiUrl\u5373\u53ef\u3002")),(0,r.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5728vue\u4e2d\u8fdb\u884c\u5168\u5c40\u7ed1\u5b9a\u662f\u4e00\u4e2a\u975e\u5e38\u91cd\u8981\u548c\u5e38\u7528\u7684\u64cd\u4f5c\uff0c\u4ee5api\u8bf7\u6c42\u5730\u5740\u4e3a\u4f8b\uff0c\u5047\u5982\u4e00\u4e2a\u5927\u578b\u7684vue\u9879\u76ee\u6bcf\u4e00\u4e2a\u63a5\u53e3\u5730\u5740\u90fd\u662f\u5199\u6b7b\u7684\uff0c\u90a3\u4e48\u4e00\u65e6api\u5730\u5740\u53d1\u751f\u66f4\u6539\uff0c\u8fd9\u5c06\u7ed9\u4fee\u6539\u5e26\u6765\u6781\u5927\u7684\u56f0\u96be\uff0c\u4f46\u662f\u5982\u679c\u6211\u4eec\u7ed1\u5b9a\u5230\u5168\u5c40\uff0c\u4fee\u6539\u8d77\u6765\u5c31\u662f\u5341\u5206\u7b80\u5355\u7684\u4e00\u4ef6\u4e8b\u60c5\u4e86\uff0c\u6240\u4ee5\u5c06\u4e00\u4e9b\u5e38\u7528\u5c5e\u6027\u548c\u65b9\u6cd5\u7ed1\u5b9a\u5230\u5168\u5c40\u4e2d\u662f\u975e\u5e38\u91cd\u8981\u7684\u3002")))}g.isMDXComponent=!0}}]);