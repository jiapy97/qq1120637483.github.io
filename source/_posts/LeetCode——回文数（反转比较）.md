---
title: LeetCode——回文数（反转比较）
date: 2022-04-09
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---

## 题目描述

![image.png](https://img-blog.csdnimg.cn/img_convert/45d4c45b5ff60936d769996e546e5ff8.png)

## 解题思路
### 思路一：反转比较法
> 回文数的一个特点是正着读和倒着读是一样的，那么我们可以定义一个临时变量来存储目标元素的反转，然后顺序比较每个元素是否相等，相等则返回true，反之false。

```js
var isPalindrome = function(x) {
  // 使用反转对比的方法来判断是否是回文数字
  x = x.toString();
  const temp = x.split('').reverse();
  const xArr = x.split('');

  for (let i = 0; i < xArr.length; i++) {
    if (temp[i] != xArr[i]) {
      return false;
    }
  }
  return true;

};
```

### 思路二：使用递归比较首尾元素
> 首先比较首元素和尾元素是否一致，一致则去掉首尾元素，将其余元素记性递归判断。

```js
var isPalindrome = function(x) {
  // 使用递归判断
  // 递归的介绍条件是输入的x小于等于1
  if (x.toString().length <= 1) {
    return true;
  }
  x = x.toString().split('');
  let start = 0;
  let end = x.length - 1;

  if (x[start] === x[end]) {
    return isPalindrome(x.slice(1,end).join(''))
  } else {
    return false;
  }
};
```

## 总结
> 判断回文数是一道高频考题，思路也比较简单就是根据回文数的特点出发来进行解题。