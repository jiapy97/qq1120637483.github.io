---
title: HOT100——合并两个有序列表（JS实现）
date: 2021-06-09
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/966b3fd3b508e1c8c22e0cec3e5f7b7f.png)

## 解题思路
* 首先我们要看清题干，本题给出的两个链表都是有序的，所以我们可以考虑双指针。
* 使用一个指针指向了l1的头节点，使用另一个指针指向l2的头节点，比较大小谁小谁添加到新节点的下一个。
* 当一个遍历完之后，结束循环，如果另一个有剩余则将其全部加到最新的链表末尾。

## 解题代码
```js
var mergeTwoLists = function(l1, l2) {
    // 首先两个链表都是升序的，我们可以考虑双指针
    let left = l1;
    let right = l2;
    const node = new ListNode();
    let head = node;
    while (left && right) {
        if (left.val < right.val) {
            head.next = left;
            left = left.next; 
            head = head.next;
        } else {
            head.next = right;
            right = right.next;
            head = head.next;
        }
    }
    if (!left && right) {
        head.next = right;
    }
    if (!right && left) {
        head.next = left;
    }
    return node.next
};
```

## 启示
* 学会使用双指针来对链表进行合并排序。