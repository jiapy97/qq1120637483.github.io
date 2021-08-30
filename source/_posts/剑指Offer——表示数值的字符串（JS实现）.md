---
title: 剑指Offer——表示数值的字符串（JS实现）
date: 2021-05-24
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/7164491de7452fed76feb6a59b81fc7d.png)
![](https://img-blog.csdnimg.cn/img_convert/e072c505f0f054e5a74be95084ef4760.png)

## 解题思路
* 本题采用正则表达式的解法，就当作练习自己的正则表达式了
1. 使用trim去除字符串两侧的空格。
2. 小数的情况。
3. 整数的情况。
4. 为e或E的情况，然后后面跟着一个整数的情况
综合上面四种情况，来综合判断是否符合表示数值的字符串。这道题题干真的很清晰。

## 解题代码
```js
var isNumber = function(s) {
    // 去除字符串两侧的空格
    s = s.trim();
    // 判断是否有 + - 号，有则继续判断
    const num = s.match(/^[+-]?\d{1,}\.([eE][+-]?\d+)?$/);
    const num2 = s.match(/^[+-]?\d{1,}\.\d{1,}([eE][+-]?\d+)?$/);
    const num3 = s.match(/^[+-]?\.\d{1,}([eE][+-]?\d+)?$/);
    const num4 = s.match(/^[+-]?\d+([eE][+-]?\d+)?$/)
    if (!num && !num2 && !num3 && !num4) {
        return false;
    } else {
        return true
    }
};
```
## 总结（本题给我们的启示思路）
* 学会灵活运用正则表达式。


