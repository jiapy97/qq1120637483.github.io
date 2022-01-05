---
title: （二刷）LeetCode——最大连续1的个数 III（滑动窗口）
date: 2022-01-05
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---

## 题目描述
> 这道题目和[替换后的最长重复字符](https://juejin.cn/post/6996160679795228680)有异曲同工之妙，建议大家结合着来刷题。

![image.png](https://img-blog.csdnimg.cn/img_convert/f58dc7e951f09807c4b31bf8d987855f.png)

## 解题思路

1. 滑动窗口是这道题目的核心解题思想，既然有滑动窗口少不了的是左右指针和最大值。

2. 定义一个数组用来存储0和1出现的次数。

3. 右指针是核心循环条件，当右指针走到数组的长度的位置的时候，此时结束循环。

* 进入循环后，首先更新右指针指向元素出现的次数，只有指向元素是1的时候，才会更新最大值。这个最大值表示的是1出现的最大次数。

* 当滑动窗口的长度比max + k大的时候，开始移动左指针，同时左右指针对应出现的次数还要相应减少。

4. 返回数组的长度 - 左指针 就是连续1的最大个数。

```js
var longestOnes = function(nums, k) {

  // 尝试使用滑动窗口来解决这个问题
  let left = 0;
  let right = 0;
  // 请注意：下标0对应的值代表的是元素0出现的次数，下标1对应的是1出现的次数
  let array = [0,0]
  // 滑动窗口内1出现的最大次数
  let max = 0;
  while (right < nums.length) {
    // 首先更新右指针指向元素出现的次数
    if (nums[right] === 0) {
      array[0]++;
    } else {
      array[1]++;
      // 这个max是核心啊，这里的max表示的是1出现的最大次数
      max = Math.max(max,array[nums[right]]);
    }
    // 更新最大值

    // 移动左指针的情况
    if (right - left + 1 > max + k) {
      array[nums[left]]--;
      left++;
      array[nums[right]]--;
    } else {
      right++;
    }

  }
  return nums.length - left;
};
```

## 题目反思
> 我们在解决一个问题的时候，不仅仅要会这一个题目，还要举一反三，很多题目都有类似的思路，可能只需要进行细微的改动即可。
