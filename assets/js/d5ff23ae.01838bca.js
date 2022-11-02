"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[36393],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=u(n),m=o,d=g["".concat(c,".").concat(m)]||g[m]||p[m]||i;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const i={title:"LeetCode\u2014\u2014\u4e0b\u4e00\u4e2a\u6392\u5217\uff08\u964d\u5e8f\u91cd\u6392\u6cd5\uff09",date:new Date("2022-02-09T00:00:00.000Z"),author:"Justin",top:!1,cover:!1,categories:"LeetCode",tags:["LeetCode"]},a=void 0,l={permalink:"/blog/LeetCode\u2014\u2014\u4e0b\u4e00\u4e2a\u6392\u5217\uff08\u964d\u5e8f\u91cd\u6392\u6cd5\uff09",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/LeetCode\u2014\u2014\u4e0b\u4e00\u4e2a\u6392\u5217\uff08\u964d\u5e8f\u91cd\u6392\u6cd5\uff09.md",source:"@site/blog/LeetCode\u2014\u2014\u4e0b\u4e00\u4e2a\u6392\u5217\uff08\u964d\u5e8f\u91cd\u6392\u6cd5\uff09.md",title:"LeetCode\u2014\u2014\u4e0b\u4e00\u4e2a\u6392\u5217\uff08\u964d\u5e8f\u91cd\u6392\u6cd5\uff09",description:"\u9898\u76ee\u63cf\u8ff0",date:"2022-02-09T00:00:00.000Z",formattedDate:"2022\u5e742\u67089\u65e5",tags:[{label:"LeetCode",permalink:"/blog/tags/leet-code"}],readingTime:2.48,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"LeetCode\u2014\u2014\u4e0b\u4e00\u4e2a\u6392\u5217\uff08\u964d\u5e8f\u91cd\u6392\u6cd5\uff09",date:"2022-02-09T00:00:00.000Z",author:"Justin",top:!1,cover:!1,categories:"LeetCode",tags:["LeetCode"]},prevItem:{title:"JS\u662f\u5355\u7ebf\u7a0b\u7684\uff0c\u90a3\u4e48JS\u662f\u5982\u4f55\u5b9e\u73b0\u5e76\u53d1\u8bf7\u6c42\u7684\uff1f",permalink:"/blog/JS\u662f\u5355\u7ebf\u7a0b\u7684\uff0c\u90a3\u4e48JS\u662f\u5982\u4f55\u5b9e\u73b0\u5e76\u53d1\u8bf7\u6c42\u7684\uff1f"},nextItem:{title:"JavaScript\u4e2dstring\u662f\u4e2a\u57fa\u672c\u7c7b\u578b\uff0c\u4f46\u662f\u5b83\u7684string.length\u662f\u600e\u4e48\u5b9e\u73b0\u7684\uff1f",permalink:"/blog/JavaScript\u4e2dstring\u662f\u4e2a\u57fa\u672c\u7c7b\u578b\uff0c\u4f46\u662f\u5b83\u7684string.length\u662f\u600e\u4e48\u5b9e\u73b0\u7684\uff1f"}},c={authorsImageUrls:[void 0]},u=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u89e3\u9898\u601d\u8def",id:"\u89e3\u9898\u601d\u8def",level:2},{value:"\u7b2c\u4e00\u6b65\uff1a\u4ece\u53f3\u5f80\u5de6\u5012\u7740\u627e\u770b\u662f\u5426\u6709\u964d\u5e8f\u5143\u7d20\u7684\u5b58\u5728",id:"\u7b2c\u4e00\u6b65\u4ece\u53f3\u5f80\u5de6\u5012\u7740\u627e\u770b\u662f\u5426\u6709\u964d\u5e8f\u5143\u7d20\u7684\u5b58\u5728",level:3},{value:"\u7b2c\u4e8c\u6b65\uff1a\u4ece\u964d\u5e8f\u4f4d\u7f6e\u5f80\u540e\u7684\u6240\u6709\u5143\u7d20\u8fdb\u884c\u4e00\u6b21\u5347\u5e8f\u6392\u5217",id:"\u7b2c\u4e8c\u6b65\u4ece\u964d\u5e8f\u4f4d\u7f6e\u5f80\u540e\u7684\u6240\u6709\u5143\u7d20\u8fdb\u884c\u4e00\u6b21\u5347\u5e8f\u6392\u5217",level:3},{value:"\u7b2c\u4e09\u6b65\uff1a\u5bf9\u5347\u5e8f\u6392\u5217\u7684\u6570\u7ec4\u8fdb\u884c\u904d\u5386\u627e\u5230\u7b2c\u4e00\u4e2a\u6bd4right\u5143\u7d20\u5927\u7684\u5143\u7d20\uff0c\u8fdb\u884c\u4ea4\u6362",id:"\u7b2c\u4e09\u6b65\u5bf9\u5347\u5e8f\u6392\u5217\u7684\u6570\u7ec4\u8fdb\u884c\u904d\u5386\u627e\u5230\u7b2c\u4e00\u4e2a\u6bd4right\u5143\u7d20\u5927\u7684\u5143\u7d20\u8fdb\u884c\u4ea4\u6362",level:3},{value:"\u7b2c\u56db\u6b65\uff1a\u4ea4\u6362\u540e\u8fdb\u884c\u4e8c\u6b21\u5347\u5e8f\u6392\u5217\u3002",id:"\u7b2c\u56db\u6b65\u4ea4\u6362\u540e\u8fdb\u884c\u4e8c\u6b21\u5347\u5e8f\u6392\u5217",level:3},{value:"AC\u4ee3\u7801",id:"ac\u4ee3\u7801",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",level:2}],s={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u9898\u76ee\u63cf\u8ff0"},"\u9898\u76ee\u63cf\u8ff0"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/a7984eef838c356a53661cce50ace4e2.png",alt:"image.png"})),(0,o.kt)("h2",{id:"\u89e3\u9898\u601d\u8def"},"\u89e3\u9898\u601d\u8def"),(0,o.kt)("h3",{id:"\u7b2c\u4e00\u6b65\u4ece\u53f3\u5f80\u5de6\u5012\u7740\u627e\u770b\u662f\u5426\u6709\u964d\u5e8f\u5143\u7d20\u7684\u5b58\u5728"},"\u7b2c\u4e00\u6b65\uff1a\u4ece\u53f3\u5f80\u5de6\u5012\u7740\u627e\u770b\u662f\u5426\u6709\u964d\u5e8f\u5143\u7d20\u7684\u5b58\u5728"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u6709\u964d\u5e8f\u5143\u7d20\u7684\u5b58\u5728\u5219\u8fdb\u884c\u6807\u8bb0\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4e00\u4e2a\u53d8\u91cf\u6765\u5e2e\u52a9\u6211\u4eec\u6807\u8bb0\u3002\u52a0\u5165nums","[right]"," > nums","[right-1]","\uff0c\u6211\u4eec\u6b64\u65f6\u8981\u8bb0\u5f55\u8fd9\u4e2aright-1\u7684\u4f4d\u7f6e\u540e\u7eed\u6709\u7528\uff0c\u5982\u679c\u6ca1\u6709\u964d\u5e8f\u5143\u7d20\u7684\u5b58\u5728\uff0c\u5219\u76f4\u63a5\u8fdb\u884c\u5347\u5e8f\u6392\u5217\u5373\u53ef\uff0c\u4e0d\u7528\u518d\u770b\u4e0b\u9762\u7684\u6b65\u9aa4\u4e86\uff0c\u76f4\u63a5\u8fd4\u56de\u3002")),(0,o.kt)("h3",{id:"\u7b2c\u4e8c\u6b65\u4ece\u964d\u5e8f\u4f4d\u7f6e\u5f80\u540e\u7684\u6240\u6709\u5143\u7d20\u8fdb\u884c\u4e00\u6b21\u5347\u5e8f\u6392\u5217"},"\u7b2c\u4e8c\u6b65\uff1a\u4ece\u964d\u5e8f\u4f4d\u7f6e\u5f80\u540e\u7684\u6240\u6709\u5143\u7d20\u8fdb\u884c\u4e00\u6b21\u5347\u5e8f\u6392\u5217"),(0,o.kt)("h3",{id:"\u7b2c\u4e09\u6b65\u5bf9\u5347\u5e8f\u6392\u5217\u7684\u6570\u7ec4\u8fdb\u884c\u904d\u5386\u627e\u5230\u7b2c\u4e00\u4e2a\u6bd4right\u5143\u7d20\u5927\u7684\u5143\u7d20\u8fdb\u884c\u4ea4\u6362"},"\u7b2c\u4e09\u6b65\uff1a\u5bf9\u5347\u5e8f\u6392\u5217\u7684\u6570\u7ec4\u8fdb\u884c\u904d\u5386\u627e\u5230\u7b2c\u4e00\u4e2a\u6bd4right\u5143\u7d20\u5927\u7684\u5143\u7d20\uff0c\u8fdb\u884c\u4ea4\u6362"),(0,o.kt)("h3",{id:"\u7b2c\u56db\u6b65\u4ea4\u6362\u540e\u8fdb\u884c\u4e8c\u6b21\u5347\u5e8f\u6392\u5217"},"\u7b2c\u56db\u6b65\uff1a\u4ea4\u6362\u540e\u8fdb\u884c\u4e8c\u6b21\u5347\u5e8f\u6392\u5217\u3002"),(0,o.kt)("h2",{id:"ac\u4ee3\u7801"},"AC\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var nextPermutation = function(nums) {\n  // \u4e0b\u4e00\u4e2a\u6392\u5217\u8981\u6c42\u7684\u662f\u539f\u5730\u6392\u5e8f\n  let flag = false;\n  let right = nums.length - 1;\n  // \u7b2c\u4e00\u6b65\uff1a\u4ece\u53f3\u5f80\u5de6\u8fdb\u884c\u904d\u5386\uff0c\u67e5\u627e\u662f\u5426\u6709\u964d\u5e8f\u5143\u7d20\u7684\u5b58\u5728\n  while (right) {\n    if (nums[right] > nums[right-1]) {\n      flag = true;\n      right--;\n      break;\n    } else {\n      right--;\n    }\n  }\n\n  if (flag) {\n    const sorted = nums.splice(right + 1).sort((next,pre) => next - pre);\n    // \u627e\u5230\u6392\u5e8f\u597d\u7684\u6570\u7ec4\u7684\u7b2c\u4e00\u4e2a\u6bd4nums[right]\u7684\u5143\u7d20\uff0c\u7136\u540e\u8fdb\u884c\u4ea4\u6362\n    let temp;\n    for (let i = 0; i < sorted.length; i++) {\n      if (sorted[i] > nums[right]) {\n        temp = i;\n        break;\n      }\n    }\n    let t = nums[right];\n    nums[right] = sorted[temp];\n    sorted[temp] = t;\n    // \u5bf9sorted\u8fdb\u884c\u4e8c\u6b21\u6392\u5e8f\n    sorted.sort((next,pre) => next - pre);\n    // \u8fdb\u884c\u62fc\u63a5\n    nums.push(...sorted);\n  } else {\n    nums.sort((next,pre) => next - pre)\n  }\n\n};\n")),(0,o.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4e0b\u4e00\u4e2a\u6392\u5217\u8fd9\u4e2a\u9898\u76ee\u662f\u4e00\u9053\u9ad8\u9891\u8003\u9898\uff0c\u6838\u5fc3\u601d\u8def\u5c31\u662f\u7406\u89e3\u6574\u4e2a\u9898\u76ee\u7684\u610f\u601d\uff0c\u96be\u70b9\u4e0d\u5728\u5199\u4ee3\u7801\u4e0a\uff0c\u96be\u70b9\u5728\u7406\u89e3\u8fd9\u4e2a\u601d\u8def\u4e0a\uff0c\u53ea\u8981\u6211\u4eec\u80fd\u591f\u5b89\u88c5\u4e0a\u6587\u4ecb\u7ecd\u7684\u89e3\u9898\u601d\u8def\u8fdb\u884c\u89e3\u9898\uff0c\u5f88\u5feb\u5c31\u80fd\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u672c\u9898\u7684\u53ef\u80fd\u4e0d\u597d\u60f3\uff0c\u56e0\u4e3a\u5012\u5e8f\u672c\u8eab\u5c31\u4e0d\u7b26\u5408\u5e38\u89c4\u601d\u7ef4\uff0c\u4f46\u662f\u591a\u52a0\u7ec3\u4e60\u5c31\u80fd\u7406\u89e3\u7684\u3002")),(0,o.kt)("h2",{id:"\u53c2\u8003\u6587\u732e"},"\u53c2\u8003\u6587\u732e"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6982746312764555271"},"HOT100\u2014\u2014\u4e0b\u4e00\u4e2a\u6392\u5217\uff08JS\u5b9e\u73b0\uff09"))))}p.isMDXComponent=!0}}]);