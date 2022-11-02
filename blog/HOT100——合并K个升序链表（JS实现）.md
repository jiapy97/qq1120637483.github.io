---
title: HOT100——合并K个升序链表（JS实现）
date: 2021-06-15
categories: LeetCode
tags: 
- LeetCode
---

## 题目描述
![image.png](https://img-blog.csdnimg.cn/img_convert/319a49c3742d1a12fdd64647f270f1a5.png)

## 解题思路
* 暴力法
1. 首先遍历每一个链表元素，然后将其值存入到一个数组中。
2. 将第一步获得的数组进行排序。
3. 遍历第二步的数组，分别生成节点，然后存入一个临时数组。
4. 以第三步获得的临时数组为基础，依次修改指针的指向，最后返回头指针即可。

## 解题代码
```js
var mergeKLists = function(lists) {
    // 暴力法
    if (lists.length === 0) return null
    const res = [];
    for (let v of lists) {
        while (v) {
            res.push(v.val);
            v = v.next;
        }
    }
    if (res.length === 0) return null;
    res.sort((num1,num2) => num1 - num2);
    const temp = [];
    for (let v of res) {
        temp.push(new ListNode(v))
    }
    for (let i = 0; i < temp.length-1; i++) {
        temp[i].next = temp[i+1];
    }
    temp[temp.length-1].next = null;
    return temp[0]
};
```

## 启示
* 学会使用数组来辅助链表的生成与遍历。
