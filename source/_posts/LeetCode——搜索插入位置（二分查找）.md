---
title: LeetCode——搜索插入位置（二分查找）
date: 2021-12-16
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---

## 题目描述

![image.png](https://img-blog.csdnimg.cn/img_convert/c493c9ef6935bad2b83e3a282d5ef02c.png)

## 解题思路
>本题的解题思路核心就是二分查找，这道题目是二分查找的经典题目，其解题思路也堪称是二分查找的模板，二分查找的判别就在于题目给的是一个已经排好序的数组，因此本题符合要求。

```js
var searchInsert = function(nums, target) {

  // 搜索插入位置使用的是二分查找的核心模板
  function findLeft(nums,target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
      let mid = (left + right) >> 1;
      if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return left;
  }

  return findLeft(nums,target);
};
```

## 题目反思
* 二分查找的题目判别是已经排序好的数组。
* 使用移位操作可以帮助我们求中位数。
* 二分查找这类题目最好按类别进行做，因为都是一个思路，方便我们总结经验。
