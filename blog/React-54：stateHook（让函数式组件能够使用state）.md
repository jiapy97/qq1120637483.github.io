---
title: React-54：stateHook（让函数式组件能够使用state）
date: 2021-04-28
categories: React
tags: 
- React
---
## 什么是Hook?
* Hook是React 16.8.0版本新增的新语法
* 可以让使用者在函数组件中使用state以及其他的react特性

## 使用useState
* 使用数组的解构赋值，数组的解构赋值不需要和原本的名字一致
![](https://img-blog.csdnimg.cn/img_convert/33bab22e41ec3e3a9507ed92f0a77f27.png)
* 0,'xidian'是我们的初始化状态，setXxx则是方法

## 两种改变状态的写法
![](https://img-blog.csdnimg.cn/img_convert/5a1f1e2d4b8c03f3da687e33951ac67f.png)