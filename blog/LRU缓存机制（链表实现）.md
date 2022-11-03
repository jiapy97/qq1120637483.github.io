---
title: LRU缓存机制（链表实现）
date: 2021-11-04
author: Justin
top: false
cover: false
categories: 面试题
tags:
  - 面试题
---

## 题目描述

![image.png](https://img-blog.csdnimg.cn/img_convert/91b12e01229b5fbfdefa3871570f1912.png)

## 解题思路
1. 构造一个链表节点类和一个LRU缓存类。
2. 一个链表的节点应该具有key,value,和next指针和prev指针。
3. 一个LRU的实例应该具有容量capacity，hash对象，表示这个LRU中节点的数量值的count,两个辅助链表节点，分别指向最近使用的元素，和最久未使用的元素。
4. get方法：无论是get方法还是put方法，都要首先取出key对应的节点，判断这个节点是否是undefined，如果不存在，直接返回-1，如果存在，将其从链表中删除，然后添加到辅助链表Head的指向位置，然后返回该节点的值。
5. put方法：首先取出key对应的节点，判断这个节点是否是undefined,如果不是undefiend,更新其值，然后从链表中删除，然后添加到辅助头节点指向的位置，如果不存在，首先判断LRU中节点的数量和容量是否相等，如果相等，则说明已经满了，此时从尾部辅助链表前取出该元素，然后删除链表中的该元素，然后从hash对象中也删除，同时count--，然后创造一个新节点，存入key,value，然后添加到链表和hash对象中，同时更新count的值。

## AC代码

```js
// 首先构造一个链表节点类
class ListNode {
  constructor(key,value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

// 构造一个LRU缓存类
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.hash = {};
    this.count = 0;
    // 这里的head可以理解为最近使用过的，tail则可以理解为最久未使用的
    this.dummyHead = new ListNode();
    this.dummyTail = new ListNode();
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.prev = this.dummyHead;
  }

  // 实现get方法
  get(key) {
    // 首先取出hash对象中这个键对应的节点
    let node = this.hash[key];
    // 如果这个节点不存在，返回-1
    if (node === undefined) return -1;
    // 如果这个节点存在的话，从链表中移除已有节点，然后再添加到头部
    this.deleteFromList(node);
    this.addToHead(node);
    return node.value;
  }

  // 实现put方法
  put(key,value) {
    // 首先取出哈希对象中这个键对应的节点
    let node = this.hash[key];
    // 分存在和不存在两种情况进行讨论
    if (node === undefined) {
      // 如果LRU是满的
      if (this.count === this.capacity) {
        // 取出最久未使用的
        let tail = this.dummyTail.prev;
        // 从LRU中删除
        this.deleteFromList(tail);
        // 从hash对象中删除
        delete this.hash[tail.key];
        // LRU的数量-1
        this.count--;
      }
      // 创造一个新的节点
      let newNode = new ListNode(key,value);
      this.hash[key] = newNode;
      this.addToHead(newNode);
      this.count++;
    } else {
      // 更新value
      node.value = value;
      this.deleteFromList(node);
      this.addToHead(node);
    }
  }


  deleteFromList(node) {
    let temp1 = node.prev;
    let temp2 = node.next;
    temp1.next = temp2;
    temp2.prev = temp1;
  }
  addToHead(node) {
    node.prev = this.dummyHead;
    node.next = this.dummyHead.next;
    this.dummyHead.next.prev = node;
    this.dummyHead.next = node;
  }
}
```

## 题目反思
>关于LRU缓存机制这个题目，我们可以采用Map做，也可以采用hash对象+链表的形式做，但是从题目简洁的程度看，Map的方法更加易懂，更加简洁。