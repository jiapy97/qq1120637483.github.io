---
title: 剑指Offer——从上到下打印二叉树II（JS实现）
date: 2021-04-15
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/b4a610aff767441c1478980774813aad.png)

## 解题思路
* 使用队列来存储同一层的元素
* 使用数组1来存放同一层元素的所有值
* 使用数组2来存放用一层元素的所有指针
* 将数组1放进结果列表
* 将数组2所有元素的左右孩子放进队列，当队列的长度不为零的时候继续循环。

## 实现代码
```js
var levelOrder = function (root) {
    // 如果系统给的根元素为空，直接返回
    if (!root) return [];
    // 定义一个队列用于存放同一层的元素
    let queue = [];
    // 首先让根元素入队
    queue.push(root);
    // 只要队中有元素就进入循环
    // 定义最终结果数组
    const res = [];
    while (queue.length !== 0) {
        // res.push([...queue]);
        const temp = [];
        const temp2 = []
        // 队列首元素出队
        while (queue[0]) {
            temp2.push(queue[0].val);
            temp.push(queue.shift())
        }
        res.push(temp2);
        while (temp[0]) {
            if (temp[0].left !== null) queue.push(temp[0].left);
            if (temp[0].right !== null) queue.push(temp[0].right);
            temp.shift();
        }
    }
    return res;
};
```