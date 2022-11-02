"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[16872],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var l=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=l.createContext({}),u=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return l.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,k=d["".concat(c,".").concat(h)]||d[h]||s[h]||a;return n?l.createElement(k,r(r({ref:t},p),{},{components:n})):l.createElement(k,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var u=2;u<a;u++)r[u]=n[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82936:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var l=n(87462),o=(n(67294),n(3905));const a={title:"\u5927\u5382\u9762\u8bd5\u5fc5\u987b\u638c\u63e1\u7684\u516d\u79cd\u7ee7\u627f\u65b9\u5f0f\uff0c\u4f60\u4f1a\u5417\uff1f",date:"2021-9-5",author:"Justin",top:!1,cover:!1,categories:"\u9762\u8bd5\u9898",tags:["\u9762\u8bd5\u9898"]},r=void 0,i={permalink:"/blog/\u5927\u5382\u9762\u8bd5\u5fc5\u987b\u638c\u63e1\u7684\u516d\u79cd\u7ee7\u627f\u65b9\u5f0f\uff0c\u4f60\u4f1a\u5417\uff1f",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/\u5927\u5382\u9762\u8bd5\u5fc5\u987b\u638c\u63e1\u7684\u516d\u79cd\u7ee7\u627f\u65b9\u5f0f\uff0c\u4f60\u4f1a\u5417\uff1f.md",source:"@site/blog/\u5927\u5382\u9762\u8bd5\u5fc5\u987b\u638c\u63e1\u7684\u516d\u79cd\u7ee7\u627f\u65b9\u5f0f\uff0c\u4f60\u4f1a\u5417\uff1f.md",title:"\u5927\u5382\u9762\u8bd5\u5fc5\u987b\u638c\u63e1\u7684\u516d\u79cd\u7ee7\u627f\u65b9\u5f0f\uff0c\u4f60\u4f1a\u5417\uff1f",description:"\u535a\u4e3b\u5728\u9605\u8bfb\u5927\u91cf\u9762\u7ecf\u6587\u7ae0\u65f6\u53d1\u73b0\u65e0\u8bba\u662f\u5927\u5382\u9762\u8bd5\u8fd8\u662f\u5c0f\u5382\u9762\u8bd5\uff0c\u65e0\u8bba\u662f\u793e\u62db\u8fd8\u662f\u6821\u62db\uff0c\u53ea\u8981\u8003\u67e5JS\u57fa\u7840\uff0c\u7ee7\u627f\u3001\u539f\u578b\u3001\u539f\u578b\u94fe\u90fd\u662f\u7ed5\u4e0d\u5f00\u7684\u8bdd\u9898\uff0c\u6240\u4ee5\u672c\u6b21\u5e0c\u671b\u548c\u5927\u5bb6\u4e00\u8d77\u5b66\u4e60\u5fc5\u987b\u638c\u63e1\u7684\u4e03\u79cd\u7ee7\u627f\u65b9\u5f0f\uff0c\u535a\u4e3b\u5c06\u7ec6\u81f4\u7684\u5206\u6790\u6bcf\u4e00\u79cd\u7ee7\u627f\u65b9\u5f0f\u7684\u539f\u7406\u3001\u4f18\u7f3a\u70b9\u5e76\u7ed9\u51fa\u5728\u7ebf\u7684\u5b9e\u73b0\u65b9\u5f0f\uff0c\u8fd9\u4e0d\u4ec5\u4ec5\u5bf9\u9762\u8bd5\u6709\u5e2e\u52a9\uff0c\u8fd8\u5bf9\u6211\u4eec\u7406\u89e3JS\u7684\u8fd0\u884c\u673a\u5236\u6709\u5e2e\u52a9\uff0c\u8ba9\u6211\u4eec\u4e00\u8d77\u52a0\u6cb9\u5427~\u987a\u4fbf\u7ed9\u4e2a\u8d5e\u54e6\uff01",date:"2021-09-05T00:00:00.000Z",formattedDate:"2021\u5e749\u67085\u65e5",tags:[{label:"\u9762\u8bd5\u9898",permalink:"/blog/tags/\u9762\u8bd5\u9898"}],readingTime:8.145,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"\u5927\u5382\u9762\u8bd5\u5fc5\u987b\u638c\u63e1\u7684\u516d\u79cd\u7ee7\u627f\u65b9\u5f0f\uff0c\u4f60\u4f1a\u5417\uff1f",date:"2021-9-5",author:"Justin",top:!1,cover:!1,categories:"\u9762\u8bd5\u9898",tags:["\u9762\u8bd5\u9898"]},prevItem:{title:"\u5b66\u4f1a\u4f7f\u7528useMemo\u548cuseCallback\u5bf9\u4f60\u6ca1\u574f\u5904",permalink:"/blog/\u5b66\u4f1a\u4f7f\u7528useMemo\u548cuseCallback\u5bf9\u4f60\u6ca1\u574f\u5904"},nextItem:{title:"\u3010\u9752\u8bad\u8425\u3011- JavaScript\u4e2d\u7684\u8bbe\u8ba1\u6a21\u5f0f\u7b14\u8bb0",permalink:"/blog/\u3010\u9752\u8bad\u8425\u3011- JavaScript\u4e2d\u7684\u8bbe\u8ba1\u6a21\u5f0f\u7b14\u8bb0"}},c={authorsImageUrls:[void 0]},u=[{value:"1\uff1a\u539f\u578b\u94fe\u7ee7\u627f",id:"1\u539f\u578b\u94fe\u7ee7\u627f",level:2},{value:"\u539f\u7406",id:"\u539f\u7406",level:3},{value:"\u5b9e\u73b0\u4ee3\u7801",id:"\u5b9e\u73b0\u4ee3\u7801",level:3},{value:"\u4f18\u7f3a\u70b9",id:"\u4f18\u7f3a\u70b9",level:3},{value:"\u5728\u7ebf\u5b9e\u73b0",id:"\u5728\u7ebf\u5b9e\u73b0",level:3},{value:"2. \u6784\u9020\u51fd\u6570\u7ee7\u627f",id:"2-\u6784\u9020\u51fd\u6570\u7ee7\u627f",level:2},{value:"\u539f\u7406",id:"\u539f\u7406-1",level:3},{value:"\u5b9e\u73b0\u4ee3\u7801",id:"\u5b9e\u73b0\u4ee3\u7801-1",level:3},{value:"\u4f18\u7f3a\u70b9",id:"\u4f18\u7f3a\u70b9-1",level:3},{value:"\u5728\u7ebf\u5b9e\u73b0",id:"\u5728\u7ebf\u5b9e\u73b0-1",level:3},{value:"3. \u7ec4\u5408\u7ee7\u627f\uff08\u7ec4\u5408\u6307\u7684\u662f\u7ec4\u5408\u4e86\u539f\u578b\u94fe\u548c\u6784\u9020\u51fd\u6570\u7684\u7ee7\u627f\u65b9\u5f0f\uff09",id:"3-\u7ec4\u5408\u7ee7\u627f\u7ec4\u5408\u6307\u7684\u662f\u7ec4\u5408\u4e86\u539f\u578b\u94fe\u548c\u6784\u9020\u51fd\u6570\u7684\u7ee7\u627f\u65b9\u5f0f",level:2},{value:"\u539f\u7406",id:"\u539f\u7406-2",level:3},{value:"\u5b9e\u73b0\u4ee3\u7801",id:"\u5b9e\u73b0\u4ee3\u7801-2",level:3},{value:"\u4f18\u7f3a\u70b9",id:"\u4f18\u7f3a\u70b9-2",level:3},{value:"\u5728\u7ebf\u5b9e\u73b0",id:"\u5728\u7ebf\u5b9e\u73b0-2",level:3},{value:"4: \u539f\u578b\u5f0f\u7ee7\u627f",id:"4-\u539f\u578b\u5f0f\u7ee7\u627f",level:2},{value:"\u539f\u7406",id:"\u539f\u7406-3",level:3},{value:"\u5b9e\u73b0\u4ee3\u7801",id:"\u5b9e\u73b0\u4ee3\u7801-3",level:3},{value:"\u4f18\u7f3a\u70b9",id:"\u4f18\u7f3a\u70b9-3",level:3},{value:"\u5728\u7ebf\u5b9e\u73b0",id:"\u5728\u7ebf\u5b9e\u73b0-3",level:3},{value:"5\uff1a\u5bc4\u751f\u5f0f\u7ee7\u627f",id:"5\u5bc4\u751f\u5f0f\u7ee7\u627f",level:2},{value:"\u539f\u7406",id:"\u539f\u7406-4",level:3},{value:"\u5b9e\u73b0\u4ee3\u7801",id:"\u5b9e\u73b0\u4ee3\u7801-4",level:3},{value:"\u4f18\u7f3a\u70b9",id:"\u4f18\u7f3a\u70b9-4",level:3},{value:"\u5728\u7ebf\u5b9e\u73b0",id:"\u5728\u7ebf\u5b9e\u73b0-4",level:3},{value:"6\uff1a\u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f",id:"6\u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f",level:2},{value:"\u539f\u7406",id:"\u539f\u7406-5",level:3},{value:"\u5b9e\u73b0\u4ee3\u7801",id:"\u5b9e\u73b0\u4ee3\u7801-5",level:3},{value:"\u4f18\u7f3a\u70b9",id:"\u4f18\u7f3a\u70b9-5",level:3},{value:"\u5728\u7ebf\u5b9e\u73b0",id:"\u5728\u7ebf\u5b9e\u73b0-5",level:3},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],p={toc:u};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u535a\u4e3b\u5728\u9605\u8bfb\u5927\u91cf\u9762\u7ecf\u6587\u7ae0\u65f6\u53d1\u73b0\u65e0\u8bba\u662f\u5927\u5382\u9762\u8bd5\u8fd8\u662f\u5c0f\u5382\u9762\u8bd5\uff0c\u65e0\u8bba\u662f\u793e\u62db\u8fd8\u662f\u6821\u62db\uff0c\u53ea\u8981\u8003\u67e5JS\u57fa\u7840\uff0c\u7ee7\u627f\u3001\u539f\u578b\u3001\u539f\u578b\u94fe\u90fd\u662f\u7ed5\u4e0d\u5f00\u7684\u8bdd\u9898\uff0c\u6240\u4ee5\u672c\u6b21\u5e0c\u671b\u548c\u5927\u5bb6\u4e00\u8d77\u5b66\u4e60\u5fc5\u987b\u638c\u63e1\u7684\u4e03\u79cd\u7ee7\u627f\u65b9\u5f0f\uff0c\u535a\u4e3b\u5c06\u7ec6\u81f4\u7684\u5206\u6790\u6bcf\u4e00\u79cd\u7ee7\u627f\u65b9\u5f0f\u7684\u539f\u7406\u3001\u4f18\u7f3a\u70b9\u5e76\u7ed9\u51fa\u5728\u7ebf\u7684\u5b9e\u73b0\u65b9\u5f0f\uff0c\u8fd9\u4e0d\u4ec5\u4ec5\u5bf9\u9762\u8bd5\u6709\u5e2e\u52a9\uff0c\u8fd8\u5bf9\u6211\u4eec\u7406\u89e3JS\u7684\u8fd0\u884c\u673a\u5236\u6709\u5e2e\u52a9\uff0c\u8ba9\u6211\u4eec\u4e00\u8d77\u52a0\u6cb9\u5427~\u987a\u4fbf\u7ed9\u4e2a\u8d5e\u54e6\uff01")),(0,o.kt)("h2",{id:"1\u539f\u578b\u94fe\u7ee7\u627f"},"1\uff1a\u539f\u578b\u94fe\u7ee7\u627f"),(0,o.kt)("h3",{id:"\u539f\u7406"},"\u539f\u7406"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u539f\u578b\u94fe\u7ee7\u627f\u7684\u539f\u7406\u662f\u5229\u7528\u539f\u578b\u5bf9\u8c61\u548c\u5b9e\u4f8b\u4e4b\u95f4\u7684\u5173\u7cfb\u5b9e\u73b0\u7ee7\u627f\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u5b9e\u73b0\u8fd9\u79cd\u7ee7\u627f\u7684\u5173\u952e\u5728\u4e8e\u8ba9\u5b50\u7c7b\u7684\u539f\u578b\u5bf9\u8c61\u6307\u5411\u65b0\u521b\u5efa\u7684\u7236\u7c7b\u5b9e\u4f8b\u3002"))),(0,o.kt)("h3",{id:"\u5b9e\u73b0\u4ee3\u7801"},"\u5b9e\u73b0\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// 1\uff1a\u539f\u578b\u94fe\u7ee7\u627f\nfunction Father() {\n    this.name = 'justin';\n}\nFather.prototype.getName = function () {\n    return this.name\n}\n\nfunction Child() { }\nChild.prototype = new Father();\nconst child = new Child();\nconsole.log(child.getName());\n")),(0,o.kt)("h3",{id:"\u4f18\u7f3a\u70b9"},"\u4f18\u7f3a\u70b9"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f18\u70b9\uff1a\u5b9e\u4f8b\u53ef\u4ee5\u7ee7\u627f\u7684\u5c5e\u6027\u5305\u62ec\uff1a\u5b9e\u4f8b\u7684\u6784\u9020\u51fd\u6570\u7684\u5c5e\u6027\uff0c\u7236\u7c7b\u6784\u9020\u51fd\u6570\u7684\u5c5e\u6027\uff0c\u7236\u7c7b\u539f\u578b\u5bf9\u8c61\u4e0a\u7684\u5c5e\u6027\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u7f3a\u70b9\uff1a\u4e00\u4e2a\u5b9e\u4f8b\u4fee\u6539\u4e86\u539f\u578b\u5bf9\u8c61\u4e0a\u7684\u5c5e\u6027\uff0c\u53e6\u4e00\u4e2a\u5b9e\u4f8b\u7684\u539f\u578b\u5c5e\u6027\u4e5f\u4f1a\u88ab\u4fee\u6539\u3002\u65b0\u5b9e\u4f8b\u65e0\u6cd5\u5411\u7236\u7c7b\u6784\u9020\u51fd\u6570\u4f20\u53c2\u3002",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"\u4e0b\u9762\u8fd9\u4e2a\u4f8b\u5b50\u5c55\u793a\u4e86\uff0c\u539f\u578b\u94fe\u7ee7\u627f\u7684\u7f3a\u70b9\n",(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/b1a755287a8cf12b5a0c80a7d0b6a5d0.png",alt:"image.png"}))))),(0,o.kt)("h3",{id:"\u5728\u7ebf\u5b9e\u73b0"},"\u5728\u7ebf\u5b9e\u73b0"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/1-yuan-xing-lian-ji-cheng-30ffv"},"codeSandBox")),(0,o.kt)("h2",{id:"2-\u6784\u9020\u51fd\u6570\u7ee7\u627f"},"2. \u6784\u9020\u51fd\u6570\u7ee7\u627f"),(0,o.kt)("h3",{id:"\u539f\u7406-1"},"\u539f\u7406"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6784\u9020\u51fd\u6570\u7ee7\u627f\u7684\u6838\u5fc3\u5728\u4e8e\uff1a\u5728\u5b50\u7c7b\u6784\u9020\u51fd\u6570\u4e2d\u901a\u8fc7\u7236\u7c7b\u6784\u9020\u51fd\u6570.call(this)\u6765\u5b9e\u73b0\u7ee7\u627f\u3002")),(0,o.kt)("h3",{id:"\u5b9e\u73b0\u4ee3\u7801-1"},"\u5b9e\u73b0\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// 2\uff1a\u6784\u9020\u51fd\u6570\u7ee7\u627f\nfunction Father() {\n    this.name = 'justin';\n    this.say = {haha: 111}\n}\n\nfunction Child(age) {\n    Father.call(this);\n    this.age = age;\n}\n\nconst child1 = new Child(10);\nconst child2 = new Child(20);\n\nchild1.say.haha = 222;\n\nconsole.log(child1);\nconsole.log(child2);\n")),(0,o.kt)("h3",{id:"\u4f18\u7f3a\u70b9-1"},"\u4f18\u7f3a\u70b9"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f18\u70b9")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u7ee7\u627f\u591a\u4e2a\u6784\u9020\u51fd\u6570\u5c5e\u6027\uff08\u901a\u8fc7\u591a\u6b21call\u7684\u8c03\u7528\uff09"),(0,o.kt)("li",{parentName:"ol"},"\u89e3\u51b3\u4e86\u539f\u578b\u94fe\u7ee7\u627f\u4e2d\u5b9e\u4f8b\u5171\u4eab\u5f15\u7528\u7c7b\u578b\u7684\u95ee\u9898"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u5b50\u5b9e\u4f8b\u4e2d\u53ef\u4ee5\u5411\u7236\u5b9e\u4f8b\u4e2d\u4f20\u53c2")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7f3a\u70b9")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u53ea\u7ee7\u627f\u4e86\u7236\u7c7b\u6784\u9020\u51fd\u6570\u7684\u5c5e\u6027\uff0c\u6ca1\u6709\u7ee7\u627f\u7236\u7c7b\u539f\u578b\u5bf9\u8c61\u4e0a\u7684\u5c5e\u6027\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u65e0\u6cd5\u5b9e\u73b0\u7236\u7c7b\u6784\u9020\u51fd\u6570\u7684\u590d\u7528\uff0c\u6bcf\u6b21\u90fd\u8981\u91cd\u65b0\u8c03\u7528")),(0,o.kt)("h3",{id:"\u5728\u7ebf\u5b9e\u73b0-1"},"\u5728\u7ebf\u5b9e\u73b0"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/2-gou-zao-han-shu-ji-cheng-mpsir?file=/index.html"},"codeSandBox")),(0,o.kt)("h2",{id:"3-\u7ec4\u5408\u7ee7\u627f\u7ec4\u5408\u6307\u7684\u662f\u7ec4\u5408\u4e86\u539f\u578b\u94fe\u548c\u6784\u9020\u51fd\u6570\u7684\u7ee7\u627f\u65b9\u5f0f"},"3. \u7ec4\u5408\u7ee7\u627f\uff08\u7ec4\u5408\u6307\u7684\u662f\u7ec4\u5408\u4e86\u539f\u578b\u94fe\u548c\u6784\u9020\u51fd\u6570\u7684\u7ee7\u627f\u65b9\u5f0f\uff09"),(0,o.kt)("h3",{id:"\u539f\u7406-2"},"\u539f\u7406"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u7ed3\u5408\u4e86\u539f\u578b\u94fe\u548c\u6784\u9020\u51fd\u6570\u7684\u7ee7\u627f\u65b9\u5f0f\uff0c\u4e00\u662f\u901a\u8fc7\u5728\u5b50\u7c7b\u6784\u9020\u51fd\u6570\u4e2d\u8ba9\u7236\u7c7b\u6784\u9020\u51fd\u6570\u8c03\u7528call\u4fee\u6539this\u6307\u5411\uff0c\u4e8c\u662f\u8ba9\u5b50\u7c7b\u6784\u9020\u51fd\u6570\u7684\u539f\u578b\u5bf9\u8c61\u6307\u5411\u7236\u7c7b\u6784\u9020\u51fd\u6570\u7684\u5b9e\u4f8b\u3002")),(0,o.kt)("h3",{id:"\u5b9e\u73b0\u4ee3\u7801-2"},"\u5b9e\u73b0\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// 3\uff1a\u7ec4\u5408\u7ee7\u627f\uff08\u7ec4\u5408\u6307\u7684\u662f\u7ec4\u5408\u4e86\u539f\u578b\u94fe\u7ee7\u627f\u548c\u6784\u9020\u51fd\u6570\u7ee7\u627f\uff09\nfunction Father(age) {\n    this.colors = ['red','pink'];\n    this.age = age;\n}\nFather.prototype.say = () => '\u4f60\u597d';\nfunction Child(name,age) {\n    // \u6784\u9020\u51fd\u6570\u7684\u65b9\u5f0f\n    Father.call(this,age);\n    this.name = name;\n} \n// \u539f\u578b\u94fe\nChild.prototype = new Father();\nChild.prototype.constructor = Child;\n\nconst child1 = new Child('\u5f20\u4e09',20);\nconst child2 = new Child('\u674e\u56db',25);\nChild.prototype\nchild1\nchild1.colors.push('black');\nconsole.log(child1.colors);\nconsole.log(child2.colors);\nconsole.log(child1.say());\n")),(0,o.kt)("h3",{id:"\u4f18\u7f3a\u70b9-2"},"\u4f18\u7f3a\u70b9"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f18\u70b9")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u7ee7\u627f\u7236\u7c7b\u6784\u9020\u51fd\u6570\u4e0a\u7684\u5c5e\u6027\u548c\u539f\u578b\u5bf9\u8c61\u4e0a\u7684\u5c5e\u6027\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u4f20\u53c2\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u6bcf\u4e2a\u65b0\u5b9e\u4f8b\u5f15\u5165\u7684\u6784\u9020\u51fd\u6570\u5c5e\u6027\u662f\u79c1\u6709\u7684\u3002")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7f3a\u70b9")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u8c03\u7528\u4e86\u4e24\u6b21\u7236\u7c7b\u6784\u9020\u51fd\u6570\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5b50\u7c7b\u5b9e\u4f8b\u4e0a\u7684\u5c5e\u6027\uff0c\u540c\u65f6\u5b58\u5728\u4e8e\u539f\u578b\u94fe\u4e0a\u548c\u5b50\u4f8b\u8eab\u4e0a\uff0c\u9020\u6210\u539f\u578b\u94fe\u6c61\u67d3\u3002")),(0,o.kt)("h3",{id:"\u5728\u7ebf\u5b9e\u73b0-2"},"\u5728\u7ebf\u5b9e\u73b0"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/3-zu-he-ji-cheng-jrem9"},"codeSandBox")),(0,o.kt)("h2",{id:"4-\u539f\u578b\u5f0f\u7ee7\u627f"},"4: \u539f\u578b\u5f0f\u7ee7\u627f"),(0,o.kt)("h3",{id:"\u539f\u7406-3"},"\u539f\u7406"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5229\u7528\u4e00\u4e2a\u7a7a\u51fd\u6570\u4f5c\u4e3a\u4e2d\u4ecb\uff0c\u8ba9\u8fd9\u4e2a\u4e2d\u4ecb\u7684\u539f\u578b\u5bf9\u8c61\u6307\u5411\u9700\u8981\u7ee7\u627f\u7684\u7236\u7c7b\u5bf9\u8c61\uff0c\u7136\u540e\u8fd4\u56de\u8fd9\u4e2a\u51fd\u6570\u7684\u5b9e\u4f8b\uff0c\u5373\u53ef\u5b8c\u6210\u539f\u578b\u5f0f\u7ee7\u627f\u3002")),(0,o.kt)("h3",{id:"\u5b9e\u73b0\u4ee3\u7801-3"},"\u5b9e\u73b0\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// 4\uff1a\u539f\u578b\u5f0f\u7ee7\u627f\nfunction createObj(o) {\n    function F() { };\n    F.prototype = o;\n    return new F();\n}\n\nconst obj = {\n    name: 'justin',\n    friends: [1, 2, 3, 4]\n}\n// \u65b9\u5f0f1\nconst m1 = createObj(obj);\nconst m2 = createObj(obj);\n// \u65b9\u5f0f2\nconst m3 = Object.create(obj);\n\nconsole.log(m1.name);  //justin\nconsole.log(m2.name);  //justin\nm1.friends.push(666);\n\nconsole.log(m1.friends);  // [1,2,3,4,666]\nconsole.log(m2.friends);  // [1,2,3,4,666]\n")),(0,o.kt)("h3",{id:"\u4f18\u7f3a\u70b9-3"},"\u4f18\u7f3a\u70b9"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f18\u70b9")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u7c7b\u4f3c\u4e8e\u590d\u5236\u4e00\u4e2a\u5bf9\u8c61\uff0c\u7528\u51fd\u6570\u6765\u5305\u88c5\u3002")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7f3a\u70b9")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u65e0\u6cd5\u5411\u7236\u7c7b\u4f20\u53c2\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u7236\u7c7b\u7684\u5f15\u7528\u7c7b\u578b\u88ab\u5b50\u7c7b\u5171\u4eab\u3002")),(0,o.kt)("h3",{id:"\u5728\u7ebf\u5b9e\u73b0-3"},"\u5728\u7ebf\u5b9e\u73b0"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/4-yuan-xing-shi-ji-cheng-cp0dq"},"codeSandBox\u5728\u7ebf\u5b9e\u73b0")),(0,o.kt)("h2",{id:"5\u5bc4\u751f\u5f0f\u7ee7\u627f"},"5\uff1a\u5bc4\u751f\u5f0f\u7ee7\u627f"),(0,o.kt)("h3",{id:"\u539f\u7406-4"},"\u539f\u7406"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5bc4\u751f\u5f0f\u7ee7\u627f\u662f\u5728\u539f\u578b\u5f0f\u7ee7\u627f\u7684\u57fa\u7840\u4e0a\u8fdb\u884c\u4e86\u4e00\u6b21\u589e\u5f3a\uff0c\u4e5f\u5c31\u662f\u901a\u8fc7\u589e\u52a0\u4e00\u4e2a\u51fd\u6570\uff0c\u7136\u540e\u6dfb\u52a0\u5c5e\u6027\u5b9e\u73b0\u7ee7\u627f\u3002")),(0,o.kt)("h3",{id:"\u5b9e\u73b0\u4ee3\u7801-4"},"\u5b9e\u73b0\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// 5\uff1a\u5bc4\u751f\u5f0f\u7ee7\u627f\nfunction objCopy(o) {\n    function F() {};\n    F.prototype = o;\n    return new F();\n}\n\nfunction enhanceObj(o) {\n    const clone = objCopy(o);\n    clone.say = function() {\n        return 'hi';\n    }\n    return clone;\n}\n\nconst obj = {\n    name: 'justin',\n    colors: [1,2,3]\n}\n\nconst m1 = enhanceObj(obj);\nconst m2 = enhanceObj(obj);\n\nconsole.log(m1.name);  //justin\nconsole.log(m1.colors); //[1,2,3]\nconsole.log(m1.say());  //hi\n\nm1.colors.push(777)\nconsole.log(m2.colors); // [1,2,3,777]\n")),(0,o.kt)("h3",{id:"\u4f18\u7f3a\u70b9-4"},"\u4f18\u7f3a\u70b9"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f18\u70b9")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u589e\u5f3a\u4e86\u539f\u578b\u5f0f\u7ee7\u627f\u7684\u80fd\u529b\u3002")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7f3a\u70b9")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u65e0\u6cd5\u5411\u7236\u7c7b\u4f20\u53c2\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u7236\u7c7b\u6784\u9020\u51fd\u6570\u7684\u5f15\u7528\u7c7b\u578b\u5bf9\u8c61\u88ab\u5b50\u7c7b\u5b9e\u4f8b\u5171\u4eab\u3002")),(0,o.kt)("h3",{id:"\u5728\u7ebf\u5b9e\u73b0-4"},"\u5728\u7ebf\u5b9e\u73b0"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/5-ji-sheng-shi-ji-cheng-3j7bo"},"codeSandBox\u5728\u7ebf\u5b9e\u73b0")),(0,o.kt)("h2",{id:"6\u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f"},"6\uff1a\u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f"),(0,o.kt)("h3",{id:"\u539f\u7406-5"},"\u539f\u7406"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f\u7ed3\u5408\u4e86\u6784\u9020\u51fd\u6570\u7ee7\u627f\u3001\u5bc4\u751f\u5f0f\u7ee7\u627f\uff0c\u8ba9\u5b50\u7c7b\u7684\u6784\u9020\u51fd\u6570\u7684\u539f\u578b\u5bf9\u8c61\u6307\u5411\u539f\u578b\u5f0f\u7ee7\u627f\u4f20\u8fc7\u6765\u7684\u5b9e\u4f8b\uff0c\u540c\u65f6\u8fd9\u4e2a\u5b9e\u4f8b\u7684\u6784\u9020\u51fd\u6570\u4e5f\u6307\u5411\u5b50\u7c7b\u6784\u9020\u51fd\u6570\uff0c\u522b\u5fd8\u4e86\u5b50\u7c7b\u6784\u9020\u51fd\u6570\u4e2d\u8fd8\u9700\u8981\u7236\u7c7b\u6784\u9020\u51fd\u6570\u901a\u8fc7call\u6539\u53d8this\u6307\u5411\u3002")),(0,o.kt)("h3",{id:"\u5b9e\u73b0\u4ee3\u7801-5"},"\u5b9e\u73b0\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// 6\uff1a\u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f\nfunction Father(name) {\n    this.name = name;\n    this.colors = [1,2,3];\n}\nFather.prototype.say = function() {\n    return 'hi';\n}\n\nfunction Child(name,age) {\n    Father.call(this,name);\n    this.age = age;\n}\nfunction createObj(o) {\n    function F() {}\n    F.prototype = o;\n    return new F();\n}\n\nfunction inheritPrototype(Child,Father) {\n    // \u5148\u6784\u9020\u4e00\u4e2a\u6307\u5411\u7236\u7c7b\u6784\u9020\u51fd\u6570\u539f\u578b\u5bf9\u8c61\u7684\u5bf9\u8c61\n    const prototype = createObj(Father.prototype);\n    // \u8ba9\u8fd9\u4e2a\u5bf9\u8c61\u7684\u6784\u9020\u51fd\u6570\u6307\u5411Child\n    prototype.constructor = Child;\n    Child.prototype = prototype;\n}\ninheritPrototype(Child,Father);\nconst child1 = new Child('justin',666);\nconst child2 = new Child('\u5fc3\u98de\u626c',777);\nconsole.log(child1.colors); //[1,2,3]\nconsole.log(child2.colors); //[1,2,3]\nchild1.colors.push(666);\n\nconsole.log(child1.colors);  // [1,2,3,666]\nconsole.log(child2.colors);  // [1,2,3]\n")),(0,o.kt)("h3",{id:"\u4f18\u7f3a\u70b9-5"},"\u4f18\u7f3a\u70b9"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f18\u70b9\uff1a\u8fd9\u662f\u76ee\u524d\u6700\u4f18\u7684\u4e00\u79cd\u7ee7\u627f\u65b9\u5f0f\u3002")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5b50\u7c7b\u6784\u9020\u51fd\u6570\u53ef\u4ee5\u5411\u7236\u7c7b\u4f20\u53c2\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u53ea\u8c03\u7528\u4e00\u6b21\u7236\u7c7b\u6784\u9020\u51fd\u6570\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u7236\u7c7b\u7684\u5f15\u7528\u7c7b\u578b\u5c5e\u6027\u4e0d\u4f1a\u88ab\u5b50\u7c7b\u5171\u4eab\u3002")),(0,o.kt)("h3",{id:"\u5728\u7ebf\u5b9e\u73b0-5"},"\u5728\u7ebf\u5b9e\u73b0"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/6-ji-sheng-zu-he-shi-ji-cheng-py9kg?file=/index.html"},"codeSandBox\u5728\u7ebf\u5b9e\u73b0")),(0,o.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6914216540468576263"},"JS\u7ee7\u627f \u539f\u578b\u94fe\u7ee7\u627f\u3001\u6784\u9020\u51fd\u6570\u7ee7\u627f\u3001\u7ec4\u5408\u7ee7\u627f\u3001\u539f\u578b\u7ee7\u627f\u3001\u5bc4\u751f\u5f0f\u7ee7\u627f\u3001\u5bc4\u751f\u7ec4\u5408\u7ee7\u627f"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6844903696111763470?utm_source=pocket_mylist"},"JavaScript\u5e38\u7528\u516b\u79cd\u7ee7\u627f\u65b9\u6848"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1Ki4y1L7dY"},"\u76d8\u70b9\u90a3\u4e9b\u9ad8\u9891\u524d\u7aef\u9762\u8bd5\u9898\uff1aJS\u7ee7\u627f\u7684\u516d\u79cd\u65b9\u5f0f")))))}s.isMDXComponent=!0}}]);