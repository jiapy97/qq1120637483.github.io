"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[42695],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),g=a,d=m["".concat(i,".").concat(g)]||m[g]||p[g]||l;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44895:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={title:"Egg\u4e2d\u4f7f\u7528Sequelize ORM\u6846\u67b6\u64cd\u4f5cMySQL--\u589e\u5220\u6539\u67e5",date:new Date("2021-11-11T00:00:00.000Z"),author:"Justin",top:!1,cover:!1,categories:"Egg.js",tags:["Egg.js"]},o=void 0,s={permalink:"/blog/Egg\u4e2d\u4f7f\u7528Sequelize ORM\u6846\u67b6\u64cd\u4f5cMySQL--\u589e\u5220\u6539\u67e5",editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/blog/Egg\u4e2d\u4f7f\u7528Sequelize ORM\u6846\u67b6\u64cd\u4f5cMySQL--\u589e\u5220\u6539\u67e5.md",source:"@site/blog/Egg\u4e2d\u4f7f\u7528Sequelize ORM\u6846\u67b6\u64cd\u4f5cMySQL--\u589e\u5220\u6539\u67e5.md",title:"Egg\u4e2d\u4f7f\u7528Sequelize ORM\u6846\u67b6\u64cd\u4f5cMySQL--\u589e\u5220\u6539\u67e5",description:"\u4e00\u3001\u4ec0\u4e48\u662fSequelize\uff1f",date:"2021-11-11T00:00:00.000Z",formattedDate:"2021\u5e7411\u670811\u65e5",tags:[{label:"Egg.js",permalink:"/blog/tags/egg-js"}],readingTime:2.385,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"Egg\u4e2d\u4f7f\u7528Sequelize ORM\u6846\u67b6\u64cd\u4f5cMySQL--\u589e\u5220\u6539\u67e5",date:"2021-11-11T00:00:00.000Z",author:"Justin",top:!1,cover:!1,categories:"Egg.js",tags:["Egg.js"]},prevItem:{title:"LeetCode\u2014\u2014K\u4e2a\u4e00\u7ec4\u7ffb\u8f6c\u94fe\u8868\uff08\u4e09\u6307\u9488\uff09",permalink:"/blog/LeetCode\u2014\u2014K\u4e2a\u4e00\u7ec4\u7ffb\u8f6c\u94fe\u8868\uff08\u4e09\u6307\u9488\uff09"},nextItem:{title:"LeetCode\u2014\u2014Excel\u8868\u5217\u540d\u79f0\uff08\u8fdb\u5236\u8f6c\u6362\uff09",permalink:"/blog/LeetCode\u2014\u2014Excel\u8868\u5217\u540d\u79f0\uff08\u8fdb\u5236\u8f6c\u6362\uff09"}},i={authorsImageUrls:[void 0]},u=[{value:"\u4e00\u3001\u4ec0\u4e48\u662fSequelize\uff1f",id:"\u4e00\u4ec0\u4e48\u662fsequelize",level:2},{value:"\u4e8c\u3001\u4f7f\u7528Sequelize\u64cd\u4f5cMySQL\u6570\u636e\u5e93",id:"\u4e8c\u4f7f\u7528sequelize\u64cd\u4f5cmysql\u6570\u636e\u5e93",level:2},{value:"\u4e09\u3001Sequelize\u64cd\u4f5cMySQL\u5b9e\u73b0\u6570\u636e\u7684\u589e\u5220\u6539\u67e5",id:"\u4e09sequelize\u64cd\u4f5cmysql\u5b9e\u73b0\u6570\u636e\u7684\u589e\u5220\u6539\u67e5",level:2},{value:"\u589e\u52a0\u6570\u636e",id:"\u589e\u52a0\u6570\u636e",level:3},{value:"\u67e5\u8be2\u6570\u636e",id:"\u67e5\u8be2\u6570\u636e",level:3},{value:"\u4fee\u6539\u6570\u636e",id:"\u4fee\u6539\u6570\u636e",level:3},{value:"\u5220\u9664\u6570\u636e",id:"\u5220\u9664\u6570\u636e",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4e00\u4ec0\u4e48\u662fsequelize"},"\u4e00\u3001\u4ec0\u4e48\u662fSequelize\uff1f"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Sequelize\u662f\u4e00\u4e2a\u57fa\u4e8ePromise\u7684Node.js ORM\uff0c\u5b83\u5177\u6709\u5f3a\u5927\u7684\u4e8b\u52a1\u652f\u6301\uff0c\u5173\u8054\u5173\u7cfb\uff0c\u9884\u8bfb\u548c\u5ef6\u8fdf\u52a0\u8f7d\uff0c\u8bfb\u53d6\u590d\u5236\u7b49\u529f\u80fd\u3002")),(0,a.kt)("h2",{id:"\u4e8c\u4f7f\u7528sequelize\u64cd\u4f5cmysql\u6570\u636e\u5e93"},"\u4e8c\u3001\u4f7f\u7528Sequelize\u64cd\u4f5cMySQL\u6570\u636e\u5e93"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u66f4\u591a\u64cd\u4f5c\u65b9\u6cd5\uff0c\u8bf7\u53c2\u8003\u5b98\u65b9\u6587\u6863\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://eggjs.org/zh-cn/tutorials/sequelize.html"},"https://eggjs.org/zh-cn/tutorials/sequelize.html"))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5b89\u88c5egg-sequelize\u4ee5\u53camysql2")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728config/plugin.js\u4e2d\u5f15\u5165egg-sequelize\u63d2\u4ef6"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"exports.sequelize = {\n    enable: true,\n    package: 'egg-sequelize'\n};\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u5728config/config.default.js\u4e2d\u6dfb\u52a0\u4e0b\u9762\u7684\u914d\u7f6e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"config.sequelize = {\n    dialect: 'mysql',\n    host: '127.0.0.1',\n    port: 3306,\n    database: 'bank',\n    username: 'root',\n    password: \"123456\"\n  };\n")),(0,a.kt)("h2",{id:"\u4e09sequelize\u64cd\u4f5cmysql\u5b9e\u73b0\u6570\u636e\u7684\u589e\u5220\u6539\u67e5"},"\u4e09\u3001Sequelize\u64cd\u4f5cMySQL\u5b9e\u73b0\u6570\u636e\u7684\u589e\u5220\u6539\u67e5"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728app\u4e0b\u65b0\u5efa\u6587\u4ef6\u5939model\uff0c\u5e76\u5728model\u4e2d\u521b\u5efa\u6587\u4ef6user.js")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5982\u679cdefine\u4e2d\u7684\u662fuser\uff0c\u6211\u4eec\u5b9a\u4e49\u7684\u6570\u636e\u8868\u8981\u662fusers\uff0c\u4e5f\u5c31\u662f\u8bf4\u9700\u8981\u662f\u590d\u6570\u5f62\u5f0f\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"'use strict';\n\nmodule.exports = app => {\n  const { STRING, INTEGER, DATE } = app.Sequelize;\n\n  const User = app.model.define('user', {\n    id: { type: INTEGER, primaryKey: true, autoIncrement: true },\n    username: STRING(30),\n    age: INTEGER,\n    sex: STRING(30),\n    created_at: DATE,\n    updated_at: DATE,\n  });\n\n  return User;\n};\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u901a\u8fc7Navicat\u53ef\u89c6\u5316\u5de5\u5177\u5efa\u7acb\u4e0b\u9762\u7684\u6570\u636e\u8868\u7ed3\u6784")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/24bfb7648cc587679d94fbe5e428a223.png",alt:"image.png"})),(0,a.kt)("h3",{id:"\u589e\u52a0\u6570\u636e"},"\u589e\u52a0\u6570\u636e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'  // \u589e\u52a0\u6570\u636e\n  async create() {\n    const user = await this.ctx.model.User.create({username: "\u5f20\u4e09",age: 20});\n    this.ctx.body = user;\n  }\n')),(0,a.kt)("h3",{id:"\u67e5\u8be2\u6570\u636e"},"\u67e5\u8be2\u6570\u636e"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u66f4\u591a\u5176\u4ed6\u7684\u67e5\u8be2\u65b9\u6cd5,\u8bf7\u67e5\u770b\u5b98\u65b9\u6587\u6863:",(0,a.kt)("a",{parentName:"p",href:"https://www.sequelize.com.cn/core-concepts/model-querying-finders"},"https://www.sequelize.com.cn/core-concepts/model-querying-finders"))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u67e5\u8be2\u6240\u6709\u6570\u636e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"  // \u67e5\u8be2\u6570\u636e\n  async query() {\n    const userList = await this.ctx.model.User.findAll();\n    this.ctx.body = userList;\n  }\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u67e5\u8be2\u6307\u5b9a\u5b57\u6bb5\u7684\u6570\u636e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u67e5\u8be2\u6307\u5b9a\u5b57\u6bb5\u7684\u6570\u636e\nconst userList = await this.ctx.model.User.findAll({attributes: ['id','username']});\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u5e94\u7528where\u8fdb\u884c\u67e5\u8be2")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const userList = await this.ctx.model.User.findAll({where: {"id": 2}});\n')),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"\u5bf9\u6570\u636e\u8fdb\u884c\u6392\u5e8f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const userList = await this.ctx.model.User.findAll({order: [['id', 'ASC']]});\n")),(0,a.kt)("h3",{id:"\u4fee\u6539\u6570\u636e"},"\u4fee\u6539\u6570\u636e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6839\u636e\u4e3b\u952e\u8fdb\u884c\u4fee\u6539")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'  async update() {\n    // \u6839\u636e\u4e3b\u952e\u4fee\u6539\n    const user = await this.ctx.model.User.findByPk(2);\n    user.update({"username": "\u79e6\u4e8c\u4e16","age": 10});\n    this.ctx.body = "\u4fee\u6539\u6210\u529f"\n  }\n')),(0,a.kt)("h3",{id:"\u5220\u9664\u6570\u636e"},"\u5220\u9664\u6570\u636e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6839\u636e\u4e3b\u952e\u5220\u9664\u67d0\u4e2a\u6570\u636e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'  async delete() {\n    const data = await this.ctx.model.User.findByPk(2);\n    if (!data) {\n      this.ctx.state = 404;\n      return;\n    }\n    data.destroy();\n    this.ctx.body = "\u5220\u9664\u6210\u529f";\n  }\n')))}p.isMDXComponent=!0}}]);