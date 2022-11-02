"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[37928],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=l(r),m=a,k=s["".concat(i,".").concat(m)]||s[m]||p[m]||o;return r?n.createElement(k,u(u({ref:t},d),{},{components:r})):n.createElement(k,u({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,u[1]=c;for(var l=2;l<o;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},22462:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={title:"\u4f7f\u7528redux-thunk\u5b9e\u73b0\u5f02\u6b65redux\uff08\u57fa\u7840\u6587\u7ae0\uff09",date:"2021-7-30",author:"Justin",top:!1,cover:!1,categories:"React",tags:["React"]},u=void 0,c={permalink:"/blog/\u4f7f\u7528redux-thunk\u5b9e\u73b0\u5f02\u6b65redux\uff08\u57fa\u7840\u6587\u7ae0\uff09",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/\u4f7f\u7528redux-thunk\u5b9e\u73b0\u5f02\u6b65redux\uff08\u57fa\u7840\u6587\u7ae0\uff09.md",source:"@site/blog/\u4f7f\u7528redux-thunk\u5b9e\u73b0\u5f02\u6b65redux\uff08\u57fa\u7840\u6587\u7ae0\uff09.md",title:"\u4f7f\u7528redux-thunk\u5b9e\u73b0\u5f02\u6b65redux\uff08\u57fa\u7840\u6587\u7ae0\uff09",description:"\u4f7f\u7528redux-thunk\u5b9e\u73b0\u5f02\u6b65redux",date:"2021-07-30T00:00:00.000Z",formattedDate:"2021\u5e747\u670830\u65e5",tags:[{label:"React",permalink:"/blog/tags/react"}],readingTime:1.32,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"\u4f7f\u7528redux-thunk\u5b9e\u73b0\u5f02\u6b65redux\uff08\u57fa\u7840\u6587\u7ae0\uff09",date:"2021-7-30",author:"Justin",top:!1,cover:!1,categories:"React",tags:["React"]},prevItem:{title:"\u4f7f\u7528combineReducers\u5408\u5e76\u591a\u4e2areducer\uff08\u57fa\u7840\u6587\u7ae0\uff09",permalink:"/blog/\u4f7f\u7528combineReducers\u5408\u5e76\u591a\u4e2areducer\uff08\u57fa\u7840\u6587\u7ae0\uff09"},nextItem:{title:"react-redux\u76843\u4e2a\u4e3b\u8981\u4f5c\u7528",permalink:"/blog/react-redux\u76843\u4e2a\u4e3b\u8981\u4f5c\u7528"}},i={authorsImageUrls:[void 0]},l=[{value:"\u4f7f\u7528redux-thunk\u5b9e\u73b0\u5f02\u6b65redux",id:"\u4f7f\u7528redux-thunk\u5b9e\u73b0\u5f02\u6b65redux",level:2},{value:"\u5728\u54ea\u91cc\u5f15\u5165redux-thunk\uff1f",id:"\u5728\u54ea\u91cc\u5f15\u5165redux-thunk",level:2},{value:"\u5f02\u6b65action\u548c\u666e\u901a\u7684action\u6709\u4ec0\u4e48\u4e0d\u540c\uff1f",id:"\u5f02\u6b65action\u548c\u666e\u901a\u7684action\u6709\u4ec0\u4e48\u4e0d\u540c",level:2},{value:"\u6700\u540e\u522b\u5fd8\u4e86\uff0c\u7ec4\u4ef6\u4e2d\u5df2\u7ecf\u6ca1\u6709\u5b9a\u65f6\u5668\u4e86\uff0c\u5b9a\u65f6\u5668\u5728\u5f02\u6b65action\u4e2d\u3002",id:"\u6700\u540e\u522b\u5fd8\u4e86\u7ec4\u4ef6\u4e2d\u5df2\u7ecf\u6ca1\u6709\u5b9a\u65f6\u5668\u4e86\u5b9a\u65f6\u5668\u5728\u5f02\u6b65action\u4e2d",level:2},{value:"codeSandBox\u5728\u7ebf\u6f14\u793a(\u4f7f\u7528redux-thunk\u5b9e\u73b0\u5f02\u6b65action\u64cd\u4f5c\u72b6\u6001)",id:"codesandbox\u5728\u7ebf\u6f14\u793a\u4f7f\u7528redux-thunk\u5b9e\u73b0\u5f02\u6b65action\u64cd\u4f5c\u72b6\u6001",level:2}],d={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4f7f\u7528redux-thunk\u5b9e\u73b0\u5f02\u6b65redux"},"\u4f7f\u7528redux-thunk\u5b9e\u73b0\u5f02\u6b65redux"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Redux\u5b58\u5728\u4e00\u4e2a\u95ee\u9898\uff0c\u5c31\u662f\u65e0\u6cd5\u5b9e\u73b0",(0,a.kt)("strong",{parentName:"p"},"\u5f02\u6b65\u7684action"),",\u8fd9\u4e5f\u5c31\u662f\u4e3a\u4ec0\u4e48\u6211\u4eec\u8981\u5f15\u5165redux-thunk\u7684\u539f\u56e0\u3002")),(0,a.kt)("h2",{id:"\u5728\u54ea\u91cc\u5f15\u5165redux-thunk"},"\u5728\u54ea\u91cc\u5f15\u5165redux-thunk\uff1f"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728redux\u7684\u6838\u5fc3\u7ec4\u4ef6store\u4e2d\u5f15\u5165\u3002\u6211\u4eec\u5f15\u5165\u7684\u8fd9\u4e2athunk,\u76f8\u5f53\u4e8e\u4e00\u4e2a\u4e2d\u95f4\u4ef6\u3002\u6240\u4ee5\u6211\u4eec\u540c\u65f6\u9700\u8981\u4eceredux\u4e2d\u5f15\u5165applyMiddleware\uff0c\u653e\u5165createStore\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e2d\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {createStore,applyMiddleware} from 'redux';\nimport reducer from './reducer'\nimport thunk from 'redux-thunk'\n\nexport default createStore(reducer,applyMiddleware(thunk))\n")),(0,a.kt)("h2",{id:"\u5f02\u6b65action\u548c\u666e\u901a\u7684action\u6709\u4ec0\u4e48\u4e0d\u540c"},"\u5f02\u6b65action\u548c\u666e\u901a\u7684action\u6709\u4ec0\u4e48\u4e0d\u540c\uff1f"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u666e\u901aaction\u8fd4\u56de\u7684\u662f\u5bf9\u8c61\uff0c\u4f46\u662f\u5f02\u6b65action\u8fd4\u56de\u7684\u662f\u4e00\u4e2a\u51fd\u6570\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5f02\u6b65action\u548c\u540c\u6b65action\u7684\u533a\u522b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u540c\u6b65action\nexport const decrement = (number) => ({type: DECREMENT,data: number});\n// \u5f02\u6b65\u589e\u52a0\u7684action\nexport const incrementAsync = (number) => {\n    return dispatch => {\n        setTimeout(() => {\n            dispatch({type: INCREMENT,data: number})\n        },1000)\n    }\n}\n")),(0,a.kt)("h2",{id:"\u6700\u540e\u522b\u5fd8\u4e86\u7ec4\u4ef6\u4e2d\u5df2\u7ecf\u6ca1\u6709\u5b9a\u65f6\u5668\u4e86\u5b9a\u65f6\u5668\u5728\u5f02\u6b65action\u4e2d"},"\u6700\u540e\u522b\u5fd8\u4e86\uff0c\u7ec4\u4ef6\u4e2d\u5df2\u7ecf\u6ca1\u6709\u5b9a\u65f6\u5668\u4e86\uff0c\u5b9a\u65f6\u5668\u5728\u5f02\u6b65action\u4e2d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"incrementIfAsync = () => {\n    const number = this.numberRef.current.value * 1;\n    this.props.incrementAsync(number);\n}\n")),(0,a.kt)("h2",{id:"codesandbox\u5728\u7ebf\u6f14\u793a\u4f7f\u7528redux-thunk\u5b9e\u73b0\u5f02\u6b65action\u64cd\u4f5c\u72b6\u6001"},(0,a.kt)("a",{parentName:"h2",href:"https://codesandbox.io/s/shiyongredux-thunkshixianyibuactioncaozuozhuangtai-z9ped"},"codeSandBox\u5728\u7ebf\u6f14\u793a(\u4f7f\u7528redux-thunk\u5b9e\u73b0\u5f02\u6b65action\u64cd\u4f5c\u72b6\u6001)")))}p.isMDXComponent=!0}}]);