---
title: LeetCode——用栈实现队列（入队栈+出队栈）
date: 2021-12-06
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---

## 题目描述

![image.png](https://img-blog.csdnimg.cn/img_convert/47a5962ce744678e4450e642d065da7e.png)

## 解题思路
>这个题目总共包含五个主要步骤。

### 步骤1：函数初始化
>在初始化函数的时候，函数的实例身上应该包含两个栈，一个是入队栈，一个是出队栈。

```js
var MyQueue = function() {
  this.pushStack = [];
  this.popStack = [];
};
```

### 步骤2：模拟入队操作
>如果队列想要进行入队操作，直接push进入队栈即可。

```js
MyQueue.prototype.push = function(x) {
  this.pushStack.push(x);
};
```

### 步骤3：模拟出队操作
>首先判断出队栈中是否有元素，有则直接出栈，如果没有则判断入队栈中是否有元素，有则倒序加入出队栈，然后返回最后一个元素，如果二者都没有元素，则返回null。

```js
MyQueue.prototype.pop = function() {
  // 首先判断出队栈中是否有元素
  if (this.popStack.length > 0) {
    return this.popStack.pop();
  }
  // 如果出队栈中没有元素，然后判断入队栈中是否有元素
  if (this.pushStack.length > 0) {
    // 将入队栈中的元素倒序加入出队栈
    while (this.pushStack.length > 0) {
      this.popStack.push(this.pushStack.pop());
    }
    return this.popStack.pop();
  } else {
    return null;
  }
};
```

### 步骤4：返回队首操作
>如果出队栈中有元素，则返回出队栈中的最后一个元素，没有则判断入队栈中是否有元素，有则返回入队栈的第一个元素。

```js
MyQueue.prototype.peek = function() {
  // 首先判断出队栈中是否有元素
  if (this.popStack.length > 0) {
    return this.popStack[this.popStack.length - 1];
  }
  if (this.pushStack.length > 0) {
    return this.pushStack[0];
  }
  return null;
};
```

### 步骤5：判断队列是否为空操作
>如果入队栈为空并且出队栈为空则返回true，反之返回false。

```js
MyQueue.prototype.empty = function() {
  if (this.popStack.length === 0 && this.pushStack.length === 0) {
    return true
  } else {
    return false;
  }
};
```

## AC代码

```js
var MyQueue = function() {
  this.pushStack = [];
  this.popStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.pushStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  // 首先判断出队栈中是否有元素
  if (this.popStack.length > 0) {
    return this.popStack.pop();
  }
  // 如果出队栈中没有元素，然后判断入队栈中是否有元素
  if (this.pushStack.length > 0) {
    // 将入队栈中的元素倒序加入出队栈
    while (this.pushStack.length > 0) {
      this.popStack.push(this.pushStack.pop());
    }
    return this.popStack.pop();
  } else {
    return null;
  }
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  // 首先判断出队栈中是否有元素
  if (this.popStack.length > 0) {
    return this.popStack[this.popStack.length - 1];
  }
  if (this.pushStack.length > 0) {
    return this.pushStack[0];
  }
  return null;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  if (this.popStack.length === 0 && this.pushStack.length === 0) {
    return true
  } else {
    return false;
  }
};
```

## 题目反思
>用栈实现队列是一个非常优秀的题目，可以很好的锻炼我们队栈和队列特性的认知，可以很好的巩固我们的基础。
