---
title: 剑指Offer——数字序列中某一位的数字（JS实现）
date: 2021-05-17
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/8661736a565a732556d287cf5baf35b3.png)

## 解题思路（数学规律）
* 本题主要是寻找数学规律，通过暴力的方法肯定是超时的，下面就简单介绍下本题的解题思路，我认为核心还是在于理解将字符串拆分为不同位数的区间。
1. 首先判断n在哪一个区间，区间的划分按照 1 - 9，10-99，100-999...
2. 计算下标n在当前区间的哪一个
3. 求出n下标对应的真实的数字
4. 求出该真实数字的哪一位是我们最终要返回的结果

## 公式

$$
n下标对应的真实数字 = 区间起始值 + （区间第几个 - 1） / 第几个区间
$$
$$
真实数字的哪一位 = （区间第几个 - 1）\%  第几个区间取余
$$

## 解题代码
```js
var findNthDigit = function(n) {
    // 这里的n是下标
    // 如果下标小于10，直接返回n即可
    if (n < 10) {
        return n;
    }
    // 走到这里，说明n大于等于10，如果大于等于10，则要首先判断在下标n在哪个区间
    let numInterval = 0;
    for (let i = 1; i < 100; i++) {
        if ((n - 9) < 9 * Math.pow(10,i) * (i+1)) {
            numInterval = i+1;
            break;
        } 
    }
    // 计算下标n  在当前区间的第几个  
    for (let i = 0; i < numInterval-1; i++) {
        n = n - 9 * (10 ** i) * (i+1);
    }
    // n所指向的下标对应的真实的数字 = 区间起始值 + （区间第几个 - 1） / 第几个区间
    const trueNum = 10 ** (numInterval - 1) + parseInt( (n - 1) / numInterval )
    // 真实的数字可能是一个多位数，但是题目要求返回的是下标指向的一个数字，所以下标指向的一个数字就是 
    // (区间第几个 - 1) % 第几个区间
    const numIndex = (n - 1) % numInterval;
    return String(trueNum)[numIndex]
};
```
## 总结（本题给我们的启示思路）
* 启示：学会通过数学规律来求解问题

