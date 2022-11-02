---
title: JS模块化演变及其区别
date: 2022-05-12
author: Justin
top: false
cover: false
categories: 面试题
tags:
  - 面试题
---

## 为什么需要模块化？
> 假如没有模块化，在前端开发时可能存在下面的问题：

1. 变量和方法不容易维护，容易污染到全局作用域。
2. 通过script标签进行大量引入资源，代码可读性和可维护性都比较差。
3. 代码一多就比较复杂。
4. 多人合作的场景下，资源的引入会带来比较大的困难。

## JS模块化的演变史
### 1. CommonJS
> 我们熟知的Node.js在模块化方面就是遵守的CommonJS规范。CommonJS模块化具有下面几个特点：

1. 模块内的代码运行在模拟作用域中，不会污染到全局作用域中。
2. 模块可以多次引入，但只会在第一次加载的时候执行一次，后面的运行都是从缓存中获取值。
3. 代码出现的顺序就是模块加载的顺序。

> `模块的导入导出方式：`

> 通过module.exports或者exports进行导出，通过require进行导入。

```js
module.exports = {age: 1,name: 'hello'}
```

```js
const foo = require('./foo.js');
```

### 2. ES6 Module
> CommonJS不适合浏览器等场景，于是ES6 Module诞生了，它是ES6之后新增的模块化规范。

> `模块的导入导出方式：`

> 通过export导出模块，通过import导入模块。在导出的时候有两种方式，一种是默认暴露，一种是分别暴露。


## 问题汇总
### RQ1：浏览器为什么不适用CommonJS？
> 因为CommonJS的require语法是同步的，在浏览器端文件一般存放在服务器上，一般通过网络请求来获取数据，如果使用CommonJS会导致时间很长，造成浏览器卡顿现象，NodeJS之所以采用CommonJS是因为NodeJS在服务端读取的是本地硬盘，因此速度比较快。

### RQ2：CommonJS和ES6 Module之间的区别
1. CommonJS输出的是值的拷贝，而ES6 Module输出的是值的引用。
2. CommonJS模块是运行时加载，ES6 Moduke是编译时输出接口。
3. CommonJS加载是同步的可能阻塞的，ES6 Module是异步加载。

### RQ3：在Node.js中module.exports和exports有什么区别？
1. 通过module.exports暴露的函数，在引入的时候可以不知道函数名，但是通过exports暴露的内容必须知道名字。
2. exports对象是module对象的一个属性，初始时module.exports和exports指向的是同一块内存区域。
3. 模块导出的是module.exports，exports只是和它指向的是同一片内存，在不改变exports内存的情况下，修改exports的值可以改变module.exports的值。
4. 导出时尽量使用module.exports以避免赋值导致的混乱。
