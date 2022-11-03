---
title: HOT100——搜索旋转排序数组（JS实现）
date: 2021-7-18
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---
## 题目描述
![image.png](https://img-blog.csdnimg.cn/img_convert/f8c165422e830abf11255a6f14e35435.png)

## 解题思路
>**本题最核心的在于寻找峰值，所谓的峰值指的是该值比左边元素大，该值比右边元素也大，然后根据峰值分割数组，判断target是在数组的左边还是右边，然后使用indexOf判断位置，最后返回。**

## 解题代码
```js
var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid = left + right >>> 1;
    // 开始寻找中位数
    if (nums.length > 2) {
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] > nums[i-1] && nums[i] > nums[i+1]) {
                mid = i;
                break;
            }
            if (nums[i] < nums[i-1] && nums[i] < nums[i+1]) {
                mid = i-1;
                break;
            }
        }
    }
    mid
    if (target < nums[mid]) {
        // nums.slice(mid)
        if (target < nums[0] && target <= nums[nums.length - 1]) {
            if (nums.slice(mid).indexOf(target) !== -1) {
                const temp = nums.slice(mid);
                return temp.indexOf(target) + mid
            } else {
                return -1;
            }
        } else {
            const temp = nums.slice(0, mid);
            return temp.indexOf(target)
        }
    } else if (target === nums[mid]) {
        return mid;
    } else {
        if (target > nums[0] && target <= nums[nums.length - 1]) {
            if (nums.slice(mid).indexOf(target) !== -1) {
                const temp = nums.slice(mid);
                return temp.indexOf(target) + mid
            } else {
                return -1;
            }
        } else {
            return -1
        }
    }
};
```
## 启示
* 学会通过位运算的方式求中位数。
* 学会求峰值。

