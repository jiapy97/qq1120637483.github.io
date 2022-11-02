---
title: LeetCode——最大子序和（贪心算法）
date: 2021-10-11
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---

## 题目描述

![image.png](https://img-blog.csdnimg.cn/img_convert/18bd13013327765e68ccf030ae6f9af3.png)

## 解题思路
>主要是判断窗口内的和是正数还是负数，遍历nums中的每一个元素，判断窗口内的和sum是正数还是负数，正数则加上当前的值，负数则将当前的值赋值给sum。每一轮循环都比较sum和全局max的值。

## AC代码
```js
var maxSubArray = function (nums) {
    // 首先定义临时最大值
    let max = nums[0];
    // 定义 连续和
    let sum = 0;
    // 遍历每一个元素
    for (let v of nums) {
        // 如果sum是正数，则加当前元素，反之不加
        if (sum > 0) {
            sum = sum + v;
        } else {
            sum = v;
        }
        max = Math.max(sum,max);
    }
    return max
};
```

## 题目反思
* 此题使用贪心算法，解题代码看似很简单，但是思想确实很难理解的，所以需要我们多练，多思考，准确理解每一个变量的含义。

