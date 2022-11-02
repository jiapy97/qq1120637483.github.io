---
title: LeetCode——二叉树的镜像
date: 2021-03-27
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/38172ea25f3380b97a1b214c40e83eb6.png)

## 解题思路
* 需要明确指出的是我们返回的排序好的root对象
* 我们首先判断root这个参数的左右孩子节点是否为空，只要为空，则说明排序好了。
* 不为空，则使用交换方法，交换左右指针。
* 最后使用递归，将左右孩子节点继续投入函数中。

## 实现代码
```js
var mirrorTree = function (root) {
    fun(root);
    return root;

};
var fun = function (root) {


    if (root !== null) {
        var temp;
        temp = root.left;
        root.left = root.right;
        root.right = temp;
        mirrorTree(root.left);
        mirrorTree(root.right);
    }

};
```