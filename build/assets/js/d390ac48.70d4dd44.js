"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[12264],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=o,f=s["".concat(c,".").concat(m)]||s[m]||u[m]||a;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},31182:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"LeetCode\u2014\u2014\u5408\u5e76\u4e24\u4e2a\u6392\u5e8f\u7684\u94fe\u8868\uff08JS\u5b9e\u73b0\uff09",date:new Date("2021-04-09T00:00:00.000Z"),categories:"LeetCode",tags:["LeetCode"]},l=void 0,i={permalink:"/blog/LeetCode\u2014\u2014\u5408\u5e76\u4e24\u4e2a\u6392\u5e8f\u7684\u94fe\u8868\uff08JS\u5b9e\u73b0\uff09",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/LeetCode\u2014\u2014\u5408\u5e76\u4e24\u4e2a\u6392\u5e8f\u7684\u94fe\u8868\uff08JS\u5b9e\u73b0\uff09.md",source:"@site/blog\\LeetCode\u2014\u2014\u5408\u5e76\u4e24\u4e2a\u6392\u5e8f\u7684\u94fe\u8868\uff08JS\u5b9e\u73b0\uff09.md",title:"LeetCode\u2014\u2014\u5408\u5e76\u4e24\u4e2a\u6392\u5e8f\u7684\u94fe\u8868\uff08JS\u5b9e\u73b0\uff09",description:"\u9898\u76ee\u63cf\u8ff0",date:"2021-04-09T00:00:00.000Z",formattedDate:"2021\u5e744\u67089\u65e5",tags:[{label:"LeetCode",permalink:"/blog/tags/leet-code"}],readingTime:1.18,hasTruncateMarker:!1,authors:[],frontMatter:{title:"LeetCode\u2014\u2014\u5408\u5e76\u4e24\u4e2a\u6392\u5e8f\u7684\u94fe\u8868\uff08JS\u5b9e\u73b0\uff09",date:"2021-04-09T00:00:00.000Z",categories:"LeetCode",tags:["LeetCode"]},prevItem:{title:"\u7ed9npm\u6362\u6210\u56fd\u5185\u6e90\uff0c\u63d0\u9ad8creat-react-app\u7684\u5b89\u88c5\u901f\u5ea6",permalink:"/blog/\u7ed9npm\u6362\u6210\u56fd\u5185\u6e90\uff0c\u63d0\u9ad8creat-react-app\u7684\u5b89\u88c5\u901f\u5ea6"},nextItem:{title:"LeetCode\u2014\u2014\u590d\u6742\u94fe\u8868\u7684\u590d\u5236\uff08JS\u5b9e\u73b0\uff09",permalink:"/blog/LeetCode\u2014\u2014\u590d\u6742\u94fe\u8868\u7684\u590d\u5236\uff08JS\u5b9e\u73b0\uff09"}},c={authorsImageUrls:[]},p=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u89e3\u9898\u601d\u8def",id:"\u89e3\u9898\u601d\u8def",level:2},{value:"\u5b9e\u73b0\u4ee3\u7801",id:"\u5b9e\u73b0\u4ee3\u7801",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u9898\u76ee\u63cf\u8ff0"},"\u9898\u76ee\u63cf\u8ff0"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/615bcca73cd8341eb6a92718d15c9128.png",alt:null})),(0,o.kt)("h2",{id:"\u89e3\u9898\u601d\u8def"},"\u89e3\u9898\u601d\u8def"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u94fe\u8868\u8282\u70b9newNode"),(0,o.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u4e00\u4e2a\u4e34\u65f6\u6307\u9488h\u6307\u5411\u8fd9\u4e2a\u65b0\u7684\u8282\u70b9newNode"),(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528while\u5faa\u73af\uff0c\u5728\u6761\u4ef6\u4e3aL1\u548cL2\u90fd\u4e0d\u4e3a\u7a7a\u7684\u6761\u4ef6\u4e0b\u904d\u5386\uff0c\u5982\u679cL1\u5f53\u524d\u6570\u636e\u57df\u7684\u503c\u5c0f\uff0c\u5c31\u8ba9newNode\u6307\u5411L1\uff0c\u53cd\u4e4b\u6307\u5411L2"),(0,o.kt)("li",{parentName:"ul"},"while\u5faa\u73af\u904d\u5386\u5b8c\u4e4b\u540e\uff0c\u5982\u679cL1\u548cL2\u8c01\u8fd8\u6709\u5269\u4f59\uff0c\u8c01\u5c31\u52a0\u5230newNode\u7684\u5c3e\u90e8\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u6700\u540e\u8fd4\u56de\u7684\u662fh\u4e34\u65f6\u6307\u9488\u7684next\u57df\uff0c\u56e0\u4e3ah\u4e34\u65f6\u6307\u9488\u521a\u5f00\u59cb\u6307\u5411\u7684\u662f\u6211\u4eec\u65b0\u521b\u5efa\u7684\u8282\u70b9\u3002")),(0,o.kt)("h2",{id:"\u5b9e\u73b0\u4ee3\u7801"},"\u5b9e\u73b0\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var mergeTwoLists = function(l1, l2) {\n    // \u9996\u5148\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u8282\u70b9\n    let newNode = new ListNode();\n    const h = newNode;\n    // \u5faa\u73af\u904d\u5386\u4e24\u4e2a\u5217\u8868\n    while (l1 && l2) {\n        if (l1.val < l2.val) {\n            newNode.next = l1;\n            l1 = l1.next;\n            newNode = newNode.next;\n        } else {\n            newNode.next = l2;\n            l2 = l2.next;\n            newNode = newNode.next;\n        }\n    } \n    if (l1) newNode.next = l1;\n    if (l2) newNode.next = l2;\n    return h.next;\n};\n")))}u.isMDXComponent=!0}}]);