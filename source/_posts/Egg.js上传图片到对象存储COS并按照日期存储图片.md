---
title: Egg.js上传图片到对象存储COS并按照日期存储图片
date: 2021-11-27
author: Justin
top: false
cover: false
categories: Egg.js
tags:
  - Egg.js
---

>上传到COS上的参考文档可以参考官方的文档：https://cloud.tencent.com/document/product/436/8629#.E4.B8.8A.E4.BC.A0.E5.AF.B9.E8.B1.A1

## 上传图片到腾讯云的COS上
1. 控制器中写法

```js
async doAdd() {

    const { ctx } = this;
    const body = ctx.request.body;
    const file = ctx.request.files[0];
    const source = fs.createReadStream(file.filepath);
    if (file) {
      await this.ctx.service.tools.uploadCos(file.filename,source);
    }
    ctx.body = {
      body, file
    }
  }
  
```

2. 在service中定义好要上传的函数

```js
async uploadCos(filename, body) {
    var cos = new COS({
      SecretId: 'AKID4xbz6wWNyIM8droUt0qQjkUyBCwPbW9V',
      SecretKey: '7xWoqb7OSHpxxx'
    });
    return new Promise((resolve,reject) => {
      cos.putObject({
        Bucket: 'eggshop-1301559367', /* 必须 */
        Region: 'ap-beijing',    /* 必须 */
        Key: filename,              /* 必须 */
        StorageClass: 'STANDARD',
        Body: body, // 上传文件对象
        onProgress: function (progressData) {
          console.log(JSON.stringify(progressData));
        }
      }, function (err, data) {
        // console.log(err || data);
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    })
  }
```

## 上传文件根据时间进行文件夹分类
1. 在service中定义好上传到COS上的文件路径

```js
  // 上传到COS上的路径格式
  getCosUploadFile(filename) {
    // 获取当前的日期
    let dir = sd.format(new Date(), 'YYYYMMDD');
    // 生成文件名称
    let unix = this.getUnixTime();
    let saveDir = dir + "/" + unix + path.extname(filename)
    return saveDir;
  }
```

2. 在service中定义好上传到COS上的函数

```js
  async uploadCos(filename, body) {
    var cos = new COS({
      SecretId: 'AKID4xbz6wWNyIM8droUt0qQjkUyBCwPbW9V',
      SecretKey: '7xWoqb7OSHp65nEOGsCF1WkhNltDG2bs'
    });
    return new Promise((resolve,reject) => {
      cos.putObject({
        Bucket: 'eggshop-1301559367', /* 必须 */
        Region: 'ap-beijing',    /* 必须 */
        Key: filename,              /* 必须 */
        StorageClass: 'STANDARD',
        Body: body, // 上传文件对象
        onProgress: function (progressData) {
          console.log(JSON.stringify(progressData));
        }
      }, function (err, data) {
        // console.log(err || data);
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    })
  }
```

3. 在控制器中的写法

```js
  async doAdd() {

    const { ctx } = this;
    const body = ctx.request.body;
    const file = ctx.request.files[0];
    if (file) {
      const source = fs.createReadStream(file.filepath);
      let filename = this.ctx.service.tools.getCosUploadFile(file.filename);

      await this.ctx.service.tools.uploadCos(filename,source);
    }
    ctx.body = {
      body, file
    }
  }
```

>注意：如果上传到COS上的图片路径中包含小数点，是因为获取时间戳的时间需要向上进行取整。

```js
getUnixTime() {
    let obj = new Date();
    return Math.ceil(obj.getTime() / 1000);
}
```

## 将本地数据库上传到云上
1. 将数据库的结构和数据存储到本地

![image.png](https://img-blog.csdnimg.cn/img_convert/c10868130b35c81c15897bd4914eb5a8.png)

2. 建立一个云数据库并通过Navicat进行连接后，通过运行SQL文件导入我们第一步创建的SQL文件。

![image.png](https://img-blog.csdnimg.cn/img_convert/2b619ed4d209602fbfcd0e9dab3d86d8.png)

3. 修改数据库配置

```js
  config.sequelize = {
    dialect: 'mysql',
    host: 'rm-2zenx6363vhj8129ryo.mysql.rds.aliyuncs.com',
    port: 3306,
    username: "xxx",
    password: "xxx",
    database: 'eggshop',
  };
```


