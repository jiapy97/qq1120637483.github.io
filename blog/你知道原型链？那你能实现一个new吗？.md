---
title: 你知道原型链？那你能实现一个new吗？
date: 2022-05-11
author: Justin
top: false
cover: false
categories: 面试题
tags:
  - 面试题
---

> 在学习前端知识的时候，我们不仅要会用工具和API，更要知道其实现原理，因为只有知道原理，我们的理解才能更上一层楼，这次让我们来一起解决最常见的new的实现原理吧。

## new在原型链中扮演什么样的角色？
> 在this的指向规则中，有一种this指向是new绑定，new绑定会让构造函数的this指向我们新创建的对象，请看下面的例子：

```js
function sayHi(name){
  this.name = name;

}
var Hi = new sayHi('zhangsan');
console.log('Hello,', Hi.name);  // Hello, zhangsan
```

> 其实，除了上面我们提到的this指向之外，new还会让实例的隐式原型指向其显式原型，下面让我们来一起看看new的内部是如何实现的吧！

## 手写new的实现
1. 创建一个空对象。
2. 拿到构造函数。
3. 让空对象的隐式原型指向构造函数的显示原型。
4. 让构造函数的this指向我们创建的对象并执行。
5. 如果执行的结果是引用类型则返回引用类型，否则返会创建的对象。

```js
function myNew() {
    // 1. 创建一个空对象
    const obj = {};
    // 2. 拿到构造函数，也就是第一个参数
    const Constructor = Array.prototype.shift.call(arguments);
    // 3. 让实例的隐式原型指向构造函数的显式原型
    obj.__proto__ = Constructor.prototype;
    // 4. 改变构造函数的this指向并执行
    const res = Constructor.apply(obj, arguments);
    // 5. 判断是否是引用类型，是则返回引用类型，不是则返回obj
    return res instanceof Object ? res : obj;
}
```

## 总结
> 手写new不仅是一道常考题，其内部涉及到了this指向，原型链，如何通过原生方法获取arguments的第一个参数，apply执行的结果等知识，是一道必须掌握的题目！