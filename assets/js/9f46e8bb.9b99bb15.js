"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[61388],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=i(n),m=o,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||a;return n?r.createElement(d,u(u({ref:t},s),{},{components:n})):r.createElement(d,u({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,u=new Array(a);u[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,u[1]=c;for(var i=2;i<a;i++)u[i]=n[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},62940:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),u=["components"],c={title:"\u6709\u5927\u7528\u9014\u7684useRef",date:new Date("2021-10-18T00:00:00.000Z"),author:"Justin",top:!1,cover:!1,categories:"Hooks",tags:["Hooks"]},l=void 0,i={permalink:"/\u6709\u5927\u7528\u9014\u7684useRef",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/\u6709\u5927\u7528\u9014\u7684useRef.md",source:"@site/blog/\u6709\u5927\u7528\u9014\u7684useRef.md",title:"\u6709\u5927\u7528\u9014\u7684useRef",description:"\u4f7f\u7528useRef\u83b7\u53d6DOM\u5143\u7d20",date:"2021-10-18T00:00:00.000Z",formattedDate:"2021\u5e7410\u670818\u65e5",tags:[{label:"Hooks",permalink:"/tags/hooks"}],readingTime:.8833333333333333,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"\u6709\u5927\u7528\u9014\u7684useRef",date:"2021-10-18T00:00:00.000Z",author:"Justin",top:!1,cover:!1,categories:"Hooks",tags:["Hooks"]},prevItem:{title:"\u524d\u7aef\u7ecf\u4e45\u4e0d\u8870\u7684\u9762\u8bd5\u9898--\u6570\u7ec4\u4e71\u5e8f",permalink:"/\u524d\u7aef\u7ecf\u4e45\u4e0d\u8870\u7684\u9762\u8bd5\u9898--\u6570\u7ec4\u4e71\u5e8f"},nextItem:{title:"\u4e8c\u5237--\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32",permalink:"/\u4e8c\u5237--\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32"}},s={authorsImageUrls:[void 0]},p=[{value:"\u4f7f\u7528useRef\u83b7\u53d6DOM\u5143\u7d20",id:"\u4f7f\u7528useref\u83b7\u53d6dom\u5143\u7d20",level:2},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:3},{value:"\u4f7f\u7528useRef\u8de8\u7ec4\u4ef6\u5468\u671f\u4fdd\u5b58\u6570\u636e",id:"\u4f7f\u7528useref\u8de8\u7ec4\u4ef6\u5468\u671f\u4fdd\u5b58\u6570\u636e",level:2},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5-1",level:3}],f={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4f7f\u7528useref\u83b7\u53d6dom\u5143\u7d20"},"\u4f7f\u7528useRef\u83b7\u53d6DOM\u5143\u7d20"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528useRef\u83b7\u53d6DOM\u5143\u7d20\u662f\u76ee\u524duseRef\u6700\u5e38\u7528\u7684\u7528\u6cd5\u3002")),(0,a.kt)("h3",{id:"\u57fa\u672c\u7528\u6cd5"},"\u57fa\u672c\u7528\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function App() {\n    const box = useRef();\n\n    return (\n        <div ref={box}>\n            <button onClick={() => console.log(box)}>\u70b9\u51fb\u83b7\u53d6div</button>\n        </div>\n    )\n}\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/690a1254e0f8fa452719c4f1ad1a82a0.png",alt:"image.png"})),(0,a.kt)("h2",{id:"\u4f7f\u7528useref\u8de8\u7ec4\u4ef6\u5468\u671f\u4fdd\u5b58\u6570\u636e"},"\u4f7f\u7528useRef\u8de8\u7ec4\u4ef6\u5468\u671f\u4fdd\u5b58\u6570\u636e"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5373\u4f7f\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\uff0c\u4fdd\u5b58\u7684\u6570\u636e\u4ecd\u7136\u8fd8\u5728\uff0c\u4fdd\u5b58\u7684\u6570\u636e\u88ab\u66f4\u6539\u4e0d\u4f1a\u89e6\u53d1\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\u3002")),(0,a.kt)("h3",{id:"\u57fa\u672c\u7528\u6cd5-1"},"\u57fa\u672c\u7528\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @description: \u7ec4\u4ef6\u6302\u8f7d\u5b8c\u6210\u4e4b\u540e\u5f00\u542f\u4e00\u4e2a\u5faa\u73af\u5b9a\u65f6\u5668\uff0c\u4f7f\u7528useRef\u7684\u4fdd\u5b58\u6570\u636e\u529f\u80fd\n *               \u4e0d\u4f1a\u968f\u7740\u7ec4\u4ef6\u7684\u66f4\u65b0\u800c\u4e22\u5931\u6570\u636e\n * @param {*}\n * @return {*}\n */\nfunction App() {\n    const [count,setCount] = useState(0)\n    const timeId = useRef;\n    useEffect(() => {\n        timeId.current = setInterval(() => {\n            setCount(count => count + 1);\n        },1000)\n    }, []);\n    const handleSetInterval = () => {\n        clearInterval(timeId.current)\n    }\n    return (\n        <div>\n            <h1>\u5f53\u524d\u6c42\u548c\u4e3a{count}</h1>\n            <button onClick={handleSetInterval}>\u70b9\u6211\u6e05\u9664\u5b9a\u65f6\u5668</button>\n        </div>\n    )\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8fd9\u91cc\u6211\u4eec\u9700\u8981\u6ce8\u610f\u7684\u662f\u6570\u636e\u5e76\u4e0d\u662f\u76f4\u63a5\u4fdd\u5b58\u5728useRef\u8fd4\u56de\u7684\u8fd9\u4e2a\u5bf9\u8c61\u4e2d\u7684\uff0c\u800c\u662f\u4fdd\u5b58\u5728\u8fd9\u4e2a\u5bf9\u8c61\u7684current\u5c5e\u6027\u4e0a\u7684\u3002")))}m.isMDXComponent=!0}}]);