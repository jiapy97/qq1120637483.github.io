---
title: 剑指Offer——包含min函数的栈（JS实现）
date: 2021-04-27
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/20f3ac40b5cc220e05407e5f61d990e1.png)

## 解题思路
* 这道题属于栈的相关问题
* 本题的核心思路是采用模拟栈的方法
* 模拟栈是一种很重要的思路，主要是定义两个数组，一个数组和真实的栈的pushpop方法一致，另一个数组则是用来存储最小值的栈，只有push的元素比最小值栈小或相等的时候，才将该元素push进最小值栈。
* top方法只需将真实栈的栈顶元素返回即可
* 在进行pop方法的时候，真实栈直接pop即可，最小值栈则要判断是否pop的是自己的栈顶，是则pop，不是则不用pop

## 解题代码
```js
var MinStack = function () {
    this.stack = [];
    this.minStack = [];
};

MinStack.prototype.push = function (x) {
    this.stack.push(x);
    if (this.minStack.length === 0 || x <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(x);
    }
};

MinStack.prototype.pop = function () {
    if (this.stack[this.stack.length - 1] === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
        this.stack.pop();
    } else {
        this.stack.pop();
    }
};

MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

MinStack.prototype.min = function () {
    return this.minStack[this.minStack.length - 1];
};
```
## 总结（本题给我们的启示思路）
* 启示一：学会使用模拟栈
* 启示二：模拟min栈什么时候进行push,什么时候进行pop是本题的核心和关键
