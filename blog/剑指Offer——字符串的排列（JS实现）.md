---
title: 剑指Offer——字符串的排列（JS实现）
date: 2021-05-02
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/9e2e8e9cb30f9a13424bac26b6ccc3f8.png)

## 解题思路
* 这道题属于考查DFS（深度优先遍历）
* 和本道题几乎完全一样的有全排列问题，都是在考查DFS
* DFS的本质就是递归
* 本题通过设置一个和字符串长度一致的一维数组，用来表示该元素是否被遍历过，初始值全为false表示都没有被遍历过
 * 当dfs收到的参数的长度和输入s的长度一致时，说明一条路径已经遍历完了，然后开始存储并返回

## 解题代码
```js
var permutation = function(s) {
    const trace = [];
    const res = [];
    for (let i = 0; i < s.length;i++) {
        trace[i] = false;
    }

    function dfs(str) {
        if (str.length === s.length) {
            res.push(str);
            return;
        }
        for (let i = 0;i < s.length;i++) {
            if (trace[i] === true) continue;
            trace[i] = true;
            dfs(str + s[i]);
            trace[i] = false;
        } 
    }
    dfs('');
    return [...new Set(res)];
};
```
## 实现效果
![](https://img-blog.csdnimg.cn/img_convert/18d4c2a4eeb239d2d20c2ae8d7cff9c3.png)

## 总结（本题给我们的启示思路）
* 启示一：学会使用DFS
* 启示二：通过设置一个同纬度的布尔值数组来表示该位置的元素是否被遍历过
* 启示三；学会通过集合对数组重复元素进行去重
