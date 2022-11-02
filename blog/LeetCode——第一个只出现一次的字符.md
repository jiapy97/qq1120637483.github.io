---
title: LeetCode——第一个只出现一次的字符
date: 2021-03-20
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/6c482ae46a512ff0f185da678baa78da.png)
## 解题方法
* 通过JS中的Map数据结构
* 将字符列为键，该字符出现的次数列为值，找到第一个值为1的即为返回值
```js
var firstUniqChar = function (s) {
    const m = new Map();
    const flag = 1;
    for (let v of s) {
        if (m.has(v) === false) {
            m.set(v,flag)
        } else {
            m.set(v,m.get(v)+1);
        }
    }
    
    var result = ' ';
    for (let v of m) {
        if (v[1] === 1) {
            result = v[0];
            break;
        }
    }

    return result;

};
```