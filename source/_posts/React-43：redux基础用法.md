---
title: React-43：redux基础用法
date: 2021-04-24
categories: React
tags: 
- React
---
## 1. 安装redux
```
npm install redux
```
## 2. 创建redux文件夹（专门用来存放redux相关文件）
![](https://img-blog.csdnimg.cn/img_convert/796d7f1cc6d3b8b85fd150c23a5ed7ac.png)

## 3. 在store.js文件中引入createStore,组件reducer,并暴露
![](https://img-blog.csdnimg.cn/img_convert/45c71d3e48706114ee68ef7c7970f05e.png)

## 4.  状态reducer文件
![](https://img-blog.csdnimg.cn/img_convert/1637841d6249a9e3988fd33913857d6e.png)

## 5. 在组件中调用redux的API
* 获取状态
![](https://img-blog.csdnimg.cn/img_convert/8cb11c842537579a6c93ccd24724a647.png)

* 让store执行对状态的操作
![](https://img-blog.csdnimg.cn/img_convert/fb9b90ad9fd68a6e7a6ceae9409521bd.png)

* 组件挂载后不断检测redux中的状态变化，并驱动页面数据的更新
![](https://img-blog.csdnimg.cn/img_convert/a2d3037dc6a2ce3e23103fa68241bd63.png)
