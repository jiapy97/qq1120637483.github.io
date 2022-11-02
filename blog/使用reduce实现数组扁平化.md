---
title: 使用reduce实现数组扁平化
date: 2022-03-23
author: Justin
top: false
cover: false
categories: 面试题
tags:
  - 面试题
---

## 实现的目标
> 使用数组原生的API，reduce来实现flat，又叫数组拍平。

> 下面是一个数组拍平的例子：

```shell
[1, [[2], 3, 4], 5] -->  [1,2,3,4,5]
```

## 原生flat具有的特点
> 原生flat每调用一次，数组的维度减少1，多维数组在这种情况时可能处理起来很麻烦，无法一次性的边多维数组变为一维数组，比如下面这个例子。

```js
const arr = [1, [[2], 3, 4], 5];
console.log(arr.flat());   // [1,[2],3,4,5]
```

## 使用reduce函数实现数组扁平化
> 使用reduce函数实现数组的扁平化主要用到下面的几个API。

1. reduce
2. concat

> reduce重点是理解其回调函数的两个参数，主要是什么意思，分别是pre，cur。其中pre代表的是之前的累积和，cur代表的是当前的元素。

> concat重点是理解谁调用concat，就把后面的部分进行结构赋值，然后加入到调用concat的部分，请看下面的例子：

```js
// 测试concat
const test = [666];
test.concat([1,2,3])  // [666,1,2,3]
```

### 实现代码
```js
// 使用reduce实现
const myFlat = (arr) => {
  return arr.reduce((pre,cur) => {
    return pre.concat(Array.isArray(cur) ? myFlat(cur) : cur);
  },[])
}
const arr = [1, [[2], 3, 4], 5];
console.log(myFlat(arr));  // [1,2,3,4,5]
```