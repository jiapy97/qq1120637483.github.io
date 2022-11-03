---
title: 剑指Offer——数组中重复的数字（JS实现）
date: 2021-04-16
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/3eec1eba0d8b236c3aa01b8b12450aae.png)

## 解题思路
* 使用Map数据结构键存储元素，值存储出现的次数
* 只要出现重复，直接返回

## 实现代码
```js
var findRepeatNumber = function(nums) {
    const m = new Map();
    for (let v of nums) {
        if (m.has(v)) {
            return v;
        } else {
            m.set(v,1);
        }
    }
};
```