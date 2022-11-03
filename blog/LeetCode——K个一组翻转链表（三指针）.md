---
title: LeetCode——K个一组翻转链表（三指针）
date: 2021-11-12
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---

## 题目描述

![image.png](https://img-blog.csdnimg.cn/img_convert/b5e72973697fc02eb24bd50bc40767a4.png)

## 解题思路
1. 首先判断传入的链表的长度是否小于K，如果小于K则返回原链表。
2. 如果传入的链表的长度大于等于k，则继续下面的判断。
3. 初始化两个指针，prev和cur,prev指针初始的时候为null,cur初始的时候为head指针指向的位置。
4. 核心循环：首先保存当前指针的下一个指针，然后让prev前进一个，让cur前进一个，最后将cur指针指向的投入递归，所有递归结束的时候，返回prev。

## AC代码
```js
var reverseKGroup = function(head, k) {
  // 首先判断传入的链表的长度是否小于k，如果小于k，则返回原链表
  let flag = 0;
  let temp = head;
  while (temp) {
    temp = temp.next;
    flag++;
  }
  if (flag < k) {
    return head;
  }
  // 初始化指针
  let prev = null;
  let cur = head;
  let n = k;
  while (cur != null && n-- > 0) {
    // 首先保存后一个节点
    let next = cur.next;
    // cur指针的next域指向前一个节点
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  // 修改head指针的next域指向递归的返回结果
  head.next = reverseKGroup(cur,k);
  return prev;
};
```

## 图解核心思路
![image.png](https://img-blog.csdnimg.cn/img_convert/b9c34525dc547d9dad167255923006c4.png)

## 题目反思
* 关于链表反转类题目，可能会用到三指针，我们要想到这一点。
* 指针反转的时候，很重要的一步就是保存后一个指针，防止这个指针丢失。
* 循环的时候，一定要搞清楚当循环结束的时候，每一个指针所在的位置，以及每一个指针的含义，只有搞清楚这一点，才知道将哪一个指针投入递归，才明白递归返回的结果的含义。
* 链表类的题目中，反转各种链表是面试的常考题，这道题目指的我们反复揣摩。

## 参考链接
* [LeetCode题解](https://leetcode-cn.com/problems/reverse-nodes-in-k-group/solution/25-k-ge-yi-zu-fan-zhuan-lian-biao-by-xin-wves/)


