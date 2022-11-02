---
title: 剑指Offer——丑数（JS实现）
date: 2021-04-17
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/f8674d5e6aef8545f243de2003b59b1e.png)

## 解题思路
* 一个丑数一定是其前面的丑数中的某个丑数*2，*3，*5的结果
* 第一个丑数是1
* 定义三个指向丑数的指针，初始位置为0
* 如果一个丑数是哪个指针乘积的结果，那么这个丑数指针向后移，因为这个丑数乘以对应指针也不可能达到最新的丑数的大小。

## 实现代码
```js
var nthUglyNumber = function(n) {
    const arr = [1];
    if (n === 1) return arr[0];
    let ptr2 = ptr3 = ptr5 = 0;
    for (let i = 1; i <= Number.MAX_VALUE;i++) {
        arr.push(Math.min(arr[ptr2] * 2,arr[ptr3] * 3,arr[ptr5] * 5));
        if (arr[arr.length-1] === arr[ptr2] * 2) {
            ptr2++;
        }
        if (arr[arr.length-1] === arr[ptr3] * 3) {
            ptr3++;
        }
        if (arr[arr.length-1] === arr[ptr5] * 5) {
            ptr5++;
        }
        if (arr.length === n) break;
    }
    return arr[arr.length-1];
};
```