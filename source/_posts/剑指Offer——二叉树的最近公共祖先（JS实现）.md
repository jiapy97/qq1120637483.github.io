---
title: 剑指Offer——二叉树的最近公共祖先（JS实现）
date: 2021-04-11
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/f856687e8f17daf96eb8ddb3f6110d3e.png)

## 解题思路
* 使用DFS的遍历思想进行遍历二叉树
* 如果为空节点或p节点或q节点，直接返回该节点
* 遍历的时候，看返回值，如果p和q都存在就返回当前的root节点，如果只有一个存在就反返回不为空的节点。

## 实现代码
```js
var lowestCommonAncestor = function(root, p, q) {
    if (root === null || root === p || root === q) {
        return root;
    }

    let x = lowestCommonAncestor(root.left,p,q);
    let y = lowestCommonAncestor(root.right,p,q);

    if (x && y) {
        return root;
    } else {
        return x || y;   // 返回存在的那一个
    }
};
```