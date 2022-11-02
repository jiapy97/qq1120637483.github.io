---
title: LeetCode——用两个栈实现队列（JS实现）
date: 2021-04-09
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/de018b5a8df68917469193e598483a3a.png)

## 解题思路
* 	使用两个数组进行初始化
* 一个数组存储入队操作
* 一个数组存储出队操作
* 入队函数将系统输入的值push进A数组
* 出队函数首先判断出队数组中是否有元素，如果有则将其pop出
* 如果没有，则将A数组中的元素倒序push进B数组，然后再pop出

## 实现代码
```js
var CQueue = function() {
    // 模拟入队
    this.stackA = [];
    // 模拟出队
    this.stackB = [];
};

CQueue.prototype.appendTail = function(value) {
    console.log("系统输入的数据：",value);
    this.stackA.push(value);
};

CQueue.prototype.deleteHead = function() {
    // 首先判断出队栈中是否有元素，有则出栈
    if (this.stackB.length) {
        return this.stackB.pop();
    } else {
        // 如果出队栈中没有元素，则判断入队栈中是否有元素
        while (this.stackA.length) {
            // 如果入队栈中有元素，则将入队栈倒序加入到出队栈
            this.stackB.push(this.stackA.pop());
        }
        if (this.stackB.length === 0) {
            return -1;
        } else {
            return this.stackB.pop();
        }
    }

};
```