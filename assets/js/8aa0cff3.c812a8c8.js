"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[63286],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91300:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={title:"LeetCode\u2014\u2014\u5220\u9664\u94fe\u8868\u7684\u5012\u6570\u7b2cN\u4e2a\u8282\u70b9\uff08\u5feb\u6162\u6307\u9488\uff09",date:new Date("2022-01-30T00:00:00.000Z"),author:"Justin",top:!1,cover:!1,categories:"LeetCode",tags:["LeetCode"]},l=void 0,i={permalink:"/blog/LeetCode\u2014\u2014\u5220\u9664\u94fe\u8868\u7684\u5012\u6570\u7b2cN\u4e2a\u8282\u70b9\uff08\u5feb\u6162\u6307\u9488\uff09",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/LeetCode\u2014\u2014\u5220\u9664\u94fe\u8868\u7684\u5012\u6570\u7b2cN\u4e2a\u8282\u70b9\uff08\u5feb\u6162\u6307\u9488\uff09.md",source:"@site/blog\\LeetCode\u2014\u2014\u5220\u9664\u94fe\u8868\u7684\u5012\u6570\u7b2cN\u4e2a\u8282\u70b9\uff08\u5feb\u6162\u6307\u9488\uff09.md",title:"LeetCode\u2014\u2014\u5220\u9664\u94fe\u8868\u7684\u5012\u6570\u7b2cN\u4e2a\u8282\u70b9\uff08\u5feb\u6162\u6307\u9488\uff09",description:"\u9898\u76ee\u63cf\u8ff0",date:"2022-01-30T00:00:00.000Z",formattedDate:"2022\u5e741\u670830\u65e5",tags:[{label:"LeetCode",permalink:"/blog/tags/leet-code"}],readingTime:2.515,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"LeetCode\u2014\u2014\u5220\u9664\u94fe\u8868\u7684\u5012\u6570\u7b2cN\u4e2a\u8282\u70b9\uff08\u5feb\u6162\u6307\u9488\uff09",date:"2022-01-30T00:00:00.000Z",author:"Justin",top:!1,cover:!1,categories:"LeetCode",tags:["LeetCode"]},prevItem:{title:"\u4ece\u96f6\u5f00\u59cb\u4f7f\u7528Neo4j\u6784\u5efa\u77e5\u8bc6\u56fe\u8c31\uff08\u4e00\uff09",permalink:"/blog/\u4ece\u96f6\u5f00\u59cb\u4f7f\u7528Neo4j\u6784\u5efa\u77e5\u8bc6\u56fe\u8c31\uff08\u4e00\uff09"},nextItem:{title:"\u8f7b\u91cf\u7ea7\u670d\u52a1\u5668\u901a\u8fc7nginx\u90e8\u7f72express\u9879\u76ee",permalink:"/blog/\u8f7b\u91cf\u7ea7\u670d\u52a1\u5668\u901a\u8fc7nginx\u90e8\u7f72express\u9879\u76ee"}},c={authorsImageUrls:[void 0]},u=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u89e3\u9898\u601d\u8def",id:"\u89e3\u9898\u601d\u8def",level:2},{value:"\u5feb\u6162\u6307\u9488\u4e3a\u4ec0\u4e48\u80fd\u591f\u627e\u5230\u94fe\u8868\u7684\u5012\u6570\u7b2cN\u4e2a\u8282\u70b9",id:"\u5feb\u6162\u6307\u9488\u4e3a\u4ec0\u4e48\u80fd\u591f\u627e\u5230\u94fe\u8868\u7684\u5012\u6570\u7b2cn\u4e2a\u8282\u70b9",level:3},{value:"\u89e3\u9898\u4ee3\u7801",id:"\u89e3\u9898\u4ee3\u7801",level:2},{value:"\u9898\u76ee\u53cd\u601d",id:"\u9898\u76ee\u53cd\u601d",level:2}],p={toc:u};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u9898\u76ee\u63cf\u8ff0"},"\u9898\u76ee\u63cf\u8ff0"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/897a6d3ff3223bcd873c903ef8be95b8.png",alt:"image.png"})),(0,o.kt)("h2",{id:"\u89e3\u9898\u601d\u8def"},"\u89e3\u9898\u601d\u8def"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5220\u9664\u94fe\u8868\u7684\u5012\u6570\u7b2cN\u4e2a\u7ed3\u70b9\uff0c\u6709\u5f88\u591a\u79cd\u89e3\u6cd5\uff0c\u672c\u6b21\u6211\u4eec\u91cd\u70b9\u4ecb\u7ecd\u7684\u662f\u5feb\u6162\u6307\u9488\u6cd5\uff0c\u5feb\u6162\u6307\u9488\u5728\u89e3\u51b3\u94fe\u8868\u95ee\u9898\u7684\u65f6\u5019\uff0c\u901a\u5e38\u80fd\u591f\u5feb\u901f\u89e3\u51b3\u95ee\u9898\uff0c\u8fd9\u4e3b\u8981\u53d6\u51b3\u4e8e\u5feb\u6162\u6307\u9488\u7684\u7279\u70b9\u3002")),(0,o.kt)("h3",{id:"\u5feb\u6162\u6307\u9488\u4e3a\u4ec0\u4e48\u80fd\u591f\u627e\u5230\u94fe\u8868\u7684\u5012\u6570\u7b2cn\u4e2a\u8282\u70b9"},"\u5feb\u6162\u6307\u9488\u4e3a\u4ec0\u4e48\u80fd\u591f\u627e\u5230\u94fe\u8868\u7684\u5012\u6570\u7b2cN\u4e2a\u8282\u70b9"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5047\u8bbe\u4e00\u4e2a\u94fe\u8868\u6709\u4e94\u4e2a\u8282\u70b9\uff0c\u6211\u4eec\u60f3\u8981\u5220\u9664\u5012\u6570\u7b2c2\u4e2a\u8282\u70b9\uff0c\u6211\u4eec\u9996\u5148\u8ba9\u5feb\u6307\u9488\u3001\u4ece\u7b2c\u4e00\u4e2a\u8282\u70b9\u7684\u4f4d\u7f6e\u89e6\u53d1\uff0c\u8d702+1\u4e2a\u8282\u70b9\uff0c\u6211\u4eec\u80fd\u591f\u53d1\u73b0\u6b64\u65f6\u5feb\u6307\u9488\u6709\u4e24\u79cd\u60c5\u51b5\uff0c\u4e00\u662f\u8d70\u5230\u4e86null\uff0c\u4e8c\u662f\u8d70\u5230\u4e86\u5012\u6570\u5012\u6570\u7b2c2\u4e2a\u8282\u70b9\uff0c\u6b64\u65f6\u6211\u4eec\u5206\u60c5\u51b5\u8ba8\u8bba\uff1a")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5feb\u6307\u9488\u8d70\u5230\u4e86null\uff0c\u6b64\u65f6\u5982\u679c\u8fd8\u6ca1\u6709\u8d70\u5b8cn + 1\u4e2a\u8282\u70b9",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u8ba9\u6ee1\u79e9\u9635\u7ee7\u7eed\u8d70\u5b8c\u5269\u4f59\u7684\u8282\u70b9\u6570\u91cf\uff0c\u7136\u540e\u8fd4\u56de\u6162\u6307\u9488\u5373\u53ef\u3002"))),(0,o.kt)("li",{parentName:"ul"},"\u5feb\u6307\u9488\u8d70\u5230\u4e86\u5012\u6570\u7b2cN\u4e2a\u8282\u70b9",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u6b64\u65f6\u5feb\u6162\u6307\u9488\u540c\u65f6\u7ee7\u7eed\u8d70\uff0c\u4e00\u65e6\u5feb\u6307\u9488\u8d70\u5230\u4e86null\uff0c\u5220\u9664\u6162\u6307\u9488\u7684\u4e0b\u4e00\u4e2a\u8282\u70b9\uff0c\u7136\u540e\u8fd4\u56de\u5934\u6307\u9488\u5373\u53ef\u3002")))),(0,o.kt)("h2",{id:"\u89e3\u9898\u4ee3\u7801"},"\u89e3\u9898\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var removeNthFromEnd = function(head, n) {\n  // \u5220\u9664\u94fe\u8868\u7684\u5012\u6570\u7b2cN\u4e2a\u8282\u70b9\u662f\u4e00\u4e2a\u5178\u578b\u7684\u53cc\u6307\u9488\u95ee\u9898\n  let slow = head;\n  let fast = head;\n  let temp = head;\n  // \u7b2c\u4e00\u6b65\uff1a\u8ba9\u5feb\u6307\u9488\u5148\u8d70n\u6b65\n  let count = n+1;\n  while (count && fast) {\n    fast = fast.next;\n    count--;\n  }\n  if (!fast && count) {\n    while (count) {\n      slow = slow.next;\n      count--;\n    }\n    return slow;\n  }\n  while (fast) {\n    fast = fast.next;\n    slow = slow.next;\n  }\n  let stemp = slow.next.next;\n  slow.next = stemp;\n  return temp;\n};\n")),(0,o.kt)("h2",{id:"\u9898\u76ee\u53cd\u601d"},"\u9898\u76ee\u53cd\u601d"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5220\u9664\u94fe\u8868\u7684\u5012\u6570\u7b2cN\u4e2a\u8282\u70b9\uff0c\u5feb\u6162\u6307\u9488\u662f\u4e00\u79cd\u7ecf\u5178\u7684\u65b9\u6cd5\uff0c\u5feb\u6162\u6307\u9488\u4e0d\u4ec5\u80fd\u591f\u89e3\u51b3\u8fd9\u9053\u9898\u76ee\uff0c\u5728\u9762\u8bd5\u4e2d\u8fd8\u7ecf\u5e38\u8003\u67e5\u5230\u5224\u65ad\u94fe\u8868\u662f\u5426\u7531\u73af\uff0c\u8fd9\u4e2a\u4e5f\u662f\u5feb\u6162\u6307\u9488\u7684\u7ecf\u5178\u5e94\u7528\uff0c\u56e0\u6b64\uff0c\u5728\u89e3\u51b3\u95ee\u9898\u7684\u65f6\u5019\uff0c\u6211\u4eec\u4e00\u5b9a\u8981\u5b66\u4f1a\u4e3e\u4e00\u53cd\u4e09\uff0c\u5bfb\u627e\u89c4\u5f8b\u3002")))}s.isMDXComponent=!0}}]);