"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[94489],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=a.createContext({}),c=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(u.Provider,{value:n},e.children)},i={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,k=m["".concat(u,".").concat(d)]||m[d]||i[d]||r;return t?a.createElement(k,l(l({ref:n},p),{},{components:t})):a.createElement(k,l({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=m;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<r;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},22879:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>i,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=t(87462),o=(t(67294),t(3905));const r={title:"Webpack\u4e2d\u7684source-map\u3001oneOf\u3001\u7f13\u5b58\u7684\u6838\u5fc3\u7528\u6cd5",date:new Date("2021-12-04T00:00:00.000Z"),author:"Justin",top:!1,cover:!1,categories:"Webpack",tags:["Webpack"]},l=void 0,s={permalink:"/blog/Webpack\u4e2d\u7684source-map\u3001oneOf\u3001\u7f13\u5b58\u7684\u6838\u5fc3\u7528\u6cd5",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/Webpack\u4e2d\u7684source-map\u3001oneOf\u3001\u7f13\u5b58\u7684\u6838\u5fc3\u7528\u6cd5.md",source:"@site/blog\\Webpack\u4e2d\u7684source-map\u3001oneOf\u3001\u7f13\u5b58\u7684\u6838\u5fc3\u7528\u6cd5.md",title:"Webpack\u4e2d\u7684source-map\u3001oneOf\u3001\u7f13\u5b58\u7684\u6838\u5fc3\u7528\u6cd5",description:"source-map\u662f\u4ec0\u4e48?",date:"2021-12-04T00:00:00.000Z",formattedDate:"2021\u5e7412\u67084\u65e5",tags:[{label:"Webpack",permalink:"/blog/tags/webpack"}],readingTime:3.89,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"Webpack\u4e2d\u7684source-map\u3001oneOf\u3001\u7f13\u5b58\u7684\u6838\u5fc3\u7528\u6cd5",date:"2021-12-04T00:00:00.000Z",author:"Justin",top:!1,cover:!1,categories:"Webpack",tags:["Webpack"]},prevItem:{title:"Webpack\u4e2d\u7684tree shaking\u4e0ecode split\u7684\u6838\u5fc3\u7528\u6cd5",permalink:"/blog/Webpack\u4e2d\u7684tree shaking\u4e0ecode split\u7684\u6838\u5fc3\u7528\u6cd5"},nextItem:{title:"LeetCode\u2014\u2014\u5728\u6392\u5e8f\u6570\u7ec4\u4e2d\u67e5\u627e\u5143\u7d20\u7684\u7b2c\u4e00\u4e2a\u548c\u6700\u540e\u4e00\u4e2a\u4f4d\u7f6e\uff08\u4e8c\u5206\u67e5\u627e\u6838\u5fc3\u6a21\u677f\uff09",permalink:"/blog/LeetCode\u2014\u2014\u5728\u6392\u5e8f\u6570\u7ec4\u4e2d\u67e5\u627e\u5143\u7d20\u7684\u7b2c\u4e00\u4e2a\u548c\u6700\u540e\u4e00\u4e2a\u4f4d\u7f6e\uff08\u4e8c\u5206\u67e5\u627e\u6838\u5fc3\u6a21\u677f\uff09"}},u={authorsImageUrls:[void 0]},c=[{value:"source-map\u662f\u4ec0\u4e48?",id:"source-map\u662f\u4ec0\u4e48",level:2},{value:"\u8bbe\u7f6esource-map\u7684\u65b9\u6cd5",id:"\u8bbe\u7f6esource-map\u7684\u65b9\u6cd5",level:3},{value:"\u9009\u62e9\u7c7b\u578b",id:"\u9009\u62e9\u7c7b\u578b",level:3},{value:"oneOf\u662f\u4ec0\u4e48\uff1f",id:"oneof\u662f\u4ec0\u4e48",level:2},{value:"oneOf\u5982\u4f55\u4f7f\u7528\uff1f",id:"oneof\u5982\u4f55\u4f7f\u7528",level:3},{value:"\u7f13\u5b58",id:"\u7f13\u5b58",level:2},{value:"babel-loader\u5f00\u542f\u7f13\u5b58",id:"babel-loader\u5f00\u542f\u7f13\u5b58",level:3},{value:"\u6587\u4ef6\u8d44\u6e90\u7f13\u5b58",id:"\u6587\u4ef6\u8d44\u6e90\u7f13\u5b58",level:3},{value:"hash\u914d\u7f6e",id:"hash\u914d\u7f6e",level:4},{value:"contenthash(\u63a8\u8350\u4f7f\u7528)",id:"contenthash\u63a8\u8350\u4f7f\u7528",level:4}],p={toc:c};function i(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"source-map\u662f\u4ec0\u4e48"},"source-map\u662f\u4ec0\u4e48?"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"source-map\u662f\u4e00\u79cd\u63d0\u4f9b\u6784\u5efa\u540e\u4ee3\u7801\u5230\u6e90\u4ee3\u7801\u7684\u6620\u5c04\u6280\u672f\uff0c\u53ef\u4ee5\u6839\u636e\u8fd9\u4e2a\u6620\u5c04\u6765\u8ffd\u8e2a\u6e90\u4ee3\u7801\u7684\u9519\u8bef\u3002")),(0,o.kt)("h3",{id:"\u8bbe\u7f6esource-map\u7684\u65b9\u6cd5"},"\u8bbe\u7f6esource-map\u7684\u65b9\u6cd5"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6211\u4eec\u53ea\u9700\u5728webpack.config.js\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u914d\u7f6e\u9879\u5373\u53ef\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'devtool: "source-map"\n')),(0,o.kt)("h3",{id:"\u9009\u62e9\u7c7b\u578b"},"\u9009\u62e9\u7c7b\u578b"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u73af\u5883\uff1aeval-source-map"),(0,o.kt)("li",{parentName:"ul"},"\u751f\u4ea7\u73af\u5883\uff1asource-map")),(0,o.kt)("h2",{id:"oneof\u662f\u4ec0\u4e48"},"oneOf\u662f\u4ec0\u4e48\uff1f"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6709\u65f6\u5019\uff0c\u6211\u4eec\u5728webpack\u914d\u7f6e\u4e2d\u5199\u4e86\u5f88\u591a\u7684loader\uff0c\u8fd9\u4e5f\u5c31\u610f\u5473\u7740\uff0c\u4e00\u4e2a\u6587\u4ef6\u8981\u88ab\u591a\u4e2aloader\u8fc7\u6ee4\u4e00\u904d\uff0c\u8fd9\u5728\u6709\u4e9b\u60c5\u51b5\u4e0b\u662f\u5f88\u5197\u4f59\u7684\uff0c\u56e0\u6b64\uff0c\u6211\u4eec\u5e0c\u671b\u53ea\u5339\u914d\u4e00\u4e2aloader\uff0c\u8fd9\u5c31\u662f\u6211\u4eec\u4e3a\u4ec0\u4e48\u9700\u8981oneOf\u7684\u539f\u56e0\u3002")),(0,o.kt)("h3",{id:"oneof\u5982\u4f55\u4f7f\u7528"},"oneOf\u5982\u4f55\u4f7f\u7528\uff1f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module: {\n    rules: [\n      {\n        // \u8fdb\u884cEslint\u68c0\u67e5\n        test: /\\.js$/,\n        // \u6392\u9664\u5176\u4ed6\u6587\u4ef6\n        exclude: /node_modules/,\n        // \u4f18\u5148\u6267\u884c\n        enforce: 'pre',\n        loader: 'eslint-loader',\n        options: {\n          // \u8bbe\u7f6e\u81ea\u52a8\u4fee\u590d\n          fix: true\n        }\n      },\n      {\n        oneOf: [\n          {\n            // \u5904\u7406CSS\n            test: /\\.css$/,\n            use: [...commonCssLoader]\n          },\n          {\n            test: /\\.less$/,\n            use: [...commonCssLoader, 'less-loader']\n          },\n          \n          {\n            // \u8fdb\u884cjs\u517c\u5bb9\u6027\u7684\u5904\u7406\n            test: /\\.js$/,\n            exclude: /node_modules/,\n            loader: 'babel-loader',\n            options: {\n              presets: [\n                ['@babel/preset-env',\n                  {\n                    useBuiltIns: 'usage',\n                    corejs: { version: 3 },\n                    targets: {\n                      chrome: '60',\n                      firefox: '50'\n                    }\n                  }\n                ]\n              ]\n            }\n          },\n          {\n            // \u6253\u5305\u56fe\u7247\u8d44\u6e90\n            test: /\\.(jpg|png|gif)/,\n            loader: 'url-loader',\n            options: {\n              limit: 8 * 1024,\n              name: '[hash:10].[ext]',\n              outputPath: 'imgs',\n              esModule: false\n            }\n          },\n          {\n            // \u5904\u7406HTML\u4e2d\u7684\u56fe\u7247\u8d44\u6e90\n            test: /\\.html$/,\n            loader: 'html-loader'\n          },\n          {\n            // \u5904\u7406\u5176\u4ed6\u8d44\u6e90\n            exclude: /\\.(js|css|less|html|jpg|png|gif)/,\n            loader: 'file-loader',\n            options: {\n              outputPath: 'media'\n            }\n          }\n        ]\n      }\n    ]\n  }\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff1a\u88aboneOf\u5305\u88f9\u7684\u6240\u6709loader\u4e2d\uff0c\u4e0d\u80fd\u5b58\u5728\u4e24\u4e2a\u914d\u7f6e\u5904\u7406\u540c\u4e00\u79cd\u7c7b\u578b\u7684\u6587\u4ef6\uff0c\u5982\u679c\u5b58\u5728\u8fd9\u6837\u7684\u4e24\u4e2aloader\uff0c\u53ef\u4ee5\u5c06\u5176\u4e2d\u4e00\u4e2a\u63d0\u53d6\u51fa\u6765\uff0c\u5c31\u50cf\u4e0a\u9762\u7684\u90a3\u79cd\u5904\u7406\u65b9\u5f0f\u4e00\u6837\u3002")),(0,o.kt)("h2",{id:"\u7f13\u5b58"},"\u7f13\u5b58"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4e4b\u6240\u4ee5\u9700\u8981\u7f13\u5b58\u7684\u539f\u56e0\u5728\u4e8e\uff0c\u4ee5babel\u4e3a\u4f8b\uff0c\u5bf9\u4e00\u4e2a\u9879\u76ee\u8fdb\u884c\u7f16\u8bd1\uff0c\u5982\u679c\u6bcf\u6b21\u90fd\u662f\u5bf9\u6574\u4e2a\u9879\u76ee\u8fdb\u884c\u91cd\u65b0\u7f16\u8bd1\u6bd4\u8f83\u6d6a\u8d39\u8d44\u6e90\uff0c\u56e0\u4e3a\u6211\u4eec\u53ef\u80fd\u53ea\u662f\u5bf9\u9879\u76ee\u4e2d\u8fdb\u884c\u4e86\u7ec6\u5fae\u7684\u6539\u52a8\uff0c\u8fd9\u5c31\u662f\u4e3a\u4ec0\u4e48\u9700\u8981\u7f13\u5b58\u7684\u539f\u56e0\u3002")),(0,o.kt)("h3",{id:"babel-loader\u5f00\u542f\u7f13\u5b58"},"babel-loader\u5f00\u542f\u7f13\u5b58"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u53ea\u9700\u7ed9babel-loader\u7684options\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u914d\u7f6e\u9879\u5373\u53ef\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n    // \u8fdb\u884cjs\u517c\u5bb9\u6027\u7684\u5904\u7406\n    test: /\\.js$/,\n    exclude: /node_modules/,\n    loader: 'babel-loader',\n    options: {\n      presets: [\n        ['@babel/preset-env',\n          {\n            useBuiltIns: 'usage',\n            corejs: { version: 3 },\n            targets: {\n              chrome: '60',\n              firefox: '50'\n            }\n          }\n        ]\n      ],\n      cacheDirectory: true\n    }\n  }\n")),(0,o.kt)("h3",{id:"\u6587\u4ef6\u8d44\u6e90\u7f13\u5b58"},"\u6587\u4ef6\u8d44\u6e90\u7f13\u5b58"),(0,o.kt)("h4",{id:"hash\u914d\u7f6e"},"hash\u914d\u7f6e"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6bcf\u6b21\u8fdb\u884cwebpack\u6253\u5305\u7684\u65f6\u5019\uff0c\u7ed9\u6587\u4ef6\u751f\u6210\u4e0d\u540c\u7684\u6587\u4ef6\u540d\uff0c\u8fd9\u6837\u9759\u6001\u8d44\u6e90\u7684\u5f15\u5165\u8def\u5f84\u540d\u4e5f\u4f1a\u53d1\u751f\u53d8\u5316\uff0c\u6240\u4ee5\u4e00\u65e6\u8fdb\u884c\u91cd\u65b0\u6253\u5305\uff0c\u5373\u4f7f\u662f\u5f3a\u7f13\u5b58\uff0c\u4e5f\u80fd\u591f\u611f\u77e5\u5230\u6700\u65b0\u7684\u53d8\u5316\uff0c\u56e0\u4e3a\u6587\u4ef6\u540d\u53d8\u5566\u3002")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4fee\u6539js\u6587\u4ef6\u7684\u54c8\u5e0c\u540e\u7f00")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"output: {\n    filename: 'js/built.[hash:10].js',\n    path: resolve(__dirname, 'build')\n  }\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4fee\u6539CSS\u6587\u4ef6\u7684\u54c8\u5e0c\u540e\u7f00")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"new MiniCssExtractPlugin({\n  filename: 'css/built.[hash:10].css'\n})\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u4e0a\u9762\u7684\u8fd9\u79cd\u65b9\u5f0f\u5b58\u5728\u4e00\u4e2a\u7f3a\u70b9\uff0c\u5c31\u662f\u4e00\u65e6\u91cd\u65b0\u6253\u5305\uff0c\u4f1a\u5bfc\u81f4\u6240\u6709\u7684\u7f13\u5b58\u5931\u6548\uff0c\u5373\u4f7f\u53ea\u6539\u52a8\u4e86\u4e00\u4e2a\u6587\u4ef6\u3002")),(0,o.kt)("h4",{id:"contenthash\u63a8\u8350\u4f7f\u7528"},"contenthash(\u63a8\u8350\u4f7f\u7528)"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"contenthash\u6839\u636e\u6587\u4ef6\u7684\u5185\u5bb9\u751f\u6210hash\u503c\uff0c\u4e0d\u540c\u6587\u4ef6hash\u503c\u4e00\u5b9a\u4e0d\u4e00\u6837\u3002")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5904\u7406JS\u6587\u4ef6")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"output: {\n    filename: 'js/built.[contenthash:10].js',\n    path: resolve(__dirname, 'build')\n  }\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5904\u7406CSS\u6587\u4ef6")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"new MiniCssExtractPlugin({\n  filename: 'css/built.[contenthash:10].css'\n})\n")))}i.isMDXComponent=!0}}]);