"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[81773],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return k}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),d=c(n),k=o,m=d["".concat(s,".").concat(k)]||d[k]||p[k]||r;return n?a.createElement(m,l(l({ref:t},i),{},{components:n})):a.createElement(m,l({ref:t},i))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,l[1]=u;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6394:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),l=["components"],u={id:"react-hooks",slug:"/react-hooks",title:"React\u4e4bhooks",date:new Date("2022-09-07T00:00:00.000Z"),authors:"kuizuo",tags:["react","hook"],keywords:["react","hook"]},s=void 0,c={unversionedId:"skill/react/react-hooks",id:"skill/react/react-hooks",title:"React\u4e4bhooks",description:"\u5b98\u65b9\u5185\u7f6e hooks",source:"@site/docs/skill/react/React\u4e4bhooks.md",sourceDirName:"skill/react",slug:"/react-hooks",permalink:"/docs/react-hooks",draft:!1,tags:[{label:"react",permalink:"/docs/tags/react"},{label:"hook",permalink:"/docs/tags/hook"}],version:"current",frontMatter:{id:"react-hooks",slug:"/react-hooks",title:"React\u4e4bhooks",date:"2022-09-07T00:00:00.000Z",authors:"kuizuo",tags:["react","hook"],keywords:["react","hook"]},sidebar:"skill",previous:{title:"React",permalink:"/docs/category/react"},next:{title:"\u4f7f\u7528\u811a\u624b\u67b6\u521b\u5efaReact\u9879\u76ee",permalink:"/docs/create-react-app"}},i={},p=[{value:"\u5b98\u65b9\u5185\u7f6e hooks",id:"\u5b98\u65b9\u5185\u7f6e-hooks",level:2},{value:"useState",id:"usestate",level:3},{value:"\u57fa\u672c\u6570\u636e\u7c7b\u578b",id:"\u57fa\u672c\u6570\u636e\u7c7b\u578b",level:4},{value:"\u5bf9\u8c61",id:"\u5bf9\u8c61",level:4},{value:"\u6570\u7ec4",id:"\u6570\u7ec4",level:4},{value:"useEffect",id:"useeffect",level:3},{value:"\u5c0f\u603b\u7ed3",id:"\u5c0f\u603b\u7ed3",level:4},{value:"useMono",id:"usemono",level:3},{value:"useCallback",id:"usecallback",level:3},{value:"useRef",id:"useref",level:3},{value:"useContext",id:"usecontext",level:3},{value:"useReducer",id:"usereducer",level:3},{value:"useId",id:"useid",level:3},{value:"\u81ea\u5b9a\u4e49 hooks",id:"\u81ea\u5b9a\u4e49-hooks",level:2},{value:"useToggle",id:"usetoggle",level:3},{value:"Hooks \u5e93",id:"hooks-\u5e93",level:2},{value:"\u53c2\u8003\u6587\u7ae0",id:"\u53c2\u8003\u6587\u7ae0",level:2}],d={toc:p};function k(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u5b98\u65b9\u5185\u7f6e-hooks"},"\u5b98\u65b9\u5185\u7f6e hooks"),(0,r.kt)("h3",{id:"usestate"},"useState"),(0,r.kt)("p",null,"\u5728\u51fd\u6570\u7ec4\u4ef6\u4e2d\u7ba1\u7406\u6570\u636e\u72b6\u6001"),(0,r.kt)("h4",{id:"\u57fa\u672c\u6570\u636e\u7c7b\u578b"},"\u57fa\u672c\u6570\u636e\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react'\n\nexport function App(props) {\n  const [count, setCount] = React.useState(0)\n\n  return (\n    <div className='App'>\n      <div>{count}</div>\n      <button onClick={() => setCount(() => count + 1)}>add</button>\n      <button onClick={() => setCount(count + 1)}>add</button>\n      <button onClick={() => setCount(c => c + 1)}>add</button>\n    </div>\n  )\n}\n")),(0,r.kt)("p",null,"\u4e3b\u8981\u6ce8\u610f\u7684\u70b9\u662f setCount \u53ef\u4ee5\u4f20\u5165\u76f8\u5e94\u6570\u503c\u6216\u533f\u540d\u51fd\u6570\uff0c\u5982\u4e0a\u6240\u793a\u7684\u90fd\u662f\u53ef\u4ee5\u5b9e\u73b0\u5bf9 count+1"),(0,r.kt)("h4",{id:"\u5bf9\u8c61"},"\u5bf9\u8c61"),(0,r.kt)("p",null,"\u8fd9\u91cc\u4e3b\u8981\u9488\u5bf9\u590d\u6742\u7c7b\u578b\uff08\u6570\u7ec4\uff0c\u5bf9\u8c61\uff09\uff0c\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react'\n\nexport default function App(props) {\n  type User = {\n    name: string\n    age: number\n  }\n\n  const [user, setUser] = React.useState<User>({\n    name: 'kuizuo',\n    age: 20,\n  })\n\n  return (\n    <div className=\"App\">\n      <div>{user.name}</div>\n      <div>{user.age}</div>\n      <button\n        onClick={() => {\n          setUser((obj) => ({\n            ...obj,\n            name: 'Faith&Passion',\n          }))\n        }}\n      >\n        set name as Faith&Passion\n      </button>\n    </div>\n  )\n}\n")),(0,r.kt)("h4",{id:"\u6570\u7ec4"},"\u6570\u7ec4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react'\n\nexport default function App(props) {\n  const [arr, setArr] = React.useState(['code', 'eat', 'sleep'])\n\n  return (\n    <div className=\"App\">\n      {arr.map((a) => (\n        <div>{a}</div>\n      ))}\n      <button\n        onClick={() => {\n          setArr((arr) => [...arr, '123'])\n        }}\n      >\n        append\n      </button>\n    </div>\n  )\n}\n\n")),(0,r.kt)("p",null,"useState \u5bf9\u4e8e\u590d\u6742\u7c7b\u578b\u800c\u8a00\uff0c\u5c24\u5176\u662f\u5728\u8d4b\u503c\u64cd\u4f5c\u662f\u6bd4\u8f83\u9ebb\u70e6\u7684\u3002\u6ca1\u529e\u6cd5\uff0c\u56e0\u4e3a\u9700\u8981\u66f4\u6539\u72b6\u6001\u5c31\u9700\u8981\u8c03\u7528 setState \u65b9\u6cd5\uff0c\u800c setState \u65b9\u6cd5\u9700\u8981\u4f20\u5165\u6700\u7ec8\u5b8c\u6574\u7684\u6570\u636e\u3002"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u5bf9\u8c61\u800c\u8a00\uff0c\u53ef\u4ee5\u8003\u8651\u4f7f\u7528 react use \u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/streamich/react-use/blob/master/docs/useMap.md"},"useMap"),"\uff0c\u5bf9\u4e8e\u6570\u7ec4\u800c\u8a00\uff0c\u53ef\u4ee5\u8003\u8651\u4f7f\u7528 react use \u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/streamich/react-use/blob/master/docs/useList.md"},"useList"),"\u3002\uff08\u5176\u5b9e\u90fd\u662f\u5bf9 setState \u8fdb\u884c\u4e00\u5b9a\u7684\u5c01\u88c5\uff09"),(0,r.kt)("h3",{id:"useeffect"},"useEffect"),(0,r.kt)("p",null,"useEffect \u53ef\u4ee5\u8ba9\u4f60\u5728\u51fd\u6570\u7ec4\u4ef6\u4e2d\u6267\u884c\u526f\u4f5c\u7528\u64cd\u4f5c"),(0,r.kt)("p",null,"\u526f\u4f5c\u7528\u662f\u6307\u4e00\u6bb5\u548c\u5f53\u524d\u6267\u884c\u7ed3\u679c\u65e0\u5173\u7684\u4ee3\u7801\uff0c\u5e38\u7528\u7684\u526f\u4f5c\u7528\u64cd\u4f5c\u5982\u6570\u636e\u83b7\u53d6\u3001\u8bbe\u7f6e\u8ba2\u9605\u3001\u624b\u52a8\u66f4\u6539 React \u7ec4\u4ef6\u4e2d\u7684 DOM\u3002"),(0,r.kt)("p",null,"useEffect \u53ef\u4ee5\u63a5\u6536\u4e24\u4e2a\u53c2\u6570\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-TypeScript"},"useEffect(callback, dependencies)\n")),(0,r.kt)("p",null,"\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u8981\u6267\u884c\u7684\u51fd\u6570 callback\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u53ef\u9009\u7684\u4f9d\u8d56\u9879\u6570\u7ec4 dependencies\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e9b\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import * as React,{} from 'react'\n\nexport default function App() {\n  const [count, setCount] = React.useState(0)\n\n  React.useEffect(()=>{\n    console.log(count)\n  })\n\n  return <div onClick={() => setCount(count+1)}>{count}</div>\n}\n")),(0,r.kt)("p",null,"\u6bcf\u5f53 count \u53d1\u751f\u53d8\u5316\u540e\uff0cuseEffect \u526f\u4f5c\u7528\u51fd\u6570\u5c31\u4f1a\u8f93\u51fa count\uff0c\u7531\u4e8e\u6ca1\u4f20\u5165 dependencies \u6570\u7ec4\uff0c\u5219",(0,r.kt)("strong",{parentName:"p"},"\u6bcf\u6b21 render \u540e\u6267\u884c")),(0,r.kt)("p",null,"\u5982\u679c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u7ed9\u7a7a\u6570\u7ec4\u7684\u8bdd\uff0c\u53ea\u4f1a\u5728",(0,r.kt)("strong",{parentName:"p"},"\u7b2c\u4e00\u6b21\u52a0\u8f7d\u7ec4\u4ef6\u65f6\u6267\u884c"),"\uff0c\u901a\u5e38\u53ef\u7528\u4e8e\u9996\u6b21\u6570\u636e\u8bf7\u6c42\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react'\n\nexport default function App() {\n  const [data, setData] = React.useState('')\n\n  React.useEffect(() => {\n    async function fetchData() {\n      const data = await (await fetch('https://api.kuizuo.cn/api/one')).text()\n      console.log(data)\n      setData(data)\n    }\n\n    fetchData()\n  }, [])\n\n  return <div>{data}</div>\n}\n\n")),(0,r.kt)("p",null,"\u6b64\u5916 componentWillUnmount \u751f\u547d\u5468\u671f\u4e5f\u53ef\u5728 useEffect \u4e2d\u6267\u884c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react'\n\nexport default function App() {\n  const [data, setData] = React.useState('')\n\n  React.useEffect(() => {\n    // Update the document title using the browser API\n    document.title = `You clicked ${count} times`\n\n    return () => {\n        // \u53ef\u7528\u4e8e\u505a\u6e05\u9664\uff0c\u76f8\u5f53\u4e8e class \u7ec4\u4ef6\u7684 componentWillUnmount\n    }\n\n  }, [count]) // \u6307\u5b9a\u4f9d\u8d56\u9879\u4e3a count\uff0c\u5728 count \u66f4\u65b0\u65f6\u6267\u884c\u8be5\u526f\u4f5c\u7528\n\n  return <div onClick={() => setCount(count+1)}>{count}</div>\n}\n")),(0,r.kt)("h4",{id:"\u5c0f\u603b\u7ed3"},"\u5c0f\u603b\u7ed3"),(0,r.kt)("p",null,"useEffect \u63d0\u4f9b\u4e86\u56db\u79cd\u6267\u884c\u526f\u4f5c\u7528\u7684\u65f6\u673a\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6bcf\u6b21 render \u540e\u6267\u884c"),"\uff1a\u4e0d\u63d0\u4f9b\u7b2c\u4e8c\u4e2a\u4f9d\u8d56\u9879\u53c2\u6570\u3002\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"useEffect(() => {})")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u4ec5\u7b2c\u4e00\u6b21 render \u540e\u6267\u884c"),"\uff1a\u63d0\u4f9b\u4e00\u4e2a\u7a7a\u6570\u7ec4\u4f5c\u4e3a\u4f9d\u8d56\u9879\u3002\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"useEffect(() => {}, [])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u7b2c\u4e00\u6b21\u4ee5\u53ca\u4f9d\u8d56\u9879\u53d1\u751f\u53d8\u5316\u540e\u6267\u884c"),"\uff1a\u63d0\u4f9b\u4f9d\u8d56\u9879\u6570\u7ec4\u3002\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"useEffect(() => {}, [deps])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u7ec4\u4ef6 unmount \u540e\u6267\u884c"),"\uff1a\u8fd4\u56de\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u3002\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"useEffect(() => { return () => {} }, [])"))),(0,r.kt)("h3",{id:"usemono"},"useMono"),(0,r.kt)("p",null,"useMemo \u5b9a\u4e49\u7684\u521b\u5efa\u51fd\u6570\u53ea\u4f1a\u5728\u67d0\u4e2a\u4f9d\u8d56\u9879\u6539\u53d8\u65f6\u624d\u91cd\u65b0\u8ba1\u7b97\uff0c\u6709\u52a9\u4e8e\u6bcf\u6b21\u6e32\u67d3\u65f6",(0,r.kt)("strong",{parentName:"p"},"\u4e0d\u4f1a\u91cd\u590d\u7684\u9ad8\u5f00\u9500\u7684\u8ba1\u7b97"),"\uff0c\u800c\u63a5\u6536\u8fd9\u4e2a\u8ba1\u7b97\u503c\u4f5c\u4e3a\u5c5e\u6027\u7684\u7ec4\u4ef6\uff0c\u4e5f",(0,r.kt)("strong",{parentName:"p"},"\u4e0d\u4f1a\u9891\u7e41\u5730\u9700\u8981\u91cd\u65b0\u6e32\u67d3"),"\u3002\u7c7b\u4f3c\u4e0e Vue \u4e2d\u7684 computed"),(0,r.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b])\n")),(0,r.kt)("p",null,"useMemo \u672c\u8d28\u4e0a\u5c31\u50cf\u4e00\u4e2a\u7f13\u5b58\uff0c\u800c\u4f9d\u8d56\u9879\u662f\u7f13\u5b58\u5931\u6548\u7b56\u7565\u3002"),(0,r.kt)("p",null,"\u4e0d\u4ec5\u80fd\u5bf9\u6570\u636e\u8fdb\u884c\u7f13\u5b58\uff0c\u5bf9\u4e8e\u7eaf\u7ec4\u4ef6\u4e5f\u662f\u80fd\u591f\u7f13\u5b58\u7684\u3002\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"memo")," \u5bf9\u7ec4\u4ef6\u8fdb\u884c\u5305\u88f9\u5373\u53ef\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"export default React.memo(Children)")),(0,r.kt)("h3",{id:"usecallback"},"useCallback"),(0,r.kt)("p",null,"useCallback \u5b9a\u4e49\u7684\u56de\u8c03\u51fd\u6570\u53ea\u4f1a\u5728\u4f9d\u8d56\u9879\u6539\u53d8\u65f6\u91cd\u65b0\u58f0\u660e\u8fd9\u4e2a\u56de\u8c03\u51fd\u6570\uff0c\u8fd9\u6837\u5c31\u4fdd\u8bc1\u4e86",(0,r.kt)("strong",{parentName:"p"},"\u7ec4\u4ef6\u4e0d\u4f1a\u521b\u5efa\u91cd\u590d\u7684\u56de\u8c03\u51fd\u6570"),"\u3002\u800c\u63a5\u6536\u8fd9\u4e2a\u56de\u8c03\u51fd\u6570\u4f5c\u4e3a\u5c5e\u6027\u7684\u7ec4\u4ef6\uff0c\u4e5f",(0,r.kt)("strong",{parentName:"p"},"\u4e0d\u4f1a\u9891\u7e41\u5730\u9700\u8981\u91cd\u65b0\u6e32\u67d3"),"\u3002"),(0,r.kt)("p",null,"useCallback \u4e0e useMono \u7684\u4f5c\u7528\u90fd\u662f\u4e00\u6837\u7684\uff0c\u53ea\u4e0d\u8fc7\u524d\u8005\u4e13\u95e8\u4e3a\u51fd\u6570\u6784\u5efa\u7684\u3002\u4f8b\u5982\u4e0b\u9762\u7684\u4e00\u4e2a\u4f8b\u5b50"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const handleMegaBoost = React.useMemo(() => {\n  return function() {\n    setCount((currentValue) => currentValue + 1234)\n  }\n}, [])\n")),(0,r.kt)("p",null,"\u6709\u66f4\u597d\u7684\u65b9\u6cd5\uff0c\u5c31\u662f\u4f7f\u7528 useCallback\uff0c\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const handleMegaBoost = React.useCallback(() => {\n  setCount((currentValue) => currentValue + 1234)\n}, [])\n")),(0,r.kt)("p",null,"\u8fd9\u4e24\u8005\u7684\u6548\u679c\u662f\u5b8c\u5168\u76f8\u540c\u7684\u3002\u76f8\u5f53\u4e8e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// This:\nReact.useCallback(function helloWorld(){}, [])\n// ...Is functionally equivalent to this:\nReact.useMemo(() => function helloWorld(){}, [])\n")),(0,r.kt)("p",null,"\u5bf9\u4e8e useMono \u548c useCallback \u5f3a\u70c8\u63a8\u8350\u9605\u8bfb",(0,r.kt)("a",{parentName:"p",href:"https://www.joshwcomeau.com/react/usememo-and-usecallback/"},"Understanding useMemo and useCallback (joshwcomeau.com)")),(0,r.kt)("h3",{id:"useref"},"useRef"),(0,r.kt)("p",null,"useRef \u8fd4\u56de\u4e00\u4e2a ref \u5bf9\u8c61\uff0c\u8fd9\u4e2a ref \u5bf9\u8c61\u5728\u7ec4\u4ef6\u7684\u6574\u4e2a\u751f\u547d\u5468\u671f\u5185\u6301\u7eed\u5b58\u5728\u3002"),(0,r.kt)("p",null,"\u4ed6\u6709 2 \u4e2a\u7528\u5904\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4fdd\u5b58 DOM \u8282\u70b9\u7684\u5f15\u7528"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u591a\u6b21\u6e32\u67d3\u4e4b\u95f4\u5171\u4eab\u6570\u636e")),(0,r.kt)("p",null,"\u4fdd\u5b58 DOM \u8282\u70b9\u7684\u5f15\u5165\u4f7f\u7528\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function TextInputWithFocusButton() {\n  const inputEl = React.useRef(null)\n  const onButtonClick = () => {\n    // `current` \u6307\u5411\u5df2\u6302\u8f7d\u5230 DOM \u4e0a\u7684\u6587\u672c\u8f93\u5165\u5143\u7d20\n    inputEl.current.focus()\n  }\n  return (\n    <>\n      <input ref={inputEl} type='text' />\n      <button onClick={onButtonClick}>Focus the input</button>\n    </>\n  )\n}\n")),(0,r.kt)("p",null,"\u4ee5\u4e0a\u4ee3\u7801\u901a\u8fc7 useRef \u521b\u5efa\u4e86 ref \u5bf9\u8c61\uff0c\u4fdd\u5b58\u4e86 DOM \u8282\u70b9\u7684\u5f15\u7528\uff0c\u53ef\u4ee5\u5bf9 ref.current \u505a DOM \u64cd\u4f5c\u3002"),(0,r.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u7528\u9014\u5728\u65e5\u5e38\u5f00\u53d1\u4e2d\u6ca1\u600e\u4e48\u7528\u5230\u8fc7\uff0cuseRef \u4e3b\u8981\u8fd8\u662f\u4e3a\u4e86\u83b7\u53d6 dom \u5c5e\u6027\u3002"),(0,r.kt)("h3",{id:"usecontext"},"useContext"),(0,r.kt)("p",null,"useContext \u7528\u4e8e\u63a5\u6536\u4e00\u4e2a context \u5bf9\u8c61\u5e76\u8fd4\u56de\u8be5 context \u7684\u503c\uff0c\u53ef\u4ee5\u5b9e\u73b0",(0,r.kt)("strong",{parentName:"p"},"\u8de8\u5c42\u7ea7\u7684\u6570\u636e\u5171\u4eab"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// \u521b\u5efa\u4e00\u4e2a context \u5bf9\u8c61\nconst MyContext = React.createContext(initialValue)\nfunction App() {\n  return (\n    // \u901a\u8fc7 Context.Provider \u4f20\u9012 context \u7684\u503c\n    <MyContext.Provider value='1'>\n      <Container />\n    </MyContext.Provider>\n  )\n}\n\nfunction Container() {\n  return <Test />\n}\n\nfunction Test() {\n  // \u83b7\u53d6 Context \u7684\u503c\n  const theme = useContext(MyContext) // 1\n  return <div></div>\n}\n\n")),(0,r.kt)("p",null,"\u66f4\u503e\u5411\u7684\u505a\u6cd5\u662f\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"const MyContext = React.createContext(initialValue)")," \u5b58\u5728\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"src/contexts"),"\u76ee\u5f55\u4e0b\uff0c\u4ee5\u4fbf\u4e8e\u5176\u4ed6\u7ec4\u4ef6\u5f15\u7528"),(0,r.kt)("h3",{id:"usereducer"},"useReducer"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"const [state, dispatch] = useReducer(reducer, initialArg, init)")),(0,r.kt)("p",null,"\u7b2c\u4e00\u4e2a\u53c2\u6570 reducer \u662f\u51fd\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"(state, action) => newState"),"\uff0c\u63a5\u53d7\u5f53\u524d\u7684 state \u548c\u64cd\u4f5c\u884c\u4e3a\u3002\u7b2c\u4e8c\u4e2a\u53c2\u6570 initialArg \u662f\u72b6\u6001\u521d\u59cb\u503c\u3002\u7b2c\u4e09\u4e2a\u53c2\u6570 init \u662f\u61d2\u60f0\u521d\u59cb\u5316\u51fd\u6570\u3002"),(0,r.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react'\nimport './style.css'\n\nconst initialState = { count: 0 }\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'increment':\n      return { count: state.count + 1 }\n    case 'decrement':\n      return { count: state.count - 1 }\n    default:\n      throw new Error()\n  }\n}\n\nexport default function Counter() {\n  const [state, dispatch] = React.useReducer(reducer, initialState)\n  return (\n    <div>\n      Count: {state.count}\n      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>\n      <button onClick={() => dispatch({ type: 'increment' })}>+</button>\n    </div>\n  )\n}\n")),(0,r.kt)("p",null,"\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"useReducer "),"\u4e0e",(0,r.kt)("inlineCode",{parentName:"p"},"useContext")," \u5c31\u80fd\u505a\u5230\u4ee3\u66ff",(0,r.kt)("a",{parentName:"p",href:"https://cn.redux.js.org/"},"redux")," \u6765\u8fdb\u884c\u72b6\u6001\u7ba1\u7406\u4e86\u3002\u7bc7\u5e45\u6709\u9650\uff0c\u8fd9\u91cc\u5360\u4e0d\u505a\u6f14\u793a\u3002"),(0,r.kt)("h3",{id:"useid"},"useId"),(0,r.kt)("p",null,"\u8fd9\u662f React18 \u7684\u65b0\u7279\u6027\uff0c\u7528\u4e8e\u540c\u4e00\u4e2a\u7ec4\u4ef6\u5728\u670d\u52a1\u7aef\u548c\u5ba2\u6237\u7aef\u4e4b\u95f4\u786e\u5b9a\u5bf9\u5e94\u7684\u5339\u914d\u5173\u7cfb\u3002\u800c\u786e\u5b9a\u5173\u7cfb\u7684\u4fbf\u662f\u8fd9\u4e2a Id\u3002"),(0,r.kt)("p",null,"\u5f53\u4e00\u4e2a\u7ec4\u4ef6\uff0c\u540c\u65f6\u4f1a\u88ab\u670d\u52a1\u7aef\u548c\u5ba2\u6237\u7aef\u6e32\u67d3\u65f6\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"useId")," \u6765\u521b\u5efa\u5f53\u524d\u7ec4\u4ef6\u7684\u552f\u4e00\u8eab\u4efd\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'function Checkbox() {\n  const id = useId()\n  return (\n    <>\n      <label htmlFor={id}>Do you like React?</label>\n      <input id={id} type="checkbox" name="react"/>\n    </>\n  )\n}\n')),(0,r.kt)("p",null,"\u5982\u679c\u5728\u540c\u4e00\u4e2a\u7ec4\u4ef6\u4e2d\uff0c\u6211\u4eec\u9700\u8981\u591a\u4e2a id\uff0c\u90a3\u4e48\u4e00\u5b9a\u4e0d\u8981\u91cd\u590d\u7684\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"useId"),"\uff0c\u800c\u662f\u57fa\u4e8e\u4e00\u4e2a id \u6765\u521b\u5efa\u4e0d\u540c\u7684\u6807\u8bc6\uff0c\u901a\u5e38\u7684\u505a\u6cd5\u662f\u6dfb\u52a0\u989d\u5916\u4e0d\u540c\u7684\u5b57\u7b26\u4e32\uff0c\u4f8b\u5982\u4e0b\u9762\u8fd9\u6837\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function NameFields() {\n  const id = useId()\n  return (\n    <div>\n      <label htmlFor={id + '-firstName'}>First Name</label>\n      <div>\n        <input id={id + '-firstName'} type=\"text\" />\n      </div>\n      <label htmlFor={id + '-lastName'}>Last Name</label>\n      <div>\n        <input id={id + '-lastName'} type=\"text\" />\n      </div>\n    </div>\n  )\n}\n")),(0,r.kt)("p",null,"\u66f4\u591a React \u5185\u7f6e Hook \u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://zh-hans.reactjs.org/docs/hooks-reference.html"},"Hook API")),(0,r.kt)("h2",{id:"\u81ea\u5b9a\u4e49-hooks"},"\u81ea\u5b9a\u4e49 hooks"),(0,r.kt)("p",null,"\u81ea\u5b9a\u4e49 Hooks \u5c31\u662f\u51fd\u6570\uff0c\u5b83\u6709 2 \u4e2a\u7279\u5f81\u533a\u5206\u4e8e\u666e\u901a\u51fd\u6570\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u540d\u79f0\u4ee5 \u201cuse\u201d \u5f00\u5934\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u51fd\u6570\u5185\u90e8\u8c03\u7528\u5176\u4ed6\u7684 Hook\u3002")),(0,r.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,r.kt)("h3",{id:"usetoggle"},"useToggle"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react'\nfunction useToggle(initialValue) {\n  const [value, setValue] = React.useState(initialValue)\n  const toggle = React.useCallback(() => {\n    setValue(v => !v)\n  }, [])\n  return [value, toggle]\n}\n")),(0,r.kt)("p",null,"\u7b49\u7b49\u6839\u636e\u5b9e\u9645\u5e94\u7528\u573a\u666f\u7f16\u5199\u76f8\u5e94\u7684 hooks"),(0,r.kt)("h2",{id:"hooks-\u5e93"},"Hooks \u5e93"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/streamich/react-use"},"react-use")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://ahooks.js.org/zh-CN/"},"ahooks")),(0,r.kt)("h2",{id:"\u53c2\u8003\u6587\u7ae0"},"\u53c2\u8003\u6587\u7ae0"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7064345263061598222"},"React-\u4f60\u6709\u5b8c\u5168\u4e86\u89e3 Hooks \u5417")))}k.isMDXComponent=!0}}]);