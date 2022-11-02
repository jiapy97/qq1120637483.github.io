---
title: LeetCode——最小栈（辅助栈）
date: 2022-01-06
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---

## 题目描述

![image.png](https://img-blog.csdnimg.cn/img_convert/a4270b5c1b1db58d55ef02b4cdbf1069.png)

## 解题思路
### 初始化
> 初始化的时候构造一个普通栈和最小栈，这个最小栈的特点在于，只要发现比最后一个元素小的元素。就把这个元素放到最小栈的最后。

### push

> push元素的时候，普通栈直接入栈，如果入栈的元素比最小栈的最后一个元素小，则这个元素也入最小栈，或者最小栈为空，这个元素也入最小栈。

### pop

> 首先普通栈pop，如果要pop的元素和最小栈的最后一个元素的值相等，最小栈也要pop。

### top

> 直接返回普通栈的最后一个元素。

### getMin

> 直接返回最小栈的最后一个元素。

## AC代码

```js
var MinStack = function() {
  // 最下栈的核心就是构造两个栈，一个普通栈，一个最小栈
  this.stack = [];
  this.min_stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  // 首先普通栈要入栈
  this.stack.push(val);
  // 如果最小栈为空或者val的值比最小栈的最后一个元素的值小
  if (val <= this.getMin() || this.min_stack.length === 0) {
    this.min_stack.push(val);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  // 首先，普通栈出栈
  let value = this.stack.pop();
  if (value === this.getMin()) {
    this.min_stack.pop();
  }
  return value;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  // 直接返回普通栈的最后一个元素
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min_stack[this.min_stack.length - 1]
};
```

## 题目反思
> 最小栈和用栈模拟队列等都是一类题目，核心就是借助辅助栈来帮助实现想要的功能。