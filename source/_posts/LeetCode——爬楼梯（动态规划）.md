---
title: LeetCode——爬楼梯（动态规划）
date: 2021-10-4
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---

>这道题目和剑指offer中的青蛙跳台阶是一个问题。

## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/e2f3505bfbef61565f1a82974d5aca71.png)

## 解题思路：动态规划
>动态规划的核心思路在于：要想爬到第i个台阶就必须爬到第i-1个台阶和第i-2个台阶，所有的可能性就是这两种情况的和。

```js
var climbStairs = function (n) {
    let dp = [];
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n]
};
```

## 题目反思
>本题如果直接采用递归的方法，肯定是要超时的，动态规划是解决这类问题的好方法。
>动态规划的关键在于准确的列出动态规划的方程。


