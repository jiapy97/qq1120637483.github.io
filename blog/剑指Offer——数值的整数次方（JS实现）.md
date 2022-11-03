---
title: 剑指Offer——数值的整数次方（JS实现）
date: 2021-05-20
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/e6fe46193d5dd219ddd4ffff8fa39071.png)

## 解题思路
* 本题核心： 当n为奇数和偶数时两种情况的讨论，同时要注意n为0、负数是的情况。
- 情况1： (2,4) = (2,2) * (2,2)
- 情况2：(2,5) = (2,2) * (2,2) * 2
* 具体详尽思路请看注释

## 解题代码
```js
var myPow = function(x, n) {
    
    // !本题核心： 当n为奇数和偶数时两种情况的讨论
    // 情况1： (2,4) = (2,2) * (2,2)
    // 情况2：(2,5) = (2,2) * (2,2) * 2
    // 首先n是有可能为0，正，负数的
    if (n === 0) return 1;
    // 无论正负数我们都先将其转换为正数计算
    const res = dfs(x,Math.abs(n));

    if (n > 0) {
        return res;
    } else {
        return 1/res;
    }

    function dfs(x,n) {
        // 递归的结束条件
        if (n === 1) {
            return x;
        }
        let temp = dfs(x,Math.floor(n/2));

        return n % 2 ? (x * temp * temp) : (temp * temp)
    }
}
```
## 总结（本题给我们的启示思路）
* 学会通过递归找到幂指数运算之间的规律。

