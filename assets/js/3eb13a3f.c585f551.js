"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[26482],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),g=o,f=d["".concat(u,".").concat(g)]||d[g]||s[g]||l;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1312:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const l={title:"LeetCode\u2014\u2014\u4e8c\u53c9\u6811\u7684\u5c42\u5e8f\u904d\u5386\uff08\u9012\u5f52\u4e0e\u975e\u9012\u5f52\uff09",date:new Date("2021-10-27T00:00:00.000Z"),author:"Justin",top:!1,cover:!1,categories:"LeetCode",tags:["LeetCode"]},a=void 0,i={permalink:"/blog/LeetCode\u2014\u2014\u4e8c\u53c9\u6811\u7684\u5c42\u5e8f\u904d\u5386\uff08\u9012\u5f52\u4e0e\u975e\u9012\u5f52\uff09",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/LeetCode\u2014\u2014\u4e8c\u53c9\u6811\u7684\u5c42\u5e8f\u904d\u5386\uff08\u9012\u5f52\u4e0e\u975e\u9012\u5f52\uff09.md",source:"@site/blog/LeetCode\u2014\u2014\u4e8c\u53c9\u6811\u7684\u5c42\u5e8f\u904d\u5386\uff08\u9012\u5f52\u4e0e\u975e\u9012\u5f52\uff09.md",title:"LeetCode\u2014\u2014\u4e8c\u53c9\u6811\u7684\u5c42\u5e8f\u904d\u5386\uff08\u9012\u5f52\u4e0e\u975e\u9012\u5f52\uff09",description:"\u9898\u76ee\u63cf\u8ff0",date:"2021-10-27T00:00:00.000Z",formattedDate:"2021\u5e7410\u670827\u65e5",tags:[{label:"LeetCode",permalink:"/blog/tags/leet-code"}],readingTime:2.58,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"LeetCode\u2014\u2014\u4e8c\u53c9\u6811\u7684\u5c42\u5e8f\u904d\u5386\uff08\u9012\u5f52\u4e0e\u975e\u9012\u5f52\uff09",date:"2021-10-27T00:00:00.000Z",author:"Justin",top:!1,cover:!1,categories:"LeetCode",tags:["LeetCode"]},prevItem:{title:"Egg.js\u4e2d\u4f7f\u7528extend\u3001Cookie\u3001Session\u7684\u57fa\u672c\u65b9\u5f0f",permalink:"/blog/Egg.js\u4e2d\u4f7f\u7528extend\u3001Cookie\u3001Session\u7684\u57fa\u672c\u65b9\u5f0f"},nextItem:{title:"\u4e00\u7bc7\u6587\u7ae0\u638c\u63e1Egg.js\u7684\u6838\u5fc3\u7528\u6cd5",permalink:"/blog/\u4e00\u7bc7\u6587\u7ae0\u638c\u63e1Egg.js\u7684\u6838\u5fc3\u7528\u6cd5"}},u={authorsImageUrls:[void 0]},c=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u9012\u5f52\u5b9e\u73b0",id:"\u9012\u5f52\u5b9e\u73b0",level:2},{value:"\u975e\u9012\u5f52\u5b9e\u73b0",id:"\u975e\u9012\u5f52\u5b9e\u73b0",level:2},{value:"\u9898\u76ee\u53cd\u601d",id:"\u9898\u76ee\u53cd\u601d",level:2}],p={toc:c};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u9898\u76ee\u63cf\u8ff0"},"\u9898\u76ee\u63cf\u8ff0"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/529dbcc0afd64c348aa3db92f4bfbc46.png",alt:"image.png"})),(0,o.kt)("h2",{id:"\u9012\u5f52\u5b9e\u73b0"},"\u9012\u5f52\u5b9e\u73b0"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u9012\u5f52\u5b9e\u73b0\u4e3b\u8981\u662f\u5728\u51fd\u6570\u5185\u90e8\u5b9a\u4e49\u4e00\u4e2a\u65b0\u7684\u51fd\u6570\uff0c\u8fd9\u4e2a\u51fd\u6570\u63a5\u6536\u4e24\u4e2a\u53c2\u6570\uff0c\u4e00\u4e2a\u662f\u5f53\u524d\u8282\u70b9\uff0c\u4e00\u4e2a\u662f\u5c42\u6b21\uff0c\u5982\u679c\u5f53\u524d\u8282\u70b9\u4e3a\u7a7a\u7684\u8bdd\uff0c\u5219\u8fd4\u56de\u7a7a\uff0c\u5982\u679c\u5f53\u524d\u8282\u70b9\u4e0d\u4e3a\u7a7a\uff0c\u5224\u65ad\u4e8c\u7ef4\u6570\u7ec4\u7684\u6307\u5b9a\u4f4d\u7f6e\u662f\u5426\u4e3a\u7a7a\uff0c\u5982\u679c\u5b58\u5728\u5219push\u8fdb\u5f53\u524d\u8282\u70b9\u7684val\u503c\uff0c\u5982\u679c\u4e0d\u5b58\u5728\u5219\u8bbe\u7f6e\u4e3a\u7a7a\u6570\u7ec4\uff0c\u7136\u540e\u9012\u5f52\u904d\u5386\u5de6\u5b50\u6811\uff0c\u5c42\u6b21+1\uff0c\u9012\u5f52\u904d\u5386\u53f3\u5b50\u6811\u7684\u65f6\u5019\u5c42\u6b21\u8fd8\u662f+1\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var levelOrder = function(root) {\n  // \u5b9a\u4e49\u6700\u7ec8\u7684\u8fd4\u56de\u7ed3\u679c\n  const res = [];\n  function levelOrder(root,level) {\n    if (!root) return null;\n    res[level] = res[level] || [];\n    res[level].push(root.val);\n    levelOrder(root.left,level + 1);\n    levelOrder(root.right,level + 1);\n  };\n  levelOrder(root,0);\n  return res;\n};\n")),(0,o.kt)("h2",{id:"\u975e\u9012\u5f52\u5b9e\u73b0"},"\u975e\u9012\u5f52\u5b9e\u73b0"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u975e\u9012\u5f52\u5b9e\u73b0\u4e3b\u8981\u662f\u501f\u52a9\u961f\u5217\u6765\u5b9e\u73b0\uff0c\u9996\u5148\u83b7\u53d6\u961f\u5217\u4e2d\u5bf9\u5e94\u4e8c\u53c9\u6811\u7684\u4e00\u5c42\u7684\u5143\u7d20\uff0c\u7136\u540e\u53d6\u51fa\u961f\u5934\u5143\u7d20\u63d2\u5165\u6307\u5b9a\u4e8c\u7ef4\u6570\u7ec4\u4e2d\uff0c\u5982\u679c\u5de6\u5b50\u6811\u5b58\u5728\u7684\u8bdd\uff0c\u8ba9\u5de6\u5b50\u6811\u5165\u961f\u5217\uff0c\u5982\u679c\u53f3\u5b50\u6811\u5b58\u5728\uff0c\u5219\u8ba9\u53f3\u5b50\u6811\u5165\u961f\u5217\uff0c\u5faa\u73af\u5b8c\u4e00\u5c42\u961f\u5217\u7684\u5c42\u6b21+1\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var levelOrder = function(root) {\n  if (!root) return []\n  // \u5b9a\u4e49\u6700\u7ec8\u7684\u8fd4\u56de\u7ed3\u679c\n  const res = [];\n  // \u5b9a\u4e49\u961f\u5217\n  const queue = [root];\n  // \u5b9a\u4e49\u5c42\u6b21\n  let level = 0;\n  // \u53ea\u8981\u961f\u5217\u4e2d\u6709\u5143\u7d20\uff0c\u4fbf\u8fdb\u5165\u5faa\u73af\n  while (queue.length) {\n    res.push([]);\n    let len = queue.length;\n    for (let i = 0; i < len; i++) {\n      // \u53d6\u51fa\u5bf9\u5934\u5143\u7d20\n      let node = queue.shift();\n      res[level].push(node.val);\n      // \u5de6\u5b50\u6811\u5b58\u5728\u7684\u8bdd\uff0c\u8ba9\u5de6\u5b50\u6811\u5165\u961f\u5217\n      node.left && queue.push(node.left);\n      // \u53f3\u5b50\u6811\u5b58\u5728\u7684\u8bdd\uff0c\u8ba9\u53f3\u5b50\u6811\u5165\u961f\u5217\n      node.right && queue.push(node.right);\n    }\n    level++;\n  }\n  return res;\n};\n")),(0,o.kt)("h2",{id:"\u9898\u76ee\u53cd\u601d"},"\u9898\u76ee\u53cd\u601d"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4e8c\u53c9\u6811\u7684\u5c42\u5e8f\u904d\u5386\u662f\u4e00\u79cd\u975e\u5e38\u91cd\u8981\u7684\u904d\u5386\u65b9\u5f0f\uff0c\u662f\u6211\u4eec\u5fc5\u987b\u638c\u63e1\u7684\uff0c\u672c\u9898\u4e2d\u503c\u5f97\u6211\u4eec\u5b66\u4e60\u7684\u601d\u8def\u6709\u4ee5\u4e0b\u51e0\u70b9\u3002")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u9012\u5f52\u7684\u5c42\u5e8f\u904d\u5386\u548c\u4f7f\u7528\u8fed\u4ee3\u7684\u5c42\u5e8f\u904d\u5386\u90fd\u9700\u8981\u501f\u52a9\u5c42\u6570level\u8fd9\u4e2a\u53d8\u91cf\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u9012\u5f52\u7684\u601d\u60f3\u548c\u961f\u5217\u7684\u601d\u60f3\u503c\u5f97\u6211\u4eec\u5b66\u4e60\u3002")))}s.isMDXComponent=!0}}]);