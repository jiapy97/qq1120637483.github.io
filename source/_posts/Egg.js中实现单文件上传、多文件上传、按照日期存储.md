---
title: Egg.js中实现单文件上传、多文件上传、按照日期存储
date: 2021-11-25
author: Justin
top: false
cover: false
categories: Egg.js
tags:
  - Egg.js
---

## 上传功能的实现
1. 将上传表单的类型置为file.

>注意：name属性不可缺少。
```js
<li>菜品图片：<input type="file" name="picUrl" /></li>
```

2. 配置文件上传的模式

```js
  // 配置文件上传的模式
  config.multipart = {
    mode: 'file'
  };
```

3. 配置csrf属性

>enctype属性不可缺少。

```js
 <form action="/<%=adminPath%>/product/doAdd?_csrf=<%=csrf%>" method="post" enctype="multipart/form-data">
```

4. 将路由设置为post

```js
router.post(`/${config.adminPath}/product/doAdd`,controller.admin.product.doAdd);
```

5. 控制器中读取file

```js
  async doAdd() {
    const {ctx} = this;
    const body = ctx.request.body;
    const file = ctx.request.files[0];
    ctx.body = {
      body: body,
      file: file
    }
  }
```

## 将上传的文件保存在指定的位置
1. 安装工具包

```shell
npm i mz mz-modules --save
```

2. 在控制器中引入相关工具包

```js
const path = require('path');
const fs = require('mz/fs');
const pump = require('mz-modules/pump');
```

3. 创建上传到哪个文件夹，这个文件夹要提前创建好(public/upload)

![image.png](https://img-blog.csdnimg.cn/img_convert/572770db0a1536688569ed2028bd9e36.png)

4. 控制器读写逻辑的实现

```js
async doAdd() {
    const {ctx} = this;
    const body = ctx.request.body;
    const file = ctx.request.files[0];
    // 获取文件名称
    const filename = file.filename;
    const targetPath = path.join('app/public/upload',filename);
    // 读取文件
    const source = fs.createReadStream(file.filepath);
    // 创建写入流
    const target = fs.createWriteStream(targetPath);
    try {
      await pump(source,target);
    } finally {
      await ctx.cleanupRequestFiles();
    }
    ctx.body = "写入成功"
  }
```

## 实现多文件上传
1. 静态页面设置如下所示：

![image.png](https://img-blog.csdnimg.cn/img_convert/ca9874f559913ea53823ac2fec620ff8.png)

2. 控制器的核心实现逻辑

```js
  // 实现多文件上传
  async doAdd() {
    const { ctx } = this;
    const body = ctx.request.body;
    const files = ctx.request.files;
    try {
      for (let file of files) {
        const filename = file.filename;
        const targetPath = path.join('app/public/upload', filename);
        // 读取文件
        const source = fs.createReadStream(file.filepath);
        // 创建写入流
        const target = fs.createWriteStream(targetPath);
        await pump(source,target);
      }
    } finally {
      await ctx.cleanupRequestFiles();
    }
    ctx.body = {
      body, files
    }
  }
```

## 以日期文件夹进行分类上传图片
>下面是实现的效果：

![image.png](https://img-blog.csdnimg.cn/img_convert/cca8dfed38552006471675037562c088.png)

1. 在service中引入相关工具包

```js
const sd = require('silly-datetime');
const path = require('path');
const mkdirp = require('mz-modules/mkdirp');
```

2. 在配置文件中定义上传的路径

```js
  // 配置上传图片时的拼接路径
  config.uploadDir = "app/public/upload";
```

3. 在service中定义创建路径和文件夹的函数

```js
  async getUploadFile(filename) {
    // 获取当前的日期
    let day = sd.format(new Date(),'YYYYMMDD');
    // 创建图片的保存路径
    let dir = path.join(this.config.uploadDir,day);
    await mkdirp(dir);

    // 生成文件名称
    let unix = this.getUnixTime();
    let saveDir = path.join(dir,unix + path.extname(filename));
    return saveDir;
  }
```

4. 在控制器中异步调用文件路径

```js
const targetPath = await this.ctx.service.tools.getUploadFile(filename);
```

>下面附录下全部的控制器代码

```js
async doAdd() {
    const { ctx } = this;
    const body = ctx.request.body;
    const files = ctx.request.files;
    try {
      for (let file of files) {
        const filename = file.filename;
        // const targetPath = path.join('app/public/upload', filename);
        const targetPath = await this.ctx.service.tools.getUploadFile(filename);
        // 读取文件
        const source = fs.createReadStream(file.filepath);
        // 创建写入流
        const target = fs.createWriteStream(targetPath);
        await pump(source,target);
      }
    } finally {
      await ctx.cleanupRequestFiles();
    }
    ctx.body = {
      body, files
    }
  }
```

