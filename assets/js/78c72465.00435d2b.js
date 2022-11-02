"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[9530],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>k});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=c(n),k=r,b=p["".concat(s,".").concat(k)]||p[k]||m[k]||a;return n?o.createElement(b,l(l({ref:t},i),{},{components:n})):o.createElement(b,l({ref:t},i))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},78552:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={title:"\u5b66\u4f1a\u4f7f\u7528useMemo\u548cuseCallback\u5bf9\u4f60\u6ca1\u574f\u5904",date:"2021-9-6",author:"Justin",top:!1,cover:!1,categories:"Hooks",tags:["Hooks"]},l=void 0,u={permalink:"/blog/\u5b66\u4f1a\u4f7f\u7528useMemo\u548cuseCallback\u5bf9\u4f60\u6ca1\u574f\u5904",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/\u5b66\u4f1a\u4f7f\u7528useMemo\u548cuseCallback\u5bf9\u4f60\u6ca1\u574f\u5904.md",source:"@site/blog\\\u5b66\u4f1a\u4f7f\u7528useMemo\u548cuseCallback\u5bf9\u4f60\u6ca1\u574f\u5904.md",title:"\u5b66\u4f1a\u4f7f\u7528useMemo\u548cuseCallback\u5bf9\u4f60\u6ca1\u574f\u5904",description:"\u4ec0\u4e48\u662fuseMemo\uff1f",date:"2021-09-06T00:00:00.000Z",formattedDate:"2021\u5e749\u67086\u65e5",tags:[{label:"Hooks",permalink:"/blog/tags/hooks"}],readingTime:2.385,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"\u5b66\u4f1a\u4f7f\u7528useMemo\u548cuseCallback\u5bf9\u4f60\u6ca1\u574f\u5904",date:"2021-9-6",author:"Justin",top:!1,cover:!1,categories:"Hooks",tags:["Hooks"]},prevItem:{title:"\u8fd9\u4e00\u6b21\uff0c\u5f7b\u5e95\u641e\u61c2\u95ed\u5305",permalink:"/blog/\u8fd9\u4e00\u6b21\uff0c\u5f7b\u5e95\u641e\u61c2\u95ed\u5305"},nextItem:{title:"\u5927\u5382\u9762\u8bd5\u5fc5\u987b\u638c\u63e1\u7684\u516d\u79cd\u7ee7\u627f\u65b9\u5f0f\uff0c\u4f60\u4f1a\u5417\uff1f",permalink:"/blog/\u5927\u5382\u9762\u8bd5\u5fc5\u987b\u638c\u63e1\u7684\u516d\u79cd\u7ee7\u627f\u65b9\u5f0f\uff0c\u4f60\u4f1a\u5417\uff1f"}},s={authorsImageUrls:[void 0]},c=[{value:"\u4ec0\u4e48\u662fuseMemo\uff1f",id:"\u4ec0\u4e48\u662fusememo",level:2},{value:"useMemo\u7684\u57fa\u672c\u7528\u6cd5",id:"usememo\u7684\u57fa\u672c\u7528\u6cd5",level:3},{value:"memo\u65b9\u6cd5",id:"memo\u65b9\u6cd5",level:2},{value:"memo\u65b9\u6cd5\u7684\u57fa\u672c\u7528\u6cd5",id:"memo\u65b9\u6cd5\u7684\u57fa\u672c\u7528\u6cd5",level:3},{value:"useCallback\u662f\u4ec0\u4e48\uff1f",id:"usecallback\u662f\u4ec0\u4e48",level:2},{value:"useCallback\u7684\u57fa\u672c\u7528\u6cd5",id:"usecallback\u7684\u57fa\u672c\u7528\u6cd5",level:3},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],i={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4ec0\u4e48\u662fusememo"},"\u4ec0\u4e48\u662fuseMemo\uff1f"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"useMemo\u7684\u884c\u4e3a\u7c7b\u4f3cVue\u4e2d\u7684\u8ba1\u7b97\u5c5e\u6027\uff0c\u53ef\u4ee5\u68c0\u6d4b\u67d0\u4e2a\u503c\u7684\u53d8\u5316\uff0c\u6839\u636e\u53d8\u5316\u503c\u8ba1\u7b97\u65b0\u503c\u3002useMemo\u4f1a\u7f13\u5b58\u8ba1\u7b97\u7ed3\u679c\uff0c\u5982\u679c\u68c0\u6d4b\u503c\u6ca1\u6709\u53d1\u751f\u53d8\u5316\uff0c\u5373\u4f7f\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\uff0c\u4e5f\u4e0d\u4f1a\u91cd\u65b0\u8ba1\u7b97\uff0c\u6b64\u884c\u4e3a\u53ef\u4ee5\u6709\u52a9\u4e8e\u907f\u514d\u5728\u6bcf\u4e2a\u6e32\u67d3\u4e0a\u8fdb\u884c\u6602\u8d35\u7684\u8ba1\u7b97\u3002\u4e0d\u8981\u518duseMemo\u51fd\u6570\u4e2d\u6267\u884c\u4e0e\u6e32\u67d3\u65e0\u5173\u7684\u64cd\u4f5c\u3002")),(0,r.kt)("h3",{id:"usememo\u7684\u57fa\u672c\u7528\u6cd5"},"useMemo\u7684\u57fa\u672c\u7528\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function App() {\n\n    const [bool,setBool] = useState(true);\n    const [age,setAge] = useState('666');\n    \n    const result = useMemo(() => {\n        console.log('\u68c0\u6d4b\u5230age\u53d1\u751f\u53d8\u5316');\n        return age * 2; \n    },[age])\n    return (\n        <div>\n            {age}\n            {bool ? '\u771f': '\u5047'}\n            <button onClick={() => setBool(!bool)}>\u70b9\u6211\u5207\u6362\u5e03\u5c14\u503c</button>\n            <button onClick={() => setAge(age*1 + 1)}>\u70b9\u6211age+1</button>\n            result\u662f\uff1a{result}\n        </div>\n    )\n}\n")),(0,r.kt)("h2",{id:"memo\u65b9\u6cd5"},"memo\u65b9\u6cd5"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"memo\u65b9\u6cd5\u53ef\u4ee5\u7528\u4e8e\u6027\u80fd\u4f18\u5316\uff0c\u5982\u679c\u672c\u7ec4\u4ef6\u4e2d\u7684\u6570\u636e\u6ca1\u6709\u53d1\u751f\u53d8\u5316\uff0c\u963b\u6b62\u7ec4\u4ef6\u66f4\u65b0\uff0c\u7c7b\u4f3c\u7c7b\u7ec4\u4ef6\u4e2d\u7684PureComponent\u548cshouldComponentUpdate.")),(0,r.kt)("h3",{id:"memo\u65b9\u6cd5\u7684\u57fa\u672c\u7528\u6cd5"},"memo\u65b9\u6cd5\u7684\u57fa\u672c\u7528\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function App() {\n    const [count, setCount] = useState(0);\n    return (\n        <div>\n            <Foo />\n            <h1>\u5f53\u524d\u6c42\u548c\u4e3a\uff1a{count}</h1>\n            <button onClick={() => setCount(count + 1)}>\u70b9\u6211+1</button>\n        </div>\n    )\n\n}\n\nconst Foo = memo(function Foo() {\n    console.log('Foo\u88ab\u6e32\u67d3\u4e86');\n    return (\n        <div>\u8fd9\u662fFoo\u7ec4\u4ef6</div>\n    )\n})\n")),(0,r.kt)("h2",{id:"usecallback\u662f\u4ec0\u4e48"},"useCallback\u662f\u4ec0\u4e48\uff1f"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5e38\u7528\u4e8e\u6027\u80fd\u4f18\u5316\uff0c\u7f13\u5b58\u51fd\u6570\uff0c\u4f7f\u5f97\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\u65f6\u5f97\u5230\u76f8\u540c\u7684\u51fd\u6570\u5b9e\u4f8b\u3002")),(0,r.kt)("h3",{id:"usecallback\u7684\u57fa\u672c\u7528\u6cd5"},"useCallback\u7684\u57fa\u672c\u7528\u6cd5"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5728\u8fd9\u91cc\u6211\u4eec\u9700\u8981\u6ce8\u610f\u7684\u662fuseCallback\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u65f6\u6211\u4eec\u9700\u8981\u7f13\u5b58\u7684\u51fd\u6570\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u6570\u7ec4\u4e2d\u5305\u542b\u7684\u662f\u6ca1\u6709\u53d8\u5316\u7684\u76ee\u6807\u51fd\u6570\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function App() {\n    const [count, setCount] = useState(0);\n    const resetCount = useCallback(() => setCount(0),[setCount]);\n    return (\n        <div>\n            <Foo resetCount={resetCount}/>\n            <h1>\u5f53\u524d\u6c42\u548c\u4e3a\uff1a{count}</h1>\n            <button onClick={() => setCount(count + 1)}>\u70b9\u6211+1</button>\n            \n        </div>\n    )\n}\nconst Foo = memo(function Foo(props) {\n    console.log('Foo\u88ab\u6e32\u67d3\u4e86');\n    return (\n        <div>\n            \u8fd9\u662fFoo\u7ec4\u4ef6\n            <button onClick={props.resetCount}>\u70b9\u6211\u5f52\u96f6</button>\n        </div>\n    )\n})\n")),(0,r.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zh-hans.reactjs.org/docs/hooks-reference.html#usecallback"},"\u5b98\u65b9\u6587\u6863\uff1auseCallback")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zh-hans.reactjs.org/docs/hooks-reference.html#usememo"},"\u5b98\u65b9\u6587\u6863\uff1auseMemo"))))}m.isMDXComponent=!0}}]);