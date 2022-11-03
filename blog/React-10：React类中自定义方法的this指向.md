---
title: React-10：React类中自定义方法的this指向
date: 2021-04-06
categories: React
tags: 
- React
---
## 类中自定义方法的this指向
![](https://img-blog.csdnimg.cn/img_convert/c984e5c8f231324cb1bf1abe0c6971cc.png)

## bind方法不仅仅修改了this指向，同时将修改完this指向的函数进行了返回，即返回的是一个函数
* 注意：类中的方法是放在原型对象上的
![](https://img-blog.csdnimg.cn/img_convert/9e4fe20c0c42ccfeb6d1389242b88aa2.png)
![](https://img-blog.csdnimg.cn/img_convert/33e8900a79205f27c5584d07790d12e7.png)

## 类中赋值形式的属性是写到实例对象上的，而方法则是直接写到原型对象中的
* 下面两种写法，state和demo都是直接写到实例对象中的。
![](https://img-blog.csdnimg.cn/img_convert/47b7750c8b6096f09293a5483f648621.png)

## 解决组件类中自定义方法的this指向的两种方法
* 使用bind进行重新绑定this
* 使用箭头函数