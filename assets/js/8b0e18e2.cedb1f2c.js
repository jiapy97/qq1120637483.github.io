"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[13642],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return g}});var a=n(67294);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,s=function(t,e){if(null==t)return{};var n,a,s={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(s[n]=t[n]);return s}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}var r=a.createContext({}),i=function(t){var e=a.useContext(r),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=i(t.components);return a.createElement(r.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,s=t.mdxType,o=t.originalType,r=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),m=i(n),g=s,d=m["".concat(r,".").concat(g)]||m[g]||p[g]||o;return n?a.createElement(d,l(l({ref:e},u),{},{components:n})):a.createElement(d,l({ref:e},u))}));function g(t,e){var n=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var r in e)hasOwnProperty.call(e,r)&&(c[r]=e[r]);c.originalType=t,c.mdxType="string"==typeof t?t:s,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73132:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return r},default:function(){return g},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return p}});var a=n(87462),s=n(63366),o=(n(67294),n(3905)),l=["components"],c={title:"React\u4e2d\u7684setState\u66f4\u65b0state\u662f\u540c\u6b65\u8fd8\u662f\u5f02\u6b65\u7684\uff1f",date:"2021-7-19",author:"Justin",top:!0,cover:!0,categories:"React",tags:["React"]},r=void 0,i={permalink:"/React\u4e2d\u7684setState\u66f4\u65b0state\u662f\u540c\u6b65\u8fd8\u662f\u5f02\u6b65\u7684\uff1f",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/React\u4e2d\u7684setState\u66f4\u65b0state\u662f\u540c\u6b65\u8fd8\u662f\u5f02\u6b65\u7684\uff1f.md",source:"@site/blog/React\u4e2d\u7684setState\u66f4\u65b0state\u662f\u540c\u6b65\u8fd8\u662f\u5f02\u6b65\u7684\uff1f.md",title:"React\u4e2d\u7684setState\u66f4\u65b0state\u662f\u540c\u6b65\u8fd8\u662f\u5f02\u6b65\u7684\uff1f",description:"\u95ee\u9898\u5f15\u5165",date:"2021-07-19T00:00:00.000Z",formattedDate:"2021\u5e747\u670819\u65e5",tags:[{label:"React",permalink:"/tags/react"}],readingTime:5.89,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"React\u4e2d\u7684setState\u66f4\u65b0state\u662f\u540c\u6b65\u8fd8\u662f\u5f02\u6b65\u7684\uff1f",date:"2021-7-19",author:"Justin",top:!0,cover:!0,categories:"React",tags:["React"]},prevItem:{title:"\u8fd9\u4e00\u6b21\uff0c\u5f7b\u5e95\u641e\u61c2React\u751f\u547d\u5468\u671f",permalink:"/\u8fd9\u4e00\u6b21\uff0c\u5f7b\u5e95\u641e\u61c2React\u751f\u547d\u5468\u671f"},nextItem:{title:"React\u4e4bPureComponent\u7684\u7528\u6cd5",permalink:"/React\u4e4bPureComponent\u7684\u7528\u6cd5"}},u={authorsImageUrls:[void 0]},p=[{value:"\u95ee\u9898\u5f15\u5165",id:"\u95ee\u9898\u5f15\u5165",level:2},{value:"\u4f7f\u7528setState\u7684\u4e24\u79cd\u5f62\u5f0f",id:"\u4f7f\u7528setstate\u7684\u4e24\u79cd\u5f62\u5f0f",level:2},{value:"\u4f7f\u7528\u8fc7setState\u4e4b\u540e\u80fd\u5426\u7acb\u5373\u83b7\u53d6\u5230\u72b6\u6001\u66f4\u65b0\u540e\u7684\u503c",id:"\u4f7f\u7528\u8fc7setstate\u4e4b\u540e\u80fd\u5426\u7acb\u5373\u83b7\u53d6\u5230\u72b6\u6001\u66f4\u65b0\u540e\u7684\u503c",level:2},{value:"\u5982\u4f55\u7acb\u5373\u83b7\u53d6\u5230\u72b6\u6001\u66f4\u65b0\u540e\u7684\u503c",id:"\u5982\u4f55\u7acb\u5373\u83b7\u53d6\u5230\u72b6\u6001\u66f4\u65b0\u540e\u7684\u503c",level:2},{value:"setState()\u66f4\u65b0\u72b6\u6001\u662f\u540c\u6b65\u8fd8\u662f\u5f02\u6b65\u7684\uff1f",id:"setstate\u66f4\u65b0\u72b6\u6001\u662f\u540c\u6b65\u8fd8\u662f\u5f02\u6b65\u7684",level:2},{value:"\u5f02\u6b65\u4e3e\u4f8b",id:"\u5f02\u6b65\u4e3e\u4f8b",level:3},{value:"\u540c\u6b65\u4e3e\u4f8b",id:"\u540c\u6b65\u4e3e\u4f8b",level:3},{value:"setState\u591a\u6b21\u8c03\u7528\u7684\u95ee\u9898",id:"setstate\u591a\u6b21\u8c03\u7528\u7684\u95ee\u9898",level:2},{value:"\u60c5\u51b51\uff1a\u4e24\u4e2a\u51fd\u6570\u5f0fsetState\u7684\u60c5\u51b5\uff08\u4e0d\u4f1a\u5408\u5e76\uff09",id:"\u60c5\u51b51\u4e24\u4e2a\u51fd\u6570\u5f0fsetstate\u7684\u60c5\u51b5\u4e0d\u4f1a\u5408\u5e76",level:3},{value:"\u60c5\u51b52\uff1a\u4e24\u4e2a\u5bf9\u8c61\u5f0fsetState\u7684\u60c5\u51b5\uff08\u4f1a\u5408\u5e76\uff09",id:"\u60c5\u51b52\u4e24\u4e2a\u5bf9\u8c61\u5f0fsetstate\u7684\u60c5\u51b5\u4f1a\u5408\u5e76",level:3},{value:"\u60c5\u51b53\uff1a\u5148\u51fd\u6570\u5f0f\u540e\u5bf9\u8c61\u5f0f\uff08\u4f1a\u5408\u5e76\uff09",id:"\u60c5\u51b53\u5148\u51fd\u6570\u5f0f\u540e\u5bf9\u8c61\u5f0f\u4f1a\u5408\u5e76",level:3},{value:"\u60c5\u51b54\uff1a\u5148\u5bf9\u8c61\u5f0f\u540e\u51fd\u6570\u5f0f",id:"\u60c5\u51b54\u5148\u5bf9\u8c61\u5f0f\u540e\u51fd\u6570\u5f0f",level:3},{value:"\u4e00\u9053\u7ecf\u5178\u7684setState\u7684\u9762\u8bd5\u9898\uff08\u770b\u61c2\u8fd9\u4e2a\uff0c\u4f60\u53ef\u80fd\u5c31\u61c2\u4e86\uff01\uff09",id:"\u4e00\u9053\u7ecf\u5178\u7684setstate\u7684\u9762\u8bd5\u9898\u770b\u61c2\u8fd9\u4e2a\u4f60\u53ef\u80fd\u5c31\u61c2\u4e86",level:2},{value:"\u7b54\u6848",id:"\u7b54\u6848",level:3},{value:"\u7b54\u6848\u89e3\u6790\uff08\u6309\u8f93\u51fa\u987a\u5e8f\u8fdb\u884c\u89e3\u6790\uff09",id:"\u7b54\u6848\u89e3\u6790\u6309\u8f93\u51fa\u987a\u5e8f\u8fdb\u884c\u89e3\u6790",level:3},{value:"codeSandBox",id:"codesandbox",level:3}],m={toc:p};function g(t){var e=t.components,n=(0,s.Z)(t,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u95ee\u9898\u5f15\u5165"},"\u95ee\u9898\u5f15\u5165"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"React\u4e2d\u7684setState\u662f\u7528\u6765\u66f4\u65b0\u72b6\u6001\u7684\u91cd\u8981\u5de5\u5177\uff0c\u4f46\u662fsetState\u662f\u540c\u6b65\u7684\u8fd8\u662f\u5f02\u6b65\u7684\uff0c\u9700\u8981\u6211\u4eec\u8fdb\u884c\u4e00\u5b9a\u7684\u63a2\u8ba8\uff0c\u63a5\u4e0b\u6765\u8ba9\u6211\u4eec\u597d\u597d\u7814\u7a76\u7814\u7a76\u3002")),(0,o.kt)("h2",{id:"\u4f7f\u7528setstate\u7684\u4e24\u79cd\u5f62\u5f0f"},"\u4f7f\u7528setState\u7684\u4e24\u79cd\u5f62\u5f0f"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u51fd\u6570\u5f62\u5f0f\u7684setState")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"test1 = () => {\n        // \u51fd\u6570\u5f62\u5f0f\u7684setState,\u51fd\u6570\u5f62\u5f0f\u7684setState\u80fd\u591f\u63a5\u6536\u5230\u4e24\u4e2a\u53c2\u6570\uff0c\u4e00\u4e2a\u662fstate\uff0c\u53e6\u4e00\u4e2a\u662fprops\n        this.setState(state => ({count: state.count + 1}))\n    }\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u5bf9\u8c61\u5f62\u5f0f\u7684setState")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"test2 = () => {\n        // \u5bf9\u8c61\u5f62\u5f0f\u7684setState\n        const count = this.state.count + 1;\n        this.setState({count})\n    }\n")),(0,o.kt)("h2",{id:"\u4f7f\u7528\u8fc7setstate\u4e4b\u540e\u80fd\u5426\u7acb\u5373\u83b7\u53d6\u5230\u72b6\u6001\u66f4\u65b0\u540e\u7684\u503c"},"\u4f7f\u7528\u8fc7setState\u4e4b\u540e\u80fd\u5426\u7acb\u5373\u83b7\u53d6\u5230\u72b6\u6001\u66f4\u65b0\u540e\u7684\u503c"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u7b54\u6848\u662f\u4e0d\u80fd\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"test1 = () => {\n        // \u51fd\u6570\u5f62\u5f0f\u7684setState,\u51fd\u6570\u5f62\u5f0f\u7684setState\u80fd\u591f\u63a5\u6536\u5230\u4e24\u4e2a\u53c2\u6570\uff0c\u4e00\u4e2a\u662fstate\uff0c\u53e6\u4e00\u4e2a\u662fprops\n        this.setState(state => ({count: state.count + 1}))\n        console.log('\u51fd\u6570\u5f62\u5f0f\u7684setState\u66f4\u65b0\u540e\uff1a',this.state.count);\n    }\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/78dd77a5aa0a67baf75f69112f7cd8b8.png",alt:"image.png"})),(0,o.kt)("h2",{id:"\u5982\u4f55\u7acb\u5373\u83b7\u53d6\u5230\u72b6\u6001\u66f4\u65b0\u540e\u7684\u503c"},"\u5982\u4f55\u7acb\u5373\u83b7\u53d6\u5230\u72b6\u6001\u66f4\u65b0\u540e\u7684\u503c"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528setState\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u8fd9\u4e2a\u53c2\u6570\u63a5\u6536\u7684\u662f\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\uff0c\u8fd9\u4e2a\u56de\u8c03\u51fd\u6570\u4f1a\u5728\u754c\u9762\u6e32\u67d3\u4e4b\u540e\u8c03\u7528\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"test3 = () => {\n        this.setState(state => ({count: state.count + 1}),() => {\n            console.log('\u51fd\u6570\u5f62\u5f0f\u7684setState\u66f4\u65b0\u540e\uff1a',this.state.count);\n        });\n    }\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/6f0b820c172c3d308877763f1da3e274.png",alt:"image.png"})),(0,o.kt)("h2",{id:"setstate\u66f4\u65b0\u72b6\u6001\u662f\u540c\u6b65\u8fd8\u662f\u5f02\u6b65\u7684"},"setState()\u66f4\u65b0\u72b6\u6001\u662f\u540c\u6b65\u8fd8\u662f\u5f02\u6b65\u7684\uff1f"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u56de\u5230\u6211\u4eec\u8981\u63a2\u8ba8\u7684\u6b63\u9898\uff0csetState()\u66f4\u65b0\u72b6\u6001\u65f6\u540c\u6b65\u7684\u8fd8\u662f\u5f02\u6b65\u7684\uff1f")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5224\u65adsetState()\u66f4\u65b0\u72b6\u6001\u65f6\u5f02\u6b65\u8fd8\u662f\u540c\u6b65\u7684\uff0c\u4e3b\u8981\u662f\u770b\u6267\u884csetState\u7684\u4f4d\u7f6e")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728React\u63a7\u5236\u7684\u56de\u8c03\u51fd\u6570\u4e2d\uff08\u751f\u547d\u5468\u671f\u94a9\u5b50\uff0creact\u4e8b\u4ef6\u76d1\u542c\u56de\u8c03\uff09\u8fd9\u79cd\u60c5\u51b5\u662f\u5f02\u6b65\u7684\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u975ereact\u63a7\u5236\u7684\u5f02\u6b65\u56de\u8c03\u51fd\u6570\u4e2d\uff08\u5b9a\u65f6\u5668\u56de\u8c03/\u539f\u751f\u4e8b\u4ef6\u76d1\u542c\u56de\u8c03/promise\u56de\u8c03\uff09\u8fd9\u79cd\u60c5\u51b5\u662f\u540c\u6b65\u7684\u3002")),(0,o.kt)("h3",{id:"\u5f02\u6b65\u4e3e\u4f8b"},"\u5f02\u6b65\u4e3e\u4f8b"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5728React\u4e8b\u4ef6\u56de\u8c03\u51fd\u6570\u4e2d\u4f7f\u7528setState(\u5f02\u6b65\u7684)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// React\u4e8b\u4ef6\u56de\u8c03\u51fd\u6570\u4e2d\nupdate1 = () => {\n    console.log('React\u4e8b\u4ef6\u56de\u8c03\u51fd\u6570\u66f4\u65b0\u4e4b\u524d\uff1a',this.state.count);\n    this.setState(state => ({count: state.count + 1}))\n    console.log('React\u4e8b\u4ef6\u56de\u8c03\u51fd\u6570\u66f4\u65b0\u4e4b\u540e\uff1a',this.state.count);\n}\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/4280e7af6888177abc7a060f94229ab3.png",alt:"image.png"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5728\u751f\u547d\u5468\u671f\u94a9\u5b50\u51fd\u6570\u4e2d\u4f7f\u7528setState(\u5f02\u6b65\u7684)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u5728\u751f\u547d\u5468\u671f\u94a9\u5b50\u51fd\u6570\u4e2d\ncomponentDidMount() {\n    console.log('\u751f\u547d\u5468\u671f\u94a9\u5b50\u51fd\u6570\u66f4\u65b0\u4e4b\u524d\uff1a',this.state.count);\n    this.setState(state => ({count: state.count + 1}))\n    console.log('\u751f\u547d\u5468\u671f\u94a9\u5b50\u51fd\u6570\u66f4\u65b0\u4e4b\u540e\uff1a',this.state.count);\n}\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/87e8a0af7fa8ad795469686d5437eb97.png",alt:"image.png"})),(0,o.kt)("h3",{id:"\u540c\u6b65\u4e3e\u4f8b"},"\u540c\u6b65\u4e3e\u4f8b"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"setTimeout")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u5b9a\u65f6\u5668\u56de\u8c03\nupdate2 = () => {\n    setTimeout(() => {\n        console.log('setTimeout \u66f4\u65b0\u4e4b\u524d\uff1a', this.state.count);\n        this.setState(state => ({ count: state.count + 1 }))\n        console.log('setTimeout \u66f4\u65b0\u4e4b\u540e\uff1a', this.state.count);\n    })\n}\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/65894a301b2694840dfbf379c7ea6988.png",alt:"image.png"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u539f\u751fonclick")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"update3 = () => {\n    const h1 = this.refs.count;\n    h1.onclick = () => {\n        console.log('onclick \u66f4\u65b0\u4e4b\u524d\uff1a', this.state.count);\n        this.setState(state => ({ count: state.count + 1 }))\n        console.log('onclick \u66f4\u65b0\u4e4b\u540e\uff1a', this.state.count);\n    }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/f0fdca44083e264dc490332a5ad9a669.png",alt:"image.png"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Promise")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"update4 = () => {\n    Promise.resolve().then(value => {\n        console.log('Promise \u66f4\u65b0\u4e4b\u524d\uff1a', this.state.count);\n        this.setState(state => ({ count: state.count + 1 }))\n        console.log('Promise \u66f4\u65b0\u4e4b\u540e\uff1a', this.state.count);\n    })\n}\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/5cdb8340d2c2f94a222b177cd10f542d.png",alt:"image.png"})),(0,o.kt)("h2",{id:"setstate\u591a\u6b21\u8c03\u7528\u7684\u95ee\u9898"},"setState\u591a\u6b21\u8c03\u7528\u7684\u95ee\u9898"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4e0b\u9762\u8981\u8ba8\u8bba\u7684\u591a\u6b21\u8c03\u7528\u7684\u95ee\u9898\u662f\u57fa\u4e8e\u5f02\u6b65\u7684\u524d\u63d0\u4e0b\u6765\u8ba8\u8bba\u7684\u3002")),(0,o.kt)("h3",{id:"\u60c5\u51b51\u4e24\u4e2a\u51fd\u6570\u5f0fsetstate\u7684\u60c5\u51b5\u4e0d\u4f1a\u5408\u5e76"},"\u60c5\u51b51\uff1a\u4e24\u4e2a\u51fd\u6570\u5f0fsetState\u7684\u60c5\u51b5\uff08\u4e0d\u4f1a\u5408\u5e76\uff09"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u6d4b\u8bd5\u51fd\u6570\u5f0f setState\u5408\u5e76 \u4e0e\u66f4\u65b0\u7684\u95ee\u9898\nupdate5 = () => {\n    console.log('\u6d4b\u8bd5\u901a\u8fc7\u51fd\u6570\u5f0f\u66f4\u65b0setState\u7684\u5408\u5e76\u95ee\u9898 \u66f4\u65b0\u4e4b\u524d\uff1a', this.state.count);\n    this.setState(state => ({ count: state.count + 1 }))\n    console.log('\u6d4b\u8bd5\u901a\u8fc7\u51fd\u6570\u5f0f\u66f4\u65b0setState\u7684\u5408\u5e76\u95ee\u9898 \u66f4\u65b0\u4e4b\u540e\uff1a', this.state.count);\n    console.log('\u6d4b\u8bd5\u901a\u8fc7\u51fd\u6570\u5f0f\u66f4\u65b0setState\u7684\u5408\u5e76\u95ee\u9898 \u66f4\u65b0\u4e4b\u524d\uff1a', this.state.count);\n    this.setState(state => ({ count: state.count + 1 }))\n    console.log('\u6d4b\u8bd5\u901a\u8fc7\u51fd\u6570\u5f0f\u66f4\u65b0setState\u7684\u5408\u5e76\u95ee\u9898 \u66f4\u65b0\u4e4b\u540e\uff1a', this.state.count);\n}\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/57dfbe0ad19ee329af054a7f1c1c2daa.png",alt:"image.png"})),(0,o.kt)("h3",{id:"\u60c5\u51b52\u4e24\u4e2a\u5bf9\u8c61\u5f0fsetstate\u7684\u60c5\u51b5\u4f1a\u5408\u5e76"},"\u60c5\u51b52\uff1a\u4e24\u4e2a\u5bf9\u8c61\u5f0fsetState\u7684\u60c5\u51b5\uff08\u4f1a\u5408\u5e76\uff09"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u6d4b\u8bd5\u5bf9\u8c61\u5f0f setState\u5408\u5e76 \u4e0e\u66f4\u65b0\u7684\u95ee\u9898\nupdate6 = () => {\n    console.log('\u6d4b\u8bd5\u901a\u8fc7\u5bf9\u8c61\u5f0f\u66f4\u65b0setState\u7684\u5408\u5e76\u95ee\u9898 \u66f4\u65b0\u4e4b\u524d\uff1a', this.state.count);\n    this.setState({count: this.state.count + 1})\n    console.log('\u6d4b\u8bd5\u901a\u8fc7\u5bf9\u8c61\u5f0f\u66f4\u65b0setState\u7684\u5408\u5e76\u95ee\u9898 \u66f4\u65b0\u4e4b\u540e\uff1a', this.state.count);\n    console.log('\u6d4b\u8bd5\u901a\u8fc7\u5bf9\u8c61\u5f0f\u66f4\u65b0setState\u7684\u5408\u5e76\u95ee\u9898 \u66f4\u65b0\u4e4b\u524d\uff1a', this.state.count);\n    this.setState({count: this.state.count + 1})\n    console.log('\u6d4b\u8bd5\u901a\u8fc7\u5bf9\u8c61\u5f0f\u66f4\u65b0setState\u7684\u5408\u5e76\u95ee\u9898 \u66f4\u65b0\u4e4b\u540e\uff1a', this.state.count);\n}\n")),(0,o.kt)("h3",{id:"\u60c5\u51b53\u5148\u51fd\u6570\u5f0f\u540e\u5bf9\u8c61\u5f0f\u4f1a\u5408\u5e76"},"\u60c5\u51b53\uff1a\u5148\u51fd\u6570\u5f0f\u540e\u5bf9\u8c61\u5f0f\uff08\u4f1a\u5408\u5e76\uff09"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"update7 = () => {\n    console.log('\u6d4b\u8bd5\u901a\u8fc7\u51fd\u6570\u5f0f\u66f4\u65b0setState\u7684\u5408\u5e76\u95ee\u9898 \u66f4\u65b0\u4e4b\u524d\uff1a', this.state.count);\n    this.setState(state => ({ count: state.count + 1 }))\n    console.log('\u6d4b\u8bd5\u901a\u8fc7\u51fd\u6570\u5f0f\u66f4\u65b0setState\u7684\u5408\u5e76\u95ee\u9898 \u66f4\u65b0\u4e4b\u540e\uff1a', this.state.count);\n    console.log('\u6d4b\u8bd5\u901a\u8fc7\u5bf9\u8c61\u5f0f\u66f4\u65b0setState\u7684\u5408\u5e76\u95ee\u9898 \u66f4\u65b0\u4e4b\u524d\uff1a', this.state.count);\n    this.setState({count: this.state.count + 1})\n    console.log('\u6d4b\u8bd5\u901a\u8fc7\u5bf9\u8c61\u5f0f\u66f4\u65b0setState\u7684\u5408\u5e76\u95ee\u9898 \u66f4\u65b0\u4e4b\u540e\uff1a', this.state.count);\n}\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/817c7527e7b9fa81bd5e813b960aaf7c.png",alt:"image.png"})),(0,o.kt)("h3",{id:"\u60c5\u51b54\u5148\u5bf9\u8c61\u5f0f\u540e\u51fd\u6570\u5f0f"},"\u60c5\u51b54\uff1a\u5148\u5bf9\u8c61\u5f0f\u540e\u51fd\u6570\u5f0f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"update7 = () => {\n    console.log('\u6d4b\u8bd5\u901a\u8fc7\u5bf9\u8c61\u5f0f\u66f4\u65b0setState\u7684\u5408\u5e76\u95ee\u9898 \u66f4\u65b0\u4e4b\u524d\uff1a', this.state.count);\n    this.setState({count: this.state.count + 1})\n    console.log('\u6d4b\u8bd5\u901a\u8fc7\u5bf9\u8c61\u5f0f\u66f4\u65b0setState\u7684\u5408\u5e76\u95ee\u9898 \u66f4\u65b0\u4e4b\u540e\uff1a', this.state.count);\n    console.log('\u6d4b\u8bd5\u901a\u8fc7\u51fd\u6570\u5f0f\u66f4\u65b0setState\u7684\u5408\u5e76\u95ee\u9898 \u66f4\u65b0\u4e4b\u524d\uff1a', this.state.count);\n    this.setState(state => ({ count: state.count + 1 }))\n    console.log('\u6d4b\u8bd5\u901a\u8fc7\u51fd\u6570\u5f0f\u66f4\u65b0setState\u7684\u5408\u5e76\u95ee\u9898 \u66f4\u65b0\u4e4b\u540e\uff1a', this.state.count);\n}\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/64ea64cff48fab36e9565fa169c032c1.png",alt:"image.png"})),(0,o.kt)("blockquote",null,(0,o.kt)("h3",{parentName:"blockquote",id:"\u6838\u5fc3\u6280\u5de7\u51fd\u6570\u5f0f\u4f20\u5165\u7684state\u603b\u662f\u80fd\u591f\u83b7\u53d6\u5230\u6700\u65b0\u7684state\u4f46\u662f\u5bf9\u8c61\u5f0f\u5219\u4e0d\u80fd\u4f46\u662f\u6700\u540erender\u53ea\u4f1a\u66f4\u65b0\u4e00\u6b21"},"\u6838\u5fc3\u6280\u5de7\uff1a\u51fd\u6570\u5f0f\u4f20\u5165\u7684state\u603b\u662f\u80fd\u591f\u83b7\u53d6\u5230\u6700\u65b0\u7684state,\u4f46\u662f\u5bf9\u8c61\u5f0f\u5219\u4e0d\u80fd\uff0c\u4f46\u662f\u6700\u540erender\u53ea\u4f1a\u66f4\u65b0\u4e00\u6b21\u3002")),(0,o.kt)("h2",{id:"\u4e00\u9053\u7ecf\u5178\u7684setstate\u7684\u9762\u8bd5\u9898\u770b\u61c2\u8fd9\u4e2a\u4f60\u53ef\u80fd\u5c31\u61c2\u4e86"},"\u4e00\u9053\u7ecf\u5178\u7684setState\u7684\u9762\u8bd5\u9898\uff08\u770b\u61c2\u8fd9\u4e2a\uff0c\u4f60\u53ef\u80fd\u5c31\u61c2\u4e86\uff01\uff09"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u8bf7\u95ee\u4e0b\u9762\u7684APP\u7ec4\u4ef6\u6253\u5370\u7684\u662f\u4ec0\u4e48\uff1f")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class App extends Component {\n    state = {\n        count: 0\n    }\n    // \u5728\u751f\u547d\u5468\u671f\u94a9\u5b50\u51fd\u6570\u4e2d\n    componentDidMount() {\n        this.setState({ count: this.state.count + 1 })\n        this.setState({ count: this.state.count + 1 })\n        console.log(this.state.count);\n\n        this.setState(state => ({ count: state.count + 1 }))\n        this.setState(state => ({ count: state.count + 1 }))\n        console.log(this.state.count);\n\n        setTimeout(() => {\n            this.setState(state => ({ count: state.count + 1 }))\n            console.log('setTimeout:', this.state.count);\n\n            this.setState(state => ({ count: state.count + 1 }))\n            console.log('setTimeout:', this.state.count);\n        }, 0)\n        Promise.resolve().then(value => {\n            this.setState(state => ({ count: state.count + 1 }))\n            console.log('Promise',this.state.count);\n            this.setState(state => ({ count: state.count + 1 }))\n            console.log('Promise:',this.state.count);\n        })\n    }\n\n    render() {\n        const { count } = this.state;\n        console.log('render: ', count);\n        return (\n            <div>\n                <h1>\u5f53\u524d\u6c42\u548c\u4e3a{count}</h1>\n            </div>\n        )\n    }\n}\n")),(0,o.kt)("h3",{id:"\u7b54\u6848"},"\u7b54\u6848"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/3263ee2352ed9f60b04038eef651c584.png",alt:"image.png"})),(0,o.kt)("h3",{id:"\u7b54\u6848\u89e3\u6790\u6309\u8f93\u51fa\u987a\u5e8f\u8fdb\u884c\u89e3\u6790"},"\u7b54\u6848\u89e3\u6790\uff08\u6309\u8f93\u51fa\u987a\u5e8f\u8fdb\u884c\u89e3\u6790\uff09"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u7b2c\u4e00\u884c\uff1a react\u9996\u5148\u4f1a\u6e32\u67d3\u4e0b\u7ec4\u4ef6\uff0c\u6b64\u65f6\u83b7\u53d6\u5230\u7684count\u503c\u662fstate\u4e2d\u5b58\u7684\u521d\u59cb\u503c\uff0c\u6240\u4ee5\u662f0."),(0,o.kt)("li",{parentName:"ol"},"\u7b2c2\u30013\u884c\uff1a\u6267\u884c\u5b8crender\u4e4b\u540e\uff0c\u4f1a\u8fdb\u5165componentDidMount\u94a9\u5b50\u51fd\u6570\uff0c\u9047\u5230\u4e24\u4e2a\u5bf9\u8c61\u5f0f\u7684setState\u4f1a\u8fdb\u884c\u5408\u5e76\uff0c\u4f46\u7531\u4e8e\u6b64\u65f6\u5728\u94a9\u5b50\u51fd\u6570\u4e2d\uff0c\u83b7\u53d6state\u662f\u5f02\u6b65\u7684\uff0c\u6240\u4ee5\u6253\u5370\u7684\u90fd\u662f0\uff0c\u4f46\u662f\u5f53\u9047\u5230\u51fd\u6570\u5f0f\u7684setState\uff0c\u5219\u4e0d\u4f1a\u5408\u5e76\uff0c\u6b64\u65f6count\u7684\u503c\u5df2\u7ecf\u53d8\u4e3a\u4e863."),(0,o.kt)("li",{parentName:"ol"},"\u7b2c\u56db\u884c\uff1a\u6b64\u65f6componentDidMount\u4e2d\u51fa\u4e86Promise\u548csetTimeout\u5916\u90fd\u6267\u884c\u4e86\uff0c\u4e0a\u9762\u7684\u4ee3\u7801\u5bf9JS\u6765\u8bf4\u90fd\u5c5e\u4e8e\u540c\u6b65\u4ee3\u7801\uff0c\u6b64\u65f6\u53ef\u4ee5\u8fdb\u884c\u66f4\u65b0render\u4e86\uff0c\u6240\u4ee5\u6253\u5370\u4e86render 3."),(0,o.kt)("li",{parentName:"ol"},"\u7b2c\u4e94\u884c\uff1asetTimeout\u548cPromise\u4e2d\uff0c\u7531\u4e8ePromise\u662f\u5fae\u4efb\u52a1\uff0c\u6240\u4ee5\u4f18\u5148\u6267\u884c\uff0c\u5728\u6267\u884c\u7684\u65f6\u5019\uff0c\u8fd9\u91cc\u7684setState\u662f\u540c\u6b65\u66f4\u65b0state\u7684\uff0c\u6240\u4ee5\u8c03\u7528\u4e00\u6b21setState\u5c31\u8981\u8c03\u7528\u4e00\u6b21render,\u6240\u4ee5\u7b2c\u4e94\u884c\u6253\u5370\u7684\u662frender: 4."),(0,o.kt)("li",{parentName:"ol"},"\u7b2c\u516d\u884c\uff1a\u6267\u884clog\u64cd\u4f5c\uff0c\u6253\u5370\u7684\u662fPromise: 4\u3002\u3002\u3002")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5269\u4e0b\u7684\u5185\u5bb9\u5747\u5c5e\u4e8eJS\u4e8b\u4ef6\u5faa\u73af\u7684\u77e5\u8bc6\u4e86\uff0c\u5982\u679c\u4f60\u6709\u4e0d\u61c2\u7684\u5730\u65b9\u53ef\u4ee5\u53c2\u8003\u6211\u7684\u4e13\u680f\u4e2d\u7684\u4e8b\u4ef6\u5faa\u73af\u673a\u5236\u7684\u57fa\u672c\u8ba4\u77e5\u8fd9\u7bc7\u535a\u6587\u3002")),(0,o.kt)("h3",{id:"codesandbox"},(0,o.kt)("a",{parentName:"h3",href:"https://codesandbox.io/s/yidaoguanyusetstatedejingdianmianshiti-fm4j6"},"codeSandBox")))}g.isMDXComponent=!0}}]);