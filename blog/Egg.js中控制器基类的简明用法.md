---
title: Egg.js中控制器基类的简明用法
date: 2021-11-02
author: Justin
top: false
cover: false
categories: Egg.js
tags:
  - Egg.js
---

## 一、指定时间后跳转到指定页面
>通过meta标签

```js
<meta http-equiv="refresh" content="3;url=/">
```

## 二、控制器基类BaseController
>可以通过自定义Controller基类的方式封装应用中常用的方法。

1. 在app文件夹下新建文件夹core,并在其中新建base.js

```js
'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
  async success() {
    await this.ctx.render('success')
  }
}

module.exports = BaseController;
```

2. 需要使用基类方法的控制器修改控制器继承来源

```js
'use strict';

const BaseController = require('../core/base.js');

class UserController extends BaseController {
  async doLogin() {
    console.log(this.ctx.request.body);
    await this.success();
  }
}

module.exports = UserController;
```

3. 封装的方法已经在this上了

```js
await this.success();
```


