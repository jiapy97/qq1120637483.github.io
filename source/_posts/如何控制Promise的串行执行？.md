---
title: 如何控制Promise的串行执行？
date: 2021-9-24
author: Justin
top: false
cover: false
categories: Promise
tags:
  - Promise
---

## Promise是如何执行的？
>让我们来一起看看这个例子，下面的这个例子是一个数组，数组中的每一个元素都是一个函数，函数会返回一个Promise对象，但是每个Promise对象都被定时器控制着执行时间，熟系JS事件循环机制的同学都知道，Promise属于微任务，在执行的时候会加入到微任务队列中，所以执行顺序是2 -> 1 -> 3

```js
const funcArr = [
    () =>
        new Promise((resolve) => {
            setTimeout(() => resolve(1), 2000);
        }),
    () =>
        new Promise((resolve) => {
            setTimeout(() => resolve(2), 1000);
        }),
    () =>
        new Promise((resolve) => {
            setTimeout(() => resolve(3), 3000);
        }),
];
for (let v of funcArr) {
    v().then(res => console.log(res))
}
```
## 核心思想
>实现Promise的核心思想是借助reduce,reduce这个API可以将不同的Promise串联起来。

## 实现步骤
### 第一步：定义一个接收不同Promise执行结果的数组
```js
const res = []
```

### 第二步：返回一个Promise对象
```js
return new Promise((resolve,reject) => {     
})
```

### 第三步：通过reduce将不同的Promise进行串联执行
```js
arr.reduce((pre,cur) => {
    return pre.then(cur).then(data => res.push(data))
},Promise.resolve()).then(() => resolve(res))
```

## 完整代码
```js
const funcArr = [
    () =>
        new Promise((resolve) => {
            setTimeout(() => resolve(1), 2000);
        }),
    () =>
        new Promise((resolve) => {
            setTimeout(() => resolve(2), 1000);
        }),
    () =>
        new Promise((resolve) => {
            setTimeout(() => resolve(3), 3000);
        }),
];
/**
 * @description: 实现Promise的串行
 * @param {*}: 接收一个包含多个返回Promise对象的函数的数组
 * @return {*}: 返回一个Promise对象
 */
function inOrder(arr) {
    const res = []
    return new Promise((resolve,reject) => {
        arr.reduce((pre,cur) => {
            return pre.then(cur).then(data => res.push(data))
        },Promise.resolve()).then(() => resolve(res))       
    })
}

inOrder(funcArr).then(data => console.log(data))
```

## 反思
* reduce函数如果使用大括号的情况下，别忘了使用return.
* then中包裹的是一个函数，这也就是为什么funcArr中每一个元素都是一个Promise对象。
* resolve后其实还是一个Promise对象，只有这个Promise对象then之后才会变为其他类型的值。
* reduce的第二个参数，在本次实例中其实是一个Promise对象，这一点指的我们借鉴。

## 参考资料
* [[清代八股文]Promise如何实现串行执行](https://www.cnblogs.com/zhangnan35/p/14584035.html)
