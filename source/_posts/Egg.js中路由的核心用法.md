---
title: Egg.js中路由的核心用法
date: 2021-11-01
author: Justin
top: false
cover: false
categories: Egg.js
tags:
  - Egg.js
---

## 一、路由的几种写法
1. 一般写法

```js
router.get('/news', controller.news.index);
```

2. 带有中间件的写法

```js
const auth = app.middleware.auth();
router.get('/news', auth,controller.news.index);
```

3. 包含名字的路由写法

>相当于给路由起一个名字，直接访问/news还是正常的。

```js
router.get('新闻','/news', controller.news.index);
```

## 二、路由重定向
### 外部重定向
>在控制器中写出下面的代码。

```js
this.ctx.redirect('/news')
```

### 内部重定向
>访问/news跳转到/shop页面。

```js
router.redirect('/news','/shop',302)
```

## 三、路由分组（路由映射）
>之所以要进行路由分组是因为，如果一个项目中包含太多路由，会给问题的排查带来很大的困难，因此可以采用将同一类的路由归为一个文件，然后对外暴露，这种方式就是路由分组。

1. 在app下新建一个routers文件夹，然后在该文件夹下建立类似下面的文件。

* admin.js
```js
module.exports = app => {
  const { router, controller } = app;
  router.get('/admin/user',controller.admin.user.index)
};
```

2. 在routers.js文件中通过下面的方式进行调用。

```js
require('./routers/admin')(app);
```


