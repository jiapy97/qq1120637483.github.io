---
title: LeetCode——合并两个有序数组（双指针）
date: 2021-12-17
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---

## 题目描述

![image.png](https://img-blog.csdnimg.cn/img_convert/860cffda351e0350f20dd29d45b88786.png)

## 解题思路

1. 首先使用splice方法，将nums1和nums2指定位置之后的无关元素去除。
2. 如果二者其中有一个是空数组，则直接push到nums1中。
3. 定义双指针，进行依次比较，小的放到nums1中。
4. 判断左右指针谁先走到头的情况。

## AC代码

```js
var merge = function(nums1, m, nums2, n) {
  // 合并两个有序数组需要注意的是，是将nums2合并到nums1中，并且是原地排序，不允许出现赋值的情况。
  // 1. 去除无关元素
  nums1.splice(m);
  nums2.splice(n);
  // 2. 特殊情况判断
  if (nums1.length === 0 || nums2.length === 0) {
    nums1.push(...nums2);
    return;
  }
  // 3. 一般情况判断
  let left = 0;
  let right = 0;
  while (left < nums1.length && right < nums2.length) {
    if (nums1[left] <= nums2[right]) {
      left++;
      continue;
    } else {
      nums1.splice(left,0,nums2[right]);
      right++
    }
  }
  if (left === nums1.length && right < nums2.length) {
    nums1.push(...nums2.slice(right));
  }

};
```

## 题目反思
* 学会使用splice方法添加元素。
* 注意题目的要求是原地排序，直接赋值给一个参数是不会通过测试的。
* 学会使用双指针。
