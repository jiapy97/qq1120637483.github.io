---
title: LeetCode——字符串相加（JS实现）
date: 2021-7-20
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---
## 题目描述
![image.png](https://img-blog.csdnimg.cn/img_convert/f80a005521c14d999cd8f45cf5d5d9fe.png)

## 解题思路
>由于本题不让使用BigInt等将字符串转换为整数形式，所以我们必须考虑使用其他的方法。所以本题考虑采用双指针的方法。

1. 使用两个指针分别指向数字字符串的末尾位置。
2. 使用变量carry记录进位。
3. 当两个记录下标的位置大于等于0，或者进位不等于零的时候都进入循环。
4. 在循环中当使用charAt这个API获取字符串对应下标的字符，两个字符相减会变成number类型。
5. 每次循环结束都将两个指针左移一位。

## 解题代码
```js
var addStrings = function(num1, num2) {
    
    let l = num1.length - 1;
    let r = num2.length - 1;
    let carry = 0;
    let ans = [];
    while (l >= 0 || r >= 0 || carry !== 0) {

        let c1 = l >= 0 ? num1.charAt(l) - '0' : 0;
        let c2 = r >= 0 ? num2.charAt(r) - '0' : 0;
        let sum = c1 + c2 +  carry;
        ans.push(sum % 10);
        carry = Math.floor(sum / 10);
        l--;
        r--;
    }
    return ans.reverse().join('')
};
```

## 题目反思
1. 两个数字字符相减会转换为number类型。
2. 可以使用  字符串.charAt(index) 来获取字符串指定位置的字符。
