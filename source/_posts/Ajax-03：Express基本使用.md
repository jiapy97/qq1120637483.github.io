---
title: Ajax-03：Express基本使用
date: 2021-03-21
categories: Ajax
tags: 
- Ajax
---
## express的安装步骤
1. npm init --yes
2. npm i express

## express监听端口的步骤
```js
// 1. 引入express
const express = require('express');

// 2. 创建应用对象
const app = express();

// 3. 创建路由规则
// request是对请求报文的封装，response是对请求报文的一个封装
app.get('/',(request,response) => {
    // 设置相应
    response.send("Hello,Express框架！")
});

// 4. 监听端口启动服务
app.listen(8000,() => {
    console.log("服务已经启动，正在监听8000端口......");
})
```
