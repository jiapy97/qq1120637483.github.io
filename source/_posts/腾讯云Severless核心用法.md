---
title: 腾讯云Severless核心用法
date: 2021-10-25
author: Justin
top: false
cover: false
categories: Serverless
tags:
  - Serverless
---
## 什么是Serverless？
>Serverless又名无服务器，所谓无服务器并非是不需要依赖和依靠服务器等资源，而是开发者再也不用过多考虑服务器的问题，可以更专注在产品代码上，狭义的Serverless是由Faas和Baas组成的。

### 传统的高并发架构
>在传统的高并发架构下，我们需要配置很多东西，首先，我们需要采购服务器，然后对服务器进行配置，还要将这些服务器分为web服务器和数据库服务器，配置负载均衡，配置主从数据库，配置静态服务器等等，然后是部署程序，部署之后还需要不断的进行维护，这就是传统的高并发架构。

### Serverless下的高并发架构
>在Serverless下使用者不用关心需要购买几台服务器，也不需要关心哪些作为web服务器，哪些作为数据库服务器，也不需要关心搭建环境、部署项目。开发者只需要将项目部署到serverless服务器上即可。并且，Serverless向用户提供了日志服务、监控服务、以及高并发等。

## Egg.js项目结构图

![image.png](https://img-blog.csdnimg.cn/img_convert/54d060e461988526ddbafa6c7edba1de.png)

## 腾讯云Severless
1. 安装serverless

```shell
npm install -g serverless
```

2. 查看版本

```shell
serverless -v
```

### 快速生成一个项目
1. 在空文件夹下执行serverless命令

```shell
serverless
```

2. 选择express模板

3. 选择部署在云端


### 部署到云上
```shell
serverless deploy
```

### 创建云函数
>选择自定义创建，环境选择Node12,然后点击完成即可。

* 在浏览器地址栏中访问我们的云函数

>配置触发管理，创建触发器，触发方式选择API网关触发，选择新建API服务，请求类型选择Any,发布，免鉴权，取消集成响应。如果没有取消集成响应是不能够直接返回字符串的。

![image.png](https://img-blog.csdnimg.cn/img_convert/eb821f876233145e4d9d9c8b0afc2a74.png)

>通过下面的访问路径即可实现访问。

![image.png](https://img-blog.csdnimg.cn/img_convert/d474b1460e0436655a8ff44254486581.png)

>修改云函数并点击部署后，即可重新访问目标URL。

>云函数中的层管理有什么用？云函数中的层管理可以上传我们的node_modules，然后配置云函数选择这个环境。

>云函数要想要修改自定义域名可以通过触发管理中的API服务名中的自定义域名进行配置。

### WebCli中通过应用模板创建云函数
1. 点击云产品，进入Serverless应用中心
2. 新建应用
3. 选择express框架模板

### Vscode中使用插件创建编写云函数
>安装下面的插件

![image.png](https://img-blog.csdnimg.cn/img_convert/3caaab9e1c219b75a22d28299742b328.png)

>初次登陆的时候，可以按照插件说明上的网址访问id和key.

### Serverless Cli创建编写应用
>安装方法请看上文的 ## 腾讯云Severless

>安装完成之后，在项目中使用下面的代码即可使用serverless

```shell
serverless
```

>当我们更新完代码之后，可以通过下面的代码将本地代码同步到云端。

```shell
serverless deploy
```

>本地进行调试可以通过下面的方式

```shell
nodemon app.js
```

>可以在配置中设置不上传node_modules这个文件夹，但是需要在云函数中开启自动安装依赖功能。

### 配置静态资源
```js
app.use(express.static(__dirname  + "/public"))
```

>可以参考这篇文章的经验[因缺少绝对路径引发的部署血案](https://juejin.cn/post/7009109979403649038)

## 使用Serverless部署KOA项目
>在KOA中我们如果希望部署后直接开启API网关触发器，需要将下面的这行代码给注释掉。

![image.png](https://img-blog.csdnimg.cn/img_convert/27081f7dc7a1532a1c8dfd0d8ae6c2c2.png)


### 配置静态资源服务
1. 安装相关依赖

```shell 
npm install koa-static
```

2. 引入工具包

```js
const static = require('koa-static')
```

3. 配置中间件

```js
app.use(static(path.join(__dirname,'public')))
```

## 使用Serverless部署Egg.js
>基本部署方法和上述方式一致，下文不再进行赘述。
>本地测试egg

```shell
npm run dev
```

## 使用Serverless部署Vue.js
>通过Serverless模板创建的Vue项目默认使用的是Vue2的项目，如果想要使用Vue3的项目，只需要在已有项目中添加serverless.yml配置文件，然后执行下面的操作即可。

```shell
npm i
npm run serve
npm run build
serverless deploy
```

>腾讯云serverless会将静态文件存放在COS上，下面是对应的COS名称。存储桶中的代码也就是我们dist文件夹中的代码。

![image.png](https://img-blog.csdnimg.cn/img_convert/c91fcfa96fb18ae7ea5c7d5f56a2e65c.png)


## Serverless中使用Node操作Mysql、Mongodb数据库
### 腾讯云Mysql与云函数构建私有网络
>首先Mysql和云函数应该在同一个区域，比如都在上海六区，然后在同一个私有网络下面，才可以实现局域网访问，否则只能实现公网访问。

### Serverless中操作Mongodb数据库
>方法和上文提到的操作Mysql类似，本文不再进行赘述。

## Serverless将本地文件上传到腾讯云COS上。

>把本地资源同步到服务器。

1. 根据下面的文档进行安装依赖。

* [对象存储SDK指南](https://cloud.tencent.com/document/product/436/8629)

2. 在腾讯云上创建一个存储桶，设置为共有读私有写。

>本地代码如下所示。

```js
const fs = require('fs');

// SECRETID 和 SECRETKEY请登录 https://console.cloud.tencent.com/cam/capi 进行查看和管理
var COS = require('cos-nodejs-sdk-v5');
var cos = new COS({
  SecretId: 'xxx',
  SecretKey: 'xxx'
});

// 上传对象
cos.putObject({
  Bucket: 'serverless1test-1301559367', /* 必须 */
  Region: 'ap-beijing',    /* 必须 */
  Key: 'test.png',              /* 必须 */
  StorageClass: 'STANDARD',
  Body: fs.createReadStream('./python.png'), // 上传文件对象
  onProgress: function(progressData) {
      console.log(JSON.stringify(progressData));
  }
}, function(err, data) {
  console.log(err || data);
});
```

## Express在Serverless中实现图片上传到COS中
1. 在app.js中配置body-parser中间件

* [body-parser中间件](https://github.com/expressjs/body-parser)

```js
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
```

2. 在app.js中配置multer中间件
```js
const multer = require('multer');
var storage = multer.memoryStorage()
var upload = multer({ storage: storage })
```

3. 配置路由上传到指定的存储桶中实现图片上传功能
```js
app.post(`/doUpload`, upload.single("img"), (req, res) => {
  var cos = new COS({
    SecretId: 'AKID4xbz6wWNyIM8droUt0qQjkUyBCwPbW9V',
    SecretKey: 'xxx'
  });
  // 上传对象
  cos.putObject({
    Bucket: 'serverless1test-1301559367', /* 必须 */
    Region: 'ap-beijing',    /* 必须 */
    Key: req.file.originalname,              /* 必须 */
    StorageClass: 'STANDARD',
    Body: req.file.buffer, // 上传文件对象
    onProgress: function (progressData) {
      console.log(JSON.stringify(progressData));
      res.send(req.body)
    }
  }, function (err, data) {
    console.log(err || data);
  });
})
```

## Serverless中配置域名访问
1. 找到对应的serverless应用。
2. 找到api网关，点击服务id，点击自定义域名。
3. 进行自定义域名时，域名要指向指定的地址。
4. 配置路径映射

![image.png](https://img-blog.csdnimg.cn/img_convert/9f2dc3fea857b53c8e16cab82751ee86.png)

## Serverless中配置HTTPS访问
>给Serverless对应的应用配置HTTPS访问，只需添加相应的安全证书即可。

## 配置COS自定义域名
>只需通过对应存储桶的自定义域名设置即可。



