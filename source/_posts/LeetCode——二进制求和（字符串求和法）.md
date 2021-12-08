---
title: LeetCode——二进制求和（字符串求和法）
date: 2021-12-08
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---

## 题目描述

![image.png](https://img-blog.csdnimg.cn/img_convert/a647cc55c51f916e37ddd45cac43be2f.png)

## 解题思路
>本题的核心解题思路和字符串相加、两数相加等题目高度类似，都是给出一个字符串，求字符串的和，我们可以从字符串的最后一个字符算起，将一个字符转换为一个数字可以通过减字符0来实现。只要下标大于等于0或者进位不等于0，就进入循环。如果临时和对2取余为0,res则unshift(0)，反之unshift(1)。然后根据sum和2的关系，修改进位的值，最后下标减一。

```js
var addBinary = function(a, b) {
  let l = a.length - 1;
  let r = b.length - 1;
  let carry = 0;
  let res = [];

  while (l >= 0 || r >= 0 || carry != 0) {
    let c1 = l >= 0 ? a[l] - '0' : 0;
    let c2 = r >= 0 ? b[r] - '0' : 0;

    let sum = c1 + c2 + carry;
    if (sum % 2) {
      res.unshift(1);
    } else {
      res.unshift(0);
    }
    if (sum > 2) {
      carry = (sum % 2 != 0) ? 1 : 0;
    } else if (sum > 0) {
      carry = (sum % 2 != 0) ? 0 : 1;
    } else {
      carry = 0;
    }
    l--;
    r--;
  }
  return res.join('');
};
```

## 题目反思
>在刷题的时候，最重要的不是题目的数量，当然题目的数量是很重要的，总结不同的题目，得到这些题目的通用解法，是刷题的核心，就像这道题目，和字符串相加、两数相加都可以使用一样的思路来进行解题。
