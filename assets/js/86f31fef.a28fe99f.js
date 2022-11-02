"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[68142],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},i=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,d=p["".concat(u,".").concat(m)]||p[m]||f[m]||l;return n?o.createElement(d,a(a({ref:t},i),{},{components:n})):o.createElement(d,a({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<l;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},40266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const l={title:"\u8fd9\u4e00\u6b21\uff0c\u5f7b\u5e95\u641e\u61c2useEffect",date:"2021-9-3",author:"Justin",top:!1,cover:!1,categories:"Hooks",tags:["Hooks"]},a=void 0,c={permalink:"/blog/\u8fd9\u4e00\u6b21\uff0c\u5f7b\u5e95\u641e\u61c2useEffect",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/\u8fd9\u4e00\u6b21\uff0c\u5f7b\u5e95\u641e\u61c2useEffect.md",source:"@site/blog/\u8fd9\u4e00\u6b21\uff0c\u5f7b\u5e95\u641e\u61c2useEffect.md",title:"\u8fd9\u4e00\u6b21\uff0c\u5f7b\u5e95\u641e\u61c2useEffect",description:"\u4ec0\u4e48\u662fuseEffect?",date:"2021-09-03T00:00:00.000Z",formattedDate:"2021\u5e749\u67083\u65e5",tags:[{label:"Hooks",permalink:"/blog/tags/hooks"}],readingTime:2.51,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"\u8fd9\u4e00\u6b21\uff0c\u5f7b\u5e95\u641e\u61c2useEffect",date:"2021-9-3",author:"Justin",top:!1,cover:!1,categories:"Hooks",tags:["Hooks"]},prevItem:{title:"\u3010\u9752\u8bad\u8425\u3011- JavaScript\u4e2d\u7684\u8bbe\u8ba1\u6a21\u5f0f\u7b14\u8bb0",permalink:"/blog/\u3010\u9752\u8bad\u8425\u3011- JavaScript\u4e2d\u7684\u8bbe\u8ba1\u6a21\u5f0f\u7b14\u8bb0"},nextItem:{title:"\u4e00\u9053\u770b\u4f3c\u7b80\u5355\u7684\u963f\u91cc\u524d\u7aef\u7b97\u6cd5\u9898",permalink:"/blog/\u4e00\u9053\u770b\u4f3c\u7b80\u5355\u7684\u963f\u91cc\u524d\u7aef\u7b97\u6cd5\u9898"}},u={authorsImageUrls:[void 0]},s=[{value:"\u4ec0\u4e48\u662fuseEffect?",id:"\u4ec0\u4e48\u662fuseeffect",level:2},{value:"1. useEffect\u6267\u884c\u65f6\u673a",id:"1-useeffect\u6267\u884c\u65f6\u673a",level:3},{value:"2. useEffect\u7684\u4f7f\u7528\u65b9\u6cd5\u793a\u4f8b",id:"2-useeffect\u7684\u4f7f\u7528\u65b9\u6cd5\u793a\u4f8b",level:3},{value:"3. useEffect\u89e3\u51b3\u7684\u95ee\u9898",id:"3-useeffect\u89e3\u51b3\u7684\u95ee\u9898",level:3},{value:"4\uff1auseEffect\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570",id:"4useeffect\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570",level:3},{value:"5\uff1auseEffect\u7ed3\u5408\u5f02\u6b65\u51fd\u6570",id:"5useeffect\u7ed3\u5408\u5f02\u6b65\u51fd\u6570",level:3}],i={toc:s};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4ec0\u4e48\u662fuseeffect"},"\u4ec0\u4e48\u662fuseEffect?"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8ba9\u51fd\u6570\u578b\u7ec4\u4ef6\u62e5\u6709\u5904\u7406\u526f\u4f5c\u7528\u7684\u80fd\u529b\uff0c\u7c7b\u4f3c\u751f\u547d\u5468\u671f\u51fd\u6570\u3002")),(0,r.kt)("h3",{id:"1-useeffect\u6267\u884c\u65f6\u673a"},"1. useEffect\u6267\u884c\u65f6\u673a"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u53ef\u4ee5\u628auseEffect\u770b\u505acomponentDidMount,componentDidUpdate,componentWillUnmount\u8fd9\u4e09\u4e2a\u51fd\u6570\u7684\u7ec4\u5408\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/f92c585c136ca03a11a8b27c36a1e890.png",alt:"image.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5f53\u505acomponentDidMount\u548ccomponentDidUpdate\u7684\u65f6\u5019")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function App() {\n    const [count,setCount] = useState(0);\n    // \u7ec4\u4ef6\u6302\u8f7d\u5b8c\u6210\u4e4b\u540e \u6216 \u7ec4\u4ef6\u6570\u636e\u66f4\u65b0\u5b8c\u6210\u4e4b\u540e \u6267\u884c\n    useEffect(() => {\n        console.log('\u7ec4\u4ef6\u6302\u8f7d\u5b8c\u6210\u4e4b\u540e \u6216 \u7ec4\u4ef6\u6570\u636e\u66f4\u65b0\u5b8c\u6210\u4e4b\u540e \u6267\u884c');\n    })\n    return (\n        <div>\n            {count}\n            <button onClick={() => setCount(count + 1)}>+1</button>\n        </div>\n    )\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4ec5\u5f53\u505acomonentDidMount\u7684\u65f6\u5019")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"useEffect(() => {\n    console.log('\u4ec5\u5f53\u505acomponentDidMount');\n},[])\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5f53\u505acomponentWillunmount\u7684\u65f6\u5019(\u6ce8\u610f\uff1a\u8fd9\u91cc\u4e0d\u662f\u4ec5\u5f53\u505acomponentWillunmount)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"useEffect(() => () => {\n    console.log('\u5f53\u505acomponentWillUnmount');\n})\n")),(0,r.kt)("h3",{id:"2-useeffect\u7684\u4f7f\u7528\u65b9\u6cd5\u793a\u4f8b"},"2. useEffect\u7684\u4f7f\u7528\u65b9\u6cd5\u793a\u4f8b"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4e3awindow\u5bf9\u8c61\u6dfb\u52a0\u6eda\u52a8\u4e8b\u4ef6\u3002\uff08\u6302\u8f7d\u5b8c\u6210\u540e\u7ed1\u5b9a\u4e8b\u4ef6\uff0c\u5378\u8f7d\u7ec4\u4ef6\u540e\u89e3\u9664\u7ed1\u5b9a\uff09")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function App() {\n    function onScroll() {\n        console.log('\u76d1\u542c\u5230\u9875\u9762\u53d1\u751f\u6eda\u52a8\u4e86');\n    }\n    useEffect(() => {\n        window.addEventListener('scroll',onScroll);\n        return () => {\n            // \u5378\u8f7d\u7ec4\u4ef6\u65f6\u89e3\u9664\u5bf9\u4e8b\u4ef6\u7684\u7ed1\u5b9a\n            window.removeEventListener('scroll',onScroll);\n        }\n    })\n    return (\n        <div>\n            App \n        </div>\n    )\n}\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u5b9a\u65f6\u5668\u8ba9count\u6570\u503c\u6bcf\u9694\u4e00\u79d2\u589e\u52a01\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function App() {\n    \n    const [count,setCount] = useState(0);\n    useEffect(() => {\n        const timeId = setInterval(() => {\n           setCount(count => count + 1); \n        },1000)\n        return () => {\n            clearInterval(timeId);\n        }\n    },[])\n    return (\n        <div>\n            <h1>\u5f53\u524d\u6c42\u548c\u4e3a\uff1a{count}</h1> \n        </div>\n    )\n}\n")),(0,r.kt)("h3",{id:"3-useeffect\u89e3\u51b3\u7684\u95ee\u9898"},"3. useEffect\u89e3\u51b3\u7684\u95ee\u9898"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5c06\u4e00\u7ec4\u76f8\u5e72\u7684\u4e1a\u52a1\u903b\u8f91\u5f52\u7f6e\u5230\u4e86\u540c\u4e00\u4e2a\u526f\u4f5c\u7528\u51fd\u6570\u4e2d."),(0,r.kt)("li",{parentName:"ol"},"\u7b80\u5316\u91cd\u590d\u4ee3\u7801,\u4f7f\u7ec4\u4ef6\u5185\u90e8\u4ee3\u7801\u66f4\u52a0\u6e05\u6670.")),(0,r.kt)("h3",{id:"4useeffect\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570"},"4\uff1auseEffect\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53ea\u6709\u6307\u5b9a\u6570\u636e\u53d1\u751f\u53d8\u5316\u7684\u65f6\u5019\u624d\u89e6\u53d1effect")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"useEffect(() => {\n    document.title = count;\n}, [count]) \n")),(0,r.kt)("h3",{id:"5useeffect\u7ed3\u5408\u5f02\u6b65\u51fd\u6570"},"5\uff1auseEffect\u7ed3\u5408\u5f02\u6b65\u51fd\u6570"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5728useEffect\u4e2d\u76f4\u63a5\u4f7f\u7528async\u548cawait\u662f\u4f1a\u62a5\u9519\u7684\uff0c\u63a8\u8350\u4f7f\u7528\u7acb\u5373\u6267\u884c\u51fd\u6570\u6765\u5305\u88f9\u5f02\u6b65\u51fd\u6570\u3002"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function getData() {\n    return new Promise(resolve => {\n        resolve({msg: 'Hello'})\n    })\n}\nfunction App() {\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"useEffect(() => {\n    (async function () {\n        const result = await getData();\n        console.log(result);\n    })()\n},[])\n\nreturn (\n    <div>\n        App\n    </div>\n)\n")),(0,r.kt)("p",null,"}"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\n## \u53c2\u8003\u6587\u732e\n* [\u5b98\u65b9\u6587\u6863](https://zh-hans.reactjs.org/docs/hooks-reference.html#useeffect)\n")))}f.isMDXComponent=!0}}]);