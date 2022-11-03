---
title: LeetCode——在排序数组中查找元素的第一个和最后一个位置（二分查找核心模板）
date: 2021-12-03
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---

## 题目描述

![image.png](https://img-blog.csdnimg.cn/img_convert/bf96a440ec8959cf4a0103b611435435.png)

## 解题思路
>这道题目堪称是二分查找的经典题型，核心题型，模板题型。只要会了这道题目，几乎所有的二分查找的问题都迎刃而解了。

1. 定义二分查找中查找左边界的函数，这个函数能够返回左边界的下标，如果数组中有目标元素返回第一个下标，如果数组中的所有元素都小于目标元素，返回的是数组的长度，如果数组中的所有元素都比目标元素大，返回的是下标0，如果数组中没有该元素，但是有比该元素大的值，返回的是第一个比目标值大的下标。
2. 如果函数返回的下标对应的值不等于target，则返回[-1,-1].
3. 如果存在则返回[findLeft(nums,target),findLeft(nums,target+1)-1]。

```js
var searchRange = function (nums, target) {
  // 二分查找查找左边界的模板
  function findLeft(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      let mid = (left + right) >> 1;
      if (nums[mid] < target) {
        left = mid + 1;
      } else if (nums[mid] > target) {
        right = mid - 1;
      } else {
        right = mid - 1;
      }
    }
    return left;
  }

  if (nums[findLeft(nums, target)] != target) {
    return [-1, -1];
  } else {
    return [findLeft(nums, target), findLeft(nums, target + 1) - 1]
  }
};
```

## 题目反思
>这是二分查找的经典题型，只要是排好序的数组，几乎都可以使用这个题目进行求解。