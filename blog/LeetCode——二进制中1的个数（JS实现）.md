---
title: LeetCode——二进制中1的个数（JS实现）
date: 2021-04-08
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/0d27a90fe2d1103451628819e6772388.png)

## 解题思路
* 将输入的二进制串转换为二进制字符串
* 使用for循环，遍历其中1的个数
* 返回1的个数。

## 实现代码
```js
var hammingWeight = function(n) {

    let str = n.toString(2)
    let flag = 0;
    for (let v of str) {
        if (v === '1') {
            flag += 1;
        }
    }
    console.log(flag);
    return flag;
};
```