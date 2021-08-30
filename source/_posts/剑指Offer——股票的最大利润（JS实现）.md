---
title: 剑指Offer——股票的最大利润（JS实现）
date: 2021-04-19
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/dc0317bb42e5f662a2ba8f1235c4cce8.png)

## 解题思路
* 首先定义一个数组用来存储当天之后股票的价格-今天的价格的最大值
* 遍历每一个元素的同时，取出剩余元素
* 使用JS自带的sort方法，将剩余元素的最大值取出来，然后存到结果数组中
* 使用sort方法将结果数组中的最大值进行返回即可

## 解题代码
```js
var maxProfit = function (prices) {
    if (prices.length === 0) return 0;
    const result = [];
    for (let i = 0; i < prices.length; i++) {
        const remain = prices.slice(i + 1);
        const remainMax = remain.sort((num1,num2) => num2 - num1)[0];
        if (remainMax === undefined) {
            result.push(0);
        } else {
            result.push(remainMax - prices[i]);
        }
        
    };
    result.sort((num1,num2) => num2 - num1);

    return result[0];

};
```
## 总结
* 本题属于较为简单动态规划问题
* 最容易出错的地方在于超时了
* 本题给出的不是最优解，只是作者的个人思路
* 本题可以通过在遍历每个元素的时候，不断更新最大值和最小值的方法，来求解
