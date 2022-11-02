---
title: 剑指Offer——II.0~n-1中缺失的数字（JS实现）
date: 2021-05-12
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/76f1ac58b928432fcb3f417018849289.png)

## 解题思路
* 本题采用的二分的思想
* 本题关键是使用二分查找找出中位数的下标和元素值的关系

## 解题代码
```js
var missingNumber = function(nums) {
    // !本题采用二分法的思想
    // 定义左指针
    let left = 0;
    // 定义右指针
    let right = nums.length - 1;
    if (nums[right] !== nums.length) return nums.length;
    if (nums[0] !== 0) return 0;
    // 进入循环
    while (left < right) {
        // 找出中位数的下标
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === mid) {
            // 如果中位数下标和元素值相同，说明缺失的值在中位数右边
            // 让左指针移动到中位数右边
            left = mid + 1
        } else if (nums[mid] > mid) {
            // 说明缺失的在中位数的左边
            right = mid;
        } 
    }
    return left;
};
```
## 总结（本题给我们的启示思路）
* 启示一：学会使用二分查找

