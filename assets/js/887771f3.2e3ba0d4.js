"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[92624],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),k=u(r),m=o,v=k["".concat(c,".").concat(m)]||k[m]||s[m]||a;return r?n.createElement(v,i(i({ref:t},p),{},{components:r})):n.createElement(v,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=k;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},76449:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={title:"nextTick\u7684\u5b9e\u9645\u4f7f\u7528\u573a\u666f\u5206\u6790",date:new Date("2022-01-25T00:00:00.000Z"),author:"Justin",top:!1,cover:!1,categories:"vue",tags:["vue"]},i=void 0,l={permalink:"/blog/nextTick\u7684\u5b9e\u9645\u4f7f\u7528\u573a\u666f\u5206\u6790",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/nextTick\u7684\u5b9e\u9645\u4f7f\u7528\u573a\u666f\u5206\u6790.md",source:"@site/blog\\nextTick\u7684\u5b9e\u9645\u4f7f\u7528\u573a\u666f\u5206\u6790.md",title:"nextTick\u7684\u5b9e\u9645\u4f7f\u7528\u573a\u666f\u5206\u6790",description:"\u9700\u6c42\u5206\u6790",date:"2022-01-25T00:00:00.000Z",formattedDate:"2022\u5e741\u670825\u65e5",tags:[{label:"vue",permalink:"/blog/tags/vue"}],readingTime:2.405,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"nextTick\u7684\u5b9e\u9645\u4f7f\u7528\u573a\u666f\u5206\u6790",date:"2022-01-25T00:00:00.000Z",author:"Justin",top:!1,cover:!1,categories:"vue",tags:["vue"]},prevItem:{title:"\u5927\u767d\u8bdd\u5e26\u4f60\u7406\u89e3Socket.io\u662f\u5982\u4f55\u540c\u6b65\u6570\u636e\u7684",permalink:"/blog/\u5927\u767d\u8bdd\u5e26\u4f60\u7406\u89e3Socket.io\u662f\u5982\u4f55\u540c\u6b65\u6570\u636e\u7684"},nextItem:{title:"Vue+TS\u4e2d\u5168\u5c40\u7ed1\u5b9aaxios\u3001storage\u3001\u63a5\u53e3\u5730\u5740\u7684\u65b9\u6cd5",permalink:"/blog/Vue+TS\u4e2d\u5168\u5c40\u7ed1\u5b9aaxios\u3001storage\u3001\u63a5\u53e3\u5730\u5740\u7684\u65b9\u6cd5"}},c={authorsImageUrls:[void 0]},u=[{value:"\u9700\u6c42\u5206\u6790",id:"\u9700\u6c42\u5206\u6790",level:2},{value:"\u6848\u4f8b\u5206\u6790",id:"\u6848\u4f8b\u5206\u6790",level:2},{value:"\u4ee3\u7801\u5206\u6790",id:"\u4ee3\u7801\u5206\u6790",level:2},{value:"\u539f\u7406\u5206\u6790",id:"\u539f\u7406\u5206\u6790",level:2},{value:"vue\u5982\u4f55\u5224\u65adDOM\u662f\u5426\u66f4\u65b0\u5b8c\u6bd5\uff1f",id:"vue\u5982\u4f55\u5224\u65addom\u662f\u5426\u66f4\u65b0\u5b8c\u6bd5",level:3},{value:"\u5229\u7528MutationObserver\uff1f\u800c\u662f\u4e8b\u4ef6\u5faa\u73af\u3002",id:"\u5229\u7528mutationobserver\u800c\u662f\u4e8b\u4ef6\u5faa\u73af",level:4}],p={toc:u};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u9700\u6c42\u5206\u6790"},"\u9700\u6c42\u5206\u6790"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6709\u65f6\u5019\uff0c\u6211\u4eec\u9700\u8981\u9875\u9762\u7684\u6240\u6709\u6570\u636e\u90fd\u6e32\u67d3\u5b8c\u6210\u540e\u5728\u83b7\u53d6\u6570\u636e\uff0c\u901a\u8fc7\u4f20\u7edf\u7684\u65b9\u6cd5\u65e0\u6cd5\u83b7\u53d6\u5230\u6e32\u67d3\u540e\u7684\u6570\u636e\uff0c\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u9875\u9762\u4e2d\u901a\u8fc7v-for\u6e32\u67d3\u7684li\u670912\u4e2a\uff0c\u4f46\u662f\uff0c\u6211\u4eec\u5374\u5728\u5f02\u6b65\u83b7\u53d6\u6570\u636e\u7684\u51fd\u6570\u4e2d\u65e0\u6cd5\u901a\u8fc7document.querySelector\u62ff\u5230\u6240\u6709\u7684\u6570\u636e\uff0c\u6b64\u65f6\u5c31\u9700\u8981\u4f7f\u7528nextTick.")),(0,o.kt)("h2",{id:"\u6848\u4f8b\u5206\u6790"},"\u6848\u4f8b\u5206\u6790"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4f8b\u5982\u4e0b\u9762\u8fd9\u4e2a\u9875\u9762\uff0c\u6211\u4eec\u60f3\u8981\u5b9e\u73b0\u7684\u662f\u5148\u6e32\u67d3\u9875\u9762\uff0c\u7136\u540e\u83b7\u53d6li\u7684\u6570\u91cf\u3002")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/833f35245975a6c39ce0dd7a95078bf8.png",alt:"image.png"})),(0,o.kt)("h2",{id:"\u4ee3\u7801\u5206\u6790"},"\u4ee3\u7801\u5206\u6790"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u8bf7\u6ce8\u610f\uff0c\u4e0b\u9762\u7684\u4ee3\u7801\u8981\u5199\u5728\u83b7\u53d6\u53e3\u5473\u7684\u5f02\u6b65\u51fd\u6570\u5b8c\u6210\u4e4b\u540e\u3002(\u8fd9\u4e00\u70b9\u5f88\u91cd\u8981\uff0c\u76f4\u63a5\u653e\u5728mounted\u51fd\u6570\u4e4b\u4e2d\u662f\u6ca1\u6709\u4f5c\u7528\u7684\u3002)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'  this.$axios.get(this.$config.apiUrl + "/flavorList").then((res) => {\n    console.log(res);\n    this.flavorList = res.data.result;\n    this.$nextTick(() => {\n      // \u6e32\u67d3\u6574\u4e2a\u9875\u9762\u4e4b\u540e\uff0c\u518d\u6267\u884c\u4e0b\u9762\u7684\u4ee3\u7801\n      this.initEvent();\n    });\n  });\n')),(0,o.kt)("h2",{id:"\u539f\u7406\u5206\u6790"},"\u539f\u7406\u5206\u6790"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6211\u4eec\u4e0d\u4ec5\u8981\u77e5\u9053nextTick\u662f\u5982\u4f55\u4f7f\u7528\u7684\uff0c\u8fd8\u8981\u77e5\u9053nextTick\u7684\u539f\u7406\uff0c\u8fd9\u662f\u4e00\u9053\u9762\u8bd5\u5e38\u8003\u7684\u9898\u76ee\u3002")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6709\u65f6\u5019\uff0c\u6211\u4eec\u4e5f\u8bb8\u65e0\u6cd5\u907f\u514d\u7684\u9700\u8981\u76f4\u63a5\u5bf9DOM\u8fdb\u884c\u64cd\u4f5c\uff0c\u4f46\u662f\u6211\u4eec\u60f3\u8981\u64cd\u4f5c\u7684\u662f\u9875\u9762\u6e32\u67d3\u5b8c\u6210\u540e\u7684\u7ed3\u679c\uff0c\u6b64\u65f6nextTick\u5c31\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u5b9e\u73b0\u3002")),(0,o.kt)("h3",{id:"vue\u5982\u4f55\u5224\u65addom\u662f\u5426\u66f4\u65b0\u5b8c\u6bd5"},"vue\u5982\u4f55\u5224\u65adDOM\u662f\u5426\u66f4\u65b0\u5b8c\u6bd5\uff1f"),(0,o.kt)("h4",{id:"\u5229\u7528mutationobserver\u800c\u662f\u4e8b\u4ef6\u5faa\u73af"},"\u5229\u7528MutationObserver\uff1f\u800c\u662f\u4e8b\u4ef6\u5faa\u73af\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"MutationObserver\u662fHTML5\u65b0\u589e\u7684\u4e00\u4e2aAPI\uff0c\u8fd9\u4e2aAPI\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u76d1\u542cDOM\u3002\u4f46\u662f\u901a\u8fc7vue\u5b9e\u9645\u4e0a\u5e76\u4e0d\u662f\u901a\u8fc7MutationObserver\uff0c\u800c\u662f\u901a\u8fc7\u4e8b\u4ef6\u5faa\u73af\uff0c\u8ba9nextTick\u5728UI render\u4e4b\u540e\u518d\u6267\u884c\uff0c\u8fd9\u6837\u5c31\u80fd\u8bbf\u95ee\u5230\u66f4\u65b0\u540e\u7684DOM\u4e86\u3002\u5728\u65f6\u95f4\u5faa\u73af\u4e2d\u5b8f\u4efb\u52a1\u603b\u662f\u8981\u7b49\u5230\u5fae\u4efb\u52a1\u6267\u884c\u5b8c\u6bd5\u4e4b\u540e\u518d\u6267\u884c\uff0c\u5f53\u8c03\u7528nextTick\u7684\u65f6\u5019\uff0c\u4f1a\u5728\u66f4\u65b0DOM\u7684\u5fae\u4efb\u52a1\u961f\u5217\u540e\u8ffd\u52a0\u6211\u4eec\u81ea\u5df1\u7684\u56de\u8c03\u51fd\u6570\uff0c\u4ece\u800c\u80fd\u591f\u4fdd\u8bc1\u6211\u4eec\u7684\u56de\u8c03\u51fd\u6570\u662f\u5728DOM\u6e32\u67d3\u5b8c\u6210\u4e4b\u540e\u88ab\u6267\u884c\u7684\u3002")))}s.isMDXComponent=!0}}]);