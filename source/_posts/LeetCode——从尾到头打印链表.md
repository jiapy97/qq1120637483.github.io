---
title: LeetCode——从尾到头打印链表
date: 2021-04-01
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/6ab0084ce5457baede1a65c26ac210c8.png)

## 解题思路
* 首先遍历链表，将链表中的每一个值都存在一个数组中。
* 然后倒叙遍历这个数组，最后返回

## 实现代码
```js
var reversePrint = function(head) {
    const arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }

    const result = [];
    const len = arr.length;
    for (let i = 0; i < len;i++) {
        result.push(arr.pop());
    }

    return result;

};
```