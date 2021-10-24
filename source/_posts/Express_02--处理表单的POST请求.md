---
title: Express_02--处理表单的POST请求
date: 2021-10-24
author: Justin
top: false
cover: false
categories: Express
tags:
  - Express
---

## express处理表单的post请求
>需要我们注意的是express内置了获取get请求体的API(req.query)，但是并没有内置获取post请求体的API，所以需要我们手动的去配置中间件。

### 配置body-parser中间件
#### 1. 安装
```shell
npm install body-parser
```
#### 2. 导入并配置
```js
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
```
#### 3. 此时即可成功获取req.body(客户端post的内容)
```js
app.post('/post',(req,res) => {
    console.log(req.body);
})
```
```
[Object: null prototype] { name: 'faithpassi', message: 'dsddfgfgdf' }
```

## 将读取到的字符串转为JSON
```js
fs.readFile('./db.json','utf8', (err, data) => {
    if (!err) {
        res.render('index.html', {
            students: JSON.parse(data).students
        });
    }
})
```

## 将所有的路由结构提取到一个文件中，并进行暴露
### 方式一：自己封装函数
```js
const fs = require('fs');
module.exports = function (app) {
    app.get('/students', (req, res) => {
        fs.readFile('./db.json', 'utf8', (err, data) => {
            if (!err) {
                res.render('index.html', {
                    students: JSON.parse(data).students
                });
            }
        })
    })
}
```
### 方式二：使用Express自带的路由容器
#### 1.在路由文件中创建路由容器，并进行暴露
```js
const express = require('express');
// 创建一个路由容器
const router = express.Router();

router.get('/students', (req, res) => {
    fs.readFile('./db.json', 'utf8', (err, data) => {
        if (!err) {
            res.render('index.html', {
                students: JSON.parse(data).students
            });
        }
    })
})
module.exports = router;
```
#### 2. 将路由容器挂载到app上
```js
// 把路由器挂载到 app上
app.use(router)
```

