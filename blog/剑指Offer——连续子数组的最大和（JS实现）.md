---
title: 剑指Offer——连续子数组的最大和（JS实现）
date: 2021-04-21
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/ada93af42de5ff6fa643a9c5959c3462.png)

## 解题思路
* 本题的思想在于想到动态规划
* 首先定义一个和nums同纬度的数组
* dp数组的第一个元素和nums的第一个元素的值相同
* 这里的dp[i]的含义是解题关键：代表着当前元素在内的所有前面的子数组的和的最大值
* 从nums的第二个元素开始遍历，如果dp[i-1]>0,dp[i]则等于dp[i-1]+nums[i],反之则等于nums[i]

## 解题代码
```js
var maxSubArray = function (nums) {
    // 本题核心是：动态规划的思想
    // dp[i]：代表着第i个元素之前的所有子数组的和的最大值
    // 当dp[i-1] 大于0的时候，加上i此时的值，才是包含第i个元素的所有子数组的最大值
    let dp = new Array(nums.length);
    dp[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        dp[i] = dp[i-1] > 0 ? dp[i-1] + nums[i] : nums[i];
    }

    dp.sort((num1,num2) => num2 - num1);
    return dp[0];

};
```
## 总结
* 本题关键在于想到动态规划的思想
* 截止到当前元素之前的所有子数组的最大和为dp[i-1]和nums[i]的关系
