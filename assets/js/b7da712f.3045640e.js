"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[53314],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},65512:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"LeetCode\u2014\u201402.\u6574\u6570\u53cd\u8f6c",date:new Date("2020-05-25T00:00:00.000Z"),categories:"LeetCode",tags:["LeetCode"]},i=void 0,l={permalink:"/blog/LeetCode\u2014\u201402.\u6574\u6570\u53cd\u8f6c",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/LeetCode\u2014\u201402.\u6574\u6570\u53cd\u8f6c.md",source:"@site/blog/LeetCode\u2014\u201402.\u6574\u6570\u53cd\u8f6c.md",title:"LeetCode\u2014\u201402.\u6574\u6570\u53cd\u8f6c",description:"\u7b2c7\u9898\uff08\u6574\u6570\u53cd\u8f6c\uff09",date:"2020-05-25T00:00:00.000Z",formattedDate:"2020\u5e745\u670825\u65e5",tags:[{label:"LeetCode",permalink:"/blog/tags/leet-code"}],readingTime:.825,hasTruncateMarker:!1,authors:[],frontMatter:{title:"LeetCode\u2014\u201402.\u6574\u6570\u53cd\u8f6c",date:"2020-05-25T00:00:00.000Z",categories:"LeetCode",tags:["LeetCode"]},prevItem:{title:"LeetCode\u2014\u201401.\u4e24\u6570\u4e4b\u548c",permalink:"/blog/LeetCode\u2014\u201401.\u4e24\u6570\u4e4b\u548c"},nextItem:{title:"python\u2014\u2014split\u548cjoin\u51fd\u6570",permalink:"/blog/python\u2014\u2014split\u548cjoin\u51fd\u6570"}},c={authorsImageUrls:[]},p=[{value:"\u7b2c7\u9898\uff08\u6574\u6570\u53cd\u8f6c\uff09",id:"\u7b2c7\u9898\u6574\u6570\u53cd\u8f6c",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u7b2c7\u9898\u6574\u6570\u53cd\u8f6c"},"\u7b2c7\u9898\uff08\u6574\u6570\u53cd\u8f6c\uff09"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def reverse(self, x):\n        """\n        :type x: int\n        :rtype: int\n        """\n        # \u65e0\u8bba\u6b63\u8d1f\u5148\u8f6c\u4e3a\u6b63\u6570\n        integ = abs(x)\n        # \u5b9a\u4e49\u8fd4\u56de\u7684\u7ed3\u679c\n        result = 0\n        # \u53ea\u8981\u6b63\u6570\u4e0d\u4e3a\u96f6\u5c31\u8fdb\u5165\u5faa\u73af\n        while integ != 0:\n            # \u53d6\u51fa\u6700\u540e\u4e00\u4f4d\n            last_num = integ % 10\n            # \u53bb\u6389\u6700\u540e\u4e00\u4f4d\n            integ = integ // 10\n            # \u7ec4\u5408\u53cd\u8f6c\u540e\u7684\u6570\u5b57\uff0c\u56e0\u4e3a\u6700\u540e\u4e00\u4f4d\u548c\u5bfc\u6570\u7b2c\u4e8c\u4f4d\u6709\u5927\u81f4\u5341\u500d\u7684\u5173\u7cfb\n            result = result * 10 + last_num\n        # \u4f7f\u5f97\u8f93\u51fa\u7684\u6570\u636e\u7b26\u5408\u7279\u5b9a\u533a\u95f4 \u5426\u5219\u8fd4\u56de0\n        if x > 0:\n            if result <= 2**31 - 1:\n                return result\n            else:\n                return 0\n        else:\n            if -result < -(2**31):\n                return 0\n            else:\n                return (-result)\n')))}u.isMDXComponent=!0}}]);