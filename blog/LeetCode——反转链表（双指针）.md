---
title: LeetCode——反转链表（双指针）
date: 2021-8-13
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---
## 题目描述
![image.png](https://img-blog.csdnimg.cn/img_convert/b4dfcd4d94b3d80f8f9122807a210da2.png)

## 解题思路
1. 采用一个指针指向当前节点，cur节点的初始值为head.
2. 采用另一个指针指向当前节点的前一个节点(pre),该节点的初始值为null.
3. 每当我们修改当前指针的指向的时候，一定要保存当前指针的后一个节点.

## 解题代码
```js
var reverseList = function(head) {
    let cur = head;
    let pre = null;

    while (cur) {
        // 首先保存当前节点的下一个节点
        let temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
    }
    return pre;
};
```

## 题目反思
* 学会使用双指针来解决反转链表问题。
* 本题尤其值的我们反复练习，因为本题在修改指针的指向的时候，需要保存当前指针的下一个节点，这是解决反转链表的一个很好的思路。
