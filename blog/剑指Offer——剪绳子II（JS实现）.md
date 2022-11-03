---
title: 剑指Offer——剪绳子II（JS实现）
date: 2021-05-21
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/aa3025f79bc112bb9f334d442bd8692c.png)

## 解题思路
* 本题与《剪绳子I》这个题目本质是一样的，但是区别在于，本题加大了数字范围需要对答案进行取模1000000007，但是我们在调用Math.max函数的时候，里面不能有BigInt类型，所以我们必须自己实现Max函数，本题采用的是排序的方式求出最大值，但是排序的写法有讲究，具体看下面的解题代码

## 解题代码
```js
var cuttingRope = function(n) {
    // 本题可以采用动态规划的思想
    // 动态规划的结束条件是dp[2] = 1  代表的含义是长度为2的绳子剪成几段后最大乘积是1
    // 本题有个默认条件：就是 输入的n是大于等于2的
    const dp = new Array(n + 1);
    dp.fill(BigInt(1));
    for (let i = 3; i < dp.length;i++) {
        for (let j = 1; j < i;j++) {
            dp[i] = max(dp[i],BigInt(j*(i-j)),BigInt(j)*dp[i-j]);
        }
    }
    return dp[n] % 1000000007n
    function max(...args) {
        args.sort((a, b) => (a < b) ? -1 : ((a > b) ? 1 : 0));
        return args[2];
    }
};
```
## 总结（本题给我们的启示思路）
* 学会通过动态规划的思想解决剪绳子的问题。
* 学会使用BigInt。
* 学会使用sort比较大小的方式进行排序。

## 参考文献
[剑指Offer——剪绳子（JS实现）](https://juejin.cn/post/6954166487938498590)

