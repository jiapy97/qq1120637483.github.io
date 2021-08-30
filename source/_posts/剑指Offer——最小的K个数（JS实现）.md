---
title: 剑指Offer——最小的K个数（JS实现）
date: 2021-04-30
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/4d10b114775cfad8a2b3e14a3740148e.png)

## 解题思路
* 这道题属于考查排序的问题
* 我们只需要将输入的整数数组按照升序进行排列
* 然后返回前k个数字即可，这里采用JS自带的sort方法
* 截取前k个数字采用slice方法

## 解题代码
```js
var getLeastNumbers = function(arr, k) {
    arr.sort((num1,num2) => num1 - num2);
    return arr.slice(0,k)
};
```
## 总结（本题给我们的启示思路）
* 启示一：学会使用slice进行截取
* 启示二：学会使用sort对数组进行排序
