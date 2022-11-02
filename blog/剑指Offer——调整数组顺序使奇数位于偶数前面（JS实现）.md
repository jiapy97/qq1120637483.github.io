---
title: 剑指Offer——调整数组顺序使奇数位于偶数前面（JS实现）
date: 2021-04-18
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/a0b5bbb4018d3a98c263c11bcd032727.png)

## 解题思路
* 使用两个数组分别用来存储奇数和偶数
* 使用for循环遍历输入数组的每一个元素
* 当目标元素对2取余为0，说明该元素为偶数，偶数则加入偶数数组，反之则加入奇数数组
* 最后使用ES6中的拓展运算符将两个数组合并为一个进行返回，即是最后的答案

## 解题代码
```js
var exchange = function(nums) {
    const arr1 = [];
    const arr2 = [];
    for (let v of nums) {
        if (v % 2 === 0) {
            arr2.push(v);
        } else {
            arr1.push(v);
        }
    };
    return [...arr1,...arr2];
};
```
## 总结
* 本题属于较为简单的循环遍历即可解决的问题。
* 本题的关键在于想到使用两个数组分别用来存储奇数和偶数。
* 知道如何把奇数和偶数判断出来。
* 知道使用拓展字符的方法合并数组，是我们要学习的地方。