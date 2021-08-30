---
title: 罗马数字转换器（FreeCodeCamp）
date: 2021-07-05
categories: FreeCodeCamp
tags: 
- FreeCodeCamp
---
## 题目描述
![image.png](https://img-blog.csdnimg.cn/img_convert/38ebc497a82f40359c291f88035aa66c.png)

## 测试实例
![](https://img-blog.csdnimg.cn/img_convert/4937ecb91076dca85bbe7556caae49ce.png)

## 解题思路
* 构造罗马数字和整数的基本元素对应哈希表
* 将目标整数依次除以哈希表的每一个元素，并向下取整，如果取整后结果大于0，则拼接上述结果个数个罗马数字，然后对哈希表中的对应整数取余赋值给num
* 如何构造这个哈希表是本题的关键难点。

## 解题代码
```js
function convertToRoman(num) {
    const map = new Map([['M',1000],['CM',900],['D',500],['CD',400],['C',100],['XC',90],['L',50],['XL',40],['X',10],['IX',9],['V',5],['IV',4],['I',1]]);
    let result = '';
    for (let v of map) {
        const temp = parseInt(num/v[1],0);
        if (temp > 0) {
            for (let i = 0; i < temp; ++i) {
                result += v[0]
            }
        }
        num = num % v[1]
    }
    return result
}

convertToRoman(44);
```
## 启示
* 学会使用parseInt向下取整