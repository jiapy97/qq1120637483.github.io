---
title: HOT100——正则表达式匹配（JS实现）
date: 2021-06-03
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/8df3831bb21cc7bb8c3be85774c38b82.png)

## 解题思路
* 本题采用的是回溯的思想。
* 主要需要考虑的情况有以下几种
1. 字符串和模式串的字符相等。
2. 模式串的字符为点。
3. 模式串为\*的时候，分两种情况讨论，一是0次，一是多次。

## 解题代码
```js
var isMatch = function (s, p) {
    return helper(s, p);
    function helper(str, pattern) {
        if (pattern.length === 0) {
            if (str.length === 0) {
                return true;
            } else {
                return false;
            }
        }
        // 不是 * 号的情况
        if (str.length > 2 && (str[0] === pattern[0] || pattern[0] === '.') && pattern[1] !== '*') {
            res = helper(str.slice(1),pattern.slice(1));
        } else if (str.length > 0 && (str[0] === pattern[0] || pattern[0] === '.') && pattern[1] === '*'){
            // 这是 *号 代表0次的情况        多次的情况
            res = helper(str,pattern.slice(2)) || helper(str.slice(1),pattern)
        } else {
            if (str.length > 0 && (str[0] === pattern[0] || pattern[0] === '.') && pattern[1] !== '*') {
                res = helper(str.slice(1),pattern.slice(1)); 
            } else if (pattern[1] === '*') {
                res = helper(str,pattern.slice(2))
            } else {
                return false;
            }
        }
        return res;
    }
};
```
## 启示
* 学会在多种限制条件下使用递归回溯解决问题。