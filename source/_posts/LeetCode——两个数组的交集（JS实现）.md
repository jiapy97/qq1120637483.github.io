---
title: LeetCode——两个数组的交集（JS实现）
date: 2021-7-24
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---
## 题目描述
![image.png](https://img-blog.csdnimg.cn/img_convert/fe4d35dcad75d216871e8a01071d9645.png)

## 解题思路
* 首先通过集合的方式对数组进行去重。
* 去重之后遍历其中一个数组，如果该数组在另一个数组中则将其加入到结果数组中。
* 最后返回结果数组。

## 解题代码
```js
var intersection = function(nums1, nums2) {
    const temp1 = [...new Set(nums1)]
    const temp2 = [...new Set(nums2)];
    const result = [];
    for (let v of temp1) {
        if (temp2.includes(v)) {
            result.push(v)
        }
    }
    return result
};
```

## 题目反思
* 学会使用集合对数组去重。
* 学会使用includes判断数组中是否存在某一元素。

