"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[53111],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,m=f["".concat(l,".").concat(d)]||f[d]||s[d]||a;return n?r.createElement(m,u(u({ref:t},p),{},{components:n})):r.createElement(m,u({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,u=new Array(a);u[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var c=2;c<a;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},36800:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),u=["components"],i={title:"LeetCode\u2014\u2014\u5168\u6392\u5217\uff08DFS\uff09",date:"2021-10-7",author:"Justin",top:!1,cover:!1,categories:"LeetCode",tags:["LeetCode"]},l=void 0,c={permalink:"/en/LeetCode\u2014\u2014\u5168\u6392\u5217\uff08DFS\uff09",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/LeetCode\u2014\u2014\u5168\u6392\u5217\uff08DFS\uff09.md",source:"@site/blog/LeetCode\u2014\u2014\u5168\u6392\u5217\uff08DFS\uff09.md",title:"LeetCode\u2014\u2014\u5168\u6392\u5217\uff08DFS\uff09",description:"\u5168\u6392\u5217\u662fDFS\u7684\u7ecf\u5178\u5e94\u7528\uff0c\u65e0\u8bba\u662f\u5728\u5e73\u65f6\u7684\u5de5\u4f5c\u4e2d\u8fd8\u662f\u5728\u9762\u8bd5\u4e2d\uff0c\u90fd\u662f\u7ecf\u5e38\u88ab\u95ee\u5230\u7684\u8003\u70b9\uff0c\u63a5\u4e0b\u6765\u8ba9\u6211\u4eec\u4e00\u8d77\u6765\u63a2\u7a76\u8fd9\u4e2a\u95ee\u9898\u5427\u3002",date:"2021-10-07T00:00:00.000Z",formattedDate:"October 7, 2021",tags:[{label:"LeetCode",permalink:"/en/tags/leet-code"}],readingTime:.8366666666666667,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"LeetCode\u2014\u2014\u5168\u6392\u5217\uff08DFS\uff09",date:"2021-10-7",author:"Justin",top:!1,cover:!1,categories:"LeetCode",tags:["LeetCode"]},prevItem:{title:"React\u4f7f\u7528TS\u6a21\u677f\u811a\u624b\u67b6\u62a5\u9519\uff1a\u58f0\u660e\u4e86\u201c React\u201d\uff0c\u4f46\u4ece\u672a\u8bfb\u53d6\u5176\u503c",permalink:"/en/React\u4f7f\u7528TS\u6a21\u677f\u811a\u624b\u67b6\u62a5\u9519\uff1a\u58f0\u660e\u4e86\u201c React\u201d\uff0c\u4f46\u4ece\u672a\u8bfb\u53d6\u5176\u503c"},nextItem:{title:"\u9762\u8bd5\u5b98\u8ba9\u4f60\u4f7f\u7528CSS\u753b\u4e00\u4e2a\u5706\uff0c\u4f60\u4f1a\u5417\uff1f",permalink:"/en/\u9762\u8bd5\u5b98\u8ba9\u4f60\u4f7f\u7528CSS\u753b\u4e00\u4e2a\u5706\uff0c\u4f60\u4f1a\u5417\uff1f"}},p={authorsImageUrls:[void 0]},s=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u89e3\u9898\u601d\u8def",id:"\u89e3\u9898\u601d\u8def",level:2},{value:"\u9898\u76ee\u53cd\u601d",id:"\u9898\u76ee\u53cd\u601d",level:2}],f={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5168\u6392\u5217\u662fDFS\u7684\u7ecf\u5178\u5e94\u7528\uff0c\u65e0\u8bba\u662f\u5728\u5e73\u65f6\u7684\u5de5\u4f5c\u4e2d\u8fd8\u662f\u5728\u9762\u8bd5\u4e2d\uff0c\u90fd\u662f\u7ecf\u5e38\u88ab\u95ee\u5230\u7684\u8003\u70b9\uff0c\u63a5\u4e0b\u6765\u8ba9\u6211\u4eec\u4e00\u8d77\u6765\u63a2\u7a76\u8fd9\u4e2a\u95ee\u9898\u5427\u3002")),(0,a.kt)("h2",{id:"\u9898\u76ee\u63cf\u8ff0"},"\u9898\u76ee\u63cf\u8ff0"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/adec1fb58b1dd57795bdcbb351eff742.png",alt:null})),(0,a.kt)("h2",{id:"\u89e3\u9898\u601d\u8def"},"\u89e3\u9898\u601d\u8def"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u9898\u7684\u6838\u5fc3\u89e3\u9898\u601d\u8def\u5c31\u662f\u4f7f\u7528DFS(\u6df1\u5ea6\u4f18\u5148\u904d\u5386),\u904d\u5386\u5b8c\u4e00\u6761\u8def\u5f84\u7136\u540e\u518d\u53bb\u904d\u5386\u53e6\u4e00\u6761\u8def\u5f84\uff0c\u901a\u8fc7\u4f7f\u7528\u4e00\u4e2aused\u5bf9\u8c61\u6765\u8bb0\u5f55\u76ee\u6807\u5143\u7d20\u662f\u5426\u88ab\u904d\u5386\u8fc7\uff0c\u6765\u5b9e\u73b0DFS\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var permute = function(nums) {\n    const result = [];\n    const used = {};\n    \n    function dfs(paths) {\n        if (paths.length === nums.length) {\n            result.push(paths.slice());\n            return;\n        }\n        for (let i = 0; i < nums.length; i++) {\n            if (used[i]) {\n                continue;\n            }\n            paths.push(nums[i]);\n            paths\n            used[i] = true;\n            dfs(paths);\n            paths.pop();\n            used[i] = false;\n        }\n    }\n    \n    dfs([])\n    return result;\n};\n")),(0,a.kt)("h2",{id:"\u9898\u76ee\u53cd\u601d"},"\u9898\u76ee\u53cd\u601d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DFS\u5b9e\u73b0\u7684\u6838\u5fc3\u5728\u4e8e\u4f7f\u7528\u4e00\u4e2a\u5bf9\u8c61\u6765\u8bb0\u5f55\u76ee\u6807\u5143\u7d20\u662f\u5426\u904d\u5386\u8fc7\u3002"),(0,a.kt)("li",{parentName:"ul"},"dfs\u904d\u5386\u5b8c\u4e00\u6761\u8def\u5f84\u4e4b\u540e\uff0c\u9700\u8981\u5c06\u8def\u5f84\u6570\u7ec4\u4e2d\u53bb\u6389\u6808\u9876\u5143\u7d20\uff0c\u7136\u540e\u5c06\u8be5\u5143\u7d20\u7f6e\u672a\u904d\u5386\u72b6\u6001\u3002")))}d.isMDXComponent=!0}}]);