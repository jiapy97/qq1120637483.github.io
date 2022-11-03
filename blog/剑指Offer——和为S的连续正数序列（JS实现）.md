---
title: 剑指Offer——和为S的连续正数序列（JS实现）
date: 2021-04-11
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/e6cd56aed76951447dcf0c5c0bb76bd8.png)

## 解题思路
* 使用left和right两个变量来代替滑动窗口的左边界和右边界。
* 核心while循环的条件是：只要左边界 小于 目标值的一半就要进入循环，只要不小于循环结束，说明此时已经找到完了。
* 定义temp变量，用来存放滑动窗口中的所有元素的和。
* 当temp小于target的值的时候，右边界向右扩一个。
* 当temp大于target的时候，左边向右一个

## 实现代码
```js
var findContinuousSequence = function(target) {
    let left = 1;
    let right = 1;
    let arr = [];
    let temp = 0;
    // 下面的这个result数组是用来返回的
    let result = [];
    // 核心判断条件是当 left >= target/2 的时候 left + tight >= target
    while (left < (target/2)) {
        while (temp < target) {
            temp = temp + right;
            arr.push(right);
            right += 1;
        }
        while (temp > target) {
            temp = temp - left;
            arr.shift();
            left += 1;
        }
        if (target === temp) {
            temp = temp - left;
            left++;
            result.push([...arr]);
            arr.shift();
        }
    }
    return result;
};
```