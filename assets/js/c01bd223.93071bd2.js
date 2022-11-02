"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[33058],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>s});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(r),s=o,g=d["".concat(c,".").concat(s)]||d[s]||u[s]||a;return r?n.createElement(g,i(i({ref:t},m),{},{components:r})):n.createElement(g,i({ref:t},m))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},49804:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"LeetCode\u2014\u2014\u5c9b\u5c7f\u7684\u6700\u5927\u9762\u79ef\uff08DFS\uff09",date:new Date("2021-11-23T00:00:00.000Z"),author:"Justin",top:!1,cover:!1,categories:"LeetCode",tags:["LeetCode"]},i=void 0,l={permalink:"/blog/LeetCode\u2014\u2014\u5c9b\u5c7f\u7684\u6700\u5927\u9762\u79ef\uff08DFS\uff09",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/LeetCode\u2014\u2014\u5c9b\u5c7f\u7684\u6700\u5927\u9762\u79ef\uff08DFS\uff09.md",source:"@site/blog/LeetCode\u2014\u2014\u5c9b\u5c7f\u7684\u6700\u5927\u9762\u79ef\uff08DFS\uff09.md",title:"LeetCode\u2014\u2014\u5c9b\u5c7f\u7684\u6700\u5927\u9762\u79ef\uff08DFS\uff09",description:"\u9898\u76ee\u63cf\u8ff0",date:"2021-11-23T00:00:00.000Z",formattedDate:"2021\u5e7411\u670823\u65e5",tags:[{label:"LeetCode",permalink:"/blog/tags/leet-code"}],readingTime:2.38,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"LeetCode\u2014\u2014\u5c9b\u5c7f\u7684\u6700\u5927\u9762\u79ef\uff08DFS\uff09",date:"2021-11-23T00:00:00.000Z",author:"Justin",top:!1,cover:!1,categories:"LeetCode",tags:["LeetCode"]},prevItem:{title:"\u4e8c\u5237--\u4ece\u4e0a\u5230\u4e0b\u6253\u5370\u4e8c\u53c9\u6811 III\uff08\u5c42\u5e8f\u9012\u5f52+\u53cd\u8f6c\uff09",permalink:"/blog/\u4e8c\u5237--\u4ece\u4e0a\u5230\u4e0b\u6253\u5370\u4e8c\u53c9\u6811 III\uff08\u5c42\u5e8f\u9012\u5f52+\u53cd\u8f6c\uff09"},nextItem:{title:"Webpack\u5904\u7406CSS\u3001Less\u3001HTML\u3001\u56fe\u7247\u4e0e\u5176\u4ed6\u8d44\u6e90\u7684\u65b9\u6cd5",permalink:"/blog/Webpack\u5904\u7406CSS\u3001Less\u3001HTML\u3001\u56fe\u7247\u4e0e\u5176\u4ed6\u8d44\u6e90\u7684\u65b9\u6cd5"}},c={authorsImageUrls:[void 0]},p=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u89e3\u9898\u601d\u8def",id:"\u89e3\u9898\u601d\u8def",level:2},{value:"\u9898\u76ee\u53cd\u601d",id:"\u9898\u76ee\u53cd\u601d",level:2}],m={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u9898\u76ee\u63cf\u8ff0"},"\u9898\u76ee\u63cf\u8ff0"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/79da66feffddb420ec05addf146d22d0.png",alt:"image.png"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/21f7bc43af376a6faae112df2d420f77.png",alt:"image.png"})),(0,o.kt)("h2",{id:"\u89e3\u9898\u601d\u8def"},"\u89e3\u9898\u601d\u8def"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u672c\u9898\u7684\u6838\u5fc3\u89e3\u9898\u601d\u8def\u662f\u4f7f\u7528DFS\uff0c\u6240\u8c13\u7684DFS\u5c31\u662f\u9012\u5f52\u52a0\u6807\u8bb0\uff0c\u7b26\u5408\u6761\u4ef6\u7684\u5143\u7d20\u904d\u5386\u8fc7\u540e\u5c06\u5176\u6807\u8bb0\u4e3a\u5df2\u7ecf\u904d\u5386\u8fc7\uff0c\u5728\u672c\u9898\u4e2d\u6211\u4eec\u65e0\u9700\u4f7f\u7528\u54c8\u5e0c\u8868\u8fdb\u884c\u6807\u8bb0\uff0c\u53ea\u9700\u5c06\u904d\u5386\u8fc7\u7684\u4f4d\u7f6e\u53d8\u4e3a0\u5373\u53ef\u3002")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u4e8c\u7ef4\u6570\u7ec4\u7684\u884c\u6570\uff0c\u5373grid\u7684\u957f\u5ea6\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u4e8c\u7ef4\u6570\u7ec4\u7684\u5217\u6570\uff0c\u5373grid","[0]","\u7684\u957f\u5ea6\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u4e8c\u5c42\u5faa\u73af\u904d\u5386\u6bcf\u4e00\u4e2a\u5143\u7d20\uff0c\u4e0d\u65ad\u66f4\u65b0\u6700\u5927\u503c\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5c06\u5f53\u524d\u4f4d\u7f6e\u548c\u884c\u5217\u6570\u6295\u5165DFS\u51fd\u6570\u4e2d\uff0c\u9996\u5148\u8fdb\u884c\u8fb9\u754c\u6761\u4ef6\u7684\u5224\u65ad\uff0c\u5982\u679c\u4e0d\u7b26\u5408\u5219\u8fd4\u56de0\uff0c\u5982\u679c\u7b26\u5408\u5219\u5c06\u5176\u6807\u8bb0\u4e3a0\uff0c\u8868\u793a\u5df2\u7ecf\u904d\u5386\u8fc7\uff0c\u7136\u540e\u9012\u5f52\u4e0a\u4e0b\u5de6\u53f3\u56db\u4e2a\u65b9\u5411\u8fdb\u884c\u5224\u65ad\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var maxAreaOfIsland = function (grid) {\n  // \u672c\u9898\u6838\u5fc3\u662f\u4f7f\u7528DFS \u5c06\u904d\u5386\u8fc7\u76841\u6807\u8bb0\u4e3a0\n  let row = grid.length;\n  let column = grid[0].length;\n  // \u5b9a\u4e49\u6700\u5927\u9762\u79ef\n  let maxArea = 0;\n  // \u4e8c\u5c42\u5faa\u73af\u904d\u5386\u6bcf\u4e00\u4e2a\u5143\u7d20\n  for (let i = 0; i < row; i++) {\n    for (let j = 0; j < column; j++) {\n      maxArea = Math.max(maxArea, dfs(grid, i, j, row, column));\n    }\n  }\n  function dfs(grid, i, j, row, column) {\n    // \u8fb9\u754c\u6761\u4ef6\u5224\u65ad\n    if (i < 0 || j < 0 || i >= row || j >= column || grid[i][j] === 0) return 0;\n    let temp = 1;\n    grid[i][j] = 0;\n    temp = temp + dfs(grid, i + 1, j, row, column);\n    temp = temp + dfs(grid, i - 1, j, row, column);\n    temp = temp + dfs(grid, i, j + 1, row, column);\n    temp = temp + dfs(grid, i, j - 1, row, column);\n    return temp;\n  }\n  return maxArea;\n};\n")),(0,o.kt)("h2",{id:"\u9898\u76ee\u53cd\u601d"},"\u9898\u76ee\u53cd\u601d"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"DFS\u662f\u4e00\u4e2a\u91cd\u8981\u7684\u7f16\u7a0b\u601d\u60f3\uff0c\u5176\u4e2d\u901a\u8fc7DFS\u80fd\u89e3\u51b3\u7684\u95ee\u9898\u975e\u5e38\u5e7f\u6cdb\uff0c\u4e5f\u662f\u9762\u8bd5\u5b98\u7684\u5ba0\u513f\uff0c\u4f8b\u5982\u5c9b\u5c7f\u7684\u6700\u5927\u9762\u79ef\u3001\u5168\u6392\u5217\u90fd\u662fDFS\u7684\u5e94\u7528\u5b9e\u4f8b\uff0cDFS\u5728\u6211\u770b\u6765\u672c\u8d28\u5c31\u662f\u9012\u5f52 + \u6807\u8bb0\uff0c\u53ea\u8981\u7b26\u5408\u4e0a\u8ff0\u4e24\u4e2a\u6761\u4ef6\u5373\u53ef\u5224\u65ad\u4e3aDFS\u3002")))}u.isMDXComponent=!0}}]);