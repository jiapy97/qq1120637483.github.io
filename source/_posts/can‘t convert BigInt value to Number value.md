---
title: can‘t convert BigInt value to Number value
date: 2021-05-21
categories: debug
tags: 
- debug
---
## 错误原因
>通过sort这个API对全是BigInt的数组进行排序导致的错误
sort((num1,num2) => num1 - num2)

## 解决办法
使用下面的排序方式
```js
sort((a, b) => (a < b) ? -1 : ((a > b) ? 1 : 0));
```
