---
title: Egg.js中复用静态页面逻辑、局部刷新架构、生成验证码
date: 2021-11-17
author: Justin
top: false
cover: false
categories: Egg.js
tags:
  - Egg.js
---

## 配置ejs模板引擎
* 安装插件

```js
npm i egg-view-js
```

* 在plugin.js中添加下列代码

```js
module.exports = {
  // had enabled by egg
  static: {
    enable: true
  },
  ejs: {
    enable: true,
    package: 'egg-view-ejs'
  }
}
```

* 在config.default.js中添加下列代码

```js
const userConfig = {
    view: {
      mapping: {
        '.html': 'ejs'
      }
    }
  }
```


## 对视图进行分组
>将所有的页面都放在view文件夹中是不合理的，所以可以将view文件夹进行分组。

![image.png](https://img-blog.csdnimg.cn/img_convert/c82c6aa49894d3979cf2c47ee3873a4d.png)

## 复用静态逻辑
1. 把需要复用的静态页面抽离到一个文件夹中。

2. 在需要复用的地方，通过下面的方式进行引入。

```js
<% include ../public/page_header.html %>
```

## 配置局部刷新架构
>之所以要配置局部刷新架构，就是希望当我们点击某个链接的时候，能够保存原有的状态，例如浏览器导航栏的状态。

>配置局部刷新的核心在于跳转路由的时候，通过target指向iframe。

```js
<li class="list-group-item"> <a href="/admin/role/add" target="rightMain">增加角色</a></li>
<iframe name="rightMain" src="/admin/welcome" frameborder="0" width="100%" height="500"></iframe>
```

## 基于Serverless的Egg.js后台管理系统配置Session
>腾讯云的Serverless云函数如果30分钟内没有访问的话就会销毁容器，所以如果session要保存30分钟以上的话，就需要把session存储到数据库中。

### 配置session

* 在config.default.js

```js
  config.session = {
    key: 'session_id_test',
    maxAge: 30*60*1000;
    httpOnly: true,
    encrypt: true,
    renew: true
  }
```

* 在控制器中设置session

```js
this.ctx.session.username = "张三";
```

* 在控制器中读取session

```js
this.ctx.body = this.ctx.session.username;
```


## 生成图形验证码
1. 安装依赖

```shell
npm install --save svg-captcha
```

2. 在控制器中进行下面的定义

```js
const svgCaptcha = require('svg-captcha');
  // 验证码模块
  async captcha() {
    const captcha = svgCaptcha.create({
      size: 4,
      fontSize: 50,
      width: 100,
      height: 40,
      background: "#cc9966"
    });
    console.log(captcha.text);
    this.ctx.response.type = 'image/svg+xml';
    this.ctx.body = captcha.data;
  }
```

3. 静态页面获取验证码

>静态验证码获取验证码是通过访问路由，让控制器返回图片来实现的。

```html
dd>验　证　码：<input id="verify" type="text" name="verify">
<img id="verify_img" src="/admin/login/captcha" title="看不清？点击刷新" onclick="javascript:this.src='/admin/login/captcha?mt='+Math.random()">
</dd>
```

4. 将验证码保存在session中

```js
this.ctx.session.code = captcha.text;
```

>如果你想复用上述的验证码逻辑，可以通过下面的方式进行封装。

* 首先在app文件夹下创建service文件夹，并在service文件夹下创建tools.js

```js
'use strict';

const Service = require('egg').Service;
const svgCaptcha = require('svg-captcha');
class ToolsService extends Service {
  async getCaptcha() {
    const captcha = svgCaptcha.create({
      size: 4,
      fontSize: 50,
      width: 100,
      height: 40,
      background: "#cc9966"
    });
    return captcha;
  }
}

module.exports = ToolsService;
```

* 在控制器中调用即可

```js
async captcha() {
    let captcha = await this.service.tools.getCaptcha();
    console.log(captcha.text);
    // 将验证码保存在session中
    this.ctx.session.code = captcha.text;
    this.ctx.response.type = 'image/svg+xml';
    this.ctx.body = captcha.data;
  }
```