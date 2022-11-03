---
title: Promise的异常捕获问题
date: 2022-05-08
author: Justin
top: false
cover: false
categories: 面试题
tags:
  - 面试题
---

## Promise根据异常出现的位置不同采取的方案也不同
### Promise内部抛出异常
> 通过then的第二个函数来捕捉异常。

```js
// Promise的异常捕获问题
const promise = new Promise((resolve,reject) => {
    throw new Error('test')
})

// 通过then的第二个函数来进行捕捉
promise.then(res => {
    console.log(res);
},err => {
    console.log(err); // [Error test]
})
```

### Promise.then的第一个函数出现了异常
> 通过catch来捕捉Promise.then的第一个函数。

```js
const promise = new Promise((resolve,reject) => {
    resolve(666)
})

// 通过.catch进行捕捉
promise.then(res => {
    throw new Error('test2')
},err => {
    console.log(err); 
}).catch(err => {
    console.log(err);  //[Error test2]
})
```

