---
title: 手写快速排序（JavaScript）
date: 2021-7-18
author: Justin
top: false
cover: false
categories: 面试题
tags:
  - 面试题
---
## 实现思路
* 快速排序是在实践中已知的最快的排序方法。
* 快速排序采用了分治的思想，这也意味着在代码中需要用到递归。
1. 选择A中的任意一个元素pivot,该元素作为基准。
2. 将小于基准的元素移到基准左边，将大于基准的元素移动到基准的右边。
3. A被pivot分为两部分，继续对剩下的两部分做同样的处理。
4. 使用递归将上述的两部分继续进行同样的排序。

## 实现代码
>三个参数分别为，要排序的数组，数组的第一个下标，最后一个下标
```js
function Quick_Sort(nums,left,right) {

    if (left >= right) return;
    let pivot = nums[left];
    let l = left;
    let r = right;

    while (l < r) {
        while (l < r && nums[r] >= pivot) {
            r--;
        }
        if (l < r) {
            nums[l] = nums[r];
        }
        while (l < r && nums[l] <= pivot) {
            l++;
        }
        if (l < r) {
            nums[r] = nums[l];
        }
        if (l >= r) {
            nums[l] = pivot;
        }
    }
    Quick_Sort(nums,left,r-1);
    Quick_Sort(nums,r+1,right);
    nums
}

const nums = [17,97,9,17,1,8];
Quick_Sort(nums,0,5);
nums
```

## 启示
* 学会使用分治思想来求解问题。