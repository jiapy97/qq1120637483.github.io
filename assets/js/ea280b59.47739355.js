"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[81298],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var l=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=l.createContext({}),m=function(t){var e=l.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=m(t.components);return l.createElement(p.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},u=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),u=m(n),d=a,k=u["".concat(p,".").concat(d)]||u[d]||g[d]||r;return n?l.createElement(k,o(o({ref:e},c),{},{components:n})):l.createElement(k,o({ref:e},c))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,o=new Array(r);o[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var m=2;m<r;m++)o[m]=n[m];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},21991:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var l=n(87462),a=(n(67294),n(3905));const r={title:"\u56fe\u89e3\u524d\u7aef\u8c03\u8bd5\u5de5\u5177Chrome Dev Tools\u7684\u4f7f\u7528",date:new Date("2022-01-02T00:00:00.000Z"),author:"Justin",top:!1,cover:!1,categories:"debug",tags:["debug"]},o=void 0,i={permalink:"/blog/\u56fe\u89e3\u524d\u7aef\u8c03\u8bd5\u5de5\u5177Chrome Dev Tools\u7684\u4f7f\u7528",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/\u56fe\u89e3\u524d\u7aef\u8c03\u8bd5\u5de5\u5177Chrome Dev Tools\u7684\u4f7f\u7528.md",source:"@site/blog/\u56fe\u89e3\u524d\u7aef\u8c03\u8bd5\u5de5\u5177Chrome Dev Tools\u7684\u4f7f\u7528.md",title:"\u56fe\u89e3\u524d\u7aef\u8c03\u8bd5\u5de5\u5177Chrome Dev Tools\u7684\u4f7f\u7528",description:"\u5feb\u6377\u6307\u4ee4\u901f\u67e5\u8868",date:"2022-01-02T00:00:00.000Z",formattedDate:"2022\u5e741\u67082\u65e5",tags:[{label:"debug",permalink:"/blog/tags/debug"}],readingTime:2.32,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"\u56fe\u89e3\u524d\u7aef\u8c03\u8bd5\u5de5\u5177Chrome Dev Tools\u7684\u4f7f\u7528",date:"2022-01-02T00:00:00.000Z",author:"Justin",top:!1,cover:!1,categories:"debug",tags:["debug"]},prevItem:{title:"\u5728Egg.js\u4e2d\u683c\u5f0f\u5316\u65e5\u671f",permalink:"/blog/\u5728Egg.js\u4e2d\u683c\u5f0f\u5316\u65e5\u671f"},nextItem:{title:"LeetCode\u2014\u2014\u73af\u5f62\u94fe\u8868\uff08\u5feb\u6162\u6307\u9488\uff09",permalink:"/blog/LeetCode\u2014\u2014\u73af\u5f62\u94fe\u8868\uff08\u5feb\u6162\u6307\u9488\uff09"}},p={authorsImageUrls:[void 0]},m=[{value:"\u5feb\u6377\u6307\u4ee4\u901f\u67e5\u8868",id:"\u5feb\u6377\u6307\u4ee4\u901f\u67e5\u8868",level:2},{value:"\u4fee\u6539Dev Tools\u7684\u4e3b\u9898",id:"\u4fee\u6539dev-tools\u7684\u4e3b\u9898",level:2},{value:"\u622a\u5c4f",id:"\u622a\u5c4f",level:2},{value:"\u6539\u53d8\u8c03\u8bd5\u7a97\u53e3\u7684\u4f4d\u7f6e",id:"\u6539\u53d8\u8c03\u8bd5\u7a97\u53e3\u7684\u4f4d\u7f6e",level:2},{value:"\u5e38\u7528Tab\u4ecb\u7ecd",id:"\u5e38\u7528tab\u4ecb\u7ecd",level:2},{value:"1. Element",id:"1-element",level:3},{value:"Computed",id:"computed",level:4},{value:"Layout",id:"layout",level:4},{value:"Event Listeners",id:"event-listeners",level:4}],c={toc:m};function g(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,l.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5feb\u6377\u6307\u4ee4\u901f\u67e5\u8868"},"\u5feb\u6377\u6307\u4ee4\u901f\u67e5\u8868"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u6807\u9898"),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5feb\u901f\u6253\u5f00Dev Tools"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Ctrl + Shift + i"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u6253\u5f00\u547d\u4ee4\u83dc\u5355"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Ctrl + Shift + P"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5feb\u901f\u6253\u5f00Dev Tools"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Ctrl + Shift + i"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5feb\u901f\u6253\u5f00Dev Tools"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Ctrl + Shift + i"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5feb\u901f\u6253\u5f00Dev Tools"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Ctrl + Shift + i"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5feb\u901f\u6253\u5f00Dev Tools"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Ctrl + Shift + i"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5feb\u901f\u6253\u5f00Dev Tools"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Ctrl + Shift + i"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5feb\u901f\u6253\u5f00Dev Tools"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Ctrl + Shift + i"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5feb\u901f\u6253\u5f00Dev Tools"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Ctrl + Shift + i"))))),(0,a.kt)("h2",{id:"\u4fee\u6539dev-tools\u7684\u4e3b\u9898"},"\u4fee\u6539Dev Tools\u7684\u4e3b\u9898"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4fee\u6539\u4e3adark\u4e3b\u9898")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dark theme")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/7c84164c2678b5e2eaf50acad1c801bb.png",alt:"image.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4fee\u6539\u4e3a\u767d\u8272\u4e3b\u9898\n",(0,a.kt)("inlineCode",{parentName:"li"},"light theme"))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/322037a1343e3bc9cd9e2d4772dcc761.png",alt:"image.png"})),(0,a.kt)("h2",{id:"\u622a\u5c4f"},"\u622a\u5c4f"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"screenshot")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/913cbf806ff51aac6e25bdd0b90e0962.png",alt:"image.png"})),(0,a.kt)("h2",{id:"\u6539\u53d8\u8c03\u8bd5\u7a97\u53e3\u7684\u4f4d\u7f6e"},"\u6539\u53d8\u8c03\u8bd5\u7a97\u53e3\u7684\u4f4d\u7f6e"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"dock to right")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"dock to left")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"dock to bottom"))),(0,a.kt)("h2",{id:"\u5e38\u7528tab\u4ecb\u7ecd"},"\u5e38\u7528Tab\u4ecb\u7ecd"),(0,a.kt)("h3",{id:"1-element"},"1. Element"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u67e5\u770b\u9875\u9762\u5728\u79fb\u52a8\u7aef\u5e03\u5c40\u7684\u6837\u5b50\uff0c\u53ef\u4ee5\u70b9\u51fb\u4e0b\u9762\u7684\u6309\u94ae")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/675e3165db00d83de494be2d7b5abea1.png",alt:"image.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7ed9\u76ee\u6807\u5143\u7d20\u6dfb\u52a0\u6837\u5f0f",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"\u9996\u5148\u9009\u4e2d\u5143\u7d20\uff0c\u7136\u540e\u5728\u4e0b\u9762\u6dfb\u52a0\u6837\u5f0f")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/fe48b8354aae29cd4c039813782c1acc.png",alt:"image.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8ba9hover\u6c38\u9a7b")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u9009\u4e2d\u76ee\u6807\u5143\u7d20\u7136\u540e\u70b9\u51fb\u4e0b\u9762\u7684\u5185\u5bb9")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/3d0fc9f11adf3350d244de19ce0551b8.png",alt:"image.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53ea\u4fee\u6539\u5217\u8868\u9879\u4e2d\u7684\u67d0\u4e00\u4e2a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u9009\u4e2d\u76ee\u6807\u5143\u7d20\u70b9\u51fbcls")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/5179276c8a8c1bf152280be8eee820db.png",alt:"image.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u590d\u5236\u6837\u5f0f\u5e76\u7c98\u8d34\u6837\u5f0f")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u9009\u4e2d\u76ee\u6807\u6837\u5f0f\uff0c\u7136\u540e\u70b9\u51fbcopy styles")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/f3d8489d3876f8dca2884bee746143da.png",alt:"image.png"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u9009\u4e2d\u9700\u8981\u7c98\u8d34\u6837\u5f0f\u7684\u4f4d\u7f6e\uff0c\u7136\u540e\u7c98\u8d34\u5230\u4e0b\u9762\u7684\u4f4d\u7f6e")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/f01b1ed2b172ea6d541f84a75db9ef6a.png",alt:"image.png"})),(0,a.kt)("h4",{id:"computed"},"Computed"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8fd9\u4e2atab\u680f\u4e3b\u8981\u8bb0\u8f7d\u4e86\u5f53\u524d\u9875\u9762\u90fd\u5e94\u7528\u4e86\u54ea\u4e9b\u6837\u5f0f\uff0c\u901a\u8fc7\u70b9\u51fb\u53ef\u4ee5\u8df3\u8f6c\u5230\u8fd9\u4e9b\u6837\u5f0f\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Show all\u4e0eGroup")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/7c277f267d9f1c4f6ebb022a0d0a7f73.png",alt:"image.png"})),(0,a.kt)("h4",{id:"layout"},"Layout"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728Layout\u6807\u7b7e\u4e0b\u53ef\u4ee5\u8c03\u8bd5Grid\u5e03\u5c40\u548cFlex\u5e03\u5c40\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/c9c81721cd3008f047ed95d2a83c2d26.png",alt:"image.png"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u52fe\u9009flex\u5143\u7d20\u53ef\u4ee5\u7ed9flex\u5143\u7d20\u52a0\u4e0a\u6a2a\u7ebf\u8fb9\u6846\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/649286a8ee65c3f7fc07e9882d31bf95.png",alt:"image.png"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u53ef\u4ee5\u901a\u8fc7styles\u9762\u677f\u4e2d\u7684\u70b9\u51fb\u56fe\u6807\u6765\u6d4b\u8bd5flex\u7684\u5176\u4ed6\u5c5e\u6027\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/c7bf269184aa06a8a87894fe80e1b1f1.png",alt:"image.png"})),(0,a.kt)("h4",{id:"event-listeners"},"Event Listeners"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8be5\u9762\u677f\u53ef\u4ee5\u67e5\u770b\u5f53\u524d\u9875\u9762\u6240\u6709\u7684\u76d1\u542c\u4e8b\u4ef6\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/930cb008cb3c362be9d7548390979c26.png",alt:"image.png"})))}g.isMDXComponent=!0}}]);