"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[27440],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=l.createContext({}),c=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return l.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(o,".").concat(m)]||p[m]||d[m]||r;return n?l.createElement(h,i(i({ref:t},u),{},{components:n})):l.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58070:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var l=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],s={title:"\u5728Egg.js\u4e2d\u5b9e\u73b0RBAC\u6743\u9650\u7ba1\u7406",date:new Date("2021-11-21T00:00:00.000Z"),author:"Justin",top:!1,cover:!1,categories:"Egg.js",tags:["Egg.js"]},o=void 0,c={permalink:"/en/\u5728Egg.js\u4e2d\u5b9e\u73b0RBAC\u6743\u9650\u7ba1\u7406",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/\u5728Egg.js\u4e2d\u5b9e\u73b0RBAC\u6743\u9650\u7ba1\u7406.md",source:"@site/blog/\u5728Egg.js\u4e2d\u5b9e\u73b0RBAC\u6743\u9650\u7ba1\u7406.md",title:"\u5728Egg.js\u4e2d\u5b9e\u73b0RBAC\u6743\u9650\u7ba1\u7406",description:"\u4ec0\u4e48\u662fRBAC\uff1f",date:"2021-11-21T00:00:00.000Z",formattedDate:"November 21, 2021",tags:[{label:"Egg.js",permalink:"/en/tags/egg-js"}],readingTime:4.8933333333333335,hasTruncateMarker:!1,authors:[{name:"Justin"}],frontMatter:{title:"\u5728Egg.js\u4e2d\u5b9e\u73b0RBAC\u6743\u9650\u7ba1\u7406",date:"2021-11-21T00:00:00.000Z",author:"Justin",top:!1,cover:!1,categories:"Egg.js",tags:["Egg.js"]},prevItem:{title:"Webpack\u5904\u7406CSS\u3001Less\u3001HTML\u3001\u56fe\u7247\u4e0e\u5176\u4ed6\u8d44\u6e90\u7684\u65b9\u6cd5",permalink:"/en/Webpack\u5904\u7406CSS\u3001Less\u3001HTML\u3001\u56fe\u7247\u4e0e\u5176\u4ed6\u8d44\u6e90\u7684\u65b9\u6cd5"},nextItem:{title:"LeetCode\u2014\u2014\u6bd4\u8f83\u7248\u672c\u53f7\uff08\u5206\u5272-\u53bb\u96f6-\u586b\u96f6-\u6bd4\u8f83\uff09",permalink:"/en/LeetCode\u2014\u2014\u6bd4\u8f83\u7248\u672c\u53f7\uff08\u5206\u5272-\u53bb\u96f6-\u586b\u96f6-\u6bd4\u8f83\uff09"}},u={authorsImageUrls:[void 0]},d=[{value:"\u4ec0\u4e48\u662fRBAC\uff1f",id:"\u4ec0\u4e48\u662frbac",level:2},{value:"RBAC\u6743\u9650\u7ba1\u7406\u6811\u5f62\u56fe",id:"rbac\u6743\u9650\u7ba1\u7406\u6811\u5f62\u56fe",level:2},{value:"\u89d2\u8272\u7ba1\u7406",id:"\u89d2\u8272\u7ba1\u7406",level:2},{value:"\u589e\u52a0\u89d2\u8272",id:"\u589e\u52a0\u89d2\u8272",level:3},{value:"\u7f16\u8f91\u89d2\u8272",id:"\u7f16\u8f91\u89d2\u8272",level:3},{value:"\u8df3\u8f6c\u5230\u7f16\u8f91\u9875\u9762",id:"\u8df3\u8f6c\u5230\u7f16\u8f91\u9875\u9762",level:4},{value:"\u6267\u884c\u7f16\u8f91\u529f\u80fd",id:"\u6267\u884c\u7f16\u8f91\u529f\u80fd",level:4},{value:"\u5220\u9664\u89d2\u8272",id:"\u5220\u9664\u89d2\u8272",level:3},{value:"\u7ba1\u7406\u5458\u6570\u636e\u8868\u4e0e\u89d2\u8272\u8868\u8fdb\u884c\u5173\u8054",id:"\u7ba1\u7406\u5458\u6570\u636e\u8868\u4e0e\u89d2\u8272\u8868\u8fdb\u884c\u5173\u8054",level:2},{value:"\u6743\u9650\u7ba1\u7406",id:"\u6743\u9650\u7ba1\u7406",level:2},{value:"\u6743\u9650\u8868\u7684\u81ea\u5173\u8054",id:"\u6743\u9650\u8868\u7684\u81ea\u5173\u8054",level:3},{value:"\u4fee\u6539\u6743\u9650",id:"\u4fee\u6539\u6743\u9650",level:3},{value:"\u89d2\u8272\u4e0e\u6743\u9650\u8fdb\u884c\u5173\u8054",id:"\u89d2\u8272\u4e0e\u6743\u9650\u8fdb\u884c\u5173\u8054",level:2},{value:"\u8fdb\u5165\u89d2\u8272\u6388\u6743\u754c\u9762\uff0c\u663e\u793a\u8be5\u89d2\u8272\u5df2\u7ecf\u62e5\u6709\u7684\u6743\u9650",id:"\u8fdb\u5165\u89d2\u8272\u6388\u6743\u754c\u9762\u663e\u793a\u8be5\u89d2\u8272\u5df2\u7ecf\u62e5\u6709\u7684\u6743\u9650",level:2},{value:"\u7528\u6237\u6743\u9650\u5224\u65ad",id:"\u7528\u6237\u6743\u9650\u5224\u65ad",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4ec0\u4e48\u662frbac"},"\u4ec0\u4e48\u662fRBAC\uff1f"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"RBAC\u662f\u57fa\u4e8e\u89d2\u8272\u7684\u6743\u9650\u8bbf\u95ee\u63a7\u5236\uff0c\u5728RBAC\u4e2d\uff0c\u6743\u9650\u4e0e\u89d2\u8272\u76f8\u5173\u8054\uff0c\u7528\u6237\u901a\u8fc7\u6210\u4e3a\u9002\u5f53\u89d2\u8272\u7684\u6210\u5458\u800c\u5f97\u5230\u8fd9\u4e9b\u89d2\u8272\u7684\u6743\u9650\uff0c\u4e5f\u5c31\u662f\u8bf4\u6743\u9650\u662f\u548c\u89d2\u8272\u7ed1\u5b9a\u5728\u4e00\u8d77\u7684\u3002")),(0,r.kt)("h2",{id:"rbac\u6743\u9650\u7ba1\u7406\u6811\u5f62\u56fe"},"RBAC\u6743\u9650\u7ba1\u7406\u6811\u5f62\u56fe"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/bde90ef7781e5550894e6263062eae38.png",alt:"image.png"})),(0,r.kt)("h2",{id:"\u89d2\u8272\u7ba1\u7406"},"\u89d2\u8272\u7ba1\u7406"),(0,r.kt)("h3",{id:"\u589e\u52a0\u89d2\u8272"},"\u589e\u52a0\u89d2\u8272"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9759\u6001\u9875\u9762\u4e2d\u901a\u8fc7post\u8fdb\u884c\u63d0\u4ea4\u7684\u65f6\u5019\uff0c\u9700\u8981\u914d\u7f6ecsrf")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<input type="hidden" name="_csrf" value="<%=csrf%>" />\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u589e\u52a0\u89d2\u8272\u7684\u63a7\u5236\u5668\u4e2d\u9996\u5148\u83b7\u53d6\u5230\u8bf7\u6c42\u7684\u89d2\u8272\u540d\uff0c\u5982\u679c\u89d2\u8272\u540d\u4e3a\u7a7a\uff0c\u5219\u6e32\u67d3\u57fa\u7c7b\u63a7\u5236\u5668\u4e2d\u7684\u9519\u8bef\u63d0\u793a\uff0c\u5982\u679c\u4e0d\u4e3a\u7a7a\uff0c\u5219\u901a\u8fc7sequelize\u4e2d\u7684model\u6765\u64cd\u4f5c\u6570\u636e\u5e93\uff0c\u5e76\u5c06\u6307\u5b9a\u5185\u5bb9\u6dfb\u52a0\u5230\u6570\u636e\u5e93\u4e2d\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'  async doAdd() {\n    const title = this.ctx.request.body.title;\n    if (title != \'\') {\n      await this.ctx.model.Role.create({\n        title,\n        description: this.ctx.request.body.description,\n        status: 1,\n        addTime: this.service.tools.getUnixTime()\n      })\n      await this.success("\u589e\u52a0\u89d2\u8272\u6210\u529f", `/${this.config.adminPath}/role`)\n    } else {\n      await this.error("\u89d2\u8272\u540d\u4e0d\u80fd\u4e3a\u7a7a", `/${this.config.adminPath}/role/add`)\n    }\n  }\n')),(0,r.kt)("h3",{id:"\u7f16\u8f91\u89d2\u8272"},"\u7f16\u8f91\u89d2\u8272"),(0,r.kt)("h4",{id:"\u8df3\u8f6c\u5230\u7f16\u8f91\u9875\u9762"},"\u8df3\u8f6c\u5230\u7f16\u8f91\u9875\u9762"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e3a\u4e86\u9632\u6b62\u524d\u7aef\u8bf7\u6c42\u5230\u9519\u8bef\u7684id\uff0c\u9700\u8981\u901a\u8fc7\u5f02\u5e38\u5904\u7406\u7684\u65b9\u5f0f\uff0c\u8ba9\u9519\u8bef\u7684\u8bf7\u6c42\u8df3\u8f6c\u5230\u57fa\u7c7b\u63a7\u5236\u5668\u4e2d\u7684\u9519\u8bef\u63d0\u793a\u9875\u9762\uff0c\u5982\u679c\u8bf7\u6c42\u6b63\u5e38\uff0c\u5219\u67e5\u8be2\u8bf7\u6c42id\uff0c\u7136\u540e\u6e32\u67d3\u5230\u7f16\u8f91\u7684\u9875\u9762\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  // \u8df3\u8f6c\u7f16\u8f91\u9875\u9762\n  async edit() {\n    try {\n      const id = this.ctx.request.query.id;\n      let result = await this.ctx.model.Role.findAll({\n        where: {\n          id\n        }\n      })\n      console.log(result);\n      await this.ctx.render('admin/role/edit', {\n        list: result[0]\n      });\n    } catch (error) {\n      await this.error(\"\u975e\u6cd5\u8bf7\u6c42\", `/${this.config.adminPath}/role`)\n    }\n  }\n")),(0,r.kt)("h4",{id:"\u6267\u884c\u7f16\u8f91\u529f\u80fd"},"\u6267\u884c\u7f16\u8f91\u529f\u80fd"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u9996\u5148\u83b7\u53d6\u5230post\u8bf7\u6c42\u7684id\uff0c\u7136\u540e\u6839\u636e\u8fd9\u4e2aid\u5230\u6570\u636e\u5e93\u4e2d\u53bb\u67e5\u8be2\uff0c\u7136\u540e\u5224\u65ad\u662f\u5426\u67e5\u8be2\u5230\uff0c\u5982\u679c\u6ca1\u6709\u67e5\u8be2\u5230\u5219\u62a5\u9519\uff0c\u67e5\u8be2\u5230\u4e86\u5219\u66f4\u65b0\u6570\u636e\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'  // \u6267\u884c\u7f16\u8f91\u529f\u80fd\n  async doEdit() {\n    let id = this.ctx.request.body.id;\n    let role = await this.ctx.model.Role.findByPk(id);\n    if (!role) {\n      await this.error("\u975e\u6cd5\u8bf7\u6c42", `/${this.config.adminPath}/role/edit?id=${id}`)\n      return\n    }\n    await role.update(this.ctx.request.body);\n    await this.success("\u4fee\u6539\u6570\u636e\u6210\u529f", `/${this.config.adminPath}/role`);\n    this.ctx.body = "\u4fee\u6539\u5df2\u88ab\u6267\u884c"\n  }\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5728\u7f16\u8f91\u89d2\u8272\u7684\u65f6\u5019\uff0c\u9759\u6001\u9875\u9762\u4f20\u9012id\u7684\u65f6\u5019\u53ef\u4ee5\u901a\u8fc7\u9690\u85cf\u8868\u5355\u7684\u5f62\u5f0f\u6765\u8fdb\u884c\u4f20\u9012\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<input type="hidden" name="id" value="<%=list.id%>">\n')),(0,r.kt)("h3",{id:"\u5220\u9664\u89d2\u8272"},"\u5220\u9664\u89d2\u8272"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u9996\u5148\u83b7\u53d6\u5230\u8981\u5220\u9664\u7684id\uff0c\u7136\u540e\u6839\u636e\u4e3b\u952e\u53bb\u67e5\u8be2\u8fd9\u4e2a\u89d2\u8272\uff0c\u5982\u679c\u6ca1\u6709\u67e5\u5230\u5219\u62a5\u9519\uff0c\u67e5\u5230\u7684\u8bdd\u5219\u5220\u9664\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'  // \u5220\u9664\u89d2\u8272\u529f\u80fd\u7684\u5b9e\u73b0\n  async delete() {\n    let id = this.ctx.request.query.id;\n    let role = await this.ctx.model.Role.findByPk(id);\n    if (!role) {\n      await this.error("\u975e\u6cd5\u8bf7\u6c42", `/${this.config.adminPath}/role`);\n      return;\n    }\n    await role.destroy();\n    await this.success("\u5220\u9664\u6570\u636e\u6210\u529f", `/${this.config.adminPath}/role`);\n  }\n')),(0,r.kt)("h2",{id:"\u7ba1\u7406\u5458\u6570\u636e\u8868\u4e0e\u89d2\u8272\u8868\u8fdb\u884c\u5173\u8054"},"\u7ba1\u7406\u5458\u6570\u636e\u8868\u4e0e\u89d2\u8272\u8868\u8fdb\u884c\u5173\u8054"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u9996\u5148\uff0c\u6211\u4eec\u8981\u660e\u786e\u7ba1\u7406\u5458\u6570\u636e\u8868\u548c\u89d2\u8272\u8868\u662f\u901a\u8fc7\u54ea\u4e00\u4e2a\u5b57\u6bb5\u8fdb\u884c\u5173\u8054\u7684\uff0c\u662f\u901a\u8fc7\u89d2\u8272id\u8fdb\u884c\u5173\u8054\u7684\uff0c\u6240\u4ee5\uff0c\u6211\u4eec\u9996\u5148\u5728admin\u7684model\u4e2d\u901a\u8fc7belongsTo\u8fdb\u884c\u5173\u8054\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"model\u4e0b\u7684admin.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  Admin.associate = function() {\n    app.model.Admin.belongsTo(app.model.Role,{foreignKey: 'roleId'})\n  }\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u63a7\u5236\u5668\u4e2d\u8fdb\u884c\u5173\u8054\u67e5\u8be2\u7684\u65b9\u5f0f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let result = await this.ctx.model.Admin.findAll({\n      include: {model: this.ctx.model.Role}\n    });\n")),(0,r.kt)("h2",{id:"\u6743\u9650\u7ba1\u7406"},"\u6743\u9650\u7ba1\u7406"),(0,r.kt)("h3",{id:"\u6743\u9650\u8868\u7684\u81ea\u5173\u8054"},"\u6743\u9650\u8868\u7684\u81ea\u5173\u8054"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e4b\u6240\u4ee5\u8981\u8fdb\u884c\u81ea\u5173\u8054\u662f\u56e0\u4e3a\uff0c\u4e00\u4e2a\u83dc\u5355\u6216\u8005\u6a21\u5757\u5982\u679c\u5c5e\u4e8e\u4e00\u4e2a\u9876\u7ea7\u6a21\u5757\u7684\u8bdd\uff0c\u9876\u7ea7\u6a21\u5757\u7684id\u548c\u5176\u5b50\u9879\u7684module_id\u662f\u4e00\u81f4\u7684\uff0c\u8fd9\u4e00\u70b9\u53ef\u4ee5\u4ece\u4e0b\u9762\u7684\u6570\u636e\u8868\u4e2d\u53ef\u4ee5\u770b\u51fa\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/bfecd5ac5a0054df9005ee5ea94fb066.png",alt:"image.png"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5728access.js\u4e2d\u5b9e\u73b0\u4e0b\u9762\u7684\u529f\u80fd\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  // \u8fdb\u884c\u6570\u636e\u8868\u7684\u81ea\u5173\u8054\n  Access.associate = function() {\n    app.model.Access.hasMany(app.model.Access,{foreignKey: 'moduleId'});\n  }\n")),(0,r.kt)("h3",{id:"\u4fee\u6539\u6743\u9650"},"\u4fee\u6539\u6743\u9650"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'  async edit() {\n    // \u4fee\u6539\u6743\u9650\n    let id = this.ctx.request.query.id;\n    // console.log(id);\n    let accessResult = await this.ctx.model.Access.findAll({\n      where: {\n        id\n      }\n    });\n    // console.log(accessResult[0]);\n    // \u83b7\u53d6\u9876\u7ea7\u6a21\u5757\n    let accessList = await this.ctx.model.Access.findAll({\n      where: {moduleId: 0}\n    });\n\n    await this.ctx.render("admin/access/edit",{\n      access: accessResult[0],\n      accessList\n    })\n  }\n')),(0,r.kt)("h2",{id:"\u89d2\u8272\u4e0e\u6743\u9650\u8fdb\u884c\u5173\u8054"},"\u89d2\u8272\u4e0e\u6743\u9650\u8fdb\u884c\u5173\u8054"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u89d2\u8272\u4e0e\u6743\u9650\u8fdb\u884c\u5173\u8054\u4e3b\u8981\u662f\u901a\u8fc7\u4e00\u4e2a\u4e2d\u95f4\u6570\u636e\u8868\u6765\u8fdb\u884c\u5173\u8054\uff0c\u4e0b\u9762\u662f\u8fd9\u4e2a\u6570\u636e\u8868\u7684\u7ed3\u6784\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/bbfbafd71bfe896e5fd9c2a1731bc4dd.png",alt:"image.png"})),(0,r.kt)("h2",{id:"\u8fdb\u5165\u89d2\u8272\u6388\u6743\u754c\u9762\u663e\u793a\u8be5\u89d2\u8272\u5df2\u7ecf\u62e5\u6709\u7684\u6743\u9650"},"\u8fdb\u5165\u89d2\u8272\u6388\u6743\u754c\u9762\uff0c\u663e\u793a\u8be5\u89d2\u8272\u5df2\u7ecf\u62e5\u6709\u7684\u6743\u9650"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8fdb\u5165\u663e\u793a\u6388\u6743\u9875\u9762\u7684\u63a7\u5236\u5668\u3002")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u83b7\u53d6\u8981\u6388\u6743\u7684\u89d2\u8272ID\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u83b7\u5f97\u6240\u6709\u7684\u6743\u9650\u5217\u8868\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u4e00\u4e2a\u4e34\u65f6\u6570\u7ec4\u5e76\u627e\u5230\u7b2c\u4e00\u6b65\u89d2\u8272id\u5bf9\u5e94\u7684\u6743\u9650\uff0c\u5e76\u5c06\u5176\u6743\u9650id\u6dfb\u52a0\u5230\u4e34\u65f6\u6570\u7ec4\u4e2d\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5c06\u6240\u6709\u6743\u9650\u6570\u7ec4\u901a\u8fc7\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32\u540e\u518d\u8f6c\u6362\u4e3aJSON\uff0c\u7136\u540e\u901a\u8fc7\u4e24\u5c42\u5faa\u73af\u5c06\u5176\u6dfb\u52a0\u6807\u8bb0\u540e\u518d\u8fdb\u884c\u6e32\u67d3\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  // \u6388\u6743\n  async auth() {\n    // \u83b7\u53d6\u8981\u7ed9\u54ea\u4e2aid\u7684\u89d2\u8272\u8fdb\u884c\u6388\u6743\n    let roleId = this.ctx.request.query.id;\n    let allAuthResult = await this.ctx.model.Access.findAll({\n      where: {moduleId: 0},\n      include: {model: this.ctx.model.Access}\n    });\n    let tempArr = [];\n    let roleAuthResult = await this.ctx.model.RoleAccess.findAll({where: {roleId}});\n\n    for (let v of roleAuthResult) {\n      tempArr.push(v.accessId);\n    }\n\n    allAuthResult = JSON.parse(JSON.stringify(allAuthResult));\n\n    for (let i = 0; i < allAuthResult.length; i++) {\n      if (tempArr.indexOf(allAuthResult[i].id) != -1) {\n        allAuthResult[i].checked = true;\n      }\n      for (let j = 0; j < allAuthResult[i].accesses.length; j++) {\n        if (tempArr.indexOf(allAuthResult[i].accesses[j].id) != -1) {\n          allAuthResult[i].accesses[j].checked = true;\n        }\n      }\n    }\n\n    // this.ctx.body = allAuthResult;\n\n    await this.ctx.render('admin/role/auth',{\n      authList: allAuthResult,\n      roleId\n    });\n  }\n")),(0,r.kt)("h2",{id:"\u7528\u6237\u6743\u9650\u5224\u65ad"},"\u7528\u6237\u6743\u9650\u5224\u65ad"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5224\u65ad\u5f53\u524d\u767b\u5f55\u7528\u6237\u7684\u6743\u9650\uff0c\u9632\u6b62\u7528\u6237\u8bbf\u95ee\u6ca1\u6709\u6388\u6743\u7684\u9875\u9762\u3002")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5728service\u4e2d\u5b9a\u4e49\u51fd\u6570\u6765\u5224\u65ad\u7528\u6237\u8bf7\u6c42\u7684URL\u662f\u5426\u6709\u6743\u9650\u8bbf\u95ee\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u4e00\u4e2a\u53ef\u4ee5\u5ffd\u7565\u7684URL\u6570\u7ec4\uff0c\u5728\u8fd9\u4e2a\u6570\u7ec4\u4e2d\u7684\u8bf7\u6c42\u90fd\u662f\u76f4\u63a5\u5141\u8bb8\u6240\u6709\u7528\u6237\u8bbf\u95ee\u7684\uff0c\u6bd4\u5982\u9000\u51fa\u767b\u5f55\uff0c\u5982\u679c\u662f\u8d85\u7ea7\u7ba1\u7406\u5458\u6216\u8005\u8bf7\u6c42URL\u5728\u4e0a\u8ff0\u7684\u6570\u7ec4\u4e2d\uff0c\u76f4\u63a5\u8fd4\u56detrue\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u83b7\u53d6\u89d2\u8272id\u5bf9\u5e94\u7684\u6240\u6709\u6743\u9650\uff0c\u7136\u540e\u53bb\u6743\u9650\u8868\u4e2d\u67e5\u8be2\u5f53\u524d\u8bf7\u6c42URL\u5bf9\u5e94\u7684id\uff0c\u5982\u679c\u5728\u4e0a\u8ff0\u7684\u6570\u7ec4\u4e2d\uff0c\u5219\u8fd4\u56detrue\uff0c\u53cd\u4e4b\u8fd4\u56detrue\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"class AdminService extends Service {\n  async checkAuth() {\n    let roleId = this.ctx.session.userinfo.roleId;\n    let isSuper = this.ctx.session.userinfo.isSuper;\n    let adminPath = this.config.adminPath;\n    let pathname = this.ctx.request.url;\n    pathname = pathname.split(\"?\")[0];\n\n    // \u5ffd\u7565\u6743\u9650\u5224\u65ad\u7684\u5730\u5740\n    \n    if (this.config.ignoreUrl.indexOf(pathname) != -1 || isSuper === 1) {\n      return true;\n    }\n    let roleAccessArr = [];\n    let roleAuthResult = await this.ctx.model.RoleAccess.findAll({\n      where: {roleId}\n    });\n    for (let i = 0; i < roleAuthResult.length; i++) {\n      roleAccessArr.push(roleAuthResult[i].accessId);\n    }\n\n    // \u83b7\u53d6\u5f53\u524d\u8bbf\u95ee\u7684URL\uff0c\u5bf9\u5e94\u7684\u6743\u9650ID\n    let accessUrl = pathname.replace(`/${adminPath}/`,'');\n    let accessUrlResult = await this.ctx.model.Access.findAll({\n      where: {url: accessUrl}\n    });\n    if (accessUrlResult.length) {\n      if (roleAccessArr.indexOf(accessUrlResult[0].id) != -1) {\n        return true;\n      }\n      return false;\n    }\n    return false;\n\n  }\n}\n")))}m.isMDXComponent=!0}}]);