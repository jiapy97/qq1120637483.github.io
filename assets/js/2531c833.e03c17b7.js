"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[20431],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),k=a,s=m["".concat(p,".").concat(k)]||m[k]||d[k]||l;return n?r.createElement(s,o(o({ref:t},u),{},{components:n})):r.createElement(s,o({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94759:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"LeetCode\u2014\u2014\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673a II\uff08\u52a8\u6001\u89c4\u5212\uff09",date:new Date("2022-03-01T00:00:00.000Z"),author:"Justin",top:!1,cover:!1,categories:"LeetCode",tags:["LeetCode"]},o=void 0,i={permalink:"/blog/LeetCode\u2014\u2014\u4e70\u5356\u80a1\u7968\u7684\u65f6\u673a II\uff08\u52a8\u6001\u89c4\u5212\uff09",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/LeetCode\u2014\u2014\u4e70\u5356\u80a1\u7968\u7684\u65f6\u673a II\uff08\u52a8\u6001\u89c4\u5212\uff09.md",source:"@site/blog/LeetCode\u2014\u2014\u4e70\u5356\u80a1\u7968\u7684\u65f6\u673a II\uff08\u52a8\u6001\u89c4\u5212\uff09.md",title:"LeetCode\u2014\u2014\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673a II\uff08\u52a8\u6001\u89c4\u5212\uff09",description:"\u4ecb\u7ecd",date:"2022-03-01T00:00:00.000Z",formattedDate:"2022\u5e743\u67081\u65e5",tags:[{label:"LeetCode",permalink:"/blog/tags/leet-code"}],readingTime:3.04,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"LeetCode\u2014\u2014\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673a II\uff08\u52a8\u6001\u89c4\u5212\uff09",date:"2022-03-01T00:00:00.000Z",author:"Justin",top:!1,cover:!1,categories:"LeetCode",tags:["LeetCode"]},prevItem:{title:"LeetCode\u2014\u2014\u5c9b\u5c7f\u6570\u91cf\uff08DFS\uff09",permalink:"/blog/LeetCode\u2014\u2014\u5c9b\u5c7f\u6570\u91cf\uff08DFS\uff09"},nextItem:{title:"\u8fd9\u4e00\u6b21\uff0c\u5f7b\u5e95\u641e\u61c2HTML5\u65b0\u7279\u6027",permalink:"/blog/\u8fd9\u4e00\u6b21\uff0c\u5f7b\u5e95\u641e\u61c2HTML5\u65b0\u7279\u6027"}},p={authorsImageUrls:[void 0]},c=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u89e3\u9898\u601d\u8def",id:"\u89e3\u9898\u601d\u8def",level:2},{value:"AC\u4ee3\u7801\u5b9e\u73b0",id:"ac\u4ee3\u7801\u5b9e\u73b0",level:2},{value:"\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673aI\u548c\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673aII\u7684\u533a\u522b\u5728\u54ea\u91cc\uff1f",id:"\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673ai\u548c\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673aii\u7684\u533a\u522b\u5728\u54ea\u91cc",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673a\u662f\u4e00\u9053\u9ad8\u9891\u8003\u9898\uff0c\u8fd9\u4e2a\u9898\u76ee\u5df2\u7ecf\u884d\u751f\u51fa\u591a\u4e2a\u7248\u672c\uff0c\u5176\u4e2d\u5c24\u5176\u662f\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673aI\u548cII\u662f\u9762\u8bd5\u4e2d\u7684\u9ad8\u9891\u8003\u9898\uff0c\u8ba9\u6211\u4eec\u6765\u4e00\u8d77\u770b\u770b\u8be5\u5982\u4f55\u89e3\u51b3\u8fd9\u7c7b\u95ee\u9898\u5427~")),(0,a.kt)("h2",{id:"\u9898\u76ee\u63cf\u8ff0"},"\u9898\u76ee\u63cf\u8ff0"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/44c4d22c58b00e1a479cd27142aa2c2e.png",alt:"image.png"})),(0,a.kt)("h2",{id:"\u89e3\u9898\u601d\u8def"},"\u89e3\u9898\u601d\u8def"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u65e0\u8bba\u662f\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673aI\u8fd8\u662fII\uff0c\u52a8\u6001\u89c4\u5212\u90fd\u662f\u89e3\u51b3\u7684\u597d\u65b9\u6cd5\uff0c\u52a8\u6001\u89c4\u5212\u6700\u91cd\u8981\u7684\u5c31\u662f\u7406\u89e3\u52a8\u6001\u65b9\u7a0b\u7684\u542b\u4e49\u662f\u4ec0\u4e48\uff0c\u4e0b\u9762\u5bf9\u52a8\u6001\u89c4\u5212\u7684\u6838\u5fc3\u8fdb\u884c\u4ecb\u7ecd\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"dp","[i][0]","\uff1a\u8868\u793a\u7684\u662f\u7b2ci\u5929\uff0c\u624b\u4e0a\u6ca1\u6709\u80a1\u7968\u83b7\u53d6\u7684\u6700\u5927\u6536\u76ca\uff0c\u4e5f\u5c31\u662f\u8bf4\u8d5a\u7684\u94b1\u6570\u3002"),(0,a.kt)("li",{parentName:"ul"},"dp","[i][1]","\uff1a\u8868\u793a\u7684\u662f\u7b2ci\u5929\uff0c\u624b\u4e0a\u6709\u80a1\u7968\u83b7\u53d6\u7684\u6700\u5927\u6536\u76ca\u3002"),(0,a.kt)("li",{parentName:"ul"},"dp","[i][0]","\u7684\u53ef\u80fd\u6027\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7b2ci-1\u5929\u624b\u91cc\u4e5f\u6ca1\u6709\u80a1\u7968\uff1adp","[i-1][0]"),(0,a.kt)("li",{parentName:"ul"},"\u7b2ci-1\u5929\u624b\u91cc\u6709\u80a1\u7968\uff0c\u4f46\u662f\u4eca\u5929\u5356\u4e86\uff1adp","[i-1][1]"," + prices","[i]"))),(0,a.kt)("li",{parentName:"ul"},"dp","[i][1]","\u7684\u53ef\u80fd\u6027\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u524d\u4e00\u5929\u4e5f\u6709\u80a1\u7968\uff0c\u5e76\u4fdd\u6301\u5230\u4eca\u5929\uff1adp","[i-1][1]"),(0,a.kt)("li",{parentName:"ul"},"\u524d\u4e00\u5929\u6ca1\u6709\u80a1\u7968\uff0c\u4eca\u5929\u4e70\u5165\u4e86\uff1adp","[i-1][0]"," - prices","[i]")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u52a8\u6001\u89c4\u5212\u5230\u6700\u540e\u4e00\u5929\uff0c\u662f\u6301\u6709\u80a1\u7968\u8fd8\u662f\u624b\u4e0a\u6ca1\u6709\u80a1\u7968\u7684\u6536\u76ca\u5927\uff1f")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"\u624b\u4e0a\u6ca1\u6709\u80a1\u7968\u7684\u6536\u76ca\u5927\uff0c\u56e0\u4e3a\u6700\u540e\u4e00\u5929\u6301\u6709\u80a1\u7968\u8bf4\u660e\u8fd8\u6ca1\u6709\u53d8\u73b0\u3002"))),(0,a.kt)("h2",{id:"ac\u4ee3\u7801\u5b9e\u73b0"},"AC\u4ee3\u7801\u5b9e\u73b0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var maxProfit = function(prices) {\n  // \u52a8\u6001\u89c4\u5212\u662f\u89e3\u51b3\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673a\u7684\u6838\u5fc3\u6280\u5de7\n  // \u9996\u5148\u6784\u9020\u4e00\u4e2a\u4e8c\u7ef4\u6570\u7ec4dp\n  const dp = new Array(prices.length).fill([0,0]);\n\n  // \u521d\u59cb\u5316\n  dp[0][0] = 0;\n  dp[0][1] = -prices[0];\n\n  // \u5904\u7406\u4e00\u822c\u60c5\u51b5\n  for (let i = 1; i < dp.length; i++) {\n    dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1] + prices[i]);\n    dp[i][1] = Math.max(dp[i-1][0] - prices[i],dp[i-1][1]);\n  }\n\n  return dp[prices.length-1][0];\n};\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6784\u9020\u4e8c\u7ef4\u6570\u7ec4\u7684\u65f6\u5019\uff0cfill\u4e2d\u4f20\u5165\u7684\u662f\u4e00\u4e2a","[0,0]","\u3002")),(0,a.kt)("h2",{id:"\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673ai\u548c\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673aii\u7684\u533a\u522b\u5728\u54ea\u91cc"},"\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673aI\u548c\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673aII\u7684\u533a\u522b\u5728\u54ea\u91cc\uff1f"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6838\u5fc3\u7684\u533a\u522b\u5c31\u5728\u4e8e\u4e0b\u9762\u8fd9\u884c\u4ee3\u7801\u4e0a\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673aI")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"dp[i][1] = Math.max(- prices[i], dp[i - 1][1]);\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673aII"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"dp[i][1] = Math.max(dp[i-1][0] - prices[i],dp[i-1][1]);\n"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8fd9\u8bf4\u660e\u4ec0\u4e48\u5462\uff1f\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673a\u5982\u679c\u4eca\u5929\u4e70\u5165\uff0c\u610f\u5473\u7740\u524d\u9762\u4e0d\u80fd\u6709\u4e70\u5356\u64cd\u4f5c\uff0c\u4e5f\u5c31\u662f\u8bf4\u53ea\u80fd\u4e70\u5356\u4e00\u6b21\uff0c\u4f46\u662f\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673aII\u5219\u53ef\u4ee5\u591a\u6b21\u4e70\u5165\uff0c\u5356\u51fa\u3002")),(0,a.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728\u9047\u5230\u540c\u4e00\u7c7b\u9898\u76ee\u65f6\uff0c\u4e00\u5b9a\u8981\u5bf9\u6bd4\u9898\u76ee\u4e4b\u95f4\u7684\u5f02\u540c\u70b9\uff0c\u8fdb\u884c\u5bf9\u6bd4\u8bb0\u5fc6\u3002")))}d.isMDXComponent=!0}}]);