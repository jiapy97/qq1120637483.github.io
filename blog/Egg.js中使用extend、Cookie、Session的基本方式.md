---
title: Egg.js中使用extend、Cookie、Session的基本方式
date: 2021-10-29
author: Justin
top: false
cover: false
categories: Egg.js
tags:
  - Egg.js
---

## 一、初始化
1. 项目初始化

```js
egg-init spider --type=simple
```

2. 安装依赖

```js
npm i
```

3. 运行测试项目

```shell
npm run dev
```

4. 配置模板引擎

```shell
npm i egg-view-ejs 
```

5. 找到app/config/plugin.js

```js
exports.ejs = {
    enable: true,
    package: 'egg-view-ejs'
};
```

6. 找到app/config/config.default.js

```js
config.view = {
    mapping: {
        '.html': 'ejs'
    }
}
```

7. 配置公共的URL地址（config/config.default.js）

```js
config.api = "http://www.phonegap100.com/"
```

## 二、抓取新闻接口实现新闻列表与详情
1. 定义新闻列表和新闻详情路由

```js
router.get('/news', controller.news.index);
router.get('/newscontent', controller.news.content);
```

2. 在service中获取新闻列表的数据和新闻详情的数据

```js
async index() {
    let list = await this.service.news.getNewsList();
    await this.ctx.render('news',{
      list
    })
  }
async content() {
    const aid = this.ctx.query.aid;
    console.log(aid);

    const detail = await this.service.news.getNewsContent(aid);

    await this.ctx.render('newscontent',{
      detail:detail[0]
    })
  }
```

>记住：渲染的时候，一定要使用await，因为这是异步渲染，不然可能会报404错误。

3. 在view视图层中定义模板引擎

```html
  <h2>新闻列表</h2>
  <ul>
    <%for (let i = 0; i < list.length; i++) {%>
      <li><a href="/newscontent?aid=<%=list[i].aid%>"><%=list[i].title%></a></li>
    <%}%>
  </ul>
```

## 三、Egg.js框架拓展extend
### 通过Application
1. 在app文件夹下新建文件夹extend
2. 在extend文件夹下面创建一个application.js，在这个文件中暴露的函数，均可以通过this.app.xxx来进行调用,但是在application.js内部this就是app。

```js
module.exports = {
  foo(param) {
    // this 就是 app 对象，在其中可以调用 app 上的其他方法，或访问属性
    console.log(this);
  },
};
```

### 通过Context
1. 在extend文件夹下创建context.js
2. 在context.js中定义想要拓展的函数

```js
module.exports = {
  getHost(param) {
    // this 就是 ctx 对象，在其中可以调用 ctx 上的其他方法，或访问属性
    return this.request.header.host; 
  },
};
```

3. 调用拓展的函数

```js
console.log(this.ctx.getHost());
```

