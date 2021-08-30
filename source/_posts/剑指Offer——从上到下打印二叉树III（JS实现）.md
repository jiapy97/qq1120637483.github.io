---
title: 剑指Offer——从上到下打印二叉树III（JS实现）
date: 2021-04-23
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/b174fe4dd4c944a085edfbefa6c3942b.png)

## 解题思路
* 这道题属于二叉树的层次遍历问题
* 首先定义三个数组
* 数组queue用来存放当前层的所有元素指针
* 数组temp充当临时数组，用来存放当前元素所有指针的左右孩子指针
* 数组test用来存放每一层元素的值
* 当test存储完一层的元素后，就将queue置为空，然后遍历temp将每个元素的左右孩子节点继续放入queue，继续下次循环

## 解题代码
```js
var levelOrder = function (root) {
    // 使用队列的方式进行二叉树的层次遍历
    if (root === null) return [];
    let queue = [];
    const result = [];
    queue.push(root);
    while (queue.length !== 0) {
        const temp = [];
        const test = [];
        for (let v of queue) {
            temp.push(v);
            test.push(v.val);
        }
        result.push(test);
        queue = [];
        for (let v of temp) {
            if (v.left !== null) {
                queue.push(v.left)
            }
            if (v.right !== null) {
                queue.push(v.right)
            }
        }

    }
    for (let i = 0; i < result.length;i++) {
        if (i % 2 !== 0) {
            result[i] = result[i].reverse()
        }
    }
    return result;
};
```
## 总结
* 本题乍一看不难，大家也都容易想到一定的思路，但是难就难层次的遍历上
* 本题可以采用一个数组来记录当前层，另一个数组来记录当前层的所有子节点，然后将当前层清空，使用所有子节点的层继续遍历。
