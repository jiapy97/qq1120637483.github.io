---
title: 剑指Offer——二叉搜索树的最近公共祖先（JS实现）
date: 2021-04-14
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/545c2aa0bd97eab3bd16648be84aacff.png)

## 解题思路
* 使用DFS的遍历思想，遍历二叉树。
* 递归的结束条件是：当前节点为null或为q,或为p则返回。
* 判断获得的左右子树返回的结果，如果右子树为空，返回左子树，左子树为空返回右子树，左右子树都不为空，返回当前节点node

## 实现代码
```js
// 二叉搜索树的特点：左子树 < 根节点 < 右子树
var lowestCommonAncestor = function (root, p, q) {
    if (root === null || root === p || root === q) {
        return root;
    }
    let l = lowestCommonAncestor(root.left, p, q);
    let r = lowestCommonAncestor(root.right, p, q);
    if (l === null && r === null) {
        return null;
    }
    if (l !== null && l.val < root.val && r === null) {
        return l;
    }
    if (l === null && r !== null && r.val > root.val) {
        return r;
    }
    if (l.val < root.val && r.val > root.val) {
        return root;
    }

};
```
