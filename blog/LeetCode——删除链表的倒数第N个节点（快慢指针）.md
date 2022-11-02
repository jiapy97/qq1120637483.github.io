---
title: LeetCode——删除链表的倒数第N个节点（快慢指针）
date: 2022-01-30
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---

## 题目描述

![image.png](https://img-blog.csdnimg.cn/img_convert/897a6d3ff3223bcd873c903ef8be95b8.png)

## 解题思路
> 删除链表的倒数第N个结点，有很多种解法，本次我们重点介绍的是快慢指针法，快慢指针在解决链表问题的时候，通常能够快速解决问题，这主要取决于快慢指针的特点。

### 快慢指针为什么能够找到链表的倒数第N个节点
> 假设一个链表有五个节点，我们想要删除倒数第2个节点，我们首先让快指针、从第一个节点的位置触发，走2+1个节点，我们能够发现此时快指针有两种情况，一是走到了null，二是走到了倒数倒数第2个节点，此时我们分情况讨论：

* 快指针走到了null，此时如果还没有走完n + 1个节点
    * 让满秩阵继续走完剩余的节点数量，然后返回慢指针即可。
* 快指针走到了倒数第N个节点
    * 此时快慢指针同时继续走，一旦快指针走到了null，删除慢指针的下一个节点，然后返回头指针即可。
    
## 解题代码
```js
var removeNthFromEnd = function(head, n) {
  // 删除链表的倒数第N个节点是一个典型的双指针问题
  let slow = head;
  let fast = head;
  let temp = head;
  // 第一步：让快指针先走n步
  let count = n+1;
  while (count && fast) {
    fast = fast.next;
    count--;
  }
  if (!fast && count) {
    while (count) {
      slow = slow.next;
      count--;
    }
    return slow;
  }
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  let stemp = slow.next.next;
  slow.next = stemp;
  return temp;
};
```

## 题目反思
> 删除链表的倒数第N个节点，快慢指针是一种经典的方法，快慢指针不仅能够解决这道题目，在面试中还经常考查到判断链表是否由环，这个也是快慢指针的经典应用，因此，在解决问题的时候，我们一定要学会举一反三，寻找规律。


