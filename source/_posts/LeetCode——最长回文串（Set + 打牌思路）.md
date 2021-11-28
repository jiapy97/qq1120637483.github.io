---
title: LeetCode——最长回文串（Set + 打牌思路）
date: 2021-11-28
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---

## 题目描述

![image.png](https://img-blog.csdnimg.cn/img_convert/67d3f6fdf5e4fad1a0ea1d72114492c5.png)

## 解题思路
>这道题和最长回文子串有本质不同，这道题相当于给我们一个字符串，让我们根据这个字符串来自己组合最长回文串，我第一次尝试解决这个问题的时候，采用的是Map的思路，但是需要考虑很多种情况，后来看到使用Set+打牌思路的题解，感觉甚是巧妙，特此分享给大家。

1. 创建一个Set。
2. 遍历每一个字符，如果这个字符出现在了集合中，则将这个字符从集合中删去，并且给sum+2，表示这个字符出现过两次，如果这个字符没有出现在集合中，则将其添加到集合中去。
3. 最后判断集合中是否还有元素，有则给结果+1，没有则返回结果。

```js
var longestPalindrome = function(s) {
  // 通过Set实现打牌的思路
  const set = new Set();
  let sum = 0;
  for (let v of s.split('')) {
    if (set.has(v)) {
      sum = sum + 2;
      set.delete(v);
    } else {
      set.add(v);
    }
  }
  sum = set.size ? sum + 1 : sum;
  return sum;
};
```

## 题目反思
>解决一个题目的方法往往不止一种，我们可以首先使用自己的思路来解决，解决后和别人较为优秀的题解进行对比，学习别人优秀的思路，本题就是一个很好的例子，通过Set结合打牌的思路确实较为精简，也方便我们去记忆，所谓的打牌思路，就是我们每抽到一张牌，如果手中已经有了和这张牌一样的牌，就将这两张牌打出去，放到题目中，也就是sum+2,没有这张牌则放到手中，最后如果手中还有牌就将结果+1。

* 集合Set的常用API包括size、delete、add等需要我们掌握。