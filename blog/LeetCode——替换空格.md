---
title: LeetCode——替换空格
date: 2021-03-31
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/c9cfce9e62c3078059f7d2542f8404b0.png)

## 解题思路1：使用js中的replace方法
* 使用replace方法，配合正则全局匹配

## 实现代码
```js
var replaceSpace = function(s) {
    s = s.replace(/ /g,'%20');
    return s;
};
```
## 解题思路2：使用js中的split+join
* split(' ')将字符串根据空格，划分为字符数组
* join('%20') 将字符数组进行组合成字符串

## 实现代码
![](https://img-blog.csdnimg.cn/img_convert/c7e00418832a7b397099513a90100690.png)