---
title: LeetCode——删除链表的节点
date: 2021-03-22
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/d4dcf2f3f7d2c54a88dde94549a3f7b5.png)
## 解题思路
* 参数的head指的是链表的头指针。
* val指的是目标number
* 首先判断要删除的是不是第一个头节点，如果是头节点，直接让头指针指向下一个节点，然后返回。
* 如果不是头节点，首先使用临时指针记录这个头指针的位置，让临时指针往后遍历，头指针不要移动了。
* 使用while循环进行遍历，当临时指针的next节点的值等于要删除的节点，那么让临时指针的next指向临时指针的next的next。
* 因为head指向的是引用型变量，临时指针修改也会影响到head的，所以最后返回head即是我们要返回的头指针。
## 解题代码
```js
var deleteNode = function (head, val) {
    // 这里的head指的不是链表，而是链表的头指针
    // 如果删除的是头节点的话，直接返回头节点的下一个节点
    if(head.val === val) {
        return head.next;
    };
    // 如果函数走到这里说明删除的不是头节点
    // 用临时变量记录头指针
    let node = head;
    while(node.next.val !== val) {
        node = node.next;
    }
    node.next = node.next.next;
    return head;
};
```
