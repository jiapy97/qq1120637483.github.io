---
title: 剑指Offer——构建乘积数组（JS实现）
date: 2021-04-22
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/d4488acbf205bd905aa62044e6fef281.png)

## 解题思路
* 遇到这道题，我首先使用使用双指针，左右遍历
* 遇到第i个元素则停止遍历，然后进行求乘积
* 但是结果超时
* 最终通过对称遍历的方式成功解决问题

## 解题代码一：暴力双指针（超时）
```js
var constructArr = function (a) {
    // 使用左右指针两边遍历的方法
    const result = [];
    let l = 0;
    let r = a.length - 1;
    let temp = 1;
    let temp2 = 1;
    for (let i = 0; i < a.length; i++) {

        while (l !== i) {
            temp = temp * a[l];
            l++;
        }
        while (r !== i) {
            temp2 = temp2 * a[r];
            r--;
        }
        l = 0;
        r = a.length - 1;
        result.push(temp * temp2)
        temp = 1;
        temp2 = 1;
    }
    return result;
};
```
## 超时原因
* 涉及到多个循环，时间复杂度太高，必须改进时间复杂度。

## 解题代码二：使用截取除i个元素之外的所有元素（超时）
```js
var constructArr = function (a) {

    const result = [];
    let testarr = [];
    let l = 0;
    let r = a.length - 1;
    let temp = 1;
    let temp2 = 1;
    for (let i = 0; i < a.length; i++) {
        testarr.push(...a.slice(0,i),...a.slice(i+1))
        result.push(testarr.reduce((pre,cur) => pre * cur,1));
        testarr = [];
    }
    return result;
};
```
## 超时原因
* 还是时间复杂度太高。

## 解题代码三：使用对称遍历（成功AC）
```js
var constructArr = function (a) {

    let right = [];
    let left = [];
    const result = [];
    for (let i = 0; i < a.length; i++) {
        if (i === 0) {
            left[i] = a[0];
            right[i] = a[a.length - 1];
        } else {
            left[i] = left[i-1] * a[i];
            right[i] = right[i-1] * a[a.length-1-i];
        }
    }
    
    for (let i = 0; i < a.length;i++) {
        if (i === a.length - 1) {
            result.push(left[left.length-2]);
            break;
        }
        if (i === 0) {
            result.push(right[right.length-2])
        } else {
            result.push(right[right.length-1-i-1] * left[i-1])
        }
    }
    return result;
};
```
## 总结
* 本题乍一看不难，大家也都容易想到一定的思路，但是难就难在时间复杂度的问题上
* 只有比较低的时间复杂度才能够通过
* 本题给我们的启示就是对称遍历
* 这里的对称遍历刚开始是包好第i个元素的，并不是说将第i个元素去掉，这是我思维上的误区，就是一直想在刚开始就将第i个元素去掉，实际上通过对称遍历,存储左边的数组和存储右边的数组，刚开始都是全部遍历完的，之后再从结果中去取我们想要的结果。
* 路漫漫其修远兮，吾将上下而求索。加油！
