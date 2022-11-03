---
title: 剑指Offer——二叉搜索树与双向链表（JS实现）
date: 2021-04-17
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/75fb0e7a16f1c5a91bef85b2918cdfe1.png)

## 解题思路
* 使用二叉树的中序遍历，将每一个节点存到一个数组中
* 使用for循环改变每个节点的left，right指针域

## 实现代码
```js
var treeToDoublyList = function (root) {
    const temp = [];
    function dfs(root) {
        if (!root) return null;

        dfs(root.left);
        temp.push(root)
        dfs(root.right);
        return null;
    }
    dfs(root);
    const len = temp.length;
    for (let i = 0; i < temp.length; i++) {
        if (i !== 0) {
            temp[i].left = temp[i - 1];
        } else {
            temp[i].left = temp[len-1];
        }
        if (i !== len - 1) {
            temp[i].right = temp[i + 1];
        } else {
            temp[i].right = temp[0];
        }
    }
    return temp[0];
};
```