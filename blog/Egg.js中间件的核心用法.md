---
title: Egg.js中间件的核心用法
date: 2021-10-30
author: Justin
top: false
cover: false
categories: Egg.js
tags:
  - Egg.js
---

## 一、在应用中使用中间件
1. 在app/middleware文件夹下新建一个auth2.js

```js
module.exports = (option,app) => {

  return async function auth2(ctx,next) {

    console.log(new Date);

    // 下面的这个语句很重要，如果没有下面这个语句，线程执行到这里就要终止了
    await next();
  }
}
```

2. 注册中间件

>在config.default.js中进行注册。

```js
config.middleware = ['auth2'];
```

3. 给中间件传参

```js
config.middleware = ['auth2'];
```

4. 中间件读取传过来的参数

```js
return async function auth2(ctx,next) {
    console.log(option);

    console.log(new Date);

    // 下面的这个语句很重要，如果没有下面这个语句，线程执行到这里就要终止了
    await next();
  }
```

## 二、在router.js中使用中间件
>本节的目标是给指定路由配置中间件。下面的这种方式，不需要再config.default.js中注册路由了。

1. 定义中间件的方式和上文的定义方式一致。
2. 在router.js中获取中间件，并指定哪些路由能够触发。

```js
module.exports = app => {
  const { router, controller } = app;
  const auth = app.middleware.auth();
  router.get('/',auth, controller.home.setSession);
  router.get('/news', controller.news.index);
  router.get('/deletecookie',controller.home.deletecookie)
};
```

## 三、Egg.js中使用KOA的中间件
>下文我们以egg中使用koa-jsonp这个中间件为例进行系统性阐述。

1. 安装koa-jsonp

```shell
npm install koa-jsonp
```

2. 在app/middleware中新建一个jsonp.js

```js
// 配置KOA的中间件

const jsonp = require('koa-jsonp');

module.exports = jsonp;
```

3. 注册中间件(在config.default.js)

```js
config.middleware = ['jsonp'];
```

4. 请求指定路径

```js
http://127.0.0.1:7001/shop?callback=666
```

![image.png](https://img-blog.csdnimg.cn/img_convert/825fdeccb69c8329c5a327bae582a113.png)

>下文继续讲一个koa-compress的中间件，这个中间件能够开启服务器Gzip压缩的功能。

1. 安装koa-compress

```
npm install koa-compress
```

2. 在app/middleware下新建一个compress.js

```js
module.exports = require('koa-compress');
```

3. 注册中间件

```js
config.middleware = ['jsonp','compress'];
```

4. 配置中间件的参数

```js
config.compress = {
    threshold: 1024   // 设置压缩门限值
}
```

>此时访问指定页面的文件都是经过压缩的文件了。

>如果是非标准的中间件，中间件的定义方式如下所示：

```js
// 下面演示非标准中间件的使用

const middleWare = require('xxx');

module.exports = (option,app) => {
  return middleWare(options1,options2)
}
```

## 四、中间件的通用配置
>无论是引用层加载的中间件还是框架再带的中间件，都支持下面三个通用的配置项。

1. enable：控制中间件是否开启。
2. match：设置只有符合某些规则的请求才会经过这个中间件。
3. ignore：设置符合某些规则的请求不经过这个中间件。

* 禁用某个中间件

```js
config.compress = {
    enable: false,
    threshold: 10   // 设置压缩门限值
  }
```

* 设置让某个路由能匹配中间件

```js
config.auth = {
    match: '/news',
    title: 'auth 你好'
  }
```

>如果想忽略某个路由，可以使用下面的写法

```js
config.auth = {
    ignore: '/news',
    title: 'auth 你好'
  }
```

>如果要处理的路由情况比较复杂，我们还可以使用下面的match方法

```js
config.auth = {
    match(ctx) {
      if (ctx.request.url === '/shop' || ctx.request.url === "/news") {
        return true;
      }
      return false
    },
    title: 'auth 你好'
  }
```

## 五、设置未经授权的用户无法访问指定页面
1. 在app/middleware/ 下创建指定中间件

```js
module.exports = (option,app) => {
  return async function auth(ctx,next) {
    if (ctx.session && ctx.session.userinfo) {
      await next()
    } else {
      if (ctx.request.url === '/') {
        await next();
      } else {
        ctx.redirect('/');
      }
    }
  }
}
```

2. 注册中间件

```js
  config.middleware = ['auth','compress','adminAuth'];
```
3. 让指定路径的路由触发中间件

```js
  config.adminAuth = {
    match: '/admin/user'
  }
```
