---
title: 剑指Offer——两个链表的第一个公共节点（JS实现）
date: 2021-04-18
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/33292c4242dcc20a1622ccb475a9563f.png)

## 解题思路
* 首先遍历两个链表。
* 在遍历的时候，使用临时节点去遍历，而不要使用系统给的头节点，因为如果使用系统给的头节点，遍历到最后，不好找到头节点，但是系统却要我们返回头节点。
* 使用两个集合分别用来存储每一个链表。
* 然后遍历其中一个链表的元素，如果该元素同时出现在第二个链表中，将该元素返回即可。

## 解题代码
```js
var getIntersectionNode = function(headA, headB) {
    let nodeA = headA;
    let nodeB = headB;
    const setA = new Set();
    const setB = new Set();
    while (nodeA) {
        setA.add(nodeA);
        nodeA = nodeA.next;
    }
    while (nodeB) {
        setB.add(nodeB);
        nodeB = nodeB.next;
    }
    for (let v of setA) {
        if (setB.has(v)) {
            return v;
        }
    }
};
```
## 总结
* 本题属于较为简单的循环遍历即可解决的问题。
* 本题的关键在于判断一个元素是否在另一个链表中，所以可以通过循环+集合的方式来解决。
