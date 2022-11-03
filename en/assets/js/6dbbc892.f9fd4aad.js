"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8399],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=i(n),d=o,f=s["".concat(u,".").concat(d)]||s[d]||m[d]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=s;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var i=2;i<a;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3211:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),l=["components"],c={title:"\u624b\u5199\u51fd\u6570\u67ef\u91cc\u5316",date:new Date("2022-04-25T00:00:00.000Z"),author:"Justin",top:!1,cover:!1,categories:"\u9762\u8bd5\u9898",tags:["\u9762\u8bd5\u9898"]},u=void 0,i={permalink:"/en/Vue\u4e2d\u7684methods\u3001watch\u3001computed\u3001filters\u5230\u5e95\u6709\u4ec0\u4e48\u533a\u522b\uff1f",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/Vue\u4e2d\u7684methods\u3001watch\u3001computed\u3001filters\u5230\u5e95\u6709\u4ec0\u4e48\u533a\u522b\uff1f.md",source:"@site/blog/Vue\u4e2d\u7684methods\u3001watch\u3001computed\u3001filters\u5230\u5e95\u6709\u4ec0\u4e48\u533a\u522b\uff1f.md",title:"\u624b\u5199\u51fd\u6570\u67ef\u91cc\u5316",description:"\u4e00\u3001methods",date:"2022-04-25T00:00:00.000Z",formattedDate:"April 25, 2022",tags:[{label:"\u9762\u8bd5\u9898",permalink:"/en/tags/\u9762\u8bd5\u9898"}],readingTime:1.52,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"\u624b\u5199\u51fd\u6570\u67ef\u91cc\u5316",date:"2022-04-25T00:00:00.000Z",author:"Justin",top:!1,cover:!1,categories:"\u9762\u8bd5\u9898",tags:["\u9762\u8bd5\u9898"]},prevItem:{title:"\u6d45\u6790Vue\u4e2d$nextTick\u7684\u539f\u7406",permalink:"/en/\u6d45\u6790Vue\u4e2d$nextTick\u7684\u539f\u7406"},nextItem:{title:"LeetCode\u2014\u2014\u56de\u6587\u6570\uff08\u53cd\u8f6c\u6bd4\u8f83\uff09",permalink:"/en/LeetCode\u2014\u2014\u56de\u6587\u6570\uff08\u53cd\u8f6c\u6bd4\u8f83\uff09"}},p={authorsImageUrls:[void 0]},m=[{value:"\u4e00\u3001methods",id:"\u4e00methods",level:2},{value:"\u4e8c\u3001filters",id:"\u4e8cfilters",level:2},{value:"\u4e09\u3001computed",id:"\u4e09computed",level:2},{value:"\u56db\u3001watch",id:"\u56dbwatch",level:2},{value:"\u95ee\u9898\u6c47\u603b",id:"\u95ee\u9898\u6c47\u603b",level:2},{value:"RQ1\uff1awatch\u548ccomputed\u7684\u533a\u522b",id:"rq1watch\u548ccomputed\u7684\u533a\u522b",level:3}],s={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4e00methods"},"\u4e00\u3001methods"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"methods\u4e2d\u5b58\u653e\u7684\u662f\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570\uff0c\u5177\u6709\u4ee5\u4e0b\u51e0\u4e2a\u7279\u70b9\uff1a")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u901a\u8fc7Vue\u5b9e\u4f8b\u8bbf\u95ee\u65b9\u6cd5\uff0c\u5728\u65b9\u6cd5\u4e2d\u6700\u597d\u4e0d\u8981\u4f7f\u7528\u7bad\u5934\u51fd\u6570\uff0c\u56e0\u4e3a\u6d89\u53ca\u5230this\u6307\u5411\u7684\u95ee\u9898\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u91cd\u65b0\u6e32\u67d3\u7684\u65f6\u5019\uff0cmethods\u603b\u4f1a\u6267\u884c\u8be5\u51fd\u6570\u3002"),(0,a.kt)("li",{parentName:"ol"},"methods\u662f\u51fd\u6570\u8c03\u7528\uff0cfilters\u548ccomputed\u3001watch\u662f\u5c5e\u6027\u8c03\u7528\u3002"),(0,a.kt)("li",{parentName:"ol"},"methods\u662f\u4e0d\u5177\u6709\u7f13\u5b58\u6027\u7684\u3002")),(0,a.kt)("h2",{id:"\u4e8cfilters"},"\u4e8c\u3001filters"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"filters\u4e00\u822c\u7528\u4e8e\u683c\u5f0f\u5316\u8f93\u51fa\u7684\u573a\u666f\uff0c\u6bd4\u5982\u65e5\u671f\u683c\u5f0f\u5316\uff0cfilters\u8fc7\u6ee4\u5668\u53ef\u4ee5\u8fdb\u884c\u4e32\u8054\u8c03\u7528\uff0c\u6240\u4ee5\u53ef\u4ee5\u5b9a\u4e49\u4e00\u4e9b\u57fa\u7840\u7684filters\uff0c\u7136\u540e\u6309\u9700\u5728\u7ec4\u4ef6\u5185\u4f7f\u7528\u3002filters\u4e0d\u5177\u6709\u7f13\u5b58\u6027\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"{{msg | fliterA | filterB}}\n")),(0,a.kt)("h2",{id:"\u4e09computed"},"\u4e09\u3001computed"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"computed\u662f\u8ba1\u7b97\u5c5e\u6027\uff0c\u4f1a\u76d1\u542c\u4e00\u4e2a\u4f9d\u8d56\u5c5e\u6027\uff0c\u5982\u679c\u8fd9\u4e2a\u5c5e\u6027\u53d1\u751f\u53d8\u5316\uff0c\u5c31\u4f1a\u66f4\u65b0\u89c6\u56fe\uff0c\u9002\u7528\u4e8e\u8ba1\u7b97\u6bd4\u8f83\u6d88\u8017\u6027\u80fd\u7684\u8ba1\u7b97\u573a\u666f\uff0c\u56e0\u4e3a\u5176\u5177\u6709\u7f13\u5b58\u529f\u80fd\uff0c\u8fd9\u610f\u5473\u7740\u5176\u76d1\u542c\u7684\u6570\u636e\u5982\u679c\u6ca1\u6709\u53d1\u751f\u53d8\u5316\uff0c\u591a\u6b21\u8c03\u7528\u8ba1\u7b97\u5c5e\u6027\u4f1a\u8fd4\u56de\u4e4b\u95f4\u7684\u8ba1\u7b97\u7ed3\u679c\uff0c\u4e0d\u5fc5\u518d\u6b21\u6267\u884c\u51fd\u6570\u3002")),(0,a.kt)("h2",{id:"\u56dbwatch"},"\u56db\u3001watch"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"watch\u53ef\u4ee5\u76d1\u542c\u67d0\u4e00\u4e2a\u6570\u636e\u7684\u53d8\u5316\uff0cwatch\u8981\u60f3\u76d1\u542c\u5bf9\u8c61\u4e2d\u67d0\u4e2a\u5c5e\u6027\u662f\u5426\u53d1\u751f\u4e86\u53d8\u5316\uff0c\u9700\u8981\u5c06deep\u5c5e\u6027\u7f6e\u4e3atrue\u3002\u4f46\u662fwatch\u65e0\u6cd5\u62ff\u5230\u5bf9\u8c61\u4e2d\u5c5e\u6027\u53d8\u5316\u7684\u65e7\u503c\uff0c\u53ea\u80fd\u62ff\u5230\u65b0\u7684\u5bf9\u8c61\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"  watch: {\n    name(newValue, oldValue) {\n      console.log(\"name\", newValue, oldValue);\n    },\n    info: {\n      handler: function(newValue,oldValue) {\n        console.log('info',newValue,oldValue);\n      },\n      deep: true\n    }\n  },\n")),(0,a.kt)("h2",{id:"\u95ee\u9898\u6c47\u603b"},"\u95ee\u9898\u6c47\u603b"),(0,a.kt)("h3",{id:"rq1watch\u548ccomputed\u7684\u533a\u522b"},"RQ1\uff1awatch\u548ccomputed\u7684\u533a\u522b"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"watch\u662f\u76d1\u542c\u4e00\u4e2a\u6570\u636e\u662f\u5426\u53d1\u751f\u53d8\u5316\uff0c\u5f53\u8fd9\u4e2a\u6570\u636e\u53d1\u751f\u53d8\u5316\u624d\u6267\u884c\u51fd\u6570\u3002"),(0,a.kt)("li",{parentName:"ol"},"computed\u5219\u662f\u53ea\u8981\u5176\u51fd\u6570\u5185\u90e8\u7684\u4ee3\u7801\u6307\u5411\u7684\u6570\u636e\u53d1\u751f\u4e86\u53d8\u5316\uff0c\u5176\u5c31\u4f1a\u6267\u884c\u51fd\u6570\uff0c\u7136\u540e\u8fd4\u56de\u3002"),(0,a.kt)("li",{parentName:"ol"},"computed\u5177\u6709\u7f13\u5b58\u7279\u6027\uff0cwatch\u5219\u6ca1\u6709\u3002")))}d.isMDXComponent=!0}}]);