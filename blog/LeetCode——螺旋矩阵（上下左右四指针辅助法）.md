---
title: LeetCode——螺旋矩阵（上下左右四指针辅助法）
date: 2022-01-15
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---

## 题目描述

![image.png](https://img-blog.csdnimg.cn/img_convert/f46645b5c48abc5efe0db37ebf116873.png)

## 解题思路
1. 首先定义四个指针，指向如下图所示：

![image.png](https://img-blog.csdnimg.cn/img_convert/95b25fd9d4f6f092d6c77935e63552b7.png)

2. 按照顺时针进行遍历，分别是从左到右、从上到下、从右到左、从下到上的思路。

3. 一轮循环后让左指针+1，继续下一轮循环，需要注意的是每次移动指针的时候，都需要注意指针是否越界。

```js
var spiralOrder = function(matrix) {
  // 螺旋矩阵的核心是使用四个指针来辅助遍历
  // 首先是初始条件的判断，如果矩阵的长度为0，则返回空数组
  if (matrix.length === 0) return [];

  // 定义四个指针
  let left = 0;
  let top = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;

  // 定义最终返回的结果
  const res = [];

  // 开始遍历
  while (1) {
    // 主要是按照顺时针进行遍历
    // 第一步：从左到右
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i])
    }
    // 第二步：从上到下
    top++;
    if (top > bottom) break;
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    // 第三步：从右到左
    right--;
    if (right < left) break;
    for (let i = right; i >= left; i--) {
      res.push(matrix[bottom][i])
    };
    // 第四步：从下到上
    bottom--;
    if (bottom < top) break;
    for (let i = bottom; i >= top; i--) {
      res.push(matrix[i][left])
    }
    // 第五步：也是最容易被遗忘的一步
    left++;
    if (left > right) break;
  }

  return res;

};
```

## 题目反思
> 螺旋矩阵和顺时针打印矩阵是同一道题目，这个题目既出现在了剑指Offer中，也出现在了很多面试场合中，因此这个题目我们一定要搞懂，本质就是指针辅助加条件判断。