---
title: 剑指Offer——不用加减乘除做加法（JS实现）
date: 2021-04-26
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/95e7a26558dc977f957443b2e54b7f9c.png)

## 解题思路
* 这道题属于考查位运算的问题
* 位运算从某种程度上来说思路较为难以理解
* 本题考查的就是加法 = 进位 + 非进位

## 解题代码
```js
var add = function(a, b) {
    while (b) {
        let c = (a&b) << 1;
        a = a^b;
        b = c;
    }
    return a;
};
```
## 总结（本题给我们的启示思路）
* 思路一：位运算是如何完成加法操作的。
* 思路二：位运算的加法 = 进位 + 非进位
