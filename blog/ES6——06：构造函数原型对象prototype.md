---
title: ES6——06：构造函数原型对象prototype
date: 2021-03-12
categories: ES6
tags: 
- ES6
---
## 构造函数存在的问题
* 浪费内存问题
![](https://img-blog.csdnimg.cn/img_convert/af7eda2de693ec35e704b409f8c30a03.png)
## 构造函数原型对象prototype
* 构造函数的原型对象prototype是所有实例对象所共享的。
* 每一个构造函数都有一个prototype属性。
* prototype所具有的属性和方法都将被构造函数所拥有。
* 若实例本身没有的属性和方法可以去其构造函数的原型对象中去寻找。
## 原型对象存在的意义是什么？
答：共享方法，节省内存。