---
title: JavaScript中string是个基本类型，但是它的string.length是怎么实现的？
date: 2022-02-08
author: Justin
top: false
cover: false
categories: JavaScript基础
tags:
  - JavaScript基础
---

## JS的基本类型和引用类型
### 基本类型
> JS的基本类型有undefined、null、boolean、string、number、bigint、symbol。基本类型的值保存在栈中，访问的时候直接访问的是值本身。

### 引用类型
> JS的引用类型有Object、Array、Date、RegExp、Function、Map、Set。引用类型的值是保存在堆内存中的地址，访问的时候访问的是这个地址。我们知道引用类型一般有属性和方法，但是上文我们提到了string是一个基本类型，那么它为什么会有.length这个方法呢？请看下文的详细介绍。

## 基本包装类型
> 在JS的基本类型中其中有三个是基本包装类型，其中包括有：Boolean、String、Number,这三个基本包装类型和其他引用类型一样，拥有内置的方法可以对数据进行操作。

> `注意：并不是基本类型string执行了自身的方法，而是JS为它创建了一个对应的基本包装类型String,它根据基本类型的值实例化出了一个实例，让这个实例去调用指定的方法，最后销毁自己。由于这个自销毁特性的存在，我们不能为基本类型的值添加自定义属性和方法。`

## 自定义使用基本包装类型
* 通过new String来自定义使用基本包装类型

```js
// 自定义创建基本包装类型
const str = new String('haha');
console.log(str.toUpperCase());  //HAHA
```

* 直接字面量的string和通过new String创建的有什么区别？

> 通过字面量进行直接赋值的形式本质是一个基本数据类型string，但是通过new String创建的本质是一个object对象。

```js
const strs = new String('1111');
const str2 = '2222';

console.log(typeof strs); //object
console.log(typeof str2); //string
```


## 参考文献
* [【JS】基本包装类型](https://segmentfault.com/a/1190000021961278)

* [JavaScript中为什么string可以拥有方法？](https://www.cnblogs.com/SheilaSun/p/4765394.html)
