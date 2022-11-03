---
title: React-01：React介绍
date: 2021-04-01
categories: React
tags: 
- React
---
## React是什么？
React是一个将数据渲染成HTML视图的开源JavaScript库。
## 为什么要学React?
* 原生JS操作DOM繁琐，效率低。
* 使用JS直接操作DOM，浏览器会进行大量的重排和重绘。
* 原生JS没有组件化的编码方案，代码复用率低。

## React的特点
* 采用组件化的模式，声明式编码，提高开发效率和组件复用率。
* 在React Native中可以使用React语法进行移动端开发。
* 使用虚拟DOM+优秀的Diffing算法，尽量减少与真实DOM的交互。

## babel的另一功能
* 一般情况下，我们知道babel具有将ES6的代码转换为ES5，其实babel还具有将jsx转换为js的功能。
## Hello,React案例
* 引入库的顺序
1. 先引入react核心库
2. 再引入react-dom库
3. 最后引入babel

* 将自定以的script标签的类型改为babel
* 在自定义标签中创建虚拟DOM
* 虚拟DOM是不用加引号的
* 渲染虚拟DOM到页面
* 只要添加了react核心库和react-dom库，就会多了个ReactDOM对象
```js
<div class="test"></div>
<script src="../js/react.development.js"></script>
<script src="../js/react-dom.development.js"></script>
<script src="../js/babel.min.js"></script>
<!-- 将script标签的类型改为babel -->
<script type="text/babel">
    // 创建虚拟DOM
    const VDOM = <h1>Hello,React!</h1>;
    // 渲染虚拟DOM到页面
    ReactDOM.render(VDOM,document.querySelector('.test'));
</script>
```