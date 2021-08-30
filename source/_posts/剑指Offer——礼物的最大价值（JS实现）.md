---
title: 剑指Offer——礼物的最大价值（JS实现）
date: 2021-04-14
categories: React
tags: 
- React
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/364dd1db6c40fff22a9a36d17ab94ff9.png)

## 解题思路
* 本题考查动态规划
* 首先构造一个和原数组维度一摸一样的全零数组dp
* dp的值首先将第一行和第一列构造为原数组向右、向下的价值和
* 然后使用for循环遍历填写剩余的dp值
* 方程dp[i][j]=grid[i][j] + Math.max(dp[i][j-1],dp[i-1][j])

## 实现代码
````js
var maxValue = function(grid) {
    // 首先构造一个和grid矩阵维度一致的矩阵
    const dp = [];
    const rowNum = grid.length;
    const cowNum = grid[0].length;
    for (let i = 0; i < rowNum;i++) {
        dp[i] = [];
        for (let j = 0;j < cowNum;j++) {
            dp[i][j] = 0;
        }
    }
    // 函数走到这里dp已经变成和grid维度完全一致的全零数组
    // 我们首先要做的是将dp的第一行和第一列全部填写为从初始位置出发走到目标位置所需的距离
    dp[0][0] = grid[0][0];
    for (let i = 1; i < rowNum;i++) {
        dp[i][0] = grid[i][0] + dp[i-1][0];
    }
    for (let j = 1; j < cowNum;j++) {
        dp[0][j] = grid[0][j] + dp[0][j-1]
    }
    // 通过上面两个循环我们已经将grid的第一行和第一列需要的价值和写到了dp数组中的第一列和第二列
    // 接下来遍历grid的其余数组即可
    for (let i = 1; i < rowNum;i++) {
        for (let j = 1;j < cowNum;j++) {
            dp[i][j] = grid[i][j] + Math.max(dp[i-1][j],dp[i][j-1]);
        }
    }
    // 走到这里dp数组的每一个值我们应该理解为grid数组路径的价值和
    // dp数组的最后一个值就应该是价值的最大值
    return dp[rowNum-1][cowNum-1]
};
```