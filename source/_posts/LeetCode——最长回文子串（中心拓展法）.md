---
title: LeetCode——最长回文子串（中心拓展法）
date: 2021-10-10
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---

## 题目描述

![](https://img-blog.csdnimg.cn/img_convert/dec02e3ae24282d9d4945b6febefced1.png)

## 解题思路
1. 将字符串的长度分为奇数和偶数的情况。
2. 奇数的情况，传入的是两个相同的下标，偶数的情况传入的是i和i+1。
3. 如果m大于等于0，n小于len，并且这两个字符是相等的，则一个左移，一个右移。
4. 移动完毕之后，判断是否更新最终的结果，只要比最终结果长，就更新最终结果。

## AC代码
```js
var longestPalindrome = function(s) {
    // 获取字符串的长度
    let len = s.length;
    // 定义最终返回的结果
    let result = '';

    // 循环遍历每一个字符并更新最终的结果
    for (let i = 0; i < len; i++) {
        // 奇数的情况
        getResult(i,i);
        // 偶数的情况
        getResult(i,i+1);
    }
    function getResult(m,n) {
        while(m >= 0 && n < len && s[m] === s[n]) {
            m--;
            n++;
        }
        // 判断是否更新最终的结果，只要比最终结果长，就更新为最终结果
        if (n - m -1 > result.length) {
            result = s.slice(m+1,n);
        }
    }
    return result;
};
```

## 题目反思
* 学会中心拓展法这个思路。
* 熟练记忆slice这个API的用法。

