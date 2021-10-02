---
title: LeetCode——买卖股票的最佳时机（动态规划+更新极值）
date: 2021-10-2
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---

## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/6d8fd51e0a18bc7b9327f6850374e5f9.png)

## 思路一：更新最大值和最小值
* 首先，假设第一个元素是价格最小的值minPrice。
* 定义一个价格最大差maxPriceDiff，并设置值为0。
* 从数组的第二个元素开始更新价格最大差和最小值。
* 最小值是在第i个元素和前面的最小值minPrice之间进行比较。
* 最大价格差则是在前面的最大价格差和（第i天的股票价值-前面的最小值)之间进行比较。
* 最后返回最大价格差。

### AC代码
```js
var maxProfit = function (prices) {
    // 通过不断更新最大值和最小值的方法来求解
    let maxPriceDiff = 0;
    let minPrice = prices[0];
    for (let i = 1; i < prices.length; i++) {
        minPrice = Math.min(prices[i], minPrice);
        let tempMax = Math.max(prices[i] - minPrice);
        maxPriceDiff = Math.max(maxPriceDiff, tempMax);
    }
    return maxPriceDiff;
};
```

## 思路二：动态规划
>详细的思路请看代码中的注释。
>需要我们注意的是：本题中只能进行一次交易，例如如果你今天买入那么你手上的现金就是-prices[i]。

### dp数组以及下标的含义
* dp[i][0]：表示第i天，手里不持有股票的现金数
* dp[i][1]：表示第i天，手里持有股票的现金数

### AC代码

```js
var maxProfit = function (prices) {
    // 通过动态规划的方法
    const dp = new Array(prices.length).fill([0, 0]);
    // 设置动态规划的初始值
    // 第0天不持股的情况下，手上的现金数
    dp[0][0] = 0;
    // 第1天持股的情况下，手上的现金数是当日价格的负数
    dp[0][1] = -prices[0];
    // 从第二天开始进行遍历
    for (let i = 1; i < prices.length; i++) {
        // 第i天手上不持股的情况：前一天不持股，或者前一天持股但是今天卖掉了
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
        // 第i天手上持股的情况：前一天不持股，今天买入，或者前一天持股今天没卖
        dp[i][1] = Math.max(- prices[i], dp[i - 1][1]);
    }
    // 最终返回的就是最后一天不持股手上的最大现金数
    return dp[prices.length - 1][0]
};
```

## 题目反思
* 学会使用动态规划来求解买卖股票的问题
* 学会通过不断更新最大值和最小值的方法来求解这个问题。
* 动态规划最重要的是理解dp数组及其下标的含义并准确列出动态规划的方程。

