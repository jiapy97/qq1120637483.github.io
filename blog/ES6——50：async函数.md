---
title: ES6——50：async函数
date: 2021-03-18
categories: ES6
tags: 
- ES6
---
## 1：return的只要不是promise对象，那么返回的则是成功的promise对象
![](https://img-blog.csdnimg.cn/img_convert/501b23abd066a914a9e82c203936bc96.png)
## 2：抛出错误，返回的是失败的promise
![](https://img-blog.csdnimg.cn/img_convert/b64908645fbe1b75282c74aec1d50108.png)
## 3：返回的是一个promise对象，该对象若是成功的promise，返回的则是成功的，反之则是失败的。
![](https://img-blog.csdnimg.cn/img_convert/6f2cd58458e8196956eaae7f18337021.png)