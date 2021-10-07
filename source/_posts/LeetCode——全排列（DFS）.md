---
title: LeetCode——全排列（DFS）
date: 2021-10-7
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---
>全排列是DFS的经典应用，无论是在平时的工作中还是在面试中，都是经常被问到的考点，接下来让我们一起来探究这个问题吧。

## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/adec1fb58b1dd57795bdcbb351eff742.png)

## 解题思路
>本题的核心解题思路就是使用DFS(深度优先遍历),遍历完一条路径然后再去遍历另一条路径，通过使用一个used对象来记录目标元素是否被遍历过，来实现DFS。

```js
var permute = function(nums) {
    const result = [];
    const used = {};
    
    function dfs(paths) {
        if (paths.length === nums.length) {
            result.push(paths.slice());
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) {
                continue;
            }
            paths.push(nums[i]);
            paths
            used[i] = true;
            dfs(paths);
            paths.pop();
            used[i] = false;
        }
    }
    
    dfs([])
    return result;
};
```

## 题目反思
* DFS实现的核心在于使用一个对象来记录目标元素是否遍历过。
* dfs遍历完一条路径之后，需要将路径数组中去掉栈顶元素，然后将该元素置未遍历状态。

