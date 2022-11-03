---
title: LeetCode——左旋转字符串
date: 2021-03-24
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/a98d9b41600675ceed6f7fc4eee6818f.png)
## 解题思路
1. 首先将字符串转为字符数组。
2. 定义两个临时数组，一个存放分割前的数组，一个存放分割后的数组。
3. 依次遍历字符数组，如果索引下标+1小于等于n，则将其加入分割前的数组，反之加入分割后的数组。
4. 使用拓展运算符合并两个数组。
5. 使用for of循环将数组中的所有元素合并成字符串进行返回。

## 实现代码
```js
var reverseLeftWords = function (s, n) {
    let temp = [];
    for(let v of s) {
        temp.push(v);
    }
    let temp2 = [];
    let temp3 = [];
    temp.some((value,index) => {
        if ((index + 1) <= n) {
            temp2.push(value);
        } else {
            temp3.push(value);
        }
    });
    const merge = [...temp3,...temp2];
    let str = '';
    for(let v of merge) {
        str = str + v;
    }
    return str;
};
```