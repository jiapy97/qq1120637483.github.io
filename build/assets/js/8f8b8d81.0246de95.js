"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[10609],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),s=a,g=d["".concat(c,".").concat(s)]||d[s]||m[s]||l;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11153:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"LeetCode\u2014\u2014K\u4e2a\u4e00\u7ec4\u7ffb\u8f6c\u94fe\u8868\uff08\u4e09\u6307\u9488\uff09",date:new Date("2021-11-12T00:00:00.000Z"),author:"Justin",top:!1,cover:!1,categories:"LeetCode",tags:["LeetCode"]},o=void 0,i={permalink:"/blog/LeetCode\u2014\u2014K\u4e2a\u4e00\u7ec4\u7ffb\u8f6c\u94fe\u8868\uff08\u4e09\u6307\u9488\uff09",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/LeetCode\u2014\u2014K\u4e2a\u4e00\u7ec4\u7ffb\u8f6c\u94fe\u8868\uff08\u4e09\u6307\u9488\uff09.md",source:"@site/blog\\LeetCode\u2014\u2014K\u4e2a\u4e00\u7ec4\u7ffb\u8f6c\u94fe\u8868\uff08\u4e09\u6307\u9488\uff09.md",title:"LeetCode\u2014\u2014K\u4e2a\u4e00\u7ec4\u7ffb\u8f6c\u94fe\u8868\uff08\u4e09\u6307\u9488\uff09",description:"\u9898\u76ee\u63cf\u8ff0",date:"2021-11-12T00:00:00.000Z",formattedDate:"2021\u5e7411\u670812\u65e5",tags:[{label:"LeetCode",permalink:"/blog/tags/leet-code"}],readingTime:2.455,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"LeetCode\u2014\u2014K\u4e2a\u4e00\u7ec4\u7ffb\u8f6c\u94fe\u8868\uff08\u4e09\u6307\u9488\uff09",date:"2021-11-12T00:00:00.000Z",author:"Justin",top:!1,cover:!1,categories:"LeetCode",tags:["LeetCode"]},prevItem:{title:"Egg.js\u4e2d\u95f4\u4ef6\u8fdb\u884c\u767b\u5f55\u9274\u6743\u7684\u6838\u5fc3\u601d\u8def",permalink:"/blog/Egg.js\u4e2d\u95f4\u4ef6\u8fdb\u884c\u767b\u5f55\u9274\u6743\u7684\u6838\u5fc3\u601d\u8def"},nextItem:{title:"Egg\u4e2d\u4f7f\u7528Sequelize ORM\u6846\u67b6\u64cd\u4f5cMySQL--\u589e\u5220\u6539\u67e5",permalink:"/blog/Egg\u4e2d\u4f7f\u7528Sequelize ORM\u6846\u67b6\u64cd\u4f5cMySQL--\u589e\u5220\u6539\u67e5"}},c={authorsImageUrls:[void 0]},p=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u89e3\u9898\u601d\u8def",id:"\u89e3\u9898\u601d\u8def",level:2},{value:"AC\u4ee3\u7801",id:"ac\u4ee3\u7801",level:2},{value:"\u56fe\u89e3\u6838\u5fc3\u601d\u8def",id:"\u56fe\u89e3\u6838\u5fc3\u601d\u8def",level:2},{value:"\u9898\u76ee\u53cd\u601d",id:"\u9898\u76ee\u53cd\u601d",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u9898\u76ee\u63cf\u8ff0"},"\u9898\u76ee\u63cf\u8ff0"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/b5e72973697fc02eb24bd50bc40767a4.png",alt:"image.png"})),(0,a.kt)("h2",{id:"\u89e3\u9898\u601d\u8def"},"\u89e3\u9898\u601d\u8def"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9996\u5148\u5224\u65ad\u4f20\u5165\u7684\u94fe\u8868\u7684\u957f\u5ea6\u662f\u5426\u5c0f\u4e8eK\uff0c\u5982\u679c\u5c0f\u4e8eK\u5219\u8fd4\u56de\u539f\u94fe\u8868\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f20\u5165\u7684\u94fe\u8868\u7684\u957f\u5ea6\u5927\u4e8e\u7b49\u4e8ek\uff0c\u5219\u7ee7\u7eed\u4e0b\u9762\u7684\u5224\u65ad\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u521d\u59cb\u5316\u4e24\u4e2a\u6307\u9488\uff0cprev\u548ccur,prev\u6307\u9488\u521d\u59cb\u7684\u65f6\u5019\u4e3anull,cur\u521d\u59cb\u7684\u65f6\u5019\u4e3ahead\u6307\u9488\u6307\u5411\u7684\u4f4d\u7f6e\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6838\u5fc3\u5faa\u73af\uff1a\u9996\u5148\u4fdd\u5b58\u5f53\u524d\u6307\u9488\u7684\u4e0b\u4e00\u4e2a\u6307\u9488\uff0c\u7136\u540e\u8ba9prev\u524d\u8fdb\u4e00\u4e2a\uff0c\u8ba9cur\u524d\u8fdb\u4e00\u4e2a\uff0c\u6700\u540e\u5c06cur\u6307\u9488\u6307\u5411\u7684\u6295\u5165\u9012\u5f52\uff0c\u6240\u6709\u9012\u5f52\u7ed3\u675f\u7684\u65f6\u5019\uff0c\u8fd4\u56deprev\u3002")),(0,a.kt)("h2",{id:"ac\u4ee3\u7801"},"AC\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var reverseKGroup = function(head, k) {\n  // \u9996\u5148\u5224\u65ad\u4f20\u5165\u7684\u94fe\u8868\u7684\u957f\u5ea6\u662f\u5426\u5c0f\u4e8ek\uff0c\u5982\u679c\u5c0f\u4e8ek\uff0c\u5219\u8fd4\u56de\u539f\u94fe\u8868\n  let flag = 0;\n  let temp = head;\n  while (temp) {\n    temp = temp.next;\n    flag++;\n  }\n  if (flag < k) {\n    return head;\n  }\n  // \u521d\u59cb\u5316\u6307\u9488\n  let prev = null;\n  let cur = head;\n  let n = k;\n  while (cur != null && n-- > 0) {\n    // \u9996\u5148\u4fdd\u5b58\u540e\u4e00\u4e2a\u8282\u70b9\n    let next = cur.next;\n    // cur\u6307\u9488\u7684next\u57df\u6307\u5411\u524d\u4e00\u4e2a\u8282\u70b9\n    cur.next = prev;\n    prev = cur;\n    cur = next;\n  }\n  // \u4fee\u6539head\u6307\u9488\u7684next\u57df\u6307\u5411\u9012\u5f52\u7684\u8fd4\u56de\u7ed3\u679c\n  head.next = reverseKGroup(cur,k);\n  return prev;\n};\n")),(0,a.kt)("h2",{id:"\u56fe\u89e3\u6838\u5fc3\u601d\u8def"},"\u56fe\u89e3\u6838\u5fc3\u601d\u8def"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/b9c34525dc547d9dad167255923006c4.png",alt:"image.png"})),(0,a.kt)("h2",{id:"\u9898\u76ee\u53cd\u601d"},"\u9898\u76ee\u53cd\u601d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5173\u4e8e\u94fe\u8868\u53cd\u8f6c\u7c7b\u9898\u76ee\uff0c\u53ef\u80fd\u4f1a\u7528\u5230\u4e09\u6307\u9488\uff0c\u6211\u4eec\u8981\u60f3\u5230\u8fd9\u4e00\u70b9\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6307\u9488\u53cd\u8f6c\u7684\u65f6\u5019\uff0c\u5f88\u91cd\u8981\u7684\u4e00\u6b65\u5c31\u662f\u4fdd\u5b58\u540e\u4e00\u4e2a\u6307\u9488\uff0c\u9632\u6b62\u8fd9\u4e2a\u6307\u9488\u4e22\u5931\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5faa\u73af\u7684\u65f6\u5019\uff0c\u4e00\u5b9a\u8981\u641e\u6e05\u695a\u5f53\u5faa\u73af\u7ed3\u675f\u7684\u65f6\u5019\uff0c\u6bcf\u4e00\u4e2a\u6307\u9488\u6240\u5728\u7684\u4f4d\u7f6e\uff0c\u4ee5\u53ca\u6bcf\u4e00\u4e2a\u6307\u9488\u7684\u542b\u4e49\uff0c\u53ea\u6709\u641e\u6e05\u695a\u8fd9\u4e00\u70b9\uff0c\u624d\u77e5\u9053\u5c06\u54ea\u4e00\u4e2a\u6307\u9488\u6295\u5165\u9012\u5f52\uff0c\u624d\u660e\u767d\u9012\u5f52\u8fd4\u56de\u7684\u7ed3\u679c\u7684\u542b\u4e49\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u94fe\u8868\u7c7b\u7684\u9898\u76ee\u4e2d\uff0c\u53cd\u8f6c\u5404\u79cd\u94fe\u8868\u662f\u9762\u8bd5\u7684\u5e38\u8003\u9898\uff0c\u8fd9\u9053\u9898\u76ee\u6307\u7684\u6211\u4eec\u53cd\u590d\u63e3\u6469\u3002")),(0,a.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/reverse-nodes-in-k-group/solution/25-k-ge-yi-zu-fan-zhuan-lian-biao-by-xin-wves/"},"LeetCode\u9898\u89e3"))))}m.isMDXComponent=!0}}]);