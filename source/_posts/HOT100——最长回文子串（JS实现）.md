---
title: HOT100——最长回文子串（JS实现）
date: 2021-06-02
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/6d11890632807ff33a9c23f0fbc8c800.png)

## 解题思路
* 方法：中心扩散法。
* 核心：目标字符的左右是否相等。
* 讨论两种情况：回文子串的长度是奇数的情况和偶数的情况。
* 循环时，一看是否越界，二看是否相等。
* 具体思路请看代码注释。

## 手绘思路（以cbbd字符串为例，看懂循环体内部的执行过程）
![](https://img-blog.csdnimg.cn/img_convert/4a4f694cdc1f7d3105d89b9a1498c834.png)

## 解题代码
```js
var longestPalindrome = function(s) {
    // 定义返回的最长回文子串
    let res = '';
    // 开始循环每一个字符
    for (let i = 0; i < s.length; i++) {
        // 当回文子串为奇数时
        test(i,i);
        // 当回文子串为偶数时
        test(i,i+1);
    }
    function test(m,n) {
        // 首先不能越界，其次两个元素要相等，然后m左移，n右移进行比较
        while (m >= 0 && n < s.length && s[m] === s[n]) {
            m--;
            n++;
        }
        // 比较当前回文字符串的长度是否比前面的回文字符串长度长，长则进行更新。
        if (n - m - 1 > res.length) {
            res = s.slice(m+1,n);
        }
    }
    return res;
};
```
## 总结（本题给我们的启示思路）
* 学会使用中心扩散法求解最长回文子串问题。



