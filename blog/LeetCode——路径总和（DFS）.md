---
title: LeetCode——路径总和（DFS）
date: 2021-9-26
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---

## 题目描述

![image.png](https://img-blog.csdnimg.cn/img_convert/3280f107030b2a8e6f5c3f30be334022.png)

## 解题思路

>本题的核心解题思路是使用DFS，每次遍历完一条路径，走到叶子节点之后看是否这条路径的和与targetsum一致，一致则返回true，反之则返回false。

## AC代码

```js
var hasPathSum = function (root, targetSum) {
    
    if (!root) return false;

    if (root.left === null && root.right === null) {
        if (targetSum - root.val === 0) {
            return true;
        }
        return false;
    }

    return hasPathSum(root.left,targetSum-root.val) || hasPathSum(root.right,targetSum-root.val);

};
```

## 题目反思
* 学会DFS来遍历二叉树。
* 学会使用递减归零的思想来判断和的问题。

