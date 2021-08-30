---
title: 凯撒密码（FreeCodeCamp）
date: 2021-7-18
author: Justin
top: false
cover: false
categories: FreeCodeCamp
tags:
  - FreeCodeCamp
---
## 题目描述
![image.png](https://img-blog.csdnimg.cn/img_convert/b538f1ac36756e10a871f9deec0e1cae.png)

## 解题思路
1. 首先遍历每一个字符。
2. 通过charCodeAt()来判断字符的ASCII码值，如果该值在A-Z之间继续判断-13之后是否还在这个范围，如果还在这个范围直接通过charCodeAt()进行转换字符即可。
3. 如果该值不在A-Z之间，直接进行拼接原字符即可。

## 实现代码
```js
function rot13(str) {
    let temp = '';
    for (let v of str) {
        if (v.charCodeAt() < 65 || v.charCodeAt() > 90) {
            temp = temp + v
        } else {
            if (v.charCodeAt()-13 < 65) {
                temp = temp + String.fromCharCode(91 - (65 - v.charCodeAt() + 13))
            } else {
                temp = temp + String.fromCharCode(v.charCodeAt()-13)
            }
        }
    }
    temp
    return temp;
}

rot13("SERR CVMMN!");
```

## 题目链接
**[凯撒密码](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher)**

## 题目反思
* 学会使用charCodeAt()将字符转换为对应的ASCII码值。
* 学会使用fromCharCode将ASCII码值转换为对应的字符。
* 学会使用new Map(数组)，来将一个数组转换为对应的Map,这样比一个一个的添加进Map要方便的多。
