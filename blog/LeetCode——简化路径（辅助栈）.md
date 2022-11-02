---
title: LeetCode——简化路径（辅助栈）
date: 2022-05-04
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---

## 题目描述

![image.png](https://img-blog.csdnimg.cn/img_convert/d6998e5f8fe46337381fd42da9b5b704.png)

![image.png](https://img-blog.csdnimg.cn/img_convert/0deb816c63a7f7e4bb2fab67be09e1ef.png)

## 解题思路
> 核心的解题思路就是借助一个栈来辅助我们，遇到空字符串和一个点的则跳过，遇到两个点的则出栈。

![image.png](https://img-blog.csdnimg.cn/img_convert/0bada2ad5f44676be9bdaf4db4c83ca4.png)

## AC代码

```js
var simplifyPath = function(path) {
    // 简化路径的核心就是借助辅助栈
    const stack = [];
    // 分割字符串
    const strArr = path.split('/');
    // 遇到空字符串和一个点的直接跳过
    // 遇到两个点则出栈
    const res = [];
    for (let v of strArr) {
        if (v.length === 0 || v === '.') {
            continue;
        }
        if (v === '..') {
            stack.pop();
            continue;
        }
        stack.push(v);
    }
    for (let i = 0; i < stack.length; i++) {
        res.push('/');
        res.push(stack[i]);
    }
    return res.length > 0 ? res.join('') : '/'
};
```

## 总结
> 简化路径的本质就是借助栈这个数据结构的特点对不同的情况进行出栈和入栈，最后返回的就是路径的简化结果，遇到空字符串和一个点的都跳过，遇到两个点的则出栈是本题的核心。