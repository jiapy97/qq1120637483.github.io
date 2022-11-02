---
title: Egg.js中间件进行登录鉴权的核心思路
date: 2021-11-13
author: Justin
top: false
cover: false
categories: Egg.js
tags:
  - Egg.js
---

>无论是在实际项目中还是在面试中，只要涉及到项目的问题，注册登录如何验证的问题，总是面试官的宠儿，这一次让我们来系统性的梳理如何完成一次登录的验证。（注意：项目实现的基础是以Egg.js作为后台实现的）

## 第一步：配置中间件

1. 在middleware下创建adminAuth.js文件

* 中间件中需要配置csrf全局变量，让表单post的数据能够正常的到达控制器login.js
* 通过url模块拿到用户不带请求参数的请求路径
* 首先判断session中userinfo是否存在，并且username是否存在，两个条件都满足的时候，才允许继续执行，只要有一个不满足则判断路径是否是涉及到登录的路径，如果是则允许继续进行，这样是为了防止死锁现象的发生，如果不是涉及到登录的路径，则跳转到登录页面，让用户登录。

```js
const url = require("url");

module.exports = (options) => {
  return async function adminAuth(ctx,next) {
    console.log("中间件");
    console.log(ctx.request.url);
    // 配置全局变量
    ctx.state.csrf = ctx.csrf;
    const pathname = url.parse(ctx.request.url).pathname;
    if (ctx.session.userinfo && ctx.session.userinfo.username) {
      await next();
    } else {
      // 没有权限则跳转到登录
      if (pathname === "/admin/login" || pathname === "/admin/doLogin" || pathname === "/admin/login/captcha") {
        await next();        
      } else {
        ctx.redirect("/admin/login");
      }
    }
    // await next();
  }
}
```

2. 在config.default.js中注册中间件

* 设置中间件只拦截路径包含/admin。

```js
  config.middleware = ["adminAuth"];
  config.adminAuth = {
    match: '/admin'
  }
```

## 第二步：使用Sequelize操作数据库
### 数据库结构

* 数据表结构

![image.png](https://img-blog.csdnimg.cn/img_convert/6e088c53dd4c1f86d5a78fc0ede37100.png)

* 安装sequelize插件

```shell
npm install --save egg-sequelize mysql2
```

* 在plugin.js中引入插件

```js
module.exports = {
  // had enabled by egg
  static: {
    enable: true
  },
  ejs: {
    enable: true,
    package: 'egg-view-ejs'
  },
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  }
}
```

* 在config.default.js中配置数据库的基本信息

```js
  config.sequelize = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: "root",
    password: "123456",
    database: 'eggshop',
  };
```

* 在app下新建model文件夹并在这个文件夹下建立admin.js

```js
'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Admin = app.model.define('admin', {
    id: {type: INTEGER,primaryKey: true,autoIncrement: true},
    username: STRING(255),
    password: STRING(32),
    mobile: STRING(32),
    email: STRING(255),
    status: INTEGER(1),
    roleId: INTEGER(11),
    addTime: INTEGER(11),
    isSuper: INTEGER(1),
    lastLogin: INTEGER(11),
  },{
    timestamps: false,
    tableName: 'admin'     
  });

  return Admin;
};
```

## 第三步：处理登录信息
### 将用户的密码进行md5加密
1. 安装md5模块

```shell
npm install md5
```

2. 在服务中封装md5

```js
const md5 = require('md5');
class ToolsService extends Service {
  md5(msg) {
    return md5(msg);
  }
}
```

### 在控制器中处理核心登录逻辑
1. 获取用户输入的用户名、密码、验证码。
2. 首先判断用户输入的验证码和session中存在的验证码是否一致，如果不一致则跳转到登录页面，一致则进行第三步。
3. 通过sequelize框架去数据库中查询该用户名和密码是否存在，如果存在则跳转到管理模块，如果不存在则跳转到登录登录模块。

>注意：服务器存储验证码的时候是用户获取验证码的时候，也就是说用户获取验证码的时候同时将这个验证码存储在了服务器端。



