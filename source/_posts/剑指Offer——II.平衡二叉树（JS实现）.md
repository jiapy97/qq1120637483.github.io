---
title: 剑指Offer——II.平衡二叉树（JS实现）
date: 2021-04-24
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/592d2f408b11526e1e85b5a9ce589285.png)

## 解题思路
* 这道题属于二叉树考查深度的问题
* 本题的核心在于知道二叉树的深度怎么求：二叉树的深度 = 左子树的深度与右子树的深度中的最大值 + 1，这是核心解题点

## 解题代码
```js
var isBalanced = function(root) {
    let flag = true;
    dfs(root);
    return flag;
    function dfs(root) {
        if (!root) return 0;
        let l = dfs(root.left);
        let r = dfs(root.right);
        if (Math.abs(l - r) > 1) {
            flag = false;
        }
        return Math.max(l,r) + 1;
    }
};
```
## 总结
* 本题给我们的启示就是二叉树的深度怎么求：
* 左子树与右子树中选最大的那个+1就是目标节点的深度。
