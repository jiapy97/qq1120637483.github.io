---
title: LeetCode——买卖股票的最佳时机 II（动态规划）
date: 2022-03-01
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---

## 介绍
> 买卖股票的最佳时机是一道高频考题，这个题目已经衍生出多个版本，其中尤其是买卖股票的最佳时机I和II是面试中的高频考题，让我们来一起看看该如何解决这类问题吧~

## 题目描述

![image.png](https://img-blog.csdnimg.cn/img_convert/44c4d22c58b00e1a479cd27142aa2c2e.png)

## 解题思路
> 无论是买卖股票的最佳时机I还是II，动态规划都是解决的好方法，动态规划最重要的就是理解动态方程的含义是什么，下面对动态规划的核心进行介绍：

* dp[i][0]：表示的是第i天，手上没有股票获取的最大收益，也就是说赚的钱数。
* dp[i][1]：表示的是第i天，手上有股票获取的最大收益。
* dp[i][0]的可能性：
    * 第i-1天手里也没有股票：dp[i-1][0]
    * 第i-1天手里有股票，但是今天卖了：dp[i-1][1] + prices[i]
    
* dp[i][1]的可能性：
    * 前一天也有股票，并保持到今天：dp[i-1][1]
    * 前一天没有股票，今天买入了：dp[i-1][0] - prices[i]
    
> 动态规划到最后一天，是持有股票还是手上没有股票的收益大？

> `手上没有股票的收益大，因为最后一天持有股票说明还没有变现。`

## AC代码实现

```js
var maxProfit = function(prices) {
  // 动态规划是解决买卖股票的最佳时机的核心技巧
  // 首先构造一个二维数组dp
  const dp = new Array(prices.length).fill([0,0]);

  // 初始化
  dp[0][0] = 0;
  dp[0][1] = -prices[0];

  // 处理一般情况
  for (let i = 1; i < dp.length; i++) {
    dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i-1][0] - prices[i],dp[i-1][1]);
  }

  return dp[prices.length-1][0];
};
```

> 构造二维数组的时候，fill中传入的是一个[0,0]。

## 买卖股票的最佳时机I和买卖股票的最佳时机II的区别在哪里？
> 核心的区别就在于下面这行代码上：

> 买卖股票的最佳时机I

```js
dp[i][1] = Math.max(- prices[i], dp[i - 1][1]);
```

> 买卖股票的最佳时机II
```js
dp[i][1] = Math.max(dp[i-1][0] - prices[i],dp[i-1][1]);
```

> 这说明什么呢？买卖股票的最佳时机如果今天买入，意味着前面不能有买卖操作，也就是说只能买卖一次，但是买卖股票的最佳时机II则可以多次买入，卖出。

## 总结
> 在遇到同一类题目时，一定要对比题目之间的异同点，进行对比记忆。

