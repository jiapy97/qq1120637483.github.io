"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[3870],{3905:(e,t,l)=>{l.d(t,{Zo:()=>u,kt:()=>S});var o=l(67294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,o)}return l}function a(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,o,r=function(e,t){if(null==e)return{};var l,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)l=n[o],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)l=n[o],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var k=o.createContext({}),c=function(e){var t=o.useContext(k),l=t;return e&&(l="function"==typeof e?e(t):a(a({},t),e)),l},u=function(e){var t=c(e.components);return o.createElement(k.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var l=e.components,r=e.mdxType,n=e.originalType,k=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(l),S=r,m=s["".concat(k,".").concat(S)]||s[S]||p[S]||n;return l?o.createElement(m,a(a({ref:t},u),{},{components:l})):o.createElement(m,a({ref:t},u))}));function S(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=l.length,a=new Array(n);a[0]=s;var i={};for(var k in t)hasOwnProperty.call(t,k)&&(i[k]=t[k]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var c=2;c<n;c++)a[c]=l[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,l)}s.displayName="MDXCreateElement"},87176:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>k,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var o=l(87462),r=(l(67294),l(3905));const n={title:"\u8fd9\u4e00\u6b21\u5f7b\u5e95\u641e\u61c2CSRF\u4e0eXSS",date:new Date("2021-12-17T00:00:00.000Z"),author:"Justin",top:!1,cover:!1,categories:"\u9762\u8bd5\u9898",tags:["\u9762\u8bd5\u9898"]},a=void 0,i={permalink:"/blog/\u8fd9\u4e00\u6b21\u5f7b\u5e95\u641e\u61c2CSRF\u4e0eXSS",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/\u8fd9\u4e00\u6b21\u5f7b\u5e95\u641e\u61c2CSRF\u4e0eXSS.md",source:"@site/blog/\u8fd9\u4e00\u6b21\u5f7b\u5e95\u641e\u61c2CSRF\u4e0eXSS.md",title:"\u8fd9\u4e00\u6b21\u5f7b\u5e95\u641e\u61c2CSRF\u4e0eXSS",description:"CSRF\u653b\u51fb",date:"2021-12-17T00:00:00.000Z",formattedDate:"2021\u5e7412\u670817\u65e5",tags:[{label:"\u9762\u8bd5\u9898",permalink:"/blog/tags/\u9762\u8bd5\u9898"}],readingTime:10.045,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"\u8fd9\u4e00\u6b21\u5f7b\u5e95\u641e\u61c2CSRF\u4e0eXSS",date:"2021-12-17T00:00:00.000Z",author:"Justin",top:!1,cover:!1,categories:"\u9762\u8bd5\u9898",tags:["\u9762\u8bd5\u9898"]},prevItem:{title:"LeetCode\u2014\u2014\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4\uff08\u53cc\u6307\u9488\uff09",permalink:"/blog/LeetCode\u2014\u2014\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4\uff08\u53cc\u6307\u9488\uff09"},nextItem:{title:"LeetCode\u2014\u2014\u641c\u7d22\u63d2\u5165\u4f4d\u7f6e\uff08\u4e8c\u5206\u67e5\u627e\uff09",permalink:"/blog/LeetCode\u2014\u2014\u641c\u7d22\u63d2\u5165\u4f4d\u7f6e\uff08\u4e8c\u5206\u67e5\u627e\uff09"}},k={authorsImageUrls:[void 0]},c=[{value:"CSRF\u653b\u51fb",id:"csrf\u653b\u51fb",level:2},{value:"\u4e00\u3001\u4ec0\u4e48\u662fCSRF\u653b\u51fb\uff1f",id:"\u4e00\u4ec0\u4e48\u662fcsrf\u653b\u51fb",level:3},{value:"\u4e8c\u3001CSRF\u653b\u51fb\u6d41\u7a0b",id:"\u4e8ccsrf\u653b\u51fb\u6d41\u7a0b",level:3},{value:"\u4e09\u3001\u5e38\u89c1\u7684CSRF\u653b\u51fb\u7c7b\u578b",id:"\u4e09\u5e38\u89c1\u7684csrf\u653b\u51fb\u7c7b\u578b",level:3},{value:"GET\u7c7b\u578b\u7684CSRF\u653b\u51fb",id:"get\u7c7b\u578b\u7684csrf\u653b\u51fb",level:4},{value:"POST\u7c7b\u578b\u7684CSRF",id:"post\u7c7b\u578b\u7684csrf",level:4},{value:"\u94fe\u63a5\u7c7b\u578b\u7684CSRF",id:"\u94fe\u63a5\u7c7b\u578b\u7684csrf",level:4},{value:"\u56db\u3001CSRF\u653b\u51fb\u6709\u4ec0\u4e48\u7279\u70b9\uff1f",id:"\u56dbcsrf\u653b\u51fb\u6709\u4ec0\u4e48\u7279\u70b9",level:3},{value:"\u4e94\u3001\u5982\u4f55\u9632\u8303CSRF\u653b\u51fb\uff1f",id:"\u4e94\u5982\u4f55\u9632\u8303csrf\u653b\u51fb",level:3},{value:"CSRF Token",id:"csrf-token",level:4},{value:"\u9a8c\u8bc1\u7801",id:"\u9a8c\u8bc1\u7801",level:4},{value:"Referer check",id:"referer-check",level:4},{value:"cookie\u7684SameSite\u5c5e\u6027\u8bbe\u7f6e\u4e3astrict",id:"cookie\u7684samesite\u5c5e\u6027\u8bbe\u7f6e\u4e3astrict",level:4},{value:"XSS\u653b\u51fb",id:"xss\u653b\u51fb",level:2},{value:"\u4e00\u3001\u4ec0\u4e48\u662fXSS\u653b\u51fb\uff1f",id:"\u4e00\u4ec0\u4e48\u662fxss\u653b\u51fb",level:3},{value:"\u4e8c\u3001XSS\u653b\u51fb\u7684\u7c7b\u578b",id:"\u4e8cxss\u653b\u51fb\u7684\u7c7b\u578b",level:3},{value:"\u53cd\u5c04\u578b\uff08\u975e\u6301\u4e45\u578b\uff09",id:"\u53cd\u5c04\u578b\u975e\u6301\u4e45\u578b",level:4},{value:"\u5b58\u50a8\u578b\uff08\u6301\u4e45\u578b\uff09",id:"\u5b58\u50a8\u578b\u6301\u4e45\u578b",level:4},{value:"\u57fa\u4e8eDOM\u7684XSS\uff08\u975e\u6301\u4e45\u578b\uff09",id:"\u57fa\u4e8edom\u7684xss\u975e\u6301\u4e45\u578b",level:4},{value:"\u4e09\u3001XSS\u653b\u51fb\u7684\u9632\u8303\u65b9\u6cd5",id:"\u4e09xss\u653b\u51fb\u7684\u9632\u8303\u65b9\u6cd5",level:3},{value:"1. HttpOnly\u9632\u6b62\u7a83\u53d6Cookie",id:"1-httponly\u9632\u6b62\u7a83\u53d6cookie",level:4},{value:"2. \u8f93\u5165\u68c0\u67e5",id:"2-\u8f93\u5165\u68c0\u67e5",level:4},{value:"3. \u8f93\u51fa\u68c0\u67e5",id:"3-\u8f93\u51fa\u68c0\u67e5",level:4},{value:"\u53c2\u8003\u6587\u6863",id:"\u53c2\u8003\u6587\u6863",level:2}],u={toc:c};function p(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"csrf\u653b\u51fb"},"CSRF\u653b\u51fb"),(0,r.kt)("h3",{id:"\u4e00\u4ec0\u4e48\u662fcsrf\u653b\u51fb"},"\u4e00\u3001\u4ec0\u4e48\u662fCSRF\u653b\u51fb\uff1f"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"CSRF\u6307\u7684\u662f\u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020\uff0c\u662f\u4e00\u79cd\u631f\u5236\u7528\u6237\u5728\u5f53\u524d\u5df2\u7ecf\u767b\u5f55\u7684Web\u5e94\u7528\u7a0b\u5e8f\u4e0a\u6267\u884c\u975e\u672c\u610f\u64cd\u4f5c\u7684\u653b\u51fb\u65b9\u6cd5\u3002CSRF\u5229\u7528\u7684\u662f\uff1a\u4e00\u65e6\u7528\u6237\u901a\u8fc7\u7f51\u7ad9\u670d\u52a1\u7684\u8eab\u4efd\u8ba4\u8bc1\uff0c\u7f51\u7ad9\u5c31\u5b8c\u5168\u4fe1\u4efb\u8be5\u7528\u6237\uff0c\u53d7\u5bb3\u8005\u6301\u6709\u7684\u6743\u9650\u7ea7\u522b\u51b3\u5b9a\u4e86CSRF\u653b\u51fb\u7684\u5f71\u54cd\u8303\u56f4\u3002")),(0,r.kt)("h3",{id:"\u4e8ccsrf\u653b\u51fb\u6d41\u7a0b"},"\u4e8c\u3001CSRF\u653b\u51fb\u6d41\u7a0b"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e3b\u8981\u6b65\u9aa4\u5305\u542b\u4e0b\u5217\u516d\u4e2a\u6b65\u9aa4\uff1a")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u7528\u6237\u6d4f\u89c8\u5e76\u767b\u9646\u4fe1\u4efb\u7f51\u7ad9A\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u7f51\u7ad9A\u9a8c\u8bc1\u901a\u8fc7\u540e\uff0c\u5728\u7528\u6237\u5904\u4ea7\u751fA\u7684Cookie\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u7528\u6237\u5728\u6ca1\u6709\u9000\u51fa\u7f51\u7ad9A\u7684\u60c5\u51b5\u4e0b\uff0c\u8bbf\u95ee\u4e86\u5371\u9669\u7f51\u7ad9B\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5371\u9669\u7f51\u7ad9B\u8981\u6c42\u7528\u6237\u8bbf\u95ee\u7b2c\u4e09\u65b9\u7ad9\u70b9A\uff0c\u5e76\u53d1\u51fa\u4e86\u4e00\u4e2a\u8bf7\u6c42\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u7528\u6237\u6839\u636e\u5371\u9669\u7f51\u7ad9B\u7684\u8981\u6c42\uff0c\u643a\u5e26\u7740A\u7684cookie\u5bf9\u7f51\u7ad9A\u8fdb\u884c\u4e86\u8bf7\u6c42\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u7f51\u7ad9A\u5e76\u4e0d\u77e5\u9053\u8fd9\u4e2a\u8bf7\u6c42\u662f\u7528\u6237\u53d1\u51fa\u7684\u8fd8\u662f\u5371\u9669\u7f51\u7ad9B\u53d1\u51fa\u7684\uff0c\u4f46\u662f\u56e0\u4e3a\u8fd9\u4e2acookie\u7684\u5b58\u5728\uff0cA\u4f1a\u5904\u7406\u8fd9\u4e2a\u8bf7\u6c42\uff0c\u4ece\u800c\u5371\u9669\u7f51\u7ad9B\u8fbe\u5230\u4e86\u81ea\u5df1\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u7684\u76ee\u7684\u3002")),(0,r.kt)("h3",{id:"\u4e09\u5e38\u89c1\u7684csrf\u653b\u51fb\u7c7b\u578b"},"\u4e09\u3001\u5e38\u89c1\u7684CSRF\u653b\u51fb\u7c7b\u578b"),(0,r.kt)("h4",{id:"get\u7c7b\u578b\u7684csrf\u653b\u51fb"},"GET\u7c7b\u578b\u7684CSRF\u653b\u51fb"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8fd9\u79cd\u65b9\u5f0f\u53ef\u4ee5\u901a\u8fc7\u5411\u53d7\u5bb3\u8005\u8bbf\u95ee\u7684\u7f51\u9875\u4e2d\u6ce8\u5165\u4e00\u4e2aimg\u6807\u7b7e\uff0c\u8fd9\u4e2a\u6807\u7b7e\u7684src\u5c5e\u6027\u6307\u5411\u5171\u8ba1\u53d1\u51fa\u8005\u7684\u670d\u52a1\u5668\uff0c\u8fd9\u6837\u653b\u51fb\u8005\u5c31\u4f1a\u83b7\u53d6\u5230\u542b\u6709\u53d7\u5bb3\u8005\u767b\u5f55\u4fe1\u606f\u7684\u4e00\u6b21\u8de8\u57df\u8bf7\u6c42\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<img src="http://bank.example/withdraw?amount=10000&for=hacker" > \n')),(0,r.kt)("h4",{id:"post\u7c7b\u578b\u7684csrf"},"POST\u7c7b\u578b\u7684CSRF"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8fd9\u79cd\u7c7b\u578b\u7684CSRF\u4e3b\u8981\u5229\u7528\u7684\u662f\u4e00\u4e2a\u9690\u85cf\u7684input\u8868\u5355\uff0c\u5f53\u53d7\u5bb3\u8005\u8bbf\u95ee\u8be5\u9875\u9762\u7684\u65f6\u5019\uff0c\u8fd9\u4e2a\u8868\u5355\u4f1a\u81ea\u52a8\u63d0\u4ea4\u83b7\u53d6\u5230\u7684\u7528\u6237\u4fe1\u606f\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<form action="http://bank.example/withdraw" method=POST>\n    <input type="hidden" name="account" value="xiaoming" />\n    <input type="hidden" name="amount" value="10000" />\n    <input type="hidden" name="for" value="hacker" />\n</form>\n<script> document.forms[0].submit(); <\/script> \n')),(0,r.kt)("h4",{id:"\u94fe\u63a5\u7c7b\u578b\u7684csrf"},"\u94fe\u63a5\u7c7b\u578b\u7684CSRF"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u94fe\u63a5\u7c7b\u578b\u7684CSRF\u9700\u8981\u7528\u6237\u70b9\u51fb\u94fe\u63a5\u624d\u4f1a\u89e6\u53d1\uff0c\u8fd9\u79cd\u7c7b\u578b\u901a\u5e38\u662f\u5728\u8bba\u575b\u4e2d\u53d1\u5e03\u7684\u56fe\u7247\u4e2d\u5d4c\u5165\u6076\u610f\u94fe\u63a5\uff0c\u6216\u8005\u4ee5\u5e7f\u544a\u7684\u5f62\u5f0f\u8bf1\u5bfc\u7528\u6237\u70b9\u51fb\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<a href="http://test.com/csrf/withdraw.php?amount=1000&for=hacker" taget="_blank">\n    \u91cd\u78c5\u6d88\u606f\uff01\uff01\n<a/>\n')),(0,r.kt)("h3",{id:"\u56dbcsrf\u653b\u51fb\u6709\u4ec0\u4e48\u7279\u70b9"},"\u56db\u3001CSRF\u653b\u51fb\u6709\u4ec0\u4e48\u7279\u70b9\uff1f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CSRF\u901a\u5e38\u53d1\u751f\u5728\u7b2c\u4e09\u65b9\u57df\u540d\u3002"),(0,r.kt)("li",{parentName:"ul"},"CSRF\u653b\u51fb\u8005\u4e0d\u80fd\u83b7\u53d6\u5230Cookie\u7b49\u4fe1\u606f\uff0c\u53ea\u662f\u4f7f\u7528\u3002")),(0,r.kt)("h3",{id:"\u4e94\u5982\u4f55\u9632\u8303csrf\u653b\u51fb"},"\u4e94\u3001\u5982\u4f55\u9632\u8303CSRF\u653b\u51fb\uff1f"),(0,r.kt)("h4",{id:"csrf-token"},"CSRF Token"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"token\u9a8c\u8bc1\u7684CSRF\u9632\u5fa1\u673a\u5236\u662f\u516c\u8ba4\u6700\u5408\u9002\u7684\u65b9\u6848\u3002CSRF Token\u7684\u9632\u62a4\u7b56\u7565\u4e3b\u8981\u5305\u62ec\u4ee5\u4e0b\u4e09\u4e2a\u6b65\u9aa4\uff1a")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5c06CSRF Token\u8f93\u51fa\u5230\u9875\u9762\u4e2d\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u9996\u5148\uff0c\u7528\u6237\u6253\u5f00\u9875\u9762\u7684\u65f6\u5019\uff0c\u670d\u52a1\u5668\u9700\u8981\u7ed9\u7528\u6237\u751f\u6210\u4e00\u4e2aToken,\u8fd9\u4e2aToken\u4e00\u822c\u662f\u968f\u673a\u5b57\u7b26\u4e32\u548c\u65f6\u95f4\u6233\u901a\u8fc7\u52a0\u5bc6\u7b97\u6cd5\u52a0\u5bc6\u540e\u7684\u7ed3\u679c\uff0c\u8fd9\u4e2aToken\u4e0d\u80fd\u4fdd\u5b58\u5728cookie\u4e2d\uff0c\u5426\u5219\u53ef\u80fd\u4f1a\u88ab\u653b\u51fb\u8005\u5192\u7528\uff0c\u4e3a\u4e86\u5b89\u5168\u8d77\u89c1\uff0c\u8fd9\u4e2aToken\u53ef\u4ee5\u5b58\u5728\u670d\u52a1\u5668\u7684Session\u4e2d\uff0c\u4f7f\u7528JS\u904d\u5386\u6574\u4e2aDOM\u6811\uff0c\u5bf9\u4e8eDOM\u4e2d\u6240\u6709\u7684a\u548cform\u6807\u7b7e\u540e\u52a0\u5165Token\u3002")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u9875\u9762\u63d0\u4ea4\u7684\u8bf7\u6c42\u9700\u8981\u643a\u5e26Token\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5bf9\u4e8eGET\u8bf7\u6c42\uff0cToken\u5c06\u9644\u52a0\u5728\u8bf7\u6c42\u5730\u5740\u4e4b\u540e\uff0c\u5bf9\u4e8ePOST\u8bf7\u6c42\u6765\u8bf4\uff0c\u53ef\u4ee5\u5728form\u8868\u5355\u4e2d\u52a0\u5165\u4e00\u4e2a\u9690\u85cf\u7684\u8868\u5355\u57dfinput\uff0c\u8fd9\u4e2ainput\u7684value\u503c\u4e2d\u9700\u8981\u643a\u5e26Token\u3002")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u670d\u52a1\u7aef\u9a8c\u8bc1Token\u662f\u5426\u6b63\u786e\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5f53\u7528\u6237\u518d\u6b21\u8bbf\u95ee\u670d\u52a1\u5668\u7684\u65f6\u5019\uff0c\u670d\u52a1\u5668\u9700\u8981\u5224\u65adToken\u7684\u6709\u6548\u6027\uff0c\u9a8c\u8bc1\u8fc7\u7a0b\u662f\u5148\u89e3\u5bc6Token\uff0c\u5bf9\u6bd4\u52a0\u5bc6\u5b57\u7b26\u4e32\u548c\u65f6\u95f4\u6233\uff0c\u5982\u679c\u52a0\u5bc6\u5b57\u7b26\u4e32\u4e00\u81f4\u4e14\u65f6\u95f4\u672a\u8fc7\u671f\uff0c\u5219\u5224\u65ad\u8fd9\u4e2aToken\u662f\u6709\u6548\u7684\u3002")),(0,r.kt)("h4",{id:"\u9a8c\u8bc1\u7801"},"\u9a8c\u8bc1\u7801"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"CSRF\u653b\u51fb\u5f80\u5f80\u662f\u5728\u7528\u6237\u4e0d\u77e5\u60c5\u7684\u60c5\u51b5\u4e0b\u6784\u9020\u4e86\u7f51\u7edc\u8bf7\u6c42\uff0c\u800c\u9a8c\u8bc1\u7801\u4f1a\u5f3a\u5236\u7528\u6237\u5fc5\u987b\u4e0e\u5e94\u7528\u8fdb\u884c\u4ea4\u4e92\uff0c\u624d\u80fd\u5b8c\u6210\u6700\u7ec8\u8bf7\u6c42\uff0c\u4f46\u662f\u9a8c\u8bc1\u7801\u4e0d\u662f\u4e07\u80fd\u7684\uff0c\u4e0d\u80fd\u7ed9\u7f51\u7ad9\u7684\u6240\u6709\u64cd\u4f5c\u90fd\u52a0\u4e0a\u9a8c\u8bc1\u7801\u3002")),(0,r.kt)("h4",{id:"referer-check"},"Referer check"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6839\u636eHTTP\u534f\u8bae\uff0c\u5728HTTP\u5934\u90e8\u5b57\u6bb5\u4e2d\u6709\u4e00\u4e2a\u5b57\u6bb5\u4ea4referer\uff0c\u5b83\u8bb0\u5f55\u4e86\u8be5HTTP\u8bf7\u6c42\u7684\u6765\u6e90\u5730\u5740\uff0c\u901a\u8fc7Referer check\u53ef\u4ee5\u9a8c\u8bc1\u76ee\u6807\u8bf7\u6c42\u662f\u5426\u6765\u81ea\u5408\u6cd5\u7684\u6e90\u3002")),(0,r.kt)("h4",{id:"cookie\u7684samesite\u5c5e\u6027\u8bbe\u7f6e\u4e3astrict"},"cookie\u7684SameSite\u5c5e\u6027\u8bbe\u7f6e\u4e3astrict"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8bbe\u7f6e\u4e86\u8fd9\u4e2a\u5c5e\u6027\uff0c\u4f1a\u4f7f\u5f97\u5728\u8de8\u7ad9\u60c5\u51b5\u4e0b\uff0c\u4efb\u4f55\u60c5\u51b5\u4e0b\u90fd\u4e0d\u4f1a\u53d1\u9001cookie\u3002")),(0,r.kt)("h2",{id:"xss\u653b\u51fb"},"XSS\u653b\u51fb"),(0,r.kt)("h3",{id:"\u4e00\u4ec0\u4e48\u662fxss\u653b\u51fb"},"\u4e00\u3001\u4ec0\u4e48\u662fXSS\u653b\u51fb\uff1f"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"XSS\u653b\u51fb\u5373Cross Site Script\u53ef\u4ee5\u8bd1\u4e3a\u8de8\u7ad9\u811a\u672c\u653b\u51fb\uff0c\u4e3a\u4e86\u548cCSS\u533a\u5206\u5f00\u6765\uff0c\u6240\u4ee5\u53eb\u505aXSS\uff0cXSS\u653b\u51fb\u6307\u7684\u662f\u653b\u51fb\u8005\u5728\u7f51\u7ad9\u4e0a\u6ce8\u5165\u6076\u610f\u7684\u5ba2\u6237\u7aef\u4ee3\u7801\uff0c\u901a\u8fc7\u6076\u610f\u811a\u672c\u5bf9\u5ba2\u6237\u7aef\u7f51\u9875\u8fdb\u884c\u7be1\u6539\uff0c\u4ece\u800c\u5728\u7528\u6237\u6d4f\u89c8\u7f51\u9875\u65f6\u5bf9\u7528\u6237\u6d4f\u89c8\u5668\u8fdb\u884c\u63a7\u5236\u6216\u8005\u83b7\u53d6\u7528\u6237\u9690\u79c1\u6570\u636e\u7684\u4e00\u79cd\u653b\u51fb\u65b9\u5f0f\u3002\u653b\u51fb\u8005\u5bf9\u5ba2\u6237\u7aef\u7f51\u9875\u6ce8\u5165\u7684\u6076\u610f\u811a\u672c\u4e00\u822c\u5305\u62ecJS\uff0c\u6709\u65f6\u4e5f\u4f1a\u5305\u542bHTML\u3002XSS\u653b\u51fb\u7684\u5171\u540c\u70b9\u662f\u5c06\u4e00\u4e9b\u9690\u79c1\u6570\u636e\u50cfcookie\u3001session\u53d1\u9001\u7ed9\u653b\u51fb\u8005\uff0c\u5c06\u53d7\u5bb3\u8005\u91cd\u5b9a\u5411\u5230\u4e00\u4e2a\u7531\u653b\u51fb\u8005\u63a7\u5236\u7684\u7f51\u7ad9\uff0c\u5728\u53d7\u5bb3\u8005\u7684\u673a\u5668\u4e0a\u8fdb\u884c\u4e00\u4e9b\u6076\u610f\u64cd\u4f5c\u3002")),(0,r.kt)("h3",{id:"\u4e8cxss\u653b\u51fb\u7684\u7c7b\u578b"},"\u4e8c\u3001XSS\u653b\u51fb\u7684\u7c7b\u578b"),(0,r.kt)("h4",{id:"\u53cd\u5c04\u578b\u975e\u6301\u4e45\u578b"},"\u53cd\u5c04\u578b\uff08\u975e\u6301\u4e45\u578b\uff09"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u53cd\u5c04\u578bXSS\u628a\u7528\u6237\u8f93\u5165\u7684\u6570\u636e\u53cd\u5c04\u7ed9\u6d4f\u89c8\u5668\uff0c\u8fd9\u79cd\u653b\u51fb\u7684\u6e2f\u5f0f\u9700\u8981\u653b\u51fb\u8005\u8bf1\u9a97\u7528\u6237\u70b9\u51fb\u4e00\u4e2a\u6076\u610f\u8fde\u63a5\u6216\u8005\u63d0\u4ea4\u4e00\u4e2a\u8868\u5355\uff0c\u6216\u8005\u8fdb\u5165\u4e00\u4e2a\u6076\u610f\u7f51\u7ad9\u65f6\uff0c\u5c06\u6076\u610f\u811a\u672c\u6ce8\u5165\u653b\u51fb\u8005\u7684\u7f51\u7ad9\u3002\u5f53\u7528\u6237\u70b9\u51fb\u6076\u610f\u94fe\u63a5\u65f6\uff0c\u9875\u9762\u8df3\u8f6c\u5230\u653b\u51fb\u8005\u9884\u5148\u51c6\u5907\u7684\u9875\u9762\uff0c\u4f1a\u53d1\u73b0\u5728\u653b\u51fb\u8005\u7684\u9875\u9762\u6267\u884c\u4e86JS\u811a\u672c\uff0c\u8fd9\u6837\u4ea7\u751f\u4e86\u53cd\u5c04\u578bXSS\u653b\u51fb\uff0c\u653b\u51fb\u8005\u53ef\u4ee5\u6ce8\u5165\u4efb\u610f\u7684\u6076\u610f\u811a\u672c\u8fdb\u884c\u653b\u51fb\uff0c\u53ef\u80fd\u6ce8\u5165\u6076\u4f5c\u5267\u811a\u672c\uff0c\u4e5f\u53ef\u4ee5\u6ce8\u5165\u83b7\u53d6\u7528\u6237\u9690\u79c1\u6570\u636e\u7684\u811a\u672c\u3002")),(0,r.kt)("h4",{id:"\u5b58\u50a8\u578b\u6301\u4e45\u578b"},"\u5b58\u50a8\u578b\uff08\u6301\u4e45\u578b\uff09"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5b58\u50a8\u578bXSS\u4f1a\u628a\u7528\u6237\u8f93\u5165\u7684\u6570\u636e\u5b58\u50a8\u5728\u670d\u52a1\u5668\u7aef\uff0c\u5f53\u6d4f\u89c8\u5668\u8bf7\u6c42\u6570\u636e\u65f6\uff0c\u811a\u672c\u4ece\u670d\u52a1\u5668\u4e0a\u4f20\u56de\u5e76\u6267\u884c\uff0c\u8fd9\u79cdXSS\u653b\u51fb\u5177\u6709\u5f88\u5f3a\u7684\u7a33\u5b9a\u6027\u3002\u4e00\u4e2a\u6bd4\u8f83\u5e38\u89c1\u7684\u573a\u666f\u662f\u653b\u51fb\u8005\u5728\u8bba\u575b\u4e0a\u5199\u4e0b\u4e00\u7bc7\u5305\u542b\u6076\u610fJS\u7684\u8bc4\u8bba\uff0c\u8fd9\u4e2a\u8bc4\u8bba\u53d1\u8868\u540e\uff0c\u6240\u6709\u8bbf\u95ee\u8fd9\u4e2a\u8bc4\u8bba\u7684\u7528\u6237\u90fd\u4f1a\u6267\u884c\u8fd9\u6bb5\u6076\u610f\u7684JS\u4ee3\u7801\u3002")),(0,r.kt)("h4",{id:"\u57fa\u4e8edom\u7684xss\u975e\u6301\u4e45\u578b"},"\u57fa\u4e8eDOM\u7684XSS\uff08\u975e\u6301\u4e45\u578b\uff09"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"DOM\u578bXSS\u662f\u57fa\u4e8eDOM\u6587\u6863\u5bf9\u8c61\u6a21\u578b\u7684\u4e00\u79cd\u6f0f\u6d1e\uff0cDOM\u578bXSS\u662f\u4e00\u79cd\u7279\u6b8a\u7684\u53cd\u5c04\u578bXSS\uff0c\u533a\u522b\u5728\u4e8eDOM\u578bXSS\u5e76\u4e0d\u4f1a\u548c\u540e\u7aef\u8fdb\u884c\u4ea4\u4e92\uff0c\u9996\u5148\u5ba2\u6237\u7aef\u7684\u811a\u672c\u7a0b\u5e8f\u53ef\u4ee5\u901a\u8fc7DOM\u52a8\u6001\u7684\u68c0\u67e5\u548c\u4fee\u6539\u9875\u9762\u5185\u5bb9\uff0c\u5f53\u653b\u51fb\u8005\u53ef\u4ee5\u63a7\u5236\u4e00\u4e9bDOM\u5bf9\u8c61\uff0c\u8f93\u5165\u4e00\u4e9b\u6076\u610fJS\u811a\u672c\uff0c\u800c\u5ba2\u6237\u7aef\u811a\u672c\u5e76\u6ca1\u6709\u5bf9\u7528\u6237\u8f93\u5165\u7684\u5185\u5bb9\u8fdb\u884c\u6709\u6548\u7684\u8fc7\u6ee4\u5c31\u6267\u884c\u8fd9\u4e9b\u811a\u672c\uff0c\u5c31\u4f1a\u5bfc\u81f4DOM\u578bXSS\u6f0f\u6d1e\u3002")),(0,r.kt)("h3",{id:"\u4e09xss\u653b\u51fb\u7684\u9632\u8303\u65b9\u6cd5"},"\u4e09\u3001XSS\u653b\u51fb\u7684\u9632\u8303\u65b9\u6cd5"),(0,r.kt)("h4",{id:"1-httponly\u9632\u6b62\u7a83\u53d6cookie"},"1. HttpOnly\u9632\u6b62\u7a83\u53d6Cookie"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5c06Cookie\u7684\u5c5e\u6027HttpOnly\u7f6e\u4e3atrue\uff0c\u6d4f\u89c8\u5668\u5c06\u7981\u6b62\u9875\u9762\u7684JS\u4ee3\u7801\u8bbf\u95ee\u8fd9\u4e2aCookie,\u8fd9\u6837\u80fd\u591f\u963b\u6b62XSS\u653b\u51fb\u540e\u7684Cookie\u52ab\u6301\u653b\u51fb\u3002")),(0,r.kt)("h4",{id:"2-\u8f93\u5165\u68c0\u67e5"},"2. \u8f93\u5165\u68c0\u67e5"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e0d\u8981\u76f8\u4fe1\u7528\u6237\u7684\u4efb\u4f55\u8f93\u5165\uff0c\u5bf9\u4e8e\u7528\u6237\u7684\u4efb\u4f55\u8f93\u5165\u90fd\u8981\u8fdb\u884c\u68c0\u67e5\u3001\u8fc7\u6ee4\u548c\u8f6c\u8bd1\u3002\u5efa\u7acb\u53ef\u4fe1\u4efb\u7684\u5b57\u7b26\u548cHTML\u6807\u7b7e\u767d\u540d\u5355\uff0c\u5bf9\u4e8e\u4e0d\u5728\u767d\u540d\u5355\u4e4b\u5217\u7684\u5b57\u7b26\u6216\u8005\u6807\u7b7e\u8fdb\u884c\u8fc7\u6ee4\u6216\u7f16\u7801\uff0c\u5728XSS\u9632\u5fa1\u4e2d\uff0c\u8f93\u5165\u68c0\u67e5\u4e00\u822c\u662f\u68c0\u67e5\u7528\u6237\u8f93\u5165\u7684\u6570\u636e\u4e2d\u662f\u5426\u5305\u542b\u5de6\u5c16\u62ec\u53f7\u6216\u8005\u53f3\u5c16\u62ec\u53f7\u7b49\u7279\u6b8a\u5b57\u7b26\uff0c\u6709\u5219\u5bf9\u7279\u6b8a\u5b57\u7b26\u8fdb\u884c\u8fc7\u6ee4\u6216\u7f16\u7801\u6765\u9632\u6b62XSS\u653b\u51fb\u3002")),(0,r.kt)("h4",{id:"3-\u8f93\u51fa\u68c0\u67e5"},"3. \u8f93\u51fa\u68c0\u67e5"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u7528\u6237\u7684\u8f93\u5165\u4f1a\u5b58\u5728\u95ee\u9898\uff0c\u670d\u52a1\u7aef\u7684\u8f93\u51fa\u4e5f\u4f1a\u5b58\u5728\u95ee\u9898\uff0c\u4e00\u822c\u6765\u8bf4\uff0c\u9664\u4e86\u5bcc\u6587\u672c\u7684\u8f93\u51fa\u5916\uff0c\u5728\u53d8\u91cf\u8f93\u51fa\u5230HTML\u9875\u9762\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528\u7f16\u7801\u6216\u8005\u8f6c\u8bd1\u7684\u65b9\u5f0f\u6765\u9632\u5fa1XSS\u653b\u51fb\u3002")),(0,r.kt)("h2",{id:"\u53c2\u8003\u6587\u6863"},"\u53c2\u8003\u6587\u6863"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6844903781704925191#heading-15"},"\u524d\u7aef\u9762\u8bd5\u67e5\u6f0f\u8865\u7f3a--(\u4e03) XSS\u653b\u51fb\u4e0eCSRF\u653b\u51fb"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/dwqs/blog/issues/68"},"\u6d45\u8bf4 XSS \u548c CSRF")))))}p.isMDXComponent=!0}}]);