---
title: Promise与async的区别
date: 2021-05-16
categories: Per Day
tags: 
- Per Day
---
## 1. 执行async函数返回的都是Promise对象
* return的只要不是promise对象，那么返回的则是成功的promise对象
* async函数返回的是error，那么返回的是失败的Promise
* async函数返回的是promise对象，则根据这个对象的状态来决定Promise的状态

## 2. Promise.then成功的情况下对应await
![](https://img-blog.csdnimg.cn/img_convert/27710d45418668875340ebfbe2be5306.png)

## 3. Promise.catch异常的情况对应 async中的try catch
![](https://img-blog.csdnimg.cn/img_convert/5f21ed8ab15bb8a5c42cc6ec6071b2d4.png)

## 4. async/await更符合同步语义，容易理解，使得异步代码更像是同步代码
## 5. async/await是基于promise实现的
## 6. async/await是生成器函数的语法糖，拥有内置执行器，不需要额外的调用，直接会自动调用并返回一个promise对象

