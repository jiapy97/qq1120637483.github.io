---
title: LeetCode——二叉搜索树的第K大的节点
date: 2021-04-05
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/385b4bb94b1d322da577b788c6022680.png)

## 解题思路
* 首先构建一个集合用来存储遍历的所有元素。
* 使用DFS遍历二叉树，并将结果存到集合中。
* 将集合转化为数组
* 通过sort方法进行降序排序
* 排好序的数组的下标为[k-1]的元素即为二叉搜索树的第K大的元素

## 实现代码
```js
var kthLargest = function(root, k) {

    const set = new Set();
    const dfs = function(node) {
        if (node === null) {
            return;
        }

        set.add(node.val);
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);
    const arr = [...set];
    arr.sort((a,b) => {
        return b-a;
    });

    return arr[k-1];

};
```