---
title: 剑指Offer——数据流中的中位数（JS实现）
date: 2021-04-29
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/68223e508ef06ffdd90e32a8391a29bf.png)

## 解题思路
* 这道题属于考查二分查找
* 本题如果直接采用JS中自带的排序肯定是要超时的，要不然LeetCode也不会将这道题归为困难
* 二分查找的思路定义两个指针，一个指针指向的是数组元素的第一个下标，另一个指针指向的是数组元素的最后一个元素的下标。
* 中位数下标指的是通过四舍五入的方法，左边指针的下标 + 右边指针的下标 / 2然后进行四舍五入，得到的就是中位数下标
* 如果要添加的值大于中位数下标对应的值，左边的指针移动到中位数指针+1的位置。如果要添加的值小于中位数下标对应的值，右边的指针移动到中位数指针-1的位置，如果相等则直接添加导致中位数下标的位置，其余元素后移。
* 循环的结束条件是左指针＞右指针

## 解题代码
```js
var MedianFinder = function() {
    this.stack = [];
};
MedianFinder.prototype.addNum = function(num) {
    if (this.stack.length === 0) {
       this.stack.push(num);
       return; 
    }
    // 定义左指针和右指针 注意：这里的指针指的都是下标
    let left = 0;
    let right = this.stack.length - 1;
    while (left <= right) {
        // 找到中位数的下标
        let mid = Math.floor((left + right)/2);
        if (num === this.stack[mid]) {
            this.stack.splice(mid,0,num);
            return;
        } else if (num < this.stack[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    this.stack.splice(right+1,0,num);
};

MedianFinder.prototype.findMedian = function() {
    if (this.stack.length === 0) {
        return [];
    }
    if (this.stack.length % 2 === 0) {
        let len = this.stack.length;
        return (this.stack[len/2] + this.stack[len/2 -1]) / 2
    } else {
        let mid = Math.floor(this.stack.length/2);
        return this.stack[mid];
    }
};
```
## 总结（本题给我们的启示思路）
* 启示一：学会使用二分查找
* 启示二：学会使用splice插入元素
* 启示三：通过Math.floor进行四舍五入来求中位数下标

![](https://img-blog.csdnimg.cn/img_convert/ffa1ec9122505bd51b8cd34c1864a5c1.png)