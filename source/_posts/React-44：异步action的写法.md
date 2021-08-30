---
title: React-44：异步action的写法
date: 2021-04-24
categories: React
tags: 
- React
---
## 安装react-thunk
```
npm install react-thunk
```
## 在store中引入thunk
```
import thunk from 'redux-thunk'
```
## 从redux中引入中间件库applyMiddleware
```
import {applyMiddleware, createStore} from 'redux';
```
## 修改createStore的参数
![](https://img-blog.csdnimg.cn/img_convert/30353ec95d1d182228b7f536a3cde489.png)

## 异步action的写法
![](https://img-blog.csdnimg.cn/img_convert/4bc63292102ec4951a0361c71513a24e.png)