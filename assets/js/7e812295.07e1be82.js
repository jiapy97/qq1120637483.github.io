"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[16936],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=l,b=s["".concat(c,".").concat(m)]||s[m]||u[m]||a;return n?r.createElement(b,o(o({ref:t},d),{},{components:n})):r.createElement(b,o({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),l=(n(67294),n(3905));const a={title:"\u4e00\u9053\u8003\u67e5\u9762\u8bd5\u8005CSS\u529f\u5e95\u7684\u9762\u8bd5\u9898\u2014\u5b9e\u73b0CSS\u4e5d\u5bab\u683c",date:"2021-10-5",author:"Justin",top:!1,cover:!1,categories:"\u9762\u8bd5\u9898",tags:["\u9762\u8bd5\u9898"]},o=void 0,i={permalink:"/blog/\u4e00\u9053\u8003\u67e5\u9762\u8bd5\u8005CSS\u529f\u5e95\u7684\u9762\u8bd5\u9898\u2014\u5b9e\u73b0CSS\u4e5d\u5bab\u683c",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/\u4e00\u9053\u8003\u67e5\u9762\u8bd5\u8005CSS\u529f\u5e95\u7684\u9762\u8bd5\u9898\u2014\u5b9e\u73b0CSS\u4e5d\u5bab\u683c.md",source:"@site/blog\\\u4e00\u9053\u8003\u67e5\u9762\u8bd5\u8005CSS\u529f\u5e95\u7684\u9762\u8bd5\u9898\u2014\u5b9e\u73b0CSS\u4e5d\u5bab\u683c.md",title:"\u4e00\u9053\u8003\u67e5\u9762\u8bd5\u8005CSS\u529f\u5e95\u7684\u9762\u8bd5\u9898\u2014\u5b9e\u73b0CSS\u4e5d\u5bab\u683c",description:"\u901a\u8fc7CSS\u5b9e\u73b0\u4e5d\u5bab\u683c\u53ef\u4ee5\u5f88\u597d\u7684\u8003\u67e5\u5019\u9009\u4eba\u7684CSS\u57fa\u672c\u529f\uff0c\u6240\u4ee5\u5728\u5f53\u4eca\u7684\u524d\u7aef\u9762\u8bd5\u4e2d\uff0c\u65e0\u8bba\u662f\u5927\u5382\u8fd8\u662f\u5c0f\u5382\uff0c\u8fd9\u4e2a\u9762\u8bd5\u9898\u7ecf\u5e38\u51fa\u73b0\u5728\u5019\u9009\u4eba\u9762\u524d\uff0c\u8fd9\u9053\u9898\u76ee\u770b\u4f3c\u7b80\u5355\uff0c\u4f46\u662f\u6700\u7ec8\u80fd\u591f\u505a\u51fa\u6765\u7684\u4eba\u4e5f\u662f\u51e4\u6bdb\u9e9f\u89d2\uff0c\u8ba9\u6211\u4eec\u6765\u4e00\u63a2\u7a76\u7adf\u5427\u3002",date:"2021-10-05T00:00:00.000Z",formattedDate:"2021\u5e7410\u67085\u65e5",tags:[{label:"\u9762\u8bd5\u9898",permalink:"/blog/tags/\u9762\u8bd5\u9898"}],readingTime:1.54,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"\u4e00\u9053\u8003\u67e5\u9762\u8bd5\u8005CSS\u529f\u5e95\u7684\u9762\u8bd5\u9898\u2014\u5b9e\u73b0CSS\u4e5d\u5bab\u683c",date:"2021-10-5",author:"Justin",top:!1,cover:!1,categories:"\u9762\u8bd5\u9898",tags:["\u9762\u8bd5\u9898"]},prevItem:{title:"\u4e00\u7bc7\u6587\u7ae0\uff0c\u5f7b\u5e95\u641e\u61c2\u6d4f\u89c8\u5668\u7684\u7f13\u5b58\u673a\u5236",permalink:"/blog/\u4e00\u7bc7\u6587\u7ae0\uff0c\u5f7b\u5e95\u641e\u61c2\u6d4f\u89c8\u5668\u7684\u7f13\u5b58\u673a\u5236"},nextItem:{title:"LeetCode\u2014\u2014\u722c\u697c\u68af\uff08\u52a8\u6001\u89c4\u5212\uff09",permalink:"/blog/LeetCode\u2014\u2014\u722c\u697c\u68af\uff08\u52a8\u6001\u89c4\u5212\uff09"}},c={authorsImageUrls:[void 0]},p=[{value:"\u65b9\u6cd5\u4e00\uff1a\u4f7f\u7528table",id:"\u65b9\u6cd5\u4e00\u4f7f\u7528table",level:2},{value:"HTML\u90e8\u5206",id:"html\u90e8\u5206",level:3},{value:"CSS\u90e8\u5206",id:"css\u90e8\u5206",level:3},{value:"\u65b9\u6cd5\u4e8c\uff1a\u4f7f\u7528flex\u5e03\u5c40",id:"\u65b9\u6cd5\u4e8c\u4f7f\u7528flex\u5e03\u5c40",level:2},{value:"HTML\u90e8\u5206",id:"html\u90e8\u5206-1",level:3},{value:"CSS\u90e8\u5206",id:"css\u90e8\u5206-1",level:3},{value:"\u5b9e\u73b0\u6548\u679c",id:"\u5b9e\u73b0\u6548\u679c",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7CSS\u5b9e\u73b0\u4e5d\u5bab\u683c\u53ef\u4ee5\u5f88\u597d\u7684\u8003\u67e5\u5019\u9009\u4eba\u7684CSS\u57fa\u672c\u529f\uff0c\u6240\u4ee5\u5728\u5f53\u4eca\u7684\u524d\u7aef\u9762\u8bd5\u4e2d\uff0c\u65e0\u8bba\u662f\u5927\u5382\u8fd8\u662f\u5c0f\u5382\uff0c\u8fd9\u4e2a\u9762\u8bd5\u9898\u7ecf\u5e38\u51fa\u73b0\u5728\u5019\u9009\u4eba\u9762\u524d\uff0c\u8fd9\u9053\u9898\u76ee\u770b\u4f3c\u7b80\u5355\uff0c\u4f46\u662f\u6700\u7ec8\u80fd\u591f\u505a\u51fa\u6765\u7684\u4eba\u4e5f\u662f\u51e4\u6bdb\u9e9f\u89d2\uff0c\u8ba9\u6211\u4eec\u6765\u4e00\u63a2\u7a76\u7adf\u5427\u3002")),(0,l.kt)("h2",{id:"\u65b9\u6cd5\u4e00\u4f7f\u7528table"},"\u65b9\u6cd5\u4e00\uff1a\u4f7f\u7528table"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"table\u5e03\u5c40\u80fd\u591f\u5b9e\u73b0\u7684\u539f\u56e0\u5728\u4e8etable\u7684tr\u548ctd\u80fd\u591f\u5c06\u5143\u7d20\u5f62\u6210\u884c\u5217\u663e\u793a\u3002table\u5e03\u5c40\u4e2d\u6709\u4e00\u4e2a\u662f\u5426\u5408\u5e76\u8fb9\u6846\u7684\u6837\u5f0fborder-collapse: collapse;\u503c\u5f97\u6211\u4eec\u6ce8\u610f\u3002")),(0,l.kt)("h3",{id:"html\u90e8\u5206"},"HTML\u90e8\u5206"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<table>\n    <tr>\n        <td>1</td>\n        <td>2</td>\n        <td>3</td>\n    </tr>\n    <tr>\n        <td>4</td>\n        <td>5</td>\n        <td>6</td>\n    </tr>\n    <tr>\n        <td>7</td>\n        <td>8</td>\n        <td>9</td>\n    </tr>\n</table>\n")),(0,l.kt)("h3",{id:"css\u90e8\u5206"},"CSS\u90e8\u5206"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"* {\n    margin: 0;\n    padding: 0;\n}\ntable {\n    border-collapse: collapse;\n    margin: 0 auto;\n}\ntable td {\n    width: 60px;\n    height: 60px;\n    background-color: blue;\n    border: 1px solid #000;\n    text-align: center;\n    line-height: 60px;;\n}\n")),(0,l.kt)("h2",{id:"\u65b9\u6cd5\u4e8c\u4f7f\u7528flex\u5e03\u5c40"},"\u65b9\u6cd5\u4e8c\uff1a\u4f7f\u7528flex\u5e03\u5c40"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528flex\u5e03\u5c40\u7684\u6838\u5fc3\u5728\u4e8eflex-wrap: wrap\u3002")),(0,l.kt)("h3",{id:"html\u90e8\u5206-1"},"HTML\u90e8\u5206"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<ul>\n    <li>1</li>\n    <li>2</li>\n    <li>3</li>\n    <li>4</li>\n    <li>5</li>\n    <li>6</li>\n    <li>7</li>\n    <li>8</li>\n    <li>9</li>\n</ul>\n")),(0,l.kt)("h3",{id:"css\u90e8\u5206-1"},"CSS\u90e8\u5206"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\nli {\n    list-style: none;\n}\nul {\n    display: flex;\n    flex-wrap: wrap;\n    width: 180px;\n    height: 180px;\n}\nul > li {\n    background-color: blue;\n    width: calc(100% / 3);\n    height: 60px;\n    line-height: 60px;\n    border: 1px solid #000;\n    text-align: center;\n}\n")),(0,l.kt)("h2",{id:"\u5b9e\u73b0\u6548\u679c"},"\u5b9e\u73b0\u6548\u679c"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/136dde832b618a8935fdb21b35f3b727.png",alt:"image.png"})))}u.isMDXComponent=!0}}]);