---
title: 使用reduce实现map
date: 2022-03-23
author: Justin
top: false
cover: false
categories: 面试题
tags:
  - 面试题
---

## 原生map方法的特点
1. map不会对原数组产生影响。
2. map返回的是一个新数组。
3. 一个数组一旦调用map方法，每一个元素都会执行map中的回调函数。
4. map方法会跳过被delete删除或者未定义的元素。

## 原生map接收的两个参数都有什么用？
### 第一个参数：callback
> map接收的第一个参数是一个回调函数，这个参数是必须传入的，callback中有三个可选参数，分别代表着元素，索引和调用map方法的数组，也就是(item,index,arr)。

### 第二个参数：thisArg（定义执行callback的this指向）：可选
> 第二个参数表示的是callback的this指向。

## 使用reduce实现map
> 实现思路主要有以下步骤：

1. 首先判断传入的fn是否是一个函数，如果不是则抛出异常。
2. 使用reduce进行拼接调用，最后返回。
3. this指向的是调用map的数组。

```js
// 使用reduce实现map
Array.prototype.myMap = function(fn,thisArg=[]) {
  // 如果fn传入的不是一个函数则抛出异常
  if (typeof fn != 'function') {
    throw new Error(`${fn} is not a function`);
  }
  return this.reduce((pre,cur,index,arr) => {
    return pre.concat(fn.call(thisArg,cur,index,arr)); 
  },[])
}
const arr = [2,3,1,5];
const temp = arr.myMap(item => item * 2)
temp  // [4,6,2,10]
```