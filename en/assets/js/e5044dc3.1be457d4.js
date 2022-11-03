"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[52259],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var n=t(67294);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=n.createContext({}),m=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=m(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=m(t),f=l,d=c["".concat(s,".").concat(f)]||c[f]||p[f]||o;return t?n.createElement(d,i(i({ref:r},u),{},{components:t})):n.createElement(d,i({ref:r},u))}));function f(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var o=t.length,i=new Array(o);i[0]=c;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var m=2;m<o;m++)i[m]=t[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},61870:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return a},metadata:function(){return m},toc:function(){return p}});var n=t(87462),l=t(63366),o=(t(67294),t(3905)),i=["components"],a={title:"\u9762\u8bd5\u5b98\u8ba9\u6211\u624b\u5199Promise.all",date:"2021-9-11",author:"Justin",top:!1,cover:!1,categories:"\u9762\u8bd5\u9898",tags:["\u9762\u8bd5\u9898"]},s=void 0,m={permalink:"/en/\u9762\u8bd5\u5b98\u8ba9\u6211\u624b\u5199Promise.all",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/\u9762\u8bd5\u5b98\u8ba9\u6211\u624b\u5199Promise.all.md",source:"@site/blog/\u9762\u8bd5\u5b98\u8ba9\u6211\u624b\u5199Promise.all.md",title:"\u9762\u8bd5\u5b98\u8ba9\u6211\u624b\u5199Promise.all",description:"\u539f\u751f\u7684Promise.all\u6709\u4ec0\u4e48\u7279\u70b9\uff1f",date:"2021-09-11T00:00:00.000Z",formattedDate:"September 11, 2021",tags:[{label:"\u9762\u8bd5\u9898",permalink:"/en/tags/\u9762\u8bd5\u9898"}],readingTime:1.7566666666666666,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"\u9762\u8bd5\u5b98\u8ba9\u6211\u624b\u5199Promise.all",date:"2021-9-11",author:"Justin",top:!1,cover:!1,categories:"\u9762\u8bd5\u9898",tags:["\u9762\u8bd5\u9898"]},prevItem:{title:"\u3010\u9752\u8bad\u8425\u3011- \u5c0f\u7a0b\u5e8f\u5f00\u53d1\u7b14\u8bb0",permalink:"/en/\u3010\u9752\u8bad\u8425\u3011- \u5c0f\u7a0b\u5e8f\u5f00\u53d1\u7b14\u8bb0"},nextItem:{title:"\u524d\u7aef\u9762\u8bd5\u4e0d\u4f1a\u76f4\u63a5\u6302\u6389\u7684\u9898\u76ee--\u5192\u6ce1\u6392\u5e8f",permalink:"/en/\u524d\u7aef\u9762\u8bd5\u4e0d\u4f1a\u76f4\u63a5\u6302\u6389\u7684\u9898\u76ee--\u5192\u6ce1\u6392\u5e8f"}},u={authorsImageUrls:[void 0]},p=[{value:"\u539f\u751f\u7684Promise.all\u6709\u4ec0\u4e48\u7279\u70b9\uff1f",id:"\u539f\u751f\u7684promiseall\u6709\u4ec0\u4e48\u7279\u70b9",level:2},{value:"\u5b9e\u73b0Promise.all",id:"\u5b9e\u73b0promiseall",level:2},{value:"1\uff1a\u51fd\u6570\u8fd4\u56de\u7684\u662f\u4e00\u4e2aPromise\u5bf9\u8c61",id:"1\u51fd\u6570\u8fd4\u56de\u7684\u662f\u4e00\u4e2apromise\u5bf9\u8c61",level:3},{value:"2\uff1a\u5c06\u53ef\u8fed\u4ee3\u5bf9\u8c61\u8f6c\u6362\u4e3a\u4e00\u4e2a\u6570\u7ec4",id:"2\u5c06\u53ef\u8fed\u4ee3\u5bf9\u8c61\u8f6c\u6362\u4e3a\u4e00\u4e2a\u6570\u7ec4",level:3},{value:"3\uff1a\u5e76\u53d1\u6267\u884c\u6bcf\u4e00\u4e2aPromise",id:"3\u5e76\u53d1\u6267\u884c\u6bcf\u4e00\u4e2apromise",level:3},{value:"\u5b8c\u6574\u5b9e\u73b0",id:"\u5b8c\u6574\u5b9e\u73b0",level:2},{value:"Promise.all\u7684\u5b9e\u73b0\u7ed9\u6211\u4eec\u4ec0\u4e48\u542f\u793a",id:"promiseall\u7684\u5b9e\u73b0\u7ed9\u6211\u4eec\u4ec0\u4e48\u542f\u793a",level:2}],c={toc:p};function f(e){var r=e.components,t=(0,l.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u539f\u751f\u7684promiseall\u6709\u4ec0\u4e48\u7279\u70b9"},"\u539f\u751f\u7684Promise.all\u6709\u4ec0\u4e48\u7279\u70b9\uff1f"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u7279\u70b91\uff1a\u63a5\u6536\u4e00\u4e2a\u53ef\u8fed\u4ee3\u5bf9\u8c61"),(0,o.kt)("li",{parentName:"ol"},"\u7279\u70b92\uff1a\u4f20\u5165\u7684\u6570\u636e\u4e2d\u53ef\u4ee5\u662f\u666e\u901a\u6570\u636e\uff0c\u4e5f\u53ef\u4ee5\u662fPromise\u5bf9\u8c61"),(0,o.kt)("li",{parentName:"ol"},"\u7279\u70b93\uff1a\u53ef\u8fed\u4ee3\u5bf9\u8c61\u7684promise\u662f\u5e76\u884c\u6267\u884c\u7684"),(0,o.kt)("li",{parentName:"ol"},"\u7279\u70b94\uff1a\u4fdd\u6301\u8f93\u5165\u6570\u7ec4\u7684\u987a\u5e8f\u548c\u8f93\u51fa\u6570\u7ec4\u7684\u987a\u5e8f\u4e00\u81f4"),(0,o.kt)("li",{parentName:"ol"},"\u7279\u70b95\uff1a\u4f20\u5165\u6570\u7ec4\u4e2d\u53ea\u8981\u6709\u4e00\u4e2areject\uff0c\u7acb\u5373\u8fd4\u56dereject"),(0,o.kt)("li",{parentName:"ol"},"\u7279\u70b96\uff1a\u6240\u6709\u6570\u636eresolve\u4e4b\u540e\u8fd4\u56de\u7ed3\u679c")),(0,o.kt)("h2",{id:"\u5b9e\u73b0promiseall"},"\u5b9e\u73b0Promise.all"),(0,o.kt)("h3",{id:"1\u51fd\u6570\u8fd4\u56de\u7684\u662f\u4e00\u4e2apromise\u5bf9\u8c61"},"1\uff1a\u51fd\u6570\u8fd4\u56de\u7684\u662f\u4e00\u4e2aPromise\u5bf9\u8c61"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function myPromiseAll(iterable) {\n    return new Promise((resolve,reject) => {\n    })\n}\n")),(0,o.kt)("h3",{id:"2\u5c06\u53ef\u8fed\u4ee3\u5bf9\u8c61\u8f6c\u6362\u4e3a\u4e00\u4e2a\u6570\u7ec4"},"2\uff1a\u5c06\u53ef\u8fed\u4ee3\u5bf9\u8c61\u8f6c\u6362\u4e3a\u4e00\u4e2a\u6570\u7ec4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const promises = Array.from(iterable);\n")),(0,o.kt)("h3",{id:"3\u5e76\u53d1\u6267\u884c\u6bcf\u4e00\u4e2apromise"},"3\uff1a\u5e76\u53d1\u6267\u884c\u6bcf\u4e00\u4e2aPromise"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u5b9a\u4e49\u4e00\u4e2a\u8ba1\u6570\u5668\u7528\u6765\u5224\u65ad\u662f\u5426\u6240\u6709\u7684promise\u6267\u884c\u5b8c\u6bd5\nlet count = 0;\n// \u5e76\u53d1\u6267\u884c\u6bcf\u4e00\u4e2apromise\nfor (let i = 0; i < promises.length; i++) {\n    Promise.resolve(promises[i]).then(res => {\n        result[i] = res;\n        count++;\n        if (count === promises.length) {\n            resolve(result);\n        }\n    }).catch(err => reject(err))\n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u7b2c\u4e09\u6b65\u662f\u5b9e\u73b0Promise.all\u7684\u6838\u5fc3\uff0c\u6709\u51e0\u70b9\u9700\u8981\u6211\u4eec\u6ce8\u610f\uff1a")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5e76\u4e0d\u662fpush\u8fdbresult\u6570\u7ec4\u7684\uff0c\u800c\u662f\u901a\u8fc7\u4e0b\u6807\u7684\u65b9\u5f0f\u8fdb\u884c\u5b58\u50a8\uff0c\u8fd9\u662f\u56e0\u4e3a\u6211\u4eec\u4e3a\u4e86\u4fdd\u8bc1\u8f93\u51fa\u7684\u987a\u5e8f\uff0c\u56e0\u4e3aPromise\u5bf9\u8c61\u6267\u884c\u7684\u65f6\u95f4\u53ef\u80fd\u4e0d\u540c\uff0cpush\u7684\u8bdd\u4f1a\u7834\u574f\u987a\u5e8f\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u8ba1\u6570\u6807\u5fd7\u6765\u5224\u65ad\u662f\u5426\u6240\u6709\u7684promise\u5bf9\u8c61\u90fd\u6267\u884c\u5b8c\u6bd5\u4e86\uff0c\u56e0\u4e3a\u5728then\u4e2d\u8868\u793a\u8be5promise\u5bf9\u8c61\u5df2\u7ecf\u6267\u884c\u5b8c\u6bd5\u3002")),(0,o.kt)("h2",{id:"\u5b8c\u6574\u5b9e\u73b0"},"\u5b8c\u6574\u5b9e\u73b0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function myPromiseAll(iterable) {\n    return new Promise((resolve,reject) => {\n        const promises = Array.from(iterable);\n        // \u5b9a\u4e49Promise\u5bf9\u8c61resolve\u7684\u6570\u7ec4\n        const result = [];\n        // \u5b9a\u4e49\u4e00\u4e2a\u8ba1\u6570\u5668\u7528\u6765\u5224\u65ad\u662f\u5426\u6240\u6709\u7684promise\u6267\u884c\u5b8c\u6bd5\n        let count = 0;\n        // \u5e76\u53d1\u6267\u884c\u6bcf\u4e00\u4e2apromise\n        for (let i = 0; i < promises.length; i++) {\n            Promise.resolve(promises[i]).then(res => {\n                result[i] = res;\n                count++;\n                if (count === promises.length) {\n                    resolve(result);\n                }\n            }).catch(err => reject(err))\n        }\n    })\n}\n")),(0,o.kt)("h2",{id:"promiseall\u7684\u5b9e\u73b0\u7ed9\u6211\u4eec\u4ec0\u4e48\u542f\u793a"},"Promise.all\u7684\u5b9e\u73b0\u7ed9\u6211\u4eec\u4ec0\u4e48\u542f\u793a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Promise.all\u8fd4\u56de\u7684\u662f\u4e00\u4e2aPromise\u5bf9\u8c61"),(0,o.kt)("li",{parentName:"ul"},"Promise.all\u63a5\u6536\u7684\u53ef\u8fed\u4ee3\u5bf9\u8c61\u6570\u7ec4\u9700\u8981\u901a\u8fc7Array.from\u8f6c\u6362\u4e3a\u6570\u7ec4"),(0,o.kt)("li",{parentName:"ul"},"Promise.all\u662f\u5e76\u53d1\u6267\u884c\u7684\u3002"),(0,o.kt)("li",{parentName:"ul"},"Promise.all\u4e2d\u4e00\u4e2areject\u76f4\u63a5\u8fd4\u56dereject\u7684\u7ed3\u679c\u3002")))}f.isMDXComponent=!0}}]);