"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[354],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=i(n),k=a,d=m["".concat(u,".").concat(k)]||m[k]||c[k]||l;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25879:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const l={title:"Vue3\u4e2d\u96c6\u6210\u5e76\u4f7f\u7528TypeScript",date:new Date("2022-01-19T00:00:00.000Z"),author:"Justin",top:!1,cover:!1,categories:"Vue",tags:["Vue"]},o=void 0,s={permalink:"/blog/Vue3\u4e2d\u96c6\u6210\u5e76\u4f7f\u7528TypeScript",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/Vue3\u4e2d\u96c6\u6210\u5e76\u4f7f\u7528TypeScript.md",source:"@site/blog/Vue3\u4e2d\u96c6\u6210\u5e76\u4f7f\u7528TypeScript.md",title:"Vue3\u4e2d\u96c6\u6210\u5e76\u4f7f\u7528TypeScript",description:"\u4e00\u3001\u5b89\u88c5",date:"2022-01-19T00:00:00.000Z",formattedDate:"2022\u5e741\u670819\u65e5",tags:[{label:"Vue",permalink:"/blog/tags/vue"}],readingTime:1.92,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"Vue3\u4e2d\u96c6\u6210\u5e76\u4f7f\u7528TypeScript",date:"2022-01-19T00:00:00.000Z",author:"Justin",top:!1,cover:!1,categories:"Vue",tags:["Vue"]},prevItem:{title:"Error on importing VueAnalytics to main.ts in Vue CLI (Vue3)",permalink:"/blog/Error on importing VueAnalytics to main in Vue CLI (Vue3)"},nextItem:{title:"LeetCode\u2014\u2014\u87ba\u65cb\u77e9\u9635\uff08\u4e0a\u4e0b\u5de6\u53f3\u56db\u6307\u9488\u8f85\u52a9\u6cd5\uff09",permalink:"/blog/LeetCode\u2014\u2014\u87ba\u65cb\u77e9\u9635\uff08\u4e0a\u4e0b\u5de6\u53f3\u56db\u6307\u9488\u8f85\u52a9\u6cd5\uff09"}},u={authorsImageUrls:[void 0]},i=[{value:"\u4e00\u3001\u5b89\u88c5",id:"\u4e00\u5b89\u88c5",level:2},{value:"\u4e8c\u3001\u5982\u4f55\u8ba9\u7ec4\u4ef6\u80fd\u591f\u4f7f\u7528TS\u8bed\u6cd5\uff1f",id:"\u4e8c\u5982\u4f55\u8ba9\u7ec4\u4ef6\u80fd\u591f\u4f7f\u7528ts\u8bed\u6cd5",level:2},{value:"\u4e09\u3001Vue\u4e2d\u4f7f\u7528TS\u8bed\u6cd5\u5b9e\u4f8b",id:"\u4e09vue\u4e2d\u4f7f\u7528ts\u8bed\u6cd5\u5b9e\u4f8b",level:2},{value:"\u56db\u3001\u7ec4\u5408\u5f0fAPI\u4e2d\u4f7f\u7528TS",id:"\u56db\u7ec4\u5408\u5f0fapi\u4e2d\u4f7f\u7528ts",level:2},{value:"\u7b2c\u4e00\u79cd\u5b9e\u73b0\u65b9\u5f0f\uff08\u53c2\u6570\uff09",id:"\u7b2c\u4e00\u79cd\u5b9e\u73b0\u65b9\u5f0f\u53c2\u6570",level:3},{value:"\u7b2c\u4e8c\u79cd\u5b9e\u73b0\u65b9\u5f0f\uff08\u6cdb\u578b\uff09",id:"\u7b2c\u4e8c\u79cd\u5b9e\u73b0\u65b9\u5f0f\u6cdb\u578b",level:3},{value:"\u7b2c\u4e09\u79cd\u5b9e\u73b0\u65b9\u5f0f\uff08\u901a\u8fc7as\uff09",id:"\u7b2c\u4e09\u79cd\u5b9e\u73b0\u65b9\u5f0f\u901a\u8fc7as",level:3}],p={toc:i};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4e00\u5b89\u88c5"},"\u4e00\u3001\u5b89\u88c5"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efavue\u9879\u76ee")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"vue create vue-test-demo\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u8fdb\u5165\u9879\u76ee")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd vue-ts-demo\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u65b0\u589etypescript")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"vue add typescript\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"\u8df3\u8fc7class\u8bed\u6cd5")),(0,a.kt)("h2",{id:"\u4e8c\u5982\u4f55\u8ba9\u7ec4\u4ef6\u80fd\u591f\u4f7f\u7528ts\u8bed\u6cd5"},"\u4e8c\u3001\u5982\u4f55\u8ba9\u7ec4\u4ef6\u80fd\u591f\u4f7f\u7528TS\u8bed\u6cd5\uff1f"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"script\u6807\u7b7e\u7684lang\u5c5e\u6027\u8bbe\u7f6e\u4e3ats\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<script lang="ts">\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u4ecevue\u4e2d\u5bfc\u5165defineComponent")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { defineComponent } from 'vue';\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u7ec4\u4ef6\u5bf9\u5916\u66b4\u9732\u65f6\u9700\u8981\u901a\u8fc7defineComponent\u8fdb\u884c\u5305\u88f9\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default defineComponent({\n  name: 'App',\n  components: {\n    Home\n  }\n});\n")),(0,a.kt)("h2",{id:"\u4e09vue\u4e2d\u4f7f\u7528ts\u8bed\u6cd5\u5b9e\u4f8b"},"\u4e09\u3001Vue\u4e2d\u4f7f\u7528TS\u8bed\u6cd5\u5b9e\u4f8b"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5b9a\u4e49\u63a5\u53e3\u5e76\u5b9e\u73b0\u63a5\u53e3\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<script lang="ts">\nimport {defineComponent} from \'vue\'\ninterface News{\n  title: string,\n  description: string,\n  count: number,\n  content?: string\n}\nlet newsData: News= {\n  title: "\u8fd9\u662f\u4e00\u4e2a\u65b0\u95fb",\n  description: "\u8fd9\u662f\u65b0\u95fb\u7684\u63cf\u8ff0",\n  count: 12\n}\nexport default defineComponent({\n  data() {\n    return newsData\n  },\n  methods: {\n    setTitle(): void{\n      this.title = \'123\';\n    }\n  }\n});\n<\/script>\n')),(0,a.kt)("h2",{id:"\u56db\u7ec4\u5408\u5f0fapi\u4e2d\u4f7f\u7528ts"},"\u56db\u3001\u7ec4\u5408\u5f0fAPI\u4e2d\u4f7f\u7528TS"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e0b\u6587\u9996\u5148\u4ecb\u7ecdreactive\u7684\u4f7f\u7528\u6ce8\u610f\u4e8b\u9879\u3002")),(0,a.kt)("h3",{id:"\u7b2c\u4e00\u79cd\u5b9e\u73b0\u65b9\u5f0f\u53c2\u6570"},"\u7b2c\u4e00\u79cd\u5b9e\u73b0\u65b9\u5f0f\uff08\u53c2\u6570\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'interface User {\n  username: string;\n  age: number;\n}\n  setup() {\n    let user: User = reactive({\n      username: "\u5f20\u4e09",\n      age: 20,\n    });\n    function setUsername(username: string) {\n      user.username = username;\n    }\n    return {\n      ...toRefs(user),\n      setUsername\n    };\n  }\n')),(0,a.kt)("h3",{id:"\u7b2c\u4e8c\u79cd\u5b9e\u73b0\u65b9\u5f0f\u6cdb\u578b"},"\u7b2c\u4e8c\u79cd\u5b9e\u73b0\u65b9\u5f0f\uff08\u6cdb\u578b\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'  setup() {\n    let user = reactive<User>({\n      username: "\u5f20\u4e09",\n      age: 20,\n    });\n    function setUsername(username: string) {\n      user.username = username;\n    }\n    return {\n      ...toRefs(user),\n      setUsername\n    };\n  }\n')),(0,a.kt)("h3",{id:"\u7b2c\u4e09\u79cd\u5b9e\u73b0\u65b9\u5f0f\u901a\u8fc7as"},"\u7b2c\u4e09\u79cd\u5b9e\u73b0\u65b9\u5f0f\uff08\u901a\u8fc7as\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'let user = reactive({\n  username: "\u5f20\u4e09",\n  age: 20,\n}) as User;\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e0b\u9762\u4ecb\u7ecd\u4e0bref\u7684\u6ce8\u610f\u4e8b\u9879\u3002")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"ref\u4e0d\u652f\u6301\u76f4\u63a5\u6307\u5b9a\u7c7b\u578b\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e0b\u9762\u7684\u662f\u9519\u8bef\u7684\u5f62\u5f0f\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let num: string = ref('666');\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"ref\u652f\u6301\u6cdb\u578b\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let num = ref<number | string>('666');\n")))}c.isMDXComponent=!0}}]);