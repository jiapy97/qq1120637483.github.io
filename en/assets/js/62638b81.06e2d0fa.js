"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[17581],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(t),f=a,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||i;return t?r.createElement(d,o(o({ref:n},u),{},{components:t})):r.createElement(d,o({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},55291:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],l={title:"Vue3\u4e2d\u4f7f\u7528mixin\u5b9e\u73b0\u7ec4\u4ef6\u529f\u80fd\u7684\u590d\u7528",date:new Date("2021-12-27T00:00:00.000Z"),author:"Justin",top:!1,cover:!1,categories:"Vue",tags:["Vue"]},s=void 0,c={permalink:"/en/Vue3\u4e2d\u4f7f\u7528mixin\u5b9e\u73b0\u7ec4\u4ef6\u529f\u80fd\u7684\u590d\u7528",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/Vue3\u4e2d\u4f7f\u7528mixin\u5b9e\u73b0\u7ec4\u4ef6\u529f\u80fd\u7684\u590d\u7528.md",source:"@site/blog/Vue3\u4e2d\u4f7f\u7528mixin\u5b9e\u73b0\u7ec4\u4ef6\u529f\u80fd\u7684\u590d\u7528.md",title:"Vue3\u4e2d\u4f7f\u7528mixin\u5b9e\u73b0\u7ec4\u4ef6\u529f\u80fd\u7684\u590d\u7528",description:"\u4e00\u3001\u5982\u4f55\u4f7f\u7528mixins?",date:"2021-12-27T00:00:00.000Z",formattedDate:"December 27, 2021",tags:[{label:"Vue",permalink:"/en/tags/vue"}],readingTime:1.14,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"Vue3\u4e2d\u4f7f\u7528mixin\u5b9e\u73b0\u7ec4\u4ef6\u529f\u80fd\u7684\u590d\u7528",date:"2021-12-27T00:00:00.000Z",author:"Justin",top:!1,cover:!1,categories:"Vue",tags:["Vue"]},prevItem:{title:"\u5251\u6307Offer\u2014\u2014\u5bf9\u79f0\u7684\u4e8c\u53c9\u6811\uff08JS\u5b9e\u73b0\uff09",permalink:"/en/\u5251\u6307Offer\u2014\u2014\u5bf9\u79f0\u7684\u4e8c\u53c9\u6811\uff08JS\u5b9e\u73b0\uff09"},nextItem:{title:"\u7cfb\u7edf\u68b3\u7406Webpack\u914d\u7f6e",permalink:"/en/\u7cfb\u7edf\u68b3\u7406Webpack\u914d\u7f6e"}},u={authorsImageUrls:[void 0]},p=[{value:"\u4e00\u3001\u5982\u4f55\u4f7f\u7528mixins?",id:"\u4e00\u5982\u4f55\u4f7f\u7528mixins",level:2},{value:"\u4e8c\u3001mixins\u548c\u7ec4\u4ef6\u90fd\u6709\u7684\u53d8\u91cf\u4ee5\u8c01\u4e3a\u4e3b\uff1f",id:"\u4e8cmixins\u548c\u7ec4\u4ef6\u90fd\u6709\u7684\u53d8\u91cf\u4ee5\u8c01\u4e3a\u4e3b",level:2},{value:"\u4e09\u3001\u5168\u5c40\u914d\u7f6emixins",id:"\u4e09\u5168\u5c40\u914d\u7f6emixins",level:2}],m={toc:p};function f(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u4e00\u5982\u4f55\u4f7f\u7528mixins"},"\u4e00\u3001\u5982\u4f55\u4f7f\u7528mixins?"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"mixins\u4e3b\u8981\u662f\u8fdb\u884c\u903b\u8f91\u7684\u590d\u7528\uff0c\u4e0b\u9762\u6211\u4eec\u8be6\u7ec6\u4ecb\u7ecd\u4e0bmixins\u7684\u4e3b\u8981\u4f7f\u7528\u6b65\u9aa4\u3002")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5728script\u6807\u7b7e\u4e2d\u5b9a\u4e49\u597d\u8981\u7528\u7684mixins\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const baseMixin = {\n  data() {\n    return {\n      apiUrl: "http://xxxxxx"\n    }\n  },\n  methods: {\n    success() {\n      console.log("\u6210\u529f");\n    }\n  }\n}\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u5f15\u5165mixins\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'export default {\n  mixins: [baseMixin],\n  data() {\n    return {\n      msg: "\u9996\u9875"\n    }\n  },\n  components: {\n\n  }\n}\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"\u5728template\u4e2d\u901a\u8fc7\u8bed\u6cd5\u8fdb\u884c\u5f15\u7528\u5373\u53ef\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{{apiUrl}}\n")),(0,i.kt)("h2",{id:"\u4e8cmixins\u548c\u7ec4\u4ef6\u90fd\u6709\u7684\u53d8\u91cf\u4ee5\u8c01\u4e3a\u4e3b"},"\u4e8c\u3001mixins\u548c\u7ec4\u4ef6\u90fd\u6709\u7684\u53d8\u91cf\u4ee5\u8c01\u4e3a\u4e3b\uff1f"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u662f\u4ee5\u7ec4\u4ef6\u7684\u53d8\u91cf\u6216\u51fd\u6570\u4e3a\u4e3b\uff0c\u8bf7\u770b\u4e0b\u9762\u7684\u4ee3\u7801\uff0c\u6700\u7ec8\u9875\u9762\u4e0a\u663e\u793a\u7684\u5185\u5bb9\u662f\u201c\u6765\u81ea\u7ec4\u4ef6\u7684msg\u201d\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'<template>\n  <div class="container">\n    \u9996\u9875\u6a21\u677f----{{msg}}\n    <br>\n    <button @click="success()">\u70b9\u51fb\u89e6\u53d1\u6210\u529f</button>\n  </div>\n</template>\n<script>\nconst baseMixin = {\n  data() {\n    return {\n      apiUrl: "http://jpy.wiki",\n      msg: "\u8fd9\u662f\u6765\u81eamixins\u7684 msg"\n    }\n  },\n  methods: {\n    success() {\n      console.log("\u6210\u529f");\n    }\n  }\n}\nexport default {\n  mixins: [baseMixin],\n  data() {\n    return {\n      msg: "\u8fd9\u662f\u6765\u81ea\u7ec4\u4ef6\u7684msg"\n    }\n  },\n  components: {\n\n  }\n}\n<\/script>\n')),(0,i.kt)("h2",{id:"\u4e09\u5168\u5c40\u914d\u7f6emixins"},"\u4e09\u3001\u5168\u5c40\u914d\u7f6emixins"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5bf9\u5916\u66b4\u9732mixin\u51fd\u6570\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const baseMixin = {\n  data() {\n    return {\n      apiUrl: "http://jpy.wiki",\n      msg: "\u8fd9\u662f\u6765\u81eamixins\u7684 msg"\n    }\n  },\n  methods: {\n    success() {\n      console.log("\u6210\u529f");\n    }\n  }\n}\nexport default baseMixin;\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u5728main.js\u4e2d\u5f15\u5165mixin\u5e76\u5bf9\u5916\u66b4\u9732\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import baseMixin from './mixin/baseMixin';\nconst app = createApp(App);\napp.mixin(baseMixin);\napp.mount('#app');\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"\u5728\u7ec4\u4ef6\u4e2d\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'<template>\n  <div class="container">\n    \u9996\u9875\u6a21\u677f----{{msg}}\n    <br>\n    <button @click="success()">\u70b9\u51fb\u89e6\u53d1\u6210\u529f</button>\n  </div>\n</template>\n')))}f.isMDXComponent=!0}}]);