>更多其他的拓展方式请访问官网：[Egg拓展](https://eggjs.org/zh-cn/basics/extend.html#context)

### 通过拓展的形式将时间戳转换为时间字符串
1. 安装相关模块并引入

```js
const sd = require('silly-datetime')

module.exports = {
  formatTime (param) {
    // this 是 helper 对象，在其中可以调用其他 helper 方法
    // this.ctx => context 对象
    // this.app => application 对象
    return sd.format(new Date(param*1000),'YYYY-MM-DD HH:mm')
  },
};
```

2. 在模板引擎中使用

```js
<%=helper.formatTime(list[i].dateline)%>
```

3. 在控制器中使用

>通过this.ctx.helper.xxx()

```js
console.log(this.ctx.helper.sendHello());
```

### 通过Request
1. 在extend文件夹下面创建request.js

```js
module.exports = {
  foo() {
    return this.header.host
  },
};
```

2. 在控制器中调用

```js
console.log(this.ctx.request.foo());
```

## 四、禁止指定IP的访问
### Egg调用中间件的时机
>匹配路由前或匹配路由完成时。

### 中间件的定义与配置、传值
1. 在app文件夹下新建一个文件夹middleware文件夹，并在下面新建一个printdate.js

```js
module.exports = (options,app) => {

  console.log(options);
  // 返回一个异步的方法
  return async function printDate(ctx,next) {
    console.log(new Date());
    await next();
  }
}
```

2. 在config/config.default.js

```js
  config.middleware = ['printdate'];

  config.printdate = {
    aaa: '123'
  }
```

### 禁止指定ip访问
1. 在app/middleware中新建一个forbidip.js

```js
module.exports = (options,app) => {
  // 返回一个异步的方法
  return async function printDate(ctx,next) {
    // 要屏蔽的IP
    const forbidIp = "127.0.0.1";
    // 获取客户端的ip
    if (ctx.request.ip === forbidIp) {
      ctx.status = 403;
      ctx.body = "您的IP已经被屏蔽"
    } else {
      await next();
    }

  }
}
```

2. 在config/config.default.js中注册这个中间件

```js
config.middleware = ['printdate','forbidip'];
```

## 五、POST提交数据并通过中间件配置CSRF
1. 模板引擎中定义好csrf

```js
  <form action="/add?_csrf=<%=csrf%>" method="post">
    用户名：<input type="text" name="username"><br><br>
    密码：<input type="password" name="password"><br><br>
    <button type="submit">提交</button>
  </form>
```

2. 在app/middleware下创建一个auth.js

```js
module.exports = (option,app) => {
  return async function auth(ctx,next) {
    
    // 设置模板全局变量，之所以要这样做，是为了让模板引擎能够直接获取到csrf，而不用每次都传递csrf
    ctx.state.csrf = ctx.csrf;
    await next();
  }
}
```

## 六、Egg.js中使用Cookie
1. 设置cookie的方法

```js
this.ctx.cookies.set('name','zhangsan');
```

2. 获取cookie的方法

```js
this.ctx.cookies.get('name');
```

>下面介绍下，如何在一个控制器中设置cookie，在另一个控制器中获取cookie

* 设置cookie的控制器

```js
async index() {
    const { ctx } = this;
    // 设置cookie
    const username = this.ctx.cookies.set('username','zhangsan');
    // this.ctx.csrf : 用户访问这个页面的时候，生成一个密钥
    await ctx.render('home')
  }
```

* 获取cookie的控制器

```js
async index() {
    const username = this.ctx.cookies.get('username')
    await this.ctx.render('news', {
      username
    })
  }
```

3. 设置cookie的缓存有效时长

```js
const username = this.ctx.cookies.set('username','zhangsan',{
      maxAge: 1000*3600*24
    });
```

4. 设置参数

```js
const username = this.ctx.cookies.set('username','zhangsan',{
  maxAge: 1000*3600*24,
  httpOnly: true,
  signed: true,     //对cookie进行签名，防止用户修改cookie
  encrypt: true,         // 如果对cookie进行加密，获取的时候需要解密
});
```
5. 清除cookie

```js
this.ctx.cookies.set('username',null)
```

## Egg.js中使用Seesion
>cookie是保存在客户端的浏览器上，而Session则是保存在服务器上。当浏览器访问服务器并发送第一次请求的时候，服务端会创建一个session对象，生成一个类似与key,value的键值对，然后将key(cookie)返回到浏览器，浏览器下次再访问的时候，携带key(cookie)，找到对应的session(value)。浏览器首次访问目标服务器的时候，目标服务器的响应头中会包含一个set-cookie字段，浏览器第二次访问将携带cookie进行访问。


1. 在控制器中设置session

```js
async setSession() {
    this.ctx.session.username = "余波";
  }
```

2. 在控制器中获取session

```js
async index() {
    // 拿到session，并渲染到news页面中
    const username = this.ctx.session.username;
    await this.ctx.render('news', {
      username
    })
  }
```

3. 设置session的过期时间（也可以在config中配置session）

```js
this.ctx.session.maxAge = 5000;
```

4. 在config.default.js中配置session

```js
config.session = {
    maxAge: 1000*5
}
```




