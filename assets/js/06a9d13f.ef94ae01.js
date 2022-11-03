"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[36101],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=p(n),s=a,d=k["".concat(c,".").concat(s)]||k[s]||m[s]||l;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},92183:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={title:"\u4e8b\u4ef6\u5faa\u73af\u673a\u5236\uff08Event Loop\uff09\u7684\u57fa\u672c\u8ba4\u77e5",date:new Date("2021-05-18T00:00:00.000Z"),categories:"\u6d4f\u89c8\u5668\u77e5\u8bc6",tags:["\u6d4f\u89c8\u5668\u77e5\u8bc6"]},c=void 0,p={permalink:"/\u4e8b\u4ef6\u5faa\u73af\u673a\u5236\uff08Event Loop\uff09\u7684\u57fa\u672c\u8ba4\u77e5",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/\u4e8b\u4ef6\u5faa\u73af\u673a\u5236\uff08Event Loop\uff09\u7684\u57fa\u672c\u8ba4\u77e5.md",source:"@site/blog/\u4e8b\u4ef6\u5faa\u73af\u673a\u5236\uff08Event Loop\uff09\u7684\u57fa\u672c\u8ba4\u77e5.md",title:"\u4e8b\u4ef6\u5faa\u73af\u673a\u5236\uff08Event Loop\uff09\u7684\u57fa\u672c\u8ba4\u77e5",description:"\u4e00\u3001\u4ec0\u4e48\u662f\u4e8b\u4ef6\u5faa\u73af\u673a\u5236\uff1f",date:"2021-05-18T00:00:00.000Z",formattedDate:"2021\u5e745\u670818\u65e5",tags:[{label:"\u6d4f\u89c8\u5668\u77e5\u8bc6",permalink:"/tags/\u6d4f\u89c8\u5668\u77e5\u8bc6"}],readingTime:2.15,hasTruncateMarker:!1,authors:[],frontMatter:{title:"\u4e8b\u4ef6\u5faa\u73af\u673a\u5236\uff08Event Loop\uff09\u7684\u57fa\u672c\u8ba4\u77e5",date:"2021-05-18T00:00:00.000Z",categories:"\u6d4f\u89c8\u5668\u77e5\u8bc6",tags:["\u6d4f\u89c8\u5668\u77e5\u8bc6"]},prevItem:{title:"\u5251\u6307Offer\u2014\u2014\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\uff08JS\u5b9e\u73b0\uff09",permalink:"/\u5251\u6307Offer\u2014\u2014\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\uff08JS\u5b9e\u73b0\uff09"},nextItem:{title:"\u63a8\u8350\u4e00\u4e2a\u5728\u7ebf\u4e0b\u8f7dYoutube\u7684\u7f51\u7ad9",permalink:"/\u63a8\u8350\u4e00\u4e2a\u5728\u7ebf\u4e0b\u8f7dYoutube\u7684\u7f51\u7ad9"}},u={authorsImageUrls:[]},m=[{value:"\u4e00\u3001\u4ec0\u4e48\u662f\u4e8b\u4ef6\u5faa\u73af\u673a\u5236\uff1f",id:"\u4e00\u4ec0\u4e48\u662f\u4e8b\u4ef6\u5faa\u73af\u673a\u5236",level:2},{value:"\u4e3a\u4ec0\u4e48\u662f\u4e0a\u9762\u7684\u987a\u5e8f\u5462\uff1f",id:"\u4e3a\u4ec0\u4e48\u662f\u4e0a\u9762\u7684\u987a\u5e8f\u5462",level:3},{value:"\u6267\u884c\u987a\u5e8f\u56fe\u89e3",id:"\u6267\u884c\u987a\u5e8f\u56fe\u89e3",level:3},{value:"\u5f15\u51fa\u4e8b\u4ef6\u5faa\u73af\u662f\u4ec0\u4e48",id:"\u5f15\u51fa\u4e8b\u4ef6\u5faa\u73af\u662f\u4ec0\u4e48",level:3},{value:"\u4e09\u3001\u4e8b\u4ef6\u5faa\u73af\u7684\u6267\u884c\u8fc7\u7a0b",id:"\u4e09\u4e8b\u4ef6\u5faa\u73af\u7684\u6267\u884c\u8fc7\u7a0b",level:2},{value:"\u56db\u3001\u5fae\u4efb\u52a1\u548c\u5b8f\u4efb\u52a1\u7684\u6839\u672c\u533a\u522b",id:"\u56db\u5fae\u4efb\u52a1\u548c\u5b8f\u4efb\u52a1\u7684\u6839\u672c\u533a\u522b",level:2},{value:"\u4e94\u3001\u4e8b\u4ef6\u5faa\u73af\u7684\u6574\u4f53\u6d41\u7a0b",id:"\u4e94\u4e8b\u4ef6\u5faa\u73af\u7684\u6574\u4f53\u6d41\u7a0b",level:2},{value:"\u516d\u3001\u4e8b\u4ef6\u5faa\u73af\u7ecf\u5178\u6848\u4f8b",id:"\u516d\u4e8b\u4ef6\u5faa\u73af\u7ecf\u5178\u6848\u4f8b",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],k={toc:m};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4e00\u4ec0\u4e48\u662f\u4e8b\u4ef6\u5faa\u73af\u673a\u5236"},"\u4e00\u3001\u4ec0\u4e48\u662f\u4e8b\u4ef6\u5faa\u73af\u673a\u5236\uff1f"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5728\u4ecb\u7ecd\u4e8b\u4ef6\u5faa\u73af\u673a\u5236\u4e4b\u524d\uff0c\u6211\u4eec\u8981\u9996\u5148\u4e86\u89e3\u4ee5\u4e0b\u4ec0\u4e48\u662f\u4e8b\u4ef6\u5faa\u73af\u673a\u5236\uff0c\u6211\u4eec\u9996\u5148\u770b\u4e0b\u4e0b\u9762\u8fd9\u6bb5\u4ee3\u7801\u7684\u6267\u884c\u987a\u5e8f\uff0c\u6b63\u786e\u7684\u6267\u884c\u987a\u5e8f\u5e94\u8be5\u662f\u5e8f\u53f71>3>2")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/d725ac1dc59a44f7311a8b1841510daf.png",alt:null})),(0,l.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u662f\u4e0a\u9762\u7684\u987a\u5e8f\u5462"},"\u4e3a\u4ec0\u4e48\u662f\u4e0a\u9762\u7684\u987a\u5e8f\u5462\uff1f"),(0,l.kt)("p",null,"\u539f\u56e0\u662fJS\u5f15\u64ce\u6307\u5411\u4ee3\u7801\u662f\u4ece\u4e0a\u5f80\u4e0b\u6267\u884c\u7684\uff0c\u6240\u4ee5\u9996\u5148\u4f1a\u6267\u884c\u5e8f\u53f71\u8fd9\u4e2a\u8bed\u53e5\uff0cJS\u5f15\u64ce\u4f1a\u5c06\u8fd9\u4e2a\u8bed\u53e5\u653e\u5728\u8c03\u7528\u6808\u5f53\u4e2d\uff0c\u7136\u540e\u6267\u884c\u4ee3\u7801\uff0c\u5c06\u5e8f\u53f71\u6253\u5370\u5728\u63a7\u5236\u53f0\u5f53\u4e2d\uff0c\u5f53\u8fd9\u6bb5\u4ee3\u7801\u6267\u884c\u5b8c\u6bd5\u4e4b\u540e\uff0c\u4fbf\u5c06\u8fd9\u6bb5\u4ee3\u7801\u4ece\u8c03\u7528\u6808\u4e2d\u79fb\u51fa\u53bb\u3002\u7136\u540e\u5f00\u59cb\u6267\u884c\u540e\u7eed\u7684\u4ee3\u7801\uff0c\u6b64\u65f6setTimeout\u8fd9\u6bb5\u4ee3\u7801\u8fdb\u5165\u8c03\u7528\u6808\uff0c\u8fd9\u6bb5\u4ee3\u7801\uff0c\u4f1a\u8c03\u7528Web API,2\u79d2\u4e4b\u540e\u8fdb\u5165callback\u961f\u5217\uff0c\u6b64\u65f6JS\u5f15\u64ce\u5c06setTimeout\u79fb\u51fa\u8c03\u7528\u6808\uff0c\u7ee7\u7eed\u6267\u884c\u540e\u9762\u7684\u4ee3\u7801\uff0c\u6240\u4ee5\u5c4f\u5e55\u4e0a\u4f1a\u5148\u6253\u5370\u51fa\u5e8f\u53f71,3\uff0c\u6b64\u65f6eventLoop\u767b\u573a\u4e86\uff0c\u5b83\u4f1a\u4e0d\u65ad\u5faa\u73af\u7684\u8bbf\u95eecallbackqueue\uff0c\u7b492s\u4e4b\u540eWeb API\u4f1a\u5c06\u8981\u6267\u884c\u7684\u6253\u5370\u5e8f\u53f72\u8fd9\u53e5\u8bdd\u653e\u5165callbackqueue,eventLoop\u5c06callbackQueue\u4e2d\u7684\u5185\u5bb9\u653e\u5165\u8c03\u7528\u6808\uff0c\u5f00\u59cb\u6267\u884c\uff0c\u7136\u540e\u5c4f\u5e55\u4e0a\u6253\u5370\u51fa\u5e8f\u53f72\uff0c\u8fd9\u5c31\u662feventLoop\u7684\u57fa\u672c\u6d41\u7a0b\u3002"),(0,l.kt)("h3",{id:"\u6267\u884c\u987a\u5e8f\u56fe\u89e3"},"\u6267\u884c\u987a\u5e8f\u56fe\u89e3"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/d49b4d614dd7d061a67249e2b0eae291.png",alt:null})),(0,l.kt)("h3",{id:"\u5f15\u51fa\u4e8b\u4ef6\u5faa\u73af\u662f\u4ec0\u4e48"},"\u5f15\u51fa\u4e8b\u4ef6\u5faa\u73af\u662f\u4ec0\u4e48"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"JS\u7684\u8fd0\u884c\u673a\u5236\u5c31\u662f\u4e8b\u4ef6\u5faa\u73af!"),(0,l.kt)("h2",{parentName:"blockquote",id:"\u4e8cjs\u7684\u6267\u884c\u987a\u5e8f\u662f\u4ec0\u4e48"},"\u4e8c\u3001JS\u7684\u6267\u884c\u987a\u5e8f\u662f\u4ec0\u4e48\uff1f"),(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},"JS\u662f\u4ece\u4e0a\u5230\u4e0b\u4e00\u884c\u4e00\u884c\u6267\u884c\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u67d0\u4e00\u884c\u6267\u884c\u62a5\u9519\uff0c\u5219\u505c\u6b62\u6267\u884c\u4e0b\u9762\u7684\u4ee3\u7801\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5148\u6267\u884c\u540c\u6b65\u4ee3\u7801\uff0c\u518d\u6267\u884c\u5f02\u6b65\u4ee3\u7801"))),(0,l.kt)("h2",{id:"\u4e09\u4e8b\u4ef6\u5faa\u73af\u7684\u6267\u884c\u8fc7\u7a0b"},"\u4e09\u3001\u4e8b\u4ef6\u5faa\u73af\u7684\u6267\u884c\u8fc7\u7a0b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u540c\u6b65\u4ee3\u7801\uff0c\u8c03\u7528\u6808\u6267\u884c\u540e\u76f4\u63a5\u51fa\u6808")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5f02\u6b65\u4ee3\u7801\uff0c\u653e\u5230Web API\u4e2d\uff0c\u7b49\u5f85\u65f6\u673a\uff0c\u7b49\u5408\u9002\u7684\u65f6\u5019\u653e\u5165\u56de\u8c03\u961f\u5217\uff08callbackQueue\uff09\uff0c\u7b49\u5230\u8c03\u7528\u6808\u7a7a\u65f6eventLoop\u5f00\u59cb\u5de5\u4f5c\uff0c\u8f6e\u8be2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5fae\u4efb\u52a1\u6267\u884c\u65f6\u673a\u6bd4\u5b8f\u4efb\u52a1\u8981\u65e9\n",(0,l.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/c3dbc1a173bddef90d1a4a7ef7a16aef.png",alt:null}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5fae\u4efb\u52a1\u5728DOM\u6e32\u67d3\u524d\u89e6\u53d1\uff0c\u5b8f\u4efb\u52a1\u5728DOM\u6e32\u67d3\u540e\u89e6\u53d1"))),(0,l.kt)("h2",{id:"\u56db\u5fae\u4efb\u52a1\u548c\u5b8f\u4efb\u52a1\u7684\u6839\u672c\u533a\u522b"},"\u56db\u3001\u5fae\u4efb\u52a1\u548c\u5b8f\u4efb\u52a1\u7684\u6839\u672c\u533a\u522b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5fae\u4efb\u52a1\u662f\u7531ES6\u8bed\u6cd5\u89c4\u5b9a\u7684"),(0,l.kt)("li",{parentName:"ul"},"\u5b8f\u4efb\u52a1\u662f\u7531\u6d4f\u89c8\u5668\u89c4\u5b9a\u7684")),(0,l.kt)("h2",{id:"\u4e94\u4e8b\u4ef6\u5faa\u73af\u7684\u6574\u4f53\u6d41\u7a0b"},"\u4e94\u3001\u4e8b\u4ef6\u5faa\u73af\u7684\u6574\u4f53\u6d41\u7a0b"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5148\u6e05\u7a7acall stack\u4e2d\u7684\u540c\u6b65\u4ee3\u7801"),(0,l.kt)("li",{parentName:"ol"},"\u6267\u884c\u5fae\u4efb\u52a1\u961f\u5217\u4e2d\u7684\u5fae\u4efb\u52a1"),(0,l.kt)("li",{parentName:"ol"},"\u5c1d\u8bd5DOM\u6e32\u67d3"),(0,l.kt)("li",{parentName:"ol"},"\u89e6\u53d1Event Loop\u53cd\u590d\u8be2\u95eecallbackQueue\u4e2d\u662f\u5426\u6709\u8981\u6267\u884c\u7684\u8bed\u53e5\uff0c\u6709\u5219\u653e\u5165call back\u7ee7\u7eed\u6267\u884c\n",(0,l.kt)("img",{parentName:"li",src:"https://img-blog.csdnimg.cn/img_convert/bf35f47b530b624884c99f520551cd0c.png",alt:null}))),(0,l.kt)("h2",{id:"\u516d\u4e8b\u4ef6\u5faa\u73af\u7ecf\u5178\u6848\u4f8b"},"\u516d\u3001\u4e8b\u4ef6\u5faa\u73af\u7ecf\u5178\u6848\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/20201015205742198.gif",alt:null})),(0,l.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1u54y1j7Yu?from=search&seid=14237450040319513888"},"\u4ec0\u4e48\u662fEvent Loop?")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://blog.csdn.net/iChangebaobao/article/details/109283166"},"[JavaScript]\u4ec0\u4e48\u662f\u4e8b\u4ef6\u5faa\u73af(Event Loop)\uff1f")))}s.isMDXComponent=!0}}]);