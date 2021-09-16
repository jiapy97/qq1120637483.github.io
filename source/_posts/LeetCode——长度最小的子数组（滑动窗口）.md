---
title: LeetCode——长度最小的子数组（滑动窗口）
date: 2021-9-15
author: Justin
top: false
cover: false
categories: LeetCode
- LeetCode
---

## 题目描述
![image.png](https://img-blog.csdnimg.cn/img_convert/2d32692e1808cda349a3b753db2a15bd.png)

## 解题思路
>注意：题目让我们求的是大于等于target的长度最小的子数组，而不是等于。

>思路：通过滑动窗口的思想，不断更新窗口的最小值。

### 1：初始化滑动窗口
>主要定义滑动窗口的左边界、右边界、初始最小值、窗口内的和。

```js
// 定义初始最小值
let minLen = Infinity;
// 定义滑动窗口的左边界
let left = 0;
// 定义滑动窗口的右边界
let right = 0;
// 定义窗口内的和
let sum = 0;
```

### 2：核心循环体
>只要右边界没有走到最后就继续循环，首先计算窗口内的和，如果大于等于target，则更新最小长度，然后左移左边界，循环结束再移动右边界。

```js
// 只要右边界没有走到最后就不终止循环
while (right < nums.length) {

    sum = sum + nums[right];
    // 如果窗口内的和 ≥ target
    while (sum >= target) {
        // 更新窗口的最小长度
        minLen = Math.min(minLen,right-left+1);
        // 更新和
        sum = sum - nums[left];
        left++
    }
    right++;
}
```

### 3：判断返回
>如果最小长度是无限大，则返回0，反之返回最小长度。

```js
minLen = minLen === Infinity ? 0 : minLen
return minLen
```

## 完整代码
```js
var minSubArrayLen = function (target, nums) {
    // 定义初始最小值
    let minLen = Infinity;
    // 定义滑动窗口的左边界
    let left = 0;
    // 定义滑动窗口的右边界
    let right = 0;
    // 定义窗口内的和
    let sum = 0;

    // 只要右边界没有走到最后就不终止循环
    while (right < nums.length) {

        sum = sum + nums[right];
        // 如果窗口内的和 ≥ target
        while (sum >= target) {
            // 更新窗口的最小长度
            minLen = Math.min(minLen,right-left+1);
            // 更新和
            sum = sum - nums[left];
            left++
        }
        right++;
    }
    minLen = minLen === Infinity ? 0 : minLen
    return minLen
};

minSubArrayLen(7,[2,3,1,2,4,3])
```

## 题目反思
>遇到题目中带有连续的字样，可以优先考虑使用滑动窗口来解决问题，这道题目并不难，和其他的滑动窗口类型的题目解题方法几乎一致。
