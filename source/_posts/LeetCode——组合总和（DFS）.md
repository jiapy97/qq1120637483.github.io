---
title: LeetCode——组合总和（DFS）
date: 2021-12-13
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---

## 题目描述

![image.png](https://img-blog.csdnimg.cn/img_convert/4b8de592a62bc4f504e6e75f90543c37.png)

## 解题思路
>DFS是解决这道题的核心思路，DFS函数总共接收三个参数。

* 第一个参数是遍历的起始位置，这个参数存在的意义在于防止重复遍历，只添加这个元素后面的元素，这个元素前面的不再遍历。
* 第二个参数是临时数组，用来记录一次遍历的数组。
* 第三个参数是临时数组内的和。

>边界条件是如果临时和大于等于target则继续判断，如果等于则存储，不等于则返回。

```js
var combinationSum = function(candidates, target) {

  const res = [];

  function dfs(start,temp,sum) {
    if (sum >= target) {
      if (sum === target) {
        res.push(temp.slice());
      }
      return;
    }
    for (let i = start; i < candidates.length ;i++) {
      temp.push(candidates[i]);
      dfs(i,temp,sum + candidates[i]);
      temp.pop();
    }
  }

  dfs(0,[],0);

  return res;
};
```

## 题目反思
>DFS是一类题目的思想，我们要想彻底掌握这类题目，一定要多做相关的题目，然后进行总结，类似的经典题目有全排列、组合总和等。
