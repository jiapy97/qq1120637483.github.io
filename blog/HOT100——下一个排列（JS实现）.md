---
title: HOT100——下一个排列（JS实现）
date: 2021-7-13
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---
## 题目描述
![image.png](https://img-blog.csdnimg.cn/img_convert/79d457fd686b48788f4941c715e1a82c.png)

## 解题思路
![image.png](https://img-blog.csdnimg.cn/img_convert/bcd895391bcf5966b782171e50005a52.png)

## 解题代码
```js
var nextPermutation = function(nums) {
    // 从又往左找到第一个降序的位置
    let right = nums.length-1;
    let flag = false;
    while (right) {
        if (nums[right] > nums[right-1]) {
            right--;
            flag = true;
            break;
        } else {
            right--;
        }
    }
    if (!flag) {
        nums.sort((next,pre) => next - pre)
    } else {

        let sorted = nums.splice(right+1).sort((next,pre) => next - pre)
        let move;
        for (let i = 0; i < sorted.length;i++) {
            if (sorted[i] > nums[right]) {
                move = i;
                break;
            }
        }
        let temp = sorted[move];
        sorted[move] = nums[right];
        nums[right] = temp;
        sorted.sort((next,pre) => next - pre);
        nums.push(...sorted)
    }
    nums
};
```

## 启示
* 学会使用sorted、splice、slice等常用API。
* 学会引入第三方变量来辅助我们的思路。