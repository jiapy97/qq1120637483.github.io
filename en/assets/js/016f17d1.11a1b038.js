"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[47970],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=i(r),f=a,g=m["".concat(u,".").concat(f)]||m[f]||p[f]||s;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var i=2;i<s;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},55557:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),o=["components"],l={title:"React\u9879\u76ee\u4e2d\u4e00\u79cd\u7ef4\u6301\u767b\u5f55\u7684\u65b9\u6cd5",date:new Date("2021-05-19T00:00:00.000Z"),categories:"React",tags:["React"]},u=void 0,i={permalink:"/en/React\u9879\u76ee\u4e2d\u4e00\u79cd\u7ef4\u6301\u767b\u5f55\u7684\u65b9\u6cd5",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/React\u9879\u76ee\u4e2d\u4e00\u79cd\u7ef4\u6301\u767b\u5f55\u7684\u65b9\u6cd5.md",source:"@site/blog/React\u9879\u76ee\u4e2d\u4e00\u79cd\u7ef4\u6301\u767b\u5f55\u7684\u65b9\u6cd5.md",title:"React\u9879\u76ee\u4e2d\u4e00\u79cd\u7ef4\u6301\u767b\u5f55\u7684\u65b9\u6cd5",description:"1. \u5f15\u5165store.js\u5e93",date:"2021-05-19T00:00:00.000Z",formattedDate:"May 19, 2021",tags:[{label:"React",permalink:"/en/tags/react"}],readingTime:1.18,hasTruncateMarker:!1,authors:[],frontMatter:{title:"React\u9879\u76ee\u4e2d\u4e00\u79cd\u7ef4\u6301\u767b\u5f55\u7684\u65b9\u6cd5",date:"2021-05-19T00:00:00.000Z",categories:"React",tags:["React"]},prevItem:{title:"\u5251\u6307Offer\u2014\u2014\u6570\u503c\u7684\u6574\u6570\u6b21\u65b9\uff08JS\u5b9e\u73b0\uff09",permalink:"/en/\u5251\u6307Offer\u2014\u2014\u6570\u503c\u7684\u6574\u6570\u6b21\u65b9\uff08JS\u5b9e\u73b0\uff09"},nextItem:{title:"\u5251\u6307Offer\u2014\u2014\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\uff08JS\u5b9e\u73b0\uff09",permalink:"/en/\u5251\u6307Offer\u2014\u2014\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\uff08JS\u5b9e\u73b0\uff09"}},c={authorsImageUrls:[]},p=[{value:"1. \u5f15\u5165store.js\u5e93",id:"1-\u5f15\u5165storejs\u5e93",level:2},{value:"2. \u5b9a\u4e49\u5e76\u5bfc\u51fa\u5b58\u50a8\u5230\u672c\u5730\u7684\u6a21\u5757(storageUtils.js)",id:"2-\u5b9a\u4e49\u5e76\u5bfc\u51fa\u5b58\u50a8\u5230\u672c\u5730\u7684\u6a21\u5757storageutilsjs",level:2},{value:"3. \u767b\u5f55\u6210\u529f\u65f6\u5c06\u7528\u6237\u7684\u6570\u636e\u901a\u8fc7storageUtils\u7684saveUser\u65b9\u6cd5\u8fdb\u884c\u4fdd\u5b58",id:"3-\u767b\u5f55\u6210\u529f\u65f6\u5c06\u7528\u6237\u7684\u6570\u636e\u901a\u8fc7storageutils\u7684saveuser\u65b9\u6cd5\u8fdb\u884c\u4fdd\u5b58",level:2},{value:"4. \u5b9a\u4e49\u8bb0\u5f55\u7528\u6237\u4fe1\u606f\u7684\u5185\u5b58\u6587\u4ef6\uff08memoryUtils.js\uff09",id:"4-\u5b9a\u4e49\u8bb0\u5f55\u7528\u6237\u4fe1\u606f\u7684\u5185\u5b58\u6587\u4ef6memoryutilsjs",level:2},{value:"5. \u5728\u5165\u53e3\u6587\u4ef6\u5c06local\u4e2d\u7684\u7528\u6237\u4fe1\u606f\u4fdd\u5b58\u5230\u5185\u5b58\u6587\u4ef6\u4e2d",id:"5-\u5728\u5165\u53e3\u6587\u4ef6\u5c06local\u4e2d\u7684\u7528\u6237\u4fe1\u606f\u4fdd\u5b58\u5230\u5185\u5b58\u6587\u4ef6\u4e2d",level:2},{value:"6. \u767b\u5f55\u6210\u529f\u540e\u7684\u754c\u9762\u9996\u5148\u68c0\u6d4b\u5185\u5b58\u6587\u4ef6\u4e2d\u662f\u5426\u6709\u7528\u6237\uff0c\u6709\u5219\u52a0\u8f7d\uff0c\u65e0\u5219\u8df3\u8f6c\u5230\u767b\u5f55\u8def\u7531",id:"6-\u767b\u5f55\u6210\u529f\u540e\u7684\u754c\u9762\u9996\u5148\u68c0\u6d4b\u5185\u5b58\u6587\u4ef6\u4e2d\u662f\u5426\u6709\u7528\u6237\u6709\u5219\u52a0\u8f7d\u65e0\u5219\u8df3\u8f6c\u5230\u767b\u5f55\u8def\u7531",level:2}],m={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"1-\u5f15\u5165storejs\u5e93"},"1. \u5f15\u5165store.js\u5e93"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/marcuswestin/store.js#user-content-installation"},"\u9879\u76ee\u5730\u5740")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"npm i store\n")),(0,s.kt)("h2",{id:"2-\u5b9a\u4e49\u5e76\u5bfc\u51fa\u5b58\u50a8\u5230\u672c\u5730\u7684\u6a21\u5757storageutilsjs"},"2. \u5b9a\u4e49\u5e76\u5bfc\u51fa\u5b58\u50a8\u5230\u672c\u5730\u7684\u6a21\u5757(storageUtils.js)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// ! \u672c\u6a21\u5757\u4e3b\u8981\u662f\u8fdb\u884clocal\u6570\u636e\u5b58\u50a8\nimport store from 'store'\nconst USER_KEY = 'user_key';\n\nexport default {\n    // \u4fdd\u5b58\u7528\u6237\n    saveUser(user) {\n        store.set(USER_KEY,user);// \u767b\u5f55\u6210\u529f\u7684\u65f6\u5019\uff0c\u8bfb\u53d6\u7528\u6237\u6570\u636e\u5e76\u653e\u5728\u5185\u5b58\u4e2d\n            const user = result.data;\n            // memoryUtils.user = user;\n            storageUtils.saveUser(user);\n    },\n\n    // \u8bfb\u53d6\u7528\u6237\n    getUser() {\n        return store.get(USER_KEY) || {}\n    },\n\n    // \u5220\u9664\u7528\u6237\n    removeUser() {\n        store.remove(USER_KEY);\n    }\n}\n")),(0,s.kt)("h2",{id:"3-\u767b\u5f55\u6210\u529f\u65f6\u5c06\u7528\u6237\u7684\u6570\u636e\u901a\u8fc7storageutils\u7684saveuser\u65b9\u6cd5\u8fdb\u884c\u4fdd\u5b58"},"3. \u767b\u5f55\u6210\u529f\u65f6\u5c06\u7528\u6237\u7684\u6570\u636e\u901a\u8fc7storageUtils\u7684saveUser\u65b9\u6cd5\u8fdb\u884c\u4fdd\u5b58"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// \u767b\u5f55\u6210\u529f\u7684\u65f6\u5019\uff0c\u8bfb\u53d6\u7528\u6237\u6570\u636e\u5e76\u653e\u5728\u5185\u5b58\u4e2d// \u5c06local\u4e2d\u7684user\u4fdd\u5b58\u5230\u5185\u5b58\u4e2d\u53bb\nconst user = storageUtils.getUser();\nmemoryUtils.user = user;\nconst user = result.data;\n// memoryUtils.user = user;\nstorageUtils.saveUser(user);\n")),(0,s.kt)("h2",{id:"4-\u5b9a\u4e49\u8bb0\u5f55\u7528\u6237\u4fe1\u606f\u7684\u5185\u5b58\u6587\u4ef6memoryutilsjs"},"4. \u5b9a\u4e49\u8bb0\u5f55\u7528\u6237\u4fe1\u606f\u7684\u5185\u5b58\u6587\u4ef6\uff08memoryUtils.js\uff09"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// ! \u672c\u6587\u4ef6\u4e3b\u8981\u5b58\u653e\u9700\u8981\u5b58\u50a8\u7684\u7528\u6237\u4fe1\u606f\u7b49\u5185\u5bb9\nexport default {\n    user: {}\n}\n")),(0,s.kt)("h2",{id:"5-\u5728\u5165\u53e3\u6587\u4ef6\u5c06local\u4e2d\u7684\u7528\u6237\u4fe1\u606f\u4fdd\u5b58\u5230\u5185\u5b58\u6587\u4ef6\u4e2d"},"5. \u5728\u5165\u53e3\u6587\u4ef6\u5c06local\u4e2d\u7684\u7528\u6237\u4fe1\u606f\u4fdd\u5b58\u5230\u5185\u5b58\u6587\u4ef6\u4e2d"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// \u5c06local\u4e2d\u7684user\u4fdd\u5b58\u5230\u5185\u5b58\u4e2d\u53bb\nconst user = storageUtils.getUser();\nmemoryUtils.user = user;\n")),(0,s.kt)("h2",{id:"6-\u767b\u5f55\u6210\u529f\u540e\u7684\u754c\u9762\u9996\u5148\u68c0\u6d4b\u5185\u5b58\u6587\u4ef6\u4e2d\u662f\u5426\u6709\u7528\u6237\u6709\u5219\u52a0\u8f7d\u65e0\u5219\u8df3\u8f6c\u5230\u767b\u5f55\u8def\u7531"},"6. \u767b\u5f55\u6210\u529f\u540e\u7684\u754c\u9762\u9996\u5148\u68c0\u6d4b\u5185\u5b58\u6587\u4ef6\u4e2d\u662f\u5426\u6709\u7528\u6237\uff0c\u6709\u5219\u52a0\u8f7d\uff0c\u65e0\u5219\u8df3\u8f6c\u5230\u767b\u5f55\u8def\u7531"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const user = memoryUtils.user;\n// \u5982\u679c\u6ca1\u6709\u83b7\u53d6\u5230\u7528\u6237id\u5219\u76f4\u63a5\u8fd4\u56de\u767b\u5f55\u9875\u9762\nif (!user._id) {\n    return <Redirect to='/login' />\n}\n")))}f.isMDXComponent=!0}}]);