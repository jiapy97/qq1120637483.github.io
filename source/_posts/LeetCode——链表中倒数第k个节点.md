---
title: LeetCode——链表中倒数第k个节点
date: 2021-03-30
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/426cae4028de1cd7a1867c8a20765cb2.png)

## 解题思路
* 本题采用快慢指针的思路。
* 快指针先走k步。
* 然后快慢指针同步走。
* 当快指针的next域为空的时候，慢指针再多走一步即到了倒数第K个节点。
* 本题存在一种特殊情况，即当链表只有一个节点时，直接返回节点的头指针。
## 实现代码
```js
var getKthFromEnd = function(head, k) {
    // 本题采用快慢指针的方法
    // 首先定义一个快指针
    let fast = head;
    let slow = head;
    for(let i = 1;i <= k;i++) {
        fast = fast.next;
    }
    if(fast === null) {
        return head;
    }
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    slow = slow.next;

    return slow;
};
```