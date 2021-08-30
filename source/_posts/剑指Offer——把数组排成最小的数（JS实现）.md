---
title: 剑指Offer——把数组排成最小的数（JS实现）
date: 2021-05-03
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/33772630209994c58e911a78753e37ea.png)

## 解题思路
* 首先想到了使用DFS进行全排列，然后使用sort进行排序，发现超时，所以全排列DFS的方法行不通。
* 最后还是通过JS自带的sort函数进行比较a+b和b+a来进行排序，最终通过了AC

## 解题代码
```js
var minNumber = function(nums) {
    
    for (let i = 0; i < nums.length;i++) {
        nums[i] = String(nums[i])
    }
    nums.sort((num1,num2) => (num1 + num2) - (num2 + num1));
    return nums.join('')

};
```
## 实现效果
![](https://img-blog.csdnimg.cn/img_convert/54963efd81dd0026228c06e723ef4e2e.png)

## 总结（本题给我们的启示思路）
* 启示一：学会使用sort传参
* 启示二：最好能够手写快排
