---
title: LeetCode——复杂链表的复制（JS实现）
date: 2021-04-09
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/7c662a149351fdfcc552b7753e3b9c36.png)

## 解题思路
* 使用Map数据结构来进行赋值
* 键存放指向节点的指针
* 值存放new Node
* 第一次循环构建Map数据结构
* 第二次循环给值的next域和random域进行赋值
* 记住一点：这里的值的next域和random域不能指向node的节点，只能指向map数据结构中的值的节点

## 实现代码
```js
var copyRandomList = function(head) {

    // 首先创建一个Map，键用来存储head指针域，值用来存储复制的节点
    let node = head;
    const m = new Map();

    // 遍历现有链表
    while (node) {
        m.set(node,new Node(node.val));
        node = node.next;
    }
    // 到这里，链表的键已经存放的是指针，值存放的是next域和random域为空，值为指针所指的val
    // 让node重新指向head
    node = head;
    // 第二次遍历，给Map数据结构中的值，添加上next域和random域
    while (node) {
        m.get(node).next = node.next ? m.get(node.next):null;
        m.get(node).random = node.random ? m.get(node.random):null;
        node = node.next;
    }
    node = head;
    return m.get(node);

};
```