"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[18545],{3905:function(e,n,t){t.d(n,{Zo:function(){return i},kt:function(){return m}});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},i=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=l,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(k,o(o({ref:n},i),{},{components:t})):r.createElement(k,o({ref:n},i))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:l,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},20637:function(e,n,t){t.r(n),t.d(n,{assets:function(){return i},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=t(87462),l=t(63366),a=(t(67294),t(3905)),o=["components"],c={title:"Webpack\u4e2dexternals\u4e0edll",date:new Date("2021-12-30T00:00:00.000Z"),author:"Justin",top:!1,cover:!1,categories:"webpack",tags:["webpack"]},p=void 0,s={permalink:"/en/Webpack\u4e2dexternals\u4e0edll",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/Webpack\u4e2dexternals\u4e0edll.md",source:"@site/blog/Webpack\u4e2dexternals\u4e0edll.md",title:"Webpack\u4e2dexternals\u4e0edll",description:"externals",date:"2021-12-30T00:00:00.000Z",formattedDate:"December 30, 2021",tags:[{label:"webpack",permalink:"/en/tags/webpack"}],readingTime:1.5733333333333333,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"Webpack\u4e2dexternals\u4e0edll",date:"2021-12-30T00:00:00.000Z",author:"Justin",top:!1,cover:!1,categories:"webpack",tags:["webpack"]},prevItem:{title:"\u8fd9\u4e00\u6b21\uff0c\u5f7b\u5e95\u641e\u61c2ES6\u65b0\u7279\u6027",permalink:"/en/\u8fd9\u4e00\u6b21\uff0c\u5f7b\u5e95\u641e\u61c2ES6\u65b0\u7279\u6027"},nextItem:{title:"\u5e26\u4f60\u4ece\u96f6\u5b66\u4f1a---\u57fa\u4e8eJWT\u7684\u63a5\u53e3\u6743\u9650\u9a8c\u8bc1",permalink:"/en/\u5e26\u4f60\u4ece\u96f6\u5b66\u4f1a---\u57fa\u4e8eJWT\u7684\u63a5\u53e3\u6743\u9650\u9a8c\u8bc1"}},i={authorsImageUrls:[void 0]},u=[{value:"externals",id:"externals",level:2},{value:"\u4e3a\u4ec0\u4e48\u9700\u8981externals?",id:"\u4e3a\u4ec0\u4e48\u9700\u8981externals",level:3},{value:"\u4f7f\u7528externals\u7684\u6b65\u9aa4",id:"\u4f7f\u7528externals\u7684\u6b65\u9aa4",level:3},{value:"dll",id:"dll",level:2},{value:"\u4ec0\u4e48\u662fdll\uff1f\u4e3a\u4ec0\u4e48\u9700\u8981dll?",id:"\u4ec0\u4e48\u662fdll\u4e3a\u4ec0\u4e48\u9700\u8981dll",level:3},{value:"\u5982\u4f55\u5b9e\u73b0dll\u6253\u5305",id:"\u5982\u4f55\u5b9e\u73b0dll\u6253\u5305",level:3}],d={toc:u};function m(e){var n=e.components,t=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"externals"},"externals"),(0,a.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u9700\u8981externals"},"\u4e3a\u4ec0\u4e48\u9700\u8981externals?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6709\u65f6\u5019\u6211\u4eec\u4e0d\u5e0c\u671b\u5c06\u67d0\u4e9b\u5305\u8fdb\u884c\u6253\u5305\uff0c\u800c\u662f\u901a\u8fc7CDN\u94fe\u63a5\u8fdb\u884c\u5f15\u5165\uff0c\u6b64\u65f6\u6211\u4eec\u5c31\u53ef\u4ee5\u7528\u5230externals\u3002")),(0,a.kt)("h3",{id:"\u4f7f\u7528externals\u7684\u6b65\u9aa4"},"\u4f7f\u7528externals\u7684\u6b65\u9aa4"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u518dwebpack.config.js\u4e2d\u6dfb\u52a0\u914d\u7f6e\u9879\u6307\u5b9a\u8981\u5ffd\u7565\u6253\u5305\u7684\u5185\u5bb9")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"  externals: {\n    jquery: 'jQuery'\n  }\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u5728\u9759\u6001\u6587\u4ef6\u4e2d\u901a\u8fc7CDN\u5f15\u5165")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<script src="https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js"><\/script>\n')),(0,a.kt)("h2",{id:"dll"},"dll"),(0,a.kt)("h3",{id:"\u4ec0\u4e48\u662fdll\u4e3a\u4ec0\u4e48\u9700\u8981dll"},"\u4ec0\u4e48\u662fdll\uff1f\u4e3a\u4ec0\u4e48\u9700\u8981dll?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"dll\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u5bf9\u67d0\u4e9b\u5e93\uff08\u7b2c\u4e09\u65b9\u5e93\uff1ajquery\u3001react\u3001vue...\uff09\u7b49\u5e93\u8fdb\u884c\u5355\u72ec\u6253\u5305\u3002\u901a\u8fc7\u63d2\u4ef6\u5f15\u5165\u540e\uff0c\u53ef\u4ee5\u6709\u6548\u907f\u514d\u5bf9\u8fd9\u4e9b\u5305\u7684\u91cd\u590d\u6253\u5305\u3002\u5f53\u8fd0\u884cwebpack\u65f6\uff0c\u9ed8\u8ba4\u67e5\u627ewebpack.config.js\u914d\u7f6e\u6587\u4ef6\uff0c\u9700\u8981\u8fd0\u884c\u4e0b\u9762\u7684\u6307\u4ee4\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"webpack --config webpack.dll.js\n")),(0,a.kt)("h3",{id:"\u5982\u4f55\u5b9e\u73b0dll\u6253\u5305"},"\u5982\u4f55\u5b9e\u73b0dll\u6253\u5305"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728webpack.config.js\u7684\u540c\u540d\u6587\u4ef6\u521b\u5efa\u4e00\u4e2awebpack.dll.js\u6587\u4ef6\uff0c\u5e76\u5728\u5176\u4e2d\u5bf9jquery\u8fdb\u884c\u5355\u72ec\u6253\u5305\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { resolve } = require('path');\nconst webpack = require('webpack');\n\nmodule.exports = {\n  entry: {\n    jquery: ['jquery']\n  },\n  output: {\n    filename: '[name].js',\n    path: resolve(__dirname,'dll'),\n    library: '[name]_[hash]'\n  },\n  plugins: [\n    // \u6253\u5305\u751f\u6210\u4e00\u4e2amanifest.json\u63d0\u4f9b\u548cjquery\u7684\u6620\u5c04\n    new webpack.DllPlugin({\n      name: '[name]_[hash]',\n      path: resolve(__dirname,'dll/manifest.json') // \u8f93\u51fa\u6587\u4ef6\u8def\u5f84\n    })\n  ],\n  mode: 'production'\n}\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u751f\u6210dll\u6587\u4ef6\u5939\u548c\u6307\u5b9a\u6587\u4ef6")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"webpack --config webpack.dll.js\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u5728webpack.config.js\u4e2d\u589e\u52a0\u914d\u7f6e\u9879")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u544a\u8bc9webpack\u54ea\u4e9b\u5e93\u4e0d\u53c2\u4e0e\u6253\u5305\uff0c\u5e76\u4f7f\u7528\u63d2\u4ef6\u5c06dll\u5df2\u7ecf\u6253\u5305\u597d\u7684jquery\u6587\u4ef6\u8fdb\u884c\u5f15\u5165\uff0c\u8fd9\u6837\u4ee5\u540ejquery\u90fd\u4e0d\u9700\u8981\u53c2\u4e0e\u6253\u5305\u4e86\uff0c\u56e0\u4e3a\u5df2\u7ecf\u6253\u5305\u597d\u4e86\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5f15\u5165\u5373\u53ef\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const HtmlWebpackPlugin = require('html-webpack-plugin');\nconst {resolve} = require('path');\nconst webpack = require('webpack');\nconst AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')\n\nmodule.exports = {\n  entry: './src/index.js',\n  output: {\n    filename: 'built.js',\n    path: resolve(__dirname,'build')\n  },\n  module: {\n    rules: [\n\n    ]\n  },\n  plugins: [\n    new HtmlWebpackPlugin({\n      template: './src/index.html'\n    }),\n    // \u544a\u8bc9webpack\u54ea\u4e9b\u5e93\u4e0d\u53c2\u4e0e\u6253\u5305\uff0c\u540c\u65f6\u4f7f\u7528\u7684\u540d\u79f0\u6839\u636emanifest.json\u4e2d\u7684\u6765\n    new webpack.DllReferencePlugin({\n      manifest: resolve(__dirname,'dll/manifest.json')\n    }),\n    // \u5c06\u67d0\u4e2a\u6587\u4ef6\u6253\u5305\u8f93\u51fa\u53bb\uff0c\u5e76\u5728html\u4e2d\u81ea\u52a8\u5f15\u5165\u8be5\u8d44\u6e90\n    new AddAssetHtmlWebpackPlugin({\n      filepath: resolve(__dirname,'dll/jquery.js')\n    })\n  ],\n  mode: 'development'\n}\n")))}m.isMDXComponent=!0}}]);