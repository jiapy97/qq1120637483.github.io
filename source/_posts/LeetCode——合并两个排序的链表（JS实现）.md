---
title: LeetCode——合并两个排序的链表（JS实现）
date: 2021-04-09
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/615bcca73cd8341eb6a92718d15c9128.png)

## 解题思路
* 创建一个新的链表节点newNode
* 指定一个临时指针h指向这个新的节点newNode
* 使用while循环，在条件为L1和L2都不为空的条件下遍历，如果L1当前数据域的值小，就让newNode指向L1，反之指向L2
* while循环遍历完之后，如果L1和L2谁还有剩余，谁就加到newNode的尾部。
* 最后返回的是h临时指针的next域，因为h临时指针刚开始指向的是我们新创建的节点。

## 实现代码
```js
var mergeTwoLists = function(l1, l2) {
    // 首先创建一个新的节点
    let newNode = new ListNode();
    const h = newNode;
    // 循环遍历两个列表
    while (l1 && l2) {
        if (l1.val < l2.val) {
            newNode.next = l1;
            l1 = l1.next;
            newNode = newNode.next;
        } else {
            newNode.next = l2;
            l2 = l2.next;
            newNode = newNode.next;
        }
    } 
    if (l1) newNode.next = l1;
    if (l2) newNode.next = l2;
    return h.next;
};
```