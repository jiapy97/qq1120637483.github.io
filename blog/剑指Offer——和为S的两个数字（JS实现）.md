---
title: 剑指Offer——和为S的两个数字（JS实现）
date: 2021-04-16
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/2ab8ec98f53bb5fa8e53446af07a9f56.png)

## 解题思路
* 使用双指针
* 一个指针指向最左端
* 一个指针指向最右端
* 大了最右端的往左移
* 小了最左端的往右移

## 实现代码
```js
var twoSum = function (nums, target) {
    let l = 0;
    let r = nums.length-1;
    while (nums[l] + nums[r] !== target) {
        if (nums[l] + nums[r] < target) {
            l++;
        }
        if (nums[l] + nums[r] > target) {
            r--;
        }
    }
    return [nums[l],nums[r]]

};
```