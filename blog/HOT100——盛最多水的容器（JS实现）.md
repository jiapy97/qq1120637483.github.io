---
title: HOT100——盛最多水的容器（JS实现）
date: 2021-06-04
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/92b4e407b526331081c90197b854e7fb.png)

## 解题思路
* 当拿到这道题目的时候，我首先想到的是暴力法，一个元素与后面的所有元素进行比较，取较小值，然后乘上距离，保存到临时数组中，最后取最大值即可，但是你懂得，时间复杂度肯定是要超标的，所以考虑其他更优解。
* 本次采用的双指针，一个指针指向最左边，一个指针指向最右边，然后比较所在值的大小，谁小谁往中间移动，知道left不再小于right，通过不断更新面积的最大值即可获得最大值。

## 双指针的合理性问题
>很多人在使用双指针的时候，会担心会不会出现漏考虑的情况，实际上这点我也考虑到了，但是，其实不会，因为我们每次移动的都是值较低的元素，因为只要高的不动，移动较低的，就可能更新面积的高，这样就可以更新我们的最大值。

## 解题代码
```js
var maxArea = function(height) {
    // 左指针
    let left = 0;
    // 右指针
    let right = height.length - 1;
    // 定义最大值
    let max = 0;
    while (left < right) {
        // 判断谁低,谁低谁往中间移动
        let minHeight = height[left] < height[right] ? height[left++] : height[right--];
        // 由于指针的移动,所以面积为下面的结果
        let area = minHeight * (right - left + 1);
        // 不断更新最大值
        max = Math.max(max,area);
    }
    return max;
};
```
## 启示
* 学会使用双指针，求解移动面积的最大值问题。
