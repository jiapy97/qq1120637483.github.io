"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[3779],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,f=s["".concat(p,".").concat(d)]||s[d]||c[d]||i;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},10034:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={title:"LeetCode\u2014\u2014\u6570\u7ec4\u4e2d\u7684\u7b2cK\u4e2a\u6700\u5927\u5143\u7d20\uff08\u5806\u6392\u5e8f-\u5927\u9876\u5806\uff09",date:"2021-8-10",author:"Justin",top:!1,cover:!1,categories:"LeetCode",tags:["LeetCode"]},o=void 0,l={permalink:"/blog/LeetCode\u2014\u2014\u6570\u7ec4\u4e2d\u7684\u7b2cK\u4e2a\u6700\u5927\u5143\u7d20\uff08\u5806\u6392\u5e8f-\u5927\u9876\u5806\uff09",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/LeetCode\u2014\u2014\u6570\u7ec4\u4e2d\u7684\u7b2cK\u4e2a\u6700\u5927\u5143\u7d20\uff08\u5806\u6392\u5e8f-\u5927\u9876\u5806\uff09.md",source:"@site/blog/LeetCode\u2014\u2014\u6570\u7ec4\u4e2d\u7684\u7b2cK\u4e2a\u6700\u5927\u5143\u7d20\uff08\u5806\u6392\u5e8f-\u5927\u9876\u5806\uff09.md",title:"LeetCode\u2014\u2014\u6570\u7ec4\u4e2d\u7684\u7b2cK\u4e2a\u6700\u5927\u5143\u7d20\uff08\u5806\u6392\u5e8f-\u5927\u9876\u5806\uff09",description:"\u9898\u76ee\u63cf\u8ff0",date:"2021-08-10T00:00:00.000Z",formattedDate:"2021\u5e748\u670810\u65e5",tags:[{label:"LeetCode",permalink:"/blog/tags/leet-code"}],readingTime:3.68,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"LeetCode\u2014\u2014\u6570\u7ec4\u4e2d\u7684\u7b2cK\u4e2a\u6700\u5927\u5143\u7d20\uff08\u5806\u6392\u5e8f-\u5927\u9876\u5806\uff09",date:"2021-8-10",author:"Justin",top:!1,cover:!1,categories:"LeetCode",tags:["LeetCode"]},prevItem:{title:"Node\u62a5\u9519 npm ERR! code EINVALIDTAGNAME",permalink:"/blog/Node\u62a5\u9519npm ERR code EINVALIDTAGNAME"},nextItem:{title:"Node 04--\u4f7f\u7528Node\u5904\u7406\u8868\u5355\u8bf7\u6c42\u4e0e\u4e24\u79cd\u66b4\u9732\u65b9\u5f0f",permalink:"/blog/Node 04--\u4f7f\u7528Node\u5904\u7406\u8868\u5355\u8bf7\u6c42\u4e0e\u4e24\u79cd\u66b4\u9732\u65b9\u5f0f"}},p={authorsImageUrls:[void 0]},u=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u89e3\u9898\u601d\u8def",id:"\u89e3\u9898\u601d\u8def",level:2},{value:"1. \u6784\u5efa\u5927\u9876\u5806",id:"1-\u6784\u5efa\u5927\u9876\u5806",level:3},{value:"2. \u5c06\u5927\u9876\u5806\u4e0b\u6c89K-1\u6b21\uff0c\u5f97\u5230\u7684\u5c31\u662f\u7b2cK\u5927\u7684\u5143\u7d20",id:"2-\u5c06\u5927\u9876\u5806\u4e0b\u6c89k-1\u6b21\u5f97\u5230\u7684\u5c31\u662f\u7b2ck\u5927\u7684\u5143\u7d20",level:3},{value:"\u89e3\u9898\u4ee3\u7801",id:"\u89e3\u9898\u4ee3\u7801",level:2},{value:"\u9898\u76ee\u53cd\u601d",id:"\u9898\u76ee\u53cd\u601d",level:2}],m={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u9898\u76ee\u63cf\u8ff0"},"\u9898\u76ee\u63cf\u8ff0"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/2387703be9cdedd3863db5c5c5359671.png",alt:"image.png"})),(0,a.kt)("h2",{id:"\u89e3\u9898\u601d\u8def"},"\u89e3\u9898\u601d\u8def"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u9898\u5982\u679c\u76f4\u63a5\u518d\u7528API\u89e3\u9898\u80af\u5b9a\u662f\u4e0d\u884c\u7684\uff0c\u56e0\u4e3a\u9762\u8bd5\u4e0d\u53ef\u80fd\u8003\u4f60API\u5982\u4f55\u4f7f\u7528\uff0c\u524d\u51e0\u5929\u5199\u8fc7\u8fd9\u4e2a\u9898\u76ee\u662f\u901a\u8fc7\u5feb\u901f\u6392\u5e8f\u5199\u7684\uff0c\u8fd9\u6b21\u6211\u4eec\u91c7\u7528\u5806\u6392\u5e8f\uff0c\u901a\u8fc7\u5927\u9876\u5806\u7684\u65b9\u5f0f\u6765\u6c42\u51fa\u7b2cK\u4e2a\u6700\u5927\u7684\u5143\u7d20\uff0c\u5176\u5b9e\u8fd9\u7c7b\u95ee\u9898\u90fd\u5c5e\u4e8e\u7ecf\u5178\u7684TOP K\u95ee\u9898\uff0c\u5c5e\u4e8e\u9762\u8bd5\u7684\u5e38\u8003\u9898\u3002")),(0,a.kt)("h3",{id:"1-\u6784\u5efa\u5927\u9876\u5806"},"1. \u6784\u5efa\u5927\u9876\u5806"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e3a\u4ec0\u4e48\u8981\u6784\u5efa\u5927\u9876\u5806\uff0c\u662f\u56e0\u4e3a\u5927\u9876\u5806\u7684\u5bf9\u9876\u5143\u7d20\u662f\u6574\u4e2a\u6570\u7ec4\u4e2d\u6700\u5927\u7684\u5143\u7d20.\u6211\u4eec\u6b63\u5f0f\u5229\u7528\u8fd9\u70b9\u6765\u6c42\u89e3\u95ee\u9898\u7684\u3002"),(0,a.kt)("ol",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ol"},"\u6784\u5efa\u5927\u9876\u5806\u7684\u7b2c\u4e00\u6b65\u662f\u4ece\u6700\u540e\u4e00\u4e2a\u975e\u53f6\u5b50\u8282\u70b9\u5f00\u59cb\uff0c\u4e00\u76f4\u904d\u5386\u5230\u6839\u8282\u70b9."),(0,a.kt)("li",{parentName:"ol"},"\u4e00\u4e2a\u8282\u70b9\u7684\u5de6\u5b50\u8282\u70b9\u662f 2*n + 1."),(0,a.kt)("li",{parentName:"ol"},"\u4e00\u4e2a\u8282\u70b9\u7684\u53f3\u5b50\u8282\u70b9\u662f 2*n + 2."),(0,a.kt)("li",{parentName:"ol"},"\u4e00\u4e2a\u8282\u70b9\u7684\u7236\u8282\u70b9\u662f(n-1) / 2 (\u5411\u4e0b\u53d6\u6574)"),(0,a.kt)("li",{parentName:"ol"},"\u4e00\u68f5\u6811\u7684\u6700\u540e\u4e00\u4e2a\u975e\u53f6\u5b50\u8282\u70b9\u662f Math.flool(nums.length/2)-1."))),(0,a.kt)("h3",{id:"2-\u5c06\u5927\u9876\u5806\u4e0b\u6c89k-1\u6b21\u5f97\u5230\u7684\u5c31\u662f\u7b2ck\u5927\u7684\u5143\u7d20"},"2. \u5c06\u5927\u9876\u5806\u4e0b\u6c89K-1\u6b21\uff0c\u5f97\u5230\u7684\u5c31\u662f\u7b2cK\u5927\u7684\u5143\u7d20"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5047\u5982\uff0c\u6211\u4eec\u8981\u6c42\u7684\u662f\u7b2c\u4e00\u5927\u7684\u5143\u7d20\uff0cK-1\u5c31\u662f\u96f6\uff0c\u4e5f\u5c31\u662f\u8bf4\u4e0d\u9700\u8981\u8fdb\u884c\u4e0b\u6c89\uff0c\u6b64\u65f6\u7684\u5927\u9876\u5806\u7684\u5806\u9876\u5c31\u662f\u6700\u5927\u7684\u5143\u7d20\u3002\u82e5K-1=2\uff0c\u53ea\u9700\u4e0b\u6c89\u4e24\u6b21\uff0c\u5806\u9876\u5c31\u662f\u6211\u4eec\u7684\u6700\u5927\u7684\u5143\u7d20\u3002\u6240\u8c13\u7684\u4e0b\u6c89\u5c31\u662f\u5c06\u5806\u9876\u4e0e\u672b\u5c3e\u5143\u7d20\u8fdb\u884c\u4ea4\u6362\u3002\u7136\u540e\u5c06\u5806\u7684\u957f\u5ea6\u51cf\u4e00\u4e4b\u540e\u7ee7\u7eed\u8fdb\u884c\u5806\u5316\u3002")),(0,a.kt)("h2",{id:"\u89e3\u9898\u4ee3\u7801"},"\u89e3\u9898\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u901a\u8fc7\u5927\u9876\u5806\u6c42\u89e3\u95ee\u9898\nvar findKthLargest = function(nums, k) {\n    // \u5806\u7684\u5927\u5c0f\n    let heapSize = nums.length;\n    // \u8c03\u7528\u5927\u9876\u5806\u51fd\u6570\n    buildMaxHeap(nums,heapSize);\n    // \u8981\u60f3\u6c42\u7b2cK\u5927\u7684\u5143\u7d20\uff0c\u5c31\u9700\u8981\u5c06\u5927\u9876\u5806\u4e0b\u6c89K-1\u6b21\uff0c\u6bcf\u4e0b\u6c89\u4e00\u6b21\u8fdb\u884c\u4e00\u6b21\u91cd\u65b0\u7684\u5806\u5316\uff1b\n    for (let i = 0; i < k - 1; i++ ) {\n        swap(nums,0,nums.length - 1 - i);\n        // \u5c06\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u5ffd\u7565\uff0c\u4e0d\u53c2\u4e0e\u5806\u5316\n        nums\n        heapSize--;\n        // \u4ece\u7b2c0\u4e2a\u5143\u7d20\u5f00\u59cb\u7ee7\u7eed\u8fdb\u884c\u5806\u5316\n        maxHeapify(nums,0,heapSize);\n    }\n    // \u6b64\u65f6\u5806\u9876\u5c31\u662f\u7b2cK\u4e2a\u6700\u5927\u5143\u7d20\n    return nums[0]\n    // \u6784\u5efa\u5927\u9876\u5806\n    function buildMaxHeap(nums,heapSize) {\n        for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {\n            maxHeapify(nums,i,heapSize)\n        }\n    }\n    function maxHeapify(nums,i,heapSize) {\n        // \u9996\u5148\u5047\u5b9a\u7b2ci\u4e2a\u662f\u6700\u5927\u7684\n        let max = i;\n        let leftChild = 2 * i + 1;\n        let rightChild = 2 * i + 2;\n        // \u5982\u679c\u4e0b\u6807\u4e0d\u8d8a\u754c\uff08\u5373\u5b50\u5b69\u5b50\u5b58\u5728\uff09\uff0c\u5e76\u4e14\u5b50\u8282\u70b9\u5c0f\u4e8e\u7b2ci\u4e2a\u5143\u7d20\n        if (leftChild < heapSize && nums[leftChild] > nums[max]) {\n            max = leftChild;\n        }\n        if (rightChild < heapSize && nums[rightChild] > nums[max]) {\n            max = rightChild;\n        }\n        // \u5224\u65ad\u662f\u5426\u53d1\u751f\u4e86\u4ea4\u6362\n        if (max !== i) {\n            swap(nums,i,max);\n            // \u4ea4\u6362\u4e4b\u540e\uff0c\u4ece\u4e0b\u9762\u4e0a\u6765\u7684\u5143\u7d20\u7684\u4f4d\u7f6e\u540e\u9762\u9700\u8981\u7ee7\u7eed\u8fdb\u884c\u5806\u5316\n            maxHeapify(nums,max,heapSize);\n        }\n    }\n\n    function swap (nums,i,j) {\n        let temp = nums[i];\n        nums[i] = nums[j];\n        nums[j] = temp;\n    }\n};\n\nfindKthLargest([8,5,0,3,7,1,2], 3)\n")),(0,a.kt)("h2",{id:"\u9898\u76ee\u53cd\u601d"},"\u9898\u76ee\u53cd\u601d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b66\u4f1a\u4f7f\u7528\u5927\u9876\u5806\u7684\u65b9\u5f0f\u6765\u6c42\u89e3TOP K\u95ee\u9898\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u672c\u9898\u7684\u601d\u8def\u4e5f\u662f\u89e3\u51b3\u5806\u6392\u5e8f\u7684\u6838\u5fc3\u601d\u8def\u3002")))}c.isMDXComponent=!0}}]);