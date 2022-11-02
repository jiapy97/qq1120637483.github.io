---
title: LeetCode——岛屿的最大面积（DFS）
date: 2021-11-23
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---

## 题目描述

![image.png](https://img-blog.csdnimg.cn/img_convert/79da66feffddb420ec05addf146d22d0.png)

![image.png](https://img-blog.csdnimg.cn/img_convert/21f7bc43af376a6faae112df2d420f77.png)

## 解题思路
>本题的核心解题思路是使用DFS，所谓的DFS就是递归加标记，符合条件的元素遍历过后将其标记为已经遍历过，在本题中我们无需使用哈希表进行标记，只需将遍历过的位置变为0即可。

1. 定义二维数组的行数，即grid的长度。
2. 定义二维数组的列数，即grid[0]的长度。
3. 二层循环遍历每一个元素，不断更新最大值。
4. 将当前位置和行列数投入DFS函数中，首先进行边界条件的判断，如果不符合则返回0，如果符合则将其标记为0，表示已经遍历过，然后递归上下左右四个方向进行判断。

```js
var maxAreaOfIsland = function (grid) {
  // 本题核心是使用DFS 将遍历过的1标记为0
  let row = grid.length;
  let column = grid[0].length;
  // 定义最大面积
  let maxArea = 0;
  // 二层循环遍历每一个元素
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      maxArea = Math.max(maxArea, dfs(grid, i, j, row, column));
    }
  }
  function dfs(grid, i, j, row, column) {
    // 边界条件判断
    if (i < 0 || j < 0 || i >= row || j >= column || grid[i][j] === 0) return 0;
    let temp = 1;
    grid[i][j] = 0;
    temp = temp + dfs(grid, i + 1, j, row, column);
    temp = temp + dfs(grid, i - 1, j, row, column);
    temp = temp + dfs(grid, i, j + 1, row, column);
    temp = temp + dfs(grid, i, j - 1, row, column);
    return temp;
  }
  return maxArea;
};
```

## 题目反思
* DFS是一个重要的编程思想，其中通过DFS能解决的问题非常广泛，也是面试官的宠儿，例如岛屿的最大面积、全排列都是DFS的应用实例，DFS在我看来本质就是递归 + 标记，只要符合上述两个条件即可判断为DFS。
