---
title: Ajax-11：解决IE缓存问题
date: 2021-03-24
categories: Ajax
tags: 
- Ajax
---
## 什么是IE缓存问题
答：IE缓存问题指的是IE浏览器遇到同样的Ajax请求的时候，会缓存返回结果，当返回结果发生变化的时候，浏览器显示的还是为变化的内容。
## 解决办法
![](https://img-blog.csdnimg.cn/img_convert/b673332fc048574e4a9d0dbc7eb50068.png)
在请求的URL上加上?t=  Date.now();
