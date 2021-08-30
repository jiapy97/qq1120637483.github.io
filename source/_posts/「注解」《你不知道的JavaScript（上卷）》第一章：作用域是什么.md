---
title: 「注解」《你不知道的JavaScript（上卷）》第一章：作用域是什么
date: 2021-03-26
categories: 《你不知道的JavaScript》
tags: 
- 《你不知道的JavaScript》
---
>书名：《你不知道的JavaScript（上卷）》
>作者：Kyle Simpson
>译者：赵望野 , 梁杰
---
## 1.1 编译原理
在传统的编译语言的流程中，程序中的一段源代码在执行之前会经历以下三个步骤：
1. 词法分析
![](https://img-blog.csdnimg.cn/img_convert/f543405da3325f6b752cdb791e8e1308.png)

2. 语法分析
![](https://img-blog.csdnimg.cn/img_convert/0da30126bba9c670657e6a1b494d7ea5.png)

3. 代码生成
![](https://img-blog.csdnimg.cn/img_convert/8d98b49a64c99f21c6794653ce95acef.png)

## 1.2 理解作用域
### 理解引擎、编译器、作用域
![](https://img-blog.csdnimg.cn/img_convert/ccbb1b0083681e2de6560ba1abdcf913.png)

### 编译器如何处理 var a = 2;
![](https://img-blog.csdnimg.cn/img_convert/734fbc2bddcb5810b9c716b4026154e3.png)

总结：引擎在执行赋值操作之前会询问作用域中是否含有a这个变量，有则赋值，无则抛出异常，对编译器来说，遇到var a则会先询问作用域中是否有a，是则继续，无则让作用域在当前作用域的集合中声明一个新的变量，并命名为a。

### 准确理解LHS查询和RHS查询
>LHS指的是**赋值操作的目标是谁**
>RHS指的是**赋值操作的源头**

![](https://img-blog.csdnimg.cn/img_convert/626cf323cae2d1f2ebe03c878e718097.png)

![](https://img-blog.csdnimg.cn/img_convert/19d4fb359147702317fe3e4a26e63416.png)

## 1.3 作用域嵌套
### 作用域有向上查找的规则
![](https://img-blog.csdnimg.cn/img_convert/20093cf4e47a3a56f8adbd807ee253f9.png)

![](https://img-blog.csdnimg.cn/img_convert/f3aa4784fb364f08dddd12211d5f153e.png)

## 1.4 异常
### 区分LHS查询和RHS查询是一件很重要的事情
* RHS查询如果从下到上一直找到全局作用域都找不到的情况下，会抛出异常。
* LHS查询如果从下到上一直找到全局作用域都找不到的情况下，全局作用域就会创建一个具有该名称的变量。（非严格模式下）
## 1.5 小结
### 作用域的概念
>作用域是一套规则，用于确定在何处以及如何查找变量。

![](https://img-blog.csdnimg.cn/img_convert/ad868fdd162e0ef274e3cdd06639e5c1.png)


