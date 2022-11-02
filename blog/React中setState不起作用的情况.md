---
title: React中setState不起作用的情况
date: 2021-04-30
categories: React
tags: 
- React
---
## 看下面这个案例
![](https://img-blog.csdnimg.cn/img_convert/9d171aaaf847a55d3b30584710f2d0d7.png)

## 不起作用的原因
* 上述案例中的setState函数接收到的对象只是原有state地址的引用和原地址一样，所以不起作用

## 正确的使用方式
![](https://img-blog.csdnimg.cn/img_convert/2b1d184768241ff7b338a2b84fa6adb9.png)
* 必须得传入一个新的对象，React经过对比以为发生了变化，才会去渲染，去render