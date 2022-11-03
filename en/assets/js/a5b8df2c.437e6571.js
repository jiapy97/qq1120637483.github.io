"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[37615],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,f=s["".concat(p,".").concat(d)]||s[d]||m[d]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},90846:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={title:"LeetCode\u2014\u2014LRU \u7f13\u5b58\u673a\u5236\uff08\u501f\u52a9Map\uff09",date:"2021-9-9",author:"Justin",top:!1,cover:!1,categories:"LeetCode",tags:["LeetCode"]},p=void 0,u={permalink:"/en/LeetCode\u2014\u2014LRU \u7f13\u5b58\u673a\u5236\uff08\u501f\u52a9Map\uff09",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/LeetCode\u2014\u2014LRU \u7f13\u5b58\u673a\u5236\uff08\u501f\u52a9Map\uff09.md",source:"@site/blog/LeetCode\u2014\u2014LRU \u7f13\u5b58\u673a\u5236\uff08\u501f\u52a9Map\uff09.md",title:"LeetCode\u2014\u2014LRU \u7f13\u5b58\u673a\u5236\uff08\u501f\u52a9Map\uff09",description:"\u9898\u76ee\u63cf\u8ff0",date:"2021-09-09T00:00:00.000Z",formattedDate:"September 9, 2021",tags:[{label:"LeetCode",permalink:"/en/tags/leet-code"}],readingTime:1.57,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"LeetCode\u2014\u2014LRU \u7f13\u5b58\u673a\u5236\uff08\u501f\u52a9Map\uff09",date:"2021-9-9",author:"Justin",top:!1,cover:!1,categories:"LeetCode",tags:["LeetCode"]},prevItem:{title:"\u524d\u7aef\u9762\u8bd5\u4e0d\u4f1a\u76f4\u63a5\u6302\u6389\u7684\u9898\u76ee--\u5192\u6ce1\u6392\u5e8f",permalink:"/en/\u524d\u7aef\u9762\u8bd5\u4e0d\u4f1a\u76f4\u63a5\u6302\u6389\u7684\u9898\u76ee--\u5192\u6ce1\u6392\u5e8f"},nextItem:{title:"\u4e8c\u5237--\u4e8c\u53c9\u6811\u7684\u6700\u8fd1\u516c\u5171\u7956\u5148",permalink:"/en/\u4e8c\u5237--\u4e8c\u53c9\u6811\u7684\u6700\u8fd1\u516c\u5171\u7956\u5148"}},c={authorsImageUrls:[void 0]},m=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u89e3\u9898\u601d\u8def",id:"\u89e3\u9898\u601d\u8def",level:2},{value:"1: \u521d\u59cb\u5316\u6784\u9020\u51fd\u6570",id:"1-\u521d\u59cb\u5316\u6784\u9020\u51fd\u6570",level:3},{value:"2\uff1a\u5b9e\u73b0get\u65b9\u6cd5",id:"2\u5b9e\u73b0get\u65b9\u6cd5",level:3},{value:"3\uff1a\u5b9e\u73b0put\u65b9\u6cd5",id:"3\u5b9e\u73b0put\u65b9\u6cd5",level:3},{value:"\u9898\u76ee\u53cd\u601d",id:"\u9898\u76ee\u53cd\u601d",level:2}],s={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u9898\u76ee\u63cf\u8ff0"},"\u9898\u76ee\u63cf\u8ff0"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/2334001134d15ad82ee518db33291848.png",alt:"image.png"})),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/e172d2644b8e67da1bb999700ebf86ff.png",alt:"image.png"})),(0,l.kt)("h2",{id:"\u89e3\u9898\u601d\u8def"},"\u89e3\u9898\u601d\u8def"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u4e4b\u524d\uff0c\u6211\u4eec\u9996\u5148\u8981\u8bfb\u61c2\u9898\u610f\uff0c\u77e5\u9053\u4ec0\u4e48\u662fLRU\u7f13\u5b58\u673a\u5236\uff0cLRU\u7f13\u5b58\u673a\u5236\u6307\u7684\u662f\u4f18\u5148\u5220\u9664\u90a3\u4e9b\u6700\u4e45\u672a\u4f7f\u7528\u7684\u7f13\u5b58\uff0c\u5728\u672c\u9898\u4e2d\uff0c\u4e00\u4e2a\u7f13\u5b58\u88abput\u6216\u8005get\u90fd\u7b97\u662f\u4e00\u6b21\u4f7f\u7528\uff0c\u660e\u767d\u8fd9\u4e00\u70b9\uff0c\u4e5f\u5c31\u7406\u89e3\u4e86\u672c\u9898\u7684\u6838\u5fc3\u9898\u610f\u3002")),(0,l.kt)("h3",{id:"1-\u521d\u59cb\u5316\u6784\u9020\u51fd\u6570"},"1: \u521d\u59cb\u5316\u6784\u9020\u51fd\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var LRUCache = function (capacity) {\n    this.capacity = capacity;\n    this.map = new Map();\n};\n")),(0,l.kt)("h3",{id:"2\u5b9e\u73b0get\u65b9\u6cd5"},"2\uff1a\u5b9e\u73b0get\u65b9\u6cd5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5224\u65admap\u4e2d\u662f\u90fd\u6709\u76ee\u6807key\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u5219\u8fd4\u56de-1"),(0,l.kt)("li",{parentName:"ul"},"\u6709\uff0c\u5219\u4fdd\u5b58\u5bf9\u5e94\u7684\u503c\uff0c\u7136\u540e\u5220\u9664\u952e\u503c\u5bf9\uff0c\u91cd\u65b0\u5b58\uff0c\u7136\u540e\u8fd4\u56de\u5bf9\u5e94\u7684\u503c\u3002\u8fd9\u91cc\u4e4b\u6240\u4ee5\u8981\u8fdb\u884c\u91cd\u65b0\u5b58\u50a8\uff0c\u662f\u4e3a\u4e86\u66f4\u65b0\u9996\u4e2a\u5143\u7d20\u4e3a\u6700\u4e45\u672a\u4f7f\u7528\u7684\u5143\u7d20\u3002")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"LRUCache.prototype.get = function (key) {\n    // \u5982\u679cmap\u4e2d\u6709\u8fd9\u4e2akey\u5b58\u5728\u5219\u8fd4\u56de\uff0c\u53cd\u4e4b\u8fd4\u56de-1\n    if (this.map.has(key)) {\n        const value = this.map.get(key);\n        this.map.delete(key);\n        this.map.set(key,value)\n        return this.map.get(key);\n    } else {\n        return -1;\n    }\n};\n")),(0,l.kt)("h3",{id:"3\u5b9e\u73b0put\u65b9\u6cd5"},"3\uff1a\u5b9e\u73b0put\u65b9\u6cd5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9996\u5148\u5224\u65ad\u8981\u5b58\u50a8\u7684key\u662f\u5426\u5b58\u5728",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5b58\u5728\uff1a\u5220\u9664\u8fdb\u884c\u91cd\u65b0\u5b58\u50a8"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u5b58\u5728\uff1a\u9996\u5148\u5224\u65admap\u7684\u5c3a\u5bf8\u662f\u5426\u5927\u4e8e\u6784\u9020\u51fd\u6570\u4e2d\u7684\u5bb9\u91cf\uff0c\u5982\u679c\u5927\u4e8e\u5219\u5220\u9664map\u7684\u9996\u5143\u7d20\uff0c\u5220\u9664\u65b9\u6cd5\u662f",(0,l.kt)("inlineCode",{parentName:"li"},"map.entries().next().value[0]"),",\u5982\u679c\u4e0d\u5927\u4e8e\u5219\u76f4\u63a5\u5b58\u50a8\u3002")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"LRUCache.prototype.put = function (key, value) {\n    // \u9996\u5148\u5224\u65ad\u8fd9\u4e2akey\u5b58\u5728\u5417\uff0c\u5b58\u5728\u5219\u5220\u9664\uff0c\u91cd\u65b0\u653e\u7f6e \u53cd\u4e4b\u76f4\u63a5\u653e\u7f6e\n    if (this.map.has(key)) {\n        this.map.delete(key);\n        this.map.set(key,value);\n    } else {\n        // \u5224\u65admap\u7684\u5927\u5c0f\u662f\u5426\u6bd4\u9898\u76ee\u7ed9\u5b9a\u7684\u5bb9\u91cf\u5927\n        if (this.map.size >= this.capacity) {\n            this.map.delete(this.map.entries().next().value[0]);\n            this.map.set(key,value)\n        } else {\n            this.map.set(key,value)\n        }\n    }\n};\n")),(0,l.kt)("h2",{id:"\u9898\u76ee\u53cd\u601d"},"\u9898\u76ee\u53cd\u601d"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u672c\u9898\u5e94\u8be5\u5b66\u4f1a\u4f7f\u7528map\u7684\u5404\u79cdAPI\uff0c\u4ece\u8fd9\u9898\u53ef\u4ee5\u770b\u51fa\uff0c\u6211\u5bf9map\u7684\u5404\u79cdAPI\u8fd8\u4e0d\u591f\u719f\u7cfb\u3002"),(0,l.kt)("li",{parentName:"ul"},"map.entries()\u53d8\u4e3a\u4e86\u4e00\u4e2a\u53ef\u8fed\u4ee3\u7684\u5bf9\u8c61\u3002"),(0,l.kt)("li",{parentName:"ul"},"next()\u4f1a\u5c06\u4e00\u4e2a\u53ef\u8fed\u4ee3\u5bf9\u8c61\u53d8\u4e3a\u4e00\u4e2a\u666e\u901a\u5bf9\u8c61\u3002")))}d.isMDXComponent=!0}}]);