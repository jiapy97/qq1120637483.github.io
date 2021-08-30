---
title: HOT100——括号生成（JS实现）
date: 2021-06-11
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![image.png](https://img-blog.csdnimg.cn/img_convert/224fe661d8d7cd2d4f092308a3857393.png)

## 解题思路
1. 本题采用DFS的思想。
2. 只要有左括号剩余的时候，就将左括号剩余数量-1，然后继续投入DFS。
3. 当左括号的长度小于有括号的长度时，将右括号剩余数量-1，然后继续投入DFS。

## 实现代码
```js
var generateParenthesis = function(n) {
    // 定义最终返回的结果
    const res = [];
    dfs(n,n,'');
    // dfs函数
    function dfs(Lremain,Rremain,str) {
        // 如果str参数的长度等于2n，说明递归结束了
        if (str.length === 2*n) {
            res.push(str);
            return;
        }
        // 如果左括号剩余的多，将左括号放入递归
        if (Lremain > 0) {
            dfs(Lremain-1,Rremain,str+'(')
        }
        if (Lremain < Rremain) {
            dfs(Lremain,Rremain-1,str+')')
        }
    }
    return res;
};
```
## 启示
学会使用DFS的相关思想，来解决遍历所有情况的问题。

## 参考题解
https://leetcode-cn.com/problems/generate-parentheses/solution/shou-hua-tu-jie-gua-hao-sheng-cheng-hui-su-suan-fa/

