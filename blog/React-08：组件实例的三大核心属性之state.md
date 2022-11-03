---
title: React-08：组件实例的三大核心属性之state
date: 2021-04-06
categories: React
tags: 
- React
---
## 准确区分什么是简单组件与复杂组件
* 简单组件无state
* 复杂组件有state

## 初始化state
* 在组件类的构造器中修改
* 先给构造器传参数props，这个参数是React自动给我们传的。
* 调用super()
* 初始化state
* 这里的this指的是组件的实例对象
![](https://img-blog.csdnimg.cn/img_convert/8d2525c98893df8d6a26e3808e0f95e6.png)

## state的一般简写
![](https://img-blog.csdnimg.cn/img_convert/64ab1fa6810cb20b345deee225f224a5.png)