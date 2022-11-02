---
title: LeetCode——二叉树的最大深度（递归法+层序遍历）
date: 2021-12-09
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---

## 题目描述

![image.png](https://img-blog.csdnimg.cn/img_convert/7e5e43ad3c819aee3f2f5294f9165077.png)

## 解题思路
>二叉树的最大深度的解题方法有很多种，但是我们要做的是使用通用的思路来求解，比如使用层序遍历的方法首先用数组保存整个树的所有节点到数组中，然后返回这个二维数组的长度就是这个二叉树的最大深度，之所以要这样做，是因为我们的解题方法是通用的，这个思路既可以求解这个问题，也可以进行二叉树的遍历。

```js
var maxDepth = function(root) {
  // 使用递归法层序遍历二叉树
  if (!root) return 0;
  let result = [];

  function levelOrder(root,level) {
    if (!root) return;
    result[level] = result[level] || [];
    result[level].push(root.val);
    levelOrder(root.left,level + 1);
    levelOrder(root.right,level + 1);
  }
  levelOrder(root,0);
  return result.length;
};
```

## 题目反思
>在刷题的时候，我们一定不能只是一味追求数量，当然了数量也很重要，但是对不同的题目追求统一的思路，绝对是有帮助的，因为这样我们可以用一个思路来求解一类题目。

## 参考链接
* [剑指Offer——二叉树的深度（JS实现](https://juejin.cn/post/6948664418787917861)