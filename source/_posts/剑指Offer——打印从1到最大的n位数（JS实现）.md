---
title: 剑指Offer——打印从1到最大的n位数（JS实现）
date: 2021-05-26
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/d6e59b5b4d6e66c669ff522504db4e9c.png)

## 解题思路
* 循环结束的位置就是10**位数 -1
* 从1开始循环到指定位置即可。

## 解题代码
```js
var printNumbers = function(n) {

    // 定义循环结束的位置
    const deadline = 10 ** n - 1;
    // 定义最终返回的数组
    const res = [];
    // 开始循环
    for (let i = 1; i <= deadline; i++) {
        res.push(i)
    }
    return res;
}
```
## 启示
* 学会JS中的幂运算。
