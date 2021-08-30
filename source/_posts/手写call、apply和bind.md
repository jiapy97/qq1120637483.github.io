---
title: 手写call、apply和bind
date: 2021-7-17
author: Justin
top: false
cover: false
categories: JavaScript基础
tags:
  - JavaScript基础
---
## 1. 手写call
**原生call具备的三个功能**

1. 改变this指向。
2. 调用call就是调用函数。（能够返回结果）

**实现代码**
```js
function person(a,b,c) {
    return {
        name: this.name,
        a: a,
        b: b,
        c: c
    }
}

const egg = {name: 'hello'};

Function.prototype.myCall = function(obj) {
    obj = obj || window
    obj.p = this;
    const newArg = [];
    for (let i = 1; i < arguments.length; i++) {
        newArg.push(arguments[i]);
    }
    
    const result = obj.p(...newArg);
   
    delete obj.p;
    return result;
}

person.myCall(egg,'点赞','收藏','转发')
person.call(egg,'点赞','收藏','转发')
```

## 2. 手写apply
>apply和call很类似，区别在于apply只接受两个参数，一个是this的指向，另一个是是一个数组。

**原生apply具备的几个功能**

1. 改变this指向。
2. 调用函数并接受返回值。

**实现代码**
```js
function person(a,b,c) {
    return {
        name: this.name,
        a: a,
        b: b,
        c: c
    }
}

const egg = {name: 'hello'};

Function.prototype.myApply = function(obj,arr) {
    obj.p = this;
    let result;
    if (!arr) {
        result = obj.p();
    } else {
        result = obj.p(...arr);
    }

    delete obj.p;
    return result;
}

person.myApply(egg,['点赞','收藏','转发'])
person.apply(egg,['点赞','收藏','转发'])
```
## 3. 手写bind
**原生bind具备的功能**

1. 会返回一个函数。（这个返回的函数应该是改变过this的，并且接受参数就能执行的）
2. 会修改this指向。
3. 原生bind方法返回的函数如果通过new创建实例的时候，会使得this失效。不调用new，this不会失效。

**注意事项**

5. arguments其实是对象，而不是数组。
6. 使用Array.prototype.slice.call(arguments,1)：可以获取arguments包括第二个元素之后的所有元素，并将其装换为数组。
7. 下面的题解涉及到了原型链的知识，值得我们多次反复揣摩。

**实现代码**
```js
function person(a,b,c) {
    console.log(this.name);
    console.log(a,b,c);
}

const egg = {name: 'hello'};

Function.prototype.myBind = function(obj) {
    let that = this;
    let arr = Array.prototype.slice.call(arguments,1);
    // 定义一个空函数作为桥梁
    let empty = function() {}
    let newf = function () {
        let arr2 = [].slice.call(arguments);
        let arrSum = arr.concat(arr2);
        // 判断是否调用了new
        if (this instanceof empty) {
            that.apply(this,arrSum);
        } else {
            that.apply(obj,arrSum);
        }
    }

    empty.prototype = that.prototype;
    newf.prototype = new empty;
    return newf;
}

const bibi = person.myBind(egg,'点赞','投币')
// const b = new bibi('充电')
bibi('充电')
// person.apply(egg,['点赞','收藏','转发'])
```
* [CodeSandBox在线代码](https://codesandbox.io/s/shouxiebind-d1b5u)

## 参考链接
**[原生JavaScript实现call、apply和bind - Web前端工程师面试题讲解](https://www.bilibili.com/video/BV1m54y1q7hc?from=search&seid=17001305094652810245)**

## 启示
* 首先call、apply、bind看似简单，实则需要很强的基本功。
* 本文需要多次反复阅读，揣摩，加油，希望多看几遍！

