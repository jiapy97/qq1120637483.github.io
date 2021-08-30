---
title: Express_01--Express中的基本常识和模板引擎的用法
date: 2021-8-12
author: Justin
top: false
cover: false
categories: Express
tags:
  - Express
---
## 1. 安装express
```js
npm i express
```

## 2. Express的Hello,World
```js
const express = require('express');

const app = express();

app.get('/',(req,res) => {
    res.send('Hello,Express!');
})

app.listen(3000,() => {
    console.log('服务器启动成功！');
})
```

## 3. 将一个文件夹下的所有文件变为可访问
```js
app.use('/public',express.static('./public'));
```

## 4. 使用nodemon来保存后自动重启
```shell
npm install nodemon -g
```
>以后启动一个文件不再使用node + 文件名的方式，而是使用nodemon + 文件名的方式。这样可以实现热更新，即保存就更新服务器。

## 基本路由
```js
app.get('/',(req,res) => {
    res.send('Hello,Express666!');
})

app.get('/about',(req,res) => {
    res.send('关于');
})
```
## 暴露文件不同方式的区别
### 1. 只有一个参数（URL可以直接访问文件名）
```js
app.use(express.static('./public'));
```
### 2. 两个参数（URL必须包含指向改文件的路径）
```js
app.use('/public',express.static('./public'));
```
### 3. 别名的形式
```js
app.use('/a',express.static('./public'));
```
>这里的a意思是路径中以a开头的，就可以访问public路径下的文件。

## 在express中配置模板引擎art-template
### 1. 安装art-template
```shell
npm install --save art-template
npm install --save express-art-template
```
### 2. API介绍
>当渲染以.art结尾的文件的时候，使用art-template模板引擎
```js
app.engine('art', require('express-art-template'));
//或者，下面的这种方式也是可以的
app.engine('html', require('express-art-template'));
```
>调用res.render的时候，会默认去项目的views目录中查找指定的文件，但是该文件必须以art结尾。如果engine中的第一个参数是html，则不需要进行重命名，即下面的第二种方式。
```js
app.get('/',(req,res) => {
    res.render('404.art');
})
// 方式二
app.get('/',(req,res) => {
    res.render('404.html');
})
```
>修改默认的views目录
```js
app.set('views','test');
```

### 一个基于express的留言本小案例
```js
const express = require('express');

const app = express();
let comments = [
    {
        name: '黄多多',
        message: '爸爸去哪了',
        dateTime: '2020-5-21'
    },
]

app.engine('html', require('express-art-template'));

app.get('/', (req, res) => {
    res.render('index.html',{
        comments
    });
})

app.get('/post', (req, res) => {
    res.render('post.html');
})

app.get('/pinglun',(req,res) => {
    let comment = req.query;
    comment.dateTime = new Date().toLocaleString();
    comments.unshift(comment);
    res.redirect('/');
})
// 开放public目录
app.use('/public', express.static('public'));
app.listen(3000, () => {
    console.log('服务器在3000端口启动成功......');
})
```



