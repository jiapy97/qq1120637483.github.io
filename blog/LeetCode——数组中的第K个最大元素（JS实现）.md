---
title: LeetCode——数组中的第K个最大元素（JS实现）
date: 2021-7-26
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---
## 题目描述
![image.png](https://img-blog.csdnimg.cn/img_convert/d786b713e65d832760ba4153e0ccd9ef.png)

## 解题思路
* 本题思路较为简单，首先对数组按照从小到大进行排序。
* 使用reverse将数组进行反转。
* 返回反转数组的第k-1个元素即可。
* 本次没有采取JS自带的sort，而是自己实现了快速排序。

## 解题代码
```js
var findKthLargest = function (nums, k) {
    // 快速排序

    function sort(nums, Left, Right) {
        let l = Left;
        let r = Right;
        let pivot = nums[l];
        if (l >= r) return;

        while (l < r) {
            while (nums[r] >= pivot && l < r) {
                r--;
            }
            if (nums[r] < pivot) {
                nums[l] = nums[r];
                l++;
            }
            while (nums[l] <= pivot && l < r) {
                l++;
            }
            if (nums[l] > pivot) {
                nums[r] = nums[l];
                r--;
            }
            if (l === r) {
                nums[l] = pivot
            }
        }

        sort(nums, Left, l - 1);
        sort(nums, r + 1, Right);
    }
    
    sort(nums,0,nums.length-1);
    nums
    return nums.reverse()[k-1]
};
```

## 题目反思
* 熟练掌握快速排序。
* 熟练使用JS中的各种常用API。
