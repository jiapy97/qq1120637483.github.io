---
title: LeetCode——二叉树的层序遍历（递归与非递归）
date: 2021-10-27
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---

## 题目描述

![image.png](https://img-blog.csdnimg.cn/img_convert/529dbcc0afd64c348aa3db92f4bfbc46.png)

## 递归实现
>递归实现主要是在函数内部定义一个新的函数，这个函数接收两个参数，一个是当前节点，一个是层次，如果当前节点为空的话，则返回空，如果当前节点不为空，判断二维数组的指定位置是否为空，如果存在则push进当前节点的val值，如果不存在则设置为空数组，然后递归遍历左子树，层次+1，递归遍历右子树的时候层次还是+1。

```js
var levelOrder = function(root) {
  // 定义最终的返回结果
  const res = [];
  function levelOrder(root,level) {
    if (!root) return null;
    res[level] = res[level] || [];
    res[level].push(root.val);
    levelOrder(root.left,level + 1);
    levelOrder(root.right,level + 1);
  };
  levelOrder(root,0);
  return res;
};
```

## 非递归实现
>非递归实现主要是借助队列来实现，首先获取队列中对应二叉树的一层的元素，然后取出队头元素插入指定二维数组中，如果左子树存在的话，让左子树入队列，如果右子树存在，则让右子树入队列，循环完一层队列的层次+1。

```js
var levelOrder = function(root) {
  if (!root) return []
  // 定义最终的返回结果
  const res = [];
  // 定义队列
  const queue = [root];
  // 定义层次
  let level = 0;
  // 只要队列中有元素，便进入循环
  while (queue.length) {
    res.push([]);
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      // 取出对头元素
      let node = queue.shift();
      res[level].push(node.val);
      // 左子树存在的话，让左子树入队列
      node.left && queue.push(node.left);
      // 右子树存在的话，让右子树入队列
      node.right && queue.push(node.right);
    }
    level++;
  }
  return res;
};
```

## 题目反思
>二叉树的层序遍历是一种非常重要的遍历方式，是我们必须掌握的，本题中值得我们学习的思路有以下几点。

1. 使用递归的层序遍历和使用迭代的层序遍历都需要借助层数level这个变量。
2. 递归的思想和队列的思想值得我们学习。

