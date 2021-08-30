---
title: 剑指Offer——n个骰子的点数（JS实现）
date: 2021-05-03
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/315c0fa35847c55cad64c3df5940ae6f.png)

## 解题思路
* 本题可以通过递归的形式进行解决，也可以采用动态规划
* 核心就在于理解题意，找到骰子数和这些骰子数和的关系

## 核心公式（这个不好解释，关键在于理解代码）
$n个骰子的所有结果的总数 = （这个骰子是1 - 6） + (n-1)个骰子是（和-（1-6））的所有结果的和$

## 解题代码
```js
var dicesProbability = function (n) {
    // n个骰子的点数之和的范围是[n,6n]
    // 返回的最终结果数组的分母是6的n次方
    const total = Math.pow(6, n);
    const result = [];
    // 创建一个哈希表，用来存储第n个骰子前一个骰子 目标和 的总数
    const m = new Map();
    for (let i = n; i <= 6 * n; i++) {
        // 下面的s指的是
        const denominator = helper(i, n);
        // 将每一个结果分别加到最终的结果中
        result.push(denominator / total);
    }

    function helper(count, n) {
        // 首先判断哈希表中是否有记录 n-1 个骰子目标和的总数
        let key = `和：${count}-骰子数：${n}`;
        if (m.has(key)) {
            return m.get(key);
        }

        if (count < n || count > 6*n) {
            return 0;
        }
        if (n === 1) {
            return 1;
        }
        let res = 0;
        // 递归求解：求目标骰子数指定和的可能值的数量，就是求目标骰子数-1，当前和减去1-6的所有的可能性 然后进行求和
        for (let i = 1; i <= 6; i++) {
            res = res + helper(count - i,n-1,m);
        }
        m.set(key,res);
        return res;
    }
    return result;
};
```
## 总结（本题给我们的启示思路）
* 启示一：学会使用递归求解
* 启示二：准确理解骰子数和前一个骰子数与和之间的关系，是解题关键
* 启示三：学会运用哈希表
