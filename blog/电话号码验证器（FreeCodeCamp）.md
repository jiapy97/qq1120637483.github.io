---
title: 电话号码验证器（FreeCodeCamp）
date: 2021-7-23
author: Justin
top: false
cover: false
categories: FreeCodeCamp
tags:
  - FreeCodeCamp
---
## 题目描述
![image.png](https://img-blog.csdnimg.cn/img_convert/3609411cf95aedd8ece1e0c9d0548116.png)

## 解题思路
* 本题我采用的是正则的方法，通过考虑多种情况，因为所有的测试案例都已经给出，只要能够将所有情况考虑全面，通过正则表达式就可以通过测试。
* 本题可能不是最优解，如果读者有其他更优解，欢迎留言评论。

## 解题代码
```js
function telephoneCheck(str) {
    let reg = /^1\s?\(\d{3}\).?\d{3}.?\d{4}|^1\s\d{3}[\(|-]\d{3}[-]\d{4}|^\d{10}$|\d{3}\s\d{3}\s\d{4}|^\(\d{3}\)\d{3}-\d{4}|^\d{3}-\d{3}-\d{4}$/
    const bol = reg.test(str);
    return bol
}
```

## 题目反思
>熟练掌握正则表达式将极大的提高你的开发效率。



