"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[19037],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10891:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"Ajax-19\uff1a\u5982\u4f55\u89e3\u51b3\u8de8\u57df\u95ee\u9898",date:new Date("2021-03-25T00:00:00.000Z"),categories:"Ajax",tags:["Ajax"]},l=void 0,p={permalink:"/blog/Ajax-19\uff1a\u5982\u4f55\u89e3\u51b3\u8de8\u57df\u95ee\u9898",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/Ajax-19\uff1a\u5982\u4f55\u89e3\u51b3\u8de8\u57df\u95ee\u9898.md",source:"@site/blog/Ajax-19\uff1a\u5982\u4f55\u89e3\u51b3\u8de8\u57df\u95ee\u9898.md",title:"Ajax-19\uff1a\u5982\u4f55\u89e3\u51b3\u8de8\u57df\u95ee\u9898",description:"\u4ec0\u4e48\u662fJSONP\uff1f",date:"2021-03-25T00:00:00.000Z",formattedDate:"2021\u5e743\u670825\u65e5",tags:[{label:"Ajax",permalink:"/blog/tags/ajax"}],readingTime:1.53,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Ajax-19\uff1a\u5982\u4f55\u89e3\u51b3\u8de8\u57df\u95ee\u9898",date:"2021-03-25T00:00:00.000Z",categories:"Ajax",tags:["Ajax"]},prevItem:{title:"Ajax-18\uff1a\u540c\u6e90\u7b56\u7565",permalink:"/blog/Ajax-18\uff1a\u540c\u6e90\u7b56\u7565"},nextItem:{title:"JavaScript\u4e2dreduce()\u51fd\u6570\u7684\u7528\u6cd5",permalink:"/blog/JavaScript\u4e2dreduce()\u51fd\u6570\u7684\u7528\u6cd5"}},i={authorsImageUrls:[]},c=[{value:"\u4ec0\u4e48\u662fJSONP\uff1f",id:"\u4ec0\u4e48\u662fjsonp",level:2},{value:"JSONP\u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff1f",id:"jsonp\u662f\u5982\u4f55\u5de5\u4f5c\u7684",level:2},{value:"\u539f\u751fjsonp\u8de8\u57df\u6848\u4f8b",id:"\u539f\u751fjsonp\u8de8\u57df\u6848\u4f8b",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4ec0\u4e48\u662fjsonp"},"\u4ec0\u4e48\u662fJSONP\uff1f"),(0,a.kt)("p",null,"jsonp\u662f\u4e00\u4e2a\u975e\u5b98\u65b9\u7684\u8de8\u57df\u89e3\u51b3\u65b9\u6848\uff0c\u53ea\u652f\u6301GET\u8bf7\u6c42\u3002"),(0,a.kt)("h2",{id:"jsonp\u662f\u5982\u4f55\u5de5\u4f5c\u7684"},"JSONP\u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff1f"),(0,a.kt)("p",null,"\u7f51\u9875\u4e2d\u6709\u4e00\u4e9b\u539f\u672c\u5c31\u5177\u6709\u8de8\u57df\u80fd\u529b\u7684\u6807\u7b7e\uff0c\u6bd4\u5982img,link,iframe,script\uff0cjsonp\u5c31\u662f\u5229\u7528script\u6807\u7b7e\u7684\u8de8\u57df\u80fd\u529b\u8fdb\u884c\u53d1\u9001\u8bf7\u6c42\u7684\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4ee5script\u6807\u7b7e\u4e3a\u4f8b\uff0cjsonp\u63a5\u53d7\u7684\u4e0d\u80fd\u662f\u666e\u901a\u7684\u5b57\u7b26\u4e32\uff0c\u800c\u5e94\u5f53\u662fjs\u4ee3\u7801\n",(0,a.kt)("img",{parentName:"li",src:"https://img-blog.csdnimg.cn/img_convert/f455300cf5c16dc7e2f0f3a70dff1906.png",alt:null}))),(0,a.kt)("h2",{id:"\u539f\u751fjsonp\u8de8\u57df\u6848\u4f8b"},"\u539f\u751fjsonp\u8de8\u57df\u6848\u4f8b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f53\u7528\u6237\u7684\u7126\u70b9\u79bb\u5f00\u8f93\u5165\u6846\u65f6\uff0c\u53d1\u9001jsonp\u8bf7\u6c42\uff0c\u7136\u540e\u8fd4\u56de\u8be5\u7528\u6237\u540d\u5df2\u5b58\u5728\uff0c\u540c\u65f6\u5c06\u8f93\u5165\u6846\u7684\u8fb9\u6846\u989c\u8272\u53d8\u6210\u7ea2\u8272\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u83b7\u53d6input\u548cp\u6807\u7b7e\nconst input = document.querySelector('input');\nconst p = document.querySelector('p');\n\n// \u5b9a\u4e49handle\u51fd\u6570\nfunction handle(data) {\n    input.style.border = 'solid 2px red';\n    p.innerHTML = data.msg;\n};\n\n// \u5f53\u7528\u6237\u7684\u7126\u70b9\u79fb\u51fa\u8f93\u5165\u6846\u65f6\u89e6\u53d1\u51fd\u6570\ninput.onblur = function() {\n    // \u83b7\u53d6\u7528\u6237\u8f93\u5165\u7684\u503c\n    let user_input = this.value;\n\n    // \u521b\u5efascript\u6807\u7b7e,\u53d1\u9001jsonp\u8bf7\u6c42\n    const script = document.createElement('script');\n    // \u5411script\u6807\u7b7e\u4e2d\u6dfb\u52a0url\n    script.src = \"http://localhost:9000/jsonp\";\n    // \u5c06\u521b\u5efa\u597d\u7684script\u6807\u7b7e\u52a0\u5230\u6587\u6863\u5bf9\u8c61\u6a21\u578b\u4e2d\n    document.body.appendChild(script);\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u670d\u52a1\u5668\u7aef")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u6d4b\u8bd5jsonp\u670d\u52a1\napp.all('/jsonp',(request,response) => {\n    const data = {\n        id: 1,\n        msg: '\u8be5\u7528\u6237\u540d\u5df2\u5b58\u5728'\n    };\n    const str = JSON.stringify(data);\n    response.send(`handle(${str})`);\n})\n")))}u.isMDXComponent=!0}}]);