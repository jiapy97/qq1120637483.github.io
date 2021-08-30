---
title: 这一次，彻底搞懂Promise的状态转换
date: 2021-06-15
categories: Promise
tags: 
- Promise
---
>这篇文章解决了我很久的困惑，也希望能够解决看到的小伙伴的困惑，谢谢。

## Promise的三种状态到底是什么？
1. pending
2. fulfilled
3. rejected

## 下面我们先看下三种状态的产生
### 1.pending状态的Promise
```js
const promise1 = new Promise((resolve,reject) => {
 
})
console.log(promise1);
```
![image.png](https://img-blog.csdnimg.cn/img_convert/0fb0383855534c50f93755dc831b226e.png)

### 2. fulfilled状态的Promise
```js
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    })
})
console.log(promise1);
```
![image.png](https://img-blog.csdnimg.cn/img_convert/d9534a37142ab8666294b29cb5dcedc8.png)

### 3. rejected状态的Promise
```js
const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject();
        })
    });
    console.log(promise);
```

## 从pending状态到fulfilled状态的变化过程
* resolve()后状态从pending变为了fulfilled
```js
const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('resolve前Promise的状态：',promise);
            resolve();
            console.log('resolve后Promise的状态：',promise);
        })
    });
```
![image.png](https://img-blog.csdnimg.cn/img_convert/6ec564abc907c64577e63cd1b7d42b0e.png)

## 从pending状态到rejected状态的变化过程
* reject()后状态从pending变为了rejected
```js
const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Promise的状态：reject前：",promise);
            reject();
            console.log("Promise的状态：reject后：",promise);
        })
    });
```
![image.png](https://img-blog.csdnimg.cn/img_convert/c1e78c4f0825fca4533989d8dc2208b2.png)

## 下面介绍下关于Promise状态的可能的疑问
### 疑问1：resolved状态和fulfilled状态是一回事吗？
>答：并不是一回事，resoved状态指的是完成了，不会再改变的状态,只是一种叫法，并不是真正的状态，真正的状态还是前文提到的那三种，pending、fulfilled、rejected这三种，所以resolved状态可能是fulfilled也可能是rejected。
### 疑问2：Chrome浏览器显示的状态时pending，点开却是fulfilled，到底哪个才是真正的状态？
![image.png](https://img-blog.csdnimg.cn/img_convert/1c82387f79feefc170eec32e3a156adc.png)
上述的情况，我们还是可以叫做pending状态。

## 参考文献
[Promise中的resolved和fulfilled到底什么关系，又或者这只是叫法的问题？](https://segmentfault.com/q/1010000020423077)

[Promise的状态和现象【JS面试题】](https://www.bilibili.com/video/BV1vB4y1A7xJ)


