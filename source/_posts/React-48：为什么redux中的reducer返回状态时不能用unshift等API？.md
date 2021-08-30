---
title: React-48：为什么redux中的reducer返回状态时不能用unshift等API？
date: 2021-04-26
categories: React
tags: 
- React
---
## 先说结论：使用unshift是不起作用的
## 原因
* redux的底层会比较preState的地址是否发生了变化，如果没有发生变化，就不会更新页面，只有发生了变化才会更新页面。
* 下面这种就是地址没有发生变化
![](https://img-blog.csdnimg.cn/img_convert/b0cd9d04d9ee2d03d44a513094aee7c5.png)

## 解决办法（reducer必须是一个纯函数）
* 采用下面这种方法进行返回
![](https://img-blog.csdnimg.cn/img_convert/a01a0747d833ef2807cab651f5abb999.png)
