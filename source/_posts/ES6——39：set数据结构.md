---
title: ES6——39：set数据结构
date: 2021-03-17
categories: ES6
tags: 
- ES6
---
## 基础用法
>类似于数组，但是成员的值都是唯一的。没有重复的值。

![](https://img-blog.csdnimg.cn/img_convert/2ec082abda76529abe1dbb3b03e5194e.png)
利用set数据结构做数组去重
## set的默认方法
![](https://img-blog.csdnimg.cn/img_convert/65a3fa5db156b8cb32b972ed00fac875.png)
## 遍历set数据结构
![](https://img-blog.csdnimg.cn/img_convert/39ddd58a2f220a6bfed1ec04107dcfe6.png)
## 数组去重，求交集，并集，差集
```js
// 1. 数组去重
const arr = [1,2,3,4,5,5,6,8,9,9,9,9];
const result = [...new Set(arr)];
console.log(result);
// 2. 交集
const arr2 = [1,2,5,8,6];
const result2 = [...new Set(arr)].filter(item => {
    
    if (arr2.includes(item)) {
        return true;
    }
});
console.log(result2);
// 3. 求并集
const merge = [...new Set([...new Set(arr),...new Set(arr2)])];
console.log(merge);
// 4. arr 对 arr2 求差集  所谓的差集就是我有你没有
const sub = [...new Set(arr)].filter(item => {
    const arr2s = [...new Set(arr2)];
    if (arr2s.includes(item) === false) {
        return true;
    };
});

console.log(sub);
```
![](https://img-blog.csdnimg.cn/img_convert/d21d63ff5197c405ac41ceb02902ca5d.png)
