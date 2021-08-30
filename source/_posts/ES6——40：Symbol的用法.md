---
title: ES6——40：Symbol的用法
date: 2021-03-17
categories: ES6
tags: 
- ES6
---
* Symbol的值是唯一的。
## 创建Symbol
![](https://img-blog.csdnimg.cn/img_convert/191bead386ccb692fac6d4a6d232db06.png)
## Symbol不能与其他数据进行运算
![](https://img-blog.csdnimg.cn/img_convert/2f6db9207cc38e218b11b650ff67d09a.png)
## Symbol的使用场景
>有时候一个对象里有很多属性可能很相似，以至于我们不知道找那个属性，Symbol可以让他们变为唯一。
* 假如对象中有重复属性，只显示一个（这是不符合逻辑的）
![](https://img-blog.csdnimg.cn/img_convert/02fa098de18efc351feb108877063e21.png)
![](https://img-blog.csdnimg.cn/img_convert/d5c7e53319c63bbd82732e72ebbdd363.png)
## Symbol内置属性
1. 自己控制instance检测
![](https://img-blog.csdnimg.cn/img_convert/c6adcc62815c11dcee3ee763c6404370.png)
## description属性
![](https://img-blog.csdnimg.cn/img_convert/db4457110c0e689a9e5737f9138c8fec.png)