---
title: LeetCode——最长公共子序列（动态规划）
date: 2022-02-11
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---

## 题目描述

![image.png](https://img-blog.csdnimg.cn/img_convert/ec084e6afde668314410788e79b8cf4a.png)

## 解题思路
> 动态规划是解决这个题目的方法之一，动态规划之所以能够解决这个问题，关键在于构建dp[i][j]，这里的dp[i][j]表示的是第一个字符串从0到i和第二个字符串从0到j之间的最长公共子序列的长度，明白这个含义之后，就方便后续的理解了。

> 假如，我们在比较第一个字符串的第i个元素和第二个字符串的第j个元素的时候，有两种情况：

* 要比较的字符相等
    * dp[i][j] = dp[i-1][j-1] + 1
* 要比较的字符不相等
    * dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1])

## AC代码
```js
var longestCommonSubsequence = function(text1, text2) {
  // 使用表格法解决最长公共子序列
  let row,column;
  if (text1.length > text2.length) {
    row = text2.length + 1;
    column = text1.length + 1;
  } else {
    row = text1.length + 1;
    column = text2.length + 1;
    let temp = text1;
    text1 = text2;
    text2 = temp;
  }

  // 首先进行填零操作
  const dp = [];
  for (let i = 0; i < row; i++) {
    dp[i] = new Array(column).fill(0)
  }

  // 从第一行的第一列开始进行遍历
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < column; j++) {
      if (text1[j-1] === text2[i-1]) {
        dp[i][j] = dp[i-1][j-1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1]);
      }
    }
  }

  return dp[row-1][column-1];

};
```

> 上述的代码有以下几个易错点

1. 哪个字符串的长度长，哪个字符串的长度+1做列。
2. 如果是text2比较长，text1和text2需要进行交换。
3. 构造二维数组的时候fill中填入的一定要是一个常量，否则可能会出错。

## 启示
> 做了很多道动态规划的题目，我们可以发现一个动态规划的核心就是搞懂dp[i][j]，只要能够搞懂这个关键变量代表的是什么含义，那么题目往往能够迎刃而解。
