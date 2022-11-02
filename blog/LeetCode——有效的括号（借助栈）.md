---
title: LeetCode——有效的括号（借助栈）
date: 2021-10-15
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---
## 题目描述

![image.png](https://img-blog.csdnimg.cn/img_convert/3dae1e003683aebeddb9ab52e8326d10.png)

## 解题思路
>本题的核心解题思路在于借助栈。

1. 首先，定义一个栈。
2. 遍历字符串中的每一个元素，如果该元素是左括号，不管是哪一种类型的左括号都直接入栈。
3. 如果遇到的是右括号，首先判断栈中是否有元素，如果没有元素则直接返回false，如果有元素，则判断是否是一对有效的括号，如果无效则返回false。
4. 循环完成之后，判断栈中是否还有元素，如果没有则返回true,反之返回false。

## AC代码
```js
var isValid = function(s) {
  // 本题使用栈的思想进行求解，思路较为简单
  // 首先定义一个栈
  let stack = [];
  // 遍历s的每一个元素
  for (let i = 0;i < s.length; i++) {
    // 如果是左括号，则直接入栈
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i]);
    } else {
      // 能够走到这里说明不是左括号
      // 如果遇到一个右括号并且此时栈为空，说明这个不是有效的括号，可以直接返回false 
      if (stack.length === 0) return false;
      // 如果栈不为空
      // 获取栈顶元素
      let stackTop = stack[stack.length-1];
      if ((stackTop === '(' && s[i] === ')') || (stackTop === '[' && s[i] === ']') || (stackTop === '{' && s[i] === '}')) {
        stack.pop();
      } else {
        return false
      }
    }
  }
  // 遍历完成后，如果最后栈为空说明是有效的阔含，反之说明不是有效的括号
  if (stack.length === 0) {
    return true 
  } else {
    return false
  }
};
```

## 题目反思
* 学会使用栈来解决有效的括号这类问题。
