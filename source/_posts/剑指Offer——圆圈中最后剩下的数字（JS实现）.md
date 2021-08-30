---
title: 剑指Offer——圆圈中最后剩下的数字（JS实现）
date: 2021-04-17
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/7ef251b919b2446fb322800344d40dd9.png)

## 解题思路
* 本题属于约瑟夫环问题，属于经典的数学问题
* 解题的核心思路在于：定义一个下标指针，在于下面的这个式子：
* head = （head + m - 1）% arr.length;

## 实现代码
```js
var lastRemaining = function(n, m) {
    let arr = []
    for (let i = 0;i < n;i++) {
        arr.push(i);
    }
    let flag = 0;
    while (arr.length !== 1) {
        flag = (flag + m - 1) % arr.length;
        arr.splice(flag,1);
    }
    
    return arr[0];
};
```