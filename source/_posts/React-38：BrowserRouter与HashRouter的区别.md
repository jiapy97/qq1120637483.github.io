---
title: React-38：BrowserRouter与HashRouter的区别
date: 2021-04-22
categories: React
tags: 
- React
---
## 区别一：底层原理不同
* BrowserRouter使用的是H5的history API，不兼容IE9及以下版本。
* HashRouter使用的是URL的哈希值。

## 区别二：URL表现形式不一样
* BrowserRouter的路径中没有#
* HashRouter的路径中包含#

## 区别三：刷新后对路由state参数的影响
* 刷新后BrowserRouter没有任何影响，因为state保存在history对象中。
* HashRouter刷新后会导致路由state参数的丢失。