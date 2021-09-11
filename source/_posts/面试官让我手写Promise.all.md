---
title: 面试官让我手写Promise.all
date: 2021-9-11
author: Justin
top: false
cover: false
categories: 面试题
tags:
  - 面试题
---
## 原生的Promise.all有什么特点？
1. 特点1：接收一个可迭代对象
2. 特点2：传入的数据中可以是普通数据，也可以是Promise对象
3. 特点3：可迭代对象的promise是并行执行的
4. 特点4：保持输入数组的顺序和输出数组的顺序一致
5. 特点5：传入数组中只要有一个reject，立即返回reject
6. 特点6：所有数据resolve之后返回结果

## 实现Promise.all
### 1：函数返回的是一个Promise对象
```js
function myPromiseAll(iterable) {
    return new Promise((resolve,reject) => {
    })
}
```
### 2：将可迭代对象转换为一个数组
```js
const promises = Array.from(iterable);
```
### 3：并发执行每一个Promise
```js
// 定义一个计数器用来判断是否所有的promise执行完毕
let count = 0;
// 并发执行每一个promise
for (let i = 0; i < promises.length; i++) {
    Promise.resolve(promises[i]).then(res => {
        result[i] = res;
        count++;
        if (count === promises.length) {
            resolve(result);
        }
    }).catch(err => reject(err))
}
```
>第三步是实现Promise.all的核心，有几点需要我们注意：

1. 并不是push进result数组的，而是通过下标的方式进行存储，这是因为我们为了保证输出的顺序，因为Promise对象执行的时间可能不同，push的话会破坏顺序。
2. 通过计数标志来判断是否所有的promise对象都执行完毕了，因为在then中表示该promise对象已经执行完毕。

## 完整实现
```js
function myPromiseAll(iterable) {
    return new Promise((resolve,reject) => {
        const promises = Array.from(iterable);
        // 定义Promise对象resolve的数组
        const result = [];
        // 定义一个计数器用来判断是否所有的promise执行完毕
        let count = 0;
        // 并发执行每一个promise
        for (let i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i]).then(res => {
                result[i] = res;
                count++;
                if (count === promises.length) {
                    resolve(result);
                }
            }).catch(err => reject(err))
        }
    })
}
```

## Promise.all的实现给我们什么启示
* Promise.all返回的是一个Promise对象
* Promise.all接收的可迭代对象数组需要通过Array.from转换为数组
* Promise.all是并发执行的。
* Promise.all中一个reject直接返回reject的结果。


