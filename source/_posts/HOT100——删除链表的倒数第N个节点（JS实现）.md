---
title: HOT100——删除链表的倒数第N个节点（JS实现）
date: 2021-06-08
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/e3046f870e63461d60c4eb2e81ceeb12.png)

## 解题思路
* 本题主要思路是使用哈希表，具体思路如下：
1. 使用哈希表存储每一个节点，键为第几个元素，值为当前节点指针。
2. 找到倒数第几个节点的键。
3. 修改当前键的值的前一个和后一个nxet域即可。

## 实现代码
```js
var removeNthFromEnd = function(head, n) {
    if (!head) return null;
    // 建立哈希表
    const m = new Map();
    // 让临时指针指向head
    let temp = head;
    let i = 1;
    // 循环开始
    while (temp) {
        m.set(i,temp);
        temp = temp.next;
        i++;
    }
    const x = i - n;
    if (x > 1) {
        m.get(x-1).next = m.get(x+1) || null;
    } else {
        return head.next;
    }

    return head
};
```

## 启示
* 学会通过哈希表来遍历链表节点。