---
title: 【青训营】- TypeScript进阶笔记
date: 2021-8-26
author: Justin
top: false
cover: false
categories: 字节青训营
tags:
  - 字节青训营
---
## 基础知识
### any
1. any比较特殊，其实它既是Top TYPE又是Bottom Type，也就是说: any类型的常量/变量可以与任何其他类型的变量/常量相互赋值，但是any类型是不安全的，无语言服务的，所以应该尽量避免使用。
2. any具有传染性: 它会使它所触及的地方变得不安全，所以TS在3.0引入了类型安全的unknown类型作为Top Type.
3. any会隐藏bug
4. any会隐藏代码设计细节：丢失了对数据类型的设计

### unknown
* unknown类型必须显示注解，TS不会把任何值推导为unknown
* unknown类型只能进行等于和不等于比较
* 只有类型收窄后才能进行相应运算或函数调用

### boolean
>布尔类型只有两个元素：true和false
* let var变量会被拓宽成boolean类型，const常量就是对应字面量类型
* true和false的联合类型，会被反推回boolean类型

## TypeScript进阶
### 类型操作keyof
>keyof是在TS2.1引入的，它获取类型上所有已知、public键对应的类型联合。

### 接口
>接口与类型别名可以认为是同一概念的两种语法。下面介绍下接口与类型别名的区别。
1. 类型别名更为通用，其右侧可以包含类型表达式，但接口右侧只能是某种结构。
2. 接口间继承时TS会检查二者关系，但类型联合时TS会尽最大阻力尝试不会报错。
3. 同一个作用域的多个同名接口声明会被合并。而多个同名类型别名会报错。

### 类
>class是ES2015引入的新特性，class本质上还是一个函数。作为构造器的函数，必须具有prototype属性，并且prototype类型和构造器返回值的类型相同。


