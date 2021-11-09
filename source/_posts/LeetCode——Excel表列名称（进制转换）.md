---
title: LeetCode——Excel表列名称（进制转换）
date: 2021-11-10
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---

## 题目描述

![image.png](https://img-blog.csdnimg.cn/img_convert/cb8d01e57fb0a825819f7a2a010a7e0b.png)

## 解题思路
1. 定义一个存储结果的数组。
2. 以输入的数字为循环条件，首先将数字-1，之所以要减1，是因为题目中字母和数字的对应顺序，并不是真正的26进账，通过-1，可以将其装换为26进制。
3. 变为26进制之后，数字对26取余，得出的结果+65,然后使用String.fromCharCode转换为对应的字符，每次都放在数组的头部，然后除以26，向下取整即可。
4. 将结果数组拼接为字符串。

## AC代码

```js
var convertToTitle = function(columnNumber) {
  
  const res = [];

  while (columnNumber) {
    // 将数字-1，是这道题目的灵魂，之所以减一，是为了让该数字变为正常的26进制
    columnNumber--;
    let remain = columnNumber % 26;
    res.unshift(String.fromCharCode(remain + 65));
    columnNumber = Math.floor(columnNumber / 26);
  }

  return res.join("");

};
```


## 题目反思
* 学会使用String.fromCharCode(number)，将一个数字装换为对应的ASCII码值。
* 学会进制转换，通过循环的方式。

## 以十进制为例，泛化题解
```js
var convertToTitle = function (n) {
  if (n <= 0) return "";

  let res = [];
  while (n) {
    let remain = n % 10;
    res.unshift(String.fromCharCode(remain + 65));
    n = Math.floor(n / 10);
  }
  return res.join("");
};
```

## 还有没有类似fromCharCode的API？
>类似的有charAt和charCodeAt，下面让我们一一来解决他们，做题的时候，就要举一反三。

* charAt()：根据字符串的索引找到对应的字符。（个人感觉这个API，可能不太常用，因为我们可以直接str[i]来获取）

![image.png](https://img-blog.csdnimg.cn/img_convert/16c7c1d912445e2362b6135d6692e507.png)

* charCodeAt()：返回对应字符的ASCII码。（内部传的是索引）

![image.png](https://img-blog.csdnimg.cn/img_convert/dbdc867b5dfc6e1d4392ef918f40f6d8.png)


## 参考链接
[MDN：String.fromCharCode](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)

[LeetCode题解](https://leetcode-cn.com/problems/excel-sheet-column-title/solution/javascript-shi-26jin-zhi-dan-bu-wan-quan-yjmm/)