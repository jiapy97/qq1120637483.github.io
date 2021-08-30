---
title: JavaScript中链表的基础结构与增加节点的方法
date: 2021-03-22
categories: LeetCode
tags: 
- LeetCode
---
## 基础结构
![](https://img-blog.csdnimg.cn/img_convert/17c6ecc0d2faad015521b6d88b5adb85.png)
## 向链表中添加节点的方法
```js
// 链表的添加方法
LinkedList.prototype.append = function (data) {
    // 1. 创建新的节点
    let node = new ListNode(data);
    // 2. 判断添加的是否是第一个节点，如果是则让头指针指向该节点
    if (this.length === 0) {
        this.head = node;
    } else {
        // 获取当前头指针指向的节点
        let current = this.head;
        // 找到最后一个节点
        while (current.next) {
            current = current.next;
        };
        // 走到这里说明，current这个指针已经指向了最后一个元素
        current.next = node;
    };
    this.length = this.length + 1;
}

const heads = new LinkedList();
const temp = [4,5,1,9];

for(let v of temp) {
    heads.append(v);
};
```