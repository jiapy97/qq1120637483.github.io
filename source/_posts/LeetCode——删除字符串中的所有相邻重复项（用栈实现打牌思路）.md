---
title: LeetCode——删除字符串中的所有相邻重复项（用栈实现打牌思路）
date: 2022-01-09
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---

## 题目描述
> 这道题从题目的名字上看是删除字符串中的所有相邻重复项，其实通俗的讲就是消消乐的思想，有两个相邻一致的则消除，消除一对后如果还有则继续消除。

![image.png](https://img-blog.csdnimg.cn/img_convert/1c93b04a44fb6e3fa5c8610bf2cc2c7a.png)

## 解题思路
> 本题的实现可以使用打牌思路，类似题目有最长回文串，这道题目是使用集合来实现打牌思路，但是本题是通过栈来实现打牌思路，首先遍历每一个字符，如果栈中有元素，且栈的最后一个元素和这个元素的值相等，则栈进行pop，反之push进栈，最后返回栈对应的字符串。

```js
var removeDuplicates = function(s) {
  // 这道题目的思想类似于打牌的思路，区别在于本题是通过栈来实现打牌思路
  // 有机会可以将这道题目和最长回文串这道题目进行归纳总结
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack.length && stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.join('');

};
```

## 题目反思
> 使用打牌思路来解决问题已经不是一次出现了，也是面试官常考的题目，但是却不容易被想到，因此我们可以通过归纳总结的方式来对这类题目进行记忆。
