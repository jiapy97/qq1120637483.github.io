---
title: 从原理出发理解instanceof
date: 2021-8-27
author: Justin
top: false
cover: false
categories: 面试题
tags:
  - 面试题
---
## 有了typeof为什么还需要instanceof?
>我们都知道typeof可以帮助我们判断数据类型，但是在判断object类型的时候typeof只能告诉我们是object但是不能告诉我们具体属于哪类object,请看下面的代码。instanceof的出现可以解决这个问题。

![image.png](https://img-blog.csdnimg.cn/img_convert/b3b32d49759ef74b2cd9d0b2a369b96a.png)

## instanceof的实现原理
>在介绍instanceof的具体用法之前，我们先看下instanceof的实现原理，从原理出发可以更好的帮助我们理解它的用法。为了让读者更好的理解代码，我们需要直到下面的预备知识。

* Object.prototype.\_\_proto\_\_ === null
* Object.prototype是一个空对象

>实现instanceof的三步走战略，请大家区分好什么是原型什么是原型对象，proto指的是原型，prototype指的是原型对象。
### 第一步：获取左边表达式的原型
```js
let leftProto = leftVaule.__proto__;
```
### 第二步：获取右边表达式的原型对象
```js
let rightProtoType = rightVaule.prototype;
```
### 第三步：循环判断左边表达式的原型链上是否有右边的表达式
```js
while (true) {
    if (leftProto === null) {
        return false;
    }
    if (leftProto === rightProtoType) {
        return true;
    }
    // 往左边表达式的原型链上的上一层继续查找
    leftProto = leftProto.__proto__
}
```
## 实现instanceof
![image.png](https://img-blog.csdnimg.cn/img_convert/40e9b64b951f300cc5ae23a87c7f0b6a.png)

## 几个帮助理解instanceof的实例
```js
function test() {}
console.log(test.__proto__ === Function.prototype); //true
Object instanceof Object // true
Function instanceof Function // true
Function instanceof Object // true
test instanceof test // false
test instanceof Object // true
test instanceof Function // true
```
>要想准确理解上面的实例，必须要和上面我们讲的instanceof原理进行结合，技巧就是获取左边表达式的原型和右边表达式的原型对象，判断右边表达式的原型对象是否在左边表达式的原型链上。

## 参考资料
[浅谈 instanceof 和 typeof 的实现原理](https://juejin.cn/post/6844903613584654344)
