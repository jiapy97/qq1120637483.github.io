---
title: HOT100——寻找两个正序数组的中位数（JS实现）
date: 2021-06-01
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/5040bc51d780fb4971f220f7c2f383cd.png)

## 解题思路
* 本题采用双指针的解题方法。
* 一个指针指向数组1。
* 一个指针指向数组2。
* 依次比较两个指针指向的元素的大小，谁小谁加到排序好的数组中，直到一方遍历完，将没遍历完的全部加到排序好的数组中即可。
* 最后判断结果数组的个数是奇数还是偶数，如果是奇数直接返回中位数元素，如果是偶数则返回中位数元素和中位数元素后边的一位元素，两者求和然后/2,返回。

## 解题代码
```js
var findMedianSortedArrays = function(nums1, nums2) {
    // 首先我们要明确一点，两个数组都是正序的
    // 双指针
    let left = 0;
    let right = 0;
    // 定义合并数组
    const mergeArr = [];
    // 当其中一个数组遍历到最后时结束
    while (left < nums1.length && right < nums2.length) {
        if (nums1[left] <= nums2[right]) {
            mergeArr.push(nums1[left]);
            left++;
        } else {
            mergeArr.push(nums2[right]);
            right++;
        }
    }
    if (right === nums2.length) {
        mergeArr.push(...nums1.slice(left))
    }
    if (left === nums1.length) {
        mergeArr.push(...nums2.slice(right))
    }
    if (mergeArr.length % 2) {
        return mergeArr[(mergeArr.length-1) >> 1]
    } else {
        return (mergeArr[(mergeArr.length-1) >> 1] + mergeArr[((mergeArr.length-1) >> 1) + 1]) / 2
    }

};
```
## 总结（本题给我们的启示思路）
* 学会使用双指针的思路求解问题。
* 学会使用位移的方式求中位数。



