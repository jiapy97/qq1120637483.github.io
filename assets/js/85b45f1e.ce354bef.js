"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[65476],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),i=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=i(n),k=r,d=m["".concat(u,".").concat(k)]||m[k]||c[k]||o;return n?a.createElement(d,l(l({ref:t},s),{},{components:n})):a.createElement(d,l({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50081:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const o={title:"Vue3\u4e2dComposition API\u7684\u6838\u5fc3\u7528\u6cd5",date:new Date("2021-12-15T00:00:00.000Z"),author:"Justin",top:!1,cover:!1,categories:"Vue",tags:["Vue"]},l=void 0,p={permalink:"/blog/Vue3\u4e2dComposition API\u7684\u6838\u5fc3\u7528\u6cd5",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/Vue3\u4e2dComposition API\u7684\u6838\u5fc3\u7528\u6cd5.md",source:"@site/blog\\Vue3\u4e2dComposition API\u7684\u6838\u5fc3\u7528\u6cd5.md",title:"Vue3\u4e2dComposition API\u7684\u6838\u5fc3\u7528\u6cd5",description:"\u4ec0\u4e48\u662fComposition API?",date:"2021-12-15T00:00:00.000Z",formattedDate:"2021\u5e7412\u670815\u65e5",tags:[{label:"Vue",permalink:"/blog/tags/vue"}],readingTime:7.11,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"Vue3\u4e2dComposition API\u7684\u6838\u5fc3\u7528\u6cd5",date:"2021-12-15T00:00:00.000Z",author:"Justin",top:!1,cover:!1,categories:"Vue",tags:["Vue"]},prevItem:{title:"LeetCode\u2014\u2014\u641c\u7d22\u63d2\u5165\u4f4d\u7f6e\uff08\u4e8c\u5206\u67e5\u627e\uff09",permalink:"/blog/LeetCode\u2014\u2014\u641c\u7d22\u63d2\u5165\u4f4d\u7f6e\uff08\u4e8c\u5206\u67e5\u627e\uff09"},nextItem:{title:"Egg.js\u4e2d\u914d\u7f6e\u8de8\u57df\u4e0e\u8def\u7531\u5206\u7ec4",permalink:"/blog/Egg.js\u4e2d\u914d\u7f6e\u8de8\u57df\u4e0e\u8def\u7531\u5206\u7ec4"}},u={authorsImageUrls:[void 0]},i=[{value:"\u4ec0\u4e48\u662fComposition API?",id:"\u4ec0\u4e48\u662fcomposition-api",level:2},{value:"\u5728setup\u4e2d\u4f7f\u7528ref\u548creactive\u5b9a\u4e49\u54cd\u5e94\u5f0f\u6570\u636e",id:"\u5728setup\u4e2d\u4f7f\u7528ref\u548creactive\u5b9a\u4e49\u54cd\u5e94\u5f0f\u6570\u636e",level:2},{value:"toRefs\u89e3\u6784\u54cd\u5e94\u5f0f\u5bf9\u8c61\u6570\u636e",id:"torefs\u89e3\u6784\u54cd\u5e94\u5f0f\u5bf9\u8c61\u6570\u636e",level:2},{value:"setup\u4e2d\u7684\u8ba1\u7b97\u5c5e\u6027",id:"setup\u4e2d\u7684\u8ba1\u7b97\u5c5e\u6027",level:2},{value:"readonly:\u6df1\u5c42\u7684\u53ea\u8bfb\u4ee3\u7406",id:"readonly\u6df1\u5c42\u7684\u53ea\u8bfb\u4ee3\u7406",level:2},{value:"setup\u4e2d\u7684watchEffect",id:"setup\u4e2d\u7684watcheffect",level:2},{value:"setup\u4e2d\u7684watch",id:"setup\u4e2d\u7684watch",level:2},{value:"watch\u4e0ewatchEffect\u7684\u533a\u522b",id:"watch\u4e0ewatcheffect\u7684\u533a\u522b",level:2},{value:"setup\u4e2d\u7684\u751f\u547d\u5468\u671f\u94a9\u5b50\u51fd\u6570",id:"setup\u4e2d\u7684\u751f\u547d\u5468\u671f\u94a9\u5b50\u51fd\u6570",level:2},{value:"setup\u4e2d\u7684props",id:"setup\u4e2d\u7684props",level:2},{value:"Provide\u4e0einject",id:"provide\u4e0einject",level:2},{value:"\u4e00\u822c\u7528\u6cd5",id:"\u4e00\u822c\u7528\u6cd5",level:3},{value:"provide\u80fd\u591f\u83b7\u53d6\u5230this\u4e2d\u7684\u6570\u636e",id:"provide\u80fd\u591f\u83b7\u53d6\u5230this\u4e2d\u7684\u6570\u636e",level:3},{value:"setup\u4e2d\u7684provide\u4e0einject",id:"setup\u4e2d\u7684provide\u4e0einject",level:2}],s={toc:i};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4ec0\u4e48\u662fcomposition-api"},"\u4ec0\u4e48\u662fComposition API?"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Composition API\u4e5f\u53eb\u7ec4\u5408\u5f0fAPI\uff0c\u662fVue3.x\u4e2d\u7684\u65b0\u7279\u6027\u3002\u901a\u8fc7\u521b\u5efaVue\u7ec4\u4ef6\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u63a5\u53e3\u7684\u53ef\u91cd\u590d\u90e8\u5206\u63d0\u53d6\u5230\u53ef\u91cd\u7528\u7684\u4ee3\u7801\u6bb5\u4e2d\uff0c\u6ca1\u6709Composition API\u4e4b\u524dVue\u76f8\u5173\u4e1a\u52a1\u7684\u4ee3\u7801\u9700\u8981\u914d\u7f6e\u5230option\u7684\u7279\u5b9a\u533a\u57df\uff0c\u5982\u679c\u5728\u5927\u578b\u9879\u76ee\u4e2d\u8fd9\u79cd\u65b9\u5f0f\u4f1a\u5bfc\u81f4\u540e\u671f\u7684\u7ef4\u62a4\u6027\u6bd4\u8f83\u590d\u6742\uff0c\u540c\u65f6\u4ee3\u7801\u53ef\u590d\u7528\u6027\u4e0d\u9ad8\uff0cVue3\u7684Composition API\u5c31\u662f\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u7684\u3002")),(0,r.kt)("h2",{id:"\u5728setup\u4e2d\u4f7f\u7528ref\u548creactive\u5b9a\u4e49\u54cd\u5e94\u5f0f\u6570\u636e"},"\u5728setup\u4e2d\u4f7f\u7528ref\u548creactive\u5b9a\u4e49\u54cd\u5e94\u5f0f\u6570\u636e"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528ref\u548creactive\u5b9a\u4e49\u6570\u636e\u524d\uff0c\u9700\u8981\u4ecevue\u4e2d\u8fdb\u884c\u89e3\u6784\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import {ref,reactive} from 'vue';\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"ref\u548creactive\u5747\u53ef\u4ee5\u5b9a\u4e49\u54cd\u5e94\u5f0f\u6570\u636e\uff0c\u5b9a\u4e49\u7684\u6570\u636e\u5728Vue\u6a21\u677f\u4e2d\u53ef\u4ee5\u76f4\u63a5\u83b7\u53d6\uff0c\u4f46\u662f\u5982\u679c\u901a\u8fc7\u65b9\u6cd5\u83b7\u53d6\u7684\u8bdd\uff0cref\u548creactive\u5b9a\u4e49\u7684\u6570\u636e\u5728\u83b7\u53d6\u4e0a\u6709\u4e00\u5b9a\u7684\u5dee\u5f02\uff0cref\u5b9a\u4e49\u7684\u9700\u8981\u901a\u8fc7value\u5c5e\u6027\u95f4\u63a5\u83b7\u53d6\uff0creactive\u5b9a\u4e49\u7684\u6570\u636e\u53ef\u4ee5\u76f4\u63a5\u83b7\u53d6\uff0c\u5728\u4fee\u6539\u8fd9\u4e24\u7c7b\u6570\u636e\u4e5f\u662f\u5982\u6b64\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'export default {\n  setup() {\n    // \u4f7f\u7528ref\u5b9a\u4e49\u54cd\u5e94\u5f0f\u6570\u636e\n    const title = ref("\u8fd9\u662f\u4e00\u4e2a\u6807\u9898");\n    // \u4f7f\u7528reactive\u5b9a\u4e49\u54cd\u5e94\u5f0f\u6570\u636e\n    const userinfo = reactive({\n      username: "\u5f20\u4e09",\n      age: 20\n    });\n    // \u83b7\u53d6reactive\u4e2d\u7684\u5c5e\u6027\u53ef\u4ee5\u76f4\u63a5\u83b7\u53d6\n    const getUserName = () => {\n      alert(userinfo.username)\n    };\n    // \u83b7\u53d6ref\u4e2d\u7684\u6570\u636e\u9700\u8981\u901a\u8fc7value\u5c5e\u6027\n    const getTitle = () => {\n      alert(title.value)\n    };\n    const setUserName = () => {\n      // \u4fee\u6539reactive\u4e2d\u7684\u5c5e\u6027\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539\n      userinfo.username = "\u4fee\u6539\u540e\u7684\u5f20\u4e09"\n    };\n    const setTitle = () => {\n      // \u4fee\u6539ref\u4e2d\u7684\u5c5e\u6027\uff0c\u9700\u8981\u901a\u8fc7value\n      title.value = "\u8fd9\u662f\u4fee\u6539\u540e\u7684\u6807\u9898"\n    };\n    return {\n      title,\n      userinfo,\n      getUserName,\n      getTitle,\n      setTitle,\n      setUserName\n    }\n  },\n  data() {\n    return {\n      msg: "\u8fd9\u662fHome\u7ec4\u4ef6\u7684msg"\n    }\n  },\n  methods: {\n    run() {\n      alert(\'\u8fd9\u662fHome\u7ec4\u4ef6\u7684run\u65b9\u6cd5\')\n    }\n  }\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u53ef\u4ee5\u4f7f\u7528v-model\u76f4\u63a5\u8fdb\u884c\u53cc\u5411\u6570\u636e\u7ed1\u5b9a\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<input type="text" v-model="title">\n<input type="text" v-model="userinfo.username">\n')),(0,r.kt)("h2",{id:"torefs\u89e3\u6784\u54cd\u5e94\u5f0f\u5bf9\u8c61\u6570\u636e"},"toRefs\u89e3\u6784\u54cd\u5e94\u5f0f\u5bf9\u8c61\u6570\u636e"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e4b\u6240\u4ee5\u9700\u8981toRefs\u662f\u56e0\u4e3a\u901a\u8fc7toRefs\u89e3\u6784\u7684\u6570\u636e\u8fd8\u5177\u6709\u54cd\u5e94\u5f0f\u7684\u7279\u6027\uff0c\u901a\u8fc7\u4f20\u7edf\u7684\u62d3\u5c55\u8fd0\u7b97\u7b26\u8fdb\u884c\u89e3\u6784\u5219\u4e0d\u5177\u5907\u4e86\u54cd\u5e94\u5f0f\u7684\u7279\u6027\uff0c\u8fd9\u5c31\u662f\u4e3a\u4ec0\u4e48\u9700\u8981toRefs\u7684\u539f\u56e0\u3002")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4ecevue\u4e2d\u89e3\u6784\u51fatoRefs")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import {ref,reactive,toRefs} from 'vue';\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"setup\u7684\u8fd4\u56de\u6570\u636e\u4e2d\u8fdb\u884c\u5982\u4e0b\u7684\u4fee\u6539")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"return {\n  title,\n  userinfo,\n  getUserName,\n  getTitle,\n  setTitle,\n  setUserName,\n  ...toRefs(article)\n}\n")),(0,r.kt)("h2",{id:"setup\u4e2d\u7684\u8ba1\u7b97\u5c5e\u6027"},"setup\u4e2d\u7684\u8ba1\u7b97\u5c5e\u6027"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"setup\u4e2d\u7684\u8ba1\u7b97\u5c5e\u6027\u548c\u4e00\u822c\u7684\u8ba1\u7b97\u5c5e\u6027\u7c7b\u4f3c\uff0c\u533a\u522b\u5728\u4e8e\u65e0\u6cd5\u8bfb\u53d6\u5230this\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'setup() {\n    let userinfo = reactive({\n      firstName: "",\n      lastName: ""\n    });\n\n    let fullName = computed(() => {\n      return userinfo.firstName + " " + userinfo.lastName\n    })\n\n    return {\n      ...toRefs(userinfo),\n      fullName\n    }\n  }\n')),(0,r.kt)("h2",{id:"readonly\u6df1\u5c42\u7684\u53ea\u8bfb\u4ee3\u7406"},"readonly:\u6df1\u5c42\u7684\u53ea\u8bfb\u4ee3\u7406"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"readonly\u5b58\u5728\u7684\u610f\u4e49\u662f\u80fd\u591f\u5c06\u54cd\u5e94\u5f0f\u5bf9\u8c61\u8f6c\u6362\u4e3a\u666e\u901a\u7684\u539f\u59cb\u5bf9\u8c61\u3002")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5f15\u5165readonly\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import {computed, reactive,toRefs,readonly} from 'vue'\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u7ed9readonly\u4f20\u5165\u54cd\u5e94\u5f0f\u5bf9\u8c61\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'let userinfo = reactive({\n  firstName: "666",\n  lastName: ""\n});\nuserinfo = readonly(userinfo);\n')),(0,r.kt)("h2",{id:"setup\u4e2d\u7684watcheffect"},"setup\u4e2d\u7684watchEffect"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"setup\u4e2d\u7684watchEffect\u5177\u6709\u4ee5\u4e0b\u51e0\u4e2a\u7279\u70b9\u3002")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u80fd\u591f\u76d1\u542csetup\u4e2d\u7684\u6570\u636e\u53d8\u5316\uff0c\u6570\u636e\u4e00\u65e6\u53d8\u5316\u5c31\u4f1a\u6267\u884cwatchEffect\u4e2d\u7684\u56de\u8c03\u51fd\u6570\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u53ca\u65f6setup\u4e2d\u7684\u6570\u636e\u6ca1\u6709\u53d8\u5316\uff0c\u521d\u59cb\u7684\u65f6\u5019\u4e5f\u4f1a\u6267\u884c\u4e00\u6b21\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  setup() {\n    let data = reactive({\n      num: 1\n    });\n    watchEffect(() => {\n      console.log(`num2=${data.num}`);\n    });\n    setInterval(() => {\n      data.num++;\n    },1000)\n    return {\n      ...toRefs(data)\n    }\n  }\n")),(0,r.kt)("h2",{id:"setup\u4e2d\u7684watch"},"setup\u4e2d\u7684watch"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528watch\u76d1\u63a7\u6570\u636e\u7684\u57fa\u672c\u65b9\u6cd5\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'  setup() {\n    let keyword = ref("111");\n    watch(keyword,(newData,oldData) => {\n      console.log("newData\u662f\uff1a",newData);\n      console.log("oldData\u662f\uff1a",oldData);\n    })\n    return {\n      keyword\n    }\n  }\n')),(0,r.kt)("h2",{id:"watch\u4e0ewatcheffect\u7684\u533a\u522b"},"watch\u4e0ewatchEffect\u7684\u533a\u522b"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"watch\u5728\u9996\u6b21\u9875\u9762\u6e32\u67d3\u7684\u65f6\u5019\u4e0d\u4f1a\u6267\u884c\uff0c\u4f46\u662fwatchEffect\u4f1a\u3002"),(0,r.kt)("li",{parentName:"ol"},"watch\u80fd\u591f\u83b7\u53d6\u5230\u6570\u636e\u72b6\u6001\u53d8\u5316\u524d\u540e\u7684\u503c\u3002")),(0,r.kt)("h2",{id:"setup\u4e2d\u7684\u751f\u547d\u5468\u671f\u94a9\u5b50\u51fd\u6570"},"setup\u4e2d\u7684\u751f\u547d\u5468\u671f\u94a9\u5b50\u51fd\u6570"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/ae5ee47a577fe5db6161f37677987ce0.png",alt:"image.png"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5728setup\u4e2d\u751f\u547d\u5468\u671f\u94a9\u5b50\u7c7b\u4f3c\u4e8e\u76f4\u63a5\u8c03\u7528\u4e00\u4e2a\u51fd\u6570\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'  setup() {\n    let keyword = ref("111");\n    watch(keyword,(newData,oldData) => {\n      console.log("newData\u662f\uff1a",newData);\n      console.log("oldData\u662f\uff1a",oldData);\n    })\n    onMounted(() => {\n      console.log(\'onMounted\');\n    })\n    onUpdated(() => {\n      console.log(\'onUpdated\');\n    })\n    return {\n      keyword\n    }\n  }\n')),(0,r.kt)("h2",{id:"setup\u4e2d\u7684props"},"setup\u4e2d\u7684props"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u7236\u7ec4\u4ef6\u8fdb\u884c\u4f20\u503c\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<Search :msg="msg" />\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u58f0\u660e\u63a5\u6536")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"props: ['msg'],\n  setup(props) {\n    console.log(props);\n  }\n")),(0,r.kt)("h2",{id:"provide\u4e0einject"},"Provide\u4e0einject"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6709\u65f6\uff0c\u6211\u4eec\u9700\u8981\u5c06\u6570\u636e\u4ece\u7236\u7ec4\u4ef6\u4f20\u9012\u5230\u5b50\u7ec4\u4ef6\uff0c\u4f46\u662f\u5982\u679c\u7236\u7ec4\u4ef6\u5230\u5b50\u7ec4\u4ef6\u662f\u4e00\u4e2a\u5d4c\u5957\u5f88\u6df1\u7684\u5173\u7cfb\uff0c\u901a\u8fc7props\u8fdb\u884c\u4f20\u9012\u5c06\u53d8\u5f97\u5f88\u9ebb\u70e6\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528provide\u548cinject\u6765\u5b9e\u73b0\u3002")),(0,r.kt)("h3",{id:"\u4e00\u822c\u7528\u6cd5"},"\u4e00\u822c\u7528\u6cd5"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6839\u7ec4\u4ef6\u901a\u8fc7provide\u4f20\u9012\u6570\u636e\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'export default {\n  data() {\n    return {\n\n    }\n  },\n  components: {\n    Home\n  },\n  provide() {\n    return {\n      title: "app\u7ec4\u4ef6\u91cc\u9762\u7684\u6807\u9898"\n    }\n  }\n}\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u9700\u8981\u63a5\u6536\u6570\u636e\u7684\u7ec4\u4ef6\u901a\u8fc7inject\u58f0\u660e\u63a5\u6536")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  inject: ['title'],\n  data() {\n    return {\n\n    }\n  },\n  components: {\n\n  }\n}\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u58f0\u660e\u63a5\u6536\u540e\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<template>\n  <div class="container">\n    \u8fd9\u662fLocation\u7ec4\u4ef6\n    {{title}}\n  </div>\n</template>\n')),(0,r.kt)("h3",{id:"provide\u80fd\u591f\u83b7\u53d6\u5230this\u4e2d\u7684\u6570\u636e"},"provide\u80fd\u591f\u83b7\u53d6\u5230this\u4e2d\u7684\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'export default {\n  data() {\n    return {\n      title: "\u6839\u7ec4\u4ef6\u7684\u6570\u636e"\n    }\n  },\n  components: {\n    Home\n  },\n  provide() {\n    return {\n      title: this.title\n    }\n  }\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"\u6ce8\u610f:"),"\u4e0a\u9762\u7684\u4e00\u822c\u7528\u6cd5\u4e2d\uff0c\u5982\u679c\u7236\u7ec4\u4ef6\u4e2d\u7684\u6570\u636e\u53d1\u751f\u4e86\u53d8\u5316\uff0c\u5b50\u7ec4\u4ef6\u7684\u4e0d\u4f1a\u53d1\u751f\u53d8\u5316\uff0c\u56e0\u6b64\u63a8\u8350\u4f7f\u7528\u4e0b\u9762\u7684composition API\u4e2d\u7684provide\u4e0einject\u80fd\u591f\u5b9e\u73b0\u540c\u6b65\u53d8\u5316\u3002")),(0,r.kt)("h2",{id:"setup\u4e2d\u7684provide\u4e0einject"},"setup\u4e2d\u7684provide\u4e0einject"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6839\u7ec4\u4ef6")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import Home from './components/Home.vue'\nimport {ref,provide} from 'vue'\nexport default {\n  setup() {\n    let title = ref('app\u6839\u7ec4\u4ef6\u91cc\u9762\u7684title');\n    let setTitle = () => {\n      title.value = \"\u6539\u53d8\u540e\u7684title\"\n    }\n    provide(\"title\",title);\n    return {\n      title,\n      setTitle\n    }\n  },\n  data() {\n    return {\n    }\n  },\n  components: {\n    Home\n  }\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7528\u5230\u6570\u636e\u7684\u7ec4\u4ef6")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import {inject} from 'vue'\nexport default {\n  setup() {\n    let title = inject('title');\n    return {\n      title\n    }\n  },\n  data() {\n    return {\n\n    }\n  },\n  components: {\n\n  }\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e0eprops\u4e0d\u540c\u7684\u662f\uff0c\u5b50\u7ec4\u4ef6\u4e2d\u7684\u6570\u636e\u5982\u679c\u4f7f\u7528\u4e86\u53cc\u5411\u6570\u636e\u7ed1\u5b9a\u4f1a\u540c\u6b65\u5230\u7236\u7ec4\u4ef6\u3002")))}c.isMDXComponent=!0}}]);