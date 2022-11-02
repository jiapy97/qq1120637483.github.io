---
title: 剑指Offer——在排序数组中查找数字I（JS实现）
date: 2021-05-05
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/f7c9c97c972d6e23d8dca59665304f61.png)

## 解题思路（序列化）
* 看到本题我首先想到的是二分查找
* 初始化左指针指向下标0，右指针指向下标nums.length - 1;
* 首先找到中位数下标，将中位数下标对应的值和target进行比较，如果比中位数大，right = mid - 1,如果比中位数小，left = mid + 1，如果中位数和target目标值相同则终止循环，并记录当前的中位数下标
* 以中位数下标为flag，查找中位数左右两边和中位数相同的元素，并记录下标
* 本题要求的就是下面的这个公式
$右边界 - 左边界 + 1$
* 注意有时候会有边界溢出的情况，比如右指针到达负数

## 序列化代码
```js
var search = function (nums, target) {
    if (nums.length === 0) return 0;
    // 定义初始化指针
    let left = 0;
    let right = nums.length - 1;
    // 求中位数下标
    let mid = Math.floor((left + right) / 2);
    while (nums[mid] !== target) {
        if (left === right) return 0;
        if (nums[mid] < target) {
            left = mid + 1;
            if (left === nums.length) return 0;
            mid = Math.floor((left + right) / 2);
            continue;
        }
        if (nums[mid] > target) {
            right = mid - 1;
            if (right < 0) return 0;
            mid = Math.floor((left + right) / 2);
            continue;
        }
    }
    let flag = mid;
    let flag2 = mid;
    let left_border,right_border;
    while (nums[flag-1] === target) {
        flag--;
    }
    left_border = flag;
    while (nums[flag2+1] === target) {
        flag2++;
    }
    right_border = flag2;
    return right_border - left_border + 1;
};
```

## 总结（本题给我们的启示思路）
* 启示一：学会使用二分查找
* 启示二：考虑边界条件
