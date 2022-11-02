---
title: Egg.js中配置跨域与路由分组
date: 2021-12-14
author: Justin
top: false
cover: false
categories: Egg.js
tags:
  - Egg.js
---

## 一、跨域配置
>egg.js中实现跨域主要是通过egg-cors这个插件，更多信息可以通过npm官网去查看这个插件的用法。

1. 安装插件

```shell
cnpm i egg-cors --save
```

2. 在plugin.js中配置

```js
  cors: {
    enable: true,
    package: 'egg-cors'
  }
```

3. 在config.default.js中配置

```js
config.cors = {
    origin: '*',
    allowMethods: 'GET,PUT,POST,DELETE'
  }

  config.security = {
    csrf: {
      ignore: ctx => {
        if (ctx.request.url === `/${config.adminPath}/product/doUpload`) {
          return true;
        } else {
          return false;
        }
      }
    },
    domainWhiteList: ['http://localhost:8081']
  }
```

## 二、设置前端API路由POST数据无需进行CSRF验证
>只需在config.default.js中的csrf属性配置中进行配置即可。

```js
  config.security = {
    csrf: {
      ignore: ctx => {
        if (ctx.request.url === `/${config.adminPath}/product/doUpload`) {
          return true;
        } else if (ctx.request.url.indexOf("/api") != -1) {
          return true
        } else {
          return false;
        }
      }
    },
    domainWhiteList: ['http://localhost:8081']
  }
```

## 三、获取数据库中指定字段的数据
>主要是通过attributes这个字段来进行获取。

```js
let result = await this.ctx.model.ProductCate.findAll({
  include: {
    model: this.ctx.model.Product,
    attributes: ['id','cid','title','price','imgUrl','sort']
  }
});
```

>如果想要将获取到的数据按照某种顺序进行排列，可以通过order属性进行配置。

```js
let result = await this.ctx.model.ProductCate.findAll({
  include: {
    model: this.ctx.model.Product,
    attributes: ['id','cid','title','price','imgUrl','sort']
  },
  order: [
    ['sort','DESC'],
    [this.ctx.model.Product,'sort','DESC']
  ]
});
```


