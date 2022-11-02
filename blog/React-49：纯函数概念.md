---
title: React-49：纯函数概念
date: 2021-04-27
categories: React
tags: 
- React
---
# 纯函数
## 纯函数的几个条件：
1. 同样的输入，必须是同样的输出。
2. 函数中不能改写参数的值。
3. 不会产生任何副作用，不能有网络请求和输入输出设备。
4. 不能调用Date.now()和Math.random()等不纯的方法。

## redux的reducer必须是一个纯函数
* 详情可以参考这篇文章[React-48：为什么redux中的reducer返回状态时不能用unshift等API？](https://blog.csdn.net/sinat_41696687/article/details/115874658)

