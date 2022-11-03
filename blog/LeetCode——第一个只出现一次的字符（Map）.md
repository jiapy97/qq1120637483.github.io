---
title: LeetCode——第一个只出现一次的字符（Map）
date: 2022-02-22
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---

## 题目描述

![image.png](https://img-blog.csdnimg.cn/img_convert/008c747c714ff09d912104c9bebd0bc4.png)

> 题目主要是让我们找到第一个只出现一次的字符，如果没有并不是返回为空字符串，而是单空格，这个地方容易出错，大家一定要注意。

## 解题思路
> 博主原本想使用set来实现的，出现第二次就将其从set中去除，但是这种方法无法应对出现三次或者五次等奇数的情况。，因此后来采用了最简单的方法map遍历，然后将其次数存储到map的value中，key则是每一个单字符。

1. 如果传入的参数是一个空字符串，则染回单空格。
2. 初始化一个map，遍历每一个字符，并更新字符出现的次数。
3. 遍历map的每一个item，如果item[1]等于1，则直接返回item[0]。
4. 如果第三步没有找到符合条件的则返回单空格。

## AC代码

```js
var firstUniqChar = function (s) {
  if (s.length === 0) return " "
  const map = new Map();

  for (let v of s) {
    if (map.has(v)) {
      map.set(v,map.get(v) + 1);
    } else {
      map.set(v,1);
    }
  }

  for (let item of map) {
    if (item[1] === 1) {
      return item[0];
    }
  }
  return " "

};
```

## 总结
> 第一次只出现一次的字符，使用map是最直接的能够想到的方法了，通过遍历每一个字符出现的次数便可以知道第一次只出现一次的字符。所以通过这个题目，我们能够巩固对map的基本API的操作。在这里我想要强调一下map和传统的object的区别是什么？map类似于对象，也是键值对的组合，但是传统object的键的范围只能是字符串，而map的键可以使各种类型的值，包括对象都可以当做键，也就是说普通的对象提供了字符串到值的对应关系，而map数据结构则提供了值到值的对应，是一种更加完善的hash结构实现。

