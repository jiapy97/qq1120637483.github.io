---
title: LeetCode——合并两个有序数组（双指针）
date: 2021-10-28
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---
## 题目描述

![image.png](https://img-blog.csdnimg.cn/img_convert/294e5e51fdc39f28b6394487f8e8f33f.png)

## 解题思路

1. 首先使用splice方法，将nums1和nums2指定位置之后的无关元素去除。
2. 如果二者其中有一个是空数组，则直接push到nums1中。
3. 定义双指针，进行依次比较，小的放到nums1中。
4. 判断左右指针谁先走到头的情况。

## AC代码

```js
var merge = function(nums1, m, nums2, n) {
  nums1.splice(m)
  nums2.splice(n)
  if (nums1.length === 0 || nums2.length === 0) {
    nums1.push(...nums2);
    return;
  }
  // 定义左指针
  let left = 0;
  // 定义右指针
  let right = 0;
  // 定义最终结果数组
  let result = [];
  // 当双方都没有走到头的时候
  while (left != nums1.length && right != nums2.length) {
    if (nums1[left] <= nums2[right]) {
      left++;
    } else {
      nums1.splice(left,0,nums2[right])
      right++
    }
  }
  // 如果是左指针走到头了，但是右指针还没有
  if (left === nums1.length && right != nums2.length) {
    nums1.push(...nums2.slice(right));
  }
  // 如果是右指针走到头了，但是左指针还没有
  if (right === nums1.length && left != nums2.length) {
    nums1.push(...nums1.slice(left));
  }
};
```

## 题目反思
* 学会使用splice方法添加元素。
* 注意题目的要求是原地排序，直接赋值给一个参数是不会通过测试的。
* 学会使用双指针。
