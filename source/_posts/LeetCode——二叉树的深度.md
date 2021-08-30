---
title: LeetCode——二叉树的深度
date: 2021-03-29
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/494c120d7576940bb53f815f390ceaad.png)

## 解题思路
* 使用递归的思想，去左子孩子的最大深度和右子孩子的最大深度中的最大值 + 1

## 解题代码
```js
var maxDepth = function(root) {
    if (!root) {
        return 0;        
    }

    return Math.max(maxDepth(root.left),maxDepth(root.right)) + 1;
};
```
