"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[37035],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),i=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=i(n),m=r,k=d["".concat(u,".").concat(m)]||d[m]||p[m]||s;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var i=2;i<s;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22106:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const s={title:"\u4ece\u539f\u7406\u4e0a\u89e3\u8bfbuseState\u94a9\u5b50\u51fd\u6570",date:new Date("2021-10-16T00:00:00.000Z"),author:"Justin",top:!1,cover:!1,categories:"Hooks",tags:["Hooks"]},o=void 0,l={permalink:"/blog/\u4ece\u539f\u7406\u4e0a\u89e3\u8bfbuseState\u94a9\u5b50\u51fd\u6570",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/\u4ece\u539f\u7406\u4e0a\u89e3\u8bfbuseState\u94a9\u5b50\u51fd\u6570.md",source:"@site/blog/\u4ece\u539f\u7406\u4e0a\u89e3\u8bfbuseState\u94a9\u5b50\u51fd\u6570.md",title:"\u4ece\u539f\u7406\u4e0a\u89e3\u8bfbuseState\u94a9\u5b50\u51fd\u6570",description:"\u539f\u751fuseState\u5177\u6709\u7684\u51e0\u4e2a\u7279\u70b9",date:"2021-10-16T00:00:00.000Z",formattedDate:"2021\u5e7410\u670816\u65e5",tags:[{label:"Hooks",permalink:"/blog/tags/hooks"}],readingTime:2.575,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"\u4ece\u539f\u7406\u4e0a\u89e3\u8bfbuseState\u94a9\u5b50\u51fd\u6570",date:"2021-10-16T00:00:00.000Z",author:"Justin",top:!1,cover:!1,categories:"Hooks",tags:["Hooks"]},prevItem:{title:"\u4e8c\u5237--\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32",permalink:"/blog/\u4e8c\u5237--\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32"},nextItem:{title:"LeetCode\u2014\u2014\u6709\u6548\u7684\u62ec\u53f7\uff08\u501f\u52a9\u6808\uff09",permalink:"/blog/LeetCode\u2014\u2014\u6709\u6548\u7684\u62ec\u53f7\uff08\u501f\u52a9\u6808\uff09"}},u={authorsImageUrls:[void 0]},i=[{value:"\u539f\u751fuseState\u5177\u6709\u7684\u51e0\u4e2a\u7279\u70b9",id:"\u539f\u751fusestate\u5177\u6709\u7684\u51e0\u4e2a\u7279\u70b9",level:2},{value:"\u624b\u5199useState",id:"\u624b\u5199usestate",level:2},{value:"\u7b2c\u4e00\u6b65\uff1a\u7528\u4e0d\u540c\u7684\u6570\u7ec4\u6765\u5206\u522b\u5b58\u653e\u72b6\u6001\u503c\u548c\u8bbe\u7f6e\u72b6\u6001\u7684\u65b9\u6cd5",id:"\u7b2c\u4e00\u6b65\u7528\u4e0d\u540c\u7684\u6570\u7ec4\u6765\u5206\u522b\u5b58\u653e\u72b6\u6001\u503c\u548c\u8bbe\u7f6e\u72b6\u6001\u7684\u65b9\u6cd5",level:3},{value:"\u7b2c\u4e8c\u6b65\uff1a\u5224\u65aduseState\u4f20\u5165\u7684\u521d\u59cb\u72b6\u6001\u503c\u662f\u5426\u5df2\u7ecf\u5b58\u5728",id:"\u7b2c\u4e8c\u6b65\u5224\u65adusestate\u4f20\u5165\u7684\u521d\u59cb\u72b6\u6001\u503c\u662f\u5426\u5df2\u7ecf\u5b58\u5728",level:3},{value:"\u7b2c\u4e09\u6b65\uff1a\u901a\u8fc7\u72b6\u6001\u7684id\u6765\u8fd4\u56de\u8bbe\u7f6e\u72b6\u6001\u7684\u65b9\u6cd5\uff0c\u7136\u540e\u52a0\u5165\u5230\u8bbe\u7f6e\u65b9\u6cd5\u7684\u6570\u7ec4\u4e2d",id:"\u7b2c\u4e09\u6b65\u901a\u8fc7\u72b6\u6001\u7684id\u6765\u8fd4\u56de\u8bbe\u7f6e\u72b6\u6001\u7684\u65b9\u6cd5\u7136\u540e\u52a0\u5165\u5230\u8bbe\u7f6e\u65b9\u6cd5\u7684\u6570\u7ec4\u4e2d",level:3},{value:"\u7b2c\u56db\u6b65\uff1a\u8fd4\u56de\u7b2ci\u4e2a\u72b6\u6001\u503c\u548c\u64cd\u4f5c\u72b6\u6001\u7684\u65b9\u6cd5\uff0c\u5e76\u5bf9stateId+1",id:"\u7b2c\u56db\u6b65\u8fd4\u56de\u7b2ci\u4e2a\u72b6\u6001\u503c\u548c\u64cd\u4f5c\u72b6\u6001\u7684\u65b9\u6cd5\u5e76\u5bf9stateid1",level:3},{value:"\u5b8c\u6574\u4ee3\u7801",id:"\u5b8c\u6574\u4ee3\u7801",level:2},{value:"CodeSandBox\u5728\u7ebf\u5b9e\u73b0\u5730\u5740",id:"codesandbox\u5728\u7ebf\u5b9e\u73b0\u5730\u5740",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],c={toc:i};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u539f\u751fusestate\u5177\u6709\u7684\u51e0\u4e2a\u7279\u70b9"},"\u539f\u751fuseState\u5177\u6709\u7684\u51e0\u4e2a\u7279\u70b9"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u6570\u7ec4\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u503c\u662f\u72b6\u6001\u503c\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u503c\u662f\u8bbe\u7f6e\u72b6\u6001\u7684\u65b9\u6cd5\u3002"),(0,r.kt)("li",{parentName:"ol"},"useState\u4f1a\u5224\u65ad\u4f20\u5165\u7684state\u662f\u521d\u59cb\u503c\u8fd8\u662f\u5df2\u5b58\u5728\u7684\u503c\u3002"),(0,r.kt)("li",{parentName:"ol"},"useState\u53ef\u80fd\u88ab\u591a\u6b21\u8c03\u7528"),(0,r.kt)("li",{parentName:"ol"},"\u8c03\u7528\u8bbe\u7f6e\u72b6\u6001\u7684\u65b9\u6cd5\u540e\u9700\u8981\u91cd\u65b0\u6e32\u67d3\u7ec4\u4ef6\u3002")),(0,r.kt)("h2",{id:"\u624b\u5199usestate"},"\u624b\u5199useState"),(0,r.kt)("h3",{id:"\u7b2c\u4e00\u6b65\u7528\u4e0d\u540c\u7684\u6570\u7ec4\u6765\u5206\u522b\u5b58\u653e\u72b6\u6001\u503c\u548c\u8bbe\u7f6e\u72b6\u6001\u7684\u65b9\u6cd5"},"\u7b2c\u4e00\u6b65\uff1a\u7528\u4e0d\u540c\u7684\u6570\u7ec4\u6765\u5206\u522b\u5b58\u653e\u72b6\u6001\u503c\u548c\u8bbe\u7f6e\u72b6\u6001\u7684\u65b9\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let states = [];\nlet setters = [];\nlet stateId = 0;\n")),(0,r.kt)("h3",{id:"\u7b2c\u4e8c\u6b65\u5224\u65adusestate\u4f20\u5165\u7684\u521d\u59cb\u72b6\u6001\u503c\u662f\u5426\u5df2\u7ecf\u5b58\u5728"},"\u7b2c\u4e8c\u6b65\uff1a\u5224\u65aduseState\u4f20\u5165\u7684\u521d\u59cb\u72b6\u6001\u503c\u662f\u5426\u5df2\u7ecf\u5b58\u5728"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5b58\u5728\u7528\u4ee5\u524d\u7684\uff0c\u4e0d\u5b58\u5728\u5219\u4f7f\u7528\u521d\u59cb\u72b6\u6001\u503c"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"states[stateId] = states[stateId] ? states[stateId] : initialState;\n"))),(0,r.kt)("h3",{id:"\u7b2c\u4e09\u6b65\u901a\u8fc7\u72b6\u6001\u7684id\u6765\u8fd4\u56de\u8bbe\u7f6e\u72b6\u6001\u7684\u65b9\u6cd5\u7136\u540e\u52a0\u5165\u5230\u8bbe\u7f6e\u65b9\u6cd5\u7684\u6570\u7ec4\u4e2d"},"\u7b2c\u4e09\u6b65\uff1a\u901a\u8fc7\u72b6\u6001\u7684id\u6765\u8fd4\u56de\u8bbe\u7f6e\u72b6\u6001\u7684\u65b9\u6cd5\uff0c\u7136\u540e\u52a0\u5165\u5230\u8bbe\u7f6e\u65b9\u6cd5\u7684\u6570\u7ec4\u4e2d"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u81ea\u5b9a\u4e49\u7684\u6e32\u67d3\u51fd\u6570\u5fc5\u987b\u80fd\u591f\u64cd\u4f5c\u5168\u5c40\u7684\u72b6\u6001id."),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"setters.push(createSetter(stateId));\nfunction createSetter(stateId) {\n    return function (newState) {\n        states[stateId] = newState;\n        myRender();\n    }\n}\nfunction myRender() {\n    stateId = 0;\n    ReactDOM.render(<App />, document.querySelector('#root'));\n}\n"))),(0,r.kt)("h3",{id:"\u7b2c\u56db\u6b65\u8fd4\u56de\u7b2ci\u4e2a\u72b6\u6001\u503c\u548c\u64cd\u4f5c\u72b6\u6001\u7684\u65b9\u6cd5\u5e76\u5bf9stateid1"},"\u7b2c\u56db\u6b65\uff1a\u8fd4\u56de\u7b2ci\u4e2a\u72b6\u6001\u503c\u548c\u64cd\u4f5c\u72b6\u6001\u7684\u65b9\u6cd5\uff0c\u5e76\u5bf9stateId+1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let value = states[stateId];\nlet setter = setters[stateId];\nstateId++;\nreturn [value, setter]\n")),(0,r.kt)("h2",{id:"\u5b8c\u6574\u4ee3\u7801"},"\u5b8c\u6574\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react'\nimport ReactDOM from 'react-dom'\n\n// \u81ea\u5b9a\u4e49Hook\n\n/**\n * @description: \u624b\u5199useState\n * @param {*}\n * @return {*}\n */\nlet states = [];\nlet setters = [];\nlet stateId = 0;\nfunction createSetter(stateId) {\n    return function (newState) {\n        states[stateId] = newState;\n        myRender();\n    }\n}\nfunction myRender() {\n    stateId = 0;\n    ReactDOM.render(<App />, document.querySelector('#root'));\n}\nfunction myUseState(initialState) {\n    // \u5224\u65adstate\u662f\u5426\u5b58\u5728\uff0c\u5b58\u5728\u5219\u4f7f\u7528\u4ee5\u524d\u7684\uff0c\u4e0d\u5b58\u5728\u5219\u4f7f\u7528\u521d\u59cb\u503c\n    states[stateId] = states[stateId] ? states[stateId] : initialState;\n    setters.push(createSetter(stateId));\n    let value = states[stateId];\n    let setter = setters[stateId];\n    stateId++;\n    return [value, setter]\n}\nfunction App() {\n    const [count, setCount] = myUseState(0);\n    const [name, setName] = myUseState('\u5f20\u4e09');\n    return (\n        <div>\n            <h1>\u5f53\u524d\u6c42\u548c\u4e3a\uff1a{count}</h1>\n            <button onClick={() => setCount(count + 1)}>\u70b9\u6211+1</button>\n            <h1>\u5f53\u524d\u59d3\u540d\u4e3a\uff1a{name}</h1>\n            <button onClick={() => setName('\u674e\u56db')}>\u70b9\u6211\u5207\u6362\u59d3\u540d</button>\n        </div>\n    )\n}\n\nReactDOM.render(<App />, document.querySelector('#root'));\n")),(0,r.kt)("h2",{id:"codesandbox\u5728\u7ebf\u5b9e\u73b0\u5730\u5740"},"CodeSandBox\u5728\u7ebf\u5b9e\u73b0\u5730\u5740"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://codesandbox.io/s/shou-xie-usestate-62gkc?file=/src/index.js"},"\u5728\u7ebf\u5b9e\u73b0"))),(0,r.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://zh-hans.reactjs.org/docs/hooks-reference.html#usestate"},"\u5b98\u65b9\u6587\u6863\uff1auseState"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6844903833764642830"},"\u4ece\u6e90\u7801\u5256\u6790useState\u7684\u6267\u884c\u8fc7\u7a0b")))))}p.isMDXComponent=!0}}]);