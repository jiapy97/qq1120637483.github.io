---
title: 剑指Offer——从上到下打印二叉树（JS实现）
date: 2021-04-18
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/c61588b43272861e11906e0a5ce8c202.png)

## 解题思路
* 使用队列的思想来进行层次遍历
* 数组队列存储当前节点的左右指针，然后将队头清除，知道队列中的所有元素都被清空。

## 解题代码
```js
var levelOrder = function (root) {
    if (root === null) return [];
    const result = [];
    const pointer = [root];
    while (pointer.length !== 0) {

        result.push(pointer[0].val);
        if (pointer[0].left !== null) {
            pointer.push(pointer[0].left);
        }
        if (pointer[0].right !== null) {
            pointer.push(pointer[0].right);
        }
        pointer.shift();
    }
    return result;
};
```
## 总结
* 本题属于二叉树的层次遍历问题
* 核心点在于使用队列来存储当前节点的左右子节点。
* 队列的判断条件是队头元素是否存在。
