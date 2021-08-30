---
title: HOT100——电话号码的字母组合（JS实现）
date: 2021-06-06
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/a2372e2a19aaa2917c9d41bf4a1a093d.png)

## 解题思路
* 本题采用的是DFS的解题思路。
* 本题的特点在于递归中有循环。
* DFS函数接收两个参数，一个是当前字符串，一个是指针，当指针超过了digits的长度的时候，说明可以存储并返回了，然后上一层循环继续遍历下一个字符，真的很奇妙。

## 解题代码
```js
var letterCombinations = function(digits) {
    // 边界条件
    if (digits === '') return [];
    // 构建2-9对应字符的哈希表
    const m = new Map();
    m.set('2','abc');
    m.set('3','def');
    m.set('4','ghi');
    m.set('5','jkl');
    m.set('6','mno');
    m.set('7','pqrs');
    m.set('8','tuv');
    m.set('9','wxyz');
    
    // 定义返回的数组
    const res = [];
    // 使用DFS的思想
    function dfs(str,pointer) {
        // 递归的结束条件
        if (pointer > digits.length-1) {
            res.push(str);
            return;
        }
        let letters = m.get(digits[pointer]);
        for (let v of letters) {
            dfs(str + v,pointer + 1);
        }
        return;
    }
    dfs('',0)
    return res
};
```
## 启示
* 学会DFS的思想。
* 在DFS中加入循环是解决这类问题的好方法。

## 参考链接
https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/solution/shou-hua-tu-jie-liang-chong-jie-fa-dfshui-su-bfsya/