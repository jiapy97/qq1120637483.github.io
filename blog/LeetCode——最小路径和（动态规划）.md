---
title: LeetCode——最小路径和（动态规划）
date: 2021-10-13
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---

## 题目描述

![image.png](https://img-blog.csdnimg.cn/img_convert/994343286d7ef4f4e4cd00e81f0c0e58.png)

## 解题思路
>本题是动态规划的经典例题，是一道必须掌握的习题。

1. 核心的DP方程
$dp[i][j] = dp[i][j] + Math.min(dp[i-1][j],dp[i][j-1]) + dp[i][j]$

2. 处理边界条件
>题目中明确说了，移动的时候，只能向右或者向下移动，其他的移动方式是不被允许的，所以对第一行来说，元素只能从左往右移动，对第一列来说，元素只能从上往下移动。

* 第一行的处理方法

```js
for (let j = 1; j < grid[0].length; j++) {
    grid[0][j] = grid[0][j] + grid[0][j - 1];
}
```

* 第一列的处理方法

```js
for (let i = 1; i < grid.length; i++) {
    grid[i][0] = grid[i][0] + grid[i - 1][0];
}
```

3. 处理一般情况
>一般情况就是使用我们第一步的核心DP方程来进行求解。

## AC代码
```js
var minPathSum = function (grid) {
  // 本题堪称是动态规划的经典例题，必须背会
  // 本题最核心的动态方程为：dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1]) + dp[i][j]
  // 首先处理边界条件，题目明确指出每次移动只能向右或者向下移动，所以不能向左或者其他方向进行移动。
  // 处理第一行的元素：第一行的元素没有上项，从第一行的第二个元素开始进行处理
  for (let j = 1; j < grid[0].length; j++) {
    grid[0][j] = grid[0][j] + grid[0][j - 1];
  }
  // 处理第一列的元素，道理和处理第一行的元素类似
  for (let i = 1; i < grid.length; i++) {
    grid[i][0] = grid[i][0] + grid[i - 1][0];
  }
  // 处理一般情况
  for (let i = 1; i < grid.length; i++) {
    for (let j = 1; j < grid[0].length; j++) {
      grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j];
    }
  }
  return grid[grid.length - 1][grid[0].length - 1]
};
```

## 题目反思
* 学会使用动态规划来求解路径问题。
* 在动态规划中处理好边界条件是很重要的。


  