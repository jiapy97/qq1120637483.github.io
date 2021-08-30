---
title: 剑指Offer——1~n整数中1出现的次数（JS实现）
date: 2021-05-07
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/f6de1a0edef3f77efb9c2b39b4f5e537.png)

## 解题思路
* 本题如果采用暴力的方法一定会超时
* 本题关键在于找规律
* 规律如下图所示（cur>1,cur=1.cur<1三种情况）
![](https://img-blog.csdnimg.cn/img_convert/f787574199ef1397406f49dd3fbb44b0.png)

## 解题代码（模拟队列）
```js
var countDigitOne = function(n) {
    let flag = 0;

    const TotalBase = Math.pow(10,(String(n).split('').length) - 1);
    for (let i = 0; Math.pow(10,i) <= TotalBase; i++) {
        let base = Math.pow(10,i);
        let cur = Math.floor(n/base) % 10;
        let a = Math.floor(Math.floor(n/base) / 10);
        let b = n % base;
        if (cur < 1) {
            flag = flag + a * base;
        } else if (cur > 1) {
            flag = flag + (a + 1) * base;
        } else {
            flag = flag + a * base + b + 1;
        }
    }
    return flag;

};
```
## 精讲UP主
https://www.bilibili.com/video/av458927963/
## 总结（本题给我们的启示思路）
* 启示一：学会通过数学规律的思想来解决本题

