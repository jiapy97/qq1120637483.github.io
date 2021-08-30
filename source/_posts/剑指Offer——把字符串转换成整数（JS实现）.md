---
title: 剑指Offer——把字符串转换成整数（JS实现）
date: 2021-05-22
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/c1b8cdb5f387c1df1b57be5f273e577a.png)
![](https://img-blog.csdnimg.cn/img_convert/57ed40cded6e61d71a19375ca13fc093.png)

## 解题思路
* 本题需要考虑的一是数值是由范围的，其次就是正则表达式怎么写，当然本题也可以不使用正则表达式，但是本次题解采用的是正则，因为这样简单易懂。
1. 首先去除字符串两侧的空格。
2. 使用正则表达式匹配出带正负号或者不带的数字部分。
3. 判断匹配的是否存在，存在就继续判断是否在数值范围内，反之则返回0。

## 解题代码
```js
var strToInt = function(str) {
    // 首先去除字符串两侧空格
    str = str.trim();
    // 使用正则表达式匹配出数字部分
    let num = str.match(/^[+-]?\d+/);
    if (!num) {
        return 0;
    } else {
        num = num[0];
    }
    // 确定数值范围的最大值和最小值
    const min = - (2 ** 31);
    const max = (2 ** 31) - 1;
    // 判断num是否超出数值范围
    return num < min ? min : num > max ? max : num;
};
```
## 总结（本题给我们的启示思路）
* 学会去除字符串两侧的空格，trim这个API不会对原字符串产生影响。
* 学会使用正则表达式。
* 学会通过三目运算符进行连续的判断。


