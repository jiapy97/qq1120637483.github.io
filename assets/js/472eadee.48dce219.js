"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[49181],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=c(n),g=a,d=s["".concat(u,".").concat(g)]||s[g]||p[g]||l;return n?r.createElement(d,o(o({ref:t},m),{},{components:n})):r.createElement(d,o({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},81871:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"LeetCode\u2014\u2014\u957f\u5ea6\u6700\u5c0f\u7684\u5b50\u6570\u7ec4\uff08\u6ed1\u52a8\u7a97\u53e3\uff09",date:"2021-9-15",author:"Justin",top:!1,cover:!1,categories:"LeetCode",tags:["LeetCode"]},o=void 0,i={permalink:"/blog/LeetCode\u2014\u2014\u957f\u5ea6\u6700\u5c0f\u7684\u5b50\u6570\u7ec4\uff08\u6ed1\u52a8\u7a97\u53e3\uff09",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/LeetCode\u2014\u2014\u957f\u5ea6\u6700\u5c0f\u7684\u5b50\u6570\u7ec4\uff08\u6ed1\u52a8\u7a97\u53e3\uff09.md",source:"@site/blog/LeetCode\u2014\u2014\u957f\u5ea6\u6700\u5c0f\u7684\u5b50\u6570\u7ec4\uff08\u6ed1\u52a8\u7a97\u53e3\uff09.md",title:"LeetCode\u2014\u2014\u957f\u5ea6\u6700\u5c0f\u7684\u5b50\u6570\u7ec4\uff08\u6ed1\u52a8\u7a97\u53e3\uff09",description:"\u9898\u76ee\u63cf\u8ff0",date:"2021-09-15T00:00:00.000Z",formattedDate:"2021\u5e749\u670815\u65e5",tags:[{label:"LeetCode",permalink:"/blog/tags/leet-code"}],readingTime:2.685,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"LeetCode\u2014\u2014\u957f\u5ea6\u6700\u5c0f\u7684\u5b50\u6570\u7ec4\uff08\u6ed1\u52a8\u7a97\u53e3\uff09",date:"2021-9-15",author:"Justin",top:!1,cover:!1,categories:"LeetCode",tags:["LeetCode"]},prevItem:{title:"\u4e00\u7bc7\u6587\u7ae0\u638c\u63e1Next.js\u7684\u6838\u5fc3\u8981\u70b9",permalink:"/blog/\u4e00\u7bc7\u6587\u7ae0\u638c\u63e1Next.js\u7684\u6838\u5fc3\u8981\u70b9"},nextItem:{title:"\u642d\u5efanext\u524d\u53f0\u5f00\u53d1\u73af\u5883\u5e76\u5f15\u5165antd",permalink:"/blog/\u642d\u5efanext\u524d\u53f0\u5f00\u53d1\u73af\u5883\u5e76\u5f15\u5165antd"}},u={authorsImageUrls:[void 0]},c=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u89e3\u9898\u601d\u8def",id:"\u89e3\u9898\u601d\u8def",level:2},{value:"1\uff1a\u521d\u59cb\u5316\u6ed1\u52a8\u7a97\u53e3",id:"1\u521d\u59cb\u5316\u6ed1\u52a8\u7a97\u53e3",level:3},{value:"2\uff1a\u6838\u5fc3\u5faa\u73af\u4f53",id:"2\u6838\u5fc3\u5faa\u73af\u4f53",level:3},{value:"3\uff1a\u5224\u65ad\u8fd4\u56de",id:"3\u5224\u65ad\u8fd4\u56de",level:3},{value:"\u5b8c\u6574\u4ee3\u7801",id:"\u5b8c\u6574\u4ee3\u7801",level:2},{value:"\u9898\u76ee\u53cd\u601d",id:"\u9898\u76ee\u53cd\u601d",level:2}],m={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u9898\u76ee\u63cf\u8ff0"},"\u9898\u76ee\u63cf\u8ff0"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/2d32692e1808cda349a3b753db2a15bd.png",alt:"image.png"})),(0,a.kt)("h2",{id:"\u89e3\u9898\u601d\u8def"},"\u89e3\u9898\u601d\u8def"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u9898\u76ee\u8ba9\u6211\u4eec\u6c42\u7684\u662f\u5927\u4e8e\u7b49\u4e8etarget\u7684\u957f\u5ea6\u6700\u5c0f\u7684\u5b50\u6570\u7ec4\uff0c\u800c\u4e0d\u662f\u7b49\u4e8e\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u601d\u8def\uff1a\u901a\u8fc7\u6ed1\u52a8\u7a97\u53e3\u7684\u601d\u60f3\uff0c\u4e0d\u65ad\u66f4\u65b0\u7a97\u53e3\u7684\u6700\u5c0f\u503c\u3002")),(0,a.kt)("h3",{id:"1\u521d\u59cb\u5316\u6ed1\u52a8\u7a97\u53e3"},"1\uff1a\u521d\u59cb\u5316\u6ed1\u52a8\u7a97\u53e3"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e3b\u8981\u5b9a\u4e49\u6ed1\u52a8\u7a97\u53e3\u7684\u5de6\u8fb9\u754c\u3001\u53f3\u8fb9\u754c\u3001\u521d\u59cb\u6700\u5c0f\u503c\u3001\u7a97\u53e3\u5185\u7684\u548c\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u5b9a\u4e49\u521d\u59cb\u6700\u5c0f\u503c\nlet minLen = Infinity;\n// \u5b9a\u4e49\u6ed1\u52a8\u7a97\u53e3\u7684\u5de6\u8fb9\u754c\nlet left = 0;\n// \u5b9a\u4e49\u6ed1\u52a8\u7a97\u53e3\u7684\u53f3\u8fb9\u754c\nlet right = 0;\n// \u5b9a\u4e49\u7a97\u53e3\u5185\u7684\u548c\nlet sum = 0;\n")),(0,a.kt)("h3",{id:"2\u6838\u5fc3\u5faa\u73af\u4f53"},"2\uff1a\u6838\u5fc3\u5faa\u73af\u4f53"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u53ea\u8981\u53f3\u8fb9\u754c\u6ca1\u6709\u8d70\u5230\u6700\u540e\u5c31\u7ee7\u7eed\u5faa\u73af\uff0c\u9996\u5148\u8ba1\u7b97\u7a97\u53e3\u5185\u7684\u548c\uff0c\u5982\u679c\u5927\u4e8e\u7b49\u4e8etarget\uff0c\u5219\u66f4\u65b0\u6700\u5c0f\u957f\u5ea6\uff0c\u7136\u540e\u5de6\u79fb\u5de6\u8fb9\u754c\uff0c\u5faa\u73af\u7ed3\u675f\u518d\u79fb\u52a8\u53f3\u8fb9\u754c\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u53ea\u8981\u53f3\u8fb9\u754c\u6ca1\u6709\u8d70\u5230\u6700\u540e\u5c31\u4e0d\u7ec8\u6b62\u5faa\u73af\nwhile (right < nums.length) {\n\n    sum = sum + nums[right];\n    // \u5982\u679c\u7a97\u53e3\u5185\u7684\u548c \u2265 target\n    while (sum >= target) {\n        // \u66f4\u65b0\u7a97\u53e3\u7684\u6700\u5c0f\u957f\u5ea6\n        minLen = Math.min(minLen,right-left+1);\n        // \u66f4\u65b0\u548c\n        sum = sum - nums[left];\n        left++\n    }\n    right++;\n}\n")),(0,a.kt)("h3",{id:"3\u5224\u65ad\u8fd4\u56de"},"3\uff1a\u5224\u65ad\u8fd4\u56de"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u6700\u5c0f\u957f\u5ea6\u662f\u65e0\u9650\u5927\uff0c\u5219\u8fd4\u56de0\uff0c\u53cd\u4e4b\u8fd4\u56de\u6700\u5c0f\u957f\u5ea6\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"minLen = minLen === Infinity ? 0 : minLen\nreturn minLen\n")),(0,a.kt)("h2",{id:"\u5b8c\u6574\u4ee3\u7801"},"\u5b8c\u6574\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var minSubArrayLen = function (target, nums) {\n    // \u5b9a\u4e49\u521d\u59cb\u6700\u5c0f\u503c\n    let minLen = Infinity;\n    // \u5b9a\u4e49\u6ed1\u52a8\u7a97\u53e3\u7684\u5de6\u8fb9\u754c\n    let left = 0;\n    // \u5b9a\u4e49\u6ed1\u52a8\u7a97\u53e3\u7684\u53f3\u8fb9\u754c\n    let right = 0;\n    // \u5b9a\u4e49\u7a97\u53e3\u5185\u7684\u548c\n    let sum = 0;\n\n    // \u53ea\u8981\u53f3\u8fb9\u754c\u6ca1\u6709\u8d70\u5230\u6700\u540e\u5c31\u4e0d\u7ec8\u6b62\u5faa\u73af\n    while (right < nums.length) {\n\n        sum = sum + nums[right];\n        // \u5982\u679c\u7a97\u53e3\u5185\u7684\u548c \u2265 target\n        while (sum >= target) {\n            // \u66f4\u65b0\u7a97\u53e3\u7684\u6700\u5c0f\u957f\u5ea6\n            minLen = Math.min(minLen,right-left+1);\n            // \u66f4\u65b0\u548c\n            sum = sum - nums[left];\n            left++\n        }\n        right++;\n    }\n    minLen = minLen === Infinity ? 0 : minLen\n    return minLen\n};\n\nminSubArrayLen(7,[2,3,1,2,4,3])\n")),(0,a.kt)("h2",{id:"\u9898\u76ee\u53cd\u601d"},"\u9898\u76ee\u53cd\u601d"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u9047\u5230\u9898\u76ee\u4e2d\u5e26\u6709\u8fde\u7eed\u7684\u5b57\u6837\uff0c\u53ef\u4ee5\u4f18\u5148\u8003\u8651\u4f7f\u7528\u6ed1\u52a8\u7a97\u53e3\u6765\u89e3\u51b3\u95ee\u9898\uff0c\u8fd9\u9053\u9898\u76ee\u5e76\u4e0d\u96be\uff0c\u548c\u5176\u4ed6\u7684\u6ed1\u52a8\u7a97\u53e3\u7c7b\u578b\u7684\u9898\u76ee\u89e3\u9898\u65b9\u6cd5\u51e0\u4e4e\u4e00\u81f4\u3002")))}p.isMDXComponent=!0}}]);