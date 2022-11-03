---
title: 剑指Offer——重建二叉树（JS实现）
date: 2021-04-12
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/28e0b7455f40ae12495741b4cc2d4868.png)

## 解题思路
* 首先我们要明白遍历规则。
* 前序遍历指的是根>左>右
* 中序遍历指的是左>根>右
* 使用递归遍历的思想，首先定义递归结束条件，如果输入的列表只有一个元素，则直接返回这个树节点。
* 让前序遍历数组的第一个元素作为根节点。
* 定义变量i用来分割中序遍历数组中的左右子树，这个i就是根节点在中序遍历数组中的下标。
* 两个参数，可以分别理解为子树的前序遍历和中序遍历

## 实现代码
```js
var buildTree = function (preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) {
        return null;
    }
    if (preorder.length === 1) {
        return new TreeNode(preorder[0]);
    }
    let root = new TreeNode(preorder[0]);
    let i = inorder.indexOf(preorder[0]);
    root.left = buildTree(preorder.slice(1,i+1),inorder.slice(0,i));
    root.right = buildTree(preorder.slice(i+1),inorder.slice(i+1));

    return root;
};
```