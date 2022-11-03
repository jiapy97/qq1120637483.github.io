---
title: LeetCode——环形链表（快慢指针）
date: 2022-01-01
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---

## 题目描述

![image.png](https://img-blog.csdnimg.cn/img_convert/c0edd8eae273ffde940785b9413d94bc.png)

## 解题思路

> 环形链表这个题目最容易出现错误的地方就是死循环的问题，所以我们要注意防止出现死循环，关键的思想就在于如果一个链表是环形链表，一个指针走得快，另一个指针走得慢，那么这两个指针一定会相遇，这就是这道题的核心思想，也是判断链表是否有环的关键思想。

```js
var hasCycle = function(head) {
  // 快慢指针是解决环形链表的不二法门
  let fast = head;
  let slow = head;

  while (fast) {
    if (fast.next === null) {
      return false;
    }
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) return true;
  }

  return false;
};
```

## 题目反思
> 判断一个链表是否有环，通过快慢指针是否相遇来进行判断是一个很值得学习到的思路。