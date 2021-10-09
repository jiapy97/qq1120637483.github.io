---
title: LeetCode——最长公共前缀（数组API-every方法）
date: 2021-10-9
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---

## 题目描述

![image.png](https://img-blog.csdnimg.cn/img_convert/01b46a4d66ca2f70b52bae1915b4ced7.png)

## 解题思路
1. 首先获取数组的第一个字符串，以这个字符串为标准进行后续的判断。
2. 定义需要返回的最终字符串，初始值为空串。
3. 使用循环比例第一个字符串，每次遍历的时候，都利用数组的every这个API，判断数组的每一个字符串的第i个字符，是否和子一个字符串的第i个字符一致，一致则返回true，并进行结果字符串的拼接，如果不是则直接返回result。
4. 如果最终没有匹配到，则返回空串result。

## AC代码
```js
var longestCommonPrefix = function(strs) {
    // 考虑使用every API 来和第一个字符串进行比较
    let firstStr = strs[0];
    let result = ''
    for (let i = 0; i < firstStr.length; i++) {
        let flag = strs.every(item => item[i] === firstStr[i]);

        if (flag) {
            result = result + firstStr[i]
        } else {
            return result;
        }
    }
    return result
};
```

## 题目反思
* 学会利用数组的常用api,例如这个every。
* 本题并不困难，即使是使用最常用的暴力双循环，也是可以做出来的，最重要的是能否快速简洁的做出来。
