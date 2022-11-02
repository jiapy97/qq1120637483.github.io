---
title: JS中求中位数的方法
date: 2021-05-06
categories: JavaScript常用API
tags: 
- JavaScript常用API
---
## 方法一：通过零填充右移位
```js
const mid = left + right >>> 1;
```
## 方法二：通过Math.floor
```js
const mid = Math.floor((left + right) / 2);
```