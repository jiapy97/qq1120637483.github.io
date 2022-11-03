---
title: LeetCode——翻转链表（JS实现）
date: 2021-04-07
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/6a1b744eaee685ba71a813a35418ef9d.png)

## 解题思路
* 首先使用一个node指针记录头指针
* 使用while循环遍历链表，将链表中的每个值保存在一个数组中。
* 然后使用result指针记录头指针，node指针开始往后遍历
* node指针每遍历一次，将数据域修改为数组.pop
* 最后返回result指针

## 实现代码
```js
var reverseList = function(head) {
    // 首先遍历这个链表
    let arr = [];
    let node = head;
    while(head) {
        arr.push(head.val);
        head = head.next;
    }
    let result = node;
    while(node) {
        node.val = arr.pop();
        node = node.next;
    }
    return result;
};
```