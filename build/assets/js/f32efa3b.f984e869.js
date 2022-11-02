"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[24075],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),k=c(n),m=a,b=k["".concat(l,".").concat(m)]||k[m]||p[m]||r;return n?o.createElement(b,s(s({ref:t},i),{},{components:n})):o.createElement(b,s({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=k;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,s[1]=u;for(var c=2;c<r;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},24123:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>u,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const r={title:"useState\u662f\u600e\u4e48\u56de\u4e8b\uff1f",date:"2021-8-31",author:"Justin",top:!1,cover:!1,categories:"Hooks",tags:["Hooks"]},s=void 0,u={permalink:"/blog/useState\u662f\u600e\u4e48\u56de\u4e8b",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/useState\u662f\u600e\u4e48\u56de\u4e8b.md",source:"@site/blog\\useState\u662f\u600e\u4e48\u56de\u4e8b.md",title:"useState\u662f\u600e\u4e48\u56de\u4e8b\uff1f",description:"Hooks\u610f\u4e3a\u94a9\u5b50\uff0cReact Hooks\u5c31\u662f\u4e00\u5806\u94a9\u5b50\u51fd\u6570\uff0cReact\u901a\u8fc7\u8fd9\u4e9b\u94a9\u5b50\u51fd\u6570\u5bf9\u51fd\u6570\u578b\u7ec4\u4ef6\u8fdb\u884c\u589e\u5f3a\uff0c\u4e0d\u540c\u7684\u94a9\u5b50\u51fd\u6570\u63d0\u4f9b\u4e86\u4e0d\u540c\u7684\u529f\u80fd\u3002\u94a9\u5b50\u51fd\u6570\u6709\u4e00\u4e2a\u7279\u70b9\uff0c\u90fd\u662f\u4ee5use\u5f00\u5934\u3002",date:"2021-08-31T00:00:00.000Z",formattedDate:"2021\u5e748\u670831\u65e5",tags:[{label:"Hooks",permalink:"/blog/tags/hooks"}],readingTime:2.66,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"useState\u662f\u600e\u4e48\u56de\u4e8b\uff1f",date:"2021-8-31",author:"Justin",top:!1,cover:!1,categories:"Hooks",tags:["Hooks"]},prevItem:{title:"\u4e00\u9053\u770b\u4f3c\u7b80\u5355\u7684\u963f\u91cc\u524d\u7aef\u7b97\u6cd5\u9898",permalink:"/blog/\u4e00\u9053\u770b\u4f3c\u7b80\u5355\u7684\u963f\u91cc\u524d\u7aef\u7b97\u6cd5\u9898"},nextItem:{title:"LeetCode\u2014\u2014\u53bb\u9664\u91cd\u590d\u5b57\u6bcd\uff08\u501f\u52a9\u6808\uff09",permalink:"/blog/LeetCode\u2014\u2014\u53bb\u9664\u91cd\u590d\u5b57\u6bcd\uff08\u501f\u52a9\u6808\uff09"}},l={authorsImageUrls:[void 0]},c=[{value:"\u4e3a\u51fd\u6570\u7ec4\u4ef6\u63d0\u4f9b\u72b6\u6001",id:"\u4e3a\u51fd\u6570\u7ec4\u4ef6\u63d0\u4f9b\u72b6\u6001",level:2},{value:"useState\u7684\u8fd4\u56de\u503c\u662f\u4ec0\u4e48\uff1f",id:"usestate\u7684\u8fd4\u56de\u503c\u662f\u4ec0\u4e48",level:3},{value:"useState\u7684\u7ec6\u8282",id:"usestate\u7684\u7ec6\u8282",level:2},{value:"useState\u66f4\u65b0\u72b6\u6001\u65f6\u662f\u5f02\u6b65\u7684",id:"usestate\u66f4\u65b0\u72b6\u6001\u65f6\u662f\u5f02\u6b65\u7684",level:2},{value:"\u8bfb\u53d6state",id:"\u8bfb\u53d6state",level:2},{value:"\u4e3a\u4ec0\u4e48\u53ebuseState\u800c\u4e0d\u53ebcreateState?",id:"\u4e3a\u4ec0\u4e48\u53ebusestate\u800c\u4e0d\u53ebcreatestate",level:2}],i={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Hooks\u610f\u4e3a\u94a9\u5b50\uff0cReact Hooks\u5c31\u662f\u4e00\u5806\u94a9\u5b50\u51fd\u6570\uff0cReact\u901a\u8fc7\u8fd9\u4e9b\u94a9\u5b50\u51fd\u6570\u5bf9\u51fd\u6570\u578b\u7ec4\u4ef6\u8fdb\u884c\u589e\u5f3a\uff0c\u4e0d\u540c\u7684\u94a9\u5b50\u51fd\u6570\u63d0\u4f9b\u4e86\u4e0d\u540c\u7684\u529f\u80fd\u3002\u94a9\u5b50\u51fd\u6570\u6709\u4e00\u4e2a\u7279\u70b9\uff0c\u90fd\u662f\u4ee5use\u5f00\u5934\u3002")),(0,a.kt)("h2",{id:"\u4e3a\u51fd\u6570\u7ec4\u4ef6\u63d0\u4f9b\u72b6\u6001"},"\u4e3a\u51fd\u6570\u7ec4\u4ef6\u63d0\u4f9b\u72b6\u6001"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"useState\u51fd\u6570\u7684\u5185\u90e8\u662f\u4f7f\u7528\u95ed\u5305\u6765\u5b9e\u73b0\u51fd\u6570\u4fdd\u5b58\u72b6\u6001\u6570\u636e\u7684\u3002")),(0,a.kt)("h3",{id:"usestate\u7684\u8fd4\u56de\u503c\u662f\u4ec0\u4e48"},"useState\u7684\u8fd4\u56de\u503c\u662f\u4ec0\u4e48\uff1f"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8fd4\u56de\u503c\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u6570\u7ec4\u7684\u7b2c\u4e00\u9879\u662f\u72b6\u6001\u6570\u636e\uff0c\u7b2c\u4e8c\u9879\u662f\u8bbe\u7f6e\u72b6\u6001\u6570\u636e\u7684\u65b9\u6cd5\uff0c\u5173\u4e8e\u8fd9\u4e2a\u7b2c\u4e8c\u9879\u7684\u547d\u540d\uff0c\u6211\u4eec\u4e00\u822c\u91c7\u7528set+\u72b6\u6001\u6570\u636e\u540d\u7684\u65b9\u6cd5\uff0c\u8bf7\u770b\u4e0b\u9762\u7684\u4f8b\u5b50\u3002"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const [count,setCount] = useState(0);\n"))),(0,a.kt)("h2",{id:"usestate\u7684\u7ec6\u8282"},"useState\u7684\u7ec6\u8282"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u63a5\u6536\u552f\u4e00\u7684\u53c2\u6570\u5373\u72b6\u6001\u521d\u59cb\u503c\uff0c\u521d\u59cb\u503c\u53ef\u4ee5\u662f\u4efb\u610f\u6570\u636e\u7c7b\u578b\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8fd4\u56de\u503c\u4e3a\u6570\u7ec4\uff0c\u6570\u7ec4\u4e2d\u5b58\u50a8\u72b6\u6001\u503c\u548c\u66f4\u6539\u72b6\u6001\u503c\u7684\u65b9\u6cd5\uff0c\u65b9\u6cd5\u540d\u79f0\u7ea6\u5b9a\u4ee5set\u5f00\u5934\uff0c\u540e\u9762\u52a0\u4e0a\u72b6\u6001\u540d\u79f0\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u65b9\u6cd5\u53ef\u4ee5\u88ab\u8c03\u7528\u591a\u6b21\uff0c\u7528\u4ee5\u4fdd\u5b58\u4e0d\u540c\u7684\u72b6\u6001\u503c\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u53c2\u6570\u53ef\u4ee5\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u51fd\u6570\u8fd4\u56de\u4ec0\u4e48\uff0c\u521d\u59cb\u72b6\u6001\u5c31\u662f\u4ec0\u4e48\uff0c\u51fd\u6570\u53ea\u4f1a\u88ab\u8c03\u7528\u4e00\u6b21\uff0c\u7528\u5728\u521d\u59cb\u503c\u662f\u52a8\u6001\u503c\u7684\u60c5\u51b5\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function App(props) {\n    const [count,setCount] = useState(() => {\n        return props.count || 10;\n    });\n    const [person,setPerson] = useState({name: 'justin'})\n    return (\n        <div>\n            <span>{count},{person.name}</span>\n            <br />\n            <button onClick={() => setCount(count + 1)}>+1</button>\n            <button onClick={() => setPerson({name: '\u56fd\u5bb6'})}>\u70b9\u51fb\u5207\u6362name</button>\n        </div>\n    )\n}\n")),(0,a.kt)("h2",{id:"usestate\u66f4\u65b0\u72b6\u6001\u65f6\u662f\u5f02\u6b65\u7684"},"useState\u66f4\u65b0\u72b6\u6001\u65f6\u662f\u5f02\u6b65\u7684"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function App(props) {\n    const [count,setCount] = useState(0);\n    const [person,setPerson] = useState({name: 'justin'})\n    function handleCount() {\n        setCount(() => {\n            return count + 1;\n        })\n        console.log(count);   // \u6253\u5370\u7684\u662f0\uff0c\u8bf4\u660e\u662f\u5f02\u6b65\u7684\n    }\n    return (\n        <div>\n            <span>{count},{person.name}</span>\n            <br />\n            <button onClick={handleCount}>+1</button>\n            <button onClick={() => setPerson({name: '\u56fd\u5bb6'})}>\u70b9\u51fb\u5207\u6362name</button>\n        </div>\n    )\n}\n")),(0,a.kt)("h2",{id:"\u8bfb\u53d6state"},"\u8bfb\u53d6state"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728class\u7684\u5199\u6cd5\u4e2d\uff0c\u8bfb\u53d6state\u9700\u8981\u4f7f\u7528this.state\uff0c\u4f46\u662f\u5728hook\u5199\u6cd5\u4e2d\uff0c\u53ea\u9700\u8981\u76f4\u63a5\u4f7f\u7528\u72b6\u6001\u7684\u53d8\u91cf\u540d\u5373\u53ef\u3002")),(0,a.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u53ebusestate\u800c\u4e0d\u53ebcreatestate"},"\u4e3a\u4ec0\u4e48\u53ebuseState\u800c\u4e0d\u53ebcreateState?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u56e0\u4e3aCreate\u4e00\u8bcd\u5e76\u4e0d\u662f\u5f88\u51c6\u786e\uff0c\u56e0\u4e3astate\u53ea\u5728\u7ec4\u4ef6\u9996\u6b21\u6e32\u67d3\u7684\u65f6\u5019\u88ab\u521b\u5efa\uff0c\u5728\u4e0b\u4e00\u6b21\u91cd\u65b0\u6e32\u67d3\u7684\u65f6\u5019\uff0cuseState\u8fd4\u56de\u7ed9\u6211\u4eec\u5f53\u524d\u7684state\u3002")))}p.isMDXComponent=!0}}]);