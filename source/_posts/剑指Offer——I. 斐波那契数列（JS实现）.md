---
title: 剑指Offer——I. 斐波那契数列（JS实现）
date: 2021-05-20
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/13390458dabe9c341e65013ae9679f6e.png)

## 解题思路
* 本题如果直接使用递归进行计算，思路上是简单的，但是一定会超时，因为递归的时间复杂度太高，所以本题采用循环计算法。
* 所谓循环计算法，就是用两个临时变量，指向第i个元素的前两个元素，随着i的更新而不断更新。

## 解题代码
```js
var fib = function(n) {
    if (n <= 1) return n;
    let temp1 = 1;
    let temp2 = 1;
    let res;
    for (let i = 0 ; i < n; i++) {
        res = temp1;
        temp1 = temp2;
        temp2 = (res + temp1) % 1000000007
    }
    return res;
};
```
## 总结（本题给我们的启示思路）
* 学会通过循环计算法来解决斐波那契数列等递归问题。

