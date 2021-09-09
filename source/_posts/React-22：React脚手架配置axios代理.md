---
title: React-22：React脚手架配置axios代理
date: 2021-04-16
categories: React
tags: 
- React
---
## 1：给项目安装axios
```
npm install axios
```
## 2：导入axios工具包
```
import axios from 'axios';
```
## 3：给React脚手架添加中间代理实现跨域（方法一）
* 在项目的package.json文件中添加下面的一句话

![](https://img-blog.csdnimg.cn/img_convert/87d564072fba939285871702f26e9329.png)

* 将请求修改为React脚手架对应的端口

![](https://img-blog.csdnimg.cn/img_convert/9d076dc9838d439cd31060ee2fbf3ac2.png)

* 注意事项：并不是配置了代理，所有的请求都会通过代理，而是本地端口没有的请求才会询问代理端口。

## 4：给React脚手架实现跨域请求（方法二）
* 配置多个代理
1. 在src文件中添加setupProxy.js文件
2. setupProxy.js中写的是common.js语法
3. setupProxy.js中的文件内容

```js
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        proxy('/api1',{
            target: 'http://localhost:5000',
            changeOrigin: true,
            pathRewrite: {'^/api1':''}
        }),
        proxy('/api2',{
            target: 'http://localhost:5001',
            changeOrigin: true,
            pathRewrite: {'^/api2':''}
        })
    )
}
```

4. 修改axios请求路径
![](https://img-blog.csdnimg.cn/img_convert/8d52c6ef82f13c6508663282bf1d64ce.png)