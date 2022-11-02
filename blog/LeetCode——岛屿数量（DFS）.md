---
title: LeetCode——岛屿数量（DFS）
date: 2022-03-04
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---

## 题目描述

![image.png](https://img-blog.csdnimg.cn/img_convert/a726ee4df10e19159569f0634527849c.png)

## 解题思路
> 岛屿数量是一道经典的DFS问题，要想解决这个问题，首先要搞明白下面的几个问题：

### RQ1：怎么判断是一个岛屿？
> 并不是有1的地方就是一个岛屿，一个孤立的岛屿其上下左右都是没有1的，这样的岛屿才能算作一个岛屿，这也就是为什么第一个例子中那么多个1才是一个岛屿的原因，请看下面的例子，这个图中有三个岛屿：

![image.png](https://img-blog.csdnimg.cn/img_convert/39256399ebe0f02290621118e2cb6a91.png)

### RQ2：DFS如何解决岛屿的数量问题？
> 第二个问题也就是我们解题的核心，核心思路就一句话`假如当前遍历的元素的值是1，就将岛屿数量加1,同时将其上下左右的1都变为0，然后继续循环。`

## 解题代码
```js
var numIslands = function (grid) {
    // 岛屿的数量是一道经典的DFS问题
    let row = grid.length;
    let column = grid[0].length;
    let count = 0;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (grid[i][j] === '1') {
                count++;
                dfs(i,j,grid);
            }
        }
    }
    return count;
    function dfs(i,j,grid) {
        if (i < 0 || i >= row || j < 0 || j >= column || grid[i][j] === '0') {
            return;
        }
        grid[i][j] = '0';
        dfs(i+1,j,grid);
        dfs(i,j+1,grid);
        dfs(i-1,j,grid);
        dfs(i,j-1,grid);
    }

};
```

## 同类对比
> 岛屿的数量和[岛屿的最大面积](https://juejin.cn/post/7032058260186202125)可谓是双胞胎的题目，两者都可以通过DFS进行解决，而且整个代码的结构都高度类似，区别在于岛屿的数量进入DFS函数后是将上下左右的值变为0，而岛屿的最大面积的核心是将上下左右的1加一起然后返回计算最大值。因此，在无论是在工作的时候，还是在刷题的时候，我们都要将同一类的题目进行归纳总结。