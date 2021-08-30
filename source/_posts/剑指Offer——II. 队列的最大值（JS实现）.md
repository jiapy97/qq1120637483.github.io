---
title: 剑指Offer——II. 队列的最大值（JS实现）
date: 2021-05-07
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/f184a807719c1fecad7b5e83c6720e6c.png)

## 解题思路
* 本题采用的是模拟队列的思想
* 难点：在于push的时候，要确保模拟队列中保持一个降序的顺序，头部始终是最大值，新加入的value放到最后面，所有比value小的pop掉
* 最后返回模拟队列的头元素，就是最大值

## 解题代码（模拟队列）
```js
var MaxQueue = function() {
    this.queue = [];
    this.stack = [];
};

MaxQueue.prototype.max_value = function() {
    if (this.stack.length !== 0) {
        return this.stack[0]
    } else {
        return -1;
    }
};

// ! 解题关键：模拟队列的首元素得是最大值
MaxQueue.prototype.push_back = function(value) {
    this.queue.push(value);
    if (this.stack.length === 0) {
        this.stack.push(value)
    } else {
        // 本题易错点：在下面这段代码，原因在于我们不仅要保证头元素是最大值，还要保证如果一旦头元素被pop之后，第二个元素也是相对于其他元素来说是最大的
        // while循环确保stack中全是比value大的，然后把value放到最后，这样就形成了一个降序排列
        while (this.stack[this.stack.length - 1] < value) {
            this.stack.pop();
        }
        this.stack.push(value);
    }
};

MaxQueue.prototype.pop_front = function() {

    if (this.queue.length !== 0) {
        if (this.queue[0] === this.stack[0]) {
            this.stack.shift();
        }
        return this.queue.shift();
    } else {
        return -1;
    }
};
```
## 总结（本题给我们的启示思路）
* 启示一：学会使用模拟队列
* 启示二：模拟队列如何确保一个降序排列，且新加入的value要放在最后